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
