/* =========================================================
   HỌC AI VUI — app.js (BỘ KHUNG TRẮNG)
   -----------------------------------------------------------
   Khung UI tái sử dụng từ dự án "Học Tiếng Việt", đã gỡ backend
   (đăng nhập / Supabase / TTS / dashboard). Ưu tiên: PHÁT TRIỂN BÀI HỌC.

   👉 Muốn thêm nội dung, chỉ cần sửa 4 khối DATA bên dưới:
      FEATURES · TOPICS · LESSONS · BANK
   Phần ENGINE (điều hướng, quiz, modal) không cần đụng tới.
   ========================================================= */

/* =========================================================
   1) DATA — CHỈNH Ở ĐÂY
   ========================================================= */

/* Thẻ "Vì sao học cùng chúng mình" ở trang chủ */
const FEATURES = [
  {i:"🧩", h:"Dễ hiểu", p:"Khái niệm AI được kể bằng ví dụ đời thường, không thuật ngữ khó."},
  {i:"🎮", h:"Học mà chơi", p:"Mỗi bài có ví dụ trực quan và câu hỏi ôn tập vui nhộn."},
  {i:"🛡️", h:"Dùng AI đúng cách", p:"Hiểu điểm mạnh, giới hạn và cách dùng AI an toàn, có trách nhiệm."},
  {i:"⚡", h:"Bắt nhịp thời đại", p:"Nắm những gì đang thay đổi thế giới nhờ trí tuệ nhân tạo."},
];

/* Các chủ đề (thẻ màu ở trang chủ). key dùng để gắn câu hỏi vào chủ đề. */
const TOPICS = {
  khainiem: {name:"AI là gì?",        color:"#7C3AED", emoji:"💡"},
  hoatdong: {name:"AI học thế nào",   color:"#06B6D4", emoji:"🧠"},
  ungdung:  {name:"AI quanh ta",      color:"#22C55E", emoji:"🌍"},
  prompt:   {name:"Ra lệnh cho AI",   color:"#F59E0B", emoji:"💬"},
  antoan:   {name:"Dùng AI an toàn",  color:"#EF4444", emoji:"🛡️"},
};

