/* =========================================================
   lessons_content.js — LÝ THUYẾT bài học (soạn tay, thêm dần)
   Khoá theo mã bài (vd "1.1.1"). Nếu một bài có ở đây thì
   phần "Nội dung bài học" trong modal sẽ hiện lý thuyết này.
   Dùng lớp có sẵn: .secTitle (data-icon), .tipBox, <p>, <ul>.
   ========================================================= */
window.LESSON_NOTES = {

  "1.1.1": `
    <p>Máy tính là một <b>người bạn giúp việc</b>: em có thể học bài, vẽ tranh, xem phim và chơi trò chơi trên đó. Muốn dùng giỏi, trước hết mình làm quen các <b>bộ phận</b> của nó nhé.</p>
    <div class="secTitle" data-icon="🧩">Các bộ phận chính</div>
    <ul>
      <li>🖥️ <b>Màn hình:</b> nơi hiện hình ảnh, giống “khuôn mặt” của máy tính.</li>
      <li>📦 <b>Thân máy (CPU):</b> “bộ não” xử lý mọi việc bên trong.</li>
      <li>⌨️ <b>Bàn phím:</b> để gõ chữ và số.</li>
      <li>🖱️ <b>Chuột:</b> để di chuyển con trỏ và chọn.</li>
      <li>🔊 <b>Loa:</b> để nghe âm thanh.</li>
    </ul>
    <div class="secTitle" data-icon="🔌">Bật và tắt đúng cách</div>
    <p><b>Bật:</b> nhấn nút nguồn (thường có ký hiệu ⏻) trên thân máy, rồi chờ máy khởi động.<br>
    <b>Tắt:</b> chọn nút <b>Bắt đầu → Tắt máy (Shut down)</b>. <b>Không</b> rút điện đột ngột vì có thể làm hỏng máy hoặc mất bài.</p>
    <div class="secTitle" data-icon="🖱️">Chuột và bàn phím làm gì?</div>
    <ul>
      <li><b>Nhấp trái</b> để chọn; <b>nhấp đúp</b> (2 lần nhanh) để mở; <b>nhấp phải</b> để hiện thêm lựa chọn.</li>
      <li>Lăn <b>bánh xe giữa</b> để cuộn lên xuống.</li>
      <li>Trên bàn phím: <b>phím cách</b> tạo khoảng trắng, <b>Enter</b> để xuống dòng/đồng ý.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Tay khô ráo khi dùng máy, thao tác nhẹ nhàng. Khi chưa chắc, hãy hỏi thầy cô hoặc ba mẹ.</div>`,

  "1.1.2": `
    <p>Trên màn hình có nhiều <b>ứng dụng</b> (chương trình) như trình duyệt web, phần mềm vẽ, trình soạn thảo… Mỗi ứng dụng mở ra trong một <b>cửa sổ</b> riêng.</p>
    <div class="secTitle" data-icon="📲">Mở và đóng ứng dụng</div>
    <ul>
      <li><b>Mở:</b> nhấp đúp vào <b>biểu tượng</b> của ứng dụng.</li>
      <li><b>Đóng:</b> nhấn nút <b>✕</b> ở góc trên bên phải cửa sổ.</li>
    </ul>
    <div class="secTitle" data-icon="🪟">Ba nút của cửa sổ</div>
    <ul>
      <li>➖ <b>Thu nhỏ:</b> giấu cửa sổ xuống thanh dưới (chưa đóng, mở lại được).</li>
      <li>⬜ <b>Phóng to:</b> cho cửa sổ chiếm cả màn hình.</li>
      <li>✖️ <b>Đóng:</b> tắt hẳn cửa sổ.</li>
    </ul>
    <div class="secTitle" data-icon="✋">Kéo thả bằng chuột</div>
    <p>Đưa con trỏ vào <b>thanh tiêu đề</b> (dải trên cùng của cửa sổ), <b>giữ</b> nút trái chuột, di chuyển tới chỗ mới rồi <b>thả</b> ra. Nhờ vậy em có thể xếp nhiều cửa sổ <b>cạnh nhau</b> để làm việc.</p>
    <div class="tipBox"><b>Mẹo:</b> Xếp 2–3 cửa sổ cạnh nhau giúp em vừa xem hướng dẫn vừa làm bài, không phải chuyển qua lại.</div>`,

  "1.1.3": `
    <p>Mọi thứ em tạo trên máy — một bài viết, một bức tranh, một bài hát — đều được lưu thành <b>tệp (file)</b>. Để không bị lộn xộn, ta cất các tệp vào <b>thư mục (folder)</b>.</p>
    <div class="secTitle" data-icon="📄">Tệp và thư mục là gì?</div>
    <ul>
      <li><b>Tệp:</b> một “món đồ” số, ví dụ <i>bai-tho.txt</i>, <i>meo-con.png</i>.</li>
      <li><b>Thư mục:</b> một “cái hộp” chứa nhiều tệp, giúp em tìm lại nhanh.</li>
    </ul>
    <div class="secTitle" data-icon="🗂️">Tạo thư mục & lưu bài</div>
    <ul>
      <li>Nhấp phải vào chỗ trống → <b>New → Folder</b> để tạo thư mục mới.</li>
      <li>Khi làm xong, chọn <b>File → Save (Lưu)</b> và chọn thư mục để cất.</li>
    </ul>
    <div class="secTitle" data-icon="🏷️">Đặt tên có ý nghĩa</div>
    <p>Đặt tên để <b>nhìn là biết bên trong có gì</b>. Ví dụ: <i>Toan-lop3</i>, <i>Tranh-cua-em</i>. Tránh tên khó nhớ như <i>abc123</i>.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Sắp xếp gọn gàng hôm nay → mai mốt tìm lại bài <b>nhanh gấp nhiều lần</b>. Đây cũng là một cách rèn tính ngăn nắp.</div>`,

  "1.1.4": `
    <p>Máy tính rất vui, nhưng dùng <b>an toàn và đúng cách</b> mới giúp em khỏe mạnh và tránh rắc rối.</p>
    <div class="secTitle" data-icon="🪑">Ngồi đúng tư thế</div>
    <ul>
      <li>Lưng thẳng, vai thả lỏng; <b>màn hình ngang tầm mắt</b>.</li>
      <li>Hai chân chạm sàn; khuỷu tay tạo góc thoải mái khi gõ phím.</li>
    </ul>
    <div class="secTitle" data-icon="👀">Cho đôi mắt nghỉ ngơi</div>
    <p>Nhớ <b>quy tắc 20–20–20</b>: cứ mỗi <b>20 phút</b>, nhìn ra xa <b>20 giây</b> (khoảng 6 mét). Thỉnh thoảng đứng dậy vươn vai cho đỡ mỏi.</p>
    <div class="secTitle" data-icon="🚫">Không bấm vào thứ lạ</div>
    <ul>
      <li>Không bấm vào <b>đường link lạ</b>, quảng cáo “trúng thưởng”, cửa sổ tự bật lên.</li>
      <li>Không tự tải phần mềm lạ; <b>hỏi người lớn</b> khi thấy điều đáng ngờ.</li>
      <li>Không cho ai biết <b>mật khẩu</b> hay thông tin cá nhân.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Khi có gì khiến em <b>bối rối hay lo lắng</b> trên màn hình, hãy dừng lại và báo ngay cho thầy cô hoặc ba mẹ.</div>`,

};

