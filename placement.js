/* =========================================================
   placement.js — KIỂM TRA ĐẦU VÀO (thích ứng theo sao)
   20 câu: đúng → khó hơn (lên sao), sai → dễ lại (xuống sao).
   Mỗi câu: {cat, q, opts:[đúng, sai, sai, sai], a:0}  (engine tự xáo trộn)
   cat: khainiem | tuduy | gophim | prompt | antoan
   ========================================================= */
window.PLACEMENT = {
  1: [
    {cat:"khainiem", q:"AI là viết tắt của điều gì?", opts:["Trí tuệ nhân tạo","Áo ấm Ý","Ăn ít","Ánh sáng"], a:0},
    {cat:"khainiem", q:"Việc nào dưới đây có dùng AI?", opts:["Mở khoá điện thoại bằng khuôn mặt","Bật công tắc đèn","Rót nước","Đóng cửa"], a:0},
    {cat:"gophim", q:"Bộ phận nào dùng để gõ chữ?", opts:["Bàn phím","Màn hình","Loa","Chuột"], a:0},
    {cat:"gophim", q:"Muốn di chuyển con trỏ, em dùng?", opts:["Chuột","Bàn phím","Loa","Màn hình"], a:0},
    {cat:"tuduy", q:"Dãy 2, 4, 6, … số tiếp theo là?", opts:["8","7","9","10"], a:0},
    {cat:"tuduy", q:"Một việc lớn nên được?", opts:["Chia thành nhiều việc nhỏ","Làm một hơi thật nhanh","Bỏ qua","Chờ người khác làm"], a:0},
    {cat:"antoan", q:"Với AI/người lạ, em KHÔNG nên chia sẻ?", opts:["Mật khẩu, địa chỉ nhà","Một câu hỏi Toán","Màu em thích","Tên loài hoa"], a:0},
    {cat:"khainiem", q:"AI thường chạy trên thiết bị gì?", opts:["Máy tính / điện thoại","Cây bút chì","Quyển vở","Cục tẩy"], a:0},
    {cat:"gophim", q:"Phím nào tạo khoảng trắng giữa các chữ?", opts:["Phím cách (Space)","Phím Enter","Phím Shift","Phím Esc"], a:0},
    {cat:"tuduy", q:"Thứ tự đúng khi mặc là?", opts:["Mang tất rồi mang giày","Mang giày rồi mang tất","Không cần thứ tự","Chỉ mang giày"], a:0},
    {cat:"khainiem", q:"Trợ lý ảo có thể giúp gì?", opts:["Trả lời câu hỏi của em","Nấu cơm giúp em","Giặt quần áo","Quét nhà"], a:0},
    {cat:"antoan", q:"Thấy điều đáng lo trên mạng, em nên?", opts:["Báo người lớn tin tưởng","Giữ im lặng một mình","Làm theo ngay","Chia sẻ khắp nơi"], a:0}
  ],
  2: [
    {cat:"khainiem", q:"AI học giỏi chủ yếu nhờ gì?", opts:["Học từ rất nhiều dữ liệu (ví dụ)","Ánh trăng","Nước mưa","May mắn"], a:0},
    {cat:"prompt", q:"'Prompt' nghĩa là gì?", opts:["Câu lệnh/yêu cầu em gõ cho AI","Một loại máy in","Một môn thể thao","Một loại pin"], a:0},
    {cat:"antoan", q:"Khi AI trả lời điều quan trọng, nên?", opts:["Kiểm chứng lại thông tin","Tin tuyệt đối 100%","Chép ngay không đọc","Tắt máy đi ngủ"], a:0},
    {cat:"tuduy", q:"Quy luật của dãy 5, 10, 15, … là?", opts:["Cộng 5","Cộng 2","Nhân 3","Trừ 1"], a:0},
    {cat:"khainiem", q:"AI tạo sinh có thể làm gì?", opts:["Viết văn, vẽ tranh theo yêu cầu","Giặt quần áo","Rửa bát","Đá bóng"], a:0},
    {cat:"prompt", q:"Một prompt tốt thường?", opts:["Rõ ràng, cụ thể","Càng mơ hồ càng tốt","Chỉ một chữ","Không nói gì"], a:0},
    {cat:"gophim", q:"Gõ 10 ngón bắt đầu từ đâu?", opts:["Hàng phím cơ sở (ASDF–JKL;)","Hàng số","Phím Enter","Gõ tuỳ ý"], a:0},
    {cat:"antoan", q:"'Deepfake' là gì?", opts:["Ảnh/video giả do AI tạo, trông như thật","Một trò chơi","Một loại máy ảnh","Một kiểu tóc"], a:0},
    {cat:"tuduy", q:"Flowchart (lưu đồ) dùng để?", opts:["Mô tả các bước bằng hình","Vẽ tranh cho đẹp","Nghe nhạc","Tính tiền"], a:0},
    {cat:"khainiem", q:"Câu nào ĐÚNG về robot và AI?", opts:["Robot là thân máy, AI là 'bộ não'","Robot nào cũng có AI","AI phải có tay chân","Chúng y hệt nhau"], a:0},
    {cat:"prompt", q:"Chưa ưng câu trả lời của AI, nên?", opts:["Nói rõ muốn sửa gì rồi hỏi lại","Bỏ cuộc ngay","Tắt máy","La mắng AI"], a:0},
    {cat:"gophim", q:"Khi gõ phím, mắt nên nhìn?", opts:["Màn hình","Chằm chằm vào phím","Ra ngoài cửa sổ","Nhắm lại"], a:0}
  ],
  3: [
    {cat:"khainiem", q:"Vì sao AI đôi khi 'bịa' thông tin?", opts:["Nó đoán theo xác suất, không tra sự thật","Do trời nóng","Do màn hình nhỏ","Do bàn phím cũ"], a:0},
    {cat:"antoan", q:"Cách kiểm chứng một tin đáng nghi?", opts:["Đối chiếu 2 nguồn độc lập đáng tin","Tin ngay nguồn đầu tiên","Chia sẻ cho nhanh","Đoán bừa"], a:0},
    {cat:"prompt", q:"'Giao vai cho AI' nghĩa là?", opts:["Bảo AI đóng vai ai đó (ví dụ thầy giáo)","Tặng quà cho AI","Đặt tên cho máy","Tắt rồi bật lại"], a:0},
    {cat:"tuduy", q:"'Trừu tượng hoá' là?", opts:["Giữ điều quan trọng, bỏ chi tiết thừa","Giữ mọi chi tiết","Bỏ hết thông tin","Thêm chi tiết vô ích"], a:0},
    {cat:"khainiem", q:"Câu nào ĐÚNG về AI hiện nay?", opts:["Giỏi từng việc cụ thể, không 'biết tuốt'","Có cảm xúc thật như người","Luôn đúng 100%","Không cần dữ liệu"], a:0},
    {cat:"prompt", q:"Kỹ thuật 'few-shot' là?", opts:["Đưa vài ví dụ mẫu để AI làm theo","Chụp vài tấm ảnh","Hỏi thật nhanh","Gõ chữ in hoa"], a:0},
    {cat:"tuduy", q:"'Dry run' (chạy tay) thuật toán là?", opts:["Lần theo từng bước với dữ liệu cụ thể","Chạy bộ ngoài sân","Tắt máy","Vẽ tranh"], a:0},
    {cat:"antoan", q:"Dùng AI trung thực khi làm bài là?", opts:["Nói thật là mình có dùng AI hỗ trợ","Chép y nguyên nhận là của mình","Giấu không cho ai biết","Xoá lịch sử"], a:0},
    {cat:"khainiem", q:"Dữ liệu học bị lệch (thiên vị) khiến AI?", opts:["Có 'điểm mù', đoán sai vài trường hợp","Giỏi hơn hẳn","Không ảnh hưởng","Chạy nhanh hơn"], a:0},
    {cat:"prompt", q:"Việc lớn nên xử lý với AI thế nào?", opts:["Chia thành chuỗi prompt, mỗi cái một việc","Nhồi hết vào 1 prompt","Không dùng AI","Hỏi 1 câu duy nhất"], a:0},
    {cat:"tuduy", q:"Input và Output của một bài toán là?", opts:["Cái đưa vào và cái nhận ra","Hai màu sắc","Hai bài hát","Hai con chuột"], a:0},
    {cat:"antoan", q:"AI trả lời với giọng rất tự tin nghĩa là?", opts:["Chưa chắc đúng — vẫn cần kiểm tra","Chắc chắn đúng","Luôn sai","Đáng tin tuyệt đối"], a:0}
  ]
};

