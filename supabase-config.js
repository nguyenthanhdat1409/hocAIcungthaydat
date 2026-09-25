/* =========================================================
   supabase-config.js — CẤU HÌNH KẾT NỐI SUPABASE (web AI)
   ---------------------------------------------------------
   • Dùng CHUNG project Supabase với web "Tiếng Việt cùng Thầy Đạt".
   • anon key là khoá CÔNG KHAI (an toàn để đặt ở client) — dữ liệu
     được bảo vệ bằng RLS trong database.
   • Để TRỐNG url/anonKey => tính năng đám mây TẮT, web chạy bình
     thường bằng localStorage. Điền đủ 2 giá trị để bật đồng bộ.
   ========================================================= */
window.SUPABASE_CONFIG = {
  url: "",            // ⬅️ CẦN ĐIỀN: vd "https://xxxxxxxx.supabase.co" (Settings → API → Project URL)
  anonKey: "sb_publishable_1OwjQjg0erAXLqYqqDtJ-w_FtDuKGe7",  // publishable key (an toàn cho trình duyệt)
  // Đăng nhập HS bằng username + PIN dùng email tổng hợp.
  // Phải KHỚP đuôi email mà web Tiếng Việt đang dùng (nếu có).
  studentEmailDomain: "@hs.thaydat.local",
};
