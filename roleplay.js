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
      { text: "🙋 NHÂN CHỨNG là bạn học sinh thừa nhận: “Em không đọc lại, cũng không ghi là mình có dùng AI.” Em nghĩ trách nhiệm thuộc về ai?",
        choices: [
          { label: "Người dùng: nên kiểm tra lại và ghi rõ khi có dùng AI", reply: "Đúng! Trung thực (ghi rõ có dùng AI) và kiểm tra lại là trách nhiệm của người dùng.", score: 2 },
          { label: "AI phải tự chịu vì nó viết ra câu sai", reply: "AI chỉ là công cụ, không tự nộp bài. Người quyết định dùng thông tin mới là người chịu trách nhiệm.", score: 0 },
          { label: "Tại thầy cô ra đề khó quá", reply: "Đề khó không phải lý do để bỏ qua việc kiểm chứng và trung thực.", score: 0 }
        ] },
      { text: "🏢 Có người hỏi: “Vậy công ty làm ra AI có trách nhiệm gì không?” Em thấy sao?",
        choices: [
          { label: "Có phần: nên cảnh báo AI có thể sai — nhưng người dùng vẫn phải kiểm chứng", reply: "Cân bằng! Nhà sản xuất nên minh bạch về giới hạn của AI, còn người dùng vẫn phải kiểm tra.", score: 2 },
          { label: "Không liên quan gì tới công ty cả", reply: "Thật ra nhà sản xuất cũng nên cảnh báo rõ AI có thể sai — nhưng đó chỉ là một phần.", score: 1 },
          { label: "Công ty chịu hết, phải cấm dùng AI", reply: "Cấm tiệt là cực đoan — AI vẫn hữu ích nếu dùng đúng cách và có kiểm chứng.", score: 0 }
        ] },
      { text: "🔨 Đến lúc TUYÊN ÁN. Em phán quyết thế nào?",
        choices: [
          { label: "AI là công cụ có thể sai; người dùng phải kiểm chứng — cả hai cùng rút kinh nghiệm", reply: "Một phán quyết cân bằng và sáng suốt! 🎉", score: 2 },
          { label: "Tuyên phạt nặng bạn học sinh", reply: "Hơi khắt khe — mục tiêu là học cách dùng AI đúng, không phải trừng phạt.", score: 1 },
          { label: "Ra lệnh “bỏ tù” AI", reply: "AI không phải con người để bỏ tù; điều quan trọng là con người dùng nó có trách nhiệm.", score: 0 }
        ] }
    ],
    lesson: "AI là một CÔNG CỤ mạnh nhưng có thể sai. Người dùng có trách nhiệm KIỂM CHỨNG thông tin quan trọng và TRUNG THỰC khi có dùng AI — không đổ hết lỗi cho công cụ, cũng không tin nó một cách mù quáng."
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
      { text: "🧠 Phe PHẢN ĐỐI tiếp: “Dùng AI nhiều sẽ khiến học sinh lười tư duy, quên cách tự học.” Em phản hồi?",
        choices: [
          { label: "Đặt giới hạn: dùng AI để hiểu, còn phần chính tự làm để rèn kỹ năng", reply: "Rất hợp lý! Công nhận rủi ro và đưa ra cách dùng lành mạnh.", score: 2 },
          { label: "Không sao đâu, cứ dùng thoải mái", reply: "Lạm dụng thật sự làm mòn kỹ năng tự học — cần có giới hạn.", score: 0 },
          { label: "Vậy thì cấm hẳn cho chắc", reply: "Cấm hẳn lại bỏ lỡ lợi ích. Giải pháp cân bằng thuyết phục hơn.", score: 1 }
        ] },
      { text: "⚖️ Một bạn nêu: “Bạn nào không có mạng/thiết bị sẽ thiệt so với bạn có AI — thế có công bằng không?” Em xử lý ra sao?",
        choices: [
          { label: "Trường nên hỗ trợ thiết bị / giờ dùng AI chung để mọi bạn đều tiếp cận được", reply: "Xuất sắc! Em quan tâm tới sự CÔNG BẰNG trong tiếp cận — một góc nhìn chín chắn.", score: 2 },
          { label: "Ai có thì dùng, không có thì chịu", reply: "Như vậy tạo ra bất công. Tranh biện tốt luôn cân nhắc người yếu thế.", score: 0 },
          { label: "Thế thì bỏ AI để ai cũng như nhau", reply: "Bỏ hẳn là lãng phí lợi ích; hỗ trợ để ai cũng tiếp cận được sẽ tốt hơn.", score: 1 }
        ] },
      { text: "🏁 Chốt lại quan điểm của em trước ban giám khảo:",
        choices: [
          { label: "AI là trợ thủ học tập nếu dùng trung thực, có quy tắc rõ ràng và công bằng", reply: "Kết luận cân bằng, có dẫn chứng và giải pháp — thuyết phục! 🎉", score: 2 },
          { label: "AI luôn xấu, phải tránh xa", reply: "Quan điểm một chiều thường kém thuyết phục hơn quan điểm cân bằng.", score: 0 }
        ] }
    ],
    lesson: "Tư duy phản biện là NHÌN CẢ HAI PHÍA và đưa ra giải pháp. AI có thể là trợ thủ học tập tuyệt vời nếu dùng TRUNG THỰC, có giới hạn, và bảo đảm CÔNG BẰNG để ai cũng tiếp cận được."
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
      { text: "🎙️ Có người gửi thêm một đoạn GHI ÂM “giọng hiệu trưởng” xác nhận tin. Em phản ứng thế nào?",
        choices: [
          { label: "Cảnh giác: giọng nói cũng có thể do AI giả — gọi xác minh trực tiếp", reply: "Chuẩn! AI ngày nay giả được cả giọng nói. Xác minh trực tiếp mới chắc.", score: 2 },
          { label: "Có ghi âm là bằng chứng chắc chắn, đăng thôi", reply: "Ghi âm cũng có thể là giả. Chưa xác minh trực tiếp thì chưa nên tin.", score: 0 },
          { label: "Đăng kèm ghi âm cho khách quan", reply: "Đăng nội dung chưa xác minh vẫn khiến người đọc hiểu lầm là thật.", score: 0 }
        ] },
      { text: "😰 Toà soạn ĐỐI THỦ vừa đăng tin đó, đang viral khắp nơi. Sếp giục em đăng theo kẻo “chậm chân”. Em?",
        choices: [
          { label: "Vẫn chờ kiểm chứng — đúng sự thật quan trọng hơn nhanh", reply: "Bản lĩnh nhà báo! Chạy theo đám đông mà sai thì mất uy tín và hại cộng đồng.", score: 2 },
          { label: "Đối thủ đăng rồi thì mình cũng đăng", reply: "Người khác sai không có nghĩa mình được sai theo.", score: 0 },
          { label: "Đăng nhưng ghi “theo một nguồn khác”", reply: "Vẫn là lan tin chưa kiểm chứng — nhiều người chỉ đọc tiêu đề.", score: 1 }
        ] },
      { text: "📞 Em liên hệ nhà trường và báo chính thống: KHÔNG ai xác nhận tin này. Quyết định cuối?",
        choices: [
          { label: "Không đăng, và nhắc mọi người cẩn thận với tin chưa kiểm chứng", reply: "Quyết định trách nhiệm! Không lan tin giả cũng là bảo vệ cộng đồng. 🎉", score: 2 },
          { label: "Vẫn đăng nhưng ghi “chưa xác minh”", reply: "Vẫn rủi ro — nhiều người chỉ đọc tiêu đề. Tin chưa chắc thì tốt nhất chưa đăng.", score: 1 },
          { label: "Đăng luôn cho kịp “trend”", reply: "Chạy theo trend mà bỏ qua sự thật là điều một nhà báo tốt không làm.", score: 0 }
        ] }
    ],
    lesson: "Trước khi TIN và CHIA SẺ, hãy KIỂM CHỨNG: tìm nguồn gốc, đối chiếu ít nhất hai nguồn uy tín, cảnh giác ảnh/video/giọng nói giả (deepfake). Không chạy theo đám đông; không lan truyền tin chưa xác minh."
  },

  baovemat: {
    title: "🔒 Trợ lý AI tò mò",
    emoji: "🔒",
    tag: "An toàn · Quyền riêng tư",
    intro: "Một ứng dụng trợ lý AI mới yêu cầu em cung cấp nhiều thông tin để “phục vụ tốt hơn”.",
    role: "Em là NGƯỜI DÙNG THÔNG MINH — quyết định chia sẻ gì với AI cho an toàn.",
    stages: [
      { text: "📝 App hỏi họ tên đầy đủ, tên trường và ĐỊA CHỈ NHÀ để “cá nhân hoá”. Em điền gì?",
        choices: [
          { label: "Chỉ cho tên gọi/biệt danh, không cho địa chỉ nhà", reply: "Thông minh! Chia sẻ ít thông tin nhất có thể là cách tự bảo vệ.", score: 2 },
          { label: "Điền hết cho tiện", reply: "Địa chỉ nhà là thông tin nhạy cảm — không nên cho ứng dụng khi chưa cần.", score: 0 },
          { label: "Cho địa chỉ nhưng giấu tên", reply: "Địa chỉ nhà mới là phần nhạy cảm nhất — đừng cho khi không cần thiết.", score: 1 }
        ] },
      { text: "📷 App xin quyền xem TOÀN BỘ ảnh và DANH BẠ của em. Em chọn?",
        choices: [
          { label: "Từ chối — trợ lý AI không cần toàn bộ ảnh và danh bạ", reply: "Đúng! Hãy hỏi: app này có thật sự cần quyền đó không? Nếu không thì từ chối.", score: 2 },
          { label: "Đồng ý hết cho app chạy mượt", reply: "Cấp quyền quá rộng khiến dữ liệu của em (và bạn bè) dễ bị lạm dụng.", score: 0 }
        ] },
      { text: "➗ Em muốn hỏi AI một bài Toán, nhưng ảnh chụp lại có kèm THẺ HỌC SINH có số điện thoại. Em làm gì?",
        choices: [
          { label: "Che/xoá thông tin cá nhân, chỉ gửi phần đề Toán", reply: "Chuẩn! Chỉ gửi đúng thứ cần hỏi, giấu thông tin cá nhân đi.", score: 2 },
          { label: "Gửi luôn cả thẻ cho nhanh", reply: "Số điện thoại và thông tin trên thẻ có thể bị lưu lại — nên che trước khi gửi.", score: 0 }
        ] },
      { text: "🔑 App gợi ý: “Chia sẻ MẬT KHẨU email để đồng bộ dữ liệu nhé!”. Em?",
        choices: [
          { label: "Tuyệt đối không chia sẻ mật khẩu với bất kỳ app/AI nào", reply: "Rất đúng! Mật khẩu là “chìa khoá” — không bao giờ đưa cho ai, kể cả AI.", score: 2 },
          { label: "Chia sẻ vì app hứa sẽ bảo mật", reply: "Không app tử tế nào đòi mật khẩu email của em. Đây là dấu hiệu nguy hiểm.", score: 0 }
        ] }
    ],
    lesson: "Với AI và ứng dụng, chỉ chia sẻ thông tin THẬT SỰ CẦN THIẾT. KHÔNG đưa mật khẩu, địa chỉ nhà, giấy tờ cá nhân. Luôn cân nhắc kỹ các quyền truy cập (ảnh, danh bạ, vị trí) trước khi đồng ý — và hỏi người lớn khi chưa chắc."
  },

  thienvi: {
    title: "🎨 AI chấm thi vẽ",
    emoji: "🎨",
    tag: "AI công bằng · Thiên vị",
    intro: "Cuộc thi vẽ ở trường dùng AI để chấm điểm tự động. Nhiều bạn thắc mắc kết quả có công bằng không.",
    role: "Em là THÀNH VIÊN BAN TỔ CHỨC — xem xét việc AI chấm có công bằng không.",
    stages: [
      { text: "🖼️ AI toàn chọn tranh phong cách hiện đại, loại gần hết tranh dân gian. Theo em vì sao?",
        choices: [
          { label: "Có thể do AI học từ dữ liệu thiếu tranh dân gian nên “quen” phong cách hiện đại", reply: "Chính xác! AI học từ dữ liệu — dữ liệu lệch thì kết quả cũng lệch.", score: 2 },
          { label: "Vì tranh dân gian xấu hơn", reply: "Không hẳn — “đẹp/xấu” tuỳ góc nhìn. Vấn đề thường nằm ở dữ liệu AI học.", score: 0 },
          { label: "Vì AI ghét tranh dân gian", reply: "AI không có cảm xúc yêu ghét; nó chỉ phản ánh dữ liệu đã học.", score: 0 }
        ] },
      { text: "🤖 Một bạn khẳng định: “AI là máy nên chắc chắn công bằng tuyệt đối.” Em thấy sao?",
        choices: [
          { label: "Không hẳn: AI học từ dữ liệu của con người nên có thể mang thiên vị", reply: "Đúng! “Là máy” không đồng nghĩa với “luôn công bằng”.", score: 2 },
          { label: "Đúng, máy thì luôn công bằng", reply: "Thực tế AI có thể thiên vị nếu dữ liệu học bị lệch.", score: 0 }
        ] },
      { text: "🛠️ Nên làm gì để việc chấm công bằng hơn?",
        choices: [
          { label: "Cho người chấm cùng AI, và bổ sung nhiều loại tranh vào dữ liệu", reply: "Tuyệt! Kết hợp con người + dữ liệu đa dạng giúp giảm thiên vị.", score: 2 },
          { label: "Bỏ AI, chỉ chấm tay hoàn toàn", reply: "Cũng được, nhưng AI vẫn hữu ích nếu có người giám sát và dữ liệu tốt.", score: 1 },
          { label: "Tin AI hoàn toàn cho nhanh", reply: "Giao phó hết cho AI ở việc quan trọng dễ dẫn tới bất công.", score: 0 }
        ] },
      { text: "🏆 Kết quả có một tranh bị AI chấm thấp nhưng rất nhiều người thấy đẹp. Em?",
        choices: [
          { label: "Xem lại thủ công — AI có thể sai, quyết định cuối cần con người", reply: "Quyết định chín chắn! Với việc quan trọng, con người nên là người chốt.", score: 2 },
          { label: "Giữ nguyên vì AI đã chấm rồi", reply: "Tin tuyệt đối vào AI có thể bỏ sót cái hay mà nó không nhận ra.", score: 0 }
        ] }
    ],
    lesson: "AI KHÔNG phải lúc nào cũng công bằng — nó học từ dữ liệu nên có thể mang THIÊN VỊ. Với quyết định quan trọng, hãy dùng dữ liệu đa dạng và để CON NGƯỜI xem lại, đừng giao phó hoàn toàn cho AI."
  }

};
