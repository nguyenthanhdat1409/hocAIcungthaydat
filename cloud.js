/* =========================================================
   cloud.js — Cầu nối Supabase cho web AI (DÙNG CHUNG hệ Tiếng Việt)
   ---------------------------------------------------------
   • CHỈ ĐĂNG NHẬP (tài khoản tạo ở web Tiếng Việt / do Thầy cấp qua
     Netlify function + secret key). Web AI KHÔNG đăng ký client-side.
   • HS: username + PIN  -> email tổng hợp <username>@hs.thaydat.app
   • GV: email + PIN     -> signInWithPassword (tài khoản đã có sẵn)
   • Ghi APPEND vào quiz_results / activity_events (subject='ai') — an toàn.
   • Gom XP/streak/bài đã học vào student_progress.data qua RPC ai_record
     (nguồn chính của dashboard/trang chủ — dùng chung 2 môn).
   • Chưa cấu hình url+key => TẮT hoàn toàn, web chạy như cũ.
   ========================================================= */
(function () {
  var SUBJECT = "ai";
  var cfg = window.SUPABASE_CONFIG || {};
  var Cloud = (window.Cloud = {
    enabled: false, sb: null, user: null, subject: SUBJECT,
    ready: Promise.resolve(false),
  });

  if (!cfg.url || !cfg.anonKey) {
    console.info("[Cloud] Chưa cấu hình Supabase — chạy offline (localStorage).");
    return;
  }

  Cloud.ready = (async function () {
    try {
      var mod = await import("https://esm.sh/@supabase/supabase-js@2");
      Cloud.sb = mod.createClient(cfg.url, cfg.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true },
      });
      Cloud.enabled = true;
      var res = await Cloud.sb.auth.getUser();
      Cloud.user = (res && res.data && res.data.user) || null;
      Cloud.sb.auth.onAuthStateChange(function (_e, s) {
        Cloud.user = (s && s.user) || null;
        document.dispatchEvent(new CustomEvent("cloud-auth", { detail: Cloud.user }));
      });
      console.info("[Cloud] Supabase sẵn sàng. Đăng nhập:", !!Cloud.user);
      return true;
    } catch (e) {
      console.warn("[Cloud] Không khởi tạo được Supabase:", e);
      Cloud.enabled = false;
      return false;
    }
  })();

  /* ----- ĐĂNG NHẬP (chỉ login, không đăng ký) ----- */
  Cloud.signInStudent = async function (username, pin) {
    await Cloud.ready;
    if (!Cloud.enabled) return { error: { message: "cloud-disabled" } };
    var email = String(username).trim().toLowerCase() + (cfg.studentEmailDomain || "@hs.thaydat.app");
    return Cloud.sb.auth.signInWithPassword({ email: email, password: String(pin) });
  };
  Cloud.signInEmail = async function (email, password) {
    await Cloud.ready;
    if (!Cloud.enabled) return { error: { message: "cloud-disabled" } };
    return Cloud.sb.auth.signInWithPassword({ email: String(email).trim(), password: String(password) });
  };
  Cloud.signOut = async function () {
    await Cloud.ready;
    if (Cloud.enabled) await Cloud.sb.auth.signOut();
    Cloud.user = null;
  };
  Cloud.isLoggedIn = function () { return !!Cloud.user; };

  Cloud.getProfile = async function () {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return null;
    try {
      var out = await Cloud.sb.from("profiles").select("display_name,role,username,class_code").eq("id", Cloud.user.id).maybeSingle();
      return (out && out.data) || null;
    } catch (e) { return null; }
  };
  /* Đọc tiến độ dùng chung (student_progress.data) để hiển thị XP/streak */
  Cloud.getProgress = async function () {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return null;
    try {
      var out = await Cloud.sb.from("student_progress").select("data").eq("student_id", Cloud.user.id).maybeSingle();
      return (out && out.data && out.data.data) || {};
    } catch (e) { return null; }
  };

  /* ----- GHI DỮ LIỆU (append-only, an toàn) ----- */
  Cloud.saveQuizResult = async function (r) {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return;
    try {
      await Cloud.sb.from("quiz_results").insert({
        student_id: Cloud.user.id, subject: SUBJECT,
        mode: r.mode || "test", score: r.score, total: r.total,
        percent: r.percent, stars: r.stars || null,
      });
    } catch (e) { console.warn("[Cloud] saveQuizResult", e); }
  };
  Cloud.logEvent = async function (type, ref, meta) {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return;
    try {
      await Cloud.sb.from("activity_events").insert({
        student_id: Cloud.user.id, subject: SUBJECT, type: type, ref: ref || null, meta: meta || null,
      });
    } catch (e) { console.warn("[Cloud] logEvent", e); }
  };
  /* Gom vào student_progress.data (XP, streak, lessonsViewed, totalQuizzes,
     quizHighScore, totalStars) — dùng chung dashboard/trang chủ 2 môn. */
  Cloud.aiRecord = async function (o) {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return null;
    o = o || {};
    try {
      var out = await Cloud.sb.rpc("ai_record", {
        p_xp: o.xp || 0,
        p_lesson: o.lesson || null,
        p_quiz: !!o.quiz,
        p_percent: o.percent != null ? o.percent : null,
        p_stars: o.stars || 0,
      });
      return (out && out.data) || null;
    } catch (e) { console.warn("[Cloud] aiRecord", e); return null; }
  };
})();
