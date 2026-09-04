/* =========================================================
   roleplay.js — GAME NHẬP VAI & TRANH BIỆN (đạo đức AI, tư duy phản biện)
   Kịch bản phân nhánh: mỗi cảnh có các lựa chọn, mỗi lựa chọn có
   phản hồi + điểm (score 0..2 theo mức "tư duy phản biện tốt").
   Hợp Level 2 và bé lớn 10–15 tuổi.
   ========================================================= */
window.ROLEPLAY = {

  phientoa: {
    title: "⚖️ Phiên toà xử AI",
    emoji: "⚖️",
    tag: "Đạo đức AI · Trách nhiệm",
    intro: "Một bạn học sinh nhờ AI làm bài. AI đưa thông tin sai và bạn ấy bị điểm kém, liền “kiện AI ra toà”.",
    role: "Em là THẨM PHÁN — phải nghe hai phía và đưa ra phán quyết công bằng.",
    stages: [
      { text: "⚖️ Phe BUỘC TỘI hô lớn: “AI đưa thông tin sai thì AI có lỗi hoàn toàn!”. Em phản ứng thế nào?",
        choices: [
          { label: "Gõ búa, đồng ý ngay: AI có lỗi hết!", reply: "Khoan đã! Thẩm phán giỏi không kết luận khi mới nghe một phía. Hãy nghe thêm phe bào chữa.", score: 0 },
          { label: "Bình tĩnh: “Toà sẽ nghe cả hai bên đã.”", reply: "Rất công bằng! Nghe đủ các phía trước khi phán là dấu hiệu của tư duy tốt.", score: 2 }
        ] },
      { text: "🛡️ Phe BÀO CHỮA lập luận: “Bạn ấy chép y nguyên câu trả lời mà không kiểm tra lại. AI chỉ là công cụ, đâu tự nộp bài thay bạn?”",
        choices: [
          { label: "Người dùng cần kiểm chứng thông tin quan trọng", reply: "Chính xác! AI có thể sai, nên kiểm chứng là trách nhiệm của người dùng.", score: 2 },
          { label: "Không liên quan, người dùng hoàn toàn vô can", reply: "Hãy nhớ: với thông tin quan trọng, ta luôn phải kiểm tra lại — kể cả khi AI trả lời rất tự tin.", score: 0 }
        ] },
      { text: "🔨 Đến lúc TUYÊN ÁN. Em phán quyết thế nào?",
        choices: [
          { label: "AI là công cụ có thể sai; người dùng phải kiểm chứng — cả hai cùng rút kinh nghiệm", reply: "Một phán quyết cân bằng và sáng suốt! 🎉", score: 2 },
          { label: "Tuyên phạt nặng bạn học sinh", reply: "Hơi khắt khe — mục tiêu là học cách dùng AI đúng, không phải trừng phạt.", score: 1 },
          { label: "Ra lệnh “bỏ tù” AI", reply: "AI không phải con người để bỏ tù; điều quan trọng là con người dùng nó có trách nhiệm.", score: 0 }
        ] }
    ],
    lesson: "AI là một CÔNG CỤ mạnh nhưng có thể sai. Người dùng có trách nhiệm KIỂM CHỨNG thông tin quan trọng — không đổ hết lỗi cho công cụ, cũng không tin nó một cách mù quáng."
  },

  tranhbien: {
    title: "🗣️ Tranh biện: Có nên dùng AI ở trường?",
    emoji: "🗣️",
    tag: "Tư duy phản biện · Trung thực",
    intro: "Lớp em mở buổi tranh biện: “Học sinh có nên được dùng AI để làm bài tập không?”. Có hai phe: Ủng hộ và Phản đối.",
    role: "Em là NGƯỜI TRANH BIỆN giỏi — cần chọn lập luận vừa thuyết phục vừa công bằng.",
    stages: [
      { text: "🟢 Phe ỦNG HỘ: “AI giúp học nhanh, giải thích bài khó dễ hiểu.” 🔴 Phe PHẢN ĐỐI: “Dùng AI khiến học sinh lười suy nghĩ và gian lận.” Em nêu quan điểm nào là mạnh nhất?",
        choices: [
          { label: "Dùng AI để HỖ TRỢ hiểu bài, không làm thay — và phải trung thực khi có dùng", reply: "Lập luận sắc bén! Nó công nhận lợi ích nhưng vẫn giữ sự trung thực và tự học.", score: 2 },
          { label: "Cấm hoàn toàn AI trong trường", reply: "Cấm tiệt thì bỏ lỡ lợi ích. Tư duy phản biện là cân nhắc cả hai mặt.", score: 1 },
          { label: "Cứ để AI làm hết bài cho khoẻ", reply: "Như vậy em sẽ không thật sự học được gì, và là thiếu trung thực.", score: 0 }
        ] },
      { text: "🤔 Đối phương phản công: “Nếu ai cũng dùng AI thì làm sao thầy cô biết bài nào là của học sinh?” Em đáp lại?",
        choices: [
          { label: "Nên có quy tắc: ghi rõ khi có dùng AI, và làm bài trên lớp để kiểm tra thực chất", reply: "Tuyệt! Đưa ra GIẢI PHÁP thay vì chỉ tranh cãi — đó là tranh biện đỉnh cao.", score: 2 },
          { label: "Kệ thôi, không ai kiểm soát được đâu", reply: "Bỏ cuộc quá sớm. Luôn có cách đặt ra quy tắc dùng AI công bằng.", score: 0 }
        ] },
      { text: "🏁 Chốt lại quan điểm của em trước ban giám khảo:",
        choices: [
          { label: "AI là trợ thủ học tập nếu dùng trung thực, có quy tắc rõ ràng", reply: "Kết luận cân bằng, có dẫn chứng và giải pháp — thuyết phục! 🎉", score: 2 },
          { label: "AI luôn xấu, phải tránh xa", reply: "Quan điểm một chiều thường kém thuyết phục hơn quan điểm cân bằng.", score: 0 }
        ] }
    ],
    lesson: "Tư duy phản biện là NHÌN CẢ HAI PHÍA và đưa ra giải pháp. AI có thể là trợ thủ học tập tuyệt vời nếu dùng TRUNG THỰC, để hỗ trợ chứ không làm thay việc học."
  },

  toasoan: {
    title: "📰 Toà soạn báo: Đăng hay không?",
    emoji: "📰",
    tag: "Tin giả · Kiểm chứng",
    intro: "Một tin gây sốc vừa gửi tới toà soạn: “Trường X sắp bị đóng cửa!”. Tin đang lan rất nhanh trên mạng.",
    role: "Em là TỔNG BIÊN TẬP — quyết định có đăng tin hay không.",
    stages: [
      { text: "🔥 Tin sốc đang “nóng”, đăng lên là có ngay rất nhiều lượt xem. Em làm gì?",
        choices: [
          { label: "Kiểm chứng nguồn gốc trước đã", reply: "Đúng chuẩn nhà báo! Chưa rõ thật giả thì chưa vội đăng.", score: 2 },
          { label: "Đăng ngay để câu view!", reply: "Rất nguy hiểm — nếu là tin giả, em sẽ khiến nhiều người hoảng loạn.", score: 0 }
        ] },
      { text: "🔍 Kiểm tra thấy: tin chỉ xuất hiện ở MỘT trang lạ, kèm một tấm ảnh mà bàn tay trong ảnh nhìn “sai sai”. Em nghĩ gì?",
        choices: [
          { label: "Nghi ngờ ảnh có thể là deepfake, đối chiếu 2 nguồn uy tín", reply: "Tinh mắt! Ảnh do AI tạo thường lỗi ở bàn tay, mắt, chữ. Cần đối chiếu nguồn đáng tin.", score: 2 },
          { label: "Ảnh trông như thật nên tin luôn", reply: "“Thấy tận mắt” ngày nay chưa chắc là thật — deepfake trông rất giống thật.", score: 0 }
        ] },
      { text: "📞 Em liên hệ nhà trường và báo chính thống: KHÔNG ai xác nhận tin này. Quyết định cuối?",
        choices: [
          { label: "Không đăng, và nhắc mọi người cẩn thận với tin chưa kiểm chứng", reply: "Quyết định trách nhiệm! Không lan tin giả cũng là bảo vệ cộng đồng. 🎉", score: 2 },
          { label: "Vẫn đăng nhưng ghi “chưa xác minh”", reply: "Vẫn rủi ro — nhiều người chỉ đọc tiêu đề. Tin chưa chắc thì tốt nhất chưa đăng.", score: 1 },
          { label: "Đăng luôn cho kịp “trend”", reply: "Chạy theo trend mà bỏ qua sự thật là điều một nhà báo tốt không làm.", score: 0 }
        ] }
    ],
    lesson: "Trước khi TIN và CHIA SẺ, hãy KIỂM CHỨNG: tìm nguồn gốc, đối chiếu ít nhất hai nguồn uy tín, cảnh giác ảnh/video giả (deepfake). Không lan truyền tin chưa xác minh."
  }

};
