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
  ],
  2: [
    {topic:"hoatdong", q:"Muốn AI nhận ra con mèo, ta cần cho nó xem gì?", opts:["Nhiều ảnh mèo có gán nhãn","Một câu thơ","Một bản nhạc buồn","Một hộp bút màu"], a:0},
    {topic:"prompt", q:"\"Prompt\" nghĩa là gì?", opts:["Câu lệnh/yêu cầu ta gõ cho AI","Tên một loại máy in","Một môn thể thao","Một loại pin"], a:0},
    {topic:"antoan", q:"Khi AI trả lời, ta nên làm gì?", opts:["Kiểm tra lại thông tin quan trọng","Tin tuyệt đối 100%","Chép ngay không đọc","Tắt máy đi ngủ"], a:0},
    {topic:"ungdung", q:"Ứng dụng nào KHÔNG phải nhờ AI?", opts:["Dùng thước kẻ để đo","Gợi ý video","Dịch ngôn ngữ tự động","Lọc thư rác"], a:0},
    {topic:"antoan", q:"Vì sao không nên tin AI 100%?", opts:["AI đôi khi bịa hoặc trả lời sai","AI luôn buồn ngủ","AI sợ ánh sáng","AI chỉ nói tiếng Anh"], a:0},
    {topic:"prompt", q:"Cách nào giúp prompt cho kết quả tốt hơn?", opts:["Giao vai và nói rõ khuôn dạng","Viết thật ngắn kiểu 'làm đi'","Gõ toàn chữ in hoa","Không nói gì cả"], a:0},
    {topic:"ungdung", q:"AI tạo sinh 'sáng tạo' bằng cách nào?", opts:["Đoán phần tiếp theo hợp lý nhất","Hỏi ý ông Bụt","Tra từ điển giấy","Bấm số ngẫu nhiên"], a:0},
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
  setText("statLessons", LESSONS.length);
  setText("statTopics", Object.keys(TOPICS).length);
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
let total = 10, star = 1, idx = 0, score = 0, locked = false, history = [], used = {};
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
  star = 1; idx = 0; score = 0; locked = false; history = [];
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
  history.push({q: current, picked, res});
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
  const trail = history.map(h => h.res === "full" ? "🟢" : "🔴").join("");
  if(p >= 60) sfx.win();

  let review = "";
  history.forEach((h, n) => {
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
   3) KHỞI ĐỘNG
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderLessons();
  go((location.hash || "#home").slice(1));
  window.scrollTo(0, 0);
});
