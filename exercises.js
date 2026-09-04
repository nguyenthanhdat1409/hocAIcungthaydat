/* =========================================================
   exercises.js — BÀI TẬP theo module (dạng KHÁC trắc nghiệm)
   Trắc nghiệm lấy sẵn từ window.LESSON_QUIZ (10 câu/bài).
   Ở đây bổ sung: tf (Đúng/Sai) · match (Nối cặp) · order (Sắp xếp thứ tự)
     tf:    {type:"tf",    q:"câu khẳng định", a:true|false}
     match: {type:"match", title:"...", pairs:[["A","nghĩa A"],...]}
     order: {type:"order", q:"...", steps:["b1","b2",...]}  (đúng thứ tự)
   Khoá theo mã module (vd "1.1"). Soạn dần theo level.
   ========================================================= */
window.EXERCISES = {

  "1.1": [
    {type:"tf", q:"Màn hình là bộ phận dùng để gõ chữ.", a:false},
    {type:"tf", q:"Nên tắt máy tính bằng nút Shut down (Tắt máy).", a:true},
    {type:"tf", q:"Có thể chia sẻ mật khẩu cho người lạ nếu họ hỏi.", a:false},
    {type:"match", title:"Nối bộ phận với chức năng", pairs:[
      ["Màn hình","Hiển thị hình ảnh"],
      ["Bàn phím","Gõ chữ và số"],
      ["Chuột","Di chuyển con trỏ"],
      ["Loa","Phát ra âm thanh"]
    ]},
    {type:"order", q:"Sắp xếp các bước dùng máy tính đúng thứ tự", steps:[
      "Nhấn nút nguồn để bật máy","Chờ máy khởi động","Mở ứng dụng để làm việc","Tắt máy bằng Shut down"
    ]}
  ],

  "1.2": [
    {type:"tf", q:"Khi gõ phím nên nhìn vào màn hình thay vì nhìn phím.", a:true},
    {type:"tf", q:"Phím cách (Space) được gõ bằng ngón út.", a:false},
    {type:"tf", q:"Nên gõ đúng trước, rồi mới tăng dần tốc độ.", a:true},
    {type:"match", title:"Nối phím/kiểu gõ với ý nghĩa", pairs:[
      ["Phím cách","Tạo khoảng trắng"],
      ["Shift","Gõ chữ hoa"],
      ["Telex: s","Dấu sắc"],
      ["WPM","Số từ gõ mỗi phút"]
    ]},
    {type:"order", q:"Sắp xếp các bước luyện gõ 10 ngón", steps:[
      "Ngồi thẳng, đặt tay ở hàng cơ sở","Gõ chậm cho đúng","Tăng dần tốc độ","Đo WPM và ghi lại tiến bộ"
    ]}
  ],

  "1.3": [
    {type:"tf", q:"AI luôn luôn trả lời đúng mọi câu hỏi.", a:false},
    {type:"tf", q:"AI học được nhờ xem rất nhiều ví dụ (dữ liệu).", a:true},
    {type:"tf", q:"Google đưa ra danh sách trang web, còn AI tự viết câu trả lời.", a:true},
    {type:"match", title:"Nối khái niệm với ý nghĩa", pairs:[
      ["AI","Trí tuệ nhân tạo"],
      ["Chatbot","AI trò chuyện bằng chữ"],
      ["Dữ liệu","Các ví dụ để AI học"],
      ["Bịa (ảo giác)","AI nói điều không có thật"]
    ]},
    {type:"order", q:"Sắp xếp cách hỏi AI cho hiệu quả", steps:[
      "Viết câu hỏi rõ ràng","Gửi cho AI","Đọc câu trả lời","Kiểm chứng thông tin quan trọng"
    ]}
  ],

  "1.4": [
    {type:"tf", q:"Prompt càng rõ ràng thì kết quả càng đúng ý.", a:true},
    {type:"tf", q:"'Kể về chó' là một prompt rõ ràng và cụ thể.", a:false},
    {type:"tf", q:"Có thể cho AI đóng vai (ví dụ thầy giáo) để trả lời hợp hơn.", a:true},
    {type:"match", title:"Nối phần của prompt với ví dụ", pairs:[
      ["Bối cảnh","Cho em học lớp 5"],
      ["Yêu cầu","Giải thích vì sao có mưa"],
      ["Định dạng","Trong 3 câu ngắn"],
      ["Đóng vai","Hãy làm thầy giáo vui tính"]
    ]},
    {type:"order", q:"Sắp xếp các bước viết prompt tốt", steps:[
      "Nêu bối cảnh (cho ai, để làm gì)","Nói rõ việc cần làm","Yêu cầu định dạng (dài/ngắn, bảng…)","Chưa ưng thì hỏi tiếp để sửa"
    ]}
  ],

  "1.5": [
    {type:"tf", q:"Việc lớn nên được chia thành nhiều việc nhỏ dễ làm.", a:true},
    {type:"tf", q:"Trừu tượng hoá là giữ mọi chi tiết, không bỏ gì cả.", a:false},
    {type:"tf", q:"Nhận ra quy luật giúp ta đoán được điều tiếp theo.", a:true},
    {type:"match", title:"Nối kỹ năng tư duy với mô tả", pairs:[
      ["Chia nhỏ","Tách việc lớn thành việc nhỏ"],
      ["Thứ tự","Bước nào làm trước, sau"],
      ["Quy luật","Điều lặp lại có thể đoán"],
      ["Trừu tượng hoá","Giữ điều quan trọng, bỏ chi tiết thừa"]
    ]},
    {type:"order", q:"Sắp xếp các bước giải một vấn đề", steps:[
      "Hiểu vấn đề","Chia thành các bước nhỏ","Sắp thứ tự và giải quyết","Trình bày cách giải cho người khác"
    ]}
  ],

  "1.6": [
    {type:"tf", q:"Thuật toán là chuỗi các bước rõ ràng để làm một việc.", a:true},
    {type:"tf", q:"Trong flowchart, hình thoi dùng cho một câu hỏi (rẽ nhánh).", a:true},
    {type:"tf", q:"Dry run là chạy bộ thể dục ngoài sân.", a:false},
    {type:"match", title:"Nối ký hiệu flowchart với ý nghĩa", pairs:[
      ["Hình oval","Bắt đầu / kết thúc"],
      ["Hình chữ nhật","Một hành động"],
      ["Hình thoi","Câu hỏi Đúng/Sai"],
      ["Mũi tên","Đi đâu tiếp theo"]
    ]},
    {type:"order", q:"Sắp xếp quy trình giải bài bằng thuật toán", steps:[
      "Đọc hiểu đề bài","Phân rã thành các bước","Vẽ flowchart","Dry run kiểm tra"
    ]}
  ],

  "1.7": [
    {type:"tf", q:"Scratch lập trình bằng cách kéo thả các khối lệnh.", a:true},
    {type:"tf", q:"Vòng lặp giúp lặp lại việc mà không phải chép nhiều lệnh.", a:true},
    {type:"tf", q:"Biến số là giá trị không bao giờ thay đổi.", a:false},
    {type:"match", title:"Nối khối lệnh với công dụng", pairs:[
      ["Nếu… thì… (if)","Phản ứng theo tình huống"],
      ["Vòng lặp","Lặp lại nhiều lần"],
      ["Biến","Lưu điểm số, số mạng"],
      ["VÀ / HOẶC","Kết hợp nhiều điều kiện"]
    ]},
    {type:"order", q:"Sắp xếp các bước làm game bắt táo đơn giản", steps:[
      "Cho táo rơi bằng vòng lặp","Kiểm tra bắt trúng bằng if","Cộng điểm vào biến","Hết mạng thì kết thúc game"
    ]}
  ],

  "1.8": [
    {type:"tf", q:"Nên chọn đề tài dự án mà em thật sự quan tâm.", a:true},
    {type:"tf", q:"Bị bạn góp ý khi kiểm thử là điều xấu, nên bỏ qua.", a:false},
    {type:"tf", q:"Nên làm phần cốt lõi chạy được trước, trang trí đẹp để sau.", a:true},
    {type:"match", title:"Nối giai đoạn dự án với việc làm", pairs:[
      ["Lập kế hoạch","Chọn vấn đề, vẽ flowchart"],
      ["Xây dựng","Làm sản phẩm chạy được"],
      ["Kiểm thử","Nhờ bạn dùng thử, ghi lỗi"],
      ["Demo Day","Trình bày sản phẩm"]
    ]},
    {type:"order", q:"Sắp xếp các bước làm dự án", steps:[
      "Chọn đề tài & lập kế hoạch","Xây dựng sản phẩm","Kiểm thử & sửa lỗi","Trình bày (Demo Day)"
    ]}
  ]

};
