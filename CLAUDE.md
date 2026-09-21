# Học AI Vui

Web học về **Trí tuệ nhân tạo (AI)** cho người mới bắt đầu — giao diện vui nhộn nhiều màu, dễ hiểu.
Bộ khung này tách 3 file: **`index.html`** (cấu trúc), **`styles.css`** (giao diện), **`app.js`** (logic + nội dung).

> Khung UI kế thừa từ dự án "Học Tiếng Việt Cùng Thầy Đạt", đã gỡ backend (đăng nhập/Supabase/giọng đọc/dashboard).
> Giai đoạn hiện tại **ưu tiên phát triển BÀI HỌC**. Tài khoản & lưu điểm sẽ bổ sung sau.

## Quy tắc nội dung / ngôn từ
- KHÔNG dùng từ ngữ nhạy cảm, tục tĩu, bạo lực hay chính trị trong bất kỳ nội dung nào hiển thị.
- Giọng văn thân thiện, tích cực, dễ hiểu cho người mới — hạn chế thuật ngữ, luôn có ví dụ đời thường.
- Luôn dùng tiếng Việt có dấu đầy đủ, đúng chính tả.
- Nội dung về AI phải **chính xác, cân bằng** (nêu cả điểm mạnh lẫn giới hạn), đề cao dùng AI **an toàn, có trách nhiệm**.

## Quy tắc kỹ thuật
- Nội dung nằm ở 4 khối DATA đầu file **`app.js`**: `FEATURES`, `TOPICS`, `LESSONS`, `BANK`. Thêm bài học / câu hỏi thì sửa ở đây.
- Giữ nguyên phần ENGINE (điều hướng, quiz, modal) trừ khi có yêu cầu rõ.
- Giữ nguyên bảng màu và font đang dùng (biến CSS trong `:root`, font Baloo 2 + Be Vietnam Pro) để đồng bộ giao diện.
- Trong nội dung bài học (`body`) dùng các lớp có sẵn: `.secTitle` (kèm `data-icon`), `.tipBox`, `<p>`, `<ul>`. **Tránh `.langBox`** (đang gắn nhãn "English hint" của dự án cũ).
- Web phải chạy tốt trên điện thoại (đã có `viewport` responsive).
- Không thêm thư viện ngoài / link CDN mới nếu không cần thiết. Site chạy tĩnh, không cần server.

## Deploy
- Deploy tĩnh lên **Netlify** qua GitHub. `netlify.toml` đã có sẵn (publish `.`, không dùng functions).
- Push code lên GitHub → kết nối Netlify → chọn repo → Deploy.

## Cách làm việc mong muốn
- Giải thích ngắn gọn bằng tiếng Việt những gì đã thay đổi.
- Chỉ commit hoặc push khi được yêu cầu.
- Mỗi tính năng/chức năng mới: tạo branch chuẩn, code xong thì merge vào `main`.
- Ra lệnh gì làm đúng chỗ đó, tránh sửa cái không liên quan.
