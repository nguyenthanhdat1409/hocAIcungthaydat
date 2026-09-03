# Học AI Vui 🤖

Web học **Trí tuệ nhân tạo (AI)** cho người mới bắt đầu — vui nhộn, trực quan, dễ hiểu.
Chạy hoàn toàn tĩnh (không cần server), deploy được lên Netlify.

## Cấu trúc

| File | Vai trò |
|------|---------|
| `index.html` | Khung trang: nav, trang chủ, bài học, kiểm tra, modal |
| `styles.css` | Toàn bộ giao diện (bảng màu `:root`, font, thẻ, hiệu ứng) |
| `app.js` | Logic + nội dung. **4 khối DATA đầu file** để chỉnh nội dung |
| `netlify.toml` | Cấu hình deploy tĩnh |

## Thêm nội dung (sửa `app.js`)

- **`LESSONS`** — thêm bài học mới: `{icon, color, title, desc, body}`. `body` là HTML, dùng `.secTitle` / `.tipBox` / `<p>` / `<ul>`.
- **`BANK`** — thêm câu hỏi kiểm tra theo mức sao 1/2/3: `{topic, q, opts:[4], a}`.
- **`TOPICS`** — thêm/sửa chủ đề (ảnh hưởng thẻ trang chủ & nhãn câu hỏi).
- **`FEATURES`** — thẻ giới thiệu ở trang chủ.

## Chạy thử

Mở `index.html` bằng trình duyệt, hoặc chạy web tĩnh:

```bash
python -m http.server 8080
# rồi mở http://localhost:8080
```

## Deploy

Push lên GitHub → kết nối Netlify → Deploy (đã có `netlify.toml`).