/* ===== LÝ THUYẾT — LEVEL 1 (module 1.2 → 1.8) ===== */
Object.assign(window.LESSON_NOTES, {

  "1.2.1": `
    <p>Gõ 10 ngón nhanh mà không mỏi bắt đầu từ <b>tư thế đúng</b> và <b>hàng phím cơ sở</b>.</p>
    <div class="secTitle" data-icon="🪑">Ngồi và đặt tay</div>
    <ul>
      <li>Lưng thẳng, vai thả lỏng, cổ tay không tì mạnh xuống bàn.</li>
      <li>Tám ngón đặt ở hàng cơ sở: <b>A S D F</b> (tay trái) – <b>J K L ;</b> (tay phải).</li>
      <li>Hai ngón trỏ đặt ở <b>F</b> và <b>J</b> — có gờ nổi để tìm phím mà không cần nhìn.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Gõ xong, các ngón luôn trở về “nhà” (hàng cơ sở). Tập chậm mà đúng trước, tốc độ sẽ tự tăng — và <b>đừng nhìn phím</b>.</div>`,

  "1.2.2": `
    <p>Sau hàng cơ sở, ta học <b>hàng phím trên</b>: Q W E R T – Y U I O P.</p>
    <div class="secTitle" data-icon="⬆️">Cách với phím</div>
    <p>Mỗi ngón <b>vươn thẳng lên</b> phím ngay phía trên vị trí “nhà” của nó, gõ xong lại <b>rơi về</b> hàng cơ sở. Ví dụ ngón trỏ trái giữ F sẽ vươn lên R và T.</p>
    <div class="tipBox"><b>Mẹo:</b> Gõ đúng ≥80% rồi mới tăng tốc. Sai ở đâu, chậm lại luyện riêng phím đó.</div>`,

  "1.2.3": `
    <p>Hoàn thiện cả 3 hàng chữ cái bằng <b>hàng phím dưới</b> (Z X C V B – N M , . /) và <b>phím cách</b>.</p>
    <div class="secTitle" data-icon="⬇️">Ghi nhớ</div>
    <ul>
      <li>Ngón <b>hạ xuống</b> phím dưới rồi trở về nhà.</li>
      <li><b>Phím cách (Space)</b> gõ bằng <b>ngón cái</b>.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Khi đã quen cả 3 hàng, hãy gõ từng <b>từ trọn vẹn</b> thay vì từng chữ rời để tay chạy mượt hơn.</div>`,

  "1.2.4": `
    <p>Để viết câu hoàn chỉnh, em cần <b>chữ hoa</b> và <b>dấu câu</b>.</p>
    <div class="secTitle" data-icon="🔠">Shift & dấu câu</div>
    <ul>
      <li><b>Giữ Shift</b> rồi gõ chữ để ra <b>chữ hoa</b>; dùng Shift tay đối diện với chữ đang gõ.</li>
      <li>Dấu chấm <b>.</b> kết thúc câu, dấu phẩy <b>,</b> ngắt ý, dấu hỏi <b>?</b> cho câu hỏi.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Đầu câu viết hoa, cuối câu có dấu — đó là thói quen viết đẹp và dễ đọc.</div>`,

  "1.2.5": `
    <p>Muốn gõ <b>tiếng Việt có dấu</b>, em dùng một <b>bộ gõ</b> như <b>Telex</b> hoặc <b>VNI</b>.</p>
    <div class="secTitle" data-icon="🇻🇳">Kiểu gõ Telex (phổ biến)</div>
    <ul>
      <li>Dấu: <b>s</b>=sắc, <b>f</b>=huyền, <b>r</b>=hỏi, <b>x</b>=ngã, <b>j</b>=nặng. Ví dụ: “as” → á.</li>
      <li>Chữ đặc biệt: <b>aa</b>=â, <b>ee</b>=ê, <b>oo</b>=ô, <b>aw</b>=ă, <b>ow</b>=ơ, <b>w</b>=ư, <b>dd</b>=đ.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Gõ sai dấu thì gõ lại chữ cái dấu lần nữa để xoá dấu, rồi thêm dấu đúng.</div>`,

  "1.2.6": `
    <p>Hàng <b>số</b> và các <b>ký tự đặc biệt</b> (@ # ? !) rất cần khi tạo <b>email</b> và <b>mật khẩu</b>.</p>
    <div class="secTitle" data-icon="🔢">Cách gõ</div>
    <ul>
      <li>Hàng số nằm phía trên cùng; các ngón vươn lên đúng cột của mình.</li>
      <li>Ký tự phía trên phím số gõ bằng cách <b>giữ Shift</b> (ví dụ Shift+1 = !).</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Mật khẩu mạnh nên có chữ hoa, chữ thường, số và ký tự đặc biệt — và <b>không cho ai biết</b>.</div>`,

  "1.2.7": `
    <p>Giờ là lúc <b>luyện tốc độ</b> và đo tiến bộ bằng chỉ số <b>WPM</b> (số từ gõ đúng mỗi phút).</p>
    <div class="secTitle" data-icon="🏁">Luyện thế nào</div>
    <ul>
      <li>Chơi các trò gõ phím vui, gõ mỗi ngày một chút.</li>
      <li>Ghi lại WPM mỗi buổi để thấy mình <b>tiến bộ dần</b>.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Ưu tiên <b>gõ đúng</b> trước, rồi mới nhanh. Gõ sai nhiều còn chậm hơn vì phải sửa.</div>`,

  "1.2.8": `
    <p>Bài kiểm tra tổng hợp đo cả <b>tốc độ</b> lẫn <b>độ chính xác</b> — và em sẽ thấy hành trình của mình.</p>
    <div class="secTitle" data-icon="📈">Portfolio gõ phím</div>
    <p>Ghi lại WPM và độ chính xác qua các buổi thành một <b>bảng tiến bộ</b>. Nhìn lại, em sẽ tự hào vì mình đã tiến xa thế nào.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Kỹ năng gõ 10 ngón theo em suốt đời — càng luyện đều càng thành phản xạ tự nhiên.</div>`,

  "1.3.1": `
    <p><b>AI (trí tuệ nhân tạo)</b> là khi máy tính làm được những việc tưởng chỉ người mới làm được: hiểu lời nói, gợi ý, trả lời câu hỏi.</p>
    <div class="secTitle" data-icon="🌍">AI quanh em</div>
    <ul>
      <li>Trợ lý ảo trả lời câu hỏi, đặt báo thức.</li>
      <li>App gợi ý video, bài hát em có thể thích.</li>
      <li>Máy dịch giúp hiểu tiếng nước ngoài.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> AI giỏi <b>từng việc cụ thể</b> nhờ học từ rất nhiều ví dụ, chứ không “biết tuốt” và không có cảm xúc thật như người.</div>`,

  "1.3.2": `
    <p><b>Chatbot</b> là AI mà em có thể <b>trò chuyện</b> bằng cách gõ câu hỏi.</p>
    <div class="secTitle" data-icon="💬">Trò chuyện thế nào</div>
    <ul>
      <li>Gõ câu hỏi rõ ràng, nhấn gửi và đọc câu trả lời.</li>
      <li>Có thể <b>hỏi tiếp</b> để làm rõ hoặc xin ví dụ.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Hãy tò mò nhưng nhớ: câu trả lời của AI là để <b>tham khảo</b>, việc quan trọng vẫn cần kiểm chứng.</div>`,

  "1.3.3": `
    <p><b>Google</b> và <b>AI</b> giúp em tìm thông tin theo hai cách khác nhau.</p>
    <div class="secTitle" data-icon="🔎">Khác nhau ở đâu</div>
    <ul>
      <li><b>Google</b> đưa ra <b>danh sách trang web</b> có sẵn để em tự đọc và chọn.</li>
      <li><b>AI</b> <b>tự viết ra</b> một câu trả lời mới bằng lời của nó.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> AI tiện vì gọn, nhưng vì nó “tự viết” nên đôi khi <b>sai</b> — cần đối chiếu với nguồn đáng tin.</div>`,

  "1.3.4": `
    <p>AI rất giỏi nhưng <b>không phải lúc nào cũng đúng</b>. Biết điều này giúp em dùng AI thông minh hơn.</p>
    <div class="secTitle" data-icon="⚠️">Vì sao AI sai</div>
    <p>AI đôi khi <b>bịa</b> ra thông tin nghe rất xuôi tai nhưng không có thật, hoặc không biết tin mới nhất.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đừng tin AI 100%. Với thông tin quan trọng, hãy <b>kiểm tra lại</b> ở sách hoặc trang chính thống.</div>`,

  "1.3.5": `
    <p>Câu hỏi càng <b>rõ ràng</b>, AI trả lời càng đúng ý em.</p>
    <div class="secTitle" data-icon="🎯">Hỏi cho khéo</div>
    <ul>
      <li>Nói rõ <b>việc cần làm</b>, <b>cho ai</b>, và <b>muốn dài/ngắn</b> ra sao.</li>
      <li>So sánh: ❌ “Kể về chó.” → ✅ “Giải thích cho em lớp 3 vì sao chó là bạn của người, trong 3 câu.”</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Chưa ưng thì nói rõ muốn sửa gì rồi hỏi lại — cứ trò chuyện nhiều lượt.</div>`,

  "1.3.6": `
    <p>Nói chuyện với AI cũng cần <b>lịch sự</b> và <b>an toàn</b>.</p>
    <div class="secTitle" data-icon="🛡️">Luật vàng</div>
    <ul>
      <li><b>Không chia sẻ</b> thông tin cá nhân: mật khẩu, địa chỉ nhà, số điện thoại.</li>
      <li>Yêu cầu <b>lịch sự</b>, không dùng lời lẽ thô lỗ.</li>
      <li>Gặp nội dung khó chịu hay đáng lo, hãy <b>báo người lớn</b>.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Dùng AI theo cách em thấy <b>tự hào khi kể cho ba mẹ, thầy cô</b> nghe.</div>`,

  "1.4.1": `
    <p>Một <b>prompt</b> (câu lệnh cho AI) tốt thường đủ <b>3 phần</b>.</p>
    <div class="secTitle" data-icon="🧱">Công thức 3 phần</div>
    <ul>
      <li><b>Bối cảnh:</b> cho ai, để làm gì.</li>
      <li><b>Yêu cầu:</b> việc cần AI làm (tóm tắt, giải thích, viết…).</li>
      <li><b>Định dạng:</b> muốn kết quả trông thế nào (mấy câu, gạch đầu dòng, bảng…).</li>
    </ul>
    <div class="tipBox"><b>Ví dụ:</b> “Em học lớp 5 (bối cảnh). Giải thích vì sao có mưa (yêu cầu), trong 3 câu ngắn (định dạng).”</div>`,

  "1.4.2": `
    <p>Cho AI <b>đóng vai</b> giúp câu trả lời hợp mục đích hơn.</p>
    <div class="secTitle" data-icon="🎭">Giao vai</div>
    <p>Ví dụ: “Hãy đóng vai <b>thầy giáo vui tính</b>…”, “Hãy đóng vai <b>đầu bếp</b>…”. Cùng một câu hỏi, mỗi vai sẽ cho một cách trả lời khác nhau.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn vai phù hợp với điều em cần: muốn dễ hiểu thì cho vai thầy cô; muốn ý tưởng thì cho vai nhà sáng tạo.</div>`,

  "1.4.3": `
    <p>Em có thể <b>yêu cầu định dạng</b> để kết quả gọn, dễ dùng.</p>
    <div class="secTitle" data-icon="📐">Xin đúng khuôn</div>
    <ul>
      <li>“Trả lời bằng <b>bảng</b>”, “viết thành <b>danh sách gạch đầu dòng</b>”.</li>
      <li>Giới hạn độ dài: “<b>trong 3 câu</b>”, “khoảng 100 chữ”.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Định dạng rõ giúp em đỡ phải sắp xếp lại — như xin thời khoá biểu dạng bảng cho dễ nhìn.</div>`,

  "1.4.4": `
    <p>Chưa ưng câu trả lời? Hãy <b>hỏi tiếp</b> để chỉnh dần.</p>
    <div class="secTitle" data-icon="🔁">Câu nối tiếp</div>
    <ul>
      <li>“<b>Ngắn hơn</b>”, “<b>dễ hiểu hơn</b>”, “<b>thêm ví dụ</b>”.</li>
      <li>AI nhớ ngữ cảnh trước đó nên sẽ sửa theo yêu cầu mới của em.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Làm việc với AI giống <b>trò chuyện nhiều lượt</b>, không phải hỏi một lần là xong.</div>`,

  "1.4.5": `
    <p>AI là <b>bạn học</b> đắc lực khi em biết cách nhờ.</p>
    <div class="secTitle" data-icon="📚">Prompt cho việc học</div>
    <ul>
      <li>Nhờ AI <b>giải thích bài khó</b> bằng ví dụ đời thường.</li>
      <li>Nhờ AI tạo <b>câu đố ôn tập</b> cho môn em còn yếu.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Hãy để AI giúp em <b>hiểu bài</b>, đừng chép đáp án — hiểu rồi mới là của em.</div>`,

  "1.4.6": `
    <p>AI cũng là <b>bạn đồng hành sáng tạo</b>: cùng viết truyện, đặt tên, nghĩ ý tưởng.</p>
    <div class="secTitle" data-icon="✨">Sáng tạo cùng AI</div>
    <p>Em đưa ý tưởng, AI gợi thêm; rồi em chọn lọc và <b>thêm màu sắc của riêng mình</b> để sản phẩm thật sự là của em.</p>
    <div class="tipBox"><b>Mẹo:</b> Cứ mạnh dạn đề nghị “cho em 5 ý tưởng khác nhau” rồi chọn cái em thích nhất để phát triển.</div>`,

  "1.5.1": `
    <p>Việc lớn thường đáng sợ, nhưng luôn có thể <b>chia thành nhiều việc nhỏ</b> dễ làm.</p>
    <div class="secTitle" data-icon="🧩">Phân rã vấn đề</div>
    <p>Ví dụ “dọn phòng” = gấp quần áo + xếp sách + lau bàn + đổ rác. Mỗi việc nhỏ làm xong, việc lớn cũng xong.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Gặp bài khó, hỏi ngay: “Có thể chia thành những phần nhỏ nào?”.</div>`,

  "1.5.2": `
    <p>Nhiều việc phải làm <b>đúng thứ tự</b> mới ra kết quả.</p>
    <div class="secTitle" data-icon="🔢">Thứ tự các bước</div>
    <p>Ví dụ làm bánh: phải trộn bột <b>trước</b> khi nướng. Đảo thứ tự là hỏng. Nhận ra “bước nào trước, bước nào sau” là một kỹ năng quan trọng.</p>
    <div class="tipBox"><b>Mẹo:</b> Khi liệt kê các bước, thử hỏi: “Bước này có cần bước nào xong trước không?”.</div>`,

  "1.5.3": `
    <p><b>Quy luật (pattern)</b> là điều <b>lặp lại</b> mà ta có thể đoán tiếp.</p>
    <div class="secTitle" data-icon="🔵">Tìm quy luật</div>
    <p>Ví dụ dãy 2, 4, 6, 8… quy luật là “cộng 2”. Nhận ra quy luật giúp giải nhanh và đoán được cái tiếp theo.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Máy tính rất giỏi làm theo quy luật — tìm ra quy luật là bước đầu để “dạy” máy.</div>`,

  "1.5.4": `
    <p><b>Trừu tượng hoá</b> là <b>giữ điều quan trọng, bỏ chi tiết thừa</b>.</p>
    <div class="secTitle" data-icon="✂️">Bỏ phần nhiễu</div>
    <p>Khi kể lại một câu chuyện dài trong 3 câu, em phải chọn ý chính và bỏ chi tiết vụn vặt. Đó chính là trừu tượng hoá.</p>
    <div class="tipBox"><b>Mẹo:</b> Hỏi: “Nếu chỉ được giữ 3 điều, em giữ điều nào?”.</div>`,

  "1.5.5": `
    <p>Giờ ta ghép 4 kỹ năng: <b>chia nhỏ, sắp thứ tự, tìm quy luật, bỏ chi tiết thừa</b> để giải một vấn đề thật.</p>
    <div class="secTitle" data-icon="🛠️">Giải quyết vấn đề</div>
    <p>Chọn một vấn đề của lớp, phân rã thành bước nhỏ, sắp thứ tự và lên kế hoạch giải quyết.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đây chính là <b>tư duy máy tính</b> — cách nghĩ giúp em giải mọi loại vấn đề, không chỉ trên máy tính.</div>`,

  "1.5.6": `
    <p>Giải được rồi, ta cần <b>trình bày cách giải</b> để người khác hiểu và làm theo.</p>
    <div class="secTitle" data-icon="🗣️">Nói cho rõ</div>
    <p>Trình bày theo <b>từng bước</b>, dùng ví dụ, tránh nói tắt. Nếu bạn làm theo mà thành công, nghĩa là em đã giải thích tốt.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử để một bạn làm theo đúng lời em nói — chỗ nào bạn kẹt là chỗ em cần giải thích rõ hơn.</div>`,

  "1.6.1": `
    <p><b>Thuật toán</b> là một <b>chuỗi bước rõ ràng</b> mà máy có thể làm theo để hoàn thành một việc.</p>
    <div class="secTitle" data-icon="📋">Ví dụ đời thường</div>
    <p>Công thức nấu ăn, hướng dẫn gấp hạc giấy đều là thuật toán: làm đúng thứ tự các bước sẽ ra kết quả.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Máy làm rất đúng nhưng <b>rất “ngây thơ”</b> — bước phải viết cực rõ, không được bỏ sót.</div>`,

  "1.6.2": `
    <p><b>Flowchart (lưu đồ)</b> là cách <b>vẽ</b> thuật toán bằng hình.</p>
    <div class="secTitle" data-icon="🔷">Các ký hiệu</div>
    <ul>
      <li>Hình <b>oval</b>: bắt đầu / kết thúc.</li>
      <li>Hình <b>chữ nhật</b>: một hành động.</li>
      <li>Hình <b>thoi</b>: một câu hỏi (rẽ nhánh Đúng/Sai).</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Mũi tên nối các hình để chỉ “đi đâu tiếp theo”.</div>`,

  "1.6.3": `
    <p>Mỗi bài toán thường có <b>Input</b> (đưa vào) và <b>Output</b> (nhận ra).</p>
    <div class="secTitle" data-icon="↔️">Vào và ra</div>
    <p>Ví dụ máy tính bỏ túi: <b>Input</b> là các con số em bấm, <b>Output</b> là kết quả phép tính. Xác định rõ I/O giúp hiểu bài toán.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Trước khi giải, hãy hỏi: “Có gì đưa vào? Cần nhận ra gì?”.</div>`,

  "1.6.4": `
    <p><b>Dry run (chạy tay)</b> là <b>lần theo flowchart từng bước</b> với dữ liệu cụ thể, như đóng vai máy tính.</p>
    <div class="secTitle" data-icon="🐾">Chạy thử bằng tay</div>
    <p>Em cầm một ví dụ cụ thể, đi qua từng ô, ghi lại kết quả mỗi bước để xem thuật toán có ra đúng không.</p>
    <div class="tipBox"><b>Mẹo:</b> Dry run giúp <b>bắt lỗi sớm</b> trước khi thật sự cho máy chạy.</div>`,

  "1.6.5": `
    <p><b>Pseudo-code</b> là viết các bước bằng <b>tiếng Việt có cấu trúc</b>, gần với cách máy hiểu nhưng người vẫn đọc được.</p>
    <div class="secTitle" data-icon="📝">Viết cho gọn</div>
    <p>Ví dụ: “NẾU trời mưa THÌ mang ô; NGƯỢC LẠI đội mũ”. Đây là bước trung gian giữa flowchart và code thật.</p>
    <div class="tipBox"><b>Mẹo:</b> Tập chuyển qua lại: flowchart ⇄ pseudo-code để hiểu cả hai cách diễn đạt.</div>`,

  "1.6.6": `
    <p>Thuật toán cũng có thể <b>sai</b>: thiếu bước, sai thứ tự, hoặc quên trường hợp đặc biệt.</p>
    <div class="secTitle" data-icon="🔍">Tìm và sửa lỗi</div>
    <p>Dùng <b>dry run</b> để lần theo, phát hiện chỗ ra kết quả sai, rồi sửa lại bước cho đúng.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Ai cũng mắc lỗi — quan trọng là biết <b>tìm ra và sửa</b> lỗi.</div>`,

  "1.6.7": `
    <p>Em có thể nhờ <b>AI góp ý</b> cho flowchart của mình, nhưng phải <b>tự đánh giá</b> góp ý đó.</p>
    <div class="secTitle" data-icon="🤖">Lọc góp ý của AI</div>
    <p>AI có thể chỉ ra chỗ thiếu, nhưng đôi khi cũng gợi ý sai. Em dùng hiểu biết của mình để giữ lại điều hợp lý.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> AI là <b>trợ lý</b>, người <b>quyết định cuối</b> vẫn là em.</div>`,

  "1.6.8": `
    <p>Ôn lại cả hành trình: từ <b>đề bài → phân rã → flowchart → dry run</b>.</p>
    <div class="secTitle" data-icon="🔗">Ghép các bước</div>
    <p>Với một bài toán mới, em đi tuần tự: hiểu đề, chia nhỏ, vẽ lưu đồ, rồi chạy tay kiểm tra.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Quy trình này áp dụng cho <b>mọi bài toán</b> em gặp sau này.</div>`,

  "1.7.1": `
    <p><b>Scratch</b> là công cụ lập trình bằng cách <b>kéo thả các khối lệnh</b> đầy màu, không cần gõ code.</p>
    <div class="secTitle" data-icon="🐱">Làm quen</div>
    <ul>
      <li><b>Sân khấu</b>: nơi nhân vật hoạt động.</li>
      <li><b>Khối lệnh</b>: kéo ghép để ra lệnh cho nhân vật.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Bắt đầu bằng lệnh “di chuyển” và “xoay” để cho mèo đi theo hình em muốn.</div>`,

  "1.7.2": `
    <p>Khối <b>“Nếu… thì…” (if/else)</b> giúp nhân vật <b>phản ứng khác nhau</b> tuỳ tình huống.</p>
    <div class="secTitle" data-icon="🔀">Rẽ nhánh</div>
    <p>Ví dụ: “<b>Nếu</b> bấm phím mũi tên phải <b>thì</b> đi sang phải”. Điều kiện đúng thì làm một việc, sai thì làm việc khác.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Điều kiện chính là “câu hỏi Đúng/Sai” giống hình thoi trong flowchart.</div>`,

  "1.7.3": `
    <p>Máy tính so sánh bằng <b>lớn hơn / nhỏ hơn / bằng</b> và kết hợp bằng <b>VÀ / HOẶC</b>.</p>
    <div class="secTitle" data-icon="⚖️">Logic</div>
    <ul>
      <li><b>VÀ</b>: đúng khi <b>cả hai</b> điều kiện đều đúng.</li>
      <li><b>HOẶC</b>: đúng khi <b>ít nhất một</b> điều kiện đúng.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Trò “đoán số bí mật” dùng so sánh để báo “cao hơn / thấp hơn”.</div>`,

  "1.7.4": `
    <p><b>Vòng lặp</b> giúp <b>lặp lại</b> một việc mà không phải chép đi chép lại lệnh.</p>
    <div class="secTitle" data-icon="🔁">Lặp lại</div>
    <ul>
      <li>“Lặp lại 10 lần”: làm đúng 10 lần rồi dừng.</li>
      <li>“Lặp mãi mãi”: làm liên tục cho tới khi dừng chương trình.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Vẽ hình vuông = lặp 4 lần (đi tới + quay 90°). Vòng lặp giúp code gọn hơn nhiều.</div>`,

  "1.7.5": `
    <p><b>Biến số</b> là “chiếc hộp” lưu một giá trị có thể <b>thay đổi</b>, như điểm số hay số mạng.</p>
    <div class="secTitle" data-icon="📦">Biến trong game</div>
    <p>Ví dụ biến <b>điểm</b> bắt đầu bằng 0, mỗi lần bắt được táo thì <b>cộng 1</b>. Biến giúp trò chơi “nhớ” trạng thái hiện tại.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đặt tên biến dễ hiểu như <b>diem</b>, <b>mang</b> để nhìn là biết nó chứa gì.</div>`,

  "1.7.6": `
    <p>Bây giờ ghép <b>if/else + vòng lặp + biến</b> vào một trò chơi nhỏ hoàn chỉnh.</p>
    <div class="secTitle" data-icon="🎮">Ghép lại</div>
    <p>Game bắt táo: <b>vòng lặp</b> cho táo rơi liên tục, <b>if</b> kiểm tra bắt trúng để <b>cộng điểm</b> vào biến, hết mạng thì kết thúc.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Ba khối kiến thức này là <b>nền tảng</b> của hầu hết chương trình và trò chơi.</div>`,

  "1.8.1": `
    <p>Dự án cuối Level 1: em <b>tự chọn một vấn đề</b> và lập kế hoạch giải quyết.</p>
    <div class="secTitle" data-icon="🎯">Lập kế hoạch</div>
    <p>Chọn vấn đề gần gũi, <b>phân rã</b> thành các bước, và <b>vẽ flowchart</b> cho giải pháp của em.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn vấn đề vừa sức và em thật sự quan tâm — sẽ làm hào hứng hơn nhiều.</div>`,

  "1.8.2": `
    <p>Giờ là lúc <b>xây sản phẩm</b> theo kế hoạch: một game Scratch hoặc một quy trình có AI hỗ trợ.</p>
    <div class="secTitle" data-icon="🔨">Bắt tay làm</div>
    <p>Làm theo flowchart đã vẽ, hoàn thành phần <b>cốt lõi chạy được</b> trước, chi tiết đẹp để sau.</p>
    <div class="tipBox"><b>Mẹo:</b> Làm từng phần nhỏ và thử ngay — dễ tìm lỗi hơn là làm hết rồi mới chạy.</div>`,

  "1.8.3": `
    <p><b>Kiểm thử</b> là nhờ người khác dùng thử để tìm lỗi mình không thấy.</p>
    <div class="secTitle" data-icon="🧪">Thử và sửa</div>
    <p>Cho 2 bạn dùng sản phẩm, <b>ghi lại chỗ bạn gặp khó</b>, rồi sửa những lỗi quan trọng nhất trước.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Bị góp ý không phải là thất bại — đó là cách sản phẩm <b>tốt lên</b>.</div>`,

  "1.8.4": `
    <p><b>Demo Day</b> là dịp em trình bày sản phẩm của mình.</p>
    <div class="secTitle" data-icon="🎤">Trình bày 3 phút</div>
    <p>Kể theo mạch: <b>Vấn đề → Cách giải → Demo</b>. Nói ngắn gọn, tự tin, cho mọi người thấy sản phẩm chạy thật.</p>
    <div class="tipBox"><b>Mẹo:</b> Luyện nói trước gương hoặc với bạn vài lần để trôi chảy và đỡ hồi hộp.</div>`,

});