/* ------- BÀI HỌC -------
   Mỗi bài: {icon, color, title, desc, body(HTML)}.
   Trong body dùng được các lớp có sẵn:
     <div class="secTitle" data-icon="📖">Tiêu đề mục</div>
     <div class="tipBox"><b>Mẹo:</b> ...</div>
     <p> ... <b>chữ nổi bật</b> ... </p> · <ul><li>...</li></ul>
*/
const LESSONS = [
  {icon:"💡", color:"#7C3AED", title:"Bài 1: AI là gì?",
    desc:"Hiểu trí tuệ nhân tạo bằng ví dụ gần gũi — không cần biết lập trình.",
    body:`
      <p><b>AI (trí tuệ nhân tạo)</b> là khi máy tính làm được những việc mà trước đây tưởng chỉ con người mới làm được: nhận ra hình ảnh, hiểu câu nói, gợi ý bài hát, trả lời câu hỏi…</p>
      <div class="secTitle" data-icon="🔍">Ví dụ em gặp mỗi ngày</div>
      <ul>
        <li>📱 Điện thoại mở khoá bằng <b>khuôn mặt</b>.</li>
        <li>🎬 App gợi ý <b>video em có thể thích</b>.</li>
        <li>🗺️ Bản đồ chỉ <b>đường nhanh nhất</b>.</li>
        <li>💬 Trợ lý ảo <b>trả lời câu hỏi</b> của em.</li>
      </ul>
      <div class="secTitle" data-icon="🤖">AI khác gì phần mềm thường?</div>
      <p>Phần mềm thường làm <b>đúng y hệt</b> điều người ta lập trình. Còn AI có thể <b>học từ ví dụ</b> để tự cải thiện — càng nhiều dữ liệu, càng làm tốt hơn.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI là khi <b>máy tính làm việc thông minh</b> như nhận diện, hiểu lời, gợi ý.</li>
        <li>Em gặp AI mỗi ngày: mở khoá khuôn mặt, gợi ý video, chỉ đường.</li>
        <li>Khác phần mềm thường, AI biết <b>học từ ví dụ</b> để giỏi dần.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> AI không "thông minh như người". Nó giỏi <b>một việc cụ thể</b> nhờ được học từ rất nhiều ví dụ.</div>`},

  {icon:"🧠", color:"#06B6D4", title:"Bài 2: AI học như thế nào?",
    desc:"Dữ liệu, ví dụ và luyện tập — cách máy 'học' để giỏi dần lên.",
    body:`
      <p>Giống như em học nhận biết con mèo bằng cách <b>nhìn thật nhiều con mèo</b>, AI học bằng cách xem <b>rất nhiều ví dụ</b> (gọi là <b>dữ liệu</b>).</p>
      <div class="secTitle" data-icon="📚">3 bước đơn giản</div>
      <ul>
        <li><b>1. Cho ví dụ:</b> đưa hàng nghìn ảnh có ghi "mèo" hoặc "không phải mèo".</li>
        <li><b>2. Luyện tập:</b> AI đoán, sai thì tự chỉnh lại cho đúng dần.</li>
        <li><b>3. Kiểm tra:</b> đưa ảnh mới để xem AI đã đoán giỏi chưa.</li>
      </ul>
      <div class="secTitle" data-icon="⚠️">Vì sao AI đôi khi sai?</div>
      <p>Nếu ví dụ để học bị <b>thiếu</b> hoặc <b>lệch</b>, AI sẽ đoán sai. Ví dụ chỉ học ảnh mèo lông vàng thì có thể không nhận ra mèo đen.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI học bằng cách xem <b>rất nhiều ví dụ</b> (dữ liệu).</li>
        <li>Ba bước: <b>cho ví dụ → luyện tập → kiểm tra</b>.</li>
        <li>Dữ liệu thiếu hoặc lệch thì AI sẽ <b>đoán sai</b>.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> Dữ liệu tốt → AI tốt. "Rác vào thì rác ra".</div>`},

  {icon:"💬", color:"#F59E0B", title:"Bài 3: Cách ra lệnh cho AI (prompt)",
    desc:"Viết yêu cầu rõ ràng để AI trả lời đúng ý mình hơn.",
    body:`
      <p><b>Prompt</b> là câu lệnh (yêu cầu) em gõ cho AI. Prompt càng <b>rõ ràng</b>, kết quả càng tốt.</p>
      <div class="secTitle" data-icon="✅">Một prompt tốt thường có</div>
      <ul>
        <li>🎯 <b>Việc cần làm:</b> "Tóm tắt", "Giải thích", "Viết"…</li>
        <li>📄 <b>Bối cảnh:</b> cho ai, để làm gì.</li>
        <li>📏 <b>Yêu cầu cụ thể:</b> độ dài, giọng văn, ví dụ.</li>
      </ul>
      <div class="secTitle" data-icon="🔁">So sánh</div>
      <p>❌ "Kể về chó." → quá chung chung.<br>
         ✅ "Giải thích cho học sinh lớp 5 vì sao chó là bạn của con người, trong 3 câu ngắn."</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li><b>Prompt</b> là câu lệnh em gõ cho AI; càng rõ, kết quả càng tốt.</li>
        <li>Prompt tốt có: <b>việc cần làm + bối cảnh + yêu cầu cụ thể</b>.</li>
        <li>Chưa ưng thì <b>nói rõ muốn sửa gì</b> rồi yêu cầu lại.</li>
      </ul>
      <div class="tipBox"><b>Mẹo:</b> Nếu chưa ưng, hãy <b>nói rõ muốn sửa gì</b> rồi yêu cầu lại — cứ trò chuyện nhiều lượt.</div>`},

  {icon:"🌍", color:"#22C55E", title:"Bài 4: AI quanh ta",
    desc:"Điểm mặt những nơi AI đang lặng lẽ giúp em mỗi ngày.",
    body:`
      <p>AI không chỉ nằm trong phim khoa học viễn tưởng. Nó đang <b>ở ngay trong túi em</b>, trong nhà em, và giúp rất nhiều việc mà em ít khi để ý.</p>
      <div class="secTitle" data-icon="🏠">AI ở trong nhà</div>
      <ul>
        <li>🔊 <b>Loa thông minh</b> nghe và trả lời câu hỏi của em.</li>
        <li>📺 App phim <b>gợi ý</b> bộ phim hợp gu em.</li>
        <li>📷 Điện thoại tự <b>làm ảnh đẹp hơn</b> khi em chụp.</li>
      </ul>
      <div class="secTitle" data-icon="🚗">AI khi ra ngoài</div>
      <ul>
        <li>🗺️ Bản đồ tránh <b>đường kẹt xe</b>, chỉ lối nhanh hơn.</li>
        <li>🌐 Công cụ <b>dịch</b> giúp em hiểu tiếng nước ngoài.</li>
        <li>✉️ Hộp thư tự <b>lọc thư rác</b> để em không bị làm phiền.</li>
      </ul>
      <div class="secTitle" data-icon="⚕️">AI giúp việc lớn</div>
      <p>Bác sĩ dùng AI để <b>xem ảnh chụp</b> tìm bệnh sớm; nhà khoa học dùng AI để <b>dự báo thời tiết</b> và tìm thuốc mới. AI là một công cụ mạnh khi ở trong tay con người biết dùng.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI đang giúp em ở khắp nơi: <b>trong nhà, khi ra ngoài</b>, và cả việc lớn.</li>
        <li>Loa thông minh, gợi ý phim, bản đồ, dịch, lọc thư rác… đều nhờ AI.</li>
        <li>AI giúp cả <b>bác sĩ và nhà khoa học</b> làm việc khó.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> AI giống một <b>trợ lý</b> âm thầm. Nó gợi ý và giúp việc, còn <b>quyết định cuối</b> vẫn là ở con người.</div>`},

  {icon:"✨", color:"#8B5CF6", title:"Bài 5: AI tạo sinh là gì?",
    desc:"Loại AI biết viết văn, vẽ tranh, làm nhạc — và cách nó hoạt động.",
    body:`
      <p><b>AI tạo sinh</b> (generative AI) là loại AI có thể <b>tạo ra cái mới</b>: một đoạn văn, một bức tranh, một bản nhạc… dựa trên yêu cầu của em.</p>
      <div class="secTitle" data-icon="🎨">Nó làm được gì?</div>
      <ul>
        <li>✍️ <b>Viết:</b> kể chuyện, làm thơ, tóm tắt bài dài.</li>
        <li>🖼️ <b>Vẽ:</b> tạo hình từ một câu mô tả của em.</li>
        <li>💡 <b>Gợi ý:</b> cho ý tưởng khi em bí, giải thích bài khó.</li>
      </ul>
      <div class="secTitle" data-icon="🔮">Vì sao nó "sáng tạo" được?</div>
      <p>Nó đã học từ <b>rất nhiều</b> văn bản và hình ảnh, nên nó <b>đoán</b> chữ (hoặc nét vẽ) tiếp theo hợp lý nhất. Nói cách khác, nó giống một người <b>đoán từ tiếp theo</b> cực giỏi, chứ không thật sự "hiểu" như con người.</p>
      <div class="secTitle" data-icon="⚖️">Điều cần nhớ</div>
      <p>Vì chỉ là <b>đoán</b>, đôi khi nó tạo ra thứ <b>nghe rất xuôi tai nhưng sai sự thật</b>. Sản phẩm của AI là điểm khởi đầu tốt, nhưng em nên <b>đọc lại và tự chỉnh</b>.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li><b>AI tạo sinh</b> tạo ra cái mới: viết, vẽ, gợi ý ý tưởng.</li>
        <li>Nó "sáng tạo" bằng cách <b>đoán</b> phần tiếp theo hợp lý nhất.</li>
        <li>Vì chỉ đoán nên đôi khi <b>nghe xuôi tai mà sai</b> — cần đọc lại.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> AI tạo sinh là bạn <b>đồng hành ý tưởng</b>, không phải để em chép y nguyên rồi nộp. Hãy để nó gợi ý, còn bài làm là của em.</div>`},

  {icon:"⚠️", color:"#EF4444", title:"Bài 6: Khi AI trả lời sai",
    desc:"Vì sao AI đôi khi 'nói chắc như đúng rồi' mà vẫn sai.",
    body:`
      <p>AI rất giỏi, nhưng <b>không phải lúc nào cũng đúng</b>. Biết vì sao nó sai giúp em dùng AI thông minh hơn.</p>
      <div class="secTitle" data-icon="🌀">3 kiểu sai thường gặp</div>
      <ul>
        <li><b>Bịa thông tin:</b> AI đôi khi "tự tin" đưa ra tên, con số, sự kiện <b>không có thật</b>.</li>
        <li><b>Lỗi thời:</b> AI chỉ biết những gì đã học, nên có thể <b>không biết tin mới nhất</b>.</li>
        <li><b>Thiên lệch:</b> nếu dữ liệu học bị lệch, câu trả lời cũng <b>lệch theo</b>.</li>
      </ul>
      <div class="secTitle" data-icon="🕵️">Cách tự bảo vệ mình</div>
      <ul>
        <li>✅ <b>Kiểm chứng</b> thông tin quan trọng ở nguồn đáng tin (sách, trang chính thống).</li>
        <li>❓ Hỏi lại AI: "Bạn chắc không? Dựa vào đâu?" để nó tự soát.</li>
        <li>🧠 Dùng <b>hiểu biết của em</b> để xem câu trả lời có hợp lý không.</li>
      </ul>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI có thể sai: <b>bịa thông tin, lỗi thời, thiên lệch</b>.</li>
        <li>Luôn <b>kiểm chứng</b> thông tin quan trọng ở nguồn đáng tin.</li>
        <li>Dùng <b>hiểu biết của mình</b> để xem câu trả lời có hợp lý không.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> Đừng tin AI 100%. Hãy coi câu trả lời của nó như lời của một <b>người bạn thông minh nhưng đôi khi nhầm</b> — nghe rồi vẫn tự kiểm tra.</div>`},

  {icon:"🛡️", color:"#EF4444", title:"Bài 7: Dùng AI an toàn & tử tế",
    desc:"Những quy tắc vàng để dùng AI vừa an toàn cho mình, vừa tốt cho người khác.",
    body:`
      <p>AI là công cụ mạnh. Dùng đúng thì rất có ích; dùng sai có thể gây hại. Đây là vài quy tắc giúp em dùng AI <b>an toàn và có trách nhiệm</b>.</p>
      <div class="secTitle" data-icon="🔒">Giữ an toàn cho bản thân</div>
      <ul>
        <li>🙅 <b>Không chia sẻ</b> thông tin cá nhân nhạy cảm: mật khẩu, địa chỉ nhà, số điện thoại.</li>
        <li>🧑‍🤝‍🧑 Khi gặp nội dung khó hiểu hay đáng lo, hãy <b>hỏi người lớn</b> em tin tưởng.</li>
        <li>⏰ AI rất cuốn, nhớ <b>cân bằng</b> giữa dùng máy và nghỉ ngơi, vui chơi ngoài đời.</li>
      </ul>
      <div class="secTitle" data-icon="💛">Tử tế và trung thực</div>
      <ul>
        <li>🚫 Không dùng AI để <b>trêu chọc, bắt nạt</b> hay làm phiền ai.</li>
        <li>📝 Khi AI giúp làm bài, hãy <b>nói thật</b> là em có dùng AI — đó là sự trung thực.</li>
        <li>🎨 Tôn trọng công sức người khác, không lấy sản phẩm AI mạo danh <b>hoàn toàn của mình</b>.</li>
      </ul>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li><b>Không chia sẻ</b> thông tin cá nhân nhạy cảm cho AI.</li>
        <li>Gặp điều đáng lo thì <b>hỏi người lớn</b> tin tưởng; nhớ cân bằng nghỉ ngơi.</li>
        <li>Dùng AI <b>trung thực và tử tế</b>, không để trêu chọc hay bắt nạt ai.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> Quy tắc đơn giản nhất: dùng AI theo cách mà em thấy <b>tự hào khi kể cho ba mẹ, thầy cô</b> nghe.</div>`},

  {icon:"💬", color:"#F59E0B", title:"Bài 8: Bí kíp viết prompt hay hơn",
    desc:"Vài mẹo nhỏ giúp câu lệnh của em cho ra kết quả xịn hơn hẳn.",
    body:`
      <p>Ở Bài 3 em đã biết prompt là gì. Bài này là <b>vài bí kíp</b> để prompt của em ngày càng "cao thủ".</p>
      <div class="secTitle" data-icon="🎭">1. Giao vai cho AI</div>
      <p>Nói cho AI biết nó <b>đóng vai ai</b>. Ví dụ: "Hãy đóng vai một <b>thầy giáo dạy Toán vui tính</b>, giải thích phép nhân cho em lớp 3."</p>
      <div class="secTitle" data-icon="📐">2. Nói rõ khuôn dạng</div>
      <p>Em muốn kết quả trông thế nào? Hãy nói ra: "trả lời bằng <b>3 gạch đầu dòng</b>", "viết thành <b>một bài thơ 4 câu</b>", "giải thích <b>ngắn gọn dễ hiểu</b>".</p>
      <div class="secTitle" data-icon="🧩">3. Cho ví dụ mẫu</div>
      <p>Đưa cho AI một ví dụ để nó bắt chước: "Viết lời chúc kiểu như: <b>'Chúc bạn ngày mới rực rỡ như nắng!'</b> — cho 3 câu tương tự."</p>
      <div class="secTitle" data-icon="🔁">4. Sửa dần qua trò chuyện</div>
      <p>Chưa ưng? Đừng bỏ cuộc. Nói tiếp: "ngắn hơn nữa", "vui hơn chút", "thêm một ví dụ". AI sẽ <b>chỉnh lại</b> theo em.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>4 bí kíp: <b>giao vai, nói rõ khuôn dạng, cho ví dụ mẫu, sửa dần</b>.</li>
        <li>Càng mô tả rõ, AI càng cho kết quả đúng ý.</li>
        <li>Trò chuyện nhiều lượt để <b>chỉnh kết quả</b> tốt hơn.</li>
      </ul>
      <div class="tipBox"><b>Mẹo:</b> Prompt hay = <b>Vai + Việc + Bối cảnh + Khuôn dạng</b>. Càng rõ, AI càng "hiểu ý" em.</div>`},

  {icon:"🚀", color:"#06B6D4", title:"Bài 9: AI và tương lai của em",
    desc:"AI sẽ thay đổi việc học và làm ra sao — và em nên chuẩn bị gì.",
    body:`
      <p>AI đang thay đổi thế giới rất nhanh. Điều đó nghe hơi choáng, nhưng cũng là <b>cơ hội tuyệt vời</b> cho những bạn biết dùng nó.</p>
      <div class="secTitle" data-icon="🔧">AI là công cụ, không phải phép màu</div>
      <p>AI làm giúp em nhiều việc lặp đi lặp lại, để em có thời gian cho phần <b>thú vị và sáng tạo</b> hơn. Nhưng nó vẫn cần <b>người dẫn dắt</b> — chính là em.</p>
      <div class="secTitle" data-icon="🌱">Kỹ năng đáng luyện</div>
      <ul>
        <li>🤔 <b>Tư duy phản biện:</b> biết đặt câu hỏi, không tin ngay mọi thứ.</li>
        <li>🎨 <b>Sáng tạo:</b> nghĩ ra ý tưởng mới mà máy khó nghĩ ra.</li>
        <li>💛 <b>Thấu cảm:</b> hiểu và quan tâm con người — điều AI không làm thay được.</li>
        <li>🛠️ <b>Biết dùng công cụ:</b> trong đó có cả AI, một cách khéo léo.</li>
      </ul>
      <div class="secTitle" data-icon="🌟">Tin vui</div>
      <p>Em không cần trở thành chuyên gia máy tính mới dùng được AI. Chỉ cần <b>tò mò, chịu thử</b> và dùng nó <b>tử tế</b>, em đã đi trước rất nhiều người rồi.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI là <b>công cụ</b> giúp việc, vẫn cần con người dẫn dắt.</li>
        <li>Kỹ năng đáng luyện: <b>phản biện, sáng tạo, thấu cảm, biết dùng công cụ</b>.</li>
        <li>Chỉ cần <b>tò mò, chịu thử và tử tế</b> là em đã đi trước rồi.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> Tương lai không thuộc về AI, mà thuộc về <b>những người biết hợp tác với AI</b>. Em hoàn toàn có thể là một trong số đó!</div>`},

  {icon:"👁️", color:"#7C3AED", title:"Bài 10: Máy tính 'nhìn' như thế nào?",
    desc:"Vì sao điện thoại nhận ra khuôn mặt, phân biệt được chó với mèo.",
    body:`
      <p>Con người nhìn bằng mắt, còn máy tính "nhìn" bằng một khả năng gọi là <b>thị giác máy tính</b>. Nhưng với máy, một tấm ảnh chỉ là <b>rất nhiều ô màu nhỏ</b> (điểm ảnh) ghép lại.</p>
      <div class="secTitle" data-icon="🔢">Ảnh với máy là gì?</div>
      <p>Mỗi bức ảnh được máy đọc thành <b>các con số</b> chỉ màu sắc từng điểm. Từ những con số đó, AI tìm ra <b>đường nét, hình khối</b> — như hai mắt, một mũi để biết đó là khuôn mặt.</p>
      <div class="secTitle" data-icon="🐶">Nó dùng để làm gì?</div>
      <ul>
        <li>📱 <b>Mở khoá</b> điện thoại bằng khuôn mặt.</li>
        <li>🚗 Xe tự lái <b>nhận ra</b> người đi bộ, biển báo.</li>
        <li>🍎 App <b>phân loại</b> trái cây, cây cỏ qua ảnh chụp.</li>
      </ul>
      <div class="secTitle" data-icon="⚠️">Nó vẫn nhầm được</div>
      <p>Nếu thiếu sáng, bị che, hay gặp thứ chưa từng học, máy có thể <b>nhận nhầm</b>. Vì vậy với việc quan trọng, con người vẫn cần <b>kiểm tra lại</b>.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>Với máy, ảnh chỉ là <b>các ô màu = những con số</b>.</li>
        <li>AI tìm <b>đường nét, hình khối</b> để nhận ra vật.</li>
        <li>Thiếu sáng hay vật lạ thì máy vẫn có thể <b>nhìn nhầm</b>.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> Máy tính không "thấy" như em. Nó <b>tính toán từ các con số</b> để đoán trong ảnh có gì.</div>`},

  {icon:"🎤", color:"#06B6D4", title:"Bài 11: Máy tính 'nghe' và 'nói'",
    desc:"Vì sao trợ lý ảo hiểu được lời em và trả lời bằng giọng nói.",
    body:`
      <p>Khi em nói "Hôm nay trời thế nào?", trợ lý ảo phải làm hai việc: <b>nghe hiểu</b> lời em, rồi <b>nói lại</b> câu trả lời. Cả hai đều nhờ AI.</p>
      <div class="secTitle" data-icon="👂">Bước 1: Nghe hiểu</div>
      <p>AI biến <b>âm thanh giọng nói</b> thành chữ (giống ghi chép lại lời em), rồi mới hiểu em muốn gì. Đây là lý do đôi khi nó <b>nghe nhầm</b> nếu em nói nhỏ hoặc ồn quá.</p>
      <div class="secTitle" data-icon="🗣️">Bước 2: Nói lại</div>
      <p>Sau khi tìm ra câu trả lời, AI biến <b>chữ thành giọng nói</b> để đọc cho em nghe. Giọng đọc ngày nay nghe rất tự nhiên, gần như người thật.</p>
      <div class="secTitle" data-icon="🌟">Em gặp ở đâu?</div>
      <ul>
        <li>🔊 Trợ lý ảo trên điện thoại, loa thông minh.</li>
        <li>📖 App <b>đọc sách</b> thành tiếng cho người khiếm thị.</li>
        <li>🎬 Tự tạo <b>phụ đề</b> cho video.</li>
      </ul>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI <b>nghe</b> bằng cách đổi giọng nói thành chữ để hiểu.</li>
        <li>AI <b>nói</b> bằng cách đổi chữ thành giọng đọc.</li>
        <li>Ồn ào hay nói nhỏ có thể khiến AI <b>nghe nhầm</b>.</li>
      </ul>
      <div class="tipBox"><b>Mẹo:</b> Nói <b>rõ ràng, chậm rãi</b> ở nơi yên tĩnh thì trợ lý ảo hiểu em chính xác hơn.</div>`},

  {icon:"🦾", color:"#22C55E", title:"Bài 12: Robot và AI",
    desc:"Robot có phải lúc nào cũng thông minh? AI giúp robot điều gì?",
    body:`
      <p>Nhiều bạn nghĩ AI là <b>robot</b>. Thật ra hai thứ khác nhau: <b>robot</b> là cái máy có thân, tay chân; còn <b>AI</b> là "bộ não" giúp nó biết phải làm gì.</p>
      <div class="secTitle" data-icon="🤖">Robot có luôn thông minh không?</div>
      <p>Không. Nhiều robot chỉ làm <b>đúng một việc lặp lại</b> (như cánh tay lắp ráp trong nhà máy) — chúng <b>không có AI</b>. Robot trở nên "thông minh" khi được gắn AI để <b>nhìn, nghe và quyết định</b>.</p>
      <div class="secTitle" data-icon="✨">AI giúp robot làm gì?</div>
      <ul>
        <li>🧹 Robot hút bụi <b>tránh vật cản</b>, tự tìm đường.</li>
        <li>📦 Robot kho hàng <b>tự lấy và giao</b> đúng gói.</li>
        <li>🚁 Thiết bị bay <b>giữ thăng bằng</b>, né chướng ngại.</li>
      </ul>
      <div class="secTitle" data-icon="💡">Điều thú vị</div>
      <p>AI có thể tồn tại <b>không cần thân thể</b> (như chatbot trong điện thoại). Ngược lại, một robot không có AI thì chỉ là cỗ máy làm theo lệnh cứng.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li><b>Robot ≠ AI</b>: robot là thân máy, AI là bộ não.</li>
        <li>Không phải robot nào cũng thông minh.</li>
        <li>AI giúp robot <b>nhìn, nghe, quyết định</b> linh hoạt hơn.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> AI là <b>phần suy nghĩ</b>, robot là <b>phần hành động</b>. Ghép lại mới thành robot thông minh.</div>`},

  {icon:"🎮", color:"#F59E0B", title:"Bài 13: AI trong trò chơi",
    desc:"Vì sao 'quái' trong game biết đuổi theo, và máy chơi cờ giỏi đến vậy.",
    body:`
      <p>Chơi game một mình mà vẫn thấy <b>có đối thủ</b>? Đó là nhờ AI điều khiển các nhân vật máy để trận đấu thêm hào hứng.</p>
      <div class="secTitle" data-icon="👾">AI làm gì trong game?</div>
      <ul>
        <li>🏃 Điều khiển <b>nhân vật máy</b> đuổi theo, né tránh, phối hợp.</li>
        <li>⚖️ Chỉnh <b>độ khó</b> cho vừa sức người chơi.</li>
        <li>🗺️ Tạo <b>màn chơi, bản đồ</b> mới lạ mỗi lần.</li>
      </ul>
      <div class="secTitle" data-icon="♟️">Máy chơi cờ siêu giỏi</div>
      <p>Có những AI chơi cờ vua, cờ vây <b>giỏi hơn cả nhà vô địch</b>. Chúng làm được vì <b>thử rất nhiều nước đi</b> trong đầu và chọn nước tốt nhất — nhanh hơn con người rất nhiều.</p>
      <div class="secTitle" data-icon="🧠">Điều đáng nhớ</div>
      <p>Giỏi cờ không có nghĩa AI "thông minh toàn diện". Nó chỉ <b>cực giỏi đúng trò đó</b>, đem sang việc khác lại chịu thua.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li>AI điều khiển nhân vật máy, chỉnh độ khó, tạo màn chơi.</li>
        <li>Máy chơi cờ giỏi nhờ <b>thử rất nhiều nước đi</b> thật nhanh.</li>
        <li>AI giỏi game vẫn chỉ <b>giỏi một việc cụ thể</b>.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> Đối thủ máy trong game là một dạng AI. Nó giúp cuộc chơi vui hơn, nhưng vẫn <b>chỉ giỏi trong game đó</b> thôi.</div>`},

  {icon:"🎭", color:"#EF4444", title:"Bài 14: Deepfake & tin giả",
    desc:"AI có thể tạo ảnh, video giả như thật — làm sao để không bị lừa.",
    body:`
      <p>AI tạo sinh giỏi đến mức làm được <b>ảnh, giọng nói, video giả</b> trông như thật. Loại nội dung giả này gọi là <b>deepfake</b>. Biết về nó giúp em không bị lừa.</p>
      <div class="secTitle" data-icon="🕵️">Vì sao cần cảnh giác?</div>
      <p>Kẻ xấu có thể dùng deepfake để <b>tung tin sai</b>, giả giọng người thân để lừa tiền, hoặc bịa lời người nổi tiếng chưa từng nói.</p>
      <div class="secTitle" data-icon="🔍">Mẹo nhận biết</div>
      <ul>
        <li>👀 Xem kỹ chỗ <b>bất thường</b>: mắt, tay, ánh sáng, chữ trong ảnh hơi "sai sai".</li>
        <li>🔗 <b>Kiểm nguồn</b>: tin thật thường có ở nhiều trang uy tín, không chỉ một chỗ lạ.</li>
        <li>🤔 Tin nào khiến em <b>quá tức giận hoặc quá sốc</b> — hãy dừng lại, kiểm tra trước khi tin.</li>
      </ul>
      <div class="secTitle" data-icon="🛑">Khi nghi ngờ</div>
      <p>Đừng vội <b>chia sẻ</b>. Hỏi người lớn em tin tưởng, hoặc tra ở nguồn chính thống. Không lan truyền tin chưa kiểm chứng cũng là <b>giúp cộng đồng</b>.</p>
      <div class="secTitle" data-icon="📣">Hôm nay mình đã học được</div>
      <ul>
        <li><b>Deepfake</b> là ảnh/video/giọng giả do AI tạo, trông như thật.</li>
        <li>Nhận biết bằng cách soi chi tiết bất thường và <b>kiểm nguồn</b>.</li>
        <li>Nghi ngờ thì <b>đừng chia sẻ</b>, hãy kiểm tra trước.</li>
      </ul>
      <div class="tipBox"><b>Ghi nhớ:</b> "Thấy tận mắt" không còn chắc là thật. Hãy <b>kiểm chứng trước khi tin và chia sẻ</b>.</div>`},
];

