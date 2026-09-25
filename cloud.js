/* =========================================================
   cloud.js — Cầu nối Supabase cho web AI (đồng bộ điểm/tiến độ/streak)
   ---------------------------------------------------------
   AN TOÀN: nếu supabase-config.js chưa điền url+anonKey thì TẮT hoàn
   toàn (không tải thư viện, không lỗi) — web chạy như cũ (localStorage).
   Khi đã cấu hình: cung cấp window.Cloud với các hàm đăng nhập & lưu.
   ========================================================= */
(function () {
  var SUBJECT = "ai";
  var cfg = window.SUPABASE_CONFIG || {};
  var Cloud = (window.Cloud = {
    enabled: false,
    sb: null,
    user: null,
    subject: SUBJECT,
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

  /* ----- Đăng nhập ----- */
  Cloud.signInStudent = async function (username, pin) {
    await Cloud.ready;
    if (!Cloud.enabled) return { error: "cloud-disabled" };
    var email = String(username).trim().toLowerCase() + (cfg.studentEmailDomain || "@hs.thaydat.local");
    return Cloud.sb.auth.signInWithPassword({ email: email, password: String(pin) });
  };
  Cloud.signInEmail = async function (email, password) {
    await Cloud.ready;
    if (!Cloud.enabled) return { error: "cloud-disabled" };
    return Cloud.sb.auth.signInWithPassword({ email: email, password: password });
  };
  Cloud.signOut = async function () {
    await Cloud.ready;
    if (Cloud.enabled) await Cloud.sb.auth.signOut();
    Cloud.user = null;
  };
  Cloud.isLoggedIn = function () { return !!Cloud.user; };

  /* ----- Lưu dữ liệu (chỉ chạy khi đã đăng nhập) ----- */
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
  Cloud.saveLessonProgress = async function (lessonCode, stars, scorePercent) {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return;
    try {
      await Cloud.sb.from("lesson_progress").upsert(
        {
          student_id: Cloud.user.id, subject: SUBJECT, lesson_code: lessonCode,
          stars: stars || 0, score_percent: scorePercent != null ? scorePercent : null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "student_id,subject,lesson_code" }
      );
    } catch (e) { console.warn("[Cloud] saveLessonProgress", e); }
  };
  /* Cập nhật streak/XP (dùng chung cả 2 môn) + ghi 1 phiên học */
  Cloud.touch = async function (xp, seconds) {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return null;
    try {
      var out = await Cloud.sb.rpc("cloud_touch", {
        p_xp: xp || 0, p_subject: SUBJECT, p_seconds: seconds || 0,
      });
      return (out && out.data && out.data[0]) || null; // {xp, streak_days, last_active}
    } catch (e) { console.warn("[Cloud] touch", e); return null; }
  };
  Cloud.getGamification = async function () {
    await Cloud.ready;
    if (!Cloud.enabled || !Cloud.user) return null;
    try {
      var out = await Cloud.sb.from("gamification").select("*").eq("student_id", Cloud.user.id).maybeSingle();
      return (out && out.data) || null;
    } catch (e) { return null; }
  };
})();