/* ===== LÝ THUYẾT — LEVEL 2 (module 2.1 → 2.8) ===== */
Object.assign(window.LESSON_NOTES, {

  "2.1.1": `
    <p>AI thay đổi rất nhanh. Đầu Level 2, ta cùng nhìn xem <b>AI đã tiến xa đến đâu</b> và ôn lại kỹ năng Level 1.</p>
    <div class="secTitle" data-icon="🚀">AI hôm nay làm được gì</div>
    <p>AI nay có thể viết, vẽ, trò chuyện, lập trình phụ… Nhưng vẫn <b>giỏi từng việc</b> và vẫn có thể sai.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử một công cụ AI mới em chưa từng dùng và để ý nó <b>giỏi gì, còn hạn chế gì</b>.</div>`,

  "2.1.2": `
    <p>Bài <b>kiểm tra đầu vào</b> giúp em biết mình đang ở đâu về hiểu biết AI.</p>
    <div class="secTitle" data-icon="📝">Đo để tiến bộ</div>
    <p>Kết quả không phải để so hơn thua, mà để biết <b>điểm mạnh, điểm cần cải thiện</b> của riêng em.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Làm bài thật lòng thì kết quả mới giúp em đặt mục tiêu đúng.</div>`,

  "2.1.3": `
    <p>Từ kết quả kiểm tra, em <b>đặt mục tiêu cá nhân</b> cho 6 tháng tới.</p>
    <div class="secTitle" data-icon="🎯">Mục tiêu tốt</div>
    <p>Mục tiêu nên <b>cụ thể</b> và <b>đo được</b>, ví dụ: “Tự kiểm chứng thông tin trước khi tin”, “Viết prompt đủ các phần”.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn 3 mục tiêu thôi, nhưng theo đuổi đến cùng.</div>`,

  "2.1.4": `
    <p>Ta làm quen <b>Teachable Machine</b> — công cụ giúp em <b>tự dạy máy</b> phân biệt đồ vật bằng ảnh.</p>
    <div class="secTitle" data-icon="🧰">Bộ công cụ Level 2</div>
    <p>Em cho máy xem nhiều ảnh của mỗi loại, máy “học” rồi tự đoán vật mới. Không cần biết lập trình.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử dạy máy phân biệt 2 đồ vật quen thuộc để cảm nhận “máy học” là thế nào.</div>`,

  "2.2.1": `
    <p><b>Dữ liệu là thức ăn của AI</b>: AI không được lập trình sẵn từng câu trả lời, mà <b>học từ ví dụ</b>.</p>
    <div class="secTitle" data-icon="🍎">Học từ ví dụ</div>
    <p>Muốn AI nhận ra mèo, ta cho nó xem <b>rất nhiều ảnh mèo</b> có gán nhãn “mèo”. Xem đủ nhiều, nó tự rút ra đặc điểm.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Dữ liệu càng tốt và đa dạng → AI càng giỏi. “Rác vào thì rác ra”.</div>`,

  "2.2.2": `
    <p>Em sẽ <b>huấn luyện mô hình đầu tiên</b>: dạy máy phân biệt 2 vật bằng ảnh.</p>
    <div class="secTitle" data-icon="🎓">Ba bước</div>
    <ul>
      <li><b>Thu ảnh</b> cho mỗi loại (nhiều góc, đủ sáng).</li>
      <li><b>Huấn luyện</b> để máy học.</li>
      <li><b>Thử</b> với vật mới và xem độ chính xác.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Chụp nhiều góc khác nhau để mô hình “thấy” vật đa dạng hơn.</div>`,

  "2.2.3": `
    <p>Chất lượng <b>dữ liệu</b> quyết định chất lượng mô hình.</p>
    <div class="secTitle" data-icon="🆚">Tốt vs xấu</div>
    <p>Ảnh <b>mờ, thiếu sáng, ít đa dạng</b> làm máy đoán sai. Ảnh <b>rõ, nhiều góc, đủ trường hợp</b> giúp máy giỏi hơn.</p>
    <div class="tipBox"><b>Thử nghiệm:</b> Dạy một mô hình bằng dữ liệu “xấu” và so với bản “tốt” để thấy khác biệt rõ.</div>`,

  "2.2.4": `
    <p><b>Thiên vị (bias)</b> xảy ra khi dữ liệu học bị <b>lệch</b>.</p>
    <div class="secTitle" data-icon="⚖️">Điểm mù của AI</div>
    <p>Nếu chỉ dạy ảnh <b>táo đỏ</b>, mô hình có thể không nhận ra <b>táo xanh</b>. Đó là “điểm mù” do dữ liệu thiếu.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Muốn công bằng, dữ liệu phải <b>đa dạng</b> — đủ mọi trường hợp AI sẽ gặp.</div>`,

  "2.2.5": `
    <p>Máy không chỉ học ảnh mà còn học <b>âm thanh</b>.</p>
    <div class="secTitle" data-icon="🔊">Mô hình âm thanh</div>
    <p>Cho máy nghe nhiều mẫu tiếng <b>vỗ tay</b> và <b>búng tay</b>, nó học cách phân biệt hai âm này.</p>
    <div class="tipBox"><b>Mẹo:</b> Thu mẫu ở nơi yên tĩnh, nhiều lần, để máy nghe rõ đặc trưng từng âm.</div>`,

  "2.2.6": `
    <p>Máy cũng học được <b>tư thế cơ thể</b> qua camera.</p>
    <div class="secTitle" data-icon="🤸">Mô hình tư thế</div>
    <p>Cho máy xem nhiều lần các động tác (giơ tay trái, giơ tay phải…), nó nhận ra em đang làm động tác nào và có thể điều khiển trò chơi.</p>
    <div class="tipBox"><b>Mẹo:</b> Đứng ở khoảng cách và ánh sáng ổn định để máy “thấy” rõ động tác.</div>`,

  "2.2.7": `
    <p>Câu hỏi hay: <b>nhiều dữ liệu hơn có làm AI giỏi hơn không?</b></p>
    <div class="secTitle" data-icon="📊">Thí nghiệm</div>
    <p>Thử huấn luyện với 10, rồi 50, rồi 100 ảnh và đo độ chính xác. Thường nhiều dữ liệu tốt sẽ giúp cải thiện, nhưng đến lúc nào đó sẽ chậm lại.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Không chỉ <b>nhiều</b>, dữ liệu còn phải <b>đúng và đa dạng</b> mới đáng giá.</div>`,

  "2.2.8": `
    <p>Hiểu rồi thì thử <b>giải thích cho người khác</b> — cách học sâu nhất.</p>
    <div class="secTitle" data-icon="🗣️">Giải thích “AI học thế nào”</div>
    <p>Dùng ví dụ đời thường (học nhận biết con mèo), nói theo 3 bước: cho ví dụ → luyện tập → kiểm tra.</p>
    <div class="tipBox"><b>Mẹo:</b> Nếu bạn nghe xong nói lại đúng, nghĩa là em đã hiểu và giảng tốt.</div>`,

  "2.3.1": `
    <p>Máy <b>“nhìn” khác người</b>: với máy, một bức ảnh chỉ là <b>lưới các con số</b> chỉ màu từng điểm.</p>
    <div class="secTitle" data-icon="🔢">Ảnh là số</div>
    <p>Máy <b>so khớp mẫu (pattern)</b> để đoán trong ảnh có gì, chứ không thật sự “hiểu” như em.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Vì chỉ so mẫu nên đổi góc chụp hay ánh sáng có thể làm máy đoán sai.</div>`,

  "2.3.2": `
    <p>Có thể <b>đánh lừa</b> thị giác máy dễ hơn em nghĩ.</p>
    <div class="secTitle" data-icon="🎩">Cách đánh lừa</div>
    <ul>
      <li>Đổi <b>góc chụp</b> lạ.</li>
      <li>Thay <b>ánh sáng</b> quá tối/quá chói.</li>
      <li><b>Che một phần</b> vật.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Biết điểm yếu của AI giúp ta dùng nó cẩn thận hơn ở việc quan trọng.</div>`,

  "2.3.3": `
    <p>Máy <b>“nghe”</b> bằng cách biến âm thanh thành <b>sóng số</b>, rồi đổi giọng nói thành <b>văn bản</b>.</p>
    <div class="secTitle" data-icon="👂">Từ tiếng thành chữ</div>
    <p>Vì thế nếu nói nhỏ, nói nhanh hay ồn ào, máy có thể <b>nghe nhầm</b> — nhất là các từ phát âm gần giống nhau.</p>
    <div class="tipBox"><b>Mẹo:</b> Nói rõ, chậm, ở nơi yên tĩnh thì máy hiểu chính xác hơn.</div>`,

  "2.3.4": `
    <p>Khi AI <b>nhận diện sai</b>, hậu quả có thể nghiêm trọng.</p>
    <div class="secTitle" data-icon="⚠️">Ví dụ thật</div>
    <p>Nhận diện khuôn mặt <b>nhầm người</b> có thể gây oan hay phiền toái. Vì vậy việc quan trọng luôn cần <b>người kiểm tra lại</b>.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Không giao cho AI tự quyết những việc ảnh hưởng lớn đến con người.</div>`,

  "2.3.5": `
    <p>Người và máy <b>giỏi những việc khác nhau</b>.</p>
    <div class="secTitle" data-icon="🤝">Ai giỏi gì</div>
    <ul>
      <li><b>Máy</b> giỏi: làm nhanh, xử lý rất nhiều ảnh, không mệt.</li>
      <li><b>Người</b> giỏi: hiểu ngữ cảnh, nhận ra điều lạ, có phán đoán.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Kết hợp cả hai — máy làm phần lặp, người quyết định — là mạnh nhất.</div>`,

  "2.3.6": `
    <p>Tổng kết thị giác máy: máy “thấy” bằng số, so mẫu, và có nhiều điểm khác con người.</p>
    <div class="secTitle" data-icon="📌">3 điều nhớ</div>
    <p>Ảnh là số; máy so mẫu chứ không hiểu; và máy dễ nhầm khi gặp trường hợp lạ.</p>
    <div class="tipBox"><b>Mẹo:</b> Tự làm một thí nghiệm nhỏ và viết lại “3 điều máy nhìn khác người”.</div>`,

  "2.4.1": `
    <p>Nhiều AI trò chuyện hoạt động bằng cách <b>đoán từ tiếp theo</b>.</p>
    <div class="secTitle" data-icon="🎲">Trò đoán từ</div>
    <p>Cho một câu chưa hoàn chỉnh, AI chọn từ <b>“có vẻ hợp lý nhất”</b> để nối tiếp — làm nhiều lần thì thành câu, thành đoạn.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Chơi thử “đoán từ tiếp theo” để cảm nhận đúng cách AI ngôn ngữ làm việc.</div>`,

  "2.4.2": `
    <p>AI ngôn ngữ <b>đoán theo xác suất</b>, không tra cứu sự thật.</p>
    <div class="secTitle" data-icon="🎯">Vì sao trôi chảy mà vẫn sai</div>
    <p>Nó chọn từ “nghe hợp” dựa trên những gì đã học, nên câu văn mượt mà — nhưng nội dung có thể <b>không đúng thật</b>.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Viết hay ≠ nói đúng. Luôn kiểm chứng thông tin quan trọng.</div>`,

  "2.4.3": `
    <p>Ta có thể <b>bắt quả tang</b> AI bịa (gọi là “ảo giác”).</p>
    <div class="secTitle" data-icon="🕵️">Thử bẫy</div>
    <p>Hỏi về một <b>nhân vật hay cuốn sách không có thật</b>, nhiều khi AI vẫn “tự tin” mô tả — đó là nó bịa.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Ghi lại vài lần AI bịa kèm bằng chứng để nhớ rằng AI có thể sai.</div>`,

  "2.4.4": `
    <p>Điều nguy hiểm: AI thường <b>rất tự tin ngay cả khi sai</b>.</p>
    <div class="secTitle" data-icon="😎">Giọng chắc ≠ đúng</div>
    <p>AI <b>không biết là mình không biết</b>, nên nó trả lời với giọng chắc nịch dù thông tin sai.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đừng để giọng “chắc như đúng rồi” của AI đánh lừa — hãy tự kiểm tra.</div>`,

  "2.4.5": `
    <p>Biết <b>khi nào nên/không nên tin AI</b> giúp em dùng nó khôn ngoan.</p>
    <div class="secTitle" data-icon="✅">Phân loại việc</div>
    <ul>
      <li><b>Hợp với AI:</b> gợi ý ý tưởng, viết nháp, giải thích khái niệm.</li>
      <li><b>Phải kiểm chứng:</b> số liệu, ngày tháng, tên riêng, tin quan trọng.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Dùng AI để bắt đầu nhanh, rồi tự kiểm và hoàn thiện.</div>`,

  "2.4.6": `
    <p>Tổng kết: AI ngôn ngữ đoán từ theo xác suất, nên đôi khi bịa.</p>
    <div class="secTitle" data-icon="🧠">Nhớ cơ chế</div>
    <p>Hiểu “vì sao AI bịa” giúp em không tin mù quáng và biết chỗ cần kiểm chứng.</p>
    <div class="tipBox"><b>Mẹo:</b> Vẽ một poster “Vì sao AI bịa” bằng hình của em để nhớ lâu.</div>`,

  "2.5.1": `
    <p>Nâng prompt từ 3 phần lên <b>5 phần</b> để kết quả sát ý hơn.</p>
    <div class="secTitle" data-icon="🧱">Công thức 5 phần</div>
    <p><b>Vai + Bối cảnh + Yêu cầu + Định dạng + Ví dụ.</b> Càng đủ, AI càng “hiểu ý” em.</p>
    <div class="tipBox"><b>Mẹo:</b> Lấy 3 prompt cũ của em và bổ sung phần còn thiếu để nâng cấp.</div>`,

  "2.5.2": `
    <p><b>Few-shot</b> là <b>đưa vài ví dụ mẫu</b> để AI làm theo đúng kiểu.</p>
    <div class="secTitle" data-icon="🧩">Dạy bằng ví dụ</div>
    <p>Ví dụ: đưa 2–3 câu chúc mẫu rồi bảo “viết thêm 3 câu tương tự”. AI bắt chước phong cách trong ví dụ.</p>
    <div class="tipBox"><b>Mẹo:</b> Ví dụ chất lượng → kết quả chất lượng. Chọn mẫu đúng “giọng” em muốn.</div>`,

  "2.5.3": `
    <p>Yêu cầu AI <b>suy nghĩ từng bước</b> giúp bài khó (nhất là toán) chính xác hơn.</p>
    <div class="secTitle" data-icon="🪜">Từng bước một</div>
    <p>Thêm câu “hãy giải thích <b>từng bước</b> rồi mới kết luận”. AI trình bày quá trình, ít nhảy cóc ra đáp án sai.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Em vẫn nên tự kiểm lại các bước — AI có thể sai ở giữa chừng.</div>`,

  "2.5.4": `
    <p>Việc lớn nên <b>chia thành chuỗi prompt</b>, mỗi prompt một việc.</p>
    <div class="secTitle" data-icon="⛓️">Chia nhỏ nhiệm vụ</div>
    <p>Thay vì một prompt ôm hết, hãy làm lần lượt: lên dàn ý → viết từng phần → chỉnh sửa. Dễ kiểm soát và ít lỗi hơn.</p>
    <div class="tipBox"><b>Mẹo:</b> Kết quả bước trước làm đầu vào cho bước sau.</div>`,

  "2.5.5": `
    <p>Prompt cho <b>tạo hình ảnh</b> cần mô tả thật rõ.</p>
    <div class="secTitle" data-icon="🎨">Mô tả tranh</div>
    <ul>
      <li><b>Chủ thể:</b> vẽ cái gì.</li>
      <li><b>Phong cách:</b> hoạt hình, màu nước…</li>
      <li><b>Bố cục/màu sắc:</b> nền gì, tông màu nào.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Càng chi tiết, tranh càng sát ý; chưa ưng thì sửa mô tả rồi tạo lại.</div>`,

  "2.5.6": `
    <p>Khi kết quả chưa ổn, hãy <b>sửa prompt như thợ</b>: tìm xem prompt <b>thiếu gì</b>.</p>
    <div class="secTitle" data-icon="🔧">Chẩn đoán</div>
    <p>Thiếu bối cảnh? Chưa nói định dạng? Chưa cho ví dụ? Bổ sung đúng phần thiếu rồi thử lại.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đừng đổ lỗi cho AI ngay — thường prompt rõ hơn là kết quả tốt hơn.</div>`,

  "2.5.7": `
    <p>Prompt hay nên được <b>lưu lại</b> thành thư viện dùng nhiều lần.</p>
    <div class="secTitle" data-icon="📚">Thư viện prompt</div>
    <p>Chia prompt theo <b>nhóm việc</b>: học tập, sáng tạo, tóm tắt… Lần sau chỉ việc lấy ra và chỉnh nhẹ.</p>
    <div class="tipBox"><b>Mẹo:</b> Ghi kèm “prompt này dùng cho việc gì” để dễ tìm lại.</div>`,

  "2.5.8": `
    <p><b>Thi đấu prompt</b>: cùng một đề, ai viết prompt cho kết quả tốt hơn.</p>
    <div class="secTitle" data-icon="🏆">Chấm theo tiêu chí</div>
    <p>So sánh dựa trên: đúng ý không, rõ ràng không, đủ định dạng không. Học lẫn nhau từ prompt hay.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Viết prompt là kỹ năng — càng luyện, càng “nói chuyện” với AI giỏi.</div>`,

  "2.6.1": `
    <p><b>Kiểm chứng</b> giúp em không bị lừa bởi thông tin sai.</p>
    <div class="secTitle" data-icon="🔎">Quy trình 3 bước</div>
    <ul>
      <li><b>Nghi ngờ:</b> chưa vội tin ngay.</li>
      <li><b>Tìm nguồn gốc:</b> tin này từ đâu ra.</li>
      <li><b>Đối chiếu:</b> so với <b>2 nguồn độc lập</b> đáng tin.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> Tin thật thường xuất hiện ở nhiều nơi uy tín, không chỉ một chỗ lạ.</div>`,

  "2.6.2": `
    <p>Không phải nguồn nào cũng <b>đáng tin</b> như nhau.</p>
    <div class="secTitle" data-icon="⭐">Xếp độ tin cậy</div>
    <p><b>Báo chính thống, trang khoa học, sách</b> thường đáng tin hơn <b>blog cá nhân hay bài đăng mạng xã hội</b> chưa rõ nguồn.</p>
    <div class="tipBox"><b>Mẹo:</b> Xem ai viết, viết khi nào, có dẫn nguồn không.</div>`,

  "2.6.3": `
    <p><b>Deepfake</b> là ảnh/video giả do AI tạo, trông như thật.</p>
    <div class="secTitle" data-icon="🎭">Dấu hiệu nhận biết</div>
    <ul>
      <li>Chi tiết <b>bất thường</b>: bàn tay, mắt, ánh sáng, chữ bị méo.</li>
      <li>Nội dung quá <b>giật gân</b>, chỉ thấy ở một nguồn lạ.</li>
    </ul>
    <div class="tipBox"><b>Ghi nhớ:</b> “Thấy tận mắt” không còn chắc là thật — hãy kiểm nguồn trước khi tin.</div>`,

  "2.6.4": `
    <p>Kẻ xấu có thể <b>giả giọng người thân</b> để lừa đảo.</p>
    <div class="secTitle" data-icon="📞">Quy tắc xác minh</div>
    <p>Nếu nhận cuộc gọi “người quen” xin tiền hay thông tin gấp, hãy <b>gọi lại số quen thuộc</b> để xác minh, và <b>báo người lớn</b>.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Bình tĩnh, không làm theo ngay khi bị hối thúc — đó là chiêu của kẻ lừa.</div>`,

  "2.6.5": `
    <p>Có thể <b>kiểm chứng chính AI</b> bằng cách bắt nó <b>dẫn nguồn</b>.</p>
    <div class="secTitle" data-icon="🔗">Dò nguồn AI đưa</div>
    <p>Hỏi “dựa vào đâu?” rồi <b>kiểm tra nguồn đó có thật không</b> — đôi khi AI bịa cả nguồn.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Nguồn phải <b>tồn tại và đáng tin</b> mới có giá trị.</div>`,

  "2.6.6": `
    <p>Tổng kết: em đã thành một <b>người kiểm chứng</b>.</p>
    <div class="secTitle" data-icon="🛡️">Cẩm nang bỏ túi</div>
    <p>Nghi ngờ → tìm nguồn → đối chiếu 2 nguồn; cảnh giác ảnh/giọng giả; bắt AI dẫn nguồn.</p>
    <div class="tipBox"><b>Mẹo:</b> Viết cẩm nang kiểm chứng ngắn gọn để luôn nhớ khi lướt mạng.</div>`,

  "2.7.1": `
    <p><b>Dữ liệu cá nhân</b> là thông tin về chính em — rất quý và cần được bảo vệ.</p>
    <div class="secTitle" data-icon="🔒">Những gì cần giữ</div>
    <p>Tên đầy đủ, ảnh, địa chỉ nhà, trường lớp, số điện thoại, thói quen… kẻ xấu có thể lợi dụng nếu em chia sẻ bừa.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Không đưa thông tin cá nhân nhạy cảm cho AI hay người lạ trên mạng.</div>`,

  "2.7.2": `
    <p>Nhiều dịch vụ AI có thể <b>lưu lại hội thoại</b> của em.</p>
    <div class="secTitle" data-icon="🧠">AI nhớ gì</div>
    <p>Vì thế nên cẩn thận với điều em gõ vào. Nhiều công cụ có <b>cài đặt quyền riêng tư</b> để em kiểm soát.</p>
    <div class="tipBox"><b>Mẹo:</b> Nhờ người lớn cùng xem và chỉnh cài đặt riêng tư cho an toàn.</div>`,

  "2.7.3": `
    <p>Dùng AI có trách nhiệm cũng là <b>trung thực</b>.</p>
    <div class="secTitle" data-icon="💛">Ghi công AI</div>
    <p>Bài AI làm hộ không hoàn toàn là của em. Khi có dùng AI hỗ trợ, hãy <b>nói thật</b> — đó là sự trung thực.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Để AI giúp em <b>học và làm tốt hơn</b>, không phải để thay em làm hết.</div>`,

  "2.7.4": `
    <p>Em tự viết <b>bộ quy tắc dùng AI</b> cho riêng mình.</p>
    <div class="secTitle" data-icon="📜">Hiến chương AI</div>
    <p>Ví dụ: dùng AI trung thực, không hại ai, bảo vệ thông tin cá nhân, luôn kiểm chứng thông tin quan trọng.</p>
    <div class="tipBox"><b>Mẹo:</b> Chia sẻ hiến chương với ba mẹ để cùng thống nhất cách dùng AI ở nhà.</div>`,

  "2.8.1": `
    <p>Dự án cuối Level 2: giải một <b>vấn đề thật</b> bằng mô hình phân loại + AI.</p>
    <div class="secTitle" data-icon="🎯">Chọn đề tài</div>
    <p>Chọn vấn đề em quan tâm mà máy có thể giúp phân loại (ví dụ phân loại rác, nhận biết lá cây…).</p>
    <div class="tipBox"><b>Mẹo:</b> Đề tài vừa sức, dữ liệu dễ thu thập sẽ dễ thành công.</div>`,

  "2.8.2": `
    <p><b>Thu thập dữ liệu</b> đúng cách quyết định mô hình tốt hay xấu.</p>
    <div class="secTitle" data-icon="📸">Thu cho chuẩn</div>
    <p>Thu <b>đa dạng</b>, đủ mỗi nhóm, nhiều góc và điều kiện khác nhau; có kế hoạch rõ ràng.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Dữ liệu lệch → mô hình có điểm mù. Hãy nghĩ trước các trường hợp sẽ gặp.</div>`,

  "2.8.3": `
    <p><b>Huấn luyện</b> rồi <b>đánh giá</b> mô hình một cách trung thực.</p>
    <div class="secTitle" data-icon="📈">Đo và tìm điểm mù</div>
    <p>Đo độ chính xác trên vật <b>mới</b> (chưa dùng để học). Tìm những trường hợp mô hình hay sai.</p>
    <div class="tipBox"><b>Mẹo:</b> Ghi lại nơi mô hình sai để biết cần bổ sung dữ liệu gì.</div>`,

  "2.8.4": `
    <p><b>Kiểm chứng chéo</b>: nhờ bạn khác <b>thử phá</b> mô hình của em.</p>
    <div class="secTitle" data-icon="🛡️">Tấn công – phòng thủ</div>
    <p>Bạn tìm cách làm mô hình đoán sai; em ghi lại điểm yếu và <b>vá</b> bằng cách bổ sung dữ liệu phù hợp.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Bị “phá” giúp mô hình mạnh hơn — giống thử thách để tiến bộ.</div>`,

  "2.8.5": `
    <p><b>Hoàn thiện</b> và viết <b>thuyết minh</b> cho dự án.</p>
    <div class="secTitle" data-icon="📦">Đóng gói</div>
    <p>Thuyết minh 1 trang: giải vấn đề gì, cho ai, mô hình hoạt động ra sao, độ chính xác thế nào.</p>
    <div class="tipBox"><b>Mẹo:</b> Viết đơn giản, dễ hiểu, kèm ví dụ để người khác nắm nhanh.</div>`,

  "2.8.6": `
    <p><b>Demo Day Level 2</b>: trình bày dự án và làm bài kiểm tra cuối level.</p>
    <div class="secTitle" data-icon="🎤">Trình bày 5 phút</div>
    <p>Kể mạch lạc: vấn đề → dữ liệu → mô hình → kết quả → điều học được. Cho mọi người xem demo thật.</p>
    <div class="tipBox"><b>Mẹo:</b> Chuẩn bị trước 1–2 câu trả lời cho câu hỏi hay gặp về dự án.</div>`,

});