/* ------- NGÂN HÀNG CÂU HỎI (Kiểm tra) -------
   Chia theo mức sao 1 / 2 / 3 (dễ → khó). Mỗi câu:
     {topic, q, opts:[...4...], a: chỉ-số-đáp-án-đúng}
   Đáp án sẽ được tự động xáo trộn khi hiển thị.
*/
const BANK = {
  1: [
    {topic:"khainiem", q:"AI là viết tắt của điều gì?", opts:["Trí tuệ nhân tạo","Áo ấm Ý","Ăn ít","Ánh sáng"], a:0},
    {topic:"ungdung", q:"Việc nào dưới đây có dùng AI?", opts:["Mở khoá điện thoại bằng khuôn mặt","Bật công tắc đèn","Đóng cửa sổ","Rót nước"], a:0},
    {topic:"khainiem", q:"AI chạy trên thiết bị gì?", opts:["Máy tính / điện thoại","Cây bút chì","Quyển vở","Cục tẩy"], a:0},
    {topic:"hoatdong", q:"AI học chủ yếu từ đâu?", opts:["Dữ liệu (ví dụ)","Ánh trăng","Nước mưa","Gió"], a:0},
    {topic:"ungdung", q:"Loa thông minh trong nhà dùng AI để làm gì?", opts:["Nghe và trả lời câu hỏi","Nấu cơm","Quét nhà","Tưới cây"], a:0},
    {topic:"khainiem", q:"AI tạo sinh có thể làm gì?", opts:["Viết văn, vẽ tranh theo yêu cầu","Giặt quần áo","Rửa bát","Đá bóng"], a:0},
    {topic:"antoan", q:"Với AI, em KHÔNG nên chia sẻ điều gì?", opts:["Mật khẩu, địa chỉ nhà","Một câu hỏi Toán","Tên loài hoa","Màu em thích"], a:0},
    {topic:"hoatdong", q:"Với máy tính, một bức ảnh thực chất là gì?", opts:["Nhiều ô màu = những con số","Một bài hát","Một mùi hương","Một cơn gió"], a:0},
    {topic:"ungdung", q:"Robot hút bụi dùng AI để làm gì?", opts:["Tránh vật cản, tự tìm đường","Hát ru","Pha trà","Gấp quần áo"], a:0},
  ],
  2: [
    {topic:"hoatdong", q:"Muốn AI nhận ra con mèo, ta cần cho nó xem gì?", opts:["Nhiều ảnh mèo có gán nhãn","Một câu thơ","Một bản nhạc buồn","Một hộp bút màu"], a:0},
    {topic:"prompt", q:"\"Prompt\" nghĩa là gì?", opts:["Câu lệnh/yêu cầu ta gõ cho AI","Tên một loại máy in","Một môn thể thao","Một loại pin"], a:0},
    {topic:"antoan", q:"Khi AI trả lời, ta nên làm gì?", opts:["Kiểm tra lại thông tin quan trọng","Tin tuyệt đối 100%","Chép ngay không đọc","Tắt máy đi ngủ"], a:0},
    {topic:"ungdung", q:"Ứng dụng nào KHÔNG phải nhờ AI?", opts:["Dùng thước kẻ để đo","Gợi ý video","Dịch ngôn ngữ tự động","Lọc thư rác"], a:0},
    {topic:"antoan", q:"Vì sao không nên tin AI 100%?", opts:["AI đôi khi bịa hoặc trả lời sai","AI luôn buồn ngủ","AI sợ ánh sáng","AI chỉ nói tiếng Anh"], a:0},
    {topic:"prompt", q:"Cách nào giúp prompt cho kết quả tốt hơn?", opts:["Giao vai và nói rõ khuôn dạng","Viết thật ngắn kiểu 'làm đi'","Gõ toàn chữ in hoa","Không nói gì cả"], a:0},
    {topic:"ungdung", q:"AI tạo sinh 'sáng tạo' bằng cách nào?", opts:["Đoán phần tiếp theo hợp lý nhất","Hỏi ý ông Bụt","Tra từ điển giấy","Bấm số ngẫu nhiên"], a:0},
    {topic:"khainiem", q:"Câu nào ĐÚNG về robot và AI?", opts:["Robot là thân máy, AI là 'bộ não'","Robot nào cũng có AI","AI phải có tay chân mới chạy được","Robot và AI là một thứ y hệt"], a:0},
    {topic:"hoatdong", q:"Trợ lý ảo 'nghe hiểu' lời em bằng cách nào?", opts:["Đổi giọng nói thành chữ rồi hiểu","Đọc suy nghĩ trong đầu","Nhìn nét mặt","Ngửi mùi"], a:0},
  ],
  3: [
    {topic:"prompt", q:"Prompt nào rõ ràng và dễ cho kết quả tốt nhất?", opts:["Giải thích cho học sinh lớp 5 vì sao trời mưa, trong 3 câu","Nói gì đó","Kể chuyện","Viết đi"], a:0},
    {topic:"hoatdong", q:"Vì sao AI đôi khi trả lời sai?", opts:["Do dữ liệu học bị thiếu hoặc lệch","Do trời nóng","Do màn hình nhỏ","Do bàn phím cũ"], a:0},
    {topic:"antoan", q:"Đâu là cách dùng AI có trách nhiệm?", opts:["Không chia sẻ thông tin cá nhân nhạy cảm","Đưa hết mật khẩu cho AI","Tin mọi câu trả lời","Dùng AI để bắt nạt bạn"], a:0},
    {topic:"khainiem", q:"Câu nào ĐÚNG về AI hiện nay?", opts:["AI giỏi từng việc cụ thể, không 'biết tuốt' như người","AI có cảm xúc thật như con người","AI luôn đúng tuyệt đối","AI không cần dữ liệu"], a:0},
    {topic:"antoan", q:"Khi AI đưa một con số quan trọng, em nên làm gì?", opts:["Kiểm chứng ở nguồn đáng tin","Tin ngay và dùng luôn","Xoá đi cho chắc","Kể cho cả lớp là đúng"], a:0},
    {topic:"prompt", q:"'Giao vai cho AI' nghĩa là gì?", opts:["Nói AI đóng vai ai đó, ví dụ thầy giáo vui tính","Tặng quà cho AI","Đặt tên cho máy tính","Tắt máy rồi bật lại"], a:0},
    {topic:"ungdung", q:"Kỹ năng nào con người giữ vững mà AI khó thay?", opts:["Sáng tạo và thấu cảm","Sạc pin nhanh","Lưu nhiều dữ liệu","Tính toán số lớn"], a:0},
    {topic:"antoan", q:"Đâu là cách dùng AI trung thực khi làm bài?", opts:["Nói thật là mình có dùng AI hỗ trợ","Chép y nguyên rồi nhận là của mình","Giấu không cho ai biết","Xoá lịch sử trò chuyện"], a:0},
    {topic:"antoan", q:"'Deepfake' là gì?", opts:["Ảnh/video/giọng giả do AI tạo, trông như thật","Một trò chơi điện tử","Một loại máy ảnh","Một kiểu tóc"], a:0},
    {topic:"antoan", q:"Thấy một tin gây sốc trên mạng, em nên làm gì trước?", opts:["Kiểm chứng nguồn trước khi tin và chia sẻ","Chia sẻ ngay cho thật nhiều người","Tin luôn vì thấy 'tận mắt'","Bình luận tức giận"], a:0},
    {topic:"ungdung", q:"Vì sao AI chơi cờ có thể thắng nhà vô địch?", opts:["Thử rất nhiều nước đi rồi chọn nước tốt nhất","Vì nó biết tuốt mọi thứ","Vì nó may mắn","Vì nó làm đối thủ sợ"], a:0},
  ],
};