/* Tên hiển thị của nhóm kỹ năng */
window.PLACEMENT_CATS = {
  khainiem: {name:"Hiểu biết về AI", emoji:"💡"},
  tuduy:    {name:"Tư duy logic",    emoji:"🧩"},
  gophim:   {name:"Máy tính & gõ phím", emoji:"⌨️"},
  prompt:   {name:"Giao tiếp với AI", emoji:"💬"},
  antoan:   {name:"An toàn & kiểm chứng", emoji:"🛡️"}
};

/* Câu để luyện/đo gõ phím (đo WPM & độ chính xác) — 2 loại: tiếng Việt & tiếng Anh */
window.TYPING_TEXTS = {
  vi: [
    "Em thích học về trí tuệ nhân tạo",
    "Máy tính giúp em học và chơi mỗi ngày",
    "Gõ mười ngón nhanh mà không cần nhìn phím",
    "Trí tuệ nhân tạo đang thay đổi thế giới",
    "Hôm nay em học lập trình rất vui",
    "Chuột và bàn phím là bạn của em",
    "Luyện gõ mỗi ngày một chút sẽ tiến bộ nhanh",
    "An toàn khi dùng máy tính rất quan trọng",
    "Bé hãy ngồi thẳng lưng khi ngồi học",
    "Đặt câu hỏi rõ ràng để AI trả lời đúng ý",
    "Không chia sẻ mật khẩu cho người lạ",
    "Học lập trình giúp em tư duy logic hơn"
  ],
  en: [
    "I love learning about artificial intelligence",
    "A computer helps me learn and play",
    "Typing fast with ten fingers is fun",
    "Robots can move and follow commands",
    "Always keep your password a secret",
    "The mouse moves the cursor on the screen",
    "Ask the AI a clear and simple question",
    "Practice a little every single day",
    "Sit up straight when you use a computer",
    "Data helps computers learn new things",
    "Coding helps me solve problems step by step",
    "Be kind and safe when you go online"
  ]
};
window.TYPING_LANGS = { vi: {name:"Tiếng Việt", flag:"🇻🇳"}, en: {name:"Tiếng Anh", flag:"🇬🇧"} };