/* ===== LÝ THUYẾT — LEVEL 3 (module 3.1 → 3.8) ===== */
Object.assign(window.LESSON_NOTES, {

  "3.1.1": `
    <p>Một <b>sản phẩm</b> tốt là thứ <b>giải quyết vấn đề cho người khác</b>, không chỉ cho riêng mình.</p>
    <div class="secTitle" data-icon="💡">Sản phẩm là gì</div>
    <p>Chiếc ô giải vấn đề mưa; app nhắc lịch giải vấn đề hay quên. Sản phẩm bắt đầu từ một <b>nhu cầu có thật</b>.</p>
    <div class="tipBox"><b>Mẹo:</b> Nhìn quanh và hỏi: “Đồ vật này ra đời để giải quyết khó khăn gì?”.</div>`,

  "3.1.2": `
    <p>Ý tưởng hay bắt đầu từ việc <b>săn vấn đề</b> — quan sát khó khăn của người quanh em.</p>
    <div class="secTitle" data-icon="🔎">Quan sát</div>
    <p>Để ý ở nhà, ở lớp, ở khu phố: <b>ai đang gặp khó gì</b>, chỗ nào tốn thời gian hay khó chịu.</p>
    <div class="tipBox"><b>Mẹo:</b> Giữ một “sổ săn vấn đề” — ghi mọi khó khăn em thấy, càng nhiều càng tốt.</div>`,

  "3.1.3": `
    <p>Có nhiều ý tưởng chưa chắc đã hay — cần <b>lọc</b> lại.</p>
    <div class="secTitle" data-icon="🧹">Lọc ý tưởng</div>
    <ul>
      <li><b>Có thật không?</b> Vấn đề có thật sự tồn tại.</li>
      <li><b>Làm nổi không?</b> Vừa sức em.</li>
      <li><b>Em có thích không?</b> Đủ hứng thú để theo đuổi.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Brainstorm thật rộng trước, rồi mới lọc — đừng vội chê ý tưởng nào.</div>`,

  "3.1.4": `
    <p>Đến lúc <b>chốt một hướng đi</b> để theo đuổi cả level.</p>
    <div class="secTitle" data-icon="🎯">Cam kết đề tài</div>
    <p>Viết rõ: <b>vấn đề</b> là gì, <b>ai gặp</b>, và <b>vì sao em chọn</b>. Đây là kim chỉ nam cho mọi bước sau.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Chọn vấn đề em thật sự quan tâm — sẽ có động lực đi đến cùng.</div>`,

  "3.2.1": `
    <p>Điều em nghĩ người dùng cần <b>thường khác</b> điều họ thật sự cần.</p>
    <div class="secTitle" data-icon="👂">Phải hỏi người thật</div>
    <p>Nhiều sản phẩm thất bại vì người làm chỉ đoán. Hỏi người thật giúp em <b>tránh làm nhầm</b>.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử đoán nhu cầu của một bạn rồi hỏi thật — em sẽ bất ngờ vì khác biệt.</div>`,

  "3.2.2": `
    <p>Cách <b>đặt câu hỏi</b> quyết định chất lượng thông tin em thu được.</p>
    <div class="secTitle" data-icon="❓">Hỏi mở, đừng mớm</div>
    <ul>
      <li><b>Câu mở</b> (“Bạn thường gặp khó gì khi…?”) cho nhiều thông tin.</li>
      <li>Tránh <b>hỏi mớm</b> (“Bạn thấy cái này tiện đúng không?”).</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Hỏi về <b>trải nghiệm thật đã xảy ra</b>, đừng hỏi phỏng đoán tương lai.</div>`,

  "3.2.3": `
    <p>Phỏng vấn là kỹ năng cần <b>luyện tập</b>.</p>
    <div class="secTitle" data-icon="🎙️">Luyện phỏng vấn</div>
    <p>Đóng vai hỏi – đáp trong lớp, tập <b>lắng nghe</b> và <b>ghi chép nhanh</b> ý chính thay vì chép từng chữ.</p>
    <div class="tipBox"><b>Mẹo:</b> Sau mỗi câu trả lời hay, hỏi tiếp “Vì sao vậy?” để hiểu sâu hơn.</div>`,

  "3.2.4": `
    <p>Phỏng vấn <b>người thật số 1</b> — ngoài lớp học, về đúng vấn đề em chọn.</p>
    <div class="secTitle" data-icon="🗒️">Ghi biên bản</div>
    <p>Ghi lại: họ gặp khó ở đâu, họ đang xoay xở thế nào, câu nói đáng chú ý.</p>
    <div class="tipBox"><b>Mẹo:</b> Xin phép trước khi ghi chép, và cảm ơn sau khi phỏng vấn.</div>`,

  "3.2.5": `
    <p>Thêm <b>2–3 cuộc phỏng vấn</b> để thấy điều gì <b>lặp lại</b>.</p>
    <div class="secTitle" data-icon="🔁">Tìm điểm chung</div>
    <p>Khi nhiều người cùng nói một khó khăn, đó là <b>tín hiệu mạnh</b> đáng để giải quyết.</p>
    <div class="tipBox"><b>Mẹo:</b> Ghi chú điểm giống nhau giữa các cuộc phỏng vấn.</div>`,

  "3.2.6": `
    <p><b>Insight</b> là một điều <b>bất ngờ, sâu sắc</b> em rút ra từ phỏng vấn.</p>
    <div class="secTitle" data-icon="✨">Rút ra insight</div>
    <p>Không phải điều ai cũng biết, mà là “điều em không ngờ tới” — thường chỉ ra hướng giải pháp hay.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Insight tốt khiến em muốn thốt lên “à, thì ra là vậy!”.</div>`,

  "3.3.1": `
    <p>Từ insight, có <b>nhiều cách</b> giải quyết vấn đề.</p>
    <div class="secTitle" data-icon="🛠️">Chọn giải pháp</div>
    <p>Nghĩ ra nhiều cách rồi chọn <b>cách nhỏ nhất mà vẫn hữu ích</b> — dễ làm và dễ thử.</p>
    <div class="tipBox"><b>Mẹo:</b> Tập bảo vệ lựa chọn: “Em chọn cách này vì…”.</div>`,

  "3.3.2": `
    <p><b>MVP</b> là <b>phiên bản nhỏ nhất mà chạy được</b> và giải quyết được vấn đề cốt lõi.</p>
    <div class="secTitle" data-icon="🌱">Nhỏ mà chạy</div>
    <p>Bỏ hết tính năng “cho vui”, chỉ giữ phần <b>thật sự cần</b> để thử với người dùng sớm.</p>
    <div class="tipBox"><b>Mẹo:</b> Từ danh sách 10 tính năng, mạnh dạn cắt còn 3 cốt lõi.</div>`,

  "3.3.3": `
    <p><b>Wireframe</b> là bản <b>phác giấy</b> các màn hình trước khi làm thật.</p>
    <div class="secTitle" data-icon="✏️">Vẽ phác</div>
    <p>Vẽ nhanh: mỗi màn hình có gì, nút bấm ở đâu, bấm vào thì đi tới đâu (luồng sử dụng).</p>
    <div class="tipBox"><b>Mẹo:</b> Vẽ tay cho nhanh — dễ sửa hơn nhiều so với làm rồi mới đổi.</div>`,

  "3.3.4": `
    <p>Cho <b>người dùng duyệt bản vẽ</b> trước khi tốn công làm.</p>
    <div class="secTitle" data-icon="👀">Duyệt sớm</div>
    <p>Đưa wireframe cho 2 người xem, hỏi họ có hiểu và thấy hữu ích không, rồi <b>sửa theo góp ý</b>.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Sửa trên giấy rẻ và nhanh hơn sửa trên sản phẩm thật.</div>`,

  "3.4.1": `
    <p><b>Python</b> là ngôn ngữ lập trình viết bằng chữ, mạnh mà dễ đọc.</p>
    <div class="secTitle" data-icon="🐍">Dòng code đầu</div>
    <ul>
      <li><b>print(...)</b>: in ra màn hình.</li>
      <li><b>Biến</b>: hộp lưu giá trị, ví dụ <b>ten = "An"</b>.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Giống Scratch nhưng thay khối kéo–thả bằng chữ; ý tưởng vẫn thế.</div>`,

  "3.4.2": `
    <p><b>Điều kiện if/else</b> trong Python giống khối “Nếu… thì…” của Scratch.</p>
    <div class="secTitle" data-icon="🔀">Rẽ nhánh bằng chữ</div>
    <p>Ví dụ: <b>nếu điểm ≥ 8 thì in “Giỏi”, ngược lại in “Cố lên”</b>. Chú ý viết đúng thụt lề.</p>
    <div class="tipBox"><b>Mẹo:</b> Python dùng <b>thụt lề</b> để biết câu lệnh nào thuộc nhánh nào.</div>`,

  "3.4.3": `
    <p><b>Vòng lặp</b> giúp lặp lại mà không chép code.</p>
    <div class="secTitle" data-icon="🔁">for & while</div>
    <ul>
      <li><b>for</b>: lặp qua từng phần tử của một danh sách.</li>
      <li><b>while</b>: lặp <b>chừng nào</b> điều kiện còn đúng.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> In bảng cửu chương là bài luyện vòng lặp tuyệt vời.</div>`,

  "3.4.4": `
    <p><b>Danh sách (list)</b> lưu nhiều thứ; <b>chuỗi (string)</b> là dãy ký tự.</p>
    <div class="secTitle" data-icon="📋">Lưu nhiều thứ</div>
    <p>Với danh sách, em có thể <b>thêm, đếm, tìm kiếm</b>. Ví dụ danh sách việc cần làm.</p>
    <div class="tipBox"><b>Mẹo:</b> Đặt tên biến số nhiều theo số nhiều, ví dụ <b>viec_can_lam</b>.</div>`,

  "3.4.5": `
    <p><b>Hàm (function)</b> giúp <b>gói code</b> lại để dùng nhiều lần.</p>
    <div class="secTitle" data-icon="📦">Gói code</div>
    <p>Viết một lần, gọi nhiều lần; có thể <b>truyền tham số</b> để hàm làm việc với dữ liệu khác nhau.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Thấy đoạn code lặp lại nhiều lần → nên gói thành hàm cho gọn.</div>`,

  "3.4.6": `
    <p>AI có thể <b>viết code</b>, nhưng em cần <b>đọc hiểu</b> để kiểm.</p>
    <div class="secTitle" data-icon="🔍">Đọc code AI</div>
    <p>Đọc từng dòng xem nó làm gì, chạy thử, và <b>tìm chỗ sai</b> — AI không phải lúc nào cũng đúng.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đừng chạy code lạ mà không hiểu — hiểu rồi mới dùng.</div>`,

  "3.4.7": `
    <p>Khi code AI sai, em có thể <b>sửa</b> theo hai cách.</p>
    <div class="secTitle" data-icon="🔧">Sửa code</div>
    <ul>
      <li><b>Nhờ AI sửa:</b> mô tả lỗi rõ để AI đề xuất bản vá.</li>
      <li><b>Tự sửa tay:</b> dùng kiến thức của em.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> So hai cách để hiểu vì sao code chạy đúng, không chỉ “cho nó chạy”.</div>`,

  "3.4.8": `
    <p>Ghép mọi thứ vào một <b>game console nhỏ</b> (chỉ dùng chữ).</p>
    <div class="secTitle" data-icon="🎮">Mini game</div>
    <p>Ví dụ đoán số hoặc oẳn tù tì: dùng biến, if/else, vòng lặp và hàm cùng lúc.</p>
    <div class="tipBox"><b>Mẹo:</b> Làm phần chơi được trước, thêm điểm số và lời nhắn cho vui sau.</div>`,

  "3.5.1": `
    <p>Có nhiều cách xây MVP: <b>vibe coding, no-code, code tay</b>.</p>
    <div class="secTitle" data-icon="🧭">Chọn công cụ</div>
    <ul>
      <li><b>No-code:</b> ghép sẵn, nhanh, ít linh hoạt.</li>
      <li><b>Code tay:</b> linh hoạt, cần kỹ năng.</li>
      <li><b>Vibe coding (dùng AI):</b> mô tả ý muốn, AI phụ dựng.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Chọn công cụ hợp với sản phẩm và sức của em, đừng chọn cái “oách nhất”.</div>`,

  "3.5.2": `
    <p>Bắt đầu bằng <b>dựng khung</b> sản phẩm theo wireframe.</p>
    <div class="secTitle" data-icon="🏗️">Khung sản phẩm</div>
    <p>Tạo dự án và làm <b>màn hình chính</b> mở lên được trước, chưa cần đầy đủ tính năng.</p>
    <div class="tipBox"><b>Mẹo:</b> Có khung chạy được sớm giúp em thấy tiến độ và giữ động lực.</div>`,

  "3.5.3": `
    <p>Làm <b>tính năng cốt lõi số 1</b> — phần quan trọng nhất.</p>
    <div class="secTitle" data-icon="⭐">Cái quan trọng trước</div>
    <p>Đây là tính năng giải quyết <b>đúng vấn đề chính</b>. Làm cho nó chạy được đã, đẹp để sau.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Nếu tính năng lõi không chạy, các thứ khác không cứu được sản phẩm.</div>`,

  "3.5.4": `
    <p>Làm <b>tính năng cốt lõi số 2</b> và <b>kết nối</b> hai phần lại.</p>
    <div class="secTitle" data-icon="🔗">Ghép các phần</div>
    <p>Bảo đảm hai tính năng phối hợp mượt, luồng sử dụng liền mạch từ đầu đến cuối.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử đi hết một lượt như người dùng thật để phát hiện chỗ gãy.</div>`,

  "3.5.5": `
    <p>Thay <b>dữ liệu giả</b> bằng <b>nội dung thật</b>.</p>
    <div class="secTitle" data-icon="🗂️">Dữ liệu thật</div>
    <p>Nội dung thật giúp em thấy sản phẩm gần với thực tế và lộ ra vấn đề mà dữ liệu giả che mất.</p>
    <div class="tipBox"><b>Mẹo:</b> Nhập vài trường hợp “khó” để xem sản phẩm xử lý ổn không.</div>`,

  "3.5.6": `
    <p>Dùng <b>AI để gỡ lỗi (debug)</b> hiệu quả.</p>
    <div class="secTitle" data-icon="🐞">Sửa lỗi cùng AI</div>
    <p>Mô tả lỗi <b>rõ ràng</b> (làm gì → mong đợi gì → thực tế ra sao), dán thông báo lỗi, rồi <b>kiểm tra bản sửa</b> AI đưa.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Ghi nhật ký lỗi: lỗi gì, AI gợi ý gì, cuối cùng em quyết thế nào.</div>`,

  "3.5.7": `
    <p><b>Làm đẹp vừa đủ</b>: dễ dùng quan trọng hơn hào nhoáng.</p>
    <div class="secTitle" data-icon="🎨">Đẹp mà dễ dùng</div>
    <p>Chọn màu, cỡ chữ, bố cục rõ ràng. Tránh trang trí quá đà làm rối mắt.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Người dùng cần <b>dễ hiểu, dễ bấm</b> hơn là nhiều hiệu ứng.</div>`,

  "3.5.8": `
    <p><b>Tổng duyệt nội bộ</b> trước khi gặp người dùng thật.</p>
    <div class="secTitle" data-icon="✅">Dùng thử chéo</div>
    <p>Cả lớp thử sản phẩm của nhau, ghi lỗi lần cuối và sửa những chỗ nghiêm trọng.</p>
    <div class="tipBox"><b>Mẹo:</b> Ưu tiên sửa lỗi khiến người dùng <b>không dùng tiếp được</b>.</div>`,

  "3.6.1": `
    <p><b>Test với người dùng</b> cần có <b>kịch bản</b> rõ ràng.</p>
    <div class="secTitle" data-icon="🗺️">Thiết kế buổi test</div>
    <p>Xác định: nhờ họ <b>làm việc gì</b> trên sản phẩm, và em <b>quan sát điều gì</b> (họ kẹt ở đâu, nói gì).</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Em test <b>sản phẩm</b>, không phải test người dùng — họ không có gì “sai”.</div>`,

  "3.6.2": `
    <p><b>Buổi test số 1</b>: quan sát người thật dùng, <b>không nhắc</b>.</p>
    <div class="secTitle" data-icon="🤫">Quan sát yên lặng</div>
    <p>Để họ tự xoay xở; chỗ họ lúng túng chính là chỗ sản phẩm cần cải thiện. Ghi lại họ kẹt ở đâu.</p>
    <div class="tipBox"><b>Mẹo:</b> Kìm ý muốn giải thích — im lặng quan sát mới thấy vấn đề thật.</div>`,

  "3.6.3": `
    <p><b>Phân tích</b> lỗi rồi <b>sửa đợt 1</b>.</p>
    <div class="secTitle" data-icon="🧮">Gom theo mức</div>
    <p>Chia lỗi theo <b>nặng – nhẹ</b>, sửa cái quan trọng nhất trước (lỗi khiến người dùng không tiếp tục được).</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Không thể sửa hết cùng lúc — hãy chọn ưu tiên khôn ngoan.</div>`,

  "3.6.4": `
    <p><b>Buổi test số 2</b>: người khác thử <b>bản đã sửa</b>.</p>
    <div class="secTitle" data-icon="🔁">So với lần 1</div>
    <p>Xem những lỗi cũ đã hết chưa và có phát sinh vấn đề mới không.</p>
    <div class="tipBox"><b>Mẹo:</b> Test với người <b>mới</b> để có góc nhìn tươi, không quen sản phẩm.</div>`,

  "3.6.5": `
    <p><b>Sửa đợt 2</b>: tinh chỉnh lần cuối theo phản hồi.</p>
    <div class="secTitle" data-icon="✨">Hoàn thiện</div>
    <p>Sau vòng này, em có <b>bản 1.1</b> ổn định hơn, sẵn sàng cho đánh giá.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Sản phẩm tốt lên qua nhiều vòng thử – sửa, không phải làm một lần là xong.</div>`,

  "3.6.6": `
    <p>Cho <b>người dùng chấm điểm</b> để nhận phản hồi thẳng thắn.</p>
    <div class="secTitle" data-icon="⭐">Nhận phản hồi</div>
    <p>Dùng thang điểm đơn giản; đón nhận cả lời khen lẫn chê một cách bình tĩnh và biết ơn.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Phản hồi thật (dù khó nghe) quý hơn lời khen xã giao.</div>`,

  "3.7.1": `
    <p>Sản phẩm cần một <b>cái tên</b> và một <b>câu chuyện</b> ngắn.</p>
    <div class="secTitle" data-icon="🏷️">Tên & tagline</div>
    <p>Tên <b>dễ nhớ</b> + một câu “sản phẩm này giúp <b>ai</b> làm được <b>gì</b>”.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử vài tên rồi hỏi bạn bè tên nào dễ nhớ và hợp nhất.</div>`,

  "3.7.2": `
    <p>Một <b>trang giới thiệu</b> giúp người khác hiểu nhanh sản phẩm.</p>
    <div class="secTitle" data-icon="📄">Trang giới thiệu</div>
    <p>Nêu: <b>vấn đề → giải pháp → ảnh chụp</b> sản phẩm. Ngắn gọn, rõ ràng, có hình.</p>
    <div class="tipBox"><b>Mẹo:</b> Đặt lợi ích cho người dùng lên đầu, đừng liệt kê tính năng khô khan.</div>`,

  "3.7.3": `
    <p><b>Video demo 60 giây</b> cho thấy sản phẩm chạy thật.</p>
    <div class="secTitle" data-icon="🎬">Quay demo</div>
    <p>Quay màn hình + lời dẫn ngắn: vấn đề, thao tác chính, kết quả. Súc tích, đi thẳng vào điểm hay.</p>
    <div class="tipBox"><b>Mẹo:</b> Viết kịch bản trước để 60 giây không bị lan man.</div>`,

  "3.7.4": `
    <p><b>Đưa sản phẩm đến người dùng</b> thật ngoài lớp.</p>
    <div class="secTitle" data-icon="📣">Ra mắt</div>
    <p>Gửi cho 5–10 người phù hợp (đúng nhóm gặp vấn đề), mời họ dùng thử.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Sản phẩm chỉ có ý nghĩa khi <b>có người dùng thật</b>.</div>`,

  "3.7.5": `
    <p><b>Theo dõi tuần đầu</b> để biết sản phẩm hoạt động ra sao.</p>
    <div class="secTitle" data-icon="📊">Quan sát</div>
    <p>Ai dùng, dùng phần nào nhiều, bỏ ở đâu. Những con số này mách em điều cần cải thiện.</p>
    <div class="tipBox"><b>Mẹo:</b> Một bảng theo dõi đơn giản là đủ để bắt đầu.</div>`,

  "3.7.6": `
    <p><b>Rút bài học</b> sau khi ra mắt.</p>
    <div class="secTitle" data-icon="📓">Nhìn lại</div>
    <p>Điều gì hiệu quả, điều gì sẽ làm khác nếu được làm lại. Ghi thành bài học cho lần sau.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Mỗi lần ra mắt là một lần học — thất bại nhỏ cũng là kinh nghiệm quý.</div>`,

  "3.8.1": `
    <p><b>Pitch</b> là bài trình bày ngắn thuyết phục về sản phẩm.</p>
    <div class="secTitle" data-icon="🎤">Cấu trúc pitch</div>
    <p><b>Vấn đề → Giải pháp → Demo → Phản hồi người dùng → Bước tiếp theo.</b></p>
    <div class="tipBox"><b>Mẹo:</b> Mở đầu bằng một câu chuyện/tình huống để người nghe thấy vấn đề là thật.</div>`,

  "3.8.2": `
    <p><b>Slide kể chuyện</b>: ít chữ, nhiều hình, có số liệu thật.</p>
    <div class="secTitle" data-icon="🖼️">Làm slide</div>
    <p>Mỗi slide một ý; dùng hình và số liệu người dùng thật thay vì đoạn văn dài.</p>
    <div class="tipBox"><b>Mẹo:</b> Slide là để <b>hỗ trợ</b> lời nói, không phải để đọc nguyên văn.</div>`,

  "3.8.3": `
    <p><b>Tổng duyệt lần 1</b>: pitch thử trước lớp.</p>
    <div class="secTitle" data-icon="🔁">Nhận góp ý</div>
    <p>Trình bày thử, nhận góp ý theo tiêu chí (rõ ràng, thuyết phục, đúng giờ), rồi lên kế hoạch chỉnh.</p>
    <div class="tipBox"><b>Mẹo:</b> Ghi lại góp ý ngay để không quên khi sửa.</div>`,

  "3.8.4": `
    <p><b>Tổng duyệt lần 2</b>: pitch bản đã sửa và luyện <b>trả lời câu hỏi khó</b>.</p>
    <div class="secTitle" data-icon="💬">Sẵn sàng hỏi đáp</div>
    <p>Dự đoán câu hỏi hay gặp và chuẩn bị câu trả lời ngắn gọn, tự tin.</p>
    <div class="tipBox"><b>Mẹo:</b> Không biết câu trả lời thì thành thật: “Em sẽ tìm hiểu thêm” — vẫn đáng tin.</div>`,

  "3.8.5": `
    <p><b>Demo Day Level 3</b>: trình bày trước phụ huynh và khách mời.</p>
    <div class="secTitle" data-icon="🌟">Ngày trình diễn</div>
    <p>Giữ bình tĩnh, kể mạch lạc, cho xem demo thật. Đây là dịp khoe thành quả nhiều tháng.</p>
    <div class="tipBox"><b>Mẹo:</b> Đến sớm kiểm tra máy móc để tránh sự cố phút chót.</div>`,

  "3.8.6": `
    <p><b>Tổng kết</b> và quyết định có học tiếp Level 4 không.</p>
    <div class="secTitle" data-icon="🧭">Nhìn lại & định hướng</div>
    <p>Nhìn lại 6–8 tháng: em đã học được gì, làm được gì. Hoàn thiện <b>hồ sơ sản phẩm</b>.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Dù đi tiếp hay không, em đã tự tay tạo ra một sản phẩm thật — điều rất đáng tự hào.</div>`,

});