/* =========================================================
   2) ENGINE — thường không cần sửa
   ========================================================= */

/* ---------- Tiện ích ---------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length-1; i > 0; i--){
    const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
const rand = arr => arr[Math.floor(Math.random()*arr.length)];

/* ---------- Âm thanh vui (WebAudio, không cần file) ---------- */
let _audio = null;
function getAudio(){ return _audio || (_audio = new (window.AudioContext || window.webkitAudioContext)()); }
function playTone(freq, dur, type="square", vol=0.08){
  try {
    const ctx = getAudio(), o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol; g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur);
  } catch {}
}
const sfx = {
  click:  () => playTone(600, 0.08, "square", 0.05),
  correct:() => { playTone(523, 0.1); setTimeout(()=>playTone(659, 0.1), 80); setTimeout(()=>playTone(784, 0.15), 160); },
  wrong:  () => { playTone(200, 0.2, "sawtooth", 0.06); setTimeout(()=>playTone(150, 0.3, "sawtooth", 0.04), 150); },
  win:    () => { [523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f, 0.15, "square", 0.07), i*100)); },
  pop:    () => playTone(400, 0.06, "sine", 0.04),
};
document.addEventListener("click", e => {
  if(e.target.closest("button, .opt, .topicChip, .lessonCard")) sfx.click();
});

