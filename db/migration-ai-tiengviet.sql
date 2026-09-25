-- ============================================================
--  KET HOP AI + TIENG VIET tren CUNG 1 tai khoan (Supabase)
--  Chay 1 LAN, TU TREN XUONG, trong: Supabase -> SQL Editor -> Run
--  An toan: chi THEM, khong pha du lieu cu (mac dinh subject = 'tiengviet').
--  (Chay lai nhieu lan cung khong sao - da dung IF NOT EXISTS / OR REPLACE.)
-- ============================================================

-- 1) Gan "mon hoc" vao cac bang hoat dong san co
alter table public.study_sessions  add column if not exists subject text not null default 'tiengviet';
alter table public.activity_events add column if not exists subject text not null default 'tiengviet';
alter table public.quiz_results    add column if not exists subject text not null default 'tiengviet';

create index if not exists idx_quiz_student_subj_day   on public.quiz_results(student_id, subject, day);
create index if not exists idx_events_student_subj_day on public.activity_events(student_id, subject, day);

-- 2) TIEN DO THEO TUNG BAI (AI co 192 bai; Tieng Viet dung chung duoc)
create table if not exists public.lesson_progress (
  id            bigserial primary key,
  student_id    uuid not null references public.profiles(id) on delete cascade,
  subject       text not null default 'ai',
  lesson_code   text not null,
  stars         int  not null default 0,
  score_percent int,
  updated_at    timestamptz not null default now(),
  unique (student_id, subject, lesson_code)
);
alter table public.lesson_progress enable row level security;
drop policy if exists "lesson_progress_own" on public.lesson_progress;
create policy "lesson_progress_own" on public.lesson_progress for all
  using (student_id = auth.uid() or public.is_teacher())
  with check (student_id = auth.uid());

-- 3) GAMIFICATION DUNG CHUNG ca 2 mon (streak / XP / huy hieu)
create table if not exists public.gamification (
  student_id  uuid primary key references public.profiles(id) on delete cascade,
  xp          int  not null default 0,
  streak_days int  not null default 0,
  last_active date,
  badges      jsonb not null default '[]'::jsonb,
  updated_at  timestamptz not null default now()
);
alter table public.gamification enable row level security;
drop policy if exists "gam_own" on public.gamification;
create policy "gam_own" on public.gamification for all
  using (student_id = auth.uid() or public.is_teacher())
  with check (student_id = auth.uid());

-- 4) RPC: cap nhat streak/XP + ghi 1 phien hoc (atomic, goi tu client)
create or replace function public.cloud_touch(p_xp int default 0, p_subject text default 'ai', p_seconds int default 0)
returns table(xp int, streak_days int, last_active date)
language plpgsql security definer set search_path = public as $$
declare
  today date := (now() at time zone 'Asia/Ho_Chi_Minh')::date;
  prev  date;
begin
  insert into public.gamification(student_id) values (auth.uid()) on conflict (student_id) do nothing;
  select g.last_active into prev from public.gamification g where g.student_id = auth.uid();

  update public.gamification g set
    xp          = g.xp + greatest(coalesce(p_xp, 0), 0),
    streak_days = case
                    when prev = today     then g.streak_days
                    when prev = today - 1 then g.streak_days + 1
                    else 1
                  end,
    last_active = today,
    updated_at  = now()
  where g.student_id = auth.uid();

  insert into public.study_sessions(student_id, subject, ended_at, duration_sec)
  values (auth.uid(), p_subject, now(), greatest(coalesce(p_seconds, 0), 0));

  return query
    select g.xp, g.streak_days, g.last_active
    from public.gamification g
    where g.student_id = auth.uid();
end;
$$;

-- 5) VIEW dashboard: tong hop theo NGAY + MON cho moi HS
create or replace view public.daily_summary_by_subject as
select p.id as student_id, p.display_name, p.class_code,
       q.subject, q.day, count(*) as quizzes,
       max(q.percent) as best_percent, max(q.stars) as best_stars
from public.profiles p
join public.quiz_results q on q.student_id = p.id
where p.role = 'student'
group by p.id, p.display_name, p.class_code, q.subject, q.day;

-- ============================================================
--  XONG. Kiem tra nhanh (tuy chon):
--    select * from public.lesson_progress limit 1;
--    select public.cloud_touch(10, 'ai', 60);   -- can dang nhap moi chay
-- ============================================================