/* ===== LÝ THUYẾT — LEVEL 4 (module 4.1 → 4.7) ===== */
Object.assign(window.LESSON_NOTES, {

  "4.1.1": `
    <p><b>Số liệu</b> kể cho em nghe câu chuyện về sản phẩm — nếu em biết đọc.</p>
    <div class="secTitle" data-icon="📖">Từng con số nghĩa là gì</div>
    <ul>
      <li><b>Lượt dùng:</b> có bao nhiêu người dùng.</li>
      <li><b>Người quay lại:</b> ai thấy hữu ích nên dùng tiếp.</li>
      <li><b>Điểm rơi:</b> chỗ người ta bỏ cuộc.</li>
    </ul>
    <div class="tipBox"><b>Mẹo:</b> Đừng chỉ nhìn con số, hãy hỏi “con số này đang nói điều gì?”.</div>`,

  "4.1.2": `
    <p>Không phải chỉ số nào cũng quan trọng như nhau.</p>
    <div class="secTitle" data-icon="🎯">Chỉ số ảo vs thật</div>
    <p><b>Chỉ số ảo</b> (như lượt xem) nghe kêu nhưng ít ý nghĩa; <b>chỉ số thật</b> (như người quay lại) mới cho biết sản phẩm có giá trị.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn 3 chỉ số thật sự quan trọng và theo dõi chúng.</div>`,

  "4.1.3": `
    <p>Muốn có số liệu, phải <b>gắn đo lường</b> vào sản phẩm.</p>
    <div class="secTitle" data-icon="📏">Thu thập số liệu</div>
    <p>Thêm cách đếm đơn giản: bao nhiêu lần dùng tính năng, bao nhiêu người quay lại.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Chỉ đo những gì em sẽ thật sự <b>dùng để ra quyết định</b>.</div>`,

  "4.1.4": `
    <p><b>Biểu đồ</b> biến dãy số khô khan thành hình dễ đọc.</p>
    <div class="secTitle" data-icon="📊">Vẽ & nhận xét</div>
    <p>Dùng biểu đồ cột/đường để thấy <b>xu hướng</b>: đang tăng, giảm hay đứng yên, rồi viết nhận xét.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn loại biểu đồ hợp dữ liệu; đừng làm rối bằng quá nhiều màu.</div>`,

  "4.1.5": `
    <p>Số liệu nói <b>“cái gì”</b>, phỏng vấn nói <b>“vì sao”</b>.</p>
    <div class="secTitle" data-icon="🎙️">Kết hợp hai nguồn</div>
    <p>Thấy người dùng bỏ ở một bước? Hỏi họ để hiểu lý do — con số chỉ ra chỗ, phỏng vấn giải thích nguyên nhân.</p>
    <div class="tipBox"><b>Mẹo:</b> Phỏng vấn đúng người <b>đã dùng thật</b> để có câu trả lời giá trị.</div>`,

  "4.1.6": `
    <p>Từ số liệu + phỏng vấn, chốt <b>danh sách cải tiến</b> cho phiên bản 2.</p>
    <div class="secTitle" data-icon="📋">Xếp ưu tiên</div>
    <p>Sắp việc theo <b>tác động</b> và <b>công sức</b>: làm cái ảnh hưởng lớn mà không quá tốn công trước.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Không làm tất cả — chọn đúng vài việc đáng giá nhất.</div>`,

  "4.2.1": `
    <p><b>Phiên bản 2 (v2)</b>: cải tiến phần cần đổi, giữ phần đang tốt.</p>
    <div class="secTitle" data-icon="✏️">Thiết kế v2</div>
    <p>Vẽ wireframe cho phần thay đổi; đừng đập đi làm lại thứ đang chạy tốt.</p>
    <div class="tipBox"><b>Mẹo:</b> Thay đổi có chủ đích, dựa trên số liệu — không đổi cho “có vẻ mới”.</div>`,

  "4.2.2": `
    <p>Một <b>kế hoạch 4 tuần</b> giúp việc lớn không bị dồn cục.</p>
    <div class="secTitle" data-icon="🗓️">Chia theo tuần</div>
    <p>Mỗi tuần có <b>mục tiêu và mốc kiểm tra</b> rõ ràng để biết mình có đang đúng tiến độ.</p>
    <div class="tipBox"><b>Mẹo:</b> Đặt mốc “xong cái gì” cụ thể, tránh mốc mơ hồ.</div>`,

  "4.2.3": `
    <p><b>Tuần 1</b>: làm cải tiến ưu tiên số 1.</p>
    <div class="secTitle" data-icon="1️⃣">Việc quan trọng nhất</div>
    <p>Dồn sức cho thay đổi có tác động lớn nhất; hoàn thành và kiểm tra kỹ.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Làm xong dứt điểm một việc tốt hơn làm dở dang nhiều việc.</div>`,

  "4.2.4": `
    <p><b>Tuần 2</b>: cải tiến số 2 và sửa lỗi phát sinh.</p>
    <div class="secTitle" data-icon="2️⃣">Tiến đều</div>
    <p>Thêm cải tiến tiếp theo, đồng thời xử lý lỗi mới xuất hiện khi thay đổi.</p>
    <div class="tipBox"><b>Mẹo:</b> Mỗi lần đổi lớn, thử lại toàn bộ luồng chính một lượt.</div>`,

  "4.2.5": `
    <p><b>Tuần 3</b>: cải tiến số 3 và <b>gắn đo lường</b> cho tính năng mới.</p>
    <div class="secTitle" data-icon="3️⃣">Đo cả cái mới</div>
    <p>Tính năng mới cũng cần số liệu để sau này biết nó có hiệu quả không.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Làm tính năng mà không đo thì không biết nó có đáng giữ.</div>`,

  "4.2.6": `
    <p><b>Kiểm thử hồi quy</b>: bảo đảm tính năng cũ <b>không hỏng</b> vì cái mới.</p>
    <div class="secTitle" data-icon="🔁">Thử lại phần cũ</div>
    <p>Sau khi thêm/đổi, chạy lại danh sách kiểm các tính năng cũ để chắc chúng vẫn hoạt động.</p>
    <div class="tipBox"><b>Mẹo:</b> Giữ một checklist các luồng quan trọng để test nhanh mỗi lần đổi.</div>`,

  "4.2.7": `
    <p><b>Ra mắt v2</b> cho người dùng cũ.</p>
    <div class="secTitle" data-icon="🚀">Thông báo & mời</div>
    <p>Báo cho người dùng cũ điều gì mới, mời họ trải nghiệm bản mới.</p>
    <div class="tipBox"><b>Mẹo:</b> Nêu rõ v2 giúp họ tốt hơn ở chỗ nào để họ muốn thử lại.</div>`,

  "4.2.8": `
    <p><b>So sánh v1 và v2</b> bằng cùng một thước đo.</p>
    <div class="secTitle" data-icon="⚖️">Có căn cứ</div>
    <p>Đo cùng chỉ số cho hai phiên bản; kết luận cải tiến có hiệu quả không dựa trên số liệu, không cảm tính.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> “Tốt hơn” phải có <b>bằng chứng</b>, không chỉ là cảm giác.</div>`,

  "4.3.1": `
    <p>Có việc <b>một AI không kham nổi</b> — cần nhiều AI phối hợp.</p>
    <div class="secTitle" data-icon="🤖">Một AI vs đội AI</div>
    <p>Ví dụ: một AI tóm tắt, một AI dịch, một AI đọc thành tiếng — nối lại thành một chuỗi làm việc lớn.</p>
    <div class="tipBox"><b>Mẹo:</b> Vẽ sơ đồ ai làm việc gì để thấy bức tranh tổng thể.</div>`,

  "4.3.2": `
    <p><b>Pipeline</b> là chuỗi bước, <b>đầu ra bước này là đầu vào bước kia</b>.</p>
    <div class="secTitle" data-icon="🔀">Thiết kế quy trình</div>
    <p>Xác định thứ tự các AI và dữ liệu chuyển giữa chúng; vẽ thành sơ đồ 2–3 bước.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Mỗi bước phải nhận đúng thứ bước trước tạo ra.</div>`,

  "4.3.3": `
    <p><b>Chạy pipeline đầu tiên</b> từ đầu đến cuối.</p>
    <div class="secTitle" data-icon="▶️">Nối 2 AI</div>
    <p>Ví dụ: AI tóm tắt → AI dịch. Kiểm tra dữ liệu chạy suôn qua từng mắt xích.</p>
    <div class="tipBox"><b>Mẹo:</b> Thử từng bước riêng trước, rồi mới nối lại thành chuỗi.</div>`,

  "4.3.4": `
    <p>Trong chuỗi, <b>một mắt xích sai</b> có thể làm hỏng cả kết quả cuối.</p>
    <div class="secTitle" data-icon="🔗">Lỗi lan truyền</div>
    <p>Đặt <b>điểm kiểm tra</b> giữa các bước để bắt lỗi sớm trước khi nó trôi tới cuối.</p>
    <div class="tipBox"><b>Mẹo:</b> Kiểm tra đầu ra mỗi bước có “hợp lý” không trước khi cho đi tiếp.</div>`,

  "4.3.5": `
    <p><b>Con người</b> vẫn cần có mặt trong chuỗi AI.</p>
    <div class="secTitle" data-icon="🧑‍⚖️">Điểm người duyệt</div>
    <p>Bước nào máy tự làm được, bước nào <b>cần người kiểm</b> (nhất là việc quan trọng, nhạy cảm).</p>
    <div class="tipBox"><b>Ghi nhớ:</b> AI làm phần lặp, con người giữ quyền quyết định cuối.</div>`,

  "4.3.6": `
    <p>Áp dụng <b>pipeline vào chính sản phẩm</b> của em.</p>
    <div class="secTitle" data-icon="🛠️">Tích hợp thật</div>
    <p>Thêm một tính năng dùng ≥2 AI phối hợp, giải quyết một việc thật cho người dùng.</p>
    <div class="tipBox"><b>Mẹo:</b> Bắt đầu bằng pipeline nhỏ, chạy được rồi mới mở rộng.</div>`,

  "4.3.7": `
    <p>Chuỗi AI cũng có <b>chi phí và giới hạn</b>.</p>
    <div class="secTitle" data-icon="💸">Được và mất</div>
    <p>Nhiều bước hơn có thể <b>chậm hơn, tốn hơn</b>. Cân nhắc khi nào thật sự đáng dùng cả chuỗi.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Giải pháp tốt là giải pháp <b>đủ dùng</b>, không phải phức tạp nhất.</div>`,

  "4.3.8": `
    <p><b>Trình diễn pipeline</b> cho lớp.</p>
    <div class="secTitle" data-icon="🎤">Giải thích từng mắt xích</div>
    <p>Demo chuỗi AI chạy thật và giải thích mỗi bước làm gì, vì sao cần nó.</p>
    <div class="tipBox"><b>Mẹo:</b> Chuẩn bị trả lời “nếu bước này lỗi thì sao?”.</div>`,

  "4.4.1": `
    <p>Dự án lớn cần <b>nghĩ lớn nhưng chia nhỏ</b>.</p>
    <div class="secTitle" data-icon="🧩">Phân rã Capstone</div>
    <p>Từ ý tưởng lớn, liệt kê các đầu việc cụ thể và mốc thời gian cho từng phần.</p>
    <div class="tipBox"><b>Mẹo:</b> Việc nào còn “to” quá thì chia tiếp cho đến khi làm được trong 1–2 buổi.</div>`,

  "4.4.2": `
    <p><b>Bảng theo dõi công việc</b> giúp em không lạc.</p>
    <div class="secTitle" data-icon="📋">Cần làm – Đang làm – Xong</div>
    <p>Di chuyển từng việc qua ba cột, cập nhật hằng tuần để luôn thấy tiến độ.</p>
    <div class="tipBox"><b>Mẹo:</b> Đừng để quá nhiều việc ở “đang làm” cùng lúc — dễ dở dang.</div>`,

  "4.4.3": `
    <p>Việc nào cũng có thể <b>trễ</b>; cần lường trước <b>rủi ro</b>.</p>
    <div class="secTitle" data-icon="⚠️">Ước lượng & kế hoạch B</div>
    <p>Xác định việc dễ trễ, dấu hiệu nhận biết, và <b>phương án B</b> nếu gặp khó.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Chuẩn bị trước cho rủi ro giúp em không hoảng khi nó xảy ra.</div>`,

  "4.4.4": `
    <p><b>Báo cáo tiến độ</b> ngắn gọn, đều đặn.</p>
    <div class="secTitle" data-icon="🗣️">Ba câu</div>
    <p>Tuần này <b>xong gì</b>, đang <b>vướng gì</b>, tuần sau <b>làm gì</b>. Rõ ràng, không dài dòng.</p>
    <div class="tipBox"><b>Mẹo:</b> Báo cả khó khăn — để được giúp sớm, đừng giấu.</div>`,

  "4.5.1": `
    <p><b>Capstone</b> là dự án lớn nhất, tham vọng hơn Level 3.</p>
    <div class="secTitle" data-icon="🎯">Chọn đề tài</div>
    <p>Tự chọn một vấn đề đáng giải, tự <b>bảo vệ</b> lý do trước hội đồng coach.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn thứ em đủ đam mê để theo đuổi suốt nhiều tuần.</div>`,

  "4.5.2": `
    <p><b>Đặc tả sản phẩm</b> nói rõ em sẽ làm gì.</p>
    <div class="secTitle" data-icon="📄">Viết rõ</div>
    <p>Làm gì, cho ai, tính năng nào <b>bắt buộc</b> (must-have) và tính năng nào để sau.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đặc tả rõ giúp em không “lạc đề” giữa chừng.</div>`,

  "4.5.3": `
    <p><b>Kiến trúc</b> là cách các phần ghép với nhau.</p>
    <div class="secTitle" data-icon="🏛️">Chọn công cụ & sơ đồ</div>
    <p>Chọn công cụ phù hợp và vẽ sơ đồ các phần (giao diện, dữ liệu, AI) kết nối ra sao.</p>
    <div class="tipBox"><b>Mẹo:</b> Ghi lý do chọn từng công cụ để sau nhìn lại còn nhớ.</div>`,

  "4.5.4": `
    <p><b>Wireframe Capstone</b>: phác toàn bộ màn hình và luồng chính.</p>
    <div class="secTitle" data-icon="✏️">Phác toàn bộ</div>
    <p>Vẽ các màn hình chính và cách người dùng đi từ đầu đến cuối.</p>
    <div class="tipBox"><b>Mẹo:</b> Đi thử luồng trên giấy để bắt lỗi thiết kế sớm.</div>`,

  "4.5.5": `
    <p><b>Kế hoạch 10 tuần</b> chi tiết cho hành trình xây dựng.</p>
    <div class="secTitle" data-icon="🗓️">Lịch có mốc</div>
    <p>Chia việc theo tuần, mỗi tuần có mốc kiểm; kế hoạch được duyệt là “lệnh khởi công”.</p>
    <div class="tipBox"><b>Mẹo:</b> Chừa thời gian đệm cho những tuần dễ phát sinh sự cố.</div>`,

  "4.5.6": `
    <p><b>Dựng móng</b>: tạo dự án và khung chính chạy được.</p>
    <div class="secTitle" data-icon="🏗️">Nền vững</div>
    <p>Khung mở lên được là bước đầu vững chắc cho mọi tính năng sau.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Móng chắc thì xây cao mới an toàn.</div>`,

  "4.6.1": `
    <p><b>Tuần xây 1</b>: làm <b>lõi sản phẩm</b> — tính năng trung tâm.</p>
    <div class="secTitle" data-icon="⭐">Cái quan trọng nhất</div>
    <p>Ưu tiên phần giải quyết đúng vấn đề chính, cho nó hoạt động trước.</p>
    <div class="tipBox"><b>Mẹo:</b> Kết thúc tuần bằng một báo cáo tiến độ ngắn.</div>`,

  "4.6.2": `
    <p><b>Tuần xây 2</b>: hoàn thiện <b>luồng chính đầu–cuối</b>.</p>
    <div class="secTitle" data-icon="🔗">Chạy trọn vẹn</div>
    <p>Bảo đảm người dùng đi được từ đầu đến cuối mà không bị kẹt.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Một luồng chạy trọn quan trọng hơn nhiều tính năng dở dang.</div>`,

  "4.6.3": `
    <p><b>Tuần xây 3</b>: <b>tích hợp AI</b> vào sản phẩm.</p>
    <div class="secTitle" data-icon="🤖">Gắn pipeline AI</div>
    <p>Đưa chuỗi AI đã học vào đúng chỗ cần, kiểm tra nó chạy trong sản phẩm thật.</p>
    <div class="tipBox"><b>Mẹo:</b> Có điểm kiểm tra để bắt lỗi khi AI trả kết quả lạ.</div>`,

  "4.6.4": `
    <p><b>Tuần xây 4</b>: thêm <b>tính năng phụ</b> quan trọng thứ hai.</p>
    <div class="secTitle" data-icon="➕">Bổ trợ</div>
    <p>Tính năng hỗ trợ giúp sản phẩm hoàn chỉnh hơn, nhưng chỉ sau khi lõi đã ổn.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đừng sa đà tính năng phụ khi lõi còn chưa vững.</div>`,

  "4.6.5": `
    <p><b>Kiểm thử giữa kỳ</b>: người ngoài dùng thử bản giữa kỳ.</p>
    <div class="secTitle" data-icon="🧪">Test thật</div>
    <p>Quan sát họ dùng, ghi lỗi và lập danh sách cần sửa.</p>
    <div class="tipBox"><b>Mẹo:</b> Test sớm giữa kỳ giúp tránh dồn lỗi về cuối.</div>`,

  "4.6.6": `
    <p><b>Tuần xây 5</b>: <b>sửa và gia cố</b> theo phản hồi.</p>
    <div class="secTitle" data-icon="🔧">Vá điểm yếu</div>
    <p>Xử lý lỗi từ kiểm thử, làm sản phẩm ổn định hơn.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Ưu tiên lỗi ảnh hưởng người dùng nhiều nhất.</div>`,

  "4.6.7": `
    <p><b>Tuần xây 6</b>: <b>hoàn thiện</b> và viết hướng dẫn sử dụng.</p>
    <div class="secTitle" data-icon="✨">Bản ứng viên phát hành</div>
    <p>Làm đẹp vừa đủ, viết hướng dẫn ngắn để người mới dùng được ngay.</p>
    <div class="tipBox"><b>Mẹo:</b> Nhờ người chưa từng dùng đọc hướng dẫn xem có hiểu không.</div>`,

  "4.6.8": `
    <p><b>Tổng kiểm thử</b> trước khi phát hành.</p>
    <div class="secTitle" data-icon="✅">Checklist cuối</div>
    <p>Đi qua danh sách kiểm: mọi luồng chính chạy đúng, không còn lỗi nghiêm trọng.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Tick đủ checklist rồi mới yên tâm phát hành.</div>`,

  "4.6.9": `
    <p><b>Phát hành Capstone</b> — đưa sản phẩm đến người dùng thật.</p>
    <div class="secTitle" data-icon="🚀">Ra mắt</div>
    <p>Mời đúng nhóm người cần sản phẩm, hướng dẫn họ bắt đầu.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Đây là cột mốc lớn — sản phẩm của em bước ra đời thật.</div>`,

  "4.6.10": `
    <p><b>Tuần theo dõi</b> sau phát hành.</p>
    <div class="secTitle" data-icon="📊">Thu số liệu & sửa nóng</div>
    <p>Xem người dùng phản ứng ra sao, sửa ngay lỗi gấp, ghi lại điều cần cải thiện.</p>
    <div class="tipBox"><b>Mẹo:</b> Phản hồi tuần đầu rất quý — lắng nghe kỹ.</div>`,

  "4.7.1": `
    <p>Nhìn lại <b>câu chuyện 2 năm</b>: từ buổi gõ phím đầu tiên đến Capstone.</p>
    <div class="secTitle" data-icon="🎞️">Hành trình của em</div>
    <p>Kể lại các cột mốc và điều em đã trưởng thành — đây là chất liệu cho bài trình bày tốt nghiệp.</p>
    <div class="tipBox"><b>Mẹo:</b> Chọn vài khoảnh khắc đáng nhớ nhất để kể, đừng liệt kê tất cả.</div>`,

  "4.7.2": `
    <p><b>Hồ sơ năng lực (portfolio)</b> gom mọi sản phẩm của em.</p>
    <div class="secTitle" data-icon="🗂️">Portfolio số</div>
    <p>Tập hợp các dự án dạng trang web hoặc tài liệu, có mô tả và hình ảnh.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Portfolio là “bằng chứng” em làm được gì — rất hữu ích về sau.</div>`,

  "4.7.3": `
    <p><b>Slide và luyện nói</b> cho bài trình bày 7 phút.</p>
    <div class="secTitle" data-icon="🖼️">Kể hành trình + demo</div>
    <p>Slide gọn, hình nhiều; luyện nói trôi chảy phần hành trình và demo Capstone.</p>
    <div class="tipBox"><b>Mẹo:</b> Bấm giờ khi luyện để chắc chắn vừa 7 phút.</div>`,

  "4.7.4": `
    <p><b>Tổng duyệt</b>: chạy thử toàn bộ Demo Day.</p>
    <div class="secTitle" data-icon="🎬">Chạy thử</div>
    <p>Diễn tập trọn vẹn, xử lý trước các sự cố kỹ thuật (mạng, máy chiếu, âm thanh).</p>
    <div class="tipBox"><b>Mẹo:</b> Chuẩn bị phương án B nếu demo trực tiếp gặp trục trặc (ví dụ video quay sẵn).</div>`,

  "4.7.5": `
    <p><b>Demo Day tốt nghiệp</b>: trình bày trước phụ huynh, khách mời và các bé khoá dưới.</p>
    <div class="secTitle" data-icon="🌟">Ngày lớn</div>
    <p>Tự tin kể hành trình, demo sản phẩm và trả lời phản biện. Đây là lúc toả sáng.</p>
    <div class="tipBox"><b>Mẹo:</b> Hít thở sâu, nhìn khán giả, và tự hào về chặng đường đã qua.</div>`,

  "4.7.6": `
    <p><b>Lễ tốt nghiệp</b> và định hướng con đường tiếp theo.</p>
    <div class="secTitle" data-icon="🎓">Chặng mới</div>
    <p>Nhận chứng nhận và nghĩ về bước kế: học sâu hơn, tham gia cuộc thi, hay làm dự án riêng.</p>
    <div class="tipBox"><b>Ghi nhớ:</b> Kết thúc lộ trình không phải là hết — đó là <b>điểm khởi đầu</b> cho hành trình lớn hơn của em.</div>`,

});