/* Pháo hoa emoji */
function burst(n){
  const em = ["🎉","⭐","💜","✨","🔥","🎊"];
  for(let i = 0; i < n; i++){
    const s = document.createElement("span");
    s.className = "confetti";
    s.textContent = em[Math.floor(Math.random()*em.length)];
    s.style.left = Math.random()*100 + "vw";
    s.style.animationDuration = (1.6 + Math.random()*1.6) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3500);
  }
}

/* ---------- Tiến trình đơn giản (localStorage) ---------- */
const PROGRESS_KEY = "hocai_progress_v1";
function loadProgress(){ try{ return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {lessonsViewed:[]}; }catch{ return {lessonsViewed:[]}; } }
function saveProgress(){ try{ localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }catch{} }
let progress = loadProgress();

/* ---------- Điều hướng ---------- */
const SECTIONS = ["home","baihoc","kiemtra"];
let navLock = false;
let runnerReturn = "home";
if('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }

function go(id){
  if(!SECTIONS.includes(id)) id = "home";
  const runner = document.getElementById("runner");
  if(!runner.classList.contains("hidden")){ runner.classList.add("hidden"); document.body.style.overflow = ""; }
  document.querySelectorAll("#pages .page").forEach(p => {
    if(p.id === id){
      p.classList.remove("hidden");
      p.style.animation = "none"; void p.offsetWidth; p.style.animation = "fadeUp .4s ease";
    } else { p.classList.add("hidden"); p.style.animation = ""; }
  });
  document.querySelectorAll("#navLinks a").forEach(a => a.classList.toggle("active", a.dataset.nav === id));
  document.getElementById("nav").classList.remove("open");
  if(("#" + id) !== location.hash){ navLock = true; location.hash = id; }
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => {
  if(navLock){ navLock = false; return; }
  go((location.hash || "#home").slice(1));
});
function toggleMenu(){ document.getElementById("nav").classList.toggle("open"); }

/* ---------- Trang chủ ---------- */
function renderHome(){
  document.getElementById("featGrid").innerHTML = FEATURES.map(f =>
    `<div class="featCard"><div class="fi">${f.i}</div><h4>${f.h}</h4><p>${f.p}</p></div>`).join("");
  document.getElementById("skillGrid").innerHTML = Object.values(TOPICS).map(t =>
    `<div class="skillCard" style="background:${t.color}"><span class="se">${t.emoji}</span><span class="sn">${t.name}</span></div>`).join("");
  // Thống kê tự động
  const totalQ = [1,2,3].reduce((s,lv)=>s+BANK[lv].length,0);
  const cst = curriculumStats();
  setText("statLessons", cst.lessons || LESSONS.length);
  setText("statTopics", cst.modules || Object.keys(TOPICS).length);
  setText("statQuiz", totalQ);
  setText("quizCount", totalQ + " câu");
  document.getElementById("quizTags").innerHTML =
    Object.values(TOPICS).map(t => `<span>${t.emoji} ${t.name}</span>`).join("");
}
function setText(id, v){ const el = document.getElementById(id); if(el) el.textContent = v; }

/* ---------- Bài học ---------- */
function renderLessons(){
  document.getElementById("lessonGrid").innerHTML = LESSONS.map((l, i) =>
    `<div class="lessonCard" style="border-top-color:${l.color}" onclick="openLesson(${i})">
       <div class="lIcon">${l.icon}</div>
       <h3>${l.title}</h3><p>${l.desc}</p>
       <span class="lGo">Xem bài học ➜</span>
     </div>`).join("");
}
function openLesson(i){
  const l = LESSONS[i];
  if(!progress.lessonsViewed.includes(i)){ progress.lessonsViewed.push(i); saveProgress(); }
  document.getElementById("lessonBody").innerHTML =
    `<div class="lessonHead" style="background:linear-gradient(135deg,${l.color},${l.color}cc)">
       <div class="lh-ic">${l.icon}</div><div><h2>${l.title}</h2><p>${l.desc}</p></div>
     </div>
     <div class="lContent">${l.body}</div>`;
  document.getElementById("lessonModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  sfx.pop();
}
function closeLesson(e){
  if(e && e.target && e.target.id !== "lessonModal" && e.type === "click" && e.currentTarget.id === "lessonModal") return;
  document.getElementById("lessonModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ---------- Kiểm tra (quiz thích ứng theo sao) ---------- */
const KEYS = ["A","B","C","D"];
const PRAISE = ["Chuẩn luôn! 🔥","Quá đỉnh! ⚡","10 điểm! 💯","Xịn xò! 😎","Đỉnh của chóp! 🏆"];
let total = 10, star = 1, idx = 0, score = 0, locked = false, quizHistory = [], used = {};
let current = null;

function enterRunner(showStars){
  document.getElementById("runner").classList.remove("hidden");
  document.getElementById("runnerTop").classList.remove("hidden");
  document.getElementById("qCard").classList.remove("hidden");
  document.getElementById("resultCard").classList.add("hidden");
  document.getElementById("starBox").classList.toggle("hidden", !showStars);
  document.body.style.overflow = "hidden";
  document.getElementById("runner").scrollTo({top:0});
}
function exitRunner(){
  document.getElementById("runner").classList.add("hidden");
  document.body.style.overflow = "";
  go(runnerReturn || "home");
}
function updateStars(pulse){
  const box = document.getElementById("starBox");
  box.innerHTML = [1,2,3].map(i => `<span class="${i <= star ? "" : "off"}">⭐</span>`).join("");
  if(pulse){ box.classList.remove("pulse"); void box.offsetWidth; box.classList.add("pulse"); }
}
function prep(q){
  const pairs = shuffle(q.opts.map((o,i) => [o, i === q.a]));
  return Object.assign({}, q, { opts: pairs.map(p => p[0]), a: pairs.findIndex(p => p[1]) });
}
function drawQuestion(){
  let lv = star;
  let pool = BANK[lv].map((_,i) => i).filter(i => !used[lv].has(i));
  if(pool.length === 0){
    const borrow = lv === 1 ? [2,3] : lv === 2 ? [1,3] : [2,1];
    for(const l of borrow){
      const p2 = BANK[l].map((_,i) => i).filter(i => !used[l].has(i));
      if(p2.length){ lv = l; pool = p2; break; }
    }
  }
  if(pool.length === 0){ used[lv] = new Set(); pool = BANK[lv].map((_,i) => i); }
  const pi = pool[Math.floor(Math.random()*pool.length)];
  used[lv].add(pi);
  return prep(Object.assign({}, BANK[lv][pi], {lv}));
}
function startQuiz(){
  runnerReturn = "kiemtra";
  const totalQ = [1,2,3].reduce((s,lv)=>s+BANK[lv].length,0);
  total = Math.min(10, totalQ);
  star = 1; idx = 0; score = 0; locked = false; quizHistory = [];
  used = {1:new Set(), 2:new Set(), 3:new Set()};
  enterRunner(true);
  updateStars(false);
  render();
}
function render(){
  current = drawQuestion();
  const q = current, t = TOPICS[q.topic] || {name:"Chủ đề", emoji:"❓", color:"#7C3AED"};
  locked = false;
  document.getElementById("counter").textContent = (idx+1) + "/" + total;
  document.getElementById("bar").style.width = (idx / total * 100) + "%";

  let inner = `<span class="catChip" style="background:#EDE9FE;color:#5B21B6;border:2px solid ${t.color}">${t.emoji} ${t.name}</span>`;
  inner += `<span class="lvChip">${"⭐".repeat(q.lv)} Câu ${q.lv} sao</span>`;
  inner += `<div class="qTitle">${q.q}</div>`;
  inner += `<div class="opts">`;
  q.opts.forEach((o, i) => {
    inner += `<button class="opt" onclick="pick(${i}, this)"><span class="key">${KEYS[i]}</span><span>${o}</span></button>`;
  });
  inner += `</div>`;
  inner += `<div class="feedback" id="fb"><div class="hostMini">🤖</div><div class="fbBubble" id="fbText"></div></div>`;
  inner += `<div class="center"><button class="btn next hidden" id="btnNext" onclick="next()">Câu tiếp theo ➜</button></div>`;
  document.getElementById("qCard").innerHTML = inner;
  document.getElementById("runner").scrollTo({top:0});
}
function pick(i, el){
  if(locked) return;
  const q = current;
  const opts = document.querySelectorAll(".opt");
  opts.forEach(o => o.classList.add("locked"));
  const ok = (i === q.a);
  if(ok){
    el.classList.add("correct");
    opts.forEach((o,j) => { if(j !== i) o.classList.add("dim"); });
    applyResult("full", q.opts[i]); sfx.correct();
  } else {
    el.classList.add("wrong");
    opts[q.a].classList.add("correct");
    opts.forEach((o,j) => { if(j !== i && j !== q.a) o.classList.add("dim"); });
    applyResult("none", q.opts[i], "Đáp án đúng: " + q.opts[q.a]); sfx.wrong();
  }
}
function applyResult(res, picked, extra){
  locked = true;
  quizHistory.push({q: current, picked, res});
  const fb = document.getElementById("fb"), fbText = document.getElementById("fbText");
  if(res === "full"){
    score += 1;
    const msg = star < 3 ? `Lên ${star+1} sao! ${"⭐".repeat(star+1)}` : "Giữ vững 3 sao! 🏆";
    star = Math.min(3, star + 1);
    fb.classList.add("show","good"); fbText.textContent = rand(PRAISE) + " " + msg; burst(6);
  } else {
    star = Math.max(1, star - 1);
    fb.classList.add("show","bad"); fbText.textContent = (extra || "Chưa đúng rồi!") + " · Về " + star + " sao ⭐";
  }
  updateStars(true);
  document.getElementById("btnNext").classList.remove("hidden");
}
function next(){ idx++; if(idx < total){ render(); } else { showResult(); } }

function showResult(){
  document.getElementById("bar").style.width = "100%";
  document.getElementById("qCard").classList.add("hidden");
  document.getElementById("runnerTop").classList.add("hidden");
  const p = Math.round(score / total * 100);
  const tier = p >= 85 ? "Đỉnh nóc kịch trần! 🏆" : p >= 60 ? "Xịn xò con bò! 😎" : p >= 40 ? "Sắp xịn rồi nè! 💪" : "Khởi động thôi! 🚀";
  const trail = quizHistory.map(h => h.res === "full" ? "🟢" : "🔴").join("");
  if(p >= 60) sfx.win();

  let review = "";
  quizHistory.forEach((h, n) => {
    const t = TOPICS[h.q.topic] || {name:"", emoji:"❓"};
    const ok = h.res === "full";
    review += `<div class="rv ${ok?"ok":"no"}"><div class="mark">${ok?"✅":"❌"}</div><div class="body">
      <div class="qq">Câu ${n+1} · ${h.q.q}</div>
      <div class="meta">${t.emoji} ${t.name} · ${"⭐".repeat(h.q.lv)}</div>
      <div class="ans">Bạn chọn: <b class="${ok?"good":"badc"}">${h.picked}</b>${ok?"":` → Đúng: <b class="good">${h.q.opts[h.q.a]}</b>`}</div>
    </div></div>`;
  });

  const el = document.getElementById("resultCard");
  el.innerHTML = `
    <div class="hostMini" style="margin:0 auto; width:66px; height:66px; font-size:36px">🤖</div>
    <h2 style="margin-top:10px">Kết quả của bạn nè!</h2>
    <div class="scoreRing" style="--p:${p}"><div class="inner"><span class="num">${score}/${total}</span><span style="font-size:13px; color:#64748B">${p}%</span></div></div>
    <div class="tier">${tier}</div>
    <div class="trail">${trail}</div>
    <div class="trailLbl">Hành trình ${total} câu (🟢 đúng · 🔴 sai)</div>
    <div class="secTitle">🔎 Xem lại từng câu</div>
    <div class="review">${review}</div>
    <div class="center">
      <button class="btn" onclick="startQuiz()">Chơi lại (bộ câu mới) 🔄</button>
      <button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về trang chủ 🏠</button>
    </div>`;
  el.classList.remove("hidden");
  document.getElementById("runner").scrollTo({top:0});
  if(p >= 60) burst(20);
}

/* =========================================================
   2b) LỘ TRÌNH ĐẦY ĐỦ (render từ window.CURRICULUM — SPEC)
   Dữ liệu nguồn nằm ở curriculum.js (không sửa tay, chỉ render).
   ========================================================= */
const LEVEL_COLORS = ["#3B82F6", "#22C55E", "#F97316", "#8B5CF6"]; // L1..L4
const LEVEL_SOFT   = ["#EFF6FF", "#F0FDF4", "#FFF7ED", "#F5F3FF"];

/* 6 giai đoạn của giáo án 90' — màu pastel cố định xuyên suốt */
const PHASES = [
  {kw:"Khởi động",  bg:"#FEF3C7", fg:"#92400E", ic:"⏱️"},
  {kw:"Khám phá",   bg:"#DBEAFE", fg:"#1E40AF", ic:"🔍"},
  {kw:"Thực hành",  bg:"#DCFCE7", fg:"#166534", ic:"✍️"},
  {kw:"Trò chơi",   bg:"#FCE7F3", fg:"#9D174D", ic:"🎮"},
  {kw:"Thử thách",  bg:"#EDE9FE", fg:"#5B21B6", ic:"🏆"},
  {kw:"Tổng kết",   bg:"#CCFBF1", fg:"#115E59", ic:"⭐"},
];
/* Nhịp 1 buổi 90 phút để vẽ timeline ngang */
const SESSION_BEAT = [
  ["Khởi động", 10], ["Khám phá kiến thức", 15], ["Thực hành", 25],
  ["Trò chơi vận dụng", 15], ["Thử thách / Mini project", 20], ["Tổng kết & sao thưởng", 5],
];
function phaseOf(name){
  const p = PHASES.find(p => (name || "").indexOf(p.kw) === 0) || PHASES.find(p => (name || "").indexOf(p.kw) > -1);
  return p || {bg:"#F1F5F9", fg:"#334155", ic:"•"};
}
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function hi(s, term){
  const t = esc(s);
  if(!term) return t;
  try{ return t.replace(new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "ig"), "<mark>$1</mark>"); }catch{ return t; }
}

const COACH_KEY = "hocai_coach_v1";
let coachMode = (()=>{ try{ return localStorage.getItem(COACH_KEY) === "1"; }catch{ return false; } })();
let curSearch = "";
let _lessonMap = []; // [levelIdx][moduleIdx][lessonIdx] -> lesson (để mở modal)

function curriculumStats(){
  const C = window.CURRICULUM && window.CURRICULUM.program;
  if(!C) return {levels:0, modules:0, lessons:0};
  const modules = C.levels.reduce((s,lv)=>s+lv.modules.length, 0);
  const lessons = C.levels.reduce((s,lv)=>s+lv.modules.reduce((a,m)=>a+m.lessons.length,0), 0);
  return {levels:C.levels.length, modules, lessons};
}

function renderCurriculum(){
  const host = document.getElementById("curriculum");
  const data = window.CURRICULUM && window.CURRICULUM.program;
  if(!host) return;
  if(!data){ host.innerHTML = `<div class="pageHead"><h2 class="sectionHead">📚 Bài học</h2><p class="sectionSub">Chưa nạp được dữ liệu lộ trình.</p></div>`; return; }

  _lessonMap = data.levels.map(lv => lv.modules.map(m => m.lessons));
  const st = curriculumStats();

  let html = "";
  /* Đầu trang: tên chương trình + 3 con số */
  html += `<div class="curHero">
      <span class="pill">🗺️ Lộ trình học</span>
      <h2 class="curTitle">${esc(data.name)}</h2>
      <p class="curTagline">${esc(data.tagline)}</p>
      <div class="curNums">
        <div><b>${st.levels}</b><span>level</span></div>
        <div><b>${st.lessons}</b><span>bài học</span></div>
        <div><b>${st.modules}</b><span>module</span></div>
      </div>
      <p class="curDuration">⏳ ${esc(data.duration)}</p>
    </div>`;

  /* Nhịp 1 buổi 90 phút */
  html += `<div class="beatWrap"><h3 class="beatHead">⏱️ Nhịp 1 buổi học 90 phút</h3><div class="beatBar">`;
  SESSION_BEAT.forEach(([name, min]) => {
    const p = phaseOf(name);
    html += `<div class="beatBlock" style="background:${p.bg};color:${p.fg};flex:${min}">
        <span class="bIc">${p.ic}</span><span class="bName">${esc(name)}</span><span class="bMin">${min}'</span></div>`;
  });
  html += `</div></div>`;

  /* Nguyên tắc chương trình */
  html += `<div class="prinWrap"><h3 class="beatHead">🧭 Nguyên tắc chương trình</h3><div class="prinGrid">`;
  data.principles.forEach(p => { html += `<div class="prinCard">${esc(p)}</div>`; });
  html += `</div></div>`;

  /* Thanh công cụ: chế độ Coach + tìm kiếm */
  html += `<div class="curTools">
      <label class="coachToggle"><input type="checkbox" id="coachChk" ${coachMode?"checked":""} onchange="toggleCoach(this.checked)">
        <span class="tglTrack"><span class="tglDot"></span></span>
        <span class="tglLbl">🎓 Dành cho Coach</span></label>
      <div class="curSearch"><span>🔎</span><input id="curSearchInput" type="search" placeholder="Tìm bài học, nội dung, trò chơi…" oninput="onCurSearch(this.value)" value="${esc(curSearch)}"></div>
    </div>`;

  /* Thanh nhảy tới level */
  html += `<div class="lvJump">`;
  data.levels.forEach((lv, i) => {
    const opt = lv.optional ? ` <em>(Tùy chọn)</em>` : "";
    html += `<button class="lvChipJump" style="--lc:${LEVEL_COLORS[i]}" onclick="jumpLevel(${i})">${esc(lv.name)}${opt}</button>`;
  });
  html += `</div>`;

  /* Các level */
  html += `<div id="lvList">`;
  data.levels.forEach((lv, li) => { html += renderLevel(lv, li); });
  html += `</div>`;

  host.innerHTML = html;
  host.classList.toggle("coachOn", coachMode);
  if(curSearch) applyCurSearch();
}

function renderLevel(lv, li){
  const c = LEVEL_COLORS[li], soft = LEVEL_SOFT[li];
  const nLessons = lv.modules.reduce((s,m)=>s+m.lessons.length, 0);
  let h = `<section class="lvSection" id="lv${li}" style="--lc:${c};--lcSoft:${soft}">
    <div class="lvHead">
      <div class="lvBadge">${li+1}</div>
      <div class="lvHeadTxt">
        <div class="lvName">${esc(lv.name)}${lv.optional?` <span class="optTag">Tùy chọn</span>`:""}</div>
        <h3 class="lvTitle">${esc(lv.title)}</h3>
        <div class="lvMeta">🗓️ ${esc(lv.duration)} · 📘 ${lv.sessions} buổi · 📚 ${nLessons} bài · 🧩 ${lv.modules.length} module</div>
      </div>
    </div>`;
  if(lv.graduation_criteria){
    h += `<div class="gradBox">🎯 ${esc(lv.graduation_criteria)}</div>`;
  }
  h += `<div class="modList">`;
  lv.modules.forEach((m, mi) => { h += renderModule(m, li, mi); });
  h += `</div></section>`;
  return h;
}

function renderModule(m, li, mi){
  const hasProj = !!m.module_project;
  let h = `<div class="modCard${hasProj?" hasProj":""}" data-mod="${li}-${mi}">
    <button class="modHead" onclick="toggleModule(this)">
      <span class="modArrow">▸</span>
      <span class="modTitle"><b>MODULE ${esc(m.code)}</b> – ${esc(m.name)} <span class="modCount">(${m.sessions} buổi)</span></span>
      ${hasProj?`<span class="projFlag">★ PROJECT</span>`:""}
    </button>
    <div class="modBody">`;

  if(coachMode && m.warmup_ritual){
    h += `<div class="coachInfo"><b>🔥 Khởi động module:</b> ${esc(m.warmup_ritual)}</div>`;
  }
  if(coachMode && Array.isArray(m.games_pool) && m.games_pool.length){
    h += `<div class="coachInfo"><b>🎮 Kho trò chơi:</b><ul>${m.games_pool.map(g=>`<li>${esc(g)}</li>`).join("")}</ul></div>`;
  }

  h += `<div class="lsList">`;
  m.lessons.forEach((ls, lsi) => {
    h += `<div class="lsRow" data-ls="${li}-${mi}-${lsi}" onclick="openPlan(${li},${mi},${lsi})">
        <span class="lsCode">${esc(ls.code)}</span>
        <span class="lsMain">
          <span class="lsName">${esc(ls.name)}</span>
          <span class="lsDesc">${esc(ls.content)}</span>
          ${ls.challenge?`<span class="lsChal">🏆 ${esc(ls.challenge)}</span>`:""}
        </span>
        <span class="lsGo">Giáo án 90' ➜</span>
      </div>`;
  });
  h += `</div>`;

  if(hasProj){
    h += `<div class="projCard">★ <b>PROJECT MODULE:</b> ${esc(m.module_project)}</div>`;
  }
  if(m.teacher_recap){
    h += `<div class="teacherRecap"><div class="trHead">📣 Tổng kết cho bé</div><p><b>Hôm nay con đã học được…</b> ${esc(m.teacher_recap)}</p></div>`;
  }

  h += `</div></div>`;
  return h;
}

function toggleModule(btn){
  const card = btn.closest(".modCard");
  card.classList.toggle("open");
}
function jumpLevel(i){
  const el = document.getElementById("lv" + i);
  if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
}
function toggleCoach(on){
  coachMode = !!on;
  try{ localStorage.setItem(COACH_KEY, coachMode ? "1" : "0"); }catch{}
  renderCurriculum();
}

/* --- Modal giáo án 90 phút (tái dùng #lessonModal) --- */
function openPlan(li, mi, lsi){
  const lv = window.CURRICULUM.program.levels[li];
  const m = lv.modules[mi];
  const ls = m.lessons[lsi];
  const c = LEVEL_COLORS[li];
  let rows = "";
  (ls.plan90 || []).forEach(step => {
    const p = phaseOf(step.phase);
    rows += `<div class="planRow" style="border-left-color:${p.fg}">
        <div class="planTime" style="background:${p.bg};color:${p.fg}">${p.ic} ${esc(step.time)}</div>
        <div class="planMain"><div class="planPhase" style="color:${p.fg}">${esc(step.phase)}</div>
          <div class="planAct">${esc(step.activity)}</div></div>
      </div>`;
  });
  document.getElementById("lessonBody").innerHTML =
    `<div class="lessonHead" style="background:linear-gradient(135deg,${c},${c}cc)">
       <div class="lh-ic">📘</div>
       <div><h2>${esc(ls.code)} · ${esc(ls.name)}</h2><p>${esc(ls.content)}</p></div>
     </div>
     <div class="lContent">
       <div class="planMeta">🧩 MODULE ${esc(m.code)} – ${esc(m.name)} · ⏱️ ${ls.duration_minutes||90} phút</div>
       ${ls.challenge?`<div class="tipBox">🏆 <b>Thử thách:</b> ${esc(ls.challenge.replace(/^Thử thách:\s*/,"").replace(/^Mini project:\s*/,""))}</div>`:""}
       <div class="secTitle" data-icon="🗺️">Giáo án 90 phút</div>
       <div class="planList">${rows}</div>
     </div>`;
  document.getElementById("lessonModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  sfx.pop();
}

/* --- Tìm kiếm realtime --- */
let _searchTimer = null;
function onCurSearch(v){
  curSearch = v.trim();
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(applyCurSearch, 120);
}
function applyCurSearch(){
  const term = curSearch.toLowerCase();
  const rows = document.querySelectorAll(".lsRow");
  rows.forEach(r => {
    const [li,mi,lsi] = r.dataset.ls.split("-").map(Number);
    const ls = _lessonMap[li][mi][lsi];
    const hay = (ls.name + " " + ls.content + " " + (ls.challenge||"")).toLowerCase();
    const hit = !term || hay.indexOf(term) > -1;
    r.classList.toggle("hidden", !hit);
    // tô đậm
    r.querySelector(".lsName").innerHTML = hi(ls.name, term);
    r.querySelector(".lsDesc").innerHTML = hi(ls.content, term);
  });
  // mở/đóng module theo kết quả, ẩn module rỗng
  document.querySelectorAll(".modCard").forEach(card => {
    const visible = card.querySelectorAll(".lsRow:not(.hidden)").length;
    card.classList.toggle("hidden", term && visible === 0);
    if(term && visible > 0) card.classList.add("open");
  });
  // ẩn level rỗng
  document.querySelectorAll(".lvSection").forEach(sec => {
    const visible = sec.querySelectorAll(".modCard:not(.hidden)").length;
    sec.classList.toggle("dim", term && visible === 0);
  });
}

/* =========================================================
   3) KHỞI ĐỘNG
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderCurriculum();
  go((location.hash || "#home").slice(1));
  window.scrollTo(0, 0);
});