/* Test tư duy logic (câu đố) — {q, opts:[đúng, sai, sai, sai], a:0} */
window.THINKING = [
  {q:"Dãy số 3, 6, 9, … số tiếp theo là?", opts:["12","10","15","8"], a:0},
  {q:"Chuỗi 🔴🔵🔴🔵🔴 … hình tiếp theo là?", opts:["🔵","🔴","🟢","🟡"], a:0},
  {q:"Số nào KHÔNG cùng nhóm: 2, 4, 7, 8?", opts:["7 (số lẻ)","2","4","8"], a:0},
  {q:"Làm bánh: bước nào làm TRƯỚC?", opts:["Trộn bột","Nướng bánh","Lấy bánh ra","Ăn bánh"], a:0},
  {q:"Dãy 1, 2, 4, 8, … số tiếp theo là?", opts:["16","10","12","9"], a:0},
  {q:"Thứ nào KHÔNG cùng nhóm: táo, chuối, cà rốt, cam?", opts:["Cà rốt (là rau củ)","Táo","Chuối","Cam"], a:0},
  {q:"Hôm nay là thứ Ba, 2 ngày nữa là thứ mấy?", opts:["Thứ Năm","Thứ Tư","Thứ Sáu","Thứ Hai"], a:0},
  {q:"Ong sống ở tổ, vậy gấu sống ở đâu?", opts:["Hang","Tổ","Chuồng","Ao"], a:0},
  {q:"Muốn giải việc lớn, ta nên?", opts:["Chia thành các bước nhỏ","Làm thật nhanh một lần","Bỏ qua","Chờ may mắn"], a:0},
  {q:"Dãy 🔺🔺🔻🔺🔺🔻 … hình tiếp theo là?", opts:["🔺","🔻","⬛","⭕"], a:0}
];
