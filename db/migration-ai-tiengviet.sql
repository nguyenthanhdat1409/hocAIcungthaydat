-- ============================================================
--  KET HOP AI + TIENG VIET tren CUNG 1 tai khoan (Supabase)
--  Chay 1 LAN, TU TREN XUONG: Supabase -> SQL Editor -> Run
--  DA CHINH cho khop schema that cua "hoctiengvietcungthaydat"
--  (nguon chinh la bang student_progress.data jsonb).
--  An toan: chi THEM/OR REPLACE, khong pha du lieu cu.
-- ============================================================

-- 1) Gan "mon hoc" vao cac bang hoat dong san co (mac dinh 'tiengviet')
alter table public.study_sessions  add column if not exists subject text not null default 'tiengviet';
alter table public.activity_events add column if not exists subject text not null default 'tiengviet';
alter table public.quiz_results    add column if not exists subject text not null default 'tiengviet';

create index if not exists idx_quiz_student_subj_day   on public.quiz_results(student_id, subject, day);
create index if not exists idx_events_student_subj_day on public.activity_events(student_id, subject, day);

-- 2) RPC ai_record: gom hoat dong (XP, streak, bai da hoc, quiz) vao
--    student_progress.data — NGUON CHINH cua dashboard & trang chu (dung chung 2 mon).
--    Goi tu client sau khi HS xong bai/quiz (security definer -> ghi cho auth.uid()).
create or replace function public.ai_record(
  p_xp        int     default 0,     -- XP cong don (bai tap/kiem tra)
  p_lesson    text    default null,  -- ma bai AI, vd 'ai:1.2.3'
  p_quiz      boolean default false, -- 1 luot quiz (tang totalQuizzes)
  p_percent   int     default null,  -- cap nhat quizHighScore
  p_stars     int     default 0,     -- cong vao totalStars
  p_lesson_xp int     default 0      -- XP thuong khi HOC BAI MOI (chi tinh lan dau)
) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  today text := ((now() at time zone 'Asia/Ho_Chi_Minh')::date)::text;
  yday  text := (((now() at time zone 'Asia/Ho_Chi_Minh')::date) - 1)::text;
  d jsonb;
  last_day text;
  st int;
  add_xp int := greatest(coalesce(p_xp,0),0);
begin
  insert into public.student_progress(student_id, data, updated_at)
    values (auth.uid(), '{}'::jsonb, now())
    on conflict (student_id) do nothing;

  select coalesce(data, '{}'::jsonb) into d
    from public.student_progress where student_id = auth.uid();

  -- bai da hoc: chi them + thuong XP khi la bai MOI
  if p_lesson is not null and not (coalesce(d->'lessonsViewed','[]'::jsonb) ? p_lesson) then
    d := jsonb_set(d, '{lessonsViewed}', coalesce(d->'lessonsViewed','[]'::jsonb) || to_jsonb(p_lesson));
    add_xp := add_xp + greatest(coalesce(p_lesson_xp,0),0);
  end if;

  -- XP cong don
  d := jsonb_set(d, '{xp}', to_jsonb(coalesce((d->>'xp')::int, 0) + add_xp));

  -- streak theo ngay (khoa 'lastActive' + 'streak')
  last_day := d->>'lastActive';
  st := coalesce((d->>'streak')::int, 0);
  if last_day is distinct from today then
    if last_day = yday then st := st + 1; else st := 1; end if;
    d := jsonb_set(d, '{streak}', to_jsonb(st));
    d := jsonb_set(d, '{lastActive}', to_jsonb(today));
  end if;

  -- thong ke quiz
  if p_quiz then
    d := jsonb_set(d, '{totalQuizzes}', to_jsonb(coalesce((d->>'totalQuizzes')::int,0) + 1));
    if p_percent is not null and p_percent > coalesce((d->>'quizHighScore')::int, 0) then
      d := jsonb_set(d, '{quizHighScore}', to_jsonb(p_percent));
    end if;
  end if;
  if coalesce(p_stars,0) > 0 then
    d := jsonb_set(d, '{totalStars}', to_jsonb(coalesce((d->>'totalStars')::int,0) + p_stars));
  end if;

  update public.student_progress set data = d, updated_at = now() where student_id = auth.uid();
  return d;
end;
$$;

-- 3) (Tuy chon) VIEW dashboard tach theo mon
create or replace view public.daily_summary_by_subject as
select p.id as student_id, p.display_name, p.class_code,
       q.subject, q.day, count(*) as quizzes,
       max(q.percent) as best_percent, max(q.stars) as best_stars
from public.profiles p
join public.quiz_results q on q.student_id = p.id
where p.role = 'student'
group by p.id, p.display_name, p.class_code, q.subject, q.day;

-- ============================================================
--  XONG. Luu y:
--   • Neu truoc do da chay ban migration cu (tao bang gamification /
--     lesson_progress) thi cu de yen — khong dung nua, khong sao.
--   • KIEM TRA nhanh khi da dang nhap:  select public.ai_record(10, 'ai:1.1.1', true, 80, 2);
-- ============================================================
