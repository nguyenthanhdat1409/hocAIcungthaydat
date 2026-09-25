-- ============================================================
--  WEB AI — TIEN DO RIENG (tach khoi mon Tieng Viet)
--  Chay 1 LAN, TU TREN XUONG: Supabase -> SQL Editor -> Run
--  XP/streak cua web AI luu o bang ai_progress rieng, KHONG dung chung
--  student_progress cua Tieng Viet. quiz_results van ghi chung (co cot subject).
--  An toan: chi THEM/OR REPLACE, khong pha du lieu cu.
-- ============================================================

-- 1) Gan "mon hoc" vao cac bang hoat dong san co (mac dinh 'tiengviet')
alter table public.study_sessions  add column if not exists subject text not null default 'tiengviet';
alter table public.activity_events add column if not exists subject text not null default 'tiengviet';
alter table public.quiz_results    add column if not exists subject text not null default 'tiengviet';
create index if not exists idx_quiz_student_subj_day on public.quiz_results(student_id, subject, day);

-- 2) Bang TIEN DO RIENG cho mon AI
create table if not exists public.ai_progress (
  student_id    uuid primary key references public.profiles(id) on delete cascade,
  xp            int   not null default 0,
  streak        int   not null default 0,
  last_active   date,
  lessons       jsonb not null default '[]'::jsonb,   -- ma bai AI da hoc
  total_quizzes int   not null default 0,
  quiz_high     int   not null default 0,
  total_stars   int   not null default 0,
  updated_at    timestamptz not null default now()
);
alter table public.ai_progress enable row level security;
drop policy if exists "ai_progress_own" on public.ai_progress;
create policy "ai_progress_own" on public.ai_progress for all
  using (student_id = auth.uid() or public.is_teacher())
  with check (student_id = auth.uid());

-- 3) RPC ai_record: cong XP/streak/bai/quiz vao ai_progress (chi mon AI)
-- Drop ban cu (neu truoc do tra ve kieu khac) de tranh loi "cannot change return type"
drop function if exists public.ai_record(int, text, boolean, int, int, int);
create or replace function public.ai_record(
  p_xp        int     default 0,     -- XP cong don (bai tap/kiem tra)
  p_lesson    text    default null,  -- ma bai AI, vd 'ai:1.2.3'
  p_quiz      boolean default false, -- 1 luot quiz (tang total_quizzes)
  p_percent   int     default null,  -- cap nhat quiz_high
  p_stars     int     default 0,     -- cong vao total_stars
  p_lesson_xp int     default 0      -- XP thuong khi HOC BAI MOI (chi lan dau)
) returns public.ai_progress
language plpgsql security definer set search_path = public as $$
declare
  today date := (now() at time zone 'Asia/Ho_Chi_Minh')::date;
  r public.ai_progress;
  add_xp int := greatest(coalesce(p_xp,0),0);
begin
  insert into public.ai_progress(student_id) values (auth.uid()) on conflict (student_id) do nothing;
  select * into r from public.ai_progress where student_id = auth.uid();

  -- bai moi: them vao lessons + thuong XP (chi lan dau)
  if p_lesson is not null and not (r.lessons ? p_lesson) then
    r.lessons := r.lessons || to_jsonb(p_lesson);
    add_xp := add_xp + greatest(coalesce(p_lesson_xp,0),0);
  end if;

  -- streak theo ngay
  if r.last_active is distinct from today then
    if r.last_active = today - 1 then r.streak := r.streak + 1; else r.streak := 1; end if;
    r.last_active := today;
  end if;

  r.xp := r.xp + add_xp;

  if p_quiz then
    r.total_quizzes := r.total_quizzes + 1;
    if p_percent is not null and p_percent > r.quiz_high then r.quiz_high := p_percent; end if;
  end if;
  if coalesce(p_stars,0) > 0 then r.total_stars := r.total_stars + p_stars; end if;

  update public.ai_progress set
    xp=r.xp, streak=r.streak, last_active=r.last_active, lessons=r.lessons,
    total_quizzes=r.total_quizzes, quiz_high=r.quiz_high, total_stars=r.total_stars, updated_at=now()
  where student_id = auth.uid();
  return r;
end;
$$;

-- 4) (Tuy chon) VIEW dashboard theo mon
create or replace view public.daily_summary_by_subject as
select p.id as student_id, p.display_name, p.class_code,
       q.subject, q.day, count(*) as quizzes,
       max(q.percent) as best_percent, max(q.stars) as best_stars
from public.profiles p
join public.quiz_results q on q.student_id = p.id
where p.role = 'student'
group by p.id, p.display_name, p.class_code, q.subject, q.day;

-- ============================================================
--  XONG. Kiem tra khi da dang nhap:  select * from public.ai_record(10, 'ai:1.1.1', true, 80, 2, 10);
--  (Neu truoc do da tao bang gamification/lesson_progress thi cu de yen, khong dung nua.)
-- ============================================================
