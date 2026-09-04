/* =========================================================
   lesson_quiz.js — TRẮC NGHIỆM TRONG BÀI (10 câu / bài)
   Khoá theo mã bài. Mỗi câu: {q, o:[đúng, sai, sai, sai], a:0}
   Đáp án đúng đặt ở vị trí 0; engine tự XÁO TRỘN khi hiển thị.
   ========================================================= */
window.LESSON_QUIZ = {};

/* ===== MODULE 1.1 – 1.4 ===== */
Object.assign(window.LESSON_QUIZ, {

  "1.1.1": [
    {q:"Bộ phận nào của máy tính hiển thị hình ảnh?", o:["Màn hình","Bàn phím","Chuột","Loa"], a:0},
    {q:"'Bộ não' xử lý mọi việc bên trong máy tính là gì?", o:["Thân máy (CPU)","Màn hình","Chuột","Loa"], a:0},
    {q:"Ta dùng bộ phận nào để gõ chữ và số?", o:["Bàn phím","Chuột","Loa","Màn hình"], a:0},
    {q:"Chuột dùng để làm gì?", o:["Di chuyển con trỏ và chọn","Gõ chữ","Phát nhạc","Hiển thị hình"], a:0},
    {q:"Bộ phận nào phát ra âm thanh?", o:["Loa","Màn hình","Chuột","Bàn phím"], a:0},
    {q:"Cách tắt máy tính đúng là?", o:["Chọn Tắt máy (Shut down)","Rút điện đột ngột","Đập nhẹ vào máy","Chỉ tắt màn hình"], a:0},
    {q:"Muốn bật máy tính, em làm gì?", o:["Nhấn nút nguồn","Lắc con chuột","Hô 'mở ra'","Rút dây điện"], a:0},
    {q:"'Nhấp đúp' chuột thường dùng để?", o:["Mở một mục","Xoá vĩnh viễn","Tắt máy","Đổi màu màn hình"], a:0},
    {q:"Phím nào tạo khoảng trắng giữa các chữ?", o:["Phím cách (Space)","Phím Enter","Phím Shift","Phím Esc"], a:0},
    {q:"Khi chưa chắc cách dùng máy, em nên?", o:["Hỏi thầy cô hoặc ba mẹ","Bấm lung tung thử","Tắt máy ngay","Giấu không cho ai biết"], a:0}
  ],

  "1.1.2": [
    {q:"Mỗi ứng dụng khi mở ra sẽ nằm trong cái gì?", o:["Một cửa sổ riêng","Một thư mục","Một tệp ảnh","Một con chuột"], a:0},
    {q:"Muốn mở một ứng dụng, em thường?", o:["Nhấp đúp vào biểu tượng","Rút điện","Gõ phím Esc","Lắc chuột"], a:0},
    {q:"Nút '✕' ở góc trên bên phải cửa sổ dùng để?", o:["Đóng cửa sổ","Phóng to","Đổi màu","Lưu file"], a:0},
    {q:"Nút thu nhỏ (➖) làm gì?", o:["Giấu cửa sổ xuống thanh dưới","Xoá ứng dụng","Tắt máy","Đóng hẳn"], a:0},
    {q:"Nút phóng to (⬜) làm gì?", o:["Cho cửa sổ chiếm cả màn hình","Xoá cửa sổ","Tắt loa","Đổi hình nền"], a:0},
    {q:"Để kéo một cửa sổ đi chỗ khác, em giữ chuột ở đâu?", o:["Thanh tiêu đề trên cùng","Giữa màn hình","Nút đóng","Bàn phím"], a:0},
    {q:"'Kéo thả' nghĩa là?", o:["Giữ nút trái, di chuyển rồi thả","Bấm hai lần thật nhanh","Rút điện ra","Gõ phím Enter"], a:0},
    {q:"Xếp 3 cửa sổ cạnh nhau có lợi gì?", o:["Vừa xem hướng dẫn vừa làm bài","Làm máy chạy nhanh hơn","Tắt máy dễ hơn","Tăng âm lượng"], a:0},
    {q:"Thu nhỏ cửa sổ có làm mất ứng dụng không?", o:["Không, mở lại được","Có, mất hẳn","Có, phải cài lại","Tuỳ ngày"], a:0},
    {q:"Biểu tượng ứng dụng là gì?", o:["Hình nhỏ để mở ứng dụng","Một loại virus","Nút tắt máy","Một loại chuột"], a:0}
  ],

  "1.1.3": [
    {q:"Một bài viết hay bức ảnh em tạo được lưu thành cái gì?", o:["Một tệp (file)","Một con chuột","Một cửa sổ","Một cái loa"], a:0},
    {q:"Thư mục (folder) giống như?", o:["Một cái hộp chứa nhiều tệp","Một cái loa","Một nút nguồn","Một con chuột"], a:0},
    {q:"Vì sao nên dùng thư mục?", o:["Giúp gọn gàng, tìm lại nhanh","Làm máy chạy chậm","Để giấu máy tính","Để tắt máy"], a:0},
    {q:"Muốn giữ lại bài đang làm, em chọn?", o:["Lưu (Save)","Đóng máy","Xoá đi","Đổi hình nền"], a:0},
    {q:"Tên file nào là đặt tên tốt?", o:["Toan-lop3","abc123xyz","aaa","kjhgf"], a:0},
    {q:"Vì sao nên đặt tên file có ý nghĩa?", o:["Nhìn là biết bên trong có gì","Cho máy chạy nhanh","Để file nặng hơn","Không có lý do gì"], a:0},
    {q:"Muốn tạo thư mục mới, em thường?", o:["Nhấp phải → New → Folder","Rút điện","Gõ Enter 3 lần","Tắt màn hình"], a:0},
    {q:"Sắp xếp file gọn gàng giúp gì?", o:["Mai mốt tìm lại nhanh hơn","Tốn nhiều điện hơn","Máy hỏng nhanh hơn","Không giúp gì"], a:0},
    {q:"'Cây thư mục Góc học tập có 3 ngăn' nghĩa là?", o:["Một thư mục chứa 3 thư mục con","3 máy tính","3 con chuột","3 màn hình"], a:0},
    {q:"Tệp và thư mục khác nhau thế nào?", o:["Tệp là 'món đồ', thư mục là 'cái hộp' chứa tệp","Chúng giống hệt nhau","Thư mục nằm trong tệp","Tệp để tắt máy"], a:0}
  ],

  "1.1.4": [
    {q:"Ngồi dùng máy đúng tư thế là?", o:["Lưng thẳng, màn hình ngang tầm mắt","Nằm dài ra bàn","Cúi sát màn hình","Ngồi vẹo một bên"], a:0},
    {q:"Quy tắc nghỉ mắt 20–20–20 nghĩa là?", o:["Mỗi 20 phút nhìn xa 20 giây","Học 20 giờ liền","Nghỉ 20 ngày","Gõ 20 phím"], a:0},
    {q:"Khi thấy đường link lạ, em nên?", o:["Không bấm vào","Bấm ngay xem có gì","Gửi cho bạn bấm thử","Tải hết về máy"], a:0},
    {q:"Ai nên biết mật khẩu của em?", o:["Không cho ai biết tuỳ tiện","Cả lớp","Người lạ trên mạng","Bất kỳ ai hỏi"], a:0},
    {q:"Hai chân khi ngồi máy nên?", o:["Chạm sàn thoải mái","Gác lên bàn","Co lên ghế","Duỗi thẳng đơ"], a:0},
    {q:"Quảng cáo 'trúng thưởng' tự bật lên thì?", o:["Bỏ qua, không bấm","Bấm nhận thưởng ngay","Điền thông tin cá nhân","Gọi điện theo số đó"], a:0},
    {q:"Khi gặp điều đáng lo trên màn hình, em nên?", o:["Báo thầy cô hoặc ba mẹ","Giữ bí mật một mình","Làm theo ngay","Tắt đèn phòng"], a:0},
    {q:"Nhìn màn hình quá lâu không nghỉ sẽ?", o:["Mỏi và hại mắt","Giúp mắt sáng hơn","Không sao cả","Làm mắt to ra"], a:0},
    {q:"Có nên tự tải phần mềm lạ về máy?", o:["Không, nên hỏi người lớn","Có, tải càng nhiều càng tốt","Có, nếu miễn phí","Có, nếu bạn bảo"], a:0},
    {q:"Dùng máy an toàn giúp em?", o:["Khỏe mạnh và tránh rắc rối","Chơi game giỏi hơn","Máy chạy nhanh hơn","Hết tốn điện"], a:0}
  ],

  "1.2.1": [
    {q:"Gõ 10 ngón nhanh mà không mỏi bắt đầu từ?", o:["Tư thế đúng và hàng phím cơ sở","Gõ thật nhanh ngay","Nhìn phím liên tục","Dùng một ngón"], a:0},
    {q:"Hàng phím cơ sở của tay trái là?", o:["A S D F","Q W E R","Z X C V","1 2 3 4"], a:0},
    {q:"Hàng phím cơ sở của tay phải là?", o:["J K L ;","U I O P","M , . /","7 8 9 0"], a:0},
    {q:"Hai ngón trỏ đặt ở phím nào?", o:["F và J","A và ;","G và H","Space"], a:0},
    {q:"Vì sao phím F và J có gờ nổi?", o:["Để tìm phím mà không cần nhìn","Để trang trí","Vì bị lỗi","Để bấm mạnh hơn"], a:0},
    {q:"Sau khi gõ xong, các ngón nên?", o:["Trở về hàng cơ sở ('nhà')","Rời khỏi bàn phím","Bấm phím bất kỳ","Gõ mạnh xuống"], a:0},
    {q:"Khi tập gõ, mắt nên nhìn đâu?", o:["Nhìn màn hình, không nhìn phím","Nhìn chằm chằm vào phím","Nhắm mắt lại","Nhìn ra ngoài cửa sổ"], a:0},
    {q:"Nên tập theo thứ tự nào?", o:["Chậm mà đúng trước, nhanh sau","Nhanh trước, đúng sau","Chỉ cần nhanh","Chỉ cần mạnh tay"], a:0},
    {q:"Tư thế lưng khi gõ phím nên?", o:["Thẳng, vai thả lỏng","Cong gập xuống","Ngả hẳn ra sau","Nghiêng một bên"], a:0},
    {q:"Cổ tay khi gõ nên?", o:["Không tì mạnh xuống bàn","Ấn thật mạnh xuống","Nhấc cao khỏi bàn","Bắt chéo nhau"], a:0}
  ],

  "1.2.2": [
    {q:"Hàng phím trên gồm những phím nào?", o:["Q W E R T Y U I O P","A S D F G H","Z X C V B N","0 1 2 3"], a:0},
    {q:"Để gõ hàng trên, ngón tay?", o:["Vươn thẳng lên rồi trở về nhà","Bấm lung tung","Rời khỏi bàn phím","Dùng ngón cái"], a:0},
    {q:"Sau khi gõ phím hàng trên, ngón tay nên?", o:["Rơi về hàng cơ sở","Ở lại hàng trên luôn","Bấm phím Enter","Nhấc khỏi bàn"], a:0},
    {q:"'Nhà' của các ngón tay là hàng nào?", o:["Hàng cơ sở","Hàng trên","Hàng số","Hàng dưới"], a:0},
    {q:"Khi mới học hàng trên, nên?", o:["Gõ đúng ≥80% rồi mới tăng tốc","Gõ nhanh nhất có thể","Bỏ qua hàng cơ sở","Chỉ dùng 2 ngón"], a:0},
    {q:"Nếu hay sai một phím, em nên?", o:["Chậm lại luyện riêng phím đó","Bỏ luôn phím đó","Gõ mạnh hơn","Nhìn phím thật lâu"], a:0},
    {q:"Học hàng trên nhằm mục đích?", o:["Phối hợp được nhiều hàng phím","Để gõ chậm hơn","Để mỏi tay","Không có mục đích"], a:0},
    {q:"Khi gõ, nên nhìn?", o:["Màn hình","Bàn phím","Bàn tay","Trần nhà"], a:0},
    {q:"Ngón trỏ trái (giữ F) sẽ vươn lên các phím?", o:["R và T","U và I","Q và W","Space"], a:0},
    {q:"Gõ trọn cả từ thay vì từng chữ giúp?", o:["Tay chạy mượt hơn","Gõ chậm hơn","Sai nhiều hơn","Mỏi tay hơn"], a:0}
  ],

  "1.2.3": [
    {q:"Hàng phím dưới gồm?", o:["Z X C V B N M","Q W E R T","A S D F","1 2 3 4"], a:0},
    {q:"Phím cách (Space) được gõ bằng ngón nào?", o:["Ngón cái","Ngón út","Ngón trỏ","Ngón giữa"], a:0},
    {q:"Để gõ hàng dưới, ngón tay?", o:["Hạ xuống rồi trở về nhà","Vươn lên hàng số","Rời khỏi bàn phím","Bấm Enter"], a:0},
    {q:"Hoàn thiện cả 3 hàng chữ cái nghĩa là biết gõ?", o:["Hàng trên, cơ sở và dưới","Chỉ hàng cơ sở","Chỉ hàng số","Chỉ phím Space"], a:0},
    {q:"Phím cách dùng để?", o:["Tạo khoảng trắng giữa các từ","Xoá chữ","Viết hoa","Tắt máy"], a:0},
    {q:"Khi đã quen cả 3 hàng, nên tập?", o:["Gõ từng từ trọn vẹn","Gõ thật mạnh","Nhìn phím liên tục","Dùng một ngón"], a:0},
    {q:"Ngón cái đặt ở đâu khi nghỉ?", o:["Gần phím cách","Trên phím Enter","Trên phím Esc","Ngoài bàn phím"], a:0},
    {q:"Nguyên tắc chung khi gõ mọi hàng phím?", o:["Gõ xong trở về hàng cơ sở","Ở lại phím vừa gõ","Bấm hai phím cùng lúc","Nhấc tay khỏi bàn"], a:0},
    {q:"Tập gõ cả 3 hàng để?", o:["Gõ được mọi chữ cái","Chỉ gõ được số","Chỉ gõ được chữ hoa","Để mỏi tay"], a:0},
    {q:"Điều quan trọng nhất khi luyện gõ?", o:["Đúng trước, nhanh sau","Nhanh bằng mọi giá","Gõ thật mạnh","Nhìn phím"], a:0}
  ],

  "1.2.4": [
    {q:"Muốn gõ chữ HOA, em dùng phím?", o:["Giữ Shift rồi gõ chữ","Space","Enter","Esc"], a:0},
    {q:"Dấu nào kết thúc một câu?", o:["Dấu chấm .","Dấu phẩy ,","Dấu hỏi giữa câu","Không có dấu"], a:0},
    {q:"Dấu phẩy , dùng để?", o:["Ngắt ý trong câu","Kết thúc câu","Viết hoa","Xoá chữ"], a:0},
    {q:"Câu hỏi kết thúc bằng dấu?", o:["Dấu hỏi ?","Dấu chấm .","Dấu phẩy ,","Dấu cách"], a:0},
    {q:"Nên dùng Shift bằng tay nào?", o:["Tay đối diện với chữ đang gõ","Luôn dùng tay phải","Luôn dùng tay trái","Dùng ngón cái"], a:0},
    {q:"Đầu câu nên viết thế nào?", o:["Viết hoa chữ cái đầu","Viết thường hết","Viết hoa hết","Không cần gì"], a:0},
    {q:"Viết hoa đầu câu và có dấu cuối câu giúp?", o:["Câu dễ đọc, viết đẹp","Máy chạy nhanh","Tốn ít điện","Không giúp gì"], a:0},
    {q:"Để có chữ hoa 'A', em?", o:["Giữ Shift và gõ A","Gõ A hai lần","Gõ A rồi Space","Gõ Enter"], a:0},
    {q:"Trong 'Em học lớp 5.', dấu chấm nằm ở đâu?", o:["Cuối câu","Đầu câu","Giữa câu","Không có"], a:0},
    {q:"Viết một câu tự giới thiệu cần?", o:["Chữ hoa đầu câu và dấu cuối câu","Chỉ chữ thường","Không cần dấu","Viết hoa toàn bộ"], a:0}
  ],

  "1.2.5": [
    {q:"Muốn gõ tiếng Việt có dấu, em cần?", o:["Một bộ gõ (Telex/VNI)","Một con chuột mới","Một cái loa","Một màn hình lớn"], a:0},
    {q:"Trong Telex, gõ 's' sau nguyên âm cho dấu?", o:["Sắc","Huyền","Hỏi","Nặng"], a:0},
    {q:"Trong Telex, 'f' cho dấu?", o:["Huyền","Sắc","Ngã","Nặng"], a:0},
    {q:"Trong Telex, 'j' cho dấu?", o:["Nặng","Sắc","Huyền","Hỏi"], a:0},
    {q:"Gõ 'aa' trong Telex ra chữ?", o:["â","ă","ơ","ư"], a:0},
    {q:"Gõ 'dd' trong Telex ra chữ?", o:["đ","d","ơ","ê"], a:0},
    {q:"Telex và VNI là gì?", o:["Hai kiểu gõ tiếng Việt","Hai loại chuột","Hai màn hình","Hai trò chơi"], a:0},
    {q:"Gõ 'w' trong Telex thường ra chữ?", o:["ư","â","ê","ô"], a:0},
    {q:"Nếu gõ sai dấu, em nên?", o:["Gõ lại để xoá dấu rồi thêm dấu đúng","Đập bàn phím","Tắt máy","Bỏ qua luôn"], a:0},
    {q:"Gõ 'as' trong Telex ra?", o:["á","à","ả","ạ"], a:0}
  ],

  "1.2.6": [
    {q:"Hàng số nằm ở đâu trên bàn phím?", o:["Phía trên cùng","Dưới cùng","Bên phải chuột","Không có"], a:0},
    {q:"Ký tự phía trên phím số được gõ bằng cách?", o:["Giữ Shift","Gõ Space","Gõ Enter","Nhấn hai lần"], a:0},
    {q:"Ký tự @ # ? ! thường dùng cho?", o:["Email và mật khẩu","Vẽ tranh","Nghe nhạc","Tắt máy"], a:0},
    {q:"Mật khẩu mạnh nên có?", o:["Chữ hoa, thường, số và ký tự đặc biệt","Chỉ toàn số 1","Chỉ một chữ","Toàn khoảng trắng"], a:0},
    {q:"Mật khẩu của em nên?", o:["Không cho ai biết","Dán lên màn hình","Kể cho cả lớp","Đưa cho người lạ"], a:0},
    {q:"Shift + 1 thường cho ký tự?", o:["!","@","#","?"], a:0},
    {q:"Ký tự @ hay xuất hiện ở đâu?", o:["Địa chỉ email","Số điện thoại","Ngày sinh","Tên riêng"], a:0},
    {q:"Vì sao cần học hàng số?", o:["Để gõ số và ký tự đặc biệt","Để tắt máy nhanh","Để nghe nhạc","Không cần thiết"], a:0},
    {q:"Mật khẩu 'a' có mạnh không?", o:["Không, quá đơn giản","Rất mạnh","Không thể đoán","Tốt nhất"], a:0},
    {q:"Ký tự đặc biệt giúp mật khẩu?", o:["Khó đoán hơn","Dễ đoán hơn","Ngắn hơn","Không đổi gì"], a:0}
  ],

  "1.2.7": [
    {q:"WPM là chỉ số đo gì?", o:["Số từ gõ đúng mỗi phút","Số phím trên bàn phím","Số màn hình","Nhiệt độ máy"], a:0},
    {q:"Để tiến bộ khi luyện tốc độ, nên?", o:["Gõ mỗi ngày một chút và ghi lại WPM","Chỉ gõ 1 lần rồi thôi","Không cần luyện","Gõ thật mạnh"], a:0},
    {q:"Điều nào quan trọng hơn khi luyện?", o:["Gõ đúng trước, rồi mới nhanh","Nhanh bằng mọi giá","Gõ mạnh nhất","Nhìn phím liên tục"], a:0},
    {q:"Gõ sai nhiều thì?", o:["Còn chậm hơn vì phải sửa","Nhanh hơn","Không sao cả","Được điểm cao"], a:0},
    {q:"Ghi lại WPM mỗi buổi để?", o:["Thấy mình tiến bộ dần","Làm máy chạy nhanh","Tốn giấy","Không để làm gì"], a:0},
    {q:"Trò chơi gõ phím giúp?", o:["Luyện tốc độ mà vẫn vui","Làm hỏng bàn phím","Mỏi mắt hơn","Quên cách gõ"], a:0},
    {q:"Nếu hôm nay WPM cao hơn hôm qua nghĩa là?", o:["Em đang tiến bộ","Em đang chậm lại","Máy bị lỗi","Không có ý nghĩa"], a:0},
    {q:"Nên luyện gõ như thế nào?", o:["Đều đặn mỗi ngày","Một lần thật lâu rồi nghỉ hẳn","Chỉ khi thi","Không bao giờ"], a:0},
    {q:"Mục tiêu tốt khi luyện tốc độ là?", o:["Vượt kỷ lục của chính mình","Nhanh hơn mọi người ngay","Gõ sai thật nhiều","Bỏ dấu cho nhanh"], a:0},
    {q:"Gõ nhanh mà sai nhiều thì kết quả?", o:["Không tốt, phải sửa nhiều","Rất tốt","Nhanh nhất","Đúng nhất"], a:0}
  ],

  "1.2.8": [
    {q:"Bài kiểm tra gõ phím tổng hợp đo gì?", o:["Tốc độ và độ chính xác","Chỉ tốc độ","Chỉ màu bàn phím","Cân nặng"], a:0},
    {q:"'Typing Portfolio' là gì?", o:["Bảng ghi tiến bộ gõ phím qua các buổi","Một trò chơi","Một loại chuột","Một mật khẩu"], a:0},
    {q:"Nhìn lại bảng tiến bộ giúp em?", o:["Thấy mình đã tiến xa thế nào","Quên hết bài","Mỏi mắt","Tắt máy"], a:0},
    {q:"Kỹ năng gõ 10 ngón có ích?", o:["Theo em suốt đời","Chỉ dùng 1 ngày","Chỉ để thi","Không có ích"], a:0},
    {q:"Muốn gõ thành phản xạ tự nhiên, cần?", o:["Luyện đều đặn","Luyện 1 lần","Không luyện","Chỉ nhìn phím"], a:0},
    {q:"Độ chính xác nghĩa là?", o:["Gõ đúng ít lỗi","Gõ thật nhanh","Gõ thật mạnh","Gõ to tiếng"], a:0},
    {q:"Bài test tổng hợp giúp em biết?", o:["Mình đã gõ tốt tới đâu","Máy nặng bao nhiêu","Nhiệt độ phòng","Giờ hiện tại"], a:0},
    {q:"Sau khi hoàn thành module gõ phím, em nên?", o:["Tiếp tục luyện để giữ phong độ","Quên hết ngay","Không gõ nữa","Tháo bàn phím"], a:0},
    {q:"Điều đáng tự hào ở portfolio là?", o:["Thấy rõ sự tiến bộ của bản thân","Thấy mình thua bạn","Nó dài","Nó nhiều màu"], a:0},
    {q:"Gõ 10 ngón thành thạo giúp em?", o:["Làm việc trên máy nhanh và đỡ mỏi","Chơi game dở hơn","Máy chạy chậm","Hết pin nhanh"], a:0}
  ],

  "1.3.1": [
    {q:"AI (trí tuệ nhân tạo) là gì?", o:["Máy tính làm việc thông minh như hiểu lời, gợi ý","Một loại bàn phím","Một cái loa","Một trò chơi giấy"], a:0},
    {q:"Đâu là ví dụ có dùng AI?", o:["App gợi ý video em thích","Dùng thước kẻ","Bật công tắc đèn","Rót nước"], a:0},
    {q:"Máy dịch ngôn ngữ tự động là ứng dụng của?", o:["AI","Cây bút chì","Cái loa thường","Đèn pin"], a:0},
    {q:"AI học giỏi nhờ điều gì?", o:["Học từ rất nhiều ví dụ","Ánh trăng","Nước mưa","May mắn"], a:0},
    {q:"Câu nào ĐÚNG về AI hiện nay?", o:["Giỏi từng việc cụ thể, không 'biết tuốt'","Có cảm xúc thật như người","Luôn đúng 100%","Không cần dữ liệu"], a:0},
    {q:"Trợ lý ảo có thể làm gì?", o:["Trả lời câu hỏi, đặt báo thức","Nấu cơm giúp em","Giặt quần áo","Quét nhà"], a:0},
    {q:"AI có cảm xúc thật như con người không?", o:["Không","Có","Nhiều hơn người","Tuỳ hôm"], a:0},
    {q:"Vì sao nói AI 'quanh em'?", o:["Nó có trong nhiều app, thiết bị hằng ngày","Nó sống trong vườn","Nó là bạn cùng lớp","Nó ở trên mặt trăng"], a:0},
    {q:"AI khác con người ở điểm nào?", o:["Giỏi việc cụ thể, không hiểu sâu như người","Giống hệt con người","Thông minh hơn mọi mặt","Không làm được gì"], a:0},
    {q:"Đâu KHÔNG phải việc của AI?", o:["Tự dùng thước đo bằng tay em","Gợi ý bài hát","Dịch tiếng nước ngoài","Lọc thư rác"], a:0}
  ],

  "1.3.2": [
    {q:"Chatbot là gì?", o:["AI mà em có thể trò chuyện bằng cách gõ","Một loại robot lau nhà","Một cái loa","Một trò chơi board game"], a:0},
    {q:"Để trò chuyện với chatbot, em?", o:["Gõ câu hỏi rồi gửi","Rút điện","Lắc điện thoại","Vẽ lên màn hình"], a:0},
    {q:"Nếu chưa rõ câu trả lời, em có thể?", o:["Hỏi tiếp để làm rõ","Đập máy","Bỏ đi","Tắt nguồn"], a:0},
    {q:"Câu trả lời của AI nên được coi là?", o:["Thông tin để tham khảo","Chân lý tuyệt đối","Luôn luôn sai","Bí mật quốc gia"], a:0},
    {q:"Khi hỏi chatbot, nên?", o:["Tò mò nhưng vẫn kiểm chứng điều quan trọng","Tin tuyệt đối mọi thứ","Không đọc câu trả lời","Chép ngay không suy nghĩ"], a:0},
    {q:"'Phỏng vấn AI' nghĩa là?", o:["Đặt nhiều câu hỏi cho AI","Quay phim AI","Vẽ AI","Tắt AI"], a:0},
    {q:"Chatbot trả lời bằng?", o:["Chữ (văn bản)","Mùi hương","Ánh sáng nhấp nháy","Rung điện thoại"], a:0},
    {q:"Nếu AI trả lời chưa đúng ý, em nên?", o:["Nói rõ hơn và hỏi lại","Bỏ cuộc ngay","Tin luôn","Xoá ứng dụng"], a:0},
    {q:"Trò chuyện với AI giúp em?", o:["Học hỏi và khám phá","Làm hỏng máy","Mất bạn bè","Quên hết bài"], a:0},
    {q:"Khi lưu lại cuộc trò chuyện với AI để?", o:["Xem lại điều đã học","Khoe là của mình viết","Bán cho người khác","Không có lý do"], a:0}
  ],

  "1.3.3": [
    {q:"Google thường đưa ra kết quả gì?", o:["Danh sách các trang web","Một câu trả lời tự viết","Một bài hát","Một bức tranh"], a:0},
    {q:"AI trò chuyện đưa ra kết quả gì?", o:["Một câu trả lời mới tự viết","Danh sách trang web","Một cái loa","Một con chuột"], a:0},
    {q:"Vì AI 'tự viết' câu trả lời nên?", o:["Đôi khi có thể sai","Luôn luôn đúng","Không bao giờ trả lời","Chỉ nói tiếng Anh"], a:0},
    {q:"Khi cần kiểm chứng, em nên?", o:["Đối chiếu với nguồn đáng tin","Tin ngay câu đầu tiên","Đoán bừa","Bỏ qua"], a:0},
    {q:"Ưu điểm của AI so với Google là?", o:["Trả lời gọn, ngay câu hỏi","Luôn đúng tuyệt đối","Không cần điện","Miễn phí mãi mãi"], a:0},
    {q:"Google phù hợp khi em muốn?", o:["Tự đọc nhiều nguồn và chọn lọc","Không đọc gì cả","Nghe nhạc","Vẽ tranh"], a:0},
    {q:"Điểm chung của Google và AI là?", o:["Đều giúp tìm thông tin","Đều là con chuột","Đều là bàn phím","Đều là trò chơi"], a:0},
    {q:"Vì sao vẫn cần đối chiếu nguồn?", o:["Vì AI có thể trả lời sai","Vì Google luôn sai","Vì máy hết pin","Vì cho vui"], a:0},
    {q:"Cùng một câu hỏi, Google và AI cho?", o:["Kết quả trình bày khác nhau","Kết quả y hệt","Không kết quả nào","Chỉ hình ảnh"], a:0},
    {q:"Tin thật thường xuất hiện ở?", o:["Nhiều nơi uy tín","Chỉ một trang lạ","Không nơi nào","Chỉ trong game"], a:0}
  ],

  "1.3.4": [
    {q:"AI có luôn trả lời đúng không?", o:["Không, đôi khi sai","Luôn đúng 100%","Không bao giờ đúng","Chỉ đúng ban đêm"], a:0},
    {q:"Khi AI 'bịa' thông tin, nghĩa là?", o:["Nói điều nghe xuôi tai nhưng không có thật","Nói rất nhỏ","Không nói gì","Chỉ nói số"], a:0},
    {q:"Với thông tin quan trọng, em nên?", o:["Kiểm tra lại ở nguồn đáng tin","Tin ngay lập tức","Chép luôn","Kể cho mọi người là đúng"], a:0},
    {q:"Vì sao AI đôi khi không biết tin mới nhất?", o:["Nó chỉ biết những gì đã học","Vì nó lười","Vì nó buồn ngủ","Vì mất điện"], a:0},
    {q:"'Bắt lỗi AI' là hoạt động?", o:["Tìm một câu AI trả lời chưa đúng","Khen AI","Tắt AI","Vẽ AI"], a:0},
    {q:"Nên tin AI bao nhiêu phần trăm?", o:["Không nên tin 100%","Tin đủ 100%","Tin 200%","Không bao giờ dùng"], a:0},
    {q:"Nguồn nào đáng tin để kiểm chứng?", o:["Sách, trang chính thống","Tin đồn ngoài đường","Câu chuyện tự bịa","Giấc mơ"], a:0},
    {q:"AI trả lời sai vì?", o:["Học từ dữ liệu có thể thiếu hoặc lệch","Trời mưa","Màn hình nhỏ","Bàn phím cũ"], a:0},
    {q:"Thái độ đúng khi dùng AI là?", o:["Vừa dùng vừa kiểm chứng","Tin tuyệt đối","Không bao giờ dùng","Sợ hãi AI"], a:0},
    {q:"Coi câu trả lời của AI như?", o:["Lời một người bạn thông minh nhưng đôi khi nhầm","Lời của thần thánh","Điều cấm cãi","Trò đùa vô nghĩa"], a:0}
  ],

  "1.3.5": [
    {q:"Câu hỏi cho AI càng rõ ràng thì?", o:["Kết quả càng đúng ý","Kết quả càng sai","AI càng chậm","Không đổi gì"], a:0},
    {q:"Câu hỏi nào rõ ràng hơn?", o:["Giải thích vì sao trời mưa cho em lớp 3, trong 3 câu","Nói gì đó đi","Kể chuyện","Viết"], a:0},
    {q:"Một câu hỏi tốt nên nói rõ?", o:["Việc cần làm, cho ai, dài hay ngắn","Chỉ một chữ","Không cần gì","Càng mơ hồ càng tốt"], a:0},
    {q:"'Kể về chó' là câu hỏi?", o:["Quá chung chung, mơ hồ","Rất rõ ràng","Rất chi tiết","Hoàn hảo"], a:0},
    {q:"Nếu AI trả lời chưa ưng, em nên?", o:["Nói rõ muốn sửa gì rồi hỏi lại","Bỏ cuộc","La mắng AI","Tắt máy"], a:0},
    {q:"Vì sao nên viết câu hỏi rõ ràng?", o:["Giúp AI hiểu đúng ý em","Làm AI vui","Tốn ít pin","Cho có lệ"], a:0},
    {q:"Thêm 'trong 3 câu' vào câu hỏi là để?", o:["Giới hạn độ dài câu trả lời","Làm AI bối rối","Kéo dài câu trả lời","Không có tác dụng"], a:0},
    {q:"Trò chuyện với AI nên là?", o:["Nhiều lượt, sửa dần cho đúng ý","Hỏi 1 lần là xong","Không cần trả lời","Chỉ nghe không hỏi"], a:0},
    {q:"Câu hỏi mơ hồ dẫn đến?", o:["Câu trả lời chung chung, khó đúng ý","Câu trả lời hoàn hảo","AI im lặng","Máy tắt"], a:0},
    {q:"'Giải thích cho em lớp 5' là phần nào của câu hỏi?", o:["Cho ai (đối tượng)","Định dạng","Không quan trọng","Lời chào"], a:0}
  ],

  "1.3.6": [
    {q:"Với AI, em KHÔNG nên chia sẻ?", o:["Mật khẩu, địa chỉ nhà","Một câu hỏi Toán","Tên loài hoa","Màu em thích"], a:0},
    {q:"Khi nói chuyện với AI, nên?", o:["Yêu cầu lịch sự","Dùng lời thô lỗ","Quát tháo","Ra lệnh gắt gỏng"], a:0},
    {q:"Gặp nội dung khó chịu, đáng lo, em nên?", o:["Báo người lớn tin tưởng","Giữ im lặng một mình","Làm theo ngay","Chia sẻ khắp nơi"], a:0},
    {q:"Thông tin cá nhân nhạy cảm gồm?", o:["Số điện thoại, địa chỉ, mật khẩu","Tên một con vật","Màu sắc yêu thích","Món ăn ngon"], a:0},
    {q:"'5 luật vàng khi nói chuyện với AI' là để?", o:["Nhắc em dùng AI an toàn, lịch sự","Làm AI sợ","Trang trí","Không để làm gì"], a:0},
    {q:"Dùng AI theo cách nào là đúng?", o:["Cách em tự hào kể cho ba mẹ, thầy cô","Cách giấu giếm","Cách để trêu chọc bạn","Cách gây hại"], a:0},
    {q:"Có nên đưa mật khẩu cho AI không?", o:["Không bao giờ","Có, để AI nhớ giúp","Có, nếu AI hỏi","Tuỳ hôm"], a:0},
    {q:"Lịch sự với AI thể hiện qua?", o:["Cách yêu cầu nhẹ nhàng, rõ ràng","La hét","Viết chữ hoa hết","Không nói gì"], a:0},
    {q:"Nếu AI đưa nội dung đáng sợ, em?", o:["Dừng lại và báo người lớn","Xem tiếp cho hết","Làm theo","Gửi cho bạn"], a:0},
    {q:"Giữ an toàn khi dùng AI giúp em?", o:["Bảo vệ bản thân và thông tin","Chơi giỏi hơn","Máy nhanh hơn","Hết tốn pin"], a:0}
  ],

  "1.4.1": [
    {q:"Một prompt tốt thường đủ mấy phần?", o:["3 phần","1 phần","10 phần","Không phần nào"], a:0},
    {q:"Ba phần của prompt là?", o:["Bối cảnh – Yêu cầu – Định dạng","Tên – Tuổi – Lớp","Sáng – Trưa – Tối","Đỏ – Vàng – Xanh"], a:0},
    {q:"'Cho ai, để làm gì' là phần?", o:["Bối cảnh","Yêu cầu","Định dạng","Lời chào"], a:0},
    {q:"'Tóm tắt', 'giải thích', 'viết' là phần?", o:["Yêu cầu (việc cần làm)","Bối cảnh","Định dạng","Kết thúc"], a:0},
    {q:"'Trong 3 câu ngắn' là phần?", o:["Định dạng","Bối cảnh","Yêu cầu","Lời chào"], a:0},
    {q:"Prompt càng đủ phần thì?", o:["AI càng hiểu đúng ý em","AI càng bối rối","Câu trả lời càng sai","Không đổi gì"], a:0},
    {q:"'Giải thích vì sao có mưa, cho em lớp 5, trong 3 câu' — phần định dạng là?", o:["Trong 3 câu","Vì sao có mưa","Cho em lớp 5","Không có"], a:0},
    {q:"Prompt là gì?", o:["Câu lệnh/yêu cầu em gõ cho AI","Một loại máy in","Một môn thể thao","Một loại pin"], a:0},
    {q:"Thiếu phần bối cảnh, câu trả lời có thể?", o:["Không hợp với người/mục đích","Luôn hoàn hảo","Ngắn lại","Dài ra"], a:0},
    {q:"Viết prompt đủ 3 phần giúp?", o:["Kết quả sát ý mong muốn","AI trả lời chậm hơn","Máy nóng lên","Tốn giấy"], a:0}
  ],

  "1.4.2": [
    {q:"'Cho AI đóng vai' nghĩa là?", o:["Bảo AI đóng vai ai đó để trả lời","Tặng quà cho AI","Đặt tên cho máy","Tắt AI"], a:0},
    {q:"Ví dụ về giao vai cho AI?", o:["Hãy đóng vai thầy giáo vui tính","Hãy tắt màn hình","Hãy rút điện","Hãy đứng im"], a:0},
    {q:"Cùng một câu hỏi, các vai khác nhau cho?", o:["Cách trả lời khác nhau","Kết quả y hệt","Không trả lời","Chỉ một đáp án"], a:0},
    {q:"Muốn câu trả lời dễ hiểu, nên cho vai?", o:["Thầy cô giảng bài","Người bí ẩn","Cái máy lạnh","Không cho vai nào"], a:0},
    {q:"Giao vai giúp câu trả lời?", o:["Hợp mục đích hơn","Sai nhiều hơn","Dài vô ích","Không đổi"], a:0},
    {q:"'Đóng vai đầu bếp' phù hợp khi hỏi về?", o:["Nấu ăn","Sửa xe đạp","Giải Toán","Lịch sử"], a:0},
    {q:"Nên chọn vai như thế nào?", o:["Phù hợp với điều em cần","Chọn bừa","Càng lạ càng tốt","Không cần chọn"], a:0},
    {q:"Muốn nhiều ý tưởng sáng tạo, cho vai?", o:["Nhà sáng tạo/nghệ sĩ","Cảnh sát giao thông","Bác bảo vệ","Không ai"], a:0},
    {q:"Giao vai là một cách?", o:["Viết prompt hay hơn","Làm hỏng AI","Tắt máy","Xoá dữ liệu"], a:0},
    {q:"Thử 3 vai khác nhau cho cùng câu hỏi để?", o:["So sánh và chọn câu hợp nhất","Làm AI mệt","Tốn thời gian vô ích","Không vì gì"], a:0}
  ],

  "1.4.3": [
    {q:"'Yêu cầu định dạng' giúp kết quả?", o:["Gọn, dễ dùng theo ý em","Lộn xộn hơn","Dài vô tận","Biến mất"], a:0},
    {q:"Ví dụ yêu cầu định dạng?", o:["Trả lời bằng bảng / gạch đầu dòng","Trả lời thật lâu","Không trả lời","Trả lời bằng hình vẽ tay"], a:0},
    {q:"'Trong khoảng 100 chữ' là yêu cầu?", o:["Giới hạn độ dài","Chọn màu","Đổi vai","Lời chào"], a:0},
    {q:"Xin thời khoá biểu nên yêu cầu định dạng?", o:["Dạng bảng","Dạng bài thơ","Dạng bài hát","Không cần"], a:0},
    {q:"Định dạng rõ giúp em?", o:["Đỡ phải sắp xếp lại","Tốn thời gian hơn","Khó đọc hơn","Không lợi ích"], a:0},
    {q:"'Viết thành danh sách gạch đầu dòng' là?", o:["Một yêu cầu định dạng","Một lời chào","Một câu hỏi Toán","Một tên riêng"], a:0},
    {q:"Muốn câu trả lời ngắn, em nói?", o:["Trong 3 câu","Càng dài càng tốt","Không giới hạn","Viết 10 trang"], a:0},
    {q:"Định dạng bảng phù hợp khi?", o:["Trình bày nhiều mục có cột","Viết một câu ngắn","Kể chuyện","Hát"], a:0},
    {q:"Nếu không nói định dạng, AI sẽ?", o:["Tự chọn cách trình bày","Không trả lời","Báo lỗi","Tắt máy"], a:0},
    {q:"Yêu cầu định dạng là một phần của?", o:["Prompt tốt","Bàn phím","Con chuột","Màn hình"], a:0}
  ],

  "1.4.4": [
    {q:"Khi chưa ưng câu trả lời, em nên?", o:["Hỏi tiếp để chỉnh dần","Bỏ cuộc ngay","Tắt máy","La mắng AI"], a:0},
    {q:"Câu 'ngắn hơn' là kiểu?", o:["Yêu cầu nối tiếp (follow-up)","Lời chào","Câu hỏi mới hoàn toàn","Tên riêng"], a:0},
    {q:"AI có nhớ ngữ cảnh trước đó không?", o:["Có, nên sửa theo yêu cầu mới","Không bao giờ","Chỉ nhớ số","Chỉ nhớ hình"], a:0},
    {q:"Ví dụ câu hỏi tiếp?", o:["Dễ hiểu hơn / thêm ví dụ","Tắt đi","Xoá hết","Đứng im"], a:0},
    {q:"Làm việc với AI giống?", o:["Trò chuyện nhiều lượt","Hỏi 1 lần rồi thôi","Ra lệnh một chiều","Im lặng"], a:0},
    {q:"Muốn câu trả lời có ví dụ, em nói?", o:["Thêm ví dụ giúp em","Bỏ hết ví dụ","Ngắn nhất có thể","Không nói gì"], a:0},
    {q:"Cải thiện câu trả lời qua nhiều lần hỏi tiếp giúp?", o:["Kết quả ngày càng đúng ý","Kết quả tệ đi","AI hỏng","Mất dữ liệu"], a:0},
    {q:"Nếu câu trả lời quá khó hiểu, em nói?", o:["Giải thích dễ hiểu hơn","Khó hơn nữa đi","Thôi bỏ","Viết bằng tiếng Anh"], a:0},
    {q:"Hỏi tiếp là kỹ năng?", o:["Giúp em dùng AI hiệu quả hơn","Làm phiền AI","Vô ích","Gây lỗi"], a:0},
    {q:"Sau vài lần hỏi tiếp, câu trả lời thường?", o:["Sát ý em hơn","Xa ý hơn","Biến mất","Không đổi"], a:0}
  ],

  "1.4.5": [
    {q:"AI có thể giúp em học bằng cách?", o:["Giải thích bài khó bằng ví dụ đời thường","Làm bài thay hoàn toàn để chép","Xoá bài tập","Tắt máy"], a:0},
    {q:"Nhờ AI tạo câu đố ôn tập giúp?", o:["Ôn môn em còn yếu","Bỏ học","Quên bài","Chơi game"], a:0},
    {q:"Khi AI giải thích bài, em nên?", o:["Hiểu bài, không chỉ chép đáp án","Chép nguyên rồi nộp","Không đọc","Tin tuyệt đối"], a:0},
    {q:"Dùng AI để học đúng cách là?", o:["Để hiểu bài hơn","Để gian lận","Để khỏi suy nghĩ","Để nộp bài của AI"], a:0},
    {q:"Nhờ AI tạo '10 câu đố môn em yếu' là ví dụ?", o:["Prompt cho việc học","Prompt phá hoại","Câu chào","Mật khẩu"], a:0},
    {q:"Vì sao nên tự hiểu bài?", o:["Hiểu rồi mới là kiến thức của em","Để AI vui","Để tốn thời gian","Không vì gì"], a:0},
    {q:"AI đóng vai trò gì trong học tập?", o:["Bạn học hỗ trợ","Người làm thay tất cả","Kẻ phá bài","Không liên quan"], a:0},
    {q:"Nếu chưa hiểu lời AI, em nên?", o:["Nhờ giải thích lại dễ hơn","Bỏ qua","Chép luôn","Tắt máy"], a:0},
    {q:"Nhờ AI ra câu đố giúp việc ôn tập?", o:["Vui và hiệu quả hơn","Nhàm chán hơn","Vô ích","Làm quên bài"], a:0},
    {q:"Điều nên tránh khi dùng AI học?", o:["Chép y nguyên mà không hiểu","Hỏi để hiểu","Nhờ cho ví dụ","Nhờ tạo câu đố"], a:0}
  ],

  "1.4.6": [
    {q:"AI có thể đồng hành sáng tạo bằng cách?", o:["Cùng viết truyện, đặt tên, nghĩ ý tưởng","Giặt quần áo","Nấu ăn","Quét nhà"], a:0},
    {q:"Khi sáng tác cùng AI, phần của em là?", o:["Thêm màu sắc, ý riêng của mình","Chép y nguyên","Không làm gì","Xoá hết"], a:0},
    {q:"Muốn nhiều lựa chọn, em có thể yêu cầu?", o:["Cho em 5 ý tưởng khác nhau","Chỉ 1 ý duy nhất","Không ý nào","Ý dài nhất"], a:0},
    {q:"Sản phẩm sáng tạo nên?", o:["Mang dấu ấn riêng của em","Hoàn toàn của AI","Giống hệt bạn khác","Không của ai"], a:0},
    {q:"AI giúp gì khi em bí ý tưởng?", o:["Gợi thêm hướng để em chọn","Làm em bí hơn","Xoá ý tưởng","Không giúp"], a:0},
    {q:"'Truyện em + AI đồng sáng tác' nghĩa là?", o:["Em và AI cùng góp ý làm nên truyện","AI viết hết, em ký tên","Em chép mạng","Không ai viết"], a:0},
    {q:"Nên dùng gợi ý của AI thế nào?", o:["Chọn lọc và phát triển thêm","Dùng hết không suy nghĩ","Bỏ hết","Chỉ nhìn"], a:0},
    {q:"Sáng tạo cùng AI giúp em?", o:["Có thêm ý tưởng phong phú","Mất khả năng nghĩ","Lười hơn hẳn","Không lợi ích"], a:0},
    {q:"Khi AI cho một cái tên chưa hay, em?", o:["Yêu cầu vài lựa chọn khác","Bắt buộc phải dùng","Bỏ cả dự án","Trách AI"], a:0},
    {q:"Điều làm sản phẩm 'thật sự của em' là?", o:["Ý tưởng và cảm xúc riêng em thêm vào","Việc AI làm hết","Sao chép y nguyên","Càng ít công em càng tốt"], a:0}
  ]

});

/* ===== QUIZ — MODULE 1.5 – 1.8 ===== */
Object.assign(window.LESSON_QUIZ, {

  "1.5.1": [
    {q:"Việc lớn có thể giải quyết dễ hơn bằng cách?", o:["Chia thành nhiều việc nhỏ","Làm một hơi thật nhanh","Bỏ qua luôn","Chờ người khác làm"], a:0},
    {q:"'Dọn phòng' có thể chia thành?", o:["Gấp quần áo, xếp sách, lau bàn","Chỉ một việc duy nhất","Không chia được","Đi ngủ"], a:0},
    {q:"Kỹ năng chia việc lớn thành việc nhỏ gọi là?", o:["Phân rã vấn đề","Tô màu","Đếm số","Hát"], a:0},
    {q:"Gặp bài khó, câu hỏi hữu ích là?", o:["Có thể chia thành phần nhỏ nào?","Bao giờ mới xong?","Ai làm hộ đây?","Bỏ được không?"], a:0},
    {q:"Vì sao nên chia nhỏ việc lớn?", o:["Mỗi phần nhỏ dễ làm hơn","Cho tốn thời gian","Cho rối thêm","Không vì gì"], a:0},
    {q:"Khi mỗi việc nhỏ xong thì?", o:["Việc lớn cũng xong","Việc lớn to hơn","Không liên quan","Phải làm lại"], a:0},
    {q:"'Làm bánh' là việc lớn gồm?", o:["Nhiều bước nhỏ nối nhau","Một bước duy nhất","Không bước nào","Chỉ nướng"], a:0},
    {q:"Phân rã giúp việc khó trở nên?", o:["Bớt đáng sợ, dễ bắt đầu","Khó hơn","Biến mất","Nguy hiểm"], a:0},
    {q:"'Tổ chức sinh nhật' nên?", o:["Chia thành nhiều bước nhỏ","Làm tất cả cùng lúc","Không lên kế hoạch","Nhờ AI làm hết"], a:0},
    {q:"Tư duy phân rã có ích cho?", o:["Mọi loại vấn đề","Chỉ môn Toán","Chỉ trên máy tính","Không việc gì"], a:0}
  ],

  "1.5.2": [
    {q:"Nhiều việc phải làm theo?", o:["Đúng thứ tự","Ngẫu nhiên","Ngược lại","Không cần thứ tự"], a:0},
    {q:"Làm bánh, phải trộn bột?", o:["Trước khi nướng","Sau khi nướng","Không cần trộn","Cùng lúc ăn"], a:0},
    {q:"Đảo lộn thứ tự các bước thường?", o:["Làm hỏng kết quả","Cho kết quả tốt hơn","Không ảnh hưởng","Nhanh hơn"], a:0},
    {q:"Trước khi làm một bước, nên hỏi?", o:["Bước này cần bước nào xong trước?","Bao giờ nghỉ?","Ai đang nhìn?","Trời có mưa?"], a:0},
    {q:"Nhận ra 'bước nào trước, bước nào sau' là?", o:["Một kỹ năng quan trọng","Việc không cần thiết","Trò chơi","Điều ngẫu nhiên"], a:0},
    {q:"Mang tất rồi mới mang giày là?", o:["Thứ tự đúng","Thứ tự sai","Không quan trọng","Không làm được"], a:0},
    {q:"Sắp xếp lại các bước bị xáo trộn giúp?", o:["Quy trình chạy đúng","Rối hơn","Chậm hơn","Không có tác dụng"], a:0},
    {q:"Một công thức nấu ăn là ví dụ về?", o:["Các bước có thứ tự","Việc không cần thứ tự","Một trò chơi","Một con số"], a:0},
    {q:"Nếu nướng bánh trước khi trộn bột thì?", o:["Không ra được bánh đúng","Ngon hơn","Nhanh hơn","Vẫn bình thường"], a:0},
    {q:"Thứ tự đúng giúp công việc?", o:["Ra kết quả mong muốn","Thất bại","Kéo dài mãi","Biến mất"], a:0}
  ],

  "1.5.3": [
    {q:"Quy luật (pattern) là điều?", o:["Lặp lại và có thể đoán tiếp","Xảy ra một lần","Ngẫu nhiên hoàn toàn","Không bao giờ đúng"], a:0},
    {q:"Dãy 2, 4, 6, 8… có quy luật?", o:["Cộng 2","Cộng 5","Nhân 10","Trừ 1"], a:0},
    {q:"Nhận ra quy luật giúp?", o:["Giải nhanh và đoán cái tiếp theo","Chậm hơn","Rối hơn","Không giúp gì"], a:0},
    {q:"Số tiếp theo của 5, 10, 15, … là?", o:["20","16","25","11"], a:0},
    {q:"Ai rất giỏi làm theo quy luật?", o:["Máy tính","Con mèo","Cái bàn","Cây bút"], a:0},
    {q:"Tìm quy luật là bước đầu để?", o:["'Dạy' máy làm việc","Tắt máy","Vẽ tranh","Ngủ trưa"], a:0},
    {q:"Thứ hai, thứ ba, thứ tư… là một?", o:["Quy luật (lặp lại)","Điều ngẫu nhiên","Con số vô nghĩa","Trò chơi"], a:0},
    {q:"Dãy hình tròn–vuông–tròn–vuông tiếp theo là?", o:["Tròn","Tam giác","Ngôi sao","Không có"], a:0},
    {q:"Quy luật xuất hiện ở đâu?", o:["Dãy số, dãy hình, việc hằng ngày","Chỉ trong sách Toán","Chỉ trên trời","Không ở đâu"], a:0},
    {q:"Vì sao quy luật hữu ích?", o:["Giúp dự đoán điều sắp tới","Làm mọi thứ khó hơn","Gây nhầm lẫn","Không lý do"], a:0}
  ],

  "1.5.4": [
    {q:"Trừu tượng hoá là?", o:["Giữ điều quan trọng, bỏ chi tiết thừa","Giữ mọi chi tiết","Bỏ hết thông tin","Thêm chi tiết vô ích"], a:0},
    {q:"Kể lại chuyện dài trong 3 câu đòi hỏi?", o:["Chọn ý chính, bỏ vụn vặt","Kể hết từng chi tiết","Không kể gì","Thêm nhiều tình tiết"], a:0},
    {q:"Câu hỏi giúp trừu tượng hoá?", o:["Nếu chỉ giữ 3 điều, em giữ điều nào?","Trời mấy giờ?","Ai đang nói?","Bao xa nữa?"], a:0},
    {q:"'Chi tiết thừa' còn gọi là?", o:["Phần nhiễu","Phần quan trọng nhất","Kết quả","Đề bài"], a:0},
    {q:"Tóm tắt một câu chuyện là ví dụ về?", o:["Trừu tượng hoá","Tô màu","Đếm số","Gõ phím"], a:0},
    {q:"Bỏ chi tiết thừa giúp?", o:["Tập trung vào điều cốt lõi","Rối hơn","Dài hơn","Mất thông tin quan trọng"], a:0},
    {q:"Khi vẽ bản đồ đường đi, ta thường?", o:["Bỏ chi tiết không cần, giữ đường chính","Vẽ từng viên gạch","Vẽ mọi cái cây","Không vẽ gì"], a:0},
    {q:"Điều nên GIỮ khi trừu tượng hoá?", o:["Thông tin quan trọng","Mọi thứ vụn vặt","Không giữ gì","Phần gây nhiễu"], a:0},
    {q:"Trừu tượng hoá giúp giải quyết vấn đề?", o:["Gọn gàng, rõ ràng hơn","Phức tạp hơn","Lâu hơn","Không đổi"], a:0},
    {q:"Tóm 1 truyện thành 3 câu nghĩa là?", o:["Giữ ý chính nhất","Chép nguyên truyện","Bỏ hết nội dung","Thêm nhân vật mới"], a:0}
  ],

  "1.5.5": [
    {q:"Bốn kỹ năng tư duy máy tính gồm?", o:["Chia nhỏ, sắp thứ tự, tìm quy luật, bỏ chi tiết thừa","Đọc, viết, hát, múa","Cộng, trừ, nhân, chia","Xanh, đỏ, tím, vàng"], a:0},
    {q:"Cách nghĩ giúp giải mọi vấn đề gọi là?", o:["Tư duy máy tính","Tư duy màu sắc","Tư duy âm nhạc","Không có tên"], a:0},
    {q:"Giải vấn đề của lớp nên bắt đầu bằng?", o:["Phân rã thành bước nhỏ","Bỏ cuộc","Chờ may mắn","Đổ lỗi"], a:0},
    {q:"Tư duy máy tính dùng được cho?", o:["Nhiều loại vấn đề, không chỉ trên máy","Chỉ máy tính","Chỉ môn Toán","Không việc gì"], a:0},
    {q:"Sau khi chia nhỏ vấn đề, nên?", o:["Sắp thứ tự các bước","Trộn lộn xộn","Bỏ hết","Làm ngược"], a:0},
    {q:"Lập kế hoạch giải quyết vấn đề giúp?", o:["Biết cần làm gì, theo thứ tự nào","Rối hơn","Không giúp gì","Tốn giấy"], a:0},
    {q:"Nên chọn vấn đề như thế nào?", o:["Gần gũi, vừa sức","Càng khó càng tốt","Không liên quan mình","Không thể giải"], a:0},
    {q:"Tìm quy luật giúp gì khi giải vấn đề?", o:["Nhận ra phần lặp để xử lý nhanh","Làm chậm lại","Gây rối","Không giúp"], a:0},
    {q:"Bốn kỹ năng này thường được dùng?", o:["Kết hợp cùng nhau","Riêng lẻ, không liên quan","Chỉ một cái","Không bao giờ"], a:0},
    {q:"Mục tiêu của bài này là?", o:["Áp dụng 4 kỹ năng vào 1 vấn đề thật","Học thuộc lòng","Vẽ tranh","Chơi game"], a:0}
  ],

  "1.5.6": [
    {q:"Sau khi giải được, cần?", o:["Trình bày cách giải cho người khác hiểu","Giữ bí mật","Quên đi","Xoá hết"], a:0},
    {q:"Trình bày cách giải nên?", o:["Theo từng bước, có ví dụ","Nói tắt, bỏ bước","Nói thật nhanh","Không giải thích"], a:0},
    {q:"Cách kiểm tra em giải thích tốt?", o:["Bạn làm theo và thành công","Không ai hiểu","Bạn bỏ đi","Tự khen mình"], a:0},
    {q:"Chỗ bạn bị kẹt khi làm theo là chỗ?", o:["Em cần giải thích rõ hơn","Bạn sai","Không quan trọng","Bỏ qua"], a:0},
    {q:"Khi trình bày, nên tránh?", o:["Nói tắt khiến người nghe khó hiểu","Dùng ví dụ","Nói rõ ràng","Theo thứ tự"], a:0},
    {q:"Giải thích tốt giúp?", o:["Người khác làm theo được","Người khác bối rối","Mất thời gian vô ích","Không ai quan tâm"], a:0},
    {q:"Trình bày cách giải là kỹ năng?", o:["Truyền đạt/giao tiếp","Chạy nhanh","Vẽ đẹp","Hát hay"], a:0},
    {q:"Nên dùng gì để giải thích dễ hiểu?", o:["Ví dụ cụ thể","Từ ngữ khó","Nói vòng vo","Im lặng"], a:0},
    {q:"Nếu bạn không làm theo được, có thể do?", o:["Em giải thích chưa rõ","Bạn dốt","Máy hỏng","Trời mưa"], a:0},
    {q:"Mục tiêu khi trình bày là?", o:["Người khác hiểu và làm theo được","Nói cho xong","Khoe kiến thức","Làm bạn rối"], a:0}
  ],

  "1.6.1": [
    {q:"Thuật toán là?", o:["Chuỗi bước rõ ràng máy làm theo được","Một loại bánh","Một con chuột","Một trò chơi giấy"], a:0},
    {q:"Ví dụ về thuật toán trong đời sống?", o:["Công thức nấu ăn","Bức tranh","Bài hát","Cái ghế"], a:0},
    {q:"Máy tính làm theo thuật toán như thế nào?", o:["Rất đúng nhưng 'ngây thơ', cần bước cực rõ","Tự đoán ý người","Bỏ qua bước khó","Làm theo cảm xúc"], a:0},
    {q:"Khi viết thuật toán cho máy, cần?", o:["Rõ ràng, không bỏ sót bước","Nói chung chung","Bỏ bước cho nhanh","Viết mơ hồ"], a:0},
    {q:"Hướng dẫn gấp hạc giấy là?", o:["Một thuật toán","Một con số","Một màu sắc","Một cái loa"], a:0},
    {q:"Làm đúng thứ tự các bước sẽ?", o:["Ra kết quả mong muốn","Luôn thất bại","Không ra gì","Ngẫu nhiên"], a:0},
    {q:"'Thuật toán đánh răng cho robot' cần?", o:["Các bước thật rõ ràng","Một bước duy nhất","Không bước nào","Cảm xúc"], a:0},
    {q:"Vì sao bước phải viết cực rõ?", o:["Vì máy không tự hiểu ý như người","Vì máy lười","Vì cho vui","Không lý do"], a:0},
    {q:"Thuật toán tốt thì?", o:["Ai/máy làm theo cũng ra đúng kết quả","Chỉ tác giả hiểu","Không ai làm được","Ngẫu nhiên"], a:0},
    {q:"Điểm chung của công thức nấu ăn và thuật toán?", o:["Đều là chuỗi bước theo thứ tự","Đều ăn được","Đều là số","Đều là hình"], a:0}
  ],

  "1.6.2": [
    {q:"Flowchart (lưu đồ) là?", o:["Cách vẽ thuật toán bằng hình","Một bài hát","Một con chuột","Một mật khẩu"], a:0},
    {q:"Hình oval trong flowchart chỉ?", o:["Bắt đầu / kết thúc","Một hành động","Một câu hỏi","Dữ liệu"], a:0},
    {q:"Hình chữ nhật chỉ?", o:["Một hành động","Bắt đầu","Câu hỏi rẽ nhánh","Kết thúc"], a:0},
    {q:"Hình thoi chỉ?", o:["Một câu hỏi (rẽ nhánh Đúng/Sai)","Một hành động","Bắt đầu","Kết thúc"], a:0},
    {q:"Mũi tên trong flowchart để?", o:["Chỉ đi đâu tiếp theo","Trang trí","Xoá bước","Đổi màu"], a:0},
    {q:"Rẽ nhánh Đúng/Sai dùng hình?", o:["Thoi","Oval","Chữ nhật","Tròn"], a:0},
    {q:"Ô 'Bắt đầu' dùng hình?", o:["Oval","Thoi","Vuông to","Tam giác"], a:0},
    {q:"Flowchart giúp gì?", o:["Nhìn thấy các bước và luồng đi","Nghe nhạc","Đo nhiệt độ","Gõ phím"], a:0},
    {q:"Một hành động cụ thể (ví dụ 'rửa tay') vẽ bằng?", o:["Hình chữ nhật","Hình thoi","Hình oval","Mũi tên"], a:0},
    {q:"Vẽ flowchart giúp thuật toán?", o:["Dễ hiểu và dễ kiểm tra hơn","Khó hiểu hơn","Biến mất","Không đổi"], a:0}
  ],

  "1.6.3": [
    {q:"Input là?", o:["Cái đưa vào","Cái nhận ra","Một hình vẽ","Một mũi tên"], a:0},
    {q:"Output là?", o:["Cái nhận ra (kết quả)","Cái đưa vào","Một câu hỏi","Một hình oval"], a:0},
    {q:"Với máy tính bỏ túi, input là?", o:["Các số em bấm","Kết quả phép tính","Cái vỏ máy","Ánh sáng"], a:0},
    {q:"Với máy tính bỏ túi, output là?", o:["Kết quả phép tính","Các số em bấm","Cục pin","Nút bấm"], a:0},
    {q:"Trước khi giải, nên hỏi?", o:["Có gì đưa vào? Cần nhận ra gì?","Bao giờ nghỉ?","Ai đang xem?","Trời mưa không?"], a:0},
    {q:"Xác định I/O giúp?", o:["Hiểu rõ bài toán","Làm rối hơn","Bỏ qua bài","Tốn giấy"], a:0},
    {q:"Máy pha cà phê: input có thể là?", o:["Nước và cà phê","Ly cà phê nóng","Cái máy","Âm thanh"], a:0},
    {q:"Máy pha cà phê: output là?", o:["Ly cà phê","Nước lạnh","Bột cà phê","Điện"], a:0},
    {q:"I/O là viết tắt của?", o:["Input/Output (Vào/Ra)","In/Out chơi","Ít/Ối","Không gì"], a:0},
    {q:"Mọi bài toán thường có?", o:["Đầu vào và đầu ra","Chỉ đầu vào","Chỉ đầu ra","Không có gì"], a:0}
  ],

  "1.6.4": [
    {q:"Dry run (chạy tay) là?", o:["Lần theo flowchart từng bước với dữ liệu cụ thể","Chạy bộ ngoài sân","Tắt máy","Vẽ tranh"], a:0},
    {q:"Khi dry run, em đóng vai?", o:["Máy tính","Bác sĩ","Đầu bếp","Ca sĩ"], a:0},
    {q:"Dry run giúp?", o:["Bắt lỗi sớm trước khi cho máy chạy","Làm hỏng thuật toán","Xoá flowchart","Không giúp gì"], a:0},
    {q:"Khi chạy tay, em nên?", o:["Ghi lại kết quả mỗi bước","Bỏ qua các bước","Đoán bừa","Chạy thật nhanh"], a:0},
    {q:"Dry run dùng dữ liệu?", o:["Cụ thể (một ví dụ)","Không có dữ liệu","Dữ liệu tưởng tượng mơ hồ","Vô hạn"], a:0},
    {q:"Nếu dry run ra kết quả sai thì?", o:["Thuật toán cần sửa","Máy hỏng","Bỏ luôn","Kết quả vẫn đúng"], a:0},
    {q:"Dry run nên làm khi nào?", o:["Trước khi thật sự cho máy chạy","Sau khi đã xong hết","Không bao giờ","Khi máy hỏng"], a:0},
    {q:"Chạy tay giúp em?", o:["Hiểu thuật toán hoạt động ra sao","Quên thuật toán","Vẽ đẹp hơn","Gõ nhanh hơn"], a:0},
    {q:"Đóng vai máy tính khi dry run nghĩa là?", o:["Làm y hệt từng bước như máy","Làm theo cảm xúc","Bỏ bước khó","Đoán kết quả"], a:0},
    {q:"Mục đích chính của dry run?", o:["Kiểm tra thuật toán có đúng không","Trang trí","Tính giờ","Nghe nhạc"], a:0}
  ],

  "1.6.5": [
    {q:"Pseudo-code là?", o:["Viết các bước bằng tiếng Việt có cấu trúc","Một ngôn ngữ bí mật","Một hình vẽ","Một con số"], a:0},
    {q:"Pseudo-code nằm giữa?", o:["Flowchart và code thật","Hai bức tranh","Hai bài hát","Hai con chuột"], a:0},
    {q:"Ví dụ pseudo-code?", o:["NẾU trời mưa THÌ mang ô","Vẽ hình tròn","2 + 2 = 4","Xin chào"], a:0},
    {q:"Pseudo-code giúp?", o:["Người đọc được, gần cách máy hiểu","Chỉ máy đọc","Không ai đọc được","Làm rối"], a:0},
    {q:"Nên tập chuyển đổi giữa?", o:["Flowchart và pseudo-code","Hai màu sắc","Hai bài hát","Hai món ăn"], a:0},
    {q:"'NGƯỢC LẠI' trong pseudo-code giống?", o:["Nhánh else (nếu không)","Bắt đầu","Kết thúc","Mũi tên"], a:0},
    {q:"Pseudo-code dùng ngôn ngữ?", o:["Có cấu trúc, dễ hiểu","Hoàn toàn ngẫu nhiên","Chỉ số","Chỉ hình"], a:0},
    {q:"Vì sao pseudo-code hữu ích?", o:["Diễn đạt thuật toán rõ mà không cần code thật","Để trang trí","Để tắt máy","Không hữu ích"], a:0},
    {q:"Chuyển flowchart thành pseudo-code là?", o:["Viết các bước bằng chữ","Xoá flowchart","Vẽ thêm hình","Đổi màu"], a:0},
    {q:"Pseudo-code phù hợp để?", o:["Lên ý tưởng trước khi viết code","Chơi game","Nghe nhạc","Ngủ trưa"], a:0}
  ],

  "1.6.6": [
    {q:"Thuật toán có thể sai kiểu?", o:["Thiếu bước, sai thứ tự, quên trường hợp","Không bao giờ sai","Chỉ sai màu","Chỉ sai tên"], a:0},
    {q:"Công cụ tốt để tìm lỗi thuật toán?", o:["Dry run (chạy tay)","Tắt máy","Vẽ tranh","Nghe nhạc"], a:0},
    {q:"Khi phát hiện bước sai, em nên?", o:["Sửa lại cho đúng","Bỏ cả thuật toán","Giấu đi","Khóc"], a:0},
    {q:"Mắc lỗi khi lập trình là?", o:["Bình thường, ai cũng gặp","Điều tồi tệ nhất","Không thể xảy ra","Chỉ người dốt mới mắc"], a:0},
    {q:"Điều quan trọng khi có lỗi là?", o:["Biết tìm ra và sửa lỗi","Đổ lỗi cho máy","Bỏ cuộc","Giả vờ không thấy"], a:0},
    {q:"Flowchart 'bị gài lỗi' nghĩa là?", o:["Có bước sai/thiếu để em phát hiện","Hoàn hảo","Không có bước nào","Rất đẹp"], a:0},
    {q:"Tìm lỗi bằng dry run vì?", o:["Lần từng bước sẽ lộ chỗ sai","Cho vui","Để tốn thời gian","Không lý do"], a:0},
    {q:"Nếu thuật toán quên một trường hợp?", o:["Có thể chạy sai ở trường hợp đó","Vẫn luôn đúng","Không sao","Máy hỏng"], a:0},
    {q:"Sửa lỗi thuật toán giúp?", o:["Thuật toán chạy đúng","Thuật toán biến mất","Máy chạy chậm","Không đổi"], a:0},
    {q:"Thái độ đúng với lỗi là?", o:["Bình tĩnh tìm và sửa","Sợ hãi bỏ chạy","Che giấu","Trách người khác"], a:0}
  ],

  "1.6.7": [
    {q:"AI có thể giúp gì với flowchart của em?", o:["Góp ý chỗ thiếu","Làm hộ hết để chép","Xoá flowchart","Không giúp được"], a:0},
    {q:"Với góp ý của AI, em nên?", o:["Tự đánh giá đúng/sai","Nghe theo hết","Bỏ qua hoàn toàn","Sợ hãi"], a:0},
    {q:"AI đôi khi góp ý?", o:["Sai, cần em kiểm lại","Luôn đúng tuyệt đối","Không bao giờ sai","Không liên quan"], a:0},
    {q:"Người quyết định cuối là?", o:["Em","AI","Máy in","Con chuột"], a:0},
    {q:"AI đóng vai trò gì?", o:["Trợ lý","Ông chủ","Người thay em nghĩ","Không gì"], a:0},
    {q:"Cải thiện flowchart sau khi lọc góp ý AI nghĩa là?", o:["Giữ điều hợp lý, bỏ điều sai","Làm theo hết","Bỏ hết","Không sửa"], a:0},
    {q:"Nên dùng hiểu biết của mình để?", o:["Đánh giá góp ý của AI","Bỏ qua flowchart","Tắt máy","Chép mạng"], a:0},
    {q:"Nếu AI gợi ý một bước vô lý, em?", o:["Không dùng bước đó","Dùng luôn","Xoá cả bài","Tin ngay"], a:0},
    {q:"Kết hợp AI và tư duy của em giúp?", o:["Flowchart tốt hơn","Flowchart tệ đi","Mất flowchart","Không đổi"], a:0},
    {q:"Bài học chính khi dùng AI góp ý?", o:["AI hỗ trợ, em quyết định","AI thay em hoàn toàn","Không cần suy nghĩ","Tin AI 100%"], a:0}
  ],

  "1.6.8": [
    {q:"Quy trình giải bài toán gồm?", o:["Đề bài → phân rã → flowchart → dry run","Chỉ đoán đáp án","Bỏ qua các bước","Hỏi bạn chép"], a:0},
    {q:"Bước đầu tiên là?", o:["Hiểu đề bài","Vẽ flowchart ngay","Chạy tay ngay","Nộp bài"], a:0},
    {q:"Sau khi phân rã, ta?", o:["Vẽ flowchart","Bỏ cuộc","Ngủ","Xoá hết"], a:0},
    {q:"Dry run nằm ở bước nào?", o:["Cuối, để kiểm tra","Đầu tiên","Không có","Thay cho đề bài"], a:0},
    {q:"Quy trình này áp dụng cho?", o:["Mọi bài toán về sau","Chỉ một bài","Chỉ môn Vẽ","Không bài nào"], a:0},
    {q:"Phân rã nghĩa là?", o:["Chia đề bài thành phần nhỏ","Xoá đề bài","Đoán đáp án","Vẽ tranh"], a:0},
    {q:"Vì sao ôn tập quy trình?", o:["Để dùng thành thạo cho bài mới","Cho tốn thời gian","Không lý do","Để quên"], a:0},
    {q:"Bộ 3 flowchart hoàn chỉnh là?", o:["Kết quả áp dụng quy trình cho 3 bài","Ba bức tranh","Ba bài hát","Ba con số"], a:0},
    {q:"Flowchart giúp gì trong quy trình?", o:["Thấy rõ các bước giải","Nghe nhạc","Tính giờ","Trang trí"], a:0},
    {q:"Mục tiêu của ôn tập thuật toán?", o:["Thành thạo từ đề bài đến kiểm tra","Học vẹt","Chơi game","Vẽ đẹp"], a:0}
  ],

  "1.7.1": [
    {q:"Scratch lập trình bằng cách?", o:["Kéo thả các khối lệnh","Gõ code phức tạp","Vẽ tay","Hát"], a:0},
    {q:"Trong Scratch, 'sân khấu' là?", o:["Nơi nhân vật hoạt động","Bàn phím","Con chuột","Cái loa"], a:0},
    {q:"Khối lệnh dùng để?", o:["Ra lệnh cho nhân vật","Tắt máy","Đổi màu tường","Nghe nhạc"], a:0},
    {q:"Scratch có cần gõ code không?", o:["Không, chỉ kéo thả","Có, rất nhiều","Phải viết tiếng Anh","Phải biết Toán cao"], a:0},
    {q:"Lệnh đầu tiên nên thử?", o:["Di chuyển và xoay","Xoá dự án","Tắt máy","Đổi mật khẩu"], a:0},
    {q:"Cho mèo đi hình vuông cần?", o:["Lặp: đi tới rồi quay","Một lệnh duy nhất","Không lệnh nào","Tắt Scratch"], a:0},
    {q:"Khối lệnh Scratch có đặc điểm?", o:["Nhiều màu, ghép được với nhau","Chỉ chữ đen trắng","Không ghép được","Là hình ảnh tĩnh"], a:0},
    {q:"Scratch phù hợp cho?", o:["Người mới học lập trình","Chỉ chuyên gia","Chỉ người lớn","Không ai"], a:0},
    {q:"Nhân vật mặc định của Scratch thường là?", o:["Chú mèo","Con chó","Con cá","Cái xe"], a:0},
    {q:"Học Scratch giúp em?", o:["Làm quen tư duy lập trình","Quên hết bài","Mỏi tay","Không gì"], a:0}
  ],

  "1.7.2": [
    {q:"Khối 'Nếu... thì...' (if) giúp?", o:["Nhân vật phản ứng khác nhau theo tình huống","Tắt máy","Đổi màu nền","Xoá nhân vật"], a:0},
    {q:"'Nếu bấm mũi tên phải thì đi sang phải' là?", o:["Một điều kiện (rẽ nhánh)","Một vòng lặp","Một biến","Một âm thanh"], a:0},
    {q:"Điều kiện đúng thì?", o:["Làm một việc; sai thì làm việc khác","Luôn làm cùng một việc","Không làm gì","Tắt máy"], a:0},
    {q:"if/else giống hình nào trong flowchart?", o:["Hình thoi (câu hỏi)","Hình oval","Mũi tên","Hình tròn"], a:0},
    {q:"Điều kiện là gì?", o:["Câu hỏi Đúng/Sai","Một con số","Một màu","Một bài hát"], a:0},
    {q:"'else' nghĩa là?", o:["Ngược lại (nếu không)","Bắt đầu","Kết thúc","Lặp lại"], a:0},
    {q:"Rẽ nhánh giúp trò chơi?", o:["Phản ứng theo hành động người chơi","Đứng im","Tự tắt","Không đổi"], a:0},
    {q:"Nếu điều kiện sai, nhánh nào chạy?", o:["Nhánh else","Nhánh if","Cả hai","Không nhánh nào"], a:0},
    {q:"Ví dụ dùng if trong game?", o:["Nếu chạm quái thì mất mạng","Nhân vật đứng yên mãi","Không có gì xảy ra","Tắt game"], a:0},
    {q:"if/else giúp chương trình?", o:["Thông minh, biết chọn lựa","Đơn điệu hơn","Chậm hơn","Hỏng"], a:0}
  ],

  "1.7.3": [
    {q:"Máy tính so sánh bằng?", o:["Lớn hơn / nhỏ hơn / bằng","Đẹp hơn / xấu hơn","Vui hơn / buồn hơn","Không so sánh được"], a:0},
    {q:"'VÀ' đúng khi?", o:["Cả hai điều kiện đều đúng","Chỉ một điều kiện đúng","Cả hai đều sai","Ngẫu nhiên"], a:0},
    {q:"'HOẶC' đúng khi?", o:["Ít nhất một điều kiện đúng","Cả hai phải đúng","Cả hai phải sai","Không bao giờ"], a:0},
    {q:"Trò 'đoán số bí mật' dùng?", o:["So sánh cao/thấp","Vẽ tranh","Nghe nhạc","Đổi màu"], a:0},
    {q:"5 > 3 đúng hay sai?", o:["Đúng","Sai","Không biết","Tuỳ hôm"], a:0},
    {q:"'A VÀ B' với A đúng, B sai thì?", o:["Sai","Đúng","Không xác định","Cả hai"], a:0},
    {q:"'A HOẶC B' với A đúng, B sai thì?", o:["Đúng","Sai","Không xác định","Lỗi"], a:0},
    {q:"So sánh và logic dùng để?", o:["Máy đưa ra quyết định","Vẽ hình","Nghe nhạc","Tắt máy"], a:0},
    {q:"Gợi ý 'cao hơn/thấp hơn' dựa trên?", o:["So sánh số đoán với số bí mật","Màu sắc","Âm thanh","May mắn"], a:0},
    {q:"Logic VÀ/HOẶC giúp?", o:["Kết hợp nhiều điều kiện","Xoá điều kiện","Làm chậm máy","Không tác dụng"], a:0}
  ],

  "1.7.4": [
    {q:"Vòng lặp giúp?", o:["Lặp lại việc mà không chép nhiều lệnh","Tắt máy","Xoá nhân vật","Đổi màu"], a:0},
    {q:"'Lặp lại 10 lần' nghĩa là?", o:["Làm đúng 10 lần rồi dừng","Làm mãi mãi","Làm 1 lần","Không làm"], a:0},
    {q:"'Lặp mãi mãi' nghĩa là?", o:["Làm liên tục tới khi dừng chương trình","Làm 1 lần","Làm 10 lần","Không làm gì"], a:0},
    {q:"Vẽ hình vuông bằng vòng lặp lặp mấy lần?", o:["4 lần (đi tới + quay 90°)","1 lần","10 lần","100 lần"], a:0},
    {q:"Vòng lặp giúp code?", o:["Gọn hơn nhiều","Dài hơn","Rối hơn","Hỏng"], a:0},
    {q:"Nếu muốn vẽ bông hoa nhiều cánh giống nhau?", o:["Dùng vòng lặp","Vẽ từng cánh riêng thủ công","Không vẽ được","Đổi màu"], a:0},
    {q:"Vòng lặp phù hợp cho việc?", o:["Lặp đi lặp lại","Chỉ làm một lần","Không bao giờ lặp","Tắt máy"], a:0},
    {q:"'Lặp lại 3 lần: nhảy' sẽ?", o:["Nhảy 3 lần","Nhảy 1 lần","Nhảy mãi","Đứng im"], a:0},
    {q:"Không dùng vòng lặp mà lặp 10 lần thì?", o:["Phải chép 10 lệnh giống nhau","Vẫn gọn","Không lặp được","Máy tự làm"], a:0},
    {q:"Vòng lặp là kiến thức?", o:["Nền tảng của nhiều chương trình","Ít khi dùng","Vô dụng","Chỉ để trang trí"], a:0}
  ],

  "1.7.5": [
    {q:"Biến số là?", o:["'Chiếc hộp' lưu giá trị thay đổi được","Một hình vẽ cố định","Một bài hát","Một con chuột"], a:0},
    {q:"Trong game, biến 'điểm' thường bắt đầu bằng?", o:["0","100","Một chữ","Âm thanh"], a:0},
    {q:"Khi bắt được táo, biến điểm?", o:["Cộng thêm 1","Giảm đi","Không đổi","Biến mất"], a:0},
    {q:"Biến giúp trò chơi?", o:["'Nhớ' trạng thái hiện tại","Đứng im","Tự tắt","Đổi màu"], a:0},
    {q:"Nên đặt tên biến thế nào?", o:["Dễ hiểu, ví dụ 'diem', 'mang'","Ngẫu nhiên khó nhớ","Toàn số","Bỏ trống"], a:0},
    {q:"Biến 'mang' (số mạng) dùng để?", o:["Theo dõi còn mấy mạng","Đổi màu nền","Phát nhạc","Vẽ hình"], a:0},
    {q:"Giá trị của biến có thể?", o:["Thay đổi khi chơi","Cố định mãi","Không tồn tại","Chỉ là hình"], a:0},
    {q:"Ví dụ về biến trong game?", o:["Điểm số, số mạng","Màu bầu trời cố định","Tên trò chơi","Nút Start"], a:0},
    {q:"Vì sao đặt tên biến rõ ràng?", o:["Nhìn là biết nó chứa gì","Cho đẹp","Cho dài","Không lý do"], a:0},
    {q:"Nếu không có biến điểm, game khó làm gì?", o:["Tính và hiển thị điểm","Chạy được","Có nhân vật","Có màu"], a:0}
  ],

  "1.7.6": [
    {q:"Ghép game hoàn chỉnh dùng?", o:["if/else + vòng lặp + biến","Chỉ một khối lệnh","Không khối nào","Chỉ âm thanh"], a:0},
    {q:"Trong game bắt táo, vòng lặp để?", o:["Cho táo rơi liên tục","Tắt game","Đổi tên","Xoá điểm"], a:0},
    {q:"if trong game bắt táo kiểm tra?", o:["Có bắt trúng táo không","Màu bầu trời","Giờ hiện tại","Tên người chơi"], a:0},
    {q:"Biến điểm dùng để?", o:["Cộng điểm khi bắt trúng","Đổi màu","Phát nhạc","Tắt máy"], a:0},
    {q:"Ba khối kiến thức này là?", o:["Nền tảng của hầu hết chương trình","Ít khi dùng","Chỉ để trang trí","Vô dụng"], a:0},
    {q:"Khi hết mạng, game nên?", o:["Kết thúc","Chạy mãi","Cộng điểm","Không đổi"], a:0},
    {q:"Nâng cấp game bằng cách?", o:["Thêm mạng, thêm màn chơi","Xoá hết","Tắt máy","Không làm gì"], a:0},
    {q:"Ghép các khối lệnh giúp?", o:["Tạo trò chơi thú vị","Làm hỏng máy","Mất dữ liệu","Không tác dụng"], a:0},
    {q:"Vòng lặp + biến + if kết hợp tạo ra?", o:["Logic của trò chơi","Một bức tranh","Một bài hát","Một con số"], a:0},
    {q:"Hoàn thành game nhỏ giúp em?", o:["Tự tin với lập trình","Sợ máy tính","Quên hết","Không gì"], a:0}
  ],

  "1.8.1": [
    {q:"Bước đầu của dự án là?", o:["Chọn vấn đề và lập kế hoạch","Nộp bài ngay","Bỏ cuộc","Chờ may mắn"], a:0},
    {q:"Nên chọn vấn đề?", o:["Gần gũi, em quan tâm","Càng khó vô lý càng tốt","Không liên quan mình","Không thể giải"], a:0},
    {q:"Sau khi chọn vấn đề, ta?", o:["Phân rã và vẽ flowchart giải pháp","Nộp luôn","Quên đi","Xoá hết"], a:0},
    {q:"Kế hoạch dự án nên?", o:["Rõ ràng, có các bước","Mơ hồ","Không có gì","Chép của bạn"], a:0},
    {q:"Chọn vấn đề vừa sức giúp?", o:["Dễ thành công và hào hứng hơn","Chắc chắn thất bại","Nhàm chán","Không đổi"], a:0},
    {q:"'Nộp kế hoạch 1 trang' nghĩa là?", o:["Trình bày kế hoạch ngắn gọn","Viết 100 trang","Không viết gì","Vẽ tranh"], a:0},
    {q:"Vẽ flowchart cho giải pháp giúp?", o:["Thấy rõ các bước sẽ làm","Làm rối","Tốn giấy vô ích","Không giúp"], a:0},
    {q:"Vấn đề tốt cho dự án là?", o:["Có thật và em muốn giải","Tưởng tượng vô lý","Của người khác","Không tồn tại"], a:0},
    {q:"Lập kế hoạch trước khi làm giúp?", o:["Biết cần làm gì, theo thứ tự nào","Rối hơn","Chậm hơn","Không lợi ích"], a:0},
    {q:"Dự án cuối Level 1 nhằm?", o:["Áp dụng mọi điều đã học","Học lại từ đầu","Chơi game","Nghỉ ngơi"], a:0}
  ],

  "1.8.2": [
    {q:"Xây sản phẩm nghĩa là?", o:["Làm ra game/quy trình theo kế hoạch","Chỉ vẽ trên giấy","Bỏ kế hoạch","Ngồi chờ"], a:0},
    {q:"Nên làm phần nào trước?", o:["Phần cốt lõi chạy được","Phần trang trí đẹp","Phần khó nhất vô ích","Không phần nào"], a:0},
    {q:"Cách làm giúp dễ tìm lỗi?", o:["Làm từng phần nhỏ và thử ngay","Làm hết rồi mới chạy","Không thử","Chép của bạn"], a:0},
    {q:"Làm theo cái gì đã chuẩn bị?", o:["Flowchart đã vẽ","Đoán bừa","Cảm hứng nhất thời","Không theo gì"], a:0},
    {q:"'Chi tiết đẹp' nên làm khi nào?", o:["Sau khi phần cốt lõi chạy","Trước tiên","Không bao giờ","Thay cho cốt lõi"], a:0},
    {q:"Thử từng phần nhỏ giúp?", o:["Phát hiện lỗi sớm","Che giấu lỗi","Làm chậm","Không tác dụng"], a:0},
    {q:"Bản nháp sản phẩm nên?", o:["Chạy được (dù chưa hoàn hảo)","Hoàn hảo ngay","Không chạy","Chỉ trên giấy"], a:0},
    {q:"Nếu làm hết rồi mới chạy, khi lỗi sẽ?", o:["Khó tìm ra chỗ sai","Dễ tìm hơn","Không có lỗi","Máy tự sửa"], a:0},
    {q:"Xây sản phẩm dựa trên?", o:["Kế hoạch và flowchart","Không có gì","Ý bất chợt","Của người khác"], a:0},
    {q:"Mục tiêu bài này?", o:["Có bản nháp sản phẩm chạy được","Vẽ tranh","Nghe nhạc","Nghỉ"], a:0}
  ],

  "1.8.3": [
    {q:"Kiểm thử là?", o:["Nhờ người khác dùng thử để tìm lỗi","Tự khen sản phẩm","Giấu sản phẩm","Xoá sản phẩm"], a:0},
    {q:"Khi bạn dùng thử, em nên?", o:["Ghi lại chỗ bạn gặp khó","Cãi lại bạn","Bỏ qua góp ý","Tự ái"], a:0},
    {q:"Nên sửa lỗi nào trước?", o:["Lỗi quan trọng nhất","Lỗi nhỏ nhặt","Không sửa gì","Lỗi màu sắc"], a:0},
    {q:"Bị góp ý nghĩa là?", o:["Cơ hội để sản phẩm tốt lên","Thất bại","Bị chê bai","Nên bỏ cuộc"], a:0},
    {q:"Vì sao nhờ người khác thử?", o:["Họ thấy lỗi mình không thấy","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Chỗ bạn gặp khó cho biết?", o:["Sản phẩm cần cải thiện ở đó","Bạn dốt","Không có gì","Sản phẩm hoàn hảo"], a:0},
    {q:"Sau kiểm thử, em có?", o:["Danh sách lỗi đã sửa + bản hoàn chỉnh","Không gì","Bản cũ y nguyên","Sản phẩm mất"], a:0},
    {q:"Nên cho mấy người thử?", o:["Vài người (ví dụ 2 bạn)","Không ai","Chỉ chính mình","Cả trường cùng lúc"], a:0},
    {q:"Thái độ đúng khi nhận góp ý?", o:["Lắng nghe và cải thiện","Giận dỗi","Phớt lờ","Bỏ dự án"], a:0},
    {q:"Kiểm thử giúp sản phẩm?", o:["Tốt lên qua nhiều vòng","Tệ đi","Không đổi","Biến mất"], a:0}
  ],

  "1.8.4": [
    {q:"Demo Day là dịp để?", o:["Trình bày sản phẩm của mình","Nghỉ học","Chơi game","Ngủ"], a:0},
    {q:"Bài trình bày nên theo mạch?", o:["Vấn đề → Cách giải → Demo","Demo → Vấn đề → Bỏ","Không có mạch","Ngẫu nhiên"], a:0},
    {q:"Khi trình bày, nên?", o:["Nói ngắn gọn, tự tin","Nói lan man","Đọc nguyên trang giấy","Im lặng"], a:0},
    {q:"Nên làm gì để đỡ hồi hộp?", o:["Luyện nói trước vài lần","Không chuẩn bị","Học thuộc từng chữ","Bỏ chạy"], a:0},
    {q:"Demo nghĩa là?", o:["Cho mọi người xem sản phẩm chạy thật","Chỉ nói lý thuyết","Giấu sản phẩm","Vẽ tranh"], a:0},
    {q:"Bài trình bày dài khoảng?", o:["3 phút","3 giờ","Cả ngày","10 giây"], a:0},
    {q:"Trình bày tốt cần?", o:["Rõ ràng, đúng trọng tâm","Nói thật nhiều","Dùng từ khó","Không nhìn ai"], a:0},
    {q:"Luyện trước gương/với bạn giúp?", o:["Trôi chảy và tự tin hơn","Quên bài","Run hơn","Không tác dụng"], a:0},
    {q:"Phần Demo cho thấy?", o:["Sản phẩm hoạt động thật","Chỉ ý tưởng suông","Không có gì","Một bức ảnh"], a:0},
    {q:"Hoàn thành Demo Day giúp em?", o:["Tự hào và tự tin hơn","Xấu hổ","Sợ hãi","Không cảm giác gì"], a:0}
  ]

});

/* ===== QUIZ — MODULE 2.1 – 2.4 ===== */
Object.assign(window.LESSON_QUIZ, {

  "2.1.1": [
    {q:"AI ngày nay thay đổi như thế nào?", o:["Rất nhanh","Không thay đổi","Chậm dần","Đứng yên"], a:0},
    {q:"AI hiện nay có thể làm gì?", o:["Viết, vẽ, trò chuyện, lập trình phụ","Chỉ tính cộng","Không làm gì","Chỉ bật đèn"], a:0},
    {q:"Dù giỏi, AI vẫn?", o:["Có thể sai","Luôn đúng","Hoàn hảo","Biết mọi thứ"], a:0},
    {q:"Khi thử công cụ AI mới, nên để ý?", o:["Nó giỏi gì, còn hạn chế gì","Chỉ điểm mạnh","Chỉ điểm yếu","Không để ý gì"], a:0},
    {q:"AI hiện vẫn?", o:["Giỏi từng việc cụ thể","'Biết tuốt' mọi việc","Có cảm xúc thật","Thay thế con người hoàn toàn"], a:0},
    {q:"Đầu Level 2 ta cùng làm gì?", o:["Nhìn AI tiến xa đến đâu và ôn Level 1","Bỏ hết kiến thức cũ","Chơi game","Nghỉ ngơi"], a:0},
    {q:"Thử một công cụ AI chưa từng dùng giúp?", o:["Mở rộng hiểu biết","Làm hỏng máy","Quên bài","Không lợi ích"], a:0},
    {q:"Kiến thức Level 1 nên?", o:["Được ôn lại","Bỏ quên","Xoá đi","Không cần"], a:0},
    {q:"AI phát triển nhanh nên em cần?", o:["Cập nhật và học liên tục","Ngừng học","Sợ hãi","Mặc kệ"], a:0},
    {q:"Câu nào đúng về AI hôm nay?", o:["Mạnh hơn xưa nhưng vẫn có giới hạn","Hoàn hảo tuyệt đối","Không làm được gì","Có cảm xúc như người"], a:0}
  ],

  "2.1.2": [
    {q:"Bài kiểm tra đầu vào giúp em?", o:["Biết mình đang ở đâu về hiểu biết AI","So hơn thua với bạn","Được thưởng tiền","Nghỉ học"], a:0},
    {q:"Kết quả test dùng để?", o:["Biết điểm mạnh, điểm cần cải thiện","Chê bai bản thân","Khoe khoang","Bỏ đi"], a:0},
    {q:"Nên làm bài test thế nào?", o:["Thật lòng","Chép của bạn","Đoán bừa hết","Bỏ trống"], a:0},
    {q:"Làm bài thật lòng giúp?", o:["Kết quả phản ánh đúng để đặt mục tiêu","Điểm cao giả tạo","Không có ý nghĩa","Máy vui"], a:0},
    {q:"Điểm test thấp nghĩa là?", o:["Có chỗ cần học thêm, không sao cả","Em kém cỏi mãi mãi","Nên bỏ học","Vô vọng"], a:0},
    {q:"'AI literacy' nghĩa là?", o:["Năng lực hiểu và dùng AI","Biết vẽ AI","Sợ AI","Ghét AI"], a:0},
    {q:"Test đầu vào giống như?", o:["Đo hiện trạng trước khi bắt đầu","Cuộc thi giành giải","Trò chơi may rủi","Bài kiểm tra thể lực"], a:0},
    {q:"Sau khi biết kết quả, bước tiếp là?", o:["Đặt mục tiêu học tập","Quên đi","Buồn bã","Nghỉ luôn"], a:0},
    {q:"Bài test giúp coach?", o:["Hỗ trợ em đúng chỗ cần","Chấm điểm để phạt","So sánh để chê","Không để làm gì"], a:0},
    {q:"Thái độ đúng với bài test đầu vào?", o:["Bình tĩnh, trung thực","Lo lắng quá mức","Gian lận","Bỏ cuộc"], a:0}
  ],

  "2.1.3": [
    {q:"Mục tiêu cá nhân nên?", o:["Cụ thể và đo được","Mơ hồ","Không thể đạt","Của người khác"], a:0},
    {q:"Ví dụ mục tiêu tốt?", o:["Tự kiểm chứng thông tin trước khi tin","Giỏi mọi thứ ngay","Không sai bao giờ","Học hết Internet"], a:0},
    {q:"Nên đặt bao nhiêu mục tiêu?", o:["Khoảng 3, theo đuổi đến cùng","Càng nhiều càng tốt","Không mục tiêu nào","100 mục tiêu"], a:0},
    {q:"Mục tiêu dựa trên?", o:["Kết quả bài kiểm tra","May mắn","Bạn bảo","Ngẫu nhiên"], a:0},
    {q:"'Hợp đồng mục tiêu' là?", o:["Cam kết cá nhân về điều sẽ đạt","Một trò chơi","Một mật khẩu","Một bức tranh"], a:0},
    {q:"Mục tiêu 'đo được' nghĩa là?", o:["Biết khi nào đã đạt","Không biết bao giờ xong","Không rõ ràng","Không quan trọng"], a:0},
    {q:"Vì sao nên ít mục tiêu?", o:["Để tập trung theo đuổi","Cho dễ quên","Cho có lệ","Không lý do"], a:0},
    {q:"Mục tiêu tốt giúp em?", o:["Có hướng đi rõ ràng","Rối hơn","Mất động lực","Không đổi"], a:0},
    {q:"Sau khi đặt mục tiêu, cần?", o:["Kiên trì theo đuổi","Quên ngay","Đổi liên tục","Bỏ qua"], a:0},
    {q:"Mục tiêu mơ hồ như 'giỏi AI' thì?", o:["Khó biết khi nào đạt","Rất tốt","Dễ đo","Hoàn hảo"], a:0}
  ],

  "2.1.4": [
    {q:"Teachable Machine giúp em?", o:["Tự dạy máy phân biệt vật bằng ảnh","Nấu ăn","Vẽ tranh tay","Chơi cờ"], a:0},
    {q:"Để dùng Teachable Machine có cần biết lập trình không?", o:["Không cần","Có, rất nhiều","Phải giỏi Toán","Phải biết tiếng Anh giỏi"], a:0},
    {q:"Máy 'học' bằng cách?", o:["Xem nhiều ảnh của mỗi loại","Đọc suy nghĩ","Tự bịa","Hỏi ông Bụt"], a:0},
    {q:"Sau khi học, máy có thể?", o:["Tự đoán vật mới","Nấu cơm","Quét nhà","Ngủ"], a:0},
    {q:"Bộ công cụ Level 2 gồm?", o:["Teachable Machine và các công cụ AI","Chỉ bút chì","Chỉ giấy","Không có gì"], a:0},
    {q:"Dạy máy phân biệt 2 vật cần?", o:["Cho máy xem ảnh của cả 2 vật","Chỉ 1 ảnh","Không ảnh nào","Một bài hát"], a:0},
    {q:"Thử dạy máy giúp em?", o:["Cảm nhận 'máy học' là thế nào","Làm hỏng máy","Quên bài","Không gì"], a:0},
    {q:"Nên chụp ảnh cho máy học?", o:["Nhiều góc, đủ sáng","Chỉ 1 góc mờ","Trong bóng tối","Không chụp"], a:0},
    {q:"Teachable Machine phù hợp cho?", o:["Người mới bắt đầu học AI","Chỉ chuyên gia","Chỉ người lớn","Không ai"], a:0},
    {q:"Mô hình là gì?", o:["Cái máy đã học được cách nhận biết","Một bức tượng","Một trò chơi","Một con chuột"], a:0}
  ],

  "2.2.1": [
    {q:"'Dữ liệu là thức ăn của AI' nghĩa là?", o:["AI học từ ví dụ (dữ liệu)","AI ăn cơm","AI cần điện thôi","AI không cần gì"], a:0},
    {q:"AI có được lập trình sẵn từng câu trả lời không?", o:["Không, nó học từ ví dụ","Có, tất cả","Có, một nửa","Không cần dữ liệu"], a:0},
    {q:"Muốn AI nhận ra mèo, cho nó xem?", o:["Nhiều ảnh mèo có gán nhãn","Một bài thơ","Một bản nhạc","Một hộp bút"], a:0},
    {q:"Xem đủ nhiều ví dụ, AI sẽ?", o:["Tự rút ra đặc điểm","Quên hết","Hỏng","Không làm gì"], a:0},
    {q:"'Rác vào thì rác ra' nghĩa là?", o:["Dữ liệu xấu thì AI kém","Dữ liệu nào cũng tốt","AI luôn giỏi","Không liên quan"], a:0},
    {q:"Dữ liệu càng tốt và đa dạng thì?", o:["AI càng giỏi","AI càng dở","Không đổi","AI tắt"], a:0},
    {q:"Gán nhãn 'mèo' cho ảnh nghĩa là?", o:["Cho AI biết ảnh đó là mèo","Đặt tên cho mèo","Vẽ thêm mèo","Xoá ảnh"], a:0},
    {q:"AI học chủ yếu từ đâu?", o:["Dữ liệu (ví dụ)","Ánh trăng","Nước mưa","May mắn"], a:0},
    {q:"Nếu dữ liệu ít và kém, AI sẽ?", o:["Học kém, hay sai","Vẫn hoàn hảo","Không cần học","Tự giỏi"], a:0},
    {q:"Vì sao dữ liệu quan trọng?", o:["Nó quyết định AI giỏi hay dở","Không quan trọng","Chỉ để trang trí","Làm máy nặng"], a:0}
  ],

  "2.2.2": [
    {q:"Huấn luyện mô hình là?", o:["Dạy máy học từ dữ liệu","Tô màu cho máy","Tắt máy","Vẽ mô hình"], a:0},
    {q:"Ba bước huấn luyện gồm?", o:["Thu ảnh → huấn luyện → thử","Ăn → ngủ → chơi","Vẽ → xoá → in","Không bước nào"], a:0},
    {q:"Khi thu ảnh, nên?", o:["Nhiều góc, đủ sáng","Chỉ một góc mờ","Trong tối","Không chụp"], a:0},
    {q:"Sau huấn luyện, ta?", o:["Thử với vật mới","Tắt máy ngay","Xoá dữ liệu","Không làm gì"], a:0},
    {q:"Độ chính xác đo?", o:["Máy đoán đúng bao nhiêu","Máy nặng bao nhiêu","Giờ hiện tại","Nhiệt độ"], a:0},
    {q:"Chụp nhiều góc giúp?", o:["Mô hình thấy vật đa dạng hơn","Mô hình rối","Máy hỏng","Không tác dụng"], a:0},
    {q:"Thử với vật 'mới' nghĩa là?", o:["Vật chưa dùng để học","Vật đã học rồi","Không có vật","Một bài hát"], a:0},
    {q:"Mô hình đầu tiên nên?", o:["Đơn giản, phân biệt 2 vật","Cực kỳ phức tạp","Không làm được","Vô nghĩa"], a:0},
    {q:"Nếu mô hình đoán sai nhiều, có thể do?", o:["Dữ liệu chưa tốt/đủ","Máy buồn","Trời mưa","Không lý do"], a:0},
    {q:"Huấn luyện xong, mô hình có thể?", o:["Tự phân loại vật","Nấu ăn","Hát","Quét nhà"], a:0}
  ],

  "2.2.3": [
    {q:"Chất lượng mô hình phụ thuộc vào?", o:["Chất lượng dữ liệu","Màu bàn phím","Kích thước màn hình","Thời tiết"], a:0},
    {q:"Ảnh như thế nào làm máy đoán sai?", o:["Mờ, thiếu sáng, ít đa dạng","Rõ nét, đủ sáng","Nhiều góc","Chất lượng cao"], a:0},
    {q:"Dữ liệu tốt là?", o:["Rõ, nhiều góc, đủ trường hợp","Mờ và ít","Chỉ một tấm","Không có"], a:0},
    {q:"Thí nghiệm 'dạy xấu vs tốt' để?", o:["Thấy khác biệt về độ chính xác","Làm hỏng máy","Cho vui","Tốn thời gian"], a:0},
    {q:"Ảnh mờ ảnh hưởng thế nào?", o:["Làm mô hình khó nhận đúng","Giúp mô hình giỏi hơn","Không ảnh hưởng","Làm máy nhanh"], a:0},
    {q:"Muốn mô hình tốt, dữ liệu nên?", o:["Rõ và đa dạng","Mờ và ít","Toàn ảnh giống hệt","Không cần"], a:0},
    {q:"'Đa dạng' trong dữ liệu nghĩa là?", o:["Nhiều trường hợp khác nhau","Chỉ một kiểu","Toàn màu đỏ","Chỉ một góc"], a:0},
    {q:"Dữ liệu xấu dẫn đến?", o:["Mô hình đoán sai nhiều","Mô hình hoàn hảo","Không đổi","Máy nhanh hơn"], a:0},
    {q:"Để cải thiện mô hình đoán sai, nên?", o:["Bổ sung dữ liệu tốt hơn","Xoá hết dữ liệu","Đổi màn hình","Tắt máy"], a:0},
    {q:"Bài học chính là?", o:["Dữ liệu tốt → mô hình tốt","Dữ liệu không quan trọng","Máy tự giỏi","Càng ít càng tốt"], a:0}
  ],

  "2.2.4": [
    {q:"Thiên vị (bias) xảy ra khi?", o:["Dữ liệu học bị lệch","Máy quá thông minh","Dữ liệu quá đa dạng","Không bao giờ"], a:0},
    {q:"Chỉ dạy táo đỏ thì AI có thể?", o:["Không nhận ra táo xanh","Nhận mọi loại táo","Nhận ra cả cam","Giỏi hơn"], a:0},
    {q:"'Điểm mù' của AI là?", o:["Trường hợp nó không nhận ra do thiếu dữ liệu","Điểm mạnh nhất","Màu sắc","Một con số"], a:0},
    {q:"Muốn công bằng, dữ liệu phải?", o:["Đa dạng, đủ mọi trường hợp","Chỉ một loại","Càng ít càng tốt","Toàn giống nhau"], a:0},
    {q:"Thiên vị làm câu trả lời?", o:["Lệch theo dữ liệu","Luôn đúng","Đa dạng hơn","Chính xác hơn"], a:0},
    {q:"Tìm 'điểm mù' của mô hình để?", o:["Biết chỗ nó hay sai mà bổ sung","Khen mô hình","Bỏ mô hình","Không vì gì"], a:0},
    {q:"Nếu chỉ dạy giọng người lớn, AI có thể?", o:["Khó nhận giọng trẻ em","Nhận mọi giọng","Giỏi hơn","Không sao"], a:0},
    {q:"Nguyên nhân thiên vị thường là?", o:["Dữ liệu thiếu một số trường hợp","Máy cố tình","Do người dùng","Do thời tiết"], a:0},
    {q:"Để giảm thiên vị, ta?", o:["Thu thêm dữ liệu đa dạng","Xoá bớt dữ liệu","Dùng ít loại hơn","Không làm gì"], a:0},
    {q:"Thiên vị trong AI là vấn đề?", o:["Cần chú ý để dùng công bằng","Không đáng lo","Luôn tốt","Không tồn tại"], a:0}
  ],

  "2.2.5": [
    {q:"Máy có thể học loại dữ liệu nào ngoài ảnh?", o:["Âm thanh","Chỉ ảnh","Không loại nào","Chỉ số"], a:0},
    {q:"Mô hình âm thanh phân biệt?", o:["Ví dụ tiếng vỗ tay và búng tay","Màu sắc","Hình dạng","Mùi hương"], a:0},
    {q:"Để dạy mô hình âm thanh, cần?", o:["Thu nhiều mẫu mỗi âm","Một mẫu duy nhất","Không mẫu nào","Một bức ảnh"], a:0},
    {q:"Nên thu âm ở đâu?", o:["Nơi yên tĩnh, thu nhiều lần","Nơi ồn ào","Không thu","Ngoài đường"], a:0},
    {q:"Mô hình âm thanh có thể dùng để?", o:["Điều khiển bằng âm thanh","Vẽ tranh","Nấu ăn","Quét nhà"], a:0},
    {q:"Máy phân biệt âm bằng cách?", o:["Học đặc trưng từng âm","Đoán bừa","Hỏi người","Xem ảnh"], a:0},
    {q:"Thu mẫu nhiều lần giúp?", o:["Máy nghe rõ đặc trưng","Máy rối","Máy hỏng","Không tác dụng"], a:0},
    {q:"Công tắc điều khiển bằng âm thanh là?", o:["Ứng dụng của mô hình âm thanh","Một trò đùa","Không làm được","Một loại loa"], a:0},
    {q:"Nếu thu âm nơi ồn, mô hình sẽ?", o:["Khó phân biệt chính xác","Giỏi hơn","Không sao","Nhanh hơn"], a:0},
    {q:"Mô hình âm thanh cho thấy AI?", o:["Học được nhiều loại dữ liệu","Chỉ học ảnh","Không học được","Chỉ đoán"], a:0}
  ],

  "2.2.6": [
    {q:"Mô hình tư thế nhận biết?", o:["Động tác cơ thể","Màu áo","Mùi hương","Âm nhạc"], a:0},
    {q:"Để dạy mô hình tư thế, cần?", o:["Cho máy xem nhiều lần các động tác","Một lần duy nhất","Không cần gì","Một bức ảnh tĩnh"], a:0},
    {q:"Mô hình tư thế dùng thiết bị nào?", o:["Camera","Loa","Bàn phím","Chuột"], a:0},
    {q:"Mô hình tư thế có thể?", o:["Điều khiển trò chơi bằng cử động","Nấu ăn","Vẽ tranh","Hát"], a:0},
    {q:"Nên đứng thế nào khi dạy?", o:["Khoảng cách và ánh sáng ổn định","Trong bóng tối","Quá xa camera","Che mặt"], a:0},
    {q:"Máy nhận động tác bằng cách?", o:["Học từ nhiều ví dụ động tác","Đoán bừa","Đọc suy nghĩ","Nghe nhạc"], a:0},
    {q:"Ví dụ động tác để dạy?", o:["Giơ tay trái, giơ tay phải","Ngồi im nghĩ","Nhắm mắt","Không làm gì"], a:0},
    {q:"Ánh sáng tốt giúp?", o:["Máy 'thấy' rõ động tác","Máy mù","Không tác dụng","Máy hỏng"], a:0},
    {q:"Mô hình tư thế là loại AI?", o:["Thị giác (nhìn qua camera)","Âm thanh","Ngôn ngữ","Không phải AI"], a:0},
    {q:"Điều khiển game bằng cử động cần?", o:["Mô hình tư thế đã học tốt","Không cần gì","Một cái loa","Một mật khẩu"], a:0}
  ],

  "2.2.7": [
    {q:"Câu hỏi của bài này là?", o:["Nhiều dữ liệu hơn có làm AI giỏi hơn không","Máy nặng bao nhiêu","Trời mấy giờ","AI mấy tuổi"], a:0},
    {q:"Thí nghiệm so sánh?", o:["10 vs 50 vs 100 ảnh","Đỏ vs xanh","To vs nhỏ","Nhanh vs chậm"], a:0},
    {q:"Thường nhiều dữ liệu tốt sẽ?", o:["Giúp cải thiện độ chính xác","Làm tệ đi","Không đổi","Máy hỏng"], a:0},
    {q:"Dữ liệu không chỉ cần nhiều mà còn?", o:["Đúng và đa dạng","Toàn giống nhau","Càng mờ càng tốt","Ít nhất có thể"], a:0},
    {q:"Biểu đồ độ chính xác theo lượng dữ liệu cho thấy?", o:["Xu hướng khi tăng dữ liệu","Màu yêu thích","Giờ học","Cân nặng"], a:0},
    {q:"Đến một lúc, thêm dữ liệu?", o:["Cải thiện chậm lại","Luôn tăng vô hạn","Làm tệ đi","Không liên quan"], a:0},
    {q:"100 ảnh tốt thường?", o:["Cho kết quả tốt hơn 10 ảnh","Kém hơn 10 ảnh","Y hệt 10 ảnh","Không dùng được"], a:0},
    {q:"Bài học rút ra?", o:["Cần dữ liệu vừa nhiều vừa chất lượng","Chỉ cần thật nhiều","Chỉ cần thật ít","Không cần dữ liệu"], a:0},
    {q:"Nếu 100 ảnh đều mờ và giống nhau?", o:["Vẫn có thể kém hiệu quả","Chắc chắn tốt nhất","Hoàn hảo","Không ảnh hưởng"], a:0},
    {q:"Thí nghiệm giúp em hiểu?", o:["Vai trò của lượng và chất dữ liệu","Cách tắt máy","Cách vẽ tranh","Cách nấu ăn"], a:0}
  ],

  "2.2.8": [
    {q:"Cách học sâu nhất là?", o:["Giải thích cho người khác","Học thuộc lòng","Chép lại","Nghe một lần"], a:0},
    {q:"Giải thích 'AI học thế nào' nên dùng?", o:["Ví dụ đời thường","Từ ngữ thật khó","Không ví dụ","Toàn số"], a:0},
    {q:"Ba bước AI học là?", o:["Cho ví dụ → luyện tập → kiểm tra","Ăn → ngủ → chơi","Đỏ → vàng → xanh","Không bước nào"], a:0},
    {q:"Nếu bạn nghe xong nói lại đúng, nghĩa là?", o:["Em đã hiểu và giảng tốt","Bạn giỏi sẵn","Em giảng dở","Không có gì"], a:0},
    {q:"Ví dụ đời thường về AI học?", o:["Học nhận biết con mèo","Nấu một nồi canh","Chạy bộ","Vẽ tranh"], a:0},
    {q:"Giải thích rõ giúp?", o:["Người khác hiểu và em nhớ lâu","Người khác rối","Em quên bài","Không tác dụng"], a:0},
    {q:"Nên tránh gì khi giải thích?", o:["Dùng nhiều thuật ngữ khó","Dùng ví dụ","Nói rõ ràng","Theo thứ tự"], a:0},
    {q:"Dạy lại người khác giúp em?", o:["Hiểu sâu hơn","Quên nhanh hơn","Kém đi","Không đổi"], a:0},
    {q:"Mục tiêu bài này?", o:["Trình bày 'AI học thế nào' bằng lời của em","Học vẹt","Vẽ AI","Chơi game"], a:0},
    {q:"Kiểm tra em hiểu bài bằng cách?", o:["Giảng cho bạn và bạn hiểu","Đọc thật to","Giấu kiến thức","Không làm gì"], a:0}
  ],

  "2.3.1": [
    {q:"Với máy, một bức ảnh là?", o:["Lưới các con số chỉ màu","Một bài hát","Một mùi hương","Một cảm xúc"], a:0},
    {q:"Máy nhận ra vật bằng cách?", o:["So khớp mẫu (pattern)","Thật sự 'hiểu' như người","Đoán may rủi","Hỏi người"], a:0},
    {q:"Máy có 'hiểu' ảnh như con người không?", o:["Không, chỉ so mẫu","Có, y hệt","Hiểu hơn người","Không nhìn được"], a:0},
    {q:"Vì chỉ so mẫu nên?", o:["Đổi góc/ánh sáng có thể làm máy sai","Máy luôn đúng","Không bao giờ sai","Máy hỏng"], a:0},
    {q:"Điểm ảnh (pixel) là?", o:["Ô màu nhỏ tạo nên bức ảnh","Một con chuột","Một loại bút","Một âm thanh"], a:0},
    {q:"'Thị giác máy' nghĩa là?", o:["Khả năng máy 'nhìn' và nhận ra vật","Máy có mắt thật","Máy đeo kính","Máy vẽ"], a:0},
    {q:"Máy đọc ảnh thành?", o:["Các con số","Chữ viết tay","Âm thanh","Mùi"], a:0},
    {q:"Con người nhìn bằng?", o:["Mắt","Camera","Con số","Loa"], a:0},
    {q:"Máy nhận diện dựa trên?", o:["Đường nét, hình khối từ con số","Cảm xúc","May mắn","Âm thanh"], a:0},
    {q:"Bài học chính?", o:["Máy 'thấy' khác con người","Máy thấy y hệt người","Máy không thấy gì","Máy thấy màu thật"], a:0}
  ],

  "2.3.2": [
    {q:"Có thể đánh lừa thị giác máy không?", o:["Có, dễ hơn ta nghĩ","Không bao giờ","Chỉ ban đêm","Không thể"], a:0},
    {q:"Cách nào làm AI đoán sai?", o:["Đổi góc chụp lạ","Chụp rõ nét","Đủ ánh sáng","Không che"], a:0},
    {q:"Ánh sáng thế nào gây khó cho máy?", o:["Quá tối hoặc quá chói","Vừa đủ","Tự nhiên","Ổn định"], a:0},
    {q:"Che một phần vật làm?", o:["Máy khó nhận ra","Máy dễ nhận hơn","Không ảnh hưởng","Máy hỏng"], a:0},
    {q:"Biết điểm yếu của AI giúp?", o:["Dùng nó cẩn thận ở việc quan trọng","Coi thường AI","Bỏ AI","Không lợi ích"], a:0},
    {q:"Vì sao máy dễ bị đánh lừa?", o:["Nó chỉ so mẫu, không hiểu thật","Nó quá thông minh","Nó có cảm xúc","Nó lười"], a:0},
    {q:"Với việc quan trọng, nên?", o:["Có người kiểm tra lại","Tin AI hoàn toàn","Bỏ qua kiểm tra","Không dùng gì"], a:0},
    {q:"Làm mô hình đoán sai 3 cách là để?", o:["Hiểu giới hạn của nó","Phá hoại","Cho vui vô ích","Khoe"], a:0},
    {q:"Máy nhận nhầm khi gặp?", o:["Trường hợp lạ chưa từng học","Trường hợp quen","Ảnh rõ nét","Đủ sáng"], a:0},
    {q:"Bài học là?", o:["AI mạnh nhưng có giới hạn","AI hoàn hảo","AI vô dụng","AI luôn đúng"], a:0}
  ],

  "2.3.3": [
    {q:"Máy 'nghe' bằng cách biến âm thanh thành?", o:["Sóng số rồi thành văn bản","Hình ảnh","Mùi hương","Cảm xúc"], a:0},
    {q:"Giọng nói được máy chuyển thành?", o:["Văn bản (chữ)","Tranh vẽ","Âm nhạc","Con số ngẫu nhiên"], a:0},
    {q:"Máy dễ nghe nhầm khi?", o:["Nói nhỏ, nhanh, hoặc ồn ào","Nói rõ, chậm","Nơi yên tĩnh","Phát âm chuẩn"], a:0},
    {q:"Để máy hiểu chính xác, nên?", o:["Nói rõ, chậm, nơi yên tĩnh","Nói thật nhanh","Nói nơi ồn","Thì thầm"], a:0},
    {q:"Từ phát âm gần giống nhau khiến máy?", o:["Dễ nghe nhầm","Nghe rõ hơn","Không ảnh hưởng","Hỏng"], a:0},
    {q:"Âm thanh với máy là?", o:["Sóng (dạng số)","Chữ viết","Màu sắc","Hình khối"], a:0},
    {q:"'Chuyển giọng nói thành văn bản' dùng cho?", o:["Phụ đề, ghi chép tự động","Nấu ăn","Vẽ tranh","Quét nhà"], a:0},
    {q:"Nơi ồn ào ảnh hưởng thế nào?", o:["Máy nghe kém chính xác","Máy nghe tốt hơn","Không sao","Máy nhanh"], a:0},
    {q:"Tìm từ tiếng Việt máy hay nghe nhầm giúp?", o:["Hiểu giới hạn của máy nghe","Chê tiếng Việt","Bỏ học","Không gì"], a:0},
    {q:"Bài học chính?", o:["Máy nghe qua chuyển âm thành chữ, có thể nhầm","Máy nghe hoàn hảo","Máy không nghe được","Máy đọc suy nghĩ"], a:0}
  ],

  "2.3.4": [
    {q:"Khi AI nhận diện sai, hậu quả có thể?", o:["Nghiêm trọng","Luôn vô hại","Buồn cười thôi","Không bao giờ xảy ra"], a:0},
    {q:"Ví dụ nhận diện sai gây hại?", o:["Nhận nhầm khuôn mặt người này ra người khác","Nhận đúng mọi lúc","Đoán màu sai","Nghe nhạc sai"], a:0},
    {q:"Việc quan trọng cần?", o:["Người kiểm tra lại","Giao hết cho AI","Bỏ qua","Không ai kiểm"], a:0},
    {q:"Có nên để AI tự quyết việc ảnh hưởng lớn đến người?", o:["Không","Có, luôn luôn","Tuỳ AI","Bắt buộc"], a:0},
    {q:"Nhận diện khuôn mặt sai có thể?", o:["Gây oan hoặc phiền toái","Luôn tốt","Không ảnh hưởng","Giúp mọi người"], a:0},
    {q:"Cách phòng nhận diện sai?", o:["Con người kiểm tra kết quả AI","Tin AI 100%","Không dùng người","Bỏ kiểm tra"], a:0},
    {q:"Bài học từ tình huống nhận diện sai?", o:["AI cần con người giám sát","AI hoàn hảo","AI vô dụng","Con người thừa"], a:0},
    {q:"AI nên được dùng ở việc quan trọng thế nào?", o:["Có sự giám sát của người","Tự do hoàn toàn","Không dùng gì","Giấu đi"], a:0},
    {q:"Vì sao nhận diện sai đáng lo?", o:["Ảnh hưởng thật đến con người","Không lý do","Cho vui","Không đáng lo"], a:0},
    {q:"Kết luận?", o:["Việc lớn: máy làm, người quyết","Máy quyết hết","Người không cần","Bỏ máy"], a:0}
  ],

  "2.3.5": [
    {q:"Người và máy?", o:["Giỏi những việc khác nhau","Giỏi y hệt nhau","Người luôn thua","Máy luôn thua"], a:0},
    {q:"Máy giỏi việc gì?", o:["Làm nhanh, xử lý rất nhiều ảnh, không mệt","Hiểu ngữ cảnh sâu","Có cảm xúc","Sáng tạo như người"], a:0},
    {q:"Người giỏi việc gì?", o:["Hiểu ngữ cảnh, nhận ra điều lạ, phán đoán","Tính nhanh triệu phép","Không mệt bao giờ","Nhớ vô hạn"], a:0},
    {q:"Kết hợp người và máy giúp?", o:["Mạnh nhất","Yếu đi","Không đổi","Gây hại"], a:0},
    {q:"Trong cuộc thi người vs mô hình trên ảnh khó, thường?", o:["Mỗi bên giỏi ở kiểu ảnh khác nhau","Máy luôn thắng mọi ảnh","Người luôn thua","Không ai làm được"], a:0},
    {q:"Máy xử lý số lượng lớn thì?", o:["Nhanh hơn người","Chậm hơn","Không làm được","Y hệt người"], a:0},
    {q:"Nhận ra điều bất thường là thế mạnh của?", o:["Con người","Máy tính","Con chuột","Bàn phím"], a:0},
    {q:"Cách dùng AI khôn ngoan?", o:["Máy làm phần lặp, người quyết định","Người làm hết","Máy làm hết","Không ai làm"], a:0},
    {q:"Máy có mệt không?", o:["Không, làm liên tục được","Rất nhanh mệt","Mệt như người","Ngủ trưa"], a:0},
    {q:"Bài học?", o:["Người và máy bổ trợ nhau","Máy thay hẳn người","Người vô dụng","Máy vô dụng"], a:0}
  ],

  "2.3.6": [
    {q:"Với máy, ảnh là?", o:["Số (lưới điểm ảnh)","Cảm xúc","Âm thanh","Mùi"], a:0},
    {q:"Máy nhận vật bằng?", o:["So mẫu, không hiểu như người","Trực giác","May mắn","Cảm xúc"], a:0},
    {q:"Máy dễ nhầm khi?", o:["Gặp trường hợp lạ","Ảnh quen thuộc","Đủ sáng","Rõ nét"], a:0},
    {q:"Ba điều nhớ về thị giác máy?", o:["Ảnh là số; so mẫu; dễ nhầm với vật lạ","Máy thấy như người","Máy không thấy gì","Máy thấy màu thật hoàn hảo"], a:0},
    {q:"Nên làm gì để hiểu sâu?", o:["Tự thí nghiệm nhỏ","Chỉ đọc lý thuyết","Không làm gì","Học vẹt"], a:0},
    {q:"Báo cáo '3 điều máy nhìn khác người' giúp?", o:["Tổng kết kiến thức","Trang trí","Tốn giấy","Không gì"], a:0},
    {q:"Máy 'thấy' bằng?", o:["Tính toán từ con số","Đôi mắt thật","Trái tim","Đôi tai"], a:0},
    {q:"Vì sao máy khác con người khi nhìn?", o:["Nó xử lý số chứ không hiểu ý nghĩa","Nó thông minh hơn","Nó có cảm xúc","Nó lười"], a:0},
    {q:"Ôn tập thị giác máy giúp?", o:["Nhớ và vận dụng kiến thức","Quên bài","Chơi game","Nghỉ ngơi"], a:0},
    {q:"Kết luận về thị giác máy?", o:["Mạnh nhưng có giới hạn, cần cẩn thận","Hoàn hảo","Vô dụng","Giống hệt người"], a:0}
  ],

  "2.4.1": [
    {q:"Nhiều AI trò chuyện hoạt động bằng cách?", o:["Đoán từ tiếp theo","Tra từ điển","Hỏi người","Đọc suy nghĩ"], a:0},
    {q:"AI chọn từ tiếp theo như thế nào?", o:["Từ 'có vẻ hợp lý nhất'","Ngẫu nhiên hoàn toàn","Từ đầu tiên nghĩ ra","Không chọn"], a:0},
    {q:"Làm nhiều lần việc đoán từ sẽ thành?", o:["Câu, rồi đoạn văn","Một bức tranh","Một bài hát","Một con số"], a:0},
    {q:"Trò 'đoán từ tiếp theo' giúp em?", o:["Cảm nhận cách AI ngôn ngữ làm việc","Học vẽ","Học hát","Không gì"], a:0},
    {q:"LLM (mô hình ngôn ngữ) chủ yếu làm?", o:["Dự đoán từ kế tiếp","Nấu ăn","Chụp ảnh","Đo nhiệt độ"], a:0},
    {q:"Cho câu chưa hoàn chỉnh, AI sẽ?", o:["Đoán từ nối tiếp hợp lý","Im lặng","Xoá câu","Báo lỗi"], a:0},
    {q:"AI ngôn ngữ giống một người?", o:["Đoán từ tiếp theo rất giỏi","Biết mọi sự thật","Có cảm xúc","Không làm gì"], a:0},
    {q:"Đoán từ dựa trên?", o:["Những gì đã học","Trí nhớ cảm xúc","May mắn","Không gì"], a:0},
    {q:"Trò chơi đoán từ cho thấy?", o:["Nguyên lý của AI trò chuyện","Cách tắt máy","Cách vẽ","Cách nấu ăn"], a:0},
    {q:"Thắng trò đoán từ 10 câu là?", o:["Hiểu cách LLM đoán","May rủi","Vô nghĩa","Không liên quan"], a:0}
  ],

  "2.4.2": [
    {q:"AI ngôn ngữ đoán theo?", o:["Xác suất (từ có vẻ hợp)","Sự thật tra cứu","Cảm xúc","May mắn"], a:0},
    {q:"AI có tra cứu sự thật khi trả lời không?", o:["Không, chỉ chọn từ hợp","Có, luôn luôn","Có, một nửa","Không trả lời"], a:0},
    {q:"Vì sao AI viết trôi chảy mà vẫn sai?", o:["Nó chọn từ 'nghe hợp', không đảm bảo đúng thật","Nó cố tình","Nó buồn ngủ","Nó hỏng"], a:0},
    {q:"Viết hay có nghĩa là nói đúng không?", o:["Không hẳn","Luôn đúng","Không bao giờ đúng","Chắc chắn đúng"], a:0},
    {q:"Với thông tin quan trọng, nên?", o:["Kiểm chứng","Tin ngay","Bỏ qua","Chép luôn"], a:0},
    {q:"AI chọn từ dựa trên?", o:["Những gì đã học","Cảm giác của nó","Ý người khác","Ngẫu nhiên thuần"], a:0},
    {q:"'Nghe hợp tai' nhưng?", o:["Có thể sai sự thật","Luôn đúng","Không quan trọng","Là chân lý"], a:0},
    {q:"Bài học chính?", o:["Trôi chảy ≠ chính xác","Trôi chảy = đúng","AI luôn đúng","AI không bao giờ trôi chảy"], a:0},
    {q:"AI ngôn ngữ giỏi ở?", o:["Tạo câu văn mượt","Đảm bảo sự thật","Cảm xúc","Tính toán vật lý"], a:0},
    {q:"Nên coi câu trả lời của AI là?", o:["Điểm khởi đầu cần kiểm tra","Chân lý tuyệt đối","Luôn sai","Không đọc"], a:0}
  ],

  "2.4.3": [
    {q:"'AI bịa' còn được gọi là?", o:["Ảo giác","Sự thật","Trí nhớ","Kiểm chứng"], a:0},
    {q:"Cách bắt AI bịa?", o:["Hỏi về nhân vật/sách không có thật","Hỏi phép cộng","Khen AI","Tắt AI"], a:0},
    {q:"Khi hỏi điều không có thật, AI thường?", o:["Vẫn 'tự tin' mô tả (bịa)","Im lặng","Báo không biết mọi lần","Tắt máy"], a:0},
    {q:"Ghi lại vài lần AI bịa để?", o:["Nhớ rằng AI có thể sai","Chê AI","Khoe","Không vì gì"], a:0},
    {q:"Bằng chứng AI bịa giúp em?", o:["Cảnh giác khi dùng AI","Tin AI hơn","Bỏ học","Sợ hãi"], a:0},
    {q:"AI bịa nghĩa là?", o:["Đưa thông tin nghe thật nhưng không có thật","Nói rất nhỏ","Không nói gì","Nói đúng"], a:0},
    {q:"Nên làm gì khi phát hiện AI bịa?", o:["Kiểm chứng và không tin ngay","Tin luôn","Lan truyền","Giận dữ"], a:0},
    {q:"Hỏi về cuốn sách không tồn tại, AI có thể?", o:["Bịa ra nội dung, tác giả","Luôn nói 'không có'","Báo lỗi","Im lặng"], a:0},
    {q:"Vì sao nên biết AI bịa?", o:["Để dùng AI an toàn, thông minh","Để ghét AI","Để khoe","Không lý do"], a:0},
    {q:"Bộ sưu tập '3 màn bịa của AI' để?", o:["Học cách nhận ra AI sai","Trang trí","Bán","Không gì"], a:0}
  ],

  "2.4.4": [
    {q:"Điều nguy hiểm là AI thường?", o:["Rất tự tin ngay cả khi sai","Luôn im lặng","Luôn đúng","Thừa nhận sai ngay"], a:0},
    {q:"AI có biết mình không biết không?", o:["Không","Có, rất rõ","Luôn biết","Biết hơn người"], a:0},
    {q:"Giọng chắc nịch của AI nghĩa là?", o:["Không đảm bảo đúng","Chắc chắn đúng","Luôn sai","Đáng tin tuyệt đối"], a:0},
    {q:"Đừng để điều gì đánh lừa em?", o:["Giọng 'chắc như đúng rồi' của AI","Sự im lặng","Màu chữ","Kích thước chữ"], a:0},
    {q:"Nên làm gì dù AI trả lời tự tin?", o:["Tự kiểm tra","Tin ngay","Bỏ qua","Khen AI"], a:0},
    {q:"Vì sao AI tự tin khi sai?", o:["Nó không nhận biết được nó sai","Nó cố tình lừa","Nó buồn","Nó vui"], a:0},
    {q:"Câu hỏi 'bẫy' khiến AI dễ bịa là?", o:["Câu về điều không có thật/rất hiếm","Phép cộng đơn giản","Câu chào","Câu hỏi màu sắc"], a:0},
    {q:"Tự tin ≠ ?", o:["Đúng","Sai","Chậm","Nhanh"], a:0},
    {q:"Thái độ đúng khi AI trả lời chắc chắn?", o:["Vẫn kiểm chứng điều quan trọng","Tin 100%","Sợ hãi","Bỏ qua"], a:0},
    {q:"Bài học?", o:["Giọng chắc chắn không phải bằng chứng đúng","Chắc chắn là đúng","AI luôn khiêm tốn","AI luôn đúng"], a:0}
  ],

  "2.4.5": [
    {q:"Việc nào hợp với AI?", o:["Gợi ý ý tưởng, viết nháp, giải thích","Quyết định y tế quan trọng một mình","Tuyên án","Lái xe thay người"], a:0},
    {q:"Việc nào phải kiểm chứng?", o:["Số liệu, ngày tháng, tên riêng","Xin ý tưởng vui","Nhờ viết nháp","Nhờ đặt tên"], a:0},
    {q:"Nên dùng AI thế nào?", o:["Bắt đầu nhanh rồi tự kiểm, hoàn thiện","Giao hết, không kiểm","Không dùng bao giờ","Chép y nguyên"], a:0},
    {q:"Với thông tin quan trọng, AI là?", o:["Điểm khởi đầu cần kiểm chứng","Nguồn chân lý","Vô dụng","Không liên quan"], a:0},
    {q:"AI phù hợp cho việc?", o:["Sáng tạo, nháp ý tưởng","Ra quyết định pháp lý","Chẩn đoán bệnh thay bác sĩ","Cầm lái ô tô"], a:0},
    {q:"Phân loại việc nên/không nên tin AI giúp?", o:["Dùng AI khôn ngoan","Ghét AI","Bỏ AI","Không gì"], a:0},
    {q:"Ngày tháng, con số từ AI nên?", o:["Đối chiếu nguồn đáng tin","Tin ngay","Bỏ qua","Chép luôn"], a:0},
    {q:"AI giúp 'bắt đầu nhanh' bằng cách?", o:["Cho bản nháp/ý tưởng để phát triển","Làm xong hết thay em","Không giúp","Xoá bài"], a:0},
    {q:"Khi nào KHÔNG nên tin AI ngay?", o:["Khi cần độ chính xác cao","Khi xin ý tưởng","Khi nhờ viết nháp","Khi trò chuyện vui"], a:0},
    {q:"Bài học?", o:["Biết chọn việc phù hợp cho AI","Tin mọi việc","Không tin gì","AI làm được tất cả"], a:0}
  ],

  "2.4.6": [
    {q:"AI ngôn ngữ đoán từ theo?", o:["Xác suất","Sự thật","Cảm xúc","May mắn"], a:0},
    {q:"Vì đoán nên AI đôi khi?", o:["Bịa","Luôn đúng","Im lặng","Tắt"], a:0},
    {q:"Hiểu 'vì sao AI bịa' giúp?", o:["Không tin mù quáng, biết chỗ cần kiểm","Ghét AI","Bỏ AI","Sợ AI"], a:0},
    {q:"Poster 'Vì sao AI bịa' để?", o:["Nhớ cơ chế lâu hơn","Trang trí","Bán","Không gì"], a:0},
    {q:"AI ngôn ngữ giỏi?", o:["Tạo câu văn mượt mà","Đảm bảo mọi sự thật","Cảm nhận cảm xúc","Tính vật lý"], a:0},
    {q:"Nên kiểm chứng khi?", o:["Thông tin quan trọng","Trò chuyện vui","Xin ý tưởng","Nhờ đặt tên"], a:0},
    {q:"'Ảo giác' của AI là?", o:["Bịa thông tin không có thật","Nhìn thấy ma","Ngủ mơ","Một trò chơi"], a:0},
    {q:"Bài học tổng kết LLM?", o:["Mạnh về ngôn ngữ nhưng có thể sai sự thật","Hoàn hảo","Vô dụng","Không đoán được"], a:0},
    {q:"Trò chơi hỏi nhanh ôn tập giúp?", o:["Củng cố kiến thức vui vẻ","Gây rối","Tốn thời gian","Không gì"], a:0},
    {q:"Kết luận về AI trò chuyện?", o:["Dùng để hỗ trợ, luôn kiểm chứng điều quan trọng","Tin tuyệt đối","Không bao giờ dùng","Sợ hãi"], a:0}
  ]

});

/* ===== QUIZ — MODULE 2.5 – 2.8 ===== */
Object.assign(window.LESSON_QUIZ, {

  "2.5.1": [
    {q:"Công thức prompt nâng cao có mấy phần?", o:["5 phần","3 phần","1 phần","10 phần"], a:0},
    {q:"Năm phần của prompt gồm?", o:["Vai + Bối cảnh + Yêu cầu + Định dạng + Ví dụ","Tên, tuổi, lớp, trường, nhà","Sáng, trưa, chiều, tối, đêm","Không phần nào"], a:0},
    {q:"Prompt càng đủ phần thì?", o:["AI càng hiểu ý em","AI càng bối rối","Kết quả càng sai","Không đổi"], a:0},
    {q:"Nâng cấp prompt cũ nghĩa là?", o:["Bổ sung phần còn thiếu","Xoá hết","Viết ngắn hơn hết","Bỏ định dạng"], a:0},
    {q:"'Vai' trong prompt là?", o:["Cho AI đóng vai ai đó","Tên của em","Màu sắc","Con số"], a:0},
    {q:"'Ví dụ' trong prompt giúp?", o:["AI bắt chước đúng kiểu em muốn","Làm rối AI","Kéo dài vô ích","Không tác dụng"], a:0},
    {q:"So với 3 phần, 5 phần cho kết quả?", o:["Sát ý hơn","Kém hơn","Y hệt","Sai hơn"], a:0},
    {q:"Phần nào giới hạn cách trình bày?", o:["Định dạng","Vai","Bối cảnh","Ví dụ"], a:0},
    {q:"Prompt tốt là kỹ năng?", o:["Càng luyện càng giỏi","Bẩm sinh không đổi","Không học được","Vô dụng"], a:0},
    {q:"Mục tiêu công thức 5 phần?", o:["Kết quả rõ và đúng ý hơn","Prompt dài vô ích","Làm AI chậm","Không mục tiêu"], a:0}
  ],

  "2.5.2": [
    {q:"Few-shot là?", o:["Đưa vài ví dụ mẫu để AI làm theo","Chụp vài tấm ảnh","Bắn vài phát","Hỏi vài người"], a:0},
    {q:"Ví dụ mẫu giúp AI?", o:["Bắt chước đúng phong cách","Bối rối","Trả lời sai","Im lặng"], a:0},
    {q:"Đưa 2-3 câu chúc mẫu rồi bảo 'viết thêm' là?", o:["Few-shot (dạy bằng ví dụ)","Đóng vai","Định dạng","Kiểm chứng"], a:0},
    {q:"Ví dụ chất lượng cho kết quả?", o:["Chất lượng","Kém","Không đổi","Ngẫu nhiên"], a:0},
    {q:"Nên chọn ví dụ mẫu thế nào?", o:["Đúng 'giọng' em muốn","Càng lạ càng tốt","Sai cũng được","Không cần chọn"], a:0},
    {q:"Few-shot đặc biệt hữu ích khi?", o:["Muốn AI theo một phong cách cụ thể","Không cần kết quả","Chỉ hỏi vu vơ","Tắt máy"], a:0},
    {q:"Không đưa ví dụ thì AI?", o:["Có thể làm chưa đúng kiểu em muốn","Luôn hoàn hảo","Không trả lời","Báo lỗi"], a:0},
    {q:"'Shot' trong few-shot nghĩa là?", o:["Một ví dụ mẫu","Một phát súng","Một tấm ảnh","Một cú sút"], a:0},
    {q:"Few-shot giúp AI viết đúng giọng nhờ?", o:["Học theo ví dụ em cung cấp","Đọc suy nghĩ","May mắn","Tự bịa"], a:0},
    {q:"Bài học chính?", o:["Ví dụ tốt → kết quả tốt","Không cần ví dụ","Ví dụ càng lạ càng hay","Ví dụ vô dụng"], a:0}
  ],

  "2.5.3": [
    {q:"Yêu cầu AI 'suy nghĩ từng bước' giúp?", o:["Bài khó (nhất là toán) chính xác hơn","AI chậm hơn vô ích","AI bối rối","Không đổi"], a:0},
    {q:"Nên thêm câu gì vào prompt?", o:["Hãy giải thích từng bước rồi mới kết luận","Trả lời thật nhanh","Bỏ qua bước","Chỉ ghi đáp án"], a:0},
    {q:"Khi trình bày từng bước, AI?", o:["Ít nhảy cóc ra đáp án sai","Luôn sai","Không trả lời","Tắt"], a:0},
    {q:"Dù có từng bước, em vẫn nên?", o:["Tự kiểm lại các bước","Tin hết","Bỏ qua","Chép luôn"], a:0},
    {q:"Vì sao 'từng bước' giúp bài toán?", o:["Chia nhỏ nên đỡ sai","Làm khó hơn","Không liên quan","Làm AI mệt"], a:0},
    {q:"So sánh có/không 'từng bước' cho thấy?", o:["Từng bước thường chính xác hơn","Không khác gì","Nhanh hơn nhưng sai","Không dùng được"], a:0},
    {q:"'Suy nghĩ từng bước' phù hợp cho?", o:["Bài cần lập luận","Câu chào","Đặt tên","Chọn màu"], a:0},
    {q:"AI có thể sai ở đâu dù trình bày từng bước?", o:["Ở giữa chừng","Không bao giờ","Chỉ ở đầu","Chỉ ở tên"], a:0},
    {q:"Kỹ thuật này giúp em?", o:["Kiểm tra được cách AI suy luận","Giấu cách làm","Tắt máy","Không gì"], a:0},
    {q:"Bài học?", o:["Yêu cầu lập luận rõ giúp kết quả tốt hơn","Càng ngắn càng đúng","Bỏ bước cho nhanh","Không cần suy nghĩ"], a:0}
  ],

  "2.5.4": [
    {q:"Việc lớn nên?", o:["Chia thành chuỗi prompt","Nhồi vào 1 prompt","Bỏ qua","Nhờ 1 câu duy nhất"], a:0},
    {q:"Mỗi prompt trong chuỗi nên làm?", o:["Một việc","Tất cả mọi việc","Không việc gì","Nhiều việc rối"], a:0},
    {q:"Chia nhỏ nhiệm vụ giúp?", o:["Dễ kiểm soát, ít lỗi","Rối hơn","Chậm và sai","Không tác dụng"], a:0},
    {q:"Kết quả bước trước dùng làm?", o:["Đầu vào bước sau","Rác bỏ đi","Không dùng","Trang trí"], a:0},
    {q:"Ví dụ chuỗi prompt cho bài lớn?", o:["Lên dàn ý → viết từng phần → chỉnh sửa","Làm hết trong 1 câu","Không làm","Chép mạng"], a:0},
    {q:"Một prompt ôm hết việc thường?", o:["Khó kiểm soát, dễ lỗi","Tốt nhất","Nhanh và đúng","Không sao"], a:0},
    {q:"Chuỗi prompt giống?", o:["Chia nhỏ việc lớn (đã học ở tư duy phân rã)","Vẽ tranh","Nghe nhạc","Đếm số"], a:0},
    {q:"Ưu điểm của chia nhỏ nhiệm vụ?", o:["Từng phần rõ ràng, dễ sửa","Phức tạp hơn","Mất thời gian vô ích","Không có"], a:0},
    {q:"Sau khi hoàn thành các bước, ta?", o:["Ghép lại thành kết quả cuối","Xoá hết","Bỏ dở","Làm lại từ đầu"], a:0},
    {q:"Bài học?", o:["Chia nhỏ giúp làm việc lớn với AI dễ hơn","Nên nhồi hết một lần","Không cần chia","Bỏ bước"], a:0}
  ],

  "2.5.5": [
    {q:"Prompt tạo hình ảnh cần?", o:["Mô tả thật rõ","Mơ hồ","Không mô tả","Chỉ một chữ"], a:0},
    {q:"Mô tả tranh nên có?", o:["Chủ thể, phong cách, bố cục/màu","Chỉ tên em","Chỉ con số","Không gì"], a:0},
    {q:"'Chủ thể' là?", o:["Vẽ cái gì","Màu nền","Kích thước file","Ngày tháng"], a:0},
    {q:"'Phong cách' ví dụ như?", o:["Hoạt hình, màu nước","To hay nhỏ","Sáng hay tối máy","Nhanh hay chậm"], a:0},
    {q:"Càng mô tả chi tiết thì tranh?", o:["Càng sát ý","Càng sai","Không đổi","Biến mất"], a:0},
    {q:"Chưa ưng tranh thì?", o:["Sửa mô tả rồi tạo lại","Bỏ cuộc","Trách AI","Tắt máy"], a:0},
    {q:"Mô tả 'nền gì, tông màu nào' thuộc?", o:["Bố cục/màu sắc","Chủ thể","Định dạng file","Tên tranh"], a:0},
    {q:"Prompt hình ảnh mơ hồ cho?", o:["Tranh không đúng ý","Tranh hoàn hảo","Không tranh","Nhiều tranh đúng"], a:0},
    {q:"Muốn 3 bức tranh theo trí tưởng tượng, em?", o:["Mô tả rõ từng ý","Không mô tả","Chép của bạn","Đợi may mắn"], a:0},
    {q:"Bài học?", o:["Mô tả chi tiết → tranh sát ý hơn","Càng mơ hồ càng đẹp","Không cần mô tả","Tranh tự ra đúng"], a:0}
  ],

  "2.5.6": [
    {q:"Khi kết quả chưa ổn, nên?", o:["Tìm xem prompt thiếu gì","Đổ lỗi cho AI ngay","Bỏ cuộc","Tắt máy"], a:0},
    {q:"Chẩn đoán prompt là hỏi?", o:["Thiếu bối cảnh? định dạng? ví dụ?","Trời mấy giờ?","Máy nặng bao nhiêu?","Ai đang xem?"], a:0},
    {q:"Sau khi tìm chỗ thiếu, ta?", o:["Bổ sung rồi thử lại","Xoá hết","Bỏ qua","Trách AI"], a:0},
    {q:"Thường kết quả tốt hơn nhờ?", o:["Prompt rõ hơn","Đổ lỗi cho máy","May mắn","Không làm gì"], a:0},
    {q:"'Sửa prompt như thợ' nghĩa là?", o:["Chẩn đoán và vá đúng chỗ","Đập máy","Viết lại từ đầu mọi lần","Bỏ cuộc"], a:0},
    {q:"Đừng vội làm gì khi AI trả lời chưa hay?", o:["Đổ lỗi cho AI","Sửa prompt","Thử lại","Suy nghĩ"], a:0},
    {q:"'Cứu' prompt hỏng nghĩa là?", o:["Sửa cho nó chạy tốt hơn","Xoá nó","Bỏ dự án","In ra giấy"], a:0},
    {q:"Prompt thiếu định dạng dẫn đến?", o:["Kết quả trình bày không như ý","Kết quả hoàn hảo","Không kết quả","Máy hỏng"], a:0},
    {q:"Kỹ năng sửa prompt giúp?", o:["Dùng AI hiệu quả hơn","Làm phiền AI","Vô ích","Gây lỗi"], a:0},
    {q:"Bài học?", o:["Prompt rõ hơn thường cho kết quả tốt hơn","AI luôn có lỗi","Không sửa được","Bỏ AI"], a:0}
  ],

  "2.5.7": [
    {q:"Prompt hay nên?", o:["Lưu lại thành thư viện","Xoá ngay","Giữ trong đầu","Vứt đi"], a:0},
    {q:"Nên chia thư viện prompt theo?", o:["Nhóm việc","Màu sắc","Kích thước","Ngẫu nhiên"], a:0},
    {q:"Ví dụ nhóm việc?", o:["Học tập, sáng tạo, tóm tắt","Đỏ, vàng, xanh","To, vừa, nhỏ","Sáng, trưa, tối"], a:0},
    {q:"Lần sau dùng prompt lưu sẵn thì?", o:["Lấy ra và chỉnh nhẹ","Viết lại từ đầu","Không dùng được","Phải mua"], a:0},
    {q:"Nên ghi kèm gì cho mỗi prompt?", o:["Dùng cho việc gì","Ngày sinh","Màu yêu thích","Không ghi"], a:0},
    {q:"Thư viện prompt giúp?", o:["Tiết kiệm thời gian, làm việc nhanh hơn","Tốn thời gian","Rối hơn","Không lợi ích"], a:0},
    {q:"Hệ thống hoá prompt nghĩa là?", o:["Sắp xếp gọn gàng theo mục đích","Vứt lộn xộn","Xoá hết","Giấu đi"], a:0},
    {q:"Thư viện 15 prompt chia 5 nhóm giúp?", o:["Dễ tìm khi cần","Khó tìm hơn","Vô dụng","Chỉ để khoe"], a:0},
    {q:"Prompt tốt được tái sử dụng thì?", o:["Càng tiện lợi","Càng dở","Mất giá trị","Không dùng lại được"], a:0},
    {q:"Bài học?", o:["Lưu và tổ chức prompt tốt rất hữu ích","Không cần lưu","Xoá sau mỗi lần","Giữ bí mật tuyệt đối"], a:0}
  ],

  "2.5.8": [
    {q:"Thi đấu prompt là?", o:["Cùng đề, ai viết prompt cho kết quả tốt hơn","Chạy đua","Vẽ thi","Hát thi"], a:0},
    {q:"Chấm theo tiêu chí gồm?", o:["Đúng ý, rõ ràng, đủ định dạng","Nhanh nhất","To tiếng nhất","Dài nhất"], a:0},
    {q:"Thi đấu giúp em?", o:["Học lẫn nhau từ prompt hay","Ghét bạn","Bỏ học","Không gì"], a:0},
    {q:"Viết prompt là?", o:["Kỹ năng, càng luyện càng giỏi","Bẩm sinh","May rủi","Vô dụng"], a:0},
    {q:"Chấm chéo nghĩa là?", o:["Các nhóm chấm bài của nhau","Tự chấm mình","Không chấm","Coach chấm hết"], a:0},
    {q:"Prompt tốt hơn thường?", o:["Rõ ràng và đủ thông tin","Dài hơn","To hơn","Nhanh hơn"], a:0},
    {q:"Học từ prompt hay của bạn giúp?", o:["Em viết tốt hơn","Em kém đi","Không đổi","Gây hại"], a:0},
    {q:"Tiêu chí 'đúng ý' nghĩa là?", o:["Kết quả sát điều đề bài cần","Kết quả dài","Kết quả nhiều màu","Kết quả nhanh"], a:0},
    {q:"Thi đấu prompt tạo không khí?", o:["Vui và cùng tiến bộ","Căng thẳng vô ích","Buồn chán","Sợ hãi"], a:0},
    {q:"Bài học tổng kết module prompt?", o:["Prompt là kỹ năng rèn được","Không thể học","Chỉ cần may mắn","Không quan trọng"], a:0}
  ],

  "2.6.1": [
    {q:"Kiểm chứng giúp em?", o:["Không bị lừa bởi thông tin sai","Tin mọi thứ","Lười suy nghĩ","Sợ hãi"], a:0},
    {q:"Quy trình kiểm chứng 3 bước?", o:["Nghi ngờ → tìm nguồn gốc → đối chiếu","Tin → chia sẻ → quên","Xem → thích → bỏ","Không có bước nào"], a:0},
    {q:"Bước đầu là?", o:["Nghi ngờ, chưa vội tin","Tin ngay","Chia sẻ ngay","Bình luận"], a:0},
    {q:"Đối chiếu với bao nhiêu nguồn?", o:["2 nguồn độc lập đáng tin","0 nguồn","Không cần","Chỉ 1 nguồn lạ"], a:0},
    {q:"Tin thật thường?", o:["Xuất hiện ở nhiều nơi uy tín","Chỉ một chỗ lạ","Không nơi nào","Chỉ trong game"], a:0},
    {q:"'Tìm nguồn gốc' nghĩa là?", o:["Xem tin này từ đâu ra","Xoá tin","Thích tin","Bỏ qua"], a:0},
    {q:"Nghi ngờ trước khi tin là?", o:["Thói quen tốt","Xấu tính","Mất lịch sự","Vô ích"], a:0},
    {q:"Nếu chỉ một trang lạ đưa tin, ta nên?", o:["Cẩn trọng, kiểm thêm","Tin ngay","Chia sẻ liền","Bình luận tức giận"], a:0},
    {q:"Kiểm chứng '3 tin coach đưa' để?", o:["Luyện phân biệt thật/giả","Cho vui","Tốn thời gian","Không gì"], a:0},
    {q:"Mục tiêu kiểm chứng?", o:["Biết tin nào đáng tin","Tin tất cả","Không tin gì","Sợ mọi tin"], a:0}
  ],

  "2.6.2": [
    {q:"Nguồn nào thường đáng tin hơn?", o:["Báo chính thống, trang khoa học, sách","Blog cá nhân chưa rõ nguồn","Tin đồn","Bài đăng ẩn danh"], a:0},
    {q:"Khi đánh giá nguồn, nên xem?", o:["Ai viết, viết khi nào, có dẫn nguồn không","Màu trang web","Có nhiều quảng cáo không","Tên miền dài hay ngắn"], a:0},
    {q:"Bài đăng mạng xã hội chưa rõ nguồn thì?", o:["Cần thận trọng","Luôn đáng tin","Chân lý","Không cần kiểm"], a:0},
    {q:"Xếp hạng độ tin cậy giúp?", o:["Biết nên tin nguồn nào hơn","Chê nguồn","Không để làm gì","Cho vui"], a:0},
    {q:"Nguồn có dẫn chứng rõ thì?", o:["Đáng tin hơn","Kém tin hơn","Không liên quan","Luôn sai"], a:0},
    {q:"Trang khoa học so với blog cá nhân?", o:["Thường đáng tin hơn","Kém hơn","Y hệt","Không dùng được"], a:0},
    {q:"Không phải nguồn nào cũng?", o:["Đáng tin như nhau","Giống hệt","Sai như nhau","Đúng tuyệt đối"], a:0},
    {q:"Một tin chỉ có ở 'một chỗ lạ' thì?", o:["Đáng nghi ngờ","Chắc chắn đúng","Rất uy tín","Nên chia sẻ ngay"], a:0},
    {q:"Kiểm tra thời gian đăng tin để?", o:["Biết tin còn mới/đúng thời điểm không","Cho vui","Không quan trọng","Trang trí"], a:0},
    {q:"Bài học?", o:["Chọn nguồn đáng tin để kiểm chứng","Tin mọi nguồn","Không tin gì","Nguồn nào cũng như nhau"], a:0}
  ],

  "2.6.3": [
    {q:"Deepfake là?", o:["Ảnh/video giả do AI tạo, trông như thật","Một trò chơi","Một loại máy ảnh","Một kiểu tóc"], a:0},
    {q:"Dấu hiệu nhận biết ảnh giả?", o:["Chi tiết bất thường: tay, mắt, ánh sáng méo","Ảnh quá rõ nét","Có nhiều màu","Kích thước lớn"], a:0},
    {q:"Nội dung giật gân chỉ ở nguồn lạ thì?", o:["Cần cảnh giác","Chắc chắn thật","Nên tin ngay","Rất uy tín"], a:0},
    {q:"'Thấy tận mắt' ngày nay?", o:["Không còn chắc là thật","Luôn là thật","Không bao giờ thật","Không liên quan"], a:0},
    {q:"Trước khi tin ảnh/video, nên?", o:["Kiểm nguồn","Chia sẻ ngay","Bình luận","Bỏ qua kiểm tra"], a:0},
    {q:"Deepfake do gì tạo ra?", o:["AI","Máy photocopy","Bút chì","Máy ảnh thường"], a:0},
    {q:"Xem kỹ bàn tay trong ảnh AI vì?", o:["Thường có lỗi/bất thường","Luôn hoàn hảo","Không quan trọng","Để trang trí"], a:0},
    {q:"Kẻ xấu dùng deepfake để?", o:["Tung tin sai, lừa đảo","Giúp cộng đồng","Dạy học","Không mục đích"], a:0},
    {q:"Phân biệt 10 ảnh thật/giả giúp?", o:["Luyện kỹ năng nhận biết","Cho vui vô ích","Tốn thời gian","Không gì"], a:0},
    {q:"Bài học?", o:["Cần kiểm chứng trước khi tin ảnh/video","Tin mọi ảnh","Ảnh luôn thật","Không cần cảnh giác"], a:0}
  ],

  "2.6.4": [
    {q:"Kẻ xấu có thể dùng AI để?", o:["Giả giọng người thân","Nấu ăn giúp","Dạy học","Không làm gì"], a:0},
    {q:"Nhận cuộc gọi 'người quen' xin tiền gấp, nên?", o:["Gọi lại số quen thuộc để xác minh","Chuyển tiền ngay","Làm theo liền","Giữ bí mật"], a:0},
    {q:"Khi bị hối thúc gấp, nên?", o:["Bình tĩnh, không làm theo ngay","Vội làm theo","Hoảng loạn","Chuyển tiền"], a:0},
    {q:"Gặp cuộc gọi đáng ngờ, nên?", o:["Báo người lớn","Tự xử lý một mình","Làm theo","Bỏ qua"], a:0},
    {q:"Giọng nói giả có thể?", o:["Nghe giống người thật","Luôn dễ nhận ra","Không tồn tại","Chỉ là tin đồn"], a:0},
    {q:"Chiêu 'hối thúc gấp' là?", o:["Cách của kẻ lừa để em không kịp nghĩ","Dấu hiệu đáng tin","Bình thường","Không đáng lo"], a:0},
    {q:"Quy tắc xác minh cuộc gọi?", o:["Gọi lại số đã biết để kiểm tra","Tin ngay","Không kiểm","Chuyển tiền trước"], a:0},
    {q:"Kịch bản gia đình ứng phó giúp?", o:["Cả nhà biết cách xử lý cuộc gọi giả","Gây sợ hãi","Vô ích","Chỉ để chơi"], a:0},
    {q:"Điều KHÔNG nên làm?", o:["Vội chuyển tiền theo yêu cầu lạ","Xác minh","Báo người lớn","Bình tĩnh"], a:0},
    {q:"Bài học?", o:["Cảnh giác với giọng giả, luôn xác minh","Tin mọi cuộc gọi","Làm theo ngay","Không cần cẩn thận"], a:0}
  ],

  "2.6.5": [
    {q:"Có thể kiểm chứng chính AI bằng cách?", o:["Bắt nó dẫn nguồn","Khen nó","Tắt nó","Không hỏi gì"], a:0},
    {q:"Sau khi AI đưa nguồn, nên?", o:["Kiểm tra nguồn đó có thật không","Tin ngay","Bỏ qua","Chia sẻ"], a:0},
    {q:"Đôi khi AI còn?", o:["Bịa cả nguồn","Luôn dẫn nguồn thật","Không bao giờ sai","Không dẫn được"], a:0},
    {q:"Nguồn có giá trị phải?", o:["Tồn tại và đáng tin","Dài dòng","Nhiều màu","Do AI tạo"], a:0},
    {q:"Hỏi 'dựa vào đâu?' để?", o:["Buộc AI nêu căn cứ","Làm AI vui","Cho có","Tắt máy"], a:0},
    {q:"Nếu nguồn AI đưa không tồn tại thì?", o:["Thông tin đó đáng nghi","Vẫn đúng","Rất uy tín","Không sao"], a:0},
    {q:"Kiểm chứng chính AI giúp?", o:["Tránh tin thông tin bịa","Ghét AI","Bỏ AI","Không lợi ích"], a:0},
    {q:"Phát hiện 1 nguồn AI 'bịa' cho thấy?", o:["Cần luôn kiểm nguồn","AI hoàn hảo","Nguồn nào cũng đúng","Không cần kiểm"], a:0},
    {q:"Nguồn tốt là nguồn?", o:["Có thật và đáng tin","Nghe hay","Do AI tự tạo","Không kiểm được"], a:0},
    {q:"Bài học?", o:["Đừng tin nguồn AI đưa mà chưa kiểm","Tin mọi nguồn AI","AI luôn thật","Không cần nguồn"], a:0}
  ],

  "2.6.6": [
    {q:"Sau module này, em trở thành?", o:["Một người kiểm chứng","Người tin mọi thứ","Người sợ tin tức","Người lười"], a:0},
    {q:"Cẩm nang kiểm chứng gồm?", o:["Nghi ngờ → tìm nguồn → đối chiếu 2 nguồn","Tin → chia sẻ → quên","Không có gì","Chỉ tin cảm giác"], a:0},
    {q:"Với ảnh/giọng, nên?", o:["Cảnh giác giả mạo","Tin ngay","Không quan tâm","Chia sẻ liền"], a:0},
    {q:"Với AI, nên?", o:["Bắt dẫn nguồn và kiểm","Tin tuyệt đối","Không dùng","Sợ hãi"], a:0},
    {q:"Cẩm nang bỏ túi giúp?", o:["Nhớ khi lướt mạng","Trang trí","Tốn giấy","Không gì"], a:0},
    {q:"Không lan truyền tin chưa kiểm là?", o:["Giúp cộng đồng","Ích kỷ","Vô ích","Gây hại"], a:0},
    {q:"Tình huống tổng hợp giúp?", o:["Vận dụng mọi kỹ năng kiểm chứng","Học vẹt","Chơi game","Nghỉ"], a:0},
    {q:"Người kiểm chứng giỏi thì?", o:["Ít bị lừa","Dễ bị lừa","Tin mọi thứ","Sợ tất cả"], a:0},
    {q:"Khi nghi ngờ một tin, việc đầu tiên?", o:["Dừng lại, chưa chia sẻ","Chia sẻ ngay","Bình luận","Tin luôn"], a:0},
    {q:"Bài học tổng kết?", o:["Kiểm chứng trước khi tin và chia sẻ","Tin nhanh cho tiện","Không cần kiểm","Chia sẻ hết"], a:0}
  ],

  "2.7.1": [
    {q:"Dữ liệu cá nhân là?", o:["Thông tin về chính em","Bài tập Toán","Tên loài hoa","Thời tiết"], a:0},
    {q:"Ví dụ dữ liệu cá nhân?", o:["Tên, ảnh, địa chỉ, số điện thoại","Màu bầu trời","Tên con mèo hàng xóm","Giá rau"], a:0},
    {q:"Vì sao dữ liệu cá nhân quý?", o:["Kẻ xấu có thể lợi dụng","Không quý gì","Để khoe","Để bán rẻ"], a:0},
    {q:"Với AI/người lạ trên mạng, nên?", o:["Không chia sẻ thông tin nhạy cảm","Chia sẻ hết","Đưa mật khẩu","Cho địa chỉ nhà"], a:0},
    {q:"Địa chỉ nhà thuộc?", o:["Thông tin cần bảo vệ","Thông tin công khai thoải mái","Không quan trọng","Nên đăng mạng"], a:0},
    {q:"Chia sẻ bừa dữ liệu cá nhân có thể?", o:["Bị kẻ xấu lợi dụng","An toàn tuyệt đối","Được thưởng","Không sao"], a:0},
    {q:"Thói quen, sở thích của em?", o:["Cũng là dữ liệu cá nhân","Không phải","Vô giá trị","Nên khoe hết"], a:0},
    {q:"Điều nào an toàn để nói?", o:["Sở thích chung chung, không định danh","Số điện thoại","Địa chỉ nhà","Mật khẩu"], a:0},
    {q:"Bảo vệ dữ liệu cá nhân giúp?", o:["Giữ an toàn cho bản thân","Máy nhanh hơn","Được điểm cao","Không lợi ích"], a:0},
    {q:"Bài học?", o:["Không đưa thông tin cá nhân nhạy cảm bừa bãi","Chia sẻ càng nhiều càng tốt","Không cần bảo vệ","Cho ai cũng được"], a:0}
  ],

  "2.7.2": [
    {q:"Nhiều dịch vụ AI có thể?", o:["Lưu lại hội thoại của em","Xoá ngay mọi thứ","Không nhớ gì","Đọc suy nghĩ"], a:0},
    {q:"Vì AI có thể lưu hội thoại nên?", o:["Cẩn thận với điều em gõ vào","Gõ gì cũng được","Đưa mật khẩu","Kể bí mật"], a:0},
    {q:"Nhiều công cụ có?", o:["Cài đặt quyền riêng tư","Nút tự huỷ máy","Không cài gì","Chỉ quảng cáo"], a:0},
    {q:"Nên làm gì với cài đặt riêng tư?", o:["Nhờ người lớn cùng xem và chỉnh","Bỏ mặc","Tắt hết bảo mật","Không quan tâm"], a:0},
    {q:"'AI nhớ gì về em' nhắc ta?", o:["Chú ý thông tin mình chia sẻ","Không cần lo","AI vô hại tuyệt đối","AI quên hết"], a:0},
    {q:"Có nên gõ mật khẩu vào chatbot?", o:["Không","Có","Nếu AI hỏi","Tuỳ hôm"], a:0},
    {q:"Cài đặt quyền riêng tư giúp?", o:["Kiểm soát dữ liệu của em","Làm máy chậm","Vô dụng","Gây hại"], a:0},
    {q:"Thông tin nhạy cảm nên?", o:["Không đưa vào AI","Đưa tất cả","Ghi công khai","Bán đi"], a:0},
    {q:"Khi chưa rõ cài đặt, nên?", o:["Hỏi người lớn","Tự tắt hết","Bỏ qua","Đoán bừa"], a:0},
    {q:"Bài học?", o:["Cẩn thận với thông tin chia sẻ cho AI","Chia sẻ thoải mái","AI không nhớ gì","Không cần cài đặt"], a:0}
  ],

  "2.7.3": [
    {q:"Dùng AI có trách nhiệm cũng là?", o:["Trung thực","Giấu giếm","Gian lận","Khoe khoang"], a:0},
    {q:"Bài AI làm hộ hoàn toàn thì?", o:["Không hẳn là của em","Chắc chắn của em","Của cả lớp","Của AI thôi"], a:0},
    {q:"Khi dùng AI hỗ trợ làm bài, nên?", o:["Nói thật là có dùng AI","Giấu đi","Nhận hết là mình","Xoá lịch sử"], a:0},
    {q:"Nên để AI giúp em?", o:["Học và làm tốt hơn","Làm thay hết","Gian lận","Khỏi suy nghĩ"], a:0},
    {q:"Ghi công AI nghĩa là?", o:["Thừa nhận có dùng AI","Nhận vơ","Giấu","Đổ lỗi"], a:0},
    {q:"Trung thực khi dùng AI giúp?", o:["Em giữ được sự tin cậy","Bị điểm thấp mãi","Không lợi ích","Gây hại"], a:0},
    {q:"Tranh luận về dùng AI ở trường giúp?", o:["Hiểu đúng-sai rõ hơn","Cãi nhau vô ích","Bỏ học","Không gì"], a:0},
    {q:"Chép nguyên bài AI rồi nhận là mình là?", o:["Không trung thực","Trung thực","Sáng tạo","Đáng khen"], a:0},
    {q:"Dùng AI đúng cách là?", o:["Công cụ hỗ trợ học tập","Cách để lười","Cách gian lận","Cách trốn tránh"], a:0},
    {q:"Bài học?", o:["Trung thực và có trách nhiệm khi dùng AI","Giấu là khôn","Nhận vơ là giỏi","Không quan trọng"], a:0}
  ],

  "2.7.4": [
    {q:"Bài này em tự viết?", o:["Bộ quy tắc dùng AI của mình","Một bài hát","Một mật khẩu","Một trò chơi"], a:0},
    {q:"Quy tắc nên bao gồm?", o:["Trung thực, không hại ai, bảo vệ thông tin, kiểm chứng","Chỉ chơi game","Không quy tắc nào","Toàn điều vô lý"], a:0},
    {q:"'Hiến chương AI' cá nhân là?", o:["Bản quy tắc dùng AI của em","Một tấm bằng","Một trò chơi","Một con số"], a:0},
    {q:"Nên chia sẻ hiến chương với?", o:["Ba mẹ","Người lạ","Không ai","Kẻ xấu"], a:0},
    {q:"Viết quy tắc giúp em?", o:["Dùng AI công bằng, an toàn","Rối hơn","Không lợi ích","Sợ AI"], a:0},
    {q:"Một quy tắc tốt ví dụ?", o:["Luôn kiểm chứng thông tin quan trọng","Tin AI 100%","Đưa hết thông tin cá nhân","Dùng AI hại bạn"], a:0},
    {q:"Chia sẻ với ba mẹ để?", o:["Cùng thống nhất cách dùng AI ở nhà","Khoe","Bị cấm","Không vì gì"], a:0},
    {q:"Bộ quy tắc do ai đặt ra?", o:["Chính em","Người lạ","AI","Không ai"], a:0},
    {q:"Quy tắc 'không hại ai' nghĩa là?", o:["Không dùng AI để trêu chọc, bắt nạt","Được trêu bạn","Được nói dối","Được hại người"], a:0},
    {q:"Bài học tổng kết module đạo đức?", o:["Dùng AI an toàn, trung thực, tôn trọng người khác","Dùng sao cũng được","Không cần quy tắc","Giấu là tốt"], a:0}
  ],

  "2.8.1": [
    {q:"Dự án cuối Level 2 giải vấn đề bằng?", o:["Mô hình phân loại + AI","Chỉ vẽ tay","Không dùng gì","Chép mạng"], a:0},
    {q:"Nên chọn vấn đề?", o:["Em quan tâm, máy có thể giúp phân loại","Không liên quan","Không giải được","Của người khác"], a:0},
    {q:"Ví dụ đề tài phù hợp?", o:["Phân loại rác, nhận biết lá cây","Bay lên mặt trăng","Chữa mọi bệnh","Dự báo tương lai"], a:0},
    {q:"Đề tài dễ thành công khi?", o:["Vừa sức, dữ liệu dễ thu","Cực khó","Không thu được dữ liệu","Mơ hồ"], a:0},
    {q:"Bước đầu của dự án?", o:["Chọn đề tài","Nộp bài","Thuyết trình","Nghỉ"], a:0},
    {q:"Đề cương dự án được duyệt nghĩa là?", o:["Ý tưởng được chấp nhận để làm","Bị loại","Không cần làm","Đã xong"], a:0},
    {q:"Chọn đề tài quan tâm giúp?", o:["Có động lực theo đuổi","Nhanh chán","Không đổi","Gây rối"], a:0},
    {q:"Mô hình phân loại làm gì?", o:["Sắp vật vào đúng nhóm","Vẽ tranh","Hát","Nấu ăn"], a:0},
    {q:"Đề tài quá khó thì?", o:["Khó hoàn thành","Chắc chắn thành công","Dễ hơn","Không sao"], a:0},
    {q:"Mục tiêu bài này?", o:["Có đề tài dự án rõ ràng","Học lý thuyết suông","Chơi game","Nghỉ ngơi"], a:0}
  ],

  "2.8.2": [
    {q:"Thu thập dữ liệu tốt quyết định?", o:["Mô hình tốt hay xấu","Màu sản phẩm","Tên dự án","Giờ nộp"], a:0},
    {q:"Dữ liệu nên?", o:["Đa dạng, đủ mỗi nhóm","Toàn giống nhau","Chỉ một mẫu","Không có"], a:0},
    {q:"Thu nhiều góc và điều kiện giúp?", o:["Mô hình 'thấy' đa dạng hơn","Mô hình rối","Máy hỏng","Không tác dụng"], a:0},
    {q:"Dữ liệu lệch dẫn đến?", o:["Mô hình có điểm mù","Mô hình hoàn hảo","Không ảnh hưởng","Máy nhanh"], a:0},
    {q:"Trước khi thu, nên?", o:["Nghĩ trước các trường hợp sẽ gặp","Thu bừa","Không kế hoạch","Chép của bạn"], a:0},
    {q:"Bộ dữ liệu ≥60 mẫu chia nhóm rõ ràng nghĩa là?", o:["Đủ và có tổ chức","Quá ít","Lộn xộn","Không cần"], a:0},
    {q:"Thu thập có kế hoạch giúp?", o:["Dữ liệu chất lượng hơn","Rối hơn","Tốn công vô ích","Không đổi"], a:0},
    {q:"Nếu chỉ thu một loại trường hợp?", o:["Mô hình dễ có điểm mù","Mô hình giỏi hơn","Không sao","Hoàn hảo"], a:0},
    {q:"Đa dạng dữ liệu nghĩa là?", o:["Nhiều tình huống khác nhau","Một kiểu duy nhất","Toàn màu đỏ","Một góc"], a:0},
    {q:"Bài học?", o:["Dữ liệu tốt, đa dạng → mô hình tốt","Ít là đủ","Không cần kế hoạch","Giống nhau là tốt"], a:0}
  ],

  "2.8.3": [
    {q:"Sau khi thu dữ liệu, ta?", o:["Huấn luyện rồi đánh giá","Nộp ngay","Bỏ dữ liệu","Vẽ tranh"], a:0},
    {q:"Đánh giá mô hình nên?", o:["Trung thực","Tô hồng","Bỏ qua","Nói dối"], a:0},
    {q:"Đo độ chính xác trên vật?", o:["Mới (chưa dùng để học)","Đã học rồi","Không có","Tưởng tượng"], a:0},
    {q:"Tìm điểm mù nghĩa là?", o:["Tìm trường hợp mô hình hay sai","Khen mô hình","Bỏ mô hình","Không làm gì"], a:0},
    {q:"Ghi lại nơi mô hình sai để?", o:["Biết cần bổ sung dữ liệu gì","Chê mô hình","Xoá dự án","Không vì gì"], a:0},
    {q:"Đo trên vật đã học sẽ?", o:["Không phản ánh đúng năng lực thật","Chính xác nhất","Không liên quan","Luôn sai"], a:0},
    {q:"Mô hình đạt mục tiêu nghĩa là?", o:["Độ chính xác đủ như đặt ra","Vẽ đẹp","Nhanh nhất","Nhiều màu"], a:0},
    {q:"Bảng đánh giá cho thấy?", o:["Mô hình tốt/kém ở đâu","Màu yêu thích","Giờ học","Cân nặng"], a:0},
    {q:"Vì sao đánh giá trung thực?", o:["Để cải thiện đúng chỗ","Để tự lừa mình","Để khoe","Không lý do"], a:0},
    {q:"Bài học?", o:["Huấn luyện xong phải đánh giá và tìm điểm yếu","Xong là thôi","Không cần đo","Giấu điểm yếu"], a:0}
  ],

  "2.8.4": [
    {q:"Kiểm chứng chéo là?", o:["Nhờ bạn khác thử phá mô hình","Tự khen mình","Giấu mô hình","Xoá dữ liệu"], a:0},
    {q:"Bạn tìm cách làm gì?", o:["Làm mô hình đoán sai","Khen mô hình","Bỏ đi","Không làm gì"], a:0},
    {q:"Em ghi lại điểm yếu rồi?", o:["Vá bằng cách bổ sung dữ liệu phù hợp","Bỏ mặc","Xoá dự án","Giấu"], a:0},
    {q:"Bị 'phá' giúp mô hình?", o:["Mạnh hơn","Yếu đi","Biến mất","Không đổi"], a:0},
    {q:"'Tấn công - phòng thủ' nghĩa là?", o:["Bạn tìm lỗi, em vá lỗi","Đánh nhau thật","Trò chơi bạo lực","Không gì"], a:0},
    {q:"Kiểm chứng chéo giống?", o:["Thử thách để tiến bộ","Sự trừng phạt","Cuộc cãi vã","Trò vô ích"], a:0},
    {q:"Khi phát hiện điểm yếu, thái độ đúng?", o:["Biết ơn và sửa","Giận dữ","Chối bỏ","Bỏ cuộc"], a:0},
    {q:"Vá điểm yếu bằng cách?", o:["Thêm dữ liệu cho trường hợp đó","Xoá mô hình","Đổi tên","Không làm gì"], a:0},
    {q:"Biên bản 'tấn công-phòng thủ' ghi?", o:["Lỗi tìm được và bản vá","Điểm số bạn bè","Màu sắc","Giờ giấc"], a:0},
    {q:"Bài học?", o:["Nhờ người khác thử giúp sản phẩm mạnh hơn","Giấu là tốt","Không cần thử","Tự khen là đủ"], a:0}
  ],

  "2.8.5": [
    {q:"Bước này ta?", o:["Hoàn thiện và viết thuyết minh","Bắt đầu lại","Xoá dự án","Nghỉ"], a:0},
    {q:"Thuyết minh 1 trang nêu?", o:["Giải vấn đề gì, cho ai, mô hình ra sao","Chỉ tên em","Chỉ ngày tháng","Không gì"], a:0},
    {q:"Nên viết thuyết minh thế nào?", o:["Đơn giản, dễ hiểu, có ví dụ","Thật khó hiểu","Càng dài càng tốt","Toàn thuật ngữ"], a:0},
    {q:"'Đóng gói' dự án nghĩa là?", o:["Hoàn thiện thành sản phẩm gọn gàng","Bỏ vào hộp thật","Xoá bớt","Giấu đi"], a:0},
    {q:"Thuyết minh giúp người khác?", o:["Nắm nhanh dự án","Bối rối","Không quan tâm","Chê bai"], a:0},
    {q:"Nên nêu độ chính xác của mô hình không?", o:["Có, để người đọc biết","Không bao giờ","Giấu đi","Bịa cho cao"], a:0},
    {q:"Kèm ví dụ trong thuyết minh giúp?", o:["Dễ hiểu hơn","Rối hơn","Dài vô ích","Không tác dụng"], a:0},
    {q:"Sản phẩm hoàn chỉnh gồm?", o:["Mô hình + thuyết minh","Chỉ ý tưởng","Chỉ tên","Không gì"], a:0},
    {q:"Viết cho ai đọc?", o:["Người chưa biết dự án cũng hiểu","Chỉ mình em","Chỉ máy","Không ai"], a:0},
    {q:"Bài học?", o:["Hoàn thiện và trình bày rõ ràng","Làm dở dang","Giấu thông tin","Viết khó hiểu"], a:0}
  ],

  "2.8.6": [
    {q:"Demo Day Level 2 gồm?", o:["Trình bày dự án + bài test cuối level","Chỉ nghỉ ngơi","Chỉ chơi game","Không gì"], a:0},
    {q:"Trình bày nên kể mạch?", o:["Vấn đề → dữ liệu → mô hình → kết quả","Ngẫu nhiên","Chỉ khoe","Không mạch"], a:0},
    {q:"Nên cho mọi người xem?", o:["Demo thật","Chỉ nói suông","Không gì","Một bức ảnh"], a:0},
    {q:"Chuẩn bị gì cho phần hỏi đáp?", o:["1-2 câu trả lời cho câu hỏi hay gặp","Không chuẩn bị","Trốn tránh","Đọc nguyên bài"], a:0},
    {q:"Trình bày dài khoảng?", o:["5 phút","5 giờ","Cả ngày","10 giây"], a:0},
    {q:"'Kết quả' trong bài trình bày là?", o:["Độ chính xác, điều học được","Màu slide","Tên dự án","Giờ nộp"], a:0},
    {q:"Trình bày tốt cần?", o:["Mạch lạc, tự tin","Nói lan man","Dùng từ khó","Không nhìn ai"], a:0},
    {q:"Bài test cuối level để?", o:["Xác nhận đủ năng lực qua level","Phạt em","Cho vui","Không để làm gì"], a:0},
    {q:"Demo thật cho thấy?", o:["Mô hình hoạt động","Chỉ lý thuyết","Không gì","Một tấm ảnh"], a:0},
    {q:"Hoàn thành Level 2 giúp em?", o:["Hiểu và dùng AI có trách nhiệm hơn","Quên hết","Sợ AI","Không đổi"], a:0}
  ]

});

/* ===== QUIZ — MODULE 3.1 – 3.4 ===== */
Object.assign(window.LESSON_QUIZ, {

  "3.1.1": [
    {q:"Một sản phẩm tốt là thứ?", o:["Giải quyết vấn đề cho người khác","Chỉ mình em thích","Không ai dùng","Để trưng bày"], a:0},
    {q:"Chiếc ô giải quyết vấn đề gì?", o:["Mưa","Đói","Buồn ngủ","Nóng"], a:0},
    {q:"Sản phẩm bắt đầu từ?", o:["Một nhu cầu có thật","Một giấc mơ vô lý","Không gì","Sự may mắn"], a:0},
    {q:"Câu hỏi hữu ích khi nhìn đồ vật?", o:["Nó ra đời để giải quyết khó khăn gì?","Nó màu gì?","Nó nặng không?","Ai làm ra?"], a:0},
    {q:"App nhắc lịch giải quyết?", o:["Vấn đề hay quên","Vấn đề đói bụng","Vấn đề trời mưa","Không gì"], a:0},
    {q:"Sản phẩm nên phục vụ?", o:["Người dùng (người khác)","Chỉ bản thân","Không ai","Máy móc"], a:0},
    {q:"Điều gì làm nên sản phẩm?", o:["Giải một vấn đề thật","Trông đẹp là đủ","Nhiều tính năng vô ích","Đắt tiền"], a:0},
    {q:"Kể sản phẩm em dùng hằng ngày giúp?", o:["Hiểu sản phẩm giải vấn đề gì","Khoe khoang","Tốn thời gian","Không gì"], a:0},
    {q:"Sản phẩm chỉ mình em thích thì?", o:["Chưa chắc hữu ích cho người khác","Chắc chắn thành công","Là tốt nhất","Bán chạy"], a:0},
    {q:"Bài học?", o:["Sản phẩm giải quyết vấn đề cho người dùng","Sản phẩm để đẹp","Không cần người dùng","Càng phức tạp càng tốt"], a:0}
  ],

  "3.1.2": [
    {q:"Ý tưởng hay bắt đầu từ?", o:["Săn vấn đề quanh em","Ngồi chờ","Chép của người khác","May mắn"], a:0},
    {q:"'Săn vấn đề' nghĩa là?", o:["Quan sát khó khăn của người quanh mình","Đi săn thú","Tìm kho báu","Chơi trốn tìm"], a:0},
    {q:"Nên quan sát ở đâu?", o:["Nhà, lớp, khu phố","Chỉ trên tivi","Không đâu cả","Trên mặt trăng"], a:0},
    {q:"Nên để ý điều gì?", o:["Ai gặp khó gì, chỗ nào khó chịu","Ai giàu nhất","Trời màu gì","Giờ ăn cơm"], a:0},
    {q:"'Sổ săn vấn đề' để?", o:["Ghi mọi khó khăn quan sát được","Vẽ tranh","Chép bài","Trang trí"], a:0},
    {q:"Càng ghi nhiều vấn đề thì?", o:["Càng nhiều lựa chọn để chọn","Càng rối vô ích","Càng tệ","Không đổi"], a:0},
    {q:"Vấn đề tốt là vấn đề?", o:["Có thật, ai đó đang gặp","Tưởng tượng","Không ai gặp","Không giải được"], a:0},
    {q:"Quan sát giúp em?", o:["Tìm ra vấn đề đáng giải","Bỏ lỡ cơ hội","Không thấy gì","Mất thời gian"], a:0},
    {q:"Nên ghi bao nhiêu vấn đề?", o:["Càng nhiều càng tốt (ví dụ 10)","Đúng 1","Không ghi","Không quan trọng"], a:0},
    {q:"Bài học?", o:["Ý tưởng đến từ quan sát khó khăn thật","Ngồi nghĩ vu vơ","Chép mạng","Đợi may mắn"], a:0}
  ],

  "3.1.3": [
    {q:"Nhiều ý tưởng thì?", o:["Chưa chắc đã hay, cần lọc","Chắc chắn hay hết","Đều vô dụng","Không cần lọc"], a:0},
    {q:"Ba tiêu chí lọc ý tưởng?", o:["Có thật? Làm nổi? Em thích?","Đẹp? Đắt? Lạ?","To? Nhỏ? Nhanh?","Không có tiêu chí"], a:0},
    {q:"'Làm nổi không?' nghĩa là?", o:["Vừa sức em","Nổi trên nước","To hay nhỏ","Đắt hay rẻ"], a:0},
    {q:"Nên brainstorm thế nào?", o:["Thật rộng trước, rồi mới lọc","Chỉ 1 ý rồi thôi","Không nghĩ gì","Chê hết"], a:0},
    {q:"Khi brainstorm, không nên?", o:["Vội chê ý tưởng nào","Nghĩ nhiều ý","Ghi lại hết","Cởi mở"], a:0},
    {q:"'Em có thích không?' quan trọng vì?", o:["Đủ hứng thú để theo đuổi","Cho vui","Không lý do","Để khoe"], a:0},
    {q:"Từ 10 ý tưởng nên lọc còn?", o:["3 ý có lý do rõ ràng","Giữ hết 10","Bỏ hết","Chỉ 1 ngẫu nhiên"], a:0},
    {q:"Ý tưởng 'có thật' nghĩa là?", o:["Giải vấn đề thật sự tồn tại","Tưởng tượng","Không ai cần","Vô lý"], a:0},
    {q:"Lọc ý tưởng giúp?", o:["Tập trung vào ý đáng làm","Bỏ lỡ ý hay","Rối hơn","Không đổi"], a:0},
    {q:"Bài học?", o:["Nghĩ rộng rồi lọc theo tiêu chí","Chọn bừa","Không lọc","Giữ tất cả"], a:0}
  ],

  "3.1.4": [
    {q:"Đến lúc này cần?", o:["Chốt một hướng đi theo đuổi","Đổi ý liên tục","Bỏ cuộc","Chọn hết"], a:0},
    {q:"Cam kết đề tài nên nêu?", o:["Vấn đề, ai gặp, vì sao chọn","Chỉ tên em","Chỉ màu sắc","Không gì"], a:0},
    {q:"Đề tài này là?", o:["Kim chỉ nam cho mọi bước sau","Không quan trọng","Có thể bỏ bất cứ lúc nào","Chỉ để nộp"], a:0},
    {q:"Nên chọn vấn đề?", o:["Em thật sự quan tâm","Người khác chọn hộ","Không liên quan","Không giải được"], a:0},
    {q:"Chọn vấn đề mình quan tâm giúp?", o:["Có động lực đi đến cùng","Nhanh chán","Không đổi","Gây rối"], a:0},
    {q:"'Ai gặp' vấn đề là?", o:["Người dùng mục tiêu","Không ai","Chỉ em","Máy tính"], a:0},
    {q:"Bản cam kết dài khoảng?", o:["1 trang","100 trang","Không viết","1 dòng"], a:0},
    {q:"Sau khi chốt đề tài, ta?", o:["Bắt đầu tìm hiểu người dùng","Nộp bài luôn","Bỏ dở","Chọn lại"], a:0},
    {q:"Vì sao cần nêu 'vì sao chọn'?", o:["Để rõ động cơ và giữ hướng","Cho dài","Không lý do","Để khoe"], a:0},
    {q:"Bài học?", o:["Chốt đề tài rõ ràng để theo đuổi","Không cần chốt","Đổi liên tục","Chọn bừa"], a:0}
  ],

  "3.2.1": [
    {q:"Điều em nghĩ người dùng cần?", o:["Thường khác điều họ thật sự cần","Luôn đúng","Không cần biết","Giống hệt"], a:0},
    {q:"Nhiều sản phẩm thất bại vì?", o:["Người làm chỉ đoán, không hỏi","Quá tốt","Quá rẻ","Quá đẹp"], a:0},
    {q:"Hỏi người thật giúp?", o:["Tránh làm nhầm","Mất thời gian vô ích","Rối hơn","Không lợi ích"], a:0},
    {q:"Thử đoán rồi hỏi thật để?", o:["Thấy khác biệt giữa đoán và thực tế","Khoe","Cho vui","Không gì"], a:0},
    {q:"Nên dựa vào đâu để làm sản phẩm?", o:["Nhu cầu thật của người dùng","Cảm giác của mình","May mắn","Ý người lạ"], a:0},
    {q:"Chỉ đoán mà không hỏi thì?", o:["Dễ làm sai thứ người ta cần","Luôn đúng","Nhanh và tốt","Không sao"], a:0},
    {q:"Người dùng là?", o:["Người sẽ dùng sản phẩm","Chính em","Máy tính","Không ai"], a:0},
    {q:"Vì sao cần lắng nghe người dùng?", o:["Để làm đúng thứ họ cần","Cho lịch sự","Không lý do","Để khoe"], a:0},
    {q:"Bài học của module này?", o:["Hỏi người thật thay vì chỉ đoán","Đoán là đủ","Không cần hỏi ai","Tự quyết hết"], a:0},
    {q:"Kết quả khi hỏi thật thường?", o:["Bất ngờ, khác điều mình nghĩ","Y hệt điều mình đoán","Vô nghĩa","Không có"], a:0}
  ],

  "3.2.2": [
    {q:"Câu hỏi mở giúp?", o:["Thu được nhiều thông tin","Chỉ có/không","Ít thông tin","Không gì"], a:0},
    {q:"Nên tránh loại câu hỏi nào?", o:["Câu hỏi mớm (gợi ý câu trả lời)","Câu hỏi mở","Câu về trải nghiệm","Câu rõ ràng"], a:0},
    {q:"Ví dụ câu hỏi mớm?", o:["Bạn thấy cái này tiện đúng không?","Bạn thường gặp khó gì khi...?","Kể em nghe về...","Vì sao vậy?"], a:0},
    {q:"Nên hỏi về?", o:["Trải nghiệm thật đã xảy ra","Phỏng đoán tương lai xa","Điều không liên quan","Cảm giác mơ hồ"], a:0},
    {q:"Câu hỏi đóng chỉ cho câu trả lời?", o:["Có/không, ngắn","Rất chi tiết","Nhiều ý","Bất ngờ"], a:0},
    {q:"Cách đặt câu hỏi ảnh hưởng?", o:["Chất lượng thông tin thu được","Màu sắc","Giờ giấc","Không gì"], a:0},
    {q:"Chuyển câu hỏi mớm thành mở là?", o:["Kỹ năng phỏng vấn tốt","Vô ích","Làm rối","Không cần"], a:0},
    {q:"Sau câu trả lời hay, nên hỏi?", o:["Vì sao vậy?","Thôi đủ rồi","Không hỏi thêm","Đổi chủ đề"], a:0},
    {q:"Câu hỏi mở thường bắt đầu bằng?", o:["Như thế nào, vì sao, kể...","Đúng không, phải không","Có... không","Được chứ"], a:0},
    {q:"Bài học?", o:["Hỏi mở, không mớm để hiểu thật","Hỏi mớm cho nhanh","Chỉ hỏi có/không","Không cần hỏi"], a:0}
  ],

  "3.2.3": [
    {q:"Phỏng vấn là kỹ năng cần?", o:["Luyện tập","Bẩm sinh","May mắn","Không học được"], a:0},
    {q:"Khi luyện, nên tập gì?", o:["Lắng nghe và ghi chép nhanh","Nói thật nhiều","Ngắt lời liên tục","Không nghe"], a:0},
    {q:"Nên ghi chép thế nào?", o:["Ghi ý chính","Chép từng chữ","Không ghi","Vẽ tranh"], a:0},
    {q:"Đóng vai hỏi-đáp trong lớp giúp?", o:["Luyện trước khi phỏng vấn thật","Cho vui vô ích","Mất thời gian","Không gì"], a:0},
    {q:"Sau câu trả lời hay, nên?", o:["Hỏi tiếp 'Vì sao?'","Chuyển chủ đề ngay","Kết thúc","Im lặng"], a:0},
    {q:"Lắng nghe tốt nghĩa là?", o:["Chú ý và không ngắt lời","Nói át người kia","Nghĩ việc khác","Bỏ đi"], a:0},
    {q:"Ghi ý chính thay vì từng chữ vì?", o:["Kịp theo cuộc trò chuyện","Cho đẹp","Tốn giấy","Không lý do"], a:0},
    {q:"Phỏng vấn 1 bạn 10 phút để?", o:["Luyện kỹ năng thu thập ý chính","Làm phiền bạn","Cho vui","Không gì"], a:0},
    {q:"Kỹ năng phỏng vấn giúp?", o:["Hiểu người dùng sâu hơn","Không lợi ích","Rối hơn","Mất bạn"], a:0},
    {q:"Bài học?", o:["Luyện lắng nghe và hỏi để phỏng vấn tốt","Nói nhiều là giỏi","Không cần luyện","Chép câu trả lời"], a:0}
  ],

  "3.2.4": [
    {q:"Phỏng vấn người thật số 1 là?", o:["Người ngoài lớp, về vấn đề đã chọn","Chính em","Con mèo","Máy tính"], a:0},
    {q:"Nên ghi lại gì?", o:["Họ gặp khó ở đâu, đang xoay xở thế nào","Màu áo họ","Giờ họ ăn","Không gì"], a:0},
    {q:"Trước khi ghi chép, nên?", o:["Xin phép","Ghi lén","Không cần gì","Bỏ qua"], a:0},
    {q:"Sau phỏng vấn nên?", o:["Cảm ơn","Bỏ đi ngay","Chê bai","Không nói gì"], a:0},
    {q:"Câu nói đáng chú ý nên?", o:["Ghi lại","Bỏ qua","Sửa lại","Quên đi"], a:0},
    {q:"Biên bản phỏng vấn là?", o:["Ghi chép nội dung cuộc phỏng vấn","Một bức tranh","Một mật khẩu","Một trò chơi"], a:0},
    {q:"Phỏng vấn người ngoài lớp giúp?", o:["Có góc nhìn thật về vấn đề","Không lợi ích","Rối hơn","Mất thời gian"], a:0},
    {q:"Nên hỏi về?", o:["Trải nghiệm thật của họ","Chuyện không liên quan","Đời tư riêng nhạy cảm","Bí mật"], a:0},
    {q:"Thái độ khi phỏng vấn?", o:["Lịch sự, tôn trọng","Vội vàng","Ngắt lời","Coi thường"], a:0},
    {q:"Bài học?", o:["Thu thập thông tin thật từ người dùng","Tự bịa","Chỉ đoán","Không cần"], a:0}
  ],

  "3.2.5": [
    {q:"Nên phỏng vấn thêm bao nhiêu người?", o:["2-3 người nữa","Không ai","100 người ngay","Chỉ 1"], a:0},
    {q:"Khi phỏng vấn nhiều người, để ý?", o:["Điều gì lặp lại","Màu áo","Giọng nói","Chiều cao"], a:0},
    {q:"Nhiều người cùng nói một khó khăn là?", o:["Tín hiệu mạnh đáng giải quyết","Ngẫu nhiên","Không quan trọng","Sai"], a:0},
    {q:"Nên ghi chú gì?", o:["Điểm giống nhau giữa các cuộc","Màu tường","Giờ giấc","Không gì"], a:0},
    {q:"Điểm lặp lại cho biết?", o:["Nhu cầu chung, thật","Điều hiếm gặp","Không đáng quan tâm","Chuyện riêng"], a:0},
    {q:"Vì sao cần nhiều cuộc phỏng vấn?", o:["Để thấy điều chung, không dựa 1 ý kiến","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Nếu chỉ một người nói, có thể?", o:["Chưa chắc là nhu cầu chung","Chắc chắn phổ biến","Bỏ qua vấn đề","Kết luận ngay"], a:0},
    {q:"Ghi chú điểm chung giúp?", o:["Tìm ra vấn đề đáng giải","Rối hơn","Không lợi ích","Mất dữ liệu"], a:0},
    {q:"Thêm phỏng vấn giúp?", o:["Hiểu vấn đề chắc chắn hơn","Kém tin hơn","Không đổi","Nhầm lẫn"], a:0},
    {q:"Bài học?", o:["Tìm điểm lặp lại qua nhiều cuộc phỏng vấn","Một cuộc là đủ","Không cần chú ý","Tự đoán"], a:0}
  ],

  "3.2.6": [
    {q:"Insight là?", o:["Một điều bất ngờ, sâu sắc rút ra","Một con số","Một bức tranh","Một mật khẩu"], a:0},
    {q:"Insight thường là?", o:["Điều em không ngờ tới","Điều ai cũng biết","Vô nghĩa","Sai"], a:0},
    {q:"Insight tốt thường?", o:["Chỉ ra hướng giải pháp hay","Làm rối","Không giúp gì","Gây hại"], a:0},
    {q:"Insight đến từ?", o:["Phân tích các cuộc phỏng vấn","Đoán bừa","Chép mạng","May mắn"], a:0},
    {q:"Insight tốt khiến em?", o:["Thốt lên 'à, thì ra là vậy!'","Buồn ngủ","Chán","Không cảm giác"], a:0},
    {q:"Insight KHÔNG phải là?", o:["Điều hiển nhiên ai cũng biết","Điều bất ngờ","Điều sâu sắc","Điều đáng giải"], a:0},
    {q:"'1 trang insight' ghi?", o:["Điều bất ngờ đáng giải quyết","Toàn bộ phỏng vấn","Màu sắc","Giờ giấc"], a:0},
    {q:"Từ 3 cuộc phỏng vấn tìm ra?", o:["1 insight đáng giá","10 sản phẩm","Không gì","Nhiều tiền"], a:0},
    {q:"Insight giúp bước tiếp theo?", o:["Nghĩ ra giải pháp đúng hướng","Bỏ cuộc","Lạc đề","Không đổi"], a:0},
    {q:"Bài học?", o:["Rút insight từ lắng nghe người dùng","Tự nghĩ ra","Chép của bạn","Đoán bừa"], a:0}
  ],

  "3.3.1": [
    {q:"Từ insight, có?", o:["Nhiều cách giải quyết","Chỉ 1 cách duy nhất","Không cách nào","Cách của người khác"], a:0},
    {q:"Nên chọn cách?", o:["Nhỏ nhất mà vẫn hữu ích","Phức tạp nhất","Đắt nhất","Lạ nhất"], a:0},
    {q:"Cách nhỏ mà hữu ích thì?", o:["Dễ làm và dễ thử","Khó làm","Vô dụng","Không thử được"], a:0},
    {q:"Nên tập gì khi chọn giải pháp?", o:["Bảo vệ lựa chọn của mình","Chọn bừa","Không giải thích","Đổi liên tục"], a:0},
    {q:"'Bảo vệ lựa chọn' nghĩa là?", o:["Giải thích vì sao chọn cách đó","Cãi nhau","Giấu lý do","Không nói gì"], a:0},
    {q:"Nghĩ nhiều giải pháp rồi?", o:["Chọn 1 để làm","Làm hết cùng lúc","Bỏ hết","Không chọn"], a:0},
    {q:"Giải pháp lớn ngay từ đầu thường?", o:["Khó làm, khó thử","Tốt nhất","Nhanh nhất","An toàn nhất"], a:0},
    {q:"Vì sao chọn giải pháp nhỏ trước?", o:["Thử nhanh, học nhanh","Cho oai","Tốn thời gian","Không lý do"], a:0},
    {q:"Có nên nghĩ nhiều cách trước khi chọn?", o:["Có, để có lựa chọn tốt","Không, chọn ngay cách đầu","Không nghĩ gì","Chép của bạn"], a:0},
    {q:"Bài học?", o:["Chọn giải pháp nhỏ, hữu ích và bảo vệ được","Chọn cái to nhất","Không chọn","Làm hết"], a:0}
  ],

  "3.3.2": [
    {q:"MVP là?", o:["Phiên bản nhỏ nhất mà chạy được","Bản hoàn hảo nhất","Bản đắt nhất","Bản không chạy"], a:0},
    {q:"MVP nên?", o:["Bỏ hết tính năng 'cho vui'","Có mọi tính năng","Càng nhiều càng tốt","Rất phức tạp"], a:0},
    {q:"MVP giữ lại phần?", o:["Thật sự cần (cốt lõi)","Trang trí","Không cần thiết","Ngẫu nhiên"], a:0},
    {q:"Mục đích MVP?", o:["Thử với người dùng sớm","Khoe đẹp","Bán đắt","Không mục đích"], a:0},
    {q:"Từ 10 tính năng, MVP nên?", o:["Cắt còn 3 cốt lõi","Giữ hết 10","Bỏ hết","Thêm 20"], a:0},
    {q:"MVP viết tắt của?", o:["Sản phẩm khả dụng tối thiểu","Máy Vẽ Phẳng","Một Vài Phần","Không gì"], a:0},
    {q:"Vì sao làm MVP trước?", o:["Thử nhanh, học từ người dùng","Cho oai","Tốn công vô ích","Không lý do"], a:0},
    {q:"Tính năng 'cho vui' nên?", o:["Để sau","Làm trước tiên","Là quan trọng nhất","Không bao giờ bỏ"], a:0},
    {q:"MVP 'nhỏ mà chạy được' nghĩa là?", o:["Ít tính năng nhưng dùng được","Nhiều tính năng nhưng lỗi","Đẹp mà không chạy","Không có gì"], a:0},
    {q:"Bài học?", o:["Bắt đầu nhỏ với phần cốt lõi","Làm thật to ngay","Thêm mọi tính năng","Không làm gì"], a:0}
  ],

  "3.3.3": [
    {q:"Wireframe là?", o:["Bản phác giấy các màn hình","Sản phẩm hoàn chỉnh","Một bức ảnh chụp","Một mật khẩu"], a:0},
    {q:"Wireframe vẽ gì?", o:["Màn hình, nút bấm, luồng sử dụng","Chỉ màu sắc đẹp","Chỉ tên em","Không gì"], a:0},
    {q:"Nên vẽ wireframe thế nào?", o:["Vẽ tay nhanh","Vẽ thật chi tiết như thật","Không vẽ","Vẽ bằng máy phức tạp"], a:0},
    {q:"Vẽ tay có lợi gì?", o:["Dễ sửa hơn làm rồi mới đổi","Đẹp hơn","Chậm hơn","Không lợi ích"], a:0},
    {q:"'Luồng sử dụng' là?", o:["Bấm vào thì đi tới đâu","Màu nền","Cỡ chữ","Tên file"], a:0},
    {q:"Wireframe giúp?", o:["Hình dung sản phẩm trước khi làm","Bán sản phẩm","Không giúp gì","Làm rối"], a:0},
    {q:"Nên có bao nhiêu màn hình trong wireframe?", o:["Vài màn hình chính (3-5)","100 màn hình","0 màn hình","Chỉ 1 nút"], a:0},
    {q:"Wireframe là bước?", o:["Trước khi làm thật","Sau khi ra mắt","Không cần","Cuối cùng"], a:0},
    {q:"Sửa wireframe so với sửa sản phẩm thật?", o:["Rẻ và nhanh hơn","Đắt hơn","Y hệt","Không sửa được"], a:0},
    {q:"Bài học?", o:["Phác trên giấy trước, làm thật sau","Làm thật ngay","Không cần phác","Vẽ càng đẹp càng tốt"], a:0}
  ],

  "3.3.4": [
    {q:"Nên làm gì trước khi tốn công làm thật?", o:["Cho người dùng duyệt bản vẽ","Làm luôn","Giấu bản vẽ","Bỏ qua"], a:0},
    {q:"Đưa wireframe cho mấy người xem?", o:["2 người","0 người","Cả trường","Chỉ mình em"], a:0},
    {q:"Nên hỏi họ điều gì?", o:["Có hiểu và thấy hữu ích không","Họ mấy tuổi","Họ thích màu gì","Giờ ăn cơm"], a:0},
    {q:"Sau khi nghe góp ý?", o:["Sửa theo góp ý","Bỏ qua","Cãi lại","Giữ nguyên"], a:0},
    {q:"Sửa trên giấy so với sản phẩm thật?", o:["Rẻ và nhanh hơn","Đắt hơn","Không khác","Khó hơn"], a:0},
    {q:"Duyệt bản vẽ sớm giúp?", o:["Phát hiện vấn đề trước khi làm","Mất thời gian","Không lợi ích","Làm chậm dự án"], a:0},
    {q:"'Wireframe bản 2' là?", o:["Bản đã sửa theo góp ý","Bản đầu tiên","Sản phẩm cuối","Không có gì"], a:0},
    {q:"Nếu người xem không hiểu wireframe?", o:["Cần chỉnh cho rõ hơn","Họ dốt","Bỏ mặc","Không sao"], a:0},
    {q:"Danh sách thay đổi giúp?", o:["Biết đã cải thiện gì","Trang trí","Tốn giấy","Không gì"], a:0},
    {q:"Bài học?", o:["Hỏi ý người dùng sớm và sửa","Tự quyết hết","Không hỏi ai","Làm xong mới hỏi"], a:0}
  ],

  "3.4.1": [
    {q:"Python là?", o:["Ngôn ngữ lập trình viết bằng chữ","Một con rắn thật","Một trò chơi","Một loại chuột"], a:0},
    {q:"Lệnh print(...) để?", o:["In ra màn hình","Tắt máy","Xoá file","Đổi màu"], a:0},
    {q:"Biến trong Python là?", o:["Hộp lưu giá trị","Một hình vẽ","Một âm thanh","Một màu"], a:0},
    {q:"Python so với Scratch?", o:["Thay khối kéo-thả bằng chữ","Hoàn toàn khác ý tưởng","Không liên quan","Khó hơn triệu lần"], a:0},
    {q:"ten = 'An' nghĩa là?", o:["Gán 'An' cho biến ten","In chữ An","Xoá An","Tạo file An"], a:0},
    {q:"Python có ưu điểm?", o:["Mạnh mà dễ đọc","Rất khó đọc","Không làm được gì","Chỉ vẽ được"], a:0},
    {q:"Ý tưởng lập trình trong Python và Scratch?", o:["Giống nhau về cơ bản","Hoàn toàn khác","Không liên quan","Ngược nhau"], a:0},
    {q:"Chương trình chào hỏi có tên và tuổi dùng?", o:["Biến và print","Chỉ vẽ","Chỉ âm thanh","Không gì"], a:0},
    {q:"Viết code trong Python bằng?", o:["Gõ chữ (dòng lệnh)","Kéo thả khối","Vẽ tay","Nói"], a:0},
    {q:"Bài học?", o:["Làm quen in, biến, phép tính trong Python","Học thuộc lòng","Bỏ Scratch","Không cần hiểu"], a:0}
  ],

  "3.4.2": [
    {q:"if/else trong Python giống?", o:["Khối 'Nếu... thì...' của Scratch","Vòng lặp","Biến","Print"], a:0},
    {q:"if kiểm tra?", o:["Một điều kiện Đúng/Sai","Màu sắc","Âm thanh","Kích thước"], a:0},
    {q:"Ví dụ if?", o:["Nếu điểm ≥ 8 thì in 'Giỏi'","In mọi lúc","Xoá file","Tắt máy"], a:0},
    {q:"Python dùng gì để biết lệnh thuộc nhánh nào?", o:["Thụt lề","Dấu chấm","Màu chữ","Số dòng"], a:0},
    {q:"else nghĩa là?", o:["Ngược lại (nếu không)","Bắt đầu","Kết thúc","Lặp"], a:0},
    {q:"Viết sai thụt lề trong Python sẽ?", o:["Gây lỗi","Không sao","Chạy nhanh hơn","Đẹp hơn"], a:0},
    {q:"Chương trình phân loại điểm ra lời khen dùng?", o:["if/else","Chỉ print","Chỉ biến","Vòng lặp vô hạn"], a:0},
    {q:"Điều kiện sai thì chạy?", o:["Nhánh else","Nhánh if","Cả hai","Không nhánh nào"], a:0},
    {q:"if/else giúp chương trình?", o:["Biết chọn lựa theo tình huống","Đơn điệu","Chậm hơn","Hỏng"], a:0},
    {q:"Bài học?", o:["Chuyển if/else từ Scratch sang Python","Bỏ điều kiện","Không cần thụt lề","Viết tuỳ ý"], a:0}
  ],

  "3.4.3": [
    {q:"Vòng lặp trong Python gồm?", o:["for và while","chỉ print","chỉ if","chỉ biến"], a:0},
    {q:"for thường dùng để?", o:["Lặp qua từng phần tử danh sách","Tắt máy","Xoá file","Đổi màu"], a:0},
    {q:"while lặp khi nào?", o:["Chừng nào điều kiện còn đúng","Đúng 1 lần","Không bao giờ","Mãi mãi không dừng được"], a:0},
    {q:"In bảng cửu chương là bài luyện?", o:["Vòng lặp","Biến đơn","Print một dòng","Điều kiện"], a:0},
    {q:"Vòng lặp giúp?", o:["Lặp mà không chép code","Chép nhiều hơn","Rối hơn","Hỏng máy"], a:0},
    {q:"for lặp qua danh sách nghĩa là?", o:["Duyệt từng phần tử","Xoá danh sách","In một lần","Tạo file"], a:0},
    {q:"while cần chú ý gì?", o:["Điều kiện phải có lúc sai để dừng","Không cần điều kiện","Luôn đúng","Không quan trọng"], a:0},
    {q:"Vòng lặp trong Python và Scratch?", o:["Cùng ý tưởng lặp lại","Khác hoàn toàn","Không liên quan","Ngược nhau"], a:0},
    {q:"Lặp 5 lần in 'Xin chào' sẽ?", o:["In 'Xin chào' 5 lần","In 1 lần","Không in","Báo lỗi"], a:0},
    {q:"Bài học?", o:["Dùng for/while để lặp","Không dùng vòng lặp","Chép tay 100 lần","Bỏ lặp"], a:0}
  ],

  "3.4.4": [
    {q:"Danh sách (list) dùng để?", o:["Lưu nhiều thứ","Lưu 1 thứ","Tắt máy","Vẽ tranh"], a:0},
    {q:"Chuỗi (string) là?", o:["Dãy ký tự","Dãy số cộng","Một hình","Một âm thanh"], a:0},
    {q:"Với danh sách, em có thể?", o:["Thêm, đếm, tìm kiếm","Chỉ xem","Không làm gì","Chỉ xoá"], a:0},
    {q:"Ví dụ dùng danh sách?", o:["Sổ việc cần làm","Một con số","Một màu","Một âm"], a:0},
    {q:"Nên đặt tên biến danh sách?", o:["Theo số nhiều, ví dụ viec_can_lam","Ngẫu nhiên","Toàn số","Bỏ trống"], a:0},
    {q:"Đếm phần tử trong danh sách để?", o:["Biết có bao nhiêu mục","Đổi màu","Tắt máy","Vẽ"], a:0},
    {q:"Tìm kiếm trong danh sách giúp?", o:["Biết một mục có trong đó không","Xoá danh sách","In tất cả","Không gì"], a:0},
    {q:"Chuỗi 'Xin chao' gồm?", o:["Các ký tự ghép lại","Các số","Một hình","Một màu"], a:0},
    {q:"Danh sách giúp quản lý?", o:["Nhiều dữ liệu gọn gàng","Một dữ liệu","Không gì","Chỉ số 0"], a:0},
    {q:"Bài học?", o:["Dùng danh sách và chuỗi để lưu, tìm","Không cần danh sách","Chỉ dùng biến đơn","Bỏ dữ liệu"], a:0}
  ],

  "3.4.5": [
    {q:"Hàm (function) giúp?", o:["Gói code để dùng nhiều lần","Xoá code","Tắt máy","Đổi màu"], a:0},
    {q:"Viết hàm một lần thì?", o:["Gọi được nhiều lần","Chỉ dùng 1 lần","Không dùng được","Phải viết lại mỗi lần"], a:0},
    {q:"Tham số của hàm để?", o:["Hàm làm việc với dữ liệu khác nhau","Trang trí","Làm chậm","Không để gì"], a:0},
    {q:"Khi nào nên gói thành hàm?", o:["Khi code lặp lại nhiều lần","Không bao giờ","Chỉ 1 dòng","Khi rảnh"], a:0},
    {q:"Hàm giúp code?", o:["Gọn và dễ đọc","Dài hơn","Rối hơn","Hỏng"], a:0},
    {q:"Gói 3 đoạn code lặp lại thành?", o:["3 hàm","1 biến","1 danh sách","Không gì"], a:0},
    {q:"Truyền tham số nghĩa là?", o:["Đưa dữ liệu vào cho hàm dùng","Xoá hàm","Đổi tên hàm","In hàm"], a:0},
    {q:"Hàm được 'gọi' nghĩa là?", o:["Chạy hàm khi cần","Xoá hàm","Vẽ hàm","Tắt hàm"], a:0},
    {q:"Lợi ích lớn của hàm?", o:["Tránh lặp lại code","Tốn công hơn","Không lợi ích","Làm rối"], a:0},
    {q:"Bài học?", o:["Dùng hàm để tái sử dụng code","Chép code nhiều lần","Không dùng hàm","Bỏ code lặp"], a:0}
  ],

  "3.4.6": [
    {q:"AI có thể?", o:["Viết code","Không viết được gì","Chỉ vẽ","Chỉ hát"], a:0},
    {q:"Với code AI viết, em cần?", o:["Đọc hiểu để kiểm","Chép ngay không đọc","Tin tuyệt đối","Bỏ qua"], a:0},
    {q:"Đọc code AI để?", o:["Xem nó làm gì, tìm chỗ sai","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"AI viết code có luôn đúng không?", o:["Không, có thể sai","Luôn đúng","Không bao giờ chạy","Hoàn hảo"], a:0},
    {q:"Có nên chạy code lạ mà không hiểu?", o:["Không","Có","Luôn luôn","Nếu AI bảo"], a:0},
    {q:"Đọc từng dòng giúp?", o:["Hiểu code làm gì","Rối hơn","Không giúp","Mất thời gian"], a:0},
    {q:"Bắt lỗi trong code AI cho thấy?", o:["Cần kiểm tra code AI","AI hoàn hảo","Không cần đọc","Tin AI 100%"], a:0},
    {q:"Hiểu code rồi mới?", o:["Dùng","Xoá","Bỏ","In ra giấy"], a:0},
    {q:"AI là gì với việc lập trình?", o:["Trợ lý viết code","Người thay em hoàn toàn","Kẻ phá","Không liên quan"], a:0},
    {q:"Bài học?", o:["Đọc hiểu và kiểm code AI viết","Chép mù quáng","Tin tuyệt đối","Không đọc"], a:0}
  ],

  "3.4.7": [
    {q:"Khi code AI sai, em có thể?", o:["Nhờ AI sửa hoặc tự sửa tay","Bỏ cuộc","Xoá hết","Trách máy"], a:0},
    {q:"Nhờ AI sửa cần?", o:["Mô tả lỗi rõ ràng","Không nói gì","Quát AI","Tắt máy"], a:0},
    {q:"Tự sửa tay dùng?", o:["Kiến thức của em","May mắn","Đoán bừa","Chép mạng"], a:0},
    {q:"Nên so hai cách sửa để?", o:["Hiểu vì sao code chạy đúng","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Mô tả lỗi rõ giúp AI?", o:["Đề xuất bản vá đúng hơn","Bối rối","Bịa","Im lặng"], a:0},
    {q:"Sau khi AI đề xuất sửa, em nên?", o:["Kiểm tra bản sửa","Dùng ngay không kiểm","Bỏ qua","Xoá"], a:0},
    {q:"Hiểu vì sao code chạy đúng giúp?", o:["Em giỏi hơn, không chỉ 'cho nó chạy'","Không lợi ích","Rối hơn","Mất thời gian"], a:0},
    {q:"Làm code AI chạy đúng theo 2 con đường nghĩa là?", o:["Cả nhờ AI và tự sửa","Chỉ nhờ AI","Chỉ đoán","Không sửa"], a:0},
    {q:"Người quyết định code cuối là?", o:["Em","AI","Máy in","Con chuột"], a:0},
    {q:"Bài học?", o:["Biết sửa và cải tiến code (có AI hỗ trợ)","Chỉ chờ AI","Không sửa","Bỏ code"], a:0}
  ],

  "3.4.8": [
    {q:"Mini game console dùng?", o:["Tổng hợp biến, if/else, vòng lặp, hàm","Chỉ print","Chỉ 1 biến","Không gì"], a:0},
    {q:"Ví dụ mini game?", o:["Đoán số, oẳn tù tì","Vẽ tranh","Nghe nhạc","Nấu ăn"], a:0},
    {q:"'Console' nghĩa là?", o:["Chương trình chạy bằng chữ (dòng lệnh)","Máy chơi game xịn","Màn hình lớn","Loa"], a:0},
    {q:"Nên làm phần nào trước?", o:["Phần chơi được","Điểm số và lời nhắn đẹp","Không phần nào","Phần khó vô ích"], a:0},
    {q:"Game đoán số dùng?", o:["So sánh và vòng lặp","Chỉ vẽ","Chỉ âm thanh","Không gì"], a:0},
    {q:"Thêm điểm số sau khi?", o:["Game chơi được","Trước khi làm gì","Không bao giờ","Thay cho phần chơi"], a:0},
    {q:"Mini game giúp em?", o:["Vận dụng tổng hợp kiến thức Python","Quên bài","Chỉ chơi","Không học gì"], a:0},
    {q:"Oẳn tù tì với máy cần?", o:["if/else để so kết quả","Chỉ print","Chỉ biến","Vòng lặp vô hạn"], a:0},
    {q:"Hoàn thành mini game giúp em?", o:["Tự tin với Python","Sợ lập trình","Quên hết","Không đổi"], a:0},
    {q:"Bài học?", o:["Ghép mọi kiến thức vào 1 sản phẩm nhỏ","Học rời rạc","Không thực hành","Chỉ lý thuyết"], a:0}
  ]

});

/* ===== QUIZ — MODULE 3.5 – 3.8 ===== */
Object.assign(window.LESSON_QUIZ, {

  "3.5.1": [
    {q:"Có mấy cách chính để xây MVP?", o:["Vibe coding, no-code, code tay","Chỉ code tay","Chỉ vẽ","Không cách nào"], a:0},
    {q:"No-code nghĩa là?", o:["Ghép sẵn, nhanh, ít linh hoạt","Viết rất nhiều code","Không làm được gì","Chỉ vẽ"], a:0},
    {q:"Code tay có đặc điểm?", o:["Linh hoạt, cần kỹ năng","Không linh hoạt","Không cần học","Luôn dễ"], a:0},
    {q:"Vibe coding là?", o:["Mô tả ý muốn, AI phụ dựng","Không dùng máy","Chỉ vẽ tay","Chép mạng"], a:0},
    {q:"Nên chọn công cụ thế nào?", o:["Hợp sản phẩm và sức của em","Chọn cái 'oách nhất'","Chọn bừa","Cái đắt nhất"], a:0},
    {q:"Công cụ phù hợp giúp?", o:["Làm MVP hiệu quả","Rối hơn","Chậm hơn","Thất bại"], a:0},
    {q:"No-code phù hợp khi?", o:["Muốn làm nhanh, đơn giản","Cần cực kỳ linh hoạt","Không làm gì","Chỉ để khoe"], a:0},
    {q:"Nên có gì trước khi làm?", o:["Kế hoạch công cụ cho MVP","Không cần kế hoạch","Chép của bạn","Đợi may mắn"], a:0},
    {q:"Chọn công cụ 'oách nhất' mà không hợp thì?", o:["Có thể khó dùng, phản tác dụng","Luôn tốt nhất","Nhanh nhất","An toàn"], a:0},
    {q:"Bài học?", o:["Chọn công cụ phù hợp với sản phẩm và mình","Càng phức tạp càng tốt","Không cần chọn","Chọn ngẫu nhiên"], a:0}
  ],

  "3.5.2": [
    {q:"Bắt đầu xây MVP bằng?", o:["Dựng khung sản phẩm","Làm tính năng khó nhất","Trang trí","Ra mắt luôn"], a:0},
    {q:"Dựng khung theo?", o:["Wireframe đã vẽ","Cảm hứng bất chợt","Của người khác","Không theo gì"], a:0},
    {q:"Nên làm gì trước?", o:["Màn hình chính mở lên được","Mọi tính năng","Phần đẹp nhất","Không gì"], a:0},
    {q:"Có khung chạy được sớm giúp?", o:["Thấy tiến độ, giữ động lực","Nản hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Khung sản phẩm cần?", o:["Mở lên được","Hoàn hảo ngay","Đầy đủ tính năng","Đẹp nhất"], a:0},
    {q:"Tạo dự án là bước?", o:["Đầu tiên khi dựng khung","Cuối cùng","Không cần","Sau ra mắt"], a:0},
    {q:"Chưa cần gì ở bước dựng khung?", o:["Đầy đủ tính năng","Màn hình chính","Dự án","Khung cơ bản"], a:0},
    {q:"Khung là?", o:["Nền để thêm tính năng sau","Sản phẩm cuối","Đồ trang trí","Không quan trọng"], a:0},
    {q:"Vì sao có khung sớm là tốt?", o:["Có nền để phát triển tiếp","Cho oai","Tốn công","Không lý do"], a:0},
    {q:"Bài học?", o:["Dựng khung chạy được trước tiên","Trang trí trước","Làm tính năng khó trước","Ra mắt ngay"], a:0}
  ],

  "3.5.3": [
    {q:"Tính năng cốt lõi số 1 là?", o:["Phần quan trọng nhất","Phần trang trí","Phần cho vui","Phần dễ nhất"], a:0},
    {q:"Nó giải quyết?", o:["Đúng vấn đề chính","Vấn đề phụ","Không vấn đề nào","Vấn đề của người khác"], a:0},
    {q:"Nên làm cho nó?", o:["Chạy được đã, đẹp để sau","Đẹp trước","Không chạy cũng được","Bỏ qua"], a:0},
    {q:"Nếu tính năng lõi không chạy?", o:["Các thứ khác không cứu được sản phẩm","Vẫn ổn","Không sao","Tốt hơn"], a:0},
    {q:"Vì sao làm lõi trước?", o:["Nó quyết định giá trị sản phẩm","Cho oai","Vô ích","Không lý do"], a:0},
    {q:"'Cốt lõi' nghĩa là?", o:["Phần trung tâm, quan trọng nhất","Phần ngoài rìa","Phần trang trí","Phần thừa"], a:0},
    {q:"Tính năng 1 'demo được' nghĩa là?", o:["Cho người khác xem chạy thật","Chỉ ý tưởng","Không hoạt động","Trên giấy"], a:0},
    {q:"Đẹp nên làm khi nào?", o:["Sau khi lõi chạy","Trước lõi","Không bao giờ","Thay lõi"], a:0},
    {q:"Ưu tiên tính năng cốt lõi giúp?", o:["Sản phẩm giải đúng vấn đề","Rối hơn","Chậm hơn","Thất bại"], a:0},
    {q:"Bài học?", o:["Làm phần quan trọng nhất chạy trước","Trang trí trước","Làm phần phụ trước","Không ưu tiên"], a:0}
  ],

  "3.5.4": [
    {q:"Bước này làm?", o:["Tính năng cốt lõi số 2 và kết nối","Ra mắt","Xoá tính năng 1","Trang trí"], a:0},
    {q:"Cần bảo đảm gì?", o:["Hai tính năng phối hợp mượt","Chúng tách rời","Chỉ 1 cái chạy","Không kết nối"], a:0},
    {q:"Luồng sử dụng nên?", o:["Liền mạch từ đầu đến cuối","Đứt đoạn","Rối","Không có"], a:0},
    {q:"Nên thử gì?", o:["Đi hết một lượt như người dùng","Không thử","Chỉ nhìn","Bỏ qua"], a:0},
    {q:"Thử đi hết giúp?", o:["Phát hiện chỗ gãy","Che lỗi","Tốn thời gian","Không lợi ích"], a:0},
    {q:"Kết nối hai phần nghĩa là?", o:["Chúng hoạt động cùng nhau","Tách biệt hẳn","Xoá bớt","Không liên quan"], a:0},
    {q:"Nếu luồng bị gãy?", o:["Người dùng sẽ bị kẹt","Không sao","Tốt hơn","Nhanh hơn"], a:0},
    {q:"Tính năng 2 nên?", o:["Bổ trợ cho tính năng 1","Thay thế tính năng 1","Vô dụng","Không liên quan"], a:0},
    {q:"Thử như người dùng thật giúp?", o:["Thấy trải nghiệm thực tế","Cho vui","Không lợi ích","Làm chậm"], a:0},
    {q:"Bài học?", o:["Ghép các phần thành luồng mượt","Để rời rạc","Bỏ kết nối","Không thử"], a:0}
  ],

  "3.5.5": [
    {q:"Bước này thay?", o:["Dữ liệu giả bằng nội dung thật","Nội dung thật bằng giả","Xoá hết dữ liệu","Không đổi"], a:0},
    {q:"Nội dung thật giúp?", o:["Thấy sản phẩm gần thực tế","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Dữ liệu giả có thể?", o:["Che mất vấn đề thật","Tốt hơn","Không ảnh hưởng","Chính xác nhất"], a:0},
    {q:"Nên nhập thêm trường hợp nào?", o:["Trường hợp 'khó'","Chỉ dễ","Không nhập","Ngẫu nhiên vô nghĩa"], a:0},
    {q:"Trường hợp khó giúp?", o:["Xem sản phẩm xử lý ổn không","Che lỗi","Cho vui","Không gì"], a:0},
    {q:"'MVP có nội dung thật' nghĩa là?", o:["Dùng dữ liệu thật thay giả","Không có nội dung","Toàn dữ liệu giả","Trống rỗng"], a:0},
    {q:"Vì sao dùng nội dung thật?", o:["Gần với người dùng thật hơn","Cho khó","Tốn công vô ích","Không lý do"], a:0},
    {q:"Dữ liệu thật lộ ra?", o:["Vấn đề mà dữ liệu giả giấu","Không gì","Điểm mạnh giả","Màu sắc"], a:0},
    {q:"Nên thử sản phẩm với?", o:["Nội dung thật, cả trường hợp khó","Chỉ dữ liệu hoàn hảo","Không dữ liệu","Dữ liệu giả mãi"], a:0},
    {q:"Bài học?", o:["Đưa nội dung thật vào để kiểm nghiệm","Giữ dữ liệu giả","Không cần dữ liệu","Tránh trường hợp khó"], a:0}
  ],

  "3.5.6": [
    {q:"Dùng AI để debug hiệu quả cần?", o:["Mô tả lỗi rõ ràng","Không nói gì","Quát AI","Tắt máy"], a:0},
    {q:"Mô tả lỗi rõ gồm?", o:["Làm gì → mong đợi gì → thực tế ra sao","Chỉ tên em","Chỉ màu","Không gì"], a:0},
    {q:"Nên đưa gì cho AI khi có lỗi?", o:["Thông báo lỗi","Bức ảnh mèo","Bài hát","Không gì"], a:0},
    {q:"Sau khi AI đề xuất sửa, nên?", o:["Kiểm tra bản sửa","Dùng ngay không kiểm","Bỏ qua","Xoá code"], a:0},
    {q:"Nhật ký lỗi ghi?", o:["Lỗi gì, AI gợi ý gì, em quyết gì","Màu sắc","Giờ giấc","Không gì"], a:0},
    {q:"Debug nghĩa là?", o:["Tìm và sửa lỗi","Tạo lỗi","Xoá sản phẩm","Trang trí"], a:0},
    {q:"Mô tả lỗi mơ hồ khiến AI?", o:["Khó giúp đúng","Giúp tốt hơn","Không ảnh hưởng","Hoàn hảo"], a:0},
    {q:"Vì sao kiểm tra bản sửa của AI?", o:["Vì AI có thể sửa chưa đúng","AI luôn đúng","Cho vui","Không lý do"], a:0},
    {q:"Ghi nhật ký lỗi giúp?", o:["Học từ lỗi, không lặp lại","Tốn giấy","Không lợi ích","Che lỗi"], a:0},
    {q:"Bài học?", o:["Mô tả lỗi tốt và kiểm bản sửa","Giao hết cho AI","Không ghi gì","Che lỗi"], a:0}
  ],

  "3.5.7": [
    {q:"'Làm đẹp vừa đủ' nghĩa là?", o:["Dễ dùng quan trọng hơn hào nhoáng","Càng nhiều hiệu ứng càng tốt","Không cần đẹp","Chỉ cần đẹp"], a:0},
    {q:"Nên chọn gì cho giao diện?", o:["Màu, chữ, bố cục rõ ràng","Thật nhiều màu loè loẹt","Chữ khó đọc","Bố cục rối"], a:0},
    {q:"Nên tránh?", o:["Trang trí quá đà làm rối mắt","Bố cục rõ ràng","Chữ dễ đọc","Màu hài hoà"], a:0},
    {q:"Người dùng cần?", o:["Dễ hiểu, dễ bấm","Nhiều hiệu ứng","Màu chói","Rối rắm"], a:0},
    {q:"Đẹp mà khó dùng thì?", o:["Không tốt bằng dễ dùng","Tốt nhất","Không sao","Hoàn hảo"], a:0},
    {q:"'Vừa đủ' nghĩa là?", o:["Không thiếu, không thừa","Càng nhiều càng tốt","Bỏ hết","Thật cầu kỳ"], a:0},
    {q:"Bố cục rõ ràng giúp?", o:["Người dùng dễ thao tác","Rối hơn","Chậm hơn","Không lợi ích"], a:0},
    {q:"'MVP bản dùng thử được' nghĩa là?", o:["Đủ đẹp và chạy để người thử","Chỉ đẹp","Chỉ ý tưởng","Không chạy"], a:0},
    {q:"Trang trí quá đà gây?", o:["Rối mắt, khó dùng","Đẹp và tiện","Nhanh hơn","Không sao"], a:0},
    {q:"Bài học?", o:["Ưu tiên dễ dùng, đẹp vừa phải","Đẹp bằng mọi giá","Bỏ qua giao diện","Càng phức tạp càng hay"], a:0}
  ],

  "3.5.8": [
    {q:"Tổng duyệt nội bộ là?", o:["Cả lớp dùng thử chéo trước khi gặp người thật","Ra mắt luôn","Giấu sản phẩm","Xoá đi"], a:0},
    {q:"Mục đích tổng duyệt?", o:["Ghi lỗi lần cuối","Khoe","Cho vui","Không gì"], a:0},
    {q:"Nên ưu tiên sửa lỗi nào?", o:["Lỗi khiến người dùng không dùng tiếp được","Lỗi nhỏ về màu","Không sửa","Lỗi ít gặp"], a:0},
    {q:"Dùng thử chéo nghĩa là?", o:["Thử sản phẩm của nhau","Tự thử mình","Không thử","Chỉ coach thử"], a:0},
    {q:"Tổng duyệt giúp?", o:["Phát hiện lỗi trước khi gặp người thật","Che lỗi","Tốn thời gian","Không lợi ích"], a:0},
    {q:"Sau tổng duyệt, có?", o:["Bản sửa trước khi gặp người dùng thật","Sản phẩm y nguyên","Không gì","Bản cũ"], a:0},
    {q:"Vì sao thử trước khi ra mắt?", o:["Giảm lỗi khi người thật dùng","Cho oai","Không lý do","Tốn công"], a:0},
    {q:"Lỗi nghiêm trọng là lỗi?", o:["Khiến không dùng tiếp được","Chỉ về màu","Không ai thấy","Rất nhỏ"], a:0},
    {q:"Bạn bè dùng thử giúp?", o:["Thấy lỗi mình bỏ sót","Không lợi ích","Rối hơn","Che lỗi"], a:0},
    {q:"Bài học?", o:["Duyệt chéo và sửa lỗi trước khi ra mắt","Ra mắt ngay","Không thử","Giấu lỗi"], a:0}
  ],

  "3.6.1": [
    {q:"Test với người dùng cần?", o:["Kịch bản rõ ràng","Không chuẩn bị","Giấu sản phẩm","Ra mắt luôn"], a:0},
    {q:"Kịch bản test xác định?", o:["Nhờ họ làm gì, quan sát gì","Màu áo họ","Giờ ăn","Không gì"], a:0},
    {q:"Em test cái gì?", o:["Sản phẩm","Người dùng","Bạn bè","Máy in"], a:0},
    {q:"Người dùng có 'sai' không?", o:["Không, họ không có gì sai","Có, họ dốt","Luôn sai","Tuỳ người"], a:0},
    {q:"Nếu người dùng lúng túng thì?", o:["Sản phẩm cần cải thiện chỗ đó","Họ dốt","Bỏ qua","Không sao"], a:0},
    {q:"Kịch bản test giúp?", o:["Buổi test có mục tiêu rõ","Rối hơn","Không lợi ích","Tốn thời gian"], a:0},
    {q:"Quan sát 'gì' khi test?", o:["Họ kẹt ở đâu, nói gì","Màu tường","Thời tiết","Giờ giấc"], a:0},
    {q:"Test là để?", o:["Tìm chỗ sản phẩm cần sửa","Chê người dùng","Khoe","Cho vui"], a:0},
    {q:"Kịch bản 1 trang nghĩa là?", o:["Kế hoạch test ngắn gọn","Sản phẩm","Một bức tranh","Không gì"], a:0},
    {q:"Bài học?", o:["Chuẩn bị kịch bản trước khi test","Test bừa","Không chuẩn bị","Test người dùng"], a:0}
  ],

  "3.6.2": [
    {q:"Buổi test số 1 nên?", o:["Quan sát người thật dùng, không nhắc","Nhắc liên tục","Làm hộ họ","Không cho họ dùng"], a:0},
    {q:"Vì sao không nhắc?", o:["Để họ tự xoay xở, thấy vấn đề thật","Cho khó","Cho vui","Không lý do"], a:0},
    {q:"Chỗ họ lúng túng chính là?", o:["Chỗ sản phẩm cần cải thiện","Lỗi của họ","Không quan trọng","Điểm mạnh"], a:0},
    {q:"Nên ghi lại?", o:["Họ kẹt ở đâu","Màu áo họ","Giờ giấc","Không gì"], a:0},
    {q:"Nên kìm điều gì?", o:["Ý muốn giải thích","Sự quan sát","Việc ghi chép","Sự lịch sự"], a:0},
    {q:"Im lặng quan sát giúp?", o:["Thấy vấn đề thật","Che lỗi","Làm phiền","Không lợi ích"], a:0},
    {q:"Nhắc người dùng liên tục sẽ?", o:["Không thấy được vấn đề thật","Giúp test tốt hơn","Không sao","Bắt buộc"], a:0},
    {q:"Nên có mấy người test?", o:["2 người","0 người","Cả trường","Chỉ mình em"], a:0},
    {q:"Biên bản test 1 ghi?", o:["Họ kẹt ở đâu, nói gì","Màu sắc","Thời tiết","Không gì"], a:0},
    {q:"Bài học?", o:["Quan sát yên lặng để thấy vấn đề thật","Nhắc liên tục","Làm hộ","Không quan sát"], a:0}
  ],

  "3.6.3": [
    {q:"Sau test, ta?", o:["Phân tích và sửa đợt 1","Ra mắt luôn","Bỏ dự án","Không làm gì"], a:0},
    {q:"Nên gom lỗi theo?", o:["Mức nặng - nhẹ","Màu sắc","Bảng chữ cái","Ngẫu nhiên"], a:0},
    {q:"Nên sửa lỗi nào trước?", o:["Quan trọng nhất","Nhỏ nhất","Về màu","Không sửa"], a:0},
    {q:"Lỗi quan trọng là lỗi?", o:["Khiến người dùng không tiếp tục được","Về màu","Ít gặp","Nhỏ nhặt"], a:0},
    {q:"Không thể sửa hết cùng lúc nên?", o:["Chọn ưu tiên khôn ngoan","Bỏ hết","Sửa ngẫu nhiên","Không sửa"], a:0},
    {q:"Bản sửa đợt 1 kèm?", o:["Lý do ưu tiên","Màu mới","Tên mới","Không gì"], a:0},
    {q:"Phân tích lỗi giúp?", o:["Biết sửa gì trước","Rối hơn","Không lợi ích","Che lỗi"], a:0},
    {q:"Gom lỗi theo mức giúp?", o:["Ưu tiên đúng","Lộn xộn","Bỏ sót","Không tác dụng"], a:0},
    {q:"Sửa đợt 1 nhằm?", o:["Khắc phục lỗi lớn từ test","Trang trí","Xoá tính năng","Ra mắt"], a:0},
    {q:"Bài học?", o:["Ưu tiên sửa lỗi quan trọng trước","Sửa lỗi nhỏ trước","Sửa hết cùng lúc","Không sửa"], a:0}
  ],

  "3.6.4": [
    {q:"Buổi test số 2 nên?", o:["Người khác thử bản đã sửa","Cùng người cũ","Không ai thử","Tự thử"], a:0},
    {q:"Cần xem gì?", o:["Lỗi cũ đã hết chưa, có lỗi mới không","Màu áo","Giờ giấc","Không gì"], a:0},
    {q:"Nên test với người?", o:["Mới, có góc nhìn tươi","Chỉ người cũ","Không ai","Chính mình"], a:0},
    {q:"Người mới giúp?", o:["Không quen sản phẩm, thấy vấn đề mới","Quen nên bỏ sót","Không lợi ích","Rối hơn"], a:0},
    {q:"So sánh với lần 1 để?", o:["Biết đã cải thiện chưa","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Nếu lỗi cũ vẫn còn?", o:["Cần sửa tiếp","Bỏ qua","Ra mắt luôn","Không sao"], a:0},
    {q:"Test bản đã sửa giúp?", o:["Kiểm tra hiệu quả sửa lỗi","Che lỗi","Không lợi ích","Làm chậm"], a:0},
    {q:"Biên bản test 2 gồm?", o:["So sánh với lần 1","Chỉ màu sắc","Chỉ tên","Không gì"], a:0},
    {q:"Có thể phát sinh lỗi mới sau khi sửa không?", o:["Có, cần kiểm","Không bao giờ","Không quan trọng","Không kiểm"], a:0},
    {q:"Bài học?", o:["Test lại với người mới sau khi sửa","Không test lại","Chỉ tự đánh giá","Ra mắt ngay"], a:0}
  ],

  "3.6.5": [
    {q:"Sửa đợt 2 là?", o:["Tinh chỉnh lần cuối theo phản hồi","Bắt đầu lại","Xoá sản phẩm","Không làm gì"], a:0},
    {q:"Sau vòng này em có?", o:["Bản 1.1 ổn định hơn","Bản đầu tiên","Không gì","Bản hỏng"], a:0},
    {q:"Sản phẩm tốt lên qua?", o:["Nhiều vòng thử - sửa","Một lần duy nhất","May mắn","Không cần sửa"], a:0},
    {q:"'Bản 1.1' cho thấy?", o:["Đã cải thiện so với bản đầu","Tệ hơn","Y hệt","Bản nháp"], a:0},
    {q:"Tinh chỉnh nghĩa là?", o:["Sửa những chi tiết còn lại","Làm lại từ đầu","Xoá hết","Thêm thật nhiều"], a:0},
    {q:"Làm sản phẩm một lần là xong?", o:["Không, cần nhiều vòng","Có, luôn luôn","Tuỳ may mắn","Không cần làm"], a:0},
    {q:"Phản hồi giúp?", o:["Biết cần tinh chỉnh gì","Không lợi ích","Rối hơn","Che lỗi"], a:0},
    {q:"Sau sửa đợt 2, sản phẩm?", o:["Sẵn sàng cho đánh giá","Chưa chạy","Hỏng","Không đổi"], a:0},
    {q:"Nhiều vòng thử-sửa cho thấy?", o:["Cải tiến là quá trình liên tục","Chỉ làm một lần","Không cần cải tiến","Vô ích"], a:0},
    {q:"Bài học?", o:["Tinh chỉnh dần để sản phẩm ổn định","Bỏ qua phản hồi","Làm một lần","Không sửa"], a:0}
  ],

  "3.6.6": [
    {q:"Cho người dùng chấm điểm để?", o:["Nhận phản hồi thẳng thắn","Khoe","Cho vui","Không gì"], a:0},
    {q:"Nên dùng?", o:["Thang điểm đơn giản","Thang phức tạp","Không thang nào","Tự chấm"], a:0},
    {q:"Đón nhận phản hồi thế nào?", o:["Bình tĩnh và biết ơn","Giận dữ","Chối bỏ","Buồn bã"], a:0},
    {q:"Phản hồi thật (dù khó nghe) thì?", o:["Quý hơn lời khen xã giao","Vô giá trị","Nên bỏ qua","Đáng ghét"], a:0},
    {q:"Ai chấm điểm sản phẩm?", o:["Người dùng thật","Chính em","Máy","Không ai"], a:0},
    {q:"Bảng điểm từ ≥4 người giúp?", o:["Cái nhìn khách quan hơn","Ít tin hơn","Không lợi ích","Rối"], a:0},
    {q:"Lời chê giúp em?", o:["Biết chỗ cần cải thiện","Buồn vô ích","Bỏ cuộc","Không gì"], a:0},
    {q:"Nên tránh phản ứng nào?", o:["Tự ái, cãi lại","Lắng nghe","Cảm ơn","Ghi nhận"], a:0},
    {q:"Phản hồi thẳng thắn giúp sản phẩm?", o:["Tốt hơn thật sự","Tệ đi","Không đổi","Biến mất"], a:0},
    {q:"Bài học?", o:["Đón nhận phản hồi để cải thiện","Chỉ nghe lời khen","Phớt lờ chê","Bỏ cuộc khi bị chê"], a:0}
  ],

  "3.7.1": [
    {q:"Sản phẩm cần?", o:["Một cái tên và một câu chuyện ngắn","Chỉ số liệu","Không cần tên","Nhiều tên"], a:0},
    {q:"Tên nên?", o:["Dễ nhớ","Khó đọc","Thật dài","Toàn số"], a:0},
    {q:"Tagline là?", o:["Câu 'sản phẩm giúp ai làm gì'","Mật khẩu","Một bài hát","Một con số"], a:0},
    {q:"Nên chọn tên thế nào?", o:["Hỏi bạn bè tên nào dễ nhớ, hợp","Chọn bừa","Càng lạ càng tốt","Không cần chọn"], a:0},
    {q:"Câu chuyện sản phẩm giúp?", o:["Người khác hiểu nhanh","Rối hơn","Không lợi ích","Che thông tin"], a:0},
    {q:"Tên khó nhớ thì?", o:["Người ta khó nhắc lại","Tốt hơn","Không sao","Nổi tiếng hơn"], a:0},
    {q:"Tagline tốt nên?", o:["Ngắn, rõ lợi ích","Dài dòng","Mơ hồ","Toàn thuật ngữ"], a:0},
    {q:"'Sản phẩm này giúp ai làm gì' trả lời?", o:["Giá trị của sản phẩm","Màu sắc","Giá tiền","Ngày ra mắt"], a:0},
    {q:"Bình chọn tên trong lớp giúp?", o:["Chọn tên nhiều người thấy hợp","Gây tranh cãi","Vô ích","Không gì"], a:0},
    {q:"Bài học?", o:["Đặt tên dễ nhớ + câu giới thiệu rõ","Tên càng dài càng tốt","Không cần tên","Giấu sản phẩm"], a:0}
  ],

  "3.7.2": [
    {q:"Trang giới thiệu giúp?", o:["Người khác hiểu nhanh sản phẩm","Che thông tin","Không lợi ích","Làm rối"], a:0},
    {q:"Trang giới thiệu nên nêu?", o:["Vấn đề, giải pháp, ảnh chụp","Chỉ tên em","Chỉ ngày tháng","Không gì"], a:0},
    {q:"Nên viết thế nào?", o:["Ngắn gọn, rõ ràng, có hình","Dài dòng, khó hiểu","Không hình","Toàn chữ"], a:0},
    {q:"Nên đặt gì lên đầu?", o:["Lợi ích cho người dùng","Danh sách tính năng khô khan","Giá tiền","Tên tác giả"], a:0},
    {q:"Ảnh chụp sản phẩm giúp?", o:["Người xem hình dung được","Rối hơn","Không lợi ích","Che sản phẩm"], a:0},
    {q:"Trang giới thiệu nên?", o:["Hoàn chỉnh, dễ hiểu","Bỏ dở","Khó hiểu","Không có hình"], a:0},
    {q:"Nêu vấn đề để?", o:["Người xem thấy sản phẩm cần thiết","Cho dài","Không lý do","Che giấu"], a:0},
    {q:"Liệt kê tính năng khô khan thì?", o:["Kém hấp dẫn hơn nêu lợi ích","Tốt nhất","Hấp dẫn nhất","Bắt buộc"], a:0},
    {q:"Trang giới thiệu là?", o:["Cách đưa sản phẩm đến người khác","Đồ trang trí","Vô dụng","Bí mật"], a:0},
    {q:"Bài học?", o:["Giới thiệu rõ vấn đề - giải pháp, đặt lợi ích lên đầu","Chỉ khoe tính năng","Không cần trang giới thiệu","Giấu sản phẩm"], a:0}
  ],

  "3.7.3": [
    {q:"Video demo nên dài?", o:["Khoảng 60 giây","1 giờ","Cả ngày","5 giây"], a:0},
    {q:"Video demo gồm?", o:["Quay màn hình + lời dẫn ngắn","Chỉ nhạc","Chỉ ảnh tĩnh","Không gì"], a:0},
    {q:"Nội dung video nên?", o:["Súc tích, đi thẳng điểm hay","Lan man","Dài dòng","Không có nội dung"], a:0},
    {q:"Nên làm gì trước khi quay?", o:["Viết kịch bản","Quay bừa","Không chuẩn bị","Đợi may mắn"], a:0},
    {q:"Kịch bản giúp video?", o:["Không lan man trong 60 giây","Dài hơn","Rối hơn","Không lợi ích"], a:0},
    {q:"Lời dẫn nên?", o:["Ngắn gọn, rõ","Dài dòng","Khó hiểu","Không có"], a:0},
    {q:"Video demo cho thấy?", o:["Sản phẩm chạy thật","Chỉ ý tưởng","Không gì","Một bức ảnh"], a:0},
    {q:"Vì sao chỉ 60 giây?", o:["Ngắn gọn, giữ sự chú ý","Cho khó","Không lý do","Để dài hơn"], a:0},
    {q:"Nên quay gì?", o:["Vấn đề, thao tác chính, kết quả","Chỉ logo","Chỉ chữ chạy","Không gì"], a:0},
    {q:"Bài học?", o:["Làm video demo ngắn, súc tích, có kịch bản","Quay thật dài","Không kịch bản","Bỏ demo"], a:0}
  ],

  "3.7.4": [
    {q:"'Đưa đến người dùng' nghĩa là?", o:["Gửi cho người phù hợp dùng thử","Giấu sản phẩm","Xoá đi","Chỉ mình dùng"], a:0},
    {q:"Nên gửi cho bao nhiêu người?", o:["5-10 người phù hợp","0 người","Cả nước","Chỉ mình em"], a:0},
    {q:"'Người phù hợp' là?", o:["Đúng nhóm gặp vấn đề","Bất kỳ ai","Người ghét sản phẩm","Không ai"], a:0},
    {q:"Sản phẩm có ý nghĩa khi?", o:["Có người dùng thật","Nằm im","Chỉ mình biết","Không ai dùng"], a:0},
    {q:"Mời họ làm gì?", o:["Dùng thử","Chỉ nhìn","Không làm gì","Chê"], a:0},
    {q:"≥5 người ngoài lớp chạm vào sản phẩm nghĩa là?", o:["Sản phẩm bắt đầu có người dùng thật","Thất bại","Không quan trọng","Chỉ để khoe"], a:0},
    {q:"Đưa sản phẩm ra ngoài giúp?", o:["Nhận phản hồi thật","Che giấu","Không lợi ích","Làm chậm"], a:0},
    {q:"Gửi cho người không liên quan thì?", o:["Ít giá trị phản hồi","Tốt nhất","Bắt buộc","Không sao"], a:0},
    {q:"Ra mắt là?", o:["Bước đưa sản phẩm đến thế giới","Bước cuối vô nghĩa","Không cần","Chỉ để nộp"], a:0},
    {q:"Bài học?", o:["Đưa sản phẩm đến đúng người dùng","Giữ cho riêng mình","Không ra mắt","Gửi bừa"], a:0}
  ],

  "3.7.5": [
    {q:"Theo dõi tuần đầu để?", o:["Biết sản phẩm hoạt động ra sao","Cho vui","Không lý do","Che số liệu"], a:0},
    {q:"Nên xem gì?", o:["Ai dùng, dùng phần nào, bỏ ở đâu","Màu áo","Thời tiết","Giờ ăn"], a:0},
    {q:"Số liệu mách em?", o:["Điều cần cải thiện","Không gì","Màu sắc","Giờ giấc"], a:0},
    {q:"Cần bảng theo dõi thế nào?", o:["Đơn giản là đủ để bắt đầu","Cực kỳ phức tạp","Không cần","Bí mật"], a:0},
    {q:"'Bỏ ở đâu' cho biết?", o:["Chỗ người dùng gặp khó/chán","Điểm mạnh","Không gì","Màu"], a:0},
    {q:"Theo dõi giúp?", o:["Hiểu hành vi người dùng","Rối hơn","Không lợi ích","Che lỗi"], a:0},
    {q:"Bảng theo dõi tuần đầu ghi?", o:["Số liệu sử dụng","Nhật ký cá nhân","Bài hát","Không gì"], a:0},
    {q:"Ai dùng nhiều phần nào cho biết?", o:["Phần nào hữu ích/hấp dẫn","Màu yêu thích","Giờ học","Không gì"], a:0},
    {q:"Vì sao theo dõi tuần đầu?", o:["Nắm phản ứng thực tế sớm","Cho oai","Tốn công","Không lý do"], a:0},
    {q:"Bài học?", o:["Quan sát số liệu để cải thiện","Bỏ qua số liệu","Chỉ đoán","Không theo dõi"], a:0}
  ],

  "3.7.6": [
    {q:"Sau ra mắt nên?", o:["Rút bài học","Quên hết","Bỏ dự án","Không làm gì"], a:0},
    {q:"Nên nhìn lại?", o:["Điều gì hiệu quả, điều gì làm khác nếu lại","Chỉ điểm tốt","Chỉ điểm xấu","Không gì"], a:0},
    {q:"Bài học ra mắt để?", o:["Làm tốt hơn lần sau","Trách móc","Cho vui","Tốn giấy"], a:0},
    {q:"Mỗi lần ra mắt là?", o:["Một lần học","Một thất bại tuyệt đối","Vô nghĩa","Kết thúc"], a:0},
    {q:"Thất bại nhỏ khi ra mắt là?", o:["Kinh nghiệm quý","Điều xấu hổ","Vô ích","Nên giấu"], a:0},
    {q:"Nên ghi bài học thành?", o:["1 trang cho lần sau","Bí mật","Không ghi","Bài hát"], a:0},
    {q:"'Làm khác nếu được làm lại' giúp?", o:["Cải thiện lần sau","Buồn bã","Không gì","Bỏ cuộc"], a:0},
    {q:"Nhìn lại giúp em?", o:["Trưởng thành hơn","Kém đi","Không đổi","Quên hết"], a:0},
    {q:"Điều hiệu quả nên?", o:["Giữ lại và phát huy","Bỏ đi","Che giấu","Quên"], a:0},
    {q:"Bài học?", o:["Rút kinh nghiệm sau mỗi lần ra mắt","Không cần rút","Chỉ ăn mừng","Bỏ qua"], a:0}
  ],

  "3.8.1": [
    {q:"Pitch là?", o:["Bài trình bày ngắn thuyết phục về sản phẩm","Một trận đấu","Một bài hát","Một mật khẩu"], a:0},
    {q:"Cấu trúc pitch gồm?", o:["Vấn đề → giải pháp → demo → phản hồi → bước tiếp","Ngẫu nhiên","Chỉ khoe","Không cấu trúc"], a:0},
    {q:"Nên mở đầu pitch bằng?", o:["Câu chuyện/tình huống về vấn đề","Danh sách tính năng","Lời chào dài","Số liệu khô"], a:0},
    {q:"Mở đầu bằng câu chuyện để?", o:["Người nghe thấy vấn đề là thật","Cho dài","Gây rối","Không lý do"], a:0},
    {q:"Phần 'demo' trong pitch cho thấy?", o:["Sản phẩm chạy thật","Chỉ lý thuyết","Không gì","Một bức ảnh"], a:0},
    {q:"'Phản hồi người dùng' trong pitch là?", o:["Bằng chứng người thật đã dùng","Ý kiến em","Đoán bừa","Không cần"], a:0},
    {q:"'Bước tiếp theo' cho thấy?", o:["Kế hoạch tương lai","Kết thúc","Màu sắc","Không gì"], a:0},
    {q:"Dàn ý pitch dài?", o:["Khoảng 5 phút","5 giờ","Cả ngày","10 giây"], a:0},
    {q:"Pitch nhằm?", o:["Thuyết phục người nghe","Làm rối","Khoe khoang","Che giấu"], a:0},
    {q:"Bài học?", o:["Pitch theo cấu trúc rõ ràng","Nói lung tung","Chỉ đọc slide","Không chuẩn bị"], a:0}
  ],

  "3.8.2": [
    {q:"Slide kể chuyện nên?", o:["Ít chữ, nhiều hình","Nhiều chữ dày đặc","Không hình","Toàn số"], a:0},
    {q:"Nên có gì trên slide?", o:["Số liệu người dùng thật","Chữ dài","Không gì","Chỉ tên em"], a:0},
    {q:"Mỗi slide nên?", o:["Một ý","Mười ý","Không ý nào","Toàn chữ"], a:0},
    {q:"Slide là để?", o:["Hỗ trợ lời nói","Đọc nguyên văn","Thay em nói","Trang trí"], a:0},
    {q:"Bộ slide nên?", o:["Ngắn gọn (≤8 trang)","100 trang","0 trang","Càng dài càng tốt"], a:0},
    {q:"Dùng hình và số liệu thay?", o:["Đoạn văn dài","Hình ảnh","Số liệu","Tiêu đề"], a:0},
    {q:"Slide nhiều chữ khiến?", o:["Người nghe khó theo dõi","Hấp dẫn hơn","Dễ hiểu hơn","Tốt nhất"], a:0},
    {q:"Số liệu thật trên slide giúp?", o:["Thuyết phục hơn","Nhàm chán","Rối hơn","Không lợi ích"], a:0},
    {q:"Nên đọc nguyên văn slide không?", o:["Không, slide chỉ hỗ trợ","Có, đọc hết","Bắt buộc","Luôn luôn"], a:0},
    {q:"Bài học?", o:["Slide ít chữ, nhiều hình, có số liệu","Slide dày chữ","Đọc nguyên văn","Không cần slide"], a:0}
  ],

  "3.8.3": [
    {q:"Tổng duyệt lần 1 là?", o:["Pitch thử trước lớp","Pitch chính thức","Không pitch","Bỏ pitch"], a:0},
    {q:"Nhận góp ý theo?", o:["Tiêu chí (rõ ràng, thuyết phục, đúng giờ)","Cảm tính","Ngẫu nhiên","Không tiêu chí"], a:0},
    {q:"Sau góp ý, nên?", o:["Lên kế hoạch chỉnh","Bỏ qua","Cãi lại","Giữ nguyên"], a:0},
    {q:"Nên làm gì khi nhận góp ý?", o:["Ghi lại ngay","Quên","Phớt lờ","Tức giận"], a:0},
    {q:"Pitch thử giúp?", o:["Phát hiện chỗ cần cải thiện","Che lỗi","Cho vui","Không lợi ích"], a:0},
    {q:"Tiêu chí 'đúng giờ' nghĩa là?", o:["Pitch trong thời gian cho phép","Nói thật lâu","Nói thật nhanh","Không quan trọng"], a:0},
    {q:"Ghi lại góp ý ngay để?", o:["Không quên khi sửa","Cho đẹp","Tốn giấy","Không lý do"], a:0},
    {q:"Tổng duyệt lần 1 nhằm?", o:["Chuẩn bị tốt hơn cho lần thật","Kết thúc","Khoe","Bỏ cuộc"], a:0},
    {q:"Góp ý theo tiêu chí giúp?", o:["Cụ thể, dễ cải thiện","Mơ hồ","Vô ích","Gây rối"], a:0},
    {q:"Bài học?", o:["Pitch thử, nhận góp ý và chỉnh","Không luyện trước","Bỏ qua góp ý","Chỉ pitch một lần"], a:0}
  ],

  "3.8.4": [
    {q:"Tổng duyệt lần 2 là?", o:["Pitch bản đã sửa","Pitch bản đầu","Không pitch","Bỏ dự án"], a:0},
    {q:"Nên luyện thêm gì?", o:["Trả lời câu hỏi khó","Chỉ đọc slide","Không luyện","Bỏ qua"], a:0},
    {q:"Nên làm gì với câu hỏi hay gặp?", o:["Dự đoán và chuẩn bị trả lời","Bỏ qua","Sợ hãi","Không nghĩ tới"], a:0},
    {q:"Nếu không biết câu trả lời?", o:["Thành thật: 'Em sẽ tìm hiểu thêm'","Bịa đại","Im lặng lâu","Bỏ chạy"], a:0},
    {q:"Thành thật khi không biết thì?", o:["Vẫn đáng tin","Mất uy tín hẳn","Là thất bại","Nên tránh"], a:0},
    {q:"Chuẩn bị câu trả lời giúp?", o:["Tự tin khi hỏi đáp","Rối hơn","Không lợi ích","Sợ hơn"], a:0},
    {q:"Vượt vòng duyệt của coach nghĩa là?", o:["Sẵn sàng cho Demo Day","Thất bại","Kết thúc","Bỏ cuộc"], a:0},
    {q:"Luyện trả lời câu hỏi khó giúp?", o:["Không bị bất ngờ","Bối rối hơn","Vô ích","Làm chậm"], a:0},
    {q:"Nên trả lời câu hỏi thế nào?", o:["Ngắn gọn, tự tin","Lan man","Né tránh","Im lặng"], a:0},
    {q:"Bài học?", o:["Luyện pitch bản sửa và sẵn sàng hỏi đáp","Không luyện","Chỉ đọc slide","Trốn câu hỏi"], a:0}
  ],

  "3.8.5": [
    {q:"Demo Day Level 3 trình bày trước?", o:["Phụ huynh và khách mời","Chỉ mình em","Không ai","Con mèo"], a:0},
    {q:"Nên giữ thái độ?", o:["Bình tĩnh, tự tin","Hoảng loạn","Sợ hãi","Bỏ chạy"], a:0},
    {q:"Nên cho xem?", o:["Demo thật","Chỉ nói suông","Không gì","Ảnh tĩnh"], a:0},
    {q:"Nên làm gì để tránh sự cố?", o:["Đến sớm kiểm tra máy móc","Đến muộn","Không kiểm tra","Bỏ qua"], a:0},
    {q:"Demo Day là dịp?", o:["Khoe thành quả nhiều tháng","Nghỉ ngơi","Chơi game","Không quan trọng"], a:0},
    {q:"Nên kể thế nào?", o:["Mạch lạc","Lộn xộn","Lan man","Không kể"], a:0},
    {q:"Kiểm tra máy móc trước giúp?", o:["Tránh trục trặc phút chót","Cho oai","Tốn thời gian","Không lý do"], a:0},
    {q:"Trước khán giả, nên?", o:["Tự tin trình bày","Cúi gằm mặt","Nói lí nhí","Bỏ chạy"], a:0},
    {q:"Demo thật cho khách mời thấy?", o:["Sản phẩm hoạt động","Chỉ ý tưởng","Không gì","Ảnh"], a:0},
    {q:"Bài học?", o:["Chuẩn bị kỹ, tự tin ở Demo Day","Không chuẩn bị","Trốn tránh","Đến muộn"], a:0}
  ],

  "3.8.6": [
    {q:"Bước cuối là?", o:["Tổng kết và định hướng","Bắt đầu lại","Bỏ hết","Không làm gì"], a:0},
    {q:"Nên nhìn lại?", o:["6-8 tháng đã học và làm được gì","Chỉ điểm xấu","Không gì","Chỉ hôm nay"], a:0},
    {q:"Nên hoàn thiện?", o:["Hồ sơ sản phẩm","Bài hát","Trò chơi","Không gì"], a:0},
    {q:"Có quyết định gì ở bước này?", o:["Có học tiếp Level 4 không","Đổi trường","Nghỉ hè","Không gì"], a:0},
    {q:"Dù học tiếp hay không, em đã?", o:["Tự tay tạo ra một sản phẩm thật","Không làm gì","Thất bại","Chỉ chơi"], a:0},
    {q:"Hồ sơ sản phẩm giúp?", o:["Ghi lại thành quả","Trang trí","Vô ích","Che giấu"], a:0},
    {q:"Nhìn lại hành trình giúp?", o:["Thấy mình trưởng thành","Buồn bã","Không đổi","Quên hết"], a:0},
    {q:"Tạo ra sản phẩm thật là điều?", o:["Rất đáng tự hào","Bình thường","Đáng xấu hổ","Vô nghĩa"], a:0},
    {q:"Định hướng nghĩa là?", o:["Quyết bước đi tiếp theo","Kết thúc mọi thứ","Không nghĩ gì","Bỏ cuộc"], a:0},
    {q:"Bài học?", o:["Tổng kết hành trình và chọn hướng đi","Quên hết","Không tổng kết","Bỏ dở"], a:0}
  ]

});

/* ===== QUIZ — MODULE 4.1 – 4.3 ===== */
Object.assign(window.LESSON_QUIZ, {

  "4.1.1": [
    {q:"Số liệu giúp em?", o:["Hiểu câu chuyện về sản phẩm","Trang trí","Không gì","Che sự thật"], a:0},
    {q:"'Lượt dùng' cho biết?", o:["Có bao nhiêu người dùng","Màu sản phẩm","Giờ giấc","Tên tác giả"], a:0},
    {q:"'Người quay lại' cho biết?", o:["Ai thấy hữu ích nên dùng tiếp","Ai ghét sản phẩm","Màu áo","Không gì"], a:0},
    {q:"'Điểm rơi' là?", o:["Chỗ người ta bỏ cuộc","Điểm cao nhất","Màu nền","Tên nút"], a:0},
    {q:"Khi nhìn số liệu, nên hỏi?", o:["Con số này đang nói điều gì?","Nó màu gì?","Bao giờ hết?","Ai làm ra?"], a:0},
    {q:"Số liệu chỉ là con số hay?", o:["Kể một câu chuyện nếu biết đọc","Vô nghĩa","Chỉ để khoe","Không quan trọng"], a:0},
    {q:"Đọc số liệu giúp?", o:["Ra quyết định cải thiện","Không lợi ích","Rối hơn","Che lỗi"], a:0},
    {q:"Nhiều người quay lại nghĩa là?", o:["Sản phẩm hữu ích","Sản phẩm dở","Không đổi","Thất bại"], a:0},
    {q:"Điểm rơi cao ở một bước cho biết?", o:["Bước đó cần cải thiện","Bước đó hoàn hảo","Không gì","Nên bỏ số liệu"], a:0},
    {q:"Bài học?", o:["Từng con số có ý nghĩa, cần biết đọc","Số liệu vô ích","Chỉ nhìn cho vui","Bỏ qua số liệu"], a:0}
  ],

  "4.1.2": [
    {q:"Chỉ số ảo ví dụ?", o:["Lượt xem","Người quay lại","Số người dùng thật","Tỉ lệ hài lòng"], a:0},
    {q:"Chỉ số thật ví dụ?", o:["Người quay lại","Lượt xem đơn thuần","Số lần tải trang","Màu nền"], a:0},
    {q:"Chỉ số ảo?", o:["Nghe kêu nhưng ít ý nghĩa","Rất quan trọng","Luôn đáng tin","Không tồn tại"], a:0},
    {q:"Chỉ số thật cho biết?", o:["Sản phẩm có giá trị không","Màu sắc","Giờ giấc","Tên"], a:0},
    {q:"Nên chọn bao nhiêu chỉ số quan trọng?", o:["Khoảng 3","Tất cả","Không cái nào","100 cái"], a:0},
    {q:"Vì sao phân biệt chỉ số ảo/thật?", o:["Để tập trung vào cái quan trọng","Cho vui","Không lý do","Để khoe"], a:0},
    {q:"Lượt xem cao nhưng không ai quay lại nghĩa là?", o:["Sản phẩm chưa đủ hữu ích","Sản phẩm tuyệt vời","Không sao","Thành công"], a:0},
    {q:"Chỉ số quan trọng nên?", o:["Phản ánh giá trị thật","Chỉ để trưng","Càng nhiều càng tốt","Không cần"], a:0},
    {q:"Theo dõi chỉ số thật giúp?", o:["Biết sản phẩm thật sự tốt không","Tự lừa mình","Không lợi ích","Che lỗi"], a:0},
    {q:"Bài học?", o:["Chọn đúng chỉ số thật để theo dõi","Chạy theo chỉ số ảo","Không theo dõi gì","Càng nhiều chỉ số càng tốt"], a:0}
  ],

  "4.1.3": [
    {q:"Muốn có số liệu, phải?", o:["Gắn đo lường vào sản phẩm","Đoán bừa","Không làm gì","Hỏi bạn"], a:0},
    {q:"Nên đo cái gì?", o:["Bao nhiêu lần dùng, bao nhiêu người quay lại","Màu sắc","Thời tiết","Tên tác giả"], a:0},
    {q:"Chỉ nên đo những gì?", o:["Sẽ dùng để ra quyết định","Mọi thứ có thể","Không gì","Ngẫu nhiên"], a:0},
    {q:"Gắn đo lường nghĩa là?", o:["Thêm cách đếm đơn giản vào sản phẩm","Xoá sản phẩm","Trang trí","Không liên quan"], a:0},
    {q:"Đo mà không dùng thì?", o:["Lãng phí công sức","Rất tốt","Bắt buộc","Cần thiết"], a:0},
    {q:"Sản phẩm bắt đầu ghi số liệu giúp?", o:["Có dữ liệu thật để cải thiện","Rối hơn","Chậm hơn","Không lợi ích"], a:0},
    {q:"Đo lường đơn giản là?", o:["Đủ để bắt đầu","Quá phức tạp","Không cần","Bí mật"], a:0},
    {q:"Số liệu thu từ sản phẩm Level 3 giúp?", o:["Biết người dùng thật hành xử ra sao","Cho vui","Không gì","Che lỗi"], a:0},
    {q:"Vì sao đo lường quan trọng?", o:["Không đo thì không biết cải thiện gì","Không quan trọng","Chỉ để khoe","Làm nặng máy"], a:0},
    {q:"Bài học?", o:["Gắn đo lường để có số liệu thật","Đoán thay vì đo","Không đo gì","Đo mọi thứ vô ích"], a:0}
  ],

  "4.1.4": [
    {q:"Biểu đồ giúp?", o:["Biến số liệu khô thành hình dễ đọc","Làm rối","Che số liệu","Không gì"], a:0},
    {q:"Biểu đồ cho thấy?", o:["Xu hướng: tăng, giảm, đứng yên","Màu yêu thích","Tên","Giờ giấc"], a:0},
    {q:"Nên chọn loại biểu đồ?", o:["Hợp với dữ liệu","Càng nhiều màu càng tốt","Ngẫu nhiên","Không quan trọng"], a:0},
    {q:"Sau khi vẽ biểu đồ, nên?", o:["Viết nhận xét","Bỏ qua","Xoá","Không gì"], a:0},
    {q:"Quá nhiều màu trên biểu đồ thì?", o:["Rối, khó đọc","Đẹp và rõ","Tốt nhất","Bắt buộc"], a:0},
    {q:"Biểu đồ đường thường thể hiện?", o:["Xu hướng theo thời gian","Màu sắc","Tên người","Không gì"], a:0},
    {q:"Đọc xu hướng giúp?", o:["Hiểu sản phẩm đang tốt lên hay xấu đi","Cho vui","Không lợi ích","Che lỗi"], a:0},
    {q:"Nhận xét biểu đồ là?", o:["Giải thích biểu đồ nói gì","Trang trí","Không cần","Vô nghĩa"], a:0},
    {q:"Biểu đồ giúp người xem?", o:["Nắm nhanh tình hình","Bối rối hơn","Không gì","Chán"], a:0},
    {q:"Bài học?", o:["Vẽ biểu đồ và đọc xu hướng","Chỉ nhìn số thô","Không vẽ gì","Vẽ cho đẹp là đủ"], a:0}
  ],

  "4.1.5": [
    {q:"Số liệu nói 'cái gì', phỏng vấn nói?", o:["'Vì sao'","'Cái gì' luôn","Không gì","Màu sắc"], a:0},
    {q:"Thấy người dùng bỏ ở một bước, nên?", o:["Hỏi họ để hiểu lý do","Đoán bừa","Bỏ qua","Trách họ"], a:0},
    {q:"Con số chỉ ra?", o:["Chỗ có vấn đề","Nguyên nhân đầy đủ","Không gì","Giải pháp"], a:0},
    {q:"Phỏng vấn giải thích?", o:["Nguyên nhân (vì sao)","Con số","Màu sắc","Giờ giấc"], a:0},
    {q:"Nên phỏng vấn ai?", o:["Người đã dùng thật","Người chưa biết","Bất kỳ ai","Không ai"], a:0},
    {q:"Kết hợp số liệu và phỏng vấn giúp?", o:["Hiểu cả 'cái gì' và 'vì sao'","Chỉ một nửa","Rối hơn","Không lợi ích"], a:0},
    {q:"Số liệu một mình có đủ hiểu nguyên nhân không?", o:["Không, cần phỏng vấn","Có, luôn đủ","Không cần gì","Đủ tuyệt đối"], a:0},
    {q:"Phỏng vấn người đã dùng cho?", o:["Câu trả lời giá trị","Đoán mò","Không gì","Sai lệch"], a:0},
    {q:"Vì sao dùng cả hai nguồn?", o:["Bức tranh đầy đủ hơn","Cho dài","Tốn công vô ích","Không lý do"], a:0},
    {q:"Bài học?", o:["Số liệu + phỏng vấn = hiểu đầy đủ","Chỉ cần số liệu","Chỉ cần phỏng vấn","Không cần gì"], a:0}
  ],

  "4.1.6": [
    {q:"Danh sách cải tiến đến từ?", o:["Số liệu + phỏng vấn","Đoán bừa","Chép mạng","May mắn"], a:0},
    {q:"Nên xếp việc theo?", o:["Tác động và công sức","Màu sắc","Bảng chữ cái","Ngẫu nhiên"], a:0},
    {q:"Nên làm việc nào trước?", o:["Ảnh hưởng lớn mà không quá tốn công","Tốn công nhất","Ít ảnh hưởng nhất","Ngẫu nhiên"], a:0},
    {q:"Có nên làm tất cả cùng lúc?", o:["Không, chọn vài việc đáng giá","Có, làm hết","Không làm gì","Ngẫu nhiên"], a:0},
    {q:"Xếp ưu tiên giúp?", o:["Dùng thời gian hiệu quả","Rối hơn","Tốn thời gian","Không lợi ích"], a:0},
    {q:"'Tác động' nghĩa là?", o:["Ảnh hưởng đến người dùng","Màu sắc","Kích thước","Tên"], a:0},
    {q:"Việc tác động lớn, ít công thì?", o:["Nên ưu tiên","Nên bỏ","Không quan trọng","Làm sau cùng"], a:0},
    {q:"Danh sách cải tiến dùng cho?", o:["Phiên bản 2 (v2)","Xoá sản phẩm","Trang trí","Không gì"], a:0},
    {q:"Không chọn ưu tiên thì?", o:["Dễ lan man, kém hiệu quả","Tốt hơn","Nhanh hơn","Không sao"], a:0},
    {q:"Bài học?", o:["Chốt danh sách cải tiến xếp ưu tiên","Làm bừa","Làm hết cùng lúc","Không cải tiến"], a:0}
  ],

  "4.2.1": [
    {q:"Phiên bản 2 (v2) nên?", o:["Cải tiến phần cần đổi, giữ phần đang tốt","Đập đi làm lại hết","Không đổi gì","Xoá sản phẩm"], a:0},
    {q:"Nên vẽ wireframe cho?", o:["Phần thay đổi","Toàn bộ lại","Không phần nào","Phần đang tốt"], a:0},
    {q:"Có nên đập bỏ phần đang chạy tốt?", o:["Không","Có, luôn luôn","Tuỳ hứng","Bắt buộc"], a:0},
    {q:"Thay đổi nên?", o:["Có chủ đích, dựa số liệu","Cho 'có vẻ mới'","Ngẫu nhiên","Vô cớ"], a:0},
    {q:"v2 dựa trên?", o:["Danh sách cải tiến từ số liệu","May mắn","Ý thích bất chợt","Của người khác"], a:0},
    {q:"Giữ phần đang tốt vì?", o:["Không nên phá thứ đang chạy","Để lười","Không lý do","Cho nhanh"], a:0},
    {q:"Thiết kế v2 được duyệt nghĩa là?", o:["Sẵn sàng bắt tay làm","Thất bại","Bỏ dự án","Không cần làm"], a:0},
    {q:"Đổi 'cho có vẻ mới' là?", o:["Không nên","Rất tốt","Bắt buộc","Khôn ngoan"], a:0},
    {q:"Cải tiến có chủ đích giúp?", o:["Sản phẩm tốt lên đúng hướng","Rối hơn","Không đổi","Tệ đi"], a:0},
    {q:"Bài học?", o:["v2 cải tiến có chủ đích, giữ phần tốt","Làm lại từ đầu","Đổi bừa","Không cải tiến"], a:0}
  ],

  "4.2.2": [
    {q:"Kế hoạch 4 tuần giúp?", o:["Việc lớn không bị dồn cục","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Mỗi tuần nên có?", o:["Mục tiêu và mốc kiểm tra","Chỉ nghỉ","Không mục tiêu","Ngẫu nhiên"], a:0},
    {q:"Mốc kiểm tra giúp?", o:["Biết có đúng tiến độ không","Trang trí","Tốn thời gian","Không gì"], a:0},
    {q:"Mốc nên đặt thế nào?", o:["Cụ thể 'xong cái gì'","Mơ hồ","Không rõ","Chung chung"], a:0},
    {q:"Chia việc theo tuần giúp?", o:["Quản lý được tiến độ","Rối hơn","Không đổi","Chậm hơn"], a:0},
    {q:"Mốc mơ hồ thì?", o:["Khó biết đã đạt chưa","Rõ ràng","Tốt nhất","Dễ đo"], a:0},
    {q:"Kế hoạch tốt giúp?", o:["Không bị trễ dồn về cuối","Tốn công","Vô ích","Rối"], a:0},
    {q:"Bảng kế hoạch nên có?", o:["Mốc rõ ràng","Chỉ màu sắc","Không mốc","Bí mật"], a:0},
    {q:"Vì sao chia nhỏ theo tuần?", o:["Dễ theo dõi và hoàn thành","Cho oai","Không lý do","Để lâu hơn"], a:0},
    {q:"Bài học?", o:["Lập kế hoạch có mốc theo tuần","Không lập kế hoạch","Làm tới đâu hay tới đó","Dồn về cuối"], a:0}
  ],

  "4.2.3": [
    {q:"Tuần 1 làm?", o:["Cải tiến ưu tiên số 1","Việc ít quan trọng","Trang trí","Nghỉ"], a:0},
    {q:"Nên dồn sức cho?", o:["Thay đổi tác động lớn nhất","Việc nhỏ nhặt","Việc cho vui","Không việc nào"], a:0},
    {q:"Làm xong nên?", o:["Kiểm tra kỹ","Bỏ qua","Ra mắt luôn","Không kiểm"], a:0},
    {q:"Làm dứt điểm một việc so với dở dang nhiều việc?", o:["Tốt hơn","Kém hơn","Y hệt","Không quan trọng"], a:0},
    {q:"Ưu tiên số 1 là?", o:["Việc quan trọng nhất","Việc dễ nhất","Việc cho vui","Ngẫu nhiên"], a:0},
    {q:"Hoàn thành mốc tuần 1 giúp?", o:["Tiến đúng kế hoạch","Trễ hơn","Không đổi","Rối"], a:0},
    {q:"Dồn sức cho tác động lớn vì?", o:["Hiệu quả cao nhất","Cho oai","Không lý do","Để lâu"], a:0},
    {q:"Nên kiểm tra sau khi làm để?", o:["Chắc chắn nó hoạt động","Cho đẹp","Tốn thời gian","Không lý do"], a:0},
    {q:"Nhiều việc dở dang thì?", o:["Không hoàn thành được gì","Tốt","Nhanh","Hiệu quả"], a:0},
    {q:"Bài học?", o:["Làm dứt điểm việc quan trọng nhất trước","Làm nhiều việc dở dang","Bỏ qua kiểm tra","Không ưu tiên"], a:0}
  ],

  "4.2.4": [
    {q:"Tuần 2 làm?", o:["Cải tiến số 2 và sửa lỗi phát sinh","Nghỉ","Xoá tuần 1","Trang trí"], a:0},
    {q:"Khi thêm cái mới, thường?", o:["Có lỗi mới xuất hiện","Không bao giờ lỗi","Máy tự sửa","Không sao"], a:0},
    {q:"Mỗi lần đổi lớn, nên?", o:["Thử lại toàn bộ luồng chính","Không thử","Chỉ nhìn","Bỏ qua"], a:0},
    {q:"Sửa lỗi phát sinh nghĩa là?", o:["Xử lý lỗi mới do thay đổi","Tạo thêm lỗi","Bỏ qua lỗi","Che lỗi"], a:0},
    {q:"Tiến đều nghĩa là?", o:["Hoàn thành từng mốc","Làm dồn cục","Không làm","Ngẫu nhiên"], a:0},
    {q:"Thử lại luồng chính giúp?", o:["Bắt lỗi do thay đổi","Che lỗi","Tốn thời gian vô ích","Không lợi ích"], a:0},
    {q:"Cải tiến số 2 nên làm sau?", o:["Cải tiến số 1","Cải tiến số 3","Ra mắt","Không thứ tự"], a:0},
    {q:"Lỗi mới xuất hiện khi?", o:["Thay đổi/thêm tính năng","Không làm gì","Tắt máy","Ngồi im"], a:0},
    {q:"Mốc tuần 2 đạt giúp?", o:["Giữ đúng tiến độ","Trễ hơn","Không đổi","Rối"], a:0},
    {q:"Bài học?", o:["Cải tiến tiếp và xử lý lỗi mới","Bỏ qua lỗi","Không thử lại","Làm bừa"], a:0}
  ],

  "4.2.5": [
    {q:"Tuần 3 làm?", o:["Cải tiến số 3 và gắn đo lường cho tính năng mới","Nghỉ","Xoá tất cả","Trang trí"], a:0},
    {q:"Tính năng mới cần?", o:["Số liệu để biết hiệu quả","Không cần gì","Chỉ đẹp","Bí mật"], a:0},
    {q:"Làm tính năng mà không đo thì?", o:["Không biết nó có đáng giữ","Luôn tốt","Không sao","Hoàn hảo"], a:0},
    {q:"Đo tính năng mới để?", o:["Sau này biết nó hiệu quả không","Cho vui","Tốn công","Không lý do"], a:0},
    {q:"Gắn đo lường nghĩa là?", o:["Thêm cách đếm cho tính năng","Xoá tính năng","Trang trí","Không liên quan"], a:0},
    {q:"Vì sao đo cả cái mới?", o:["Để đánh giá nó về sau","Cho oai","Không lý do","Làm nặng máy"], a:0},
    {q:"Mốc tuần 3 đạt giúp?", o:["Đúng tiến độ","Trễ","Rối","Không đổi"], a:0},
    {q:"Tính năng không đo được thì?", o:["Khó biết có nên giữ không","Chắc chắn giữ","Chắc chắn bỏ","Không sao"], a:0},
    {q:"Số liệu tính năng mới giúp?", o:["Quyết định giữ hay bỏ về sau","Trang trí","Không lợi ích","Che lỗi"], a:0},
    {q:"Bài học?", o:["Tính năng mới cũng cần đo lường","Không cần đo","Chỉ làm cho đẹp","Bỏ số liệu"], a:0}
  ],

  "4.2.6": [
    {q:"Kiểm thử hồi quy là?", o:["Bảo đảm tính năng cũ không hỏng vì cái mới","Tạo lỗi","Xoá tính năng","Trang trí"], a:0},
    {q:"Sau khi thêm/đổi, nên?", o:["Chạy lại danh sách kiểm tính năng cũ","Ra mắt luôn","Không kiểm","Xoá"], a:0},
    {q:"Nên giữ gì để test nhanh?", o:["Checklist các luồng quan trọng","Không gì","Chỉ tên","Bí mật"], a:0},
    {q:"'Hồi quy' nghĩa là?", o:["Tính năng cũ quay lại bị lỗi","Tiến bộ","Trang trí","Nghỉ ngơi"], a:0},
    {q:"Vì sao kiểm thử hồi quy?", o:["Cái mới có thể làm hỏng cái cũ","Cho vui","Tốn công vô ích","Không lý do"], a:0},
    {q:"Checklist giúp?", o:["Test nhanh mỗi lần đổi","Trang trí","Tốn thời gian","Không lợi ích"], a:0},
    {q:"Nếu không kiểm thử hồi quy?", o:["Tính năng cũ có thể âm thầm hỏng","Không sao","Tốt hơn","Nhanh hơn"], a:0},
    {q:"Danh sách kiểm đã tick đủ nghĩa là?", o:["Mọi luồng quan trọng đã được thử","Bỏ qua hết","Chưa thử","Không cần"], a:0},
    {q:"Kiểm thử hồi quy bảo vệ?", o:["Chất lượng sản phẩm","Màu sắc","Tên","Không gì"], a:0},
    {q:"Bài học?", o:["Luôn thử lại phần cũ sau khi đổi","Chỉ thử phần mới","Không thử","Bỏ qua"], a:0}
  ],

  "4.2.7": [
    {q:"Ra mắt v2 cho?", o:["Người dùng cũ","Không ai","Chỉ mình em","Người ghét sản phẩm"], a:0},
    {q:"Nên làm gì khi ra mắt v2?", o:["Thông báo điều gì mới, mời trải nghiệm","Giấu đi","Không nói gì","Xoá bản cũ"], a:0},
    {q:"Nên nêu rõ?", o:["v2 giúp họ tốt hơn ở chỗ nào","Chỉ tên","Chỉ ngày","Không gì"], a:0},
    {q:"Mời người dùng cũ để?", o:["Họ thử bản mới","Chê họ","Cho vui","Không lý do"], a:0},
    {q:"Người dùng cũ quan trọng vì?", o:["Họ đã quen, có thể quay lại","Không quan trọng","Nên bỏ","Gây phiền"], a:0},
    {q:"Nêu lợi ích mới giúp?", o:["Họ muốn thử lại","Họ chán","Không đổi","Rời đi"], a:0},
    {q:"v2 đến tay ≥5 người nghĩa là?", o:["Bản mới có người dùng","Thất bại","Không quan trọng","Chỉ để khoe"], a:0},
    {q:"Thông báo ra mắt nên?", o:["Rõ ràng, hấp dẫn","Mơ hồ","Không có","Khó hiểu"], a:0},
    {q:"Ra mắt v2 là bước?", o:["Đưa cải tiến đến người dùng","Kết thúc dự án","Không cần","Bí mật"], a:0},
    {q:"Bài học?", o:["Ra mắt v2 và mời người dùng cũ","Giấu v2","Không thông báo","Bỏ người dùng cũ"], a:0}
  ],

  "4.2.8": [
    {q:"So sánh v1 và v2 bằng?", o:["Cùng một thước đo (chỉ số)","Cảm tính","Màu sắc","Không gì"], a:0},
    {q:"Kết luận cải tiến nên dựa vào?", o:["Số liệu","Cảm giác","May mắn","Ý người lạ"], a:0},
    {q:"'Tốt hơn' cần?", o:["Bằng chứng, không chỉ cảm giác","Chỉ cảm giác","Không cần gì","Lời khen"], a:0},
    {q:"Đo cùng chỉ số hai phiên bản để?", o:["So sánh công bằng","Cho vui","Rối hơn","Không lý do"], a:0},
    {q:"Báo cáo so sánh nên có?", o:["Số liệu + biểu đồ","Chỉ chữ","Không gì","Chỉ màu"], a:0},
    {q:"Nếu v2 không tốt hơn theo số liệu?", o:["Cần xem lại cải tiến","Vẫn tự khen","Không sao","Bỏ số liệu"], a:0},
    {q:"So sánh có căn cứ giúp?", o:["Quyết định đúng","Tự lừa mình","Không lợi ích","Che lỗi"], a:0},
    {q:"Dùng chỉ số khác nhau cho 2 bản thì?", o:["Không so sánh công bằng được","Tốt hơn","Chính xác nhất","Bắt buộc"], a:0},
    {q:"Biểu đồ so sánh giúp?", o:["Thấy rõ khác biệt","Che số liệu","Rối hơn","Không gì"], a:0},
    {q:"Bài học?", o:["Đánh giá cải tiến bằng số liệu, không cảm tính","Tin cảm giác","Không so sánh","Bỏ số liệu"], a:0}
  ],

  "4.3.1": [
    {q:"Có việc?", o:["Một AI không kham nổi, cần nhiều AI","Một AI làm được tất cả","Không AI nào làm","Chỉ người làm"], a:0},
    {q:"Ví dụ chuỗi AI?", o:["AI tóm tắt → AI dịch → AI đọc thành tiếng","Một AI làm hết","Không AI nào","Người làm hết"], a:0},
    {q:"Nên làm gì để thấy tổng thể?", o:["Vẽ sơ đồ ai làm việc gì","Không vẽ","Đoán","Che giấu"], a:0},
    {q:"'Đội AI' nghĩa là?", o:["Nhiều AI phối hợp","Một AI","Không AI","Người thay AI"], a:0},
    {q:"Vì sao cần nhiều AI?", o:["Việc lớn cần nhiều bước khác nhau","Cho oai","Không lý do","Để phức tạp"], a:0},
    {q:"Chuỗi AI nối nhau nghĩa là?", o:["Kết quả cái này dùng cho cái kia","Chúng tách rời","Cùng làm một việc","Không liên quan"], a:0},
    {q:"Một AI có làm được mọi việc không?", o:["Không, có việc cần chuỗi AI","Có, tất cả","Luôn được","Không AI nào làm được"], a:0},
    {q:"Sơ đồ giúp?", o:["Hiểu từng AI làm gì","Trang trí","Rối hơn","Không lợi ích"], a:0},
    {q:"Kể việc cần ≥2 AI giúp?", o:["Hiểu khi nào cần phối hợp AI","Cho vui","Không gì","Che giấu"], a:0},
    {q:"Bài học?", o:["Có việc cần nhiều AI phối hợp","Một AI luôn đủ","Không cần AI","AI làm được mọi thứ"], a:0}
  ],

  "4.3.2": [
    {q:"Pipeline là?", o:["Chuỗi bước, đầu ra bước này là đầu vào bước kia","Một con đường thật","Một loại ống nước","Một trò chơi"], a:0},
    {q:"Thiết kế pipeline cần?", o:["Xác định thứ tự AI và dữ liệu chuyển giữa chúng","Chọn màu","Đặt tên hay","Không gì"], a:0},
    {q:"Mỗi bước phải nhận?", o:["Đúng thứ bước trước tạo ra","Bất kỳ gì","Không gì","Dữ liệu ngẫu nhiên"], a:0},
    {q:"Nên vẽ pipeline thành?", o:["Sơ đồ 2-3 bước","Không vẽ","Một bức tranh","Bài hát"], a:0},
    {q:"'Đầu ra' của một AI dùng làm?", o:["Đầu vào của AI tiếp theo","Rác bỏ đi","Không dùng","Trang trí"], a:0},
    {q:"Pipeline giúp?", o:["Tổ chức nhiều AI làm việc có thứ tự","Rối hơn","Không lợi ích","Che lỗi"], a:0},
    {q:"Nếu bước sau nhận sai dữ liệu?", o:["Kết quả sẽ sai","Vẫn đúng","Không sao","Tốt hơn"], a:0},
    {q:"Thứ tự các AI trong pipeline?", o:["Quan trọng","Không quan trọng","Ngẫu nhiên","Tuỳ ý hoàn toàn"], a:0},
    {q:"Sơ đồ pipeline 2-3 bước cho?", o:["Một việc thật","Cho vui","Không gì","Trang trí"], a:0},
    {q:"Bài học?", o:["Thiết kế chuỗi AI có thứ tự rõ ràng","Ghép bừa","Không thứ tự","Bỏ pipeline"], a:0}
  ],

  "4.3.3": [
    {q:"Chạy pipeline đầu tiên nghĩa là?", o:["Chạy chuỗi từ đầu đến cuối","Chỉ chạy 1 bước","Không chạy","Xoá pipeline"], a:0},
    {q:"Ví dụ pipeline 2 AI?", o:["AI tóm tắt → AI dịch","Một AI làm hết","Không AI","Người làm"], a:0},
    {q:"Nên làm gì trước khi nối chuỗi?", o:["Thử từng bước riêng","Nối hết ngay","Không thử","Bỏ qua"], a:0},
    {q:"Cần kiểm tra gì?", o:["Dữ liệu chạy suôn qua từng mắt xích","Màu sắc","Tên","Giờ giấc"], a:0},
    {q:"Thử từng bước riêng giúp?", o:["Dễ tìm lỗi hơn","Rối hơn","Không lợi ích","Che lỗi"], a:0},
    {q:"Pipeline chạy 'từ đầu đến cuối' nghĩa là?", o:["Hoàn tất mọi bước","Chỉ bước đầu","Không bước nào","Bước cuối trước"], a:0},
    {q:"Nếu một bước lỗi?", o:["Kết quả cuối bị ảnh hưởng","Không sao","Tốt hơn","Bước khác tự sửa"], a:0},
    {q:"AI đọc thành tiếng là?", o:["Một mắt xích có thể trong pipeline","Không liên quan","Bước duy nhất","Không phải AI"], a:0},
    {q:"Chạy được từ đầu đến cuối cho thấy?", o:["Pipeline hoạt động","Thất bại","Không gì","Chỉ ý tưởng"], a:0},
    {q:"Bài học?", o:["Thử từng bước rồi nối thành chuỗi chạy được","Nối bừa rồi thôi","Không thử","Bỏ pipeline"], a:0}
  ],

  "4.3.4": [
    {q:"Trong chuỗi, một mắt xích sai có thể?", o:["Làm hỏng cả kết quả cuối","Không ảnh hưởng","Tự sửa","Tốt hơn"], a:0},
    {q:"Nên đặt gì giữa các bước?", o:["Điểm kiểm tra","Không gì","Trang trí","Màu sắc"], a:0},
    {q:"Điểm kiểm tra giúp?", o:["Bắt lỗi sớm trước khi trôi tới cuối","Che lỗi","Rối hơn","Không lợi ích"], a:0},
    {q:"Lỗi trong chuỗi thường?", o:["Lan truyền qua các bước","Đứng yên","Biến mất","Tự khỏi"], a:0},
    {q:"Nên kiểm gì ở mỗi bước?", o:["Đầu ra có 'hợp lý' không","Màu sắc","Tên","Giờ"], a:0},
    {q:"'Lỗi lan truyền' nghĩa là?", o:["Lỗi bước đầu ảnh hưởng bước sau","Lỗi tự hết","Không có lỗi","Lỗi cố định"], a:0},
    {q:"Cài điểm kiểm tra bắt được?", o:["Lỗi cố tình gài","Màu sắc","Tên","Không gì"], a:0},
    {q:"Nếu không có điểm kiểm tra?", o:["Lỗi có thể trôi tới cuối mới phát hiện","Không sao","Tốt hơn","Nhanh hơn"], a:0},
    {q:"Kiểm tra giữa chừng giúp?", o:["Phát hiện lỗi sớm","Làm chậm vô ích","Che lỗi","Không lợi ích"], a:0},
    {q:"Bài học?", o:["Đặt điểm kiểm tra để bắt lỗi trong chuỗi","Không kiểm tra","Để lỗi trôi","Bỏ qua"], a:0}
  ],

  "4.3.5": [
    {q:"Con người ở đâu trong chuỗi AI?", o:["Ở những bước cần duyệt","Không ở đâu","Làm hết mọi bước","Chỉ đứng nhìn"], a:0},
    {q:"Bước nào cần người duyệt?", o:["Việc quan trọng, nhạy cảm","Mọi việc","Không việc nào","Việc dễ"], a:0},
    {q:"Bước máy tự làm được là?", o:["Việc lặp, ít rủi ro","Việc nhạy cảm","Mọi việc","Không việc nào"], a:0},
    {q:"Ai giữ quyền quyết định cuối?", o:["Con người","AI","Máy in","Con chuột"], a:0},
    {q:"AI làm phần nào?", o:["Phần lặp","Phần quyết định quan trọng","Không phần nào","Tất cả không cần người"], a:0},
    {q:"Đánh dấu điểm người-duyệt giúp?", o:["Biết chỗ cần con người kiểm","Trang trí","Rối hơn","Không lợi ích"], a:0},
    {q:"Vì sao cần người trong chuỗi?", o:["Việc quan trọng cần giám sát","Cho vui","Không lý do","Để chậm hơn"], a:0},
    {q:"Giao hết cho AI ở việc nhạy cảm?", o:["Không nên","Nên","Bắt buộc","Tốt nhất"], a:0},
    {q:"Con người + AI trong chuỗi?", o:["Máy làm phần lặp, người quyết","Người thừa","Máy thừa","Không ai làm"], a:0},
    {q:"Bài học?", o:["Đánh dấu điểm cần người duyệt trong pipeline","Bỏ con người","Giao hết AI","Không cần ai"], a:0}
  ],

  "4.3.6": [
    {q:"Bước này áp dụng pipeline vào?", o:["Chính sản phẩm v2 của em","Sản phẩm người khác","Không gì","Một trò chơi lạ"], a:0},
    {q:"Nên thêm tính năng dùng?", o:["≥2 AI phối hợp","1 AI","0 AI","Không AI nào"], a:0},
    {q:"Tính năng đó giải quyết?", o:["Một việc thật cho người dùng","Việc vô ích","Không việc gì","Việc của người khác"], a:0},
    {q:"Nên bắt đầu bằng?", o:["Pipeline nhỏ, chạy được rồi mở rộng","Pipeline khổng lồ ngay","Không làm gì","Bỏ pipeline"], a:0},
    {q:"Tích hợp AI vào sản phẩm nghĩa là?", o:["Dùng chuỗi AI trong tính năng thật","Chỉ nói lý thuyết","Không dùng","Xoá sản phẩm"], a:0},
    {q:"Pipeline nhỏ chạy được rồi?", o:["Mở rộng dần","Bỏ đi","Không làm tiếp","Xoá"], a:0},
    {q:"Tính năng dùng ≥2 AI cho thấy?", o:["Em biết phối hợp AI trong sản phẩm","Không hiểu gì","Chỉ lý thuyết","Thất bại"], a:0},
    {q:"Nên tích hợp AI ở đâu?", o:["Chỗ thật sự cần","Mọi chỗ bừa bãi","Không chỗ nào","Chỗ không liên quan"], a:0},
    {q:"Bắt đầu nhỏ giúp?", o:["Dễ kiểm soát và chạy được sớm","Rối hơn","Chậm hơn","Không lợi ích"], a:0},
    {q:"Bài học?", o:["Áp dụng pipeline AI vào sản phẩm thật","Chỉ học lý thuyết","Không tích hợp","Làm phức tạp ngay"], a:0}
  ],

  "4.3.7": [
    {q:"Chuỗi AI cũng có?", o:["Chi phí và giới hạn","Không giới hạn gì","Luôn miễn phí","Luôn nhanh"], a:0},
    {q:"Nhiều bước hơn có thể?", o:["Chậm hơn, tốn hơn","Luôn nhanh hơn","Luôn rẻ hơn","Không đổi"], a:0},
    {q:"Nên cân nhắc gì?", o:["Khi nào thật sự đáng dùng cả chuỗi","Không cần cân nhắc","Luôn dùng chuỗi dài","Không bao giờ dùng"], a:0},
    {q:"Giải pháp tốt là?", o:["Đủ dùng, không phải phức tạp nhất","Phức tạp nhất","Đắt nhất","Dài nhất"], a:0},
    {q:"Bảng đánh giá được/mất giúp?", o:["Quyết định có nên dùng pipeline","Trang trí","Rối hơn","Không lợi ích"], a:0},
    {q:"Chuỗi AI dài có thể chậm ở đâu?", o:["Ở nhiều bước nối tiếp","Không chậm","Chỉ bước đầu","Không có bước"], a:0},
    {q:"Khi nào không đáng dùng chuỗi?", o:["Khi lợi ích ít hơn chi phí","Luôn đáng","Không bao giờ","Mọi lúc"], a:0},
    {q:"'Đủ dùng' nghĩa là?", o:["Giải quyết được vấn đề, không thừa","Càng phức tạp càng tốt","Thiếu chức năng","Không dùng được"], a:0},
    {q:"Đánh giá chi phí giúp?", o:["Dùng AI hợp lý","Lãng phí","Không lợi ích","Che lỗi"], a:0},
    {q:"Bài học?", o:["Cân nhắc được/mất khi dùng chuỗi AI","Luôn dùng chuỗi dài","Không bao giờ dùng","Bỏ qua chi phí"], a:0}
  ],

  "4.3.8": [
    {q:"Trình diễn pipeline nghĩa là?", o:["Demo chuỗi AI cho lớp","Giấu pipeline","Xoá","Không làm gì"], a:0},
    {q:"Nên giải thích gì?", o:["Mỗi mắt xích làm gì, vì sao cần","Chỉ màu sắc","Chỉ tên","Không gì"], a:0},
    {q:"Nên chuẩn bị trả lời?", o:["'Nếu bước này lỗi thì sao?'","Không câu nào","Chỉ câu chào","Trốn tránh"], a:0},
    {q:"Demo chuỗi AI cho thấy?", o:["Nó chạy thật","Chỉ ý tưởng","Không gì","Ảnh tĩnh"], a:0},
    {q:"Giải thích từng mắt xích giúp?", o:["Người xem hiểu pipeline","Rối hơn","Che giấu","Không lợi ích"], a:0},
    {q:"Trả lời chất vấn của lớp cần?", o:["Hiểu rõ pipeline của mình","May mắn","Trốn tránh","Không chuẩn bị"], a:0},
    {q:"Nên demo pipeline thế nào?", o:["Chạy thật từ đầu đến cuối","Chỉ nói suông","Không demo","Đọc slide"], a:0},
    {q:"Câu hỏi 'nếu bước lỗi thì sao' liên quan?", o:["Điểm kiểm tra và người duyệt","Màu sắc","Tên","Không gì"], a:0},
    {q:"Trình diễn tốt cần?", o:["Hiểu và giải thích rõ ràng","Đọc vẹt","Trốn câu hỏi","Không chuẩn bị"], a:0},
    {q:"Bài học?", o:["Demo và giải thích được pipeline của mình","Giấu pipeline","Không giải thích","Đọc slide"], a:0}
  ]

});

/* ===== QUIZ — MODULE 4.4 – 4.7 ===== */
Object.assign(window.LESSON_QUIZ, {

  "4.4.1": [
    {q:"Dự án lớn cần?", o:["Nghĩ lớn nhưng chia nhỏ","Làm hết một lần","Không chia","Bỏ qua"], a:0},
    {q:"Từ ý tưởng lớn, nên?", o:["Liệt kê đầu việc và mốc thời gian","Làm ngay không kế hoạch","Đợi may mắn","Bỏ cuộc"], a:0},
    {q:"Việc còn 'to quá' thì?", o:["Chia tiếp cho đến khi làm được","Để nguyên","Bỏ đi","Không chia"], a:0},
    {q:"Nên chia đến khi mỗi việc?", o:["Làm được trong 1-2 buổi","To bằng cả dự án","Không rõ","Vô hạn"], a:0},
    {q:"Phân rã Capstone giúp?", o:["Việc lớn thành nhiều việc nhỏ dễ làm","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"'Nghĩ lớn, chia nhỏ' là?", o:["Có tầm nhìn nhưng làm từng bước","Chỉ mơ mộng","Chỉ làm vặt","Không nghĩ gì"], a:0},
    {q:"Bản phân rã Capstone gồm?", o:["≥15 đầu việc cụ thể","1 việc","Không việc nào","Chỉ tên"], a:0},
    {q:"Mốc thời gian giúp?", o:["Biết khi nào làm gì","Trang trí","Tốn giấy","Không gì"], a:0},
    {q:"Việc nhỏ dễ làm hơn vì?", o:["Rõ ràng, vừa sức","To hơn","Khó hơn","Mơ hồ hơn"], a:0},
    {q:"Bài học?", o:["Chia dự án lớn thành nhiều đầu việc","Làm hết một lần","Không chia","Bỏ kế hoạch"], a:0}
  ],

  "4.4.2": [
    {q:"Bảng theo dõi công việc gồm cột?", o:["Cần làm - Đang làm - Xong","Đỏ - Vàng - Xanh","Sáng - Trưa - Tối","Không cột nào"], a:0},
    {q:"Nên cập nhật bảng?", o:["Hằng tuần","Không bao giờ","Một lần rồi thôi","Ngẫu nhiên"], a:0},
    {q:"Không nên để quá nhiều việc ở?", o:["'Đang làm'","'Xong'","'Cần làm'","Không cột nào"], a:0},
    {q:"Bảng theo dõi giúp?", o:["Luôn thấy tiến độ","Rối hơn","Không lợi ích","Che việc"], a:0},
    {q:"Di chuyển việc qua ba cột để?", o:["Theo dõi trạng thái","Trang trí","Cho vui","Không lý do"], a:0},
    {q:"Quá nhiều việc 'đang làm' thì?", o:["Dễ dở dang","Tốt hơn","Nhanh hơn","Không sao"], a:0},
    {q:"Việc hoàn thành chuyển sang cột?", o:["Xong","Cần làm","Đang làm","Không cột nào"], a:0},
    {q:"Bảng quản lý dùng thật giúp?", o:["Không lạc, đúng tiến độ","Rối hơn","Tốn thời gian","Không lợi ích"], a:0},
    {q:"Cập nhật hằng tuần giúp?", o:["Nắm tình hình đều đặn","Quên việc","Không đổi","Rối"], a:0},
    {q:"Bài học?", o:["Dùng bảng Cần-Đang-Xong để quản lý","Không quản lý","Nhớ trong đầu hết","Bỏ theo dõi"], a:0}
  ],

  "4.4.3": [
    {q:"Việc nào cũng có thể?", o:["Trễ","Không bao giờ trễ","Tự xong","Không cần làm"], a:0},
    {q:"Nên lường trước?", o:["Rủi ro","Không gì","Chỉ điểm tốt","Màu sắc"], a:0},
    {q:"Cần xác định?", o:["Việc dễ trễ, dấu hiệu, phương án B","Chỉ tên việc","Chỉ màu","Không gì"], a:0},
    {q:"'Phương án B' là?", o:["Kế hoạch dự phòng","Kế hoạch chính","Không có gì","Màu sắc"], a:0},
    {q:"Chuẩn bị cho rủi ro giúp?", o:["Không hoảng khi nó xảy ra","Hoảng hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Bảng rủi ro gồm?", o:["Rủi ro - dấu hiệu - phương án B","Chỉ màu","Chỉ tên","Không gì"], a:0},
    {q:"'Dấu hiệu' của rủi ro để?", o:["Nhận biết sớm khi rủi ro đến","Trang trí","Cho vui","Không lý do"], a:0},
    {q:"Ước lượng giúp?", o:["Biết việc nào dễ trễ","Không lợi ích","Rối hơn","Che việc"], a:0},
    {q:"Không có phương án B thì?", o:["Dễ bị động khi gặp khó","An toàn hơn","Tốt hơn","Không sao"], a:0},
    {q:"Bài học?", o:["Lường trước rủi ro và có phương án B","Không lo rủi ro","Chỉ hy vọng","Bỏ kế hoạch"], a:0}
  ],

  "4.4.4": [
    {q:"Báo cáo tiến độ nên?", o:["Ngắn gọn, đều đặn","Dài dòng","Không báo","Ngẫu nhiên"], a:0},
    {q:"Báo cáo gồm ba ý?", o:["Xong gì - Vướng gì - Sắp làm gì","Đỏ - Vàng - Xanh","Sáng - Trưa - Tối","Không ý nào"], a:0},
    {q:"Có nên báo cả khó khăn?", o:["Có, để được giúp sớm","Không, giấu đi","Chỉ báo điều tốt","Không báo gì"], a:0},
    {q:"Giấu khó khăn thì?", o:["Không được giúp kịp","Tốt hơn","An toàn","Nhanh hơn"], a:0},
    {q:"Báo cáo dài dòng thì?", o:["Khó theo dõi","Tốt hơn","Rõ hơn","Bắt buộc"], a:0},
    {q:"'Vướng gì' để?", o:["Nêu khó khăn cần hỗ trợ","Khoe","Che giấu","Không lý do"], a:0},
    {q:"Báo cáo đều đặn giúp?", o:["Mọi người nắm tình hình","Rối hơn","Không lợi ích","Tốn thời gian"], a:0},
    {q:"Buổi báo cáo 3 phút nên?", o:["Súc tích, đúng trọng tâm","Lan man","Đọc hết mọi thứ","Bỏ qua"], a:0},
    {q:"Báo cáo trung thực giúp?", o:["Được hỗ trợ đúng lúc","Bị phạt","Không lợi ích","Mất uy tín"], a:0},
    {q:"Bài học?", o:["Báo cáo ngắn gọn, nêu cả khó khăn","Chỉ khoe điều tốt","Không báo cáo","Giấu vướng mắc"], a:0}
  ],

  "4.5.1": [
    {q:"Capstone là?", o:["Dự án lớn nhất, tham vọng hơn Level 3","Bài tập nhỏ","Trò chơi","Bài kiểm tra"], a:0},
    {q:"Đề tài Capstone do ai chọn?", o:["Chính em, tự bảo vệ","Coach chọn hộ","Ngẫu nhiên","Không ai"], a:0},
    {q:"Nên chọn thứ em?", o:["Đủ đam mê để theo đuổi","Không quan tâm","Người khác thích","Dễ nhất"], a:0},
    {q:"'Tự bảo vệ' đề tài nghĩa là?", o:["Giải thích lý do chọn trước hội đồng","Giấu lý do","Không cần lý do","Cãi nhau"], a:0},
    {q:"Đề tài Capstone so với Level 3?", o:["Tham vọng hơn","Nhỏ hơn","Y hệt","Dễ hơn"], a:0},
    {q:"Đề xuất được hội đồng coach duyệt nghĩa là?", o:["Được phép làm","Bị loại","Không cần làm","Đã xong"], a:0},
    {q:"Đam mê với đề tài giúp?", o:["Kiên trì qua nhiều tuần","Nhanh chán","Không đổi","Bỏ cuộc"], a:0},
    {q:"Chọn đề tài quá dễ thì?", o:["Chưa xứng tầm Capstone","Tốt nhất","Bắt buộc","An toàn"], a:0},
    {q:"Bảo vệ đề tài giúp em?", o:["Suy nghĩ kỹ về lựa chọn","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Bài học?", o:["Chọn và bảo vệ đề tài Capstone tham vọng","Làm bừa","Không chọn","Coach làm hộ"], a:0}
  ],

  "4.5.2": [
    {q:"Đặc tả sản phẩm nói rõ?", o:["Làm gì, cho ai, tính năng bắt buộc","Chỉ màu sắc","Chỉ tên","Không gì"], a:0},
    {q:"'Tính năng bắt buộc' (must-have) là?", o:["Phần không thể thiếu","Phần cho vui","Phần để sau","Không quan trọng"], a:0},
    {q:"Đặc tả rõ giúp?", o:["Không 'lạc đề' giữa chừng","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Nên viết đặc tả thế nào?", o:["Rõ ràng, cụ thể","Mơ hồ","Không viết","Toàn thuật ngữ"], a:0},
    {q:"Đặc tả dài khoảng?", o:["2 trang","100 trang","0 trang","1 dòng"], a:0},
    {q:"Tính năng 'để sau' là?", o:["Không bắt buộc ngay","Bắt buộc","Không bao giờ làm","Quan trọng nhất"], a:0},
    {q:"'Cho ai' trong đặc tả là?", o:["Người dùng mục tiêu","Chính em","Không ai","Máy"], a:0},
    {q:"Không có đặc tả rõ thì?", o:["Dễ làm lan man","Tốt hơn","Nhanh hơn","Không sao"], a:0},
    {q:"Đặc tả là?", o:["Bản mô tả sản phẩm sẽ làm","Sản phẩm cuối","Đồ trang trí","Bí mật"], a:0},
    {q:"Bài học?", o:["Viết đặc tả rõ để giữ hướng","Không cần đặc tả","Viết mơ hồ","Bỏ qua"], a:0}
  ],

  "4.5.3": [
    {q:"Kiến trúc là?", o:["Cách các phần ghép với nhau","Một toà nhà","Một bức tranh","Một con số"], a:0},
    {q:"Nên chọn?", o:["Công cụ phù hợp","Công cụ đắt nhất","Ngẫu nhiên","Không chọn"], a:0},
    {q:"Sơ đồ kiến trúc thể hiện?", o:["Các phần (giao diện, dữ liệu, AI) kết nối ra sao","Màu sắc","Tên","Giờ"], a:0},
    {q:"Nên ghi gì cho từng công cụ?", o:["Lý do chọn","Giá tiền","Màu","Không gì"], a:0},
    {q:"Ghi lý do chọn để?", o:["Sau nhìn lại còn nhớ","Cho dài","Tốn giấy","Không lý do"], a:0},
    {q:"Kiến trúc giúp?", o:["Hiểu sản phẩm gồm những phần nào","Trang trí","Rối hơn","Không lợi ích"], a:0},
    {q:"Các phần của sản phẩm ví dụ?", o:["Giao diện, dữ liệu, AI","Chỉ màu","Chỉ tên","Không phần nào"], a:0},
    {q:"Chọn công cụ nên dựa?", o:["Phù hợp với sản phẩm","Cái 'oách' nhất","Ngẫu nhiên","Đắt nhất"], a:0},
    {q:"Vẽ sơ đồ kiến trúc giúp?", o:["Thấy bức tranh tổng thể","Che giấu","Rối hơn","Không lợi ích"], a:0},
    {q:"Bài học?", o:["Chọn công cụ và vẽ sơ đồ các phần","Không lên kiến trúc","Chọn bừa","Bỏ sơ đồ"], a:0}
  ],

  "4.5.4": [
    {q:"Wireframe Capstone phác?", o:["Toàn bộ màn hình/luồng chính","Chỉ một nút","Không gì","Chỉ màu"], a:0},
    {q:"Nên vẽ gì?", o:["Cách người dùng đi từ đầu đến cuối","Chỉ trang trí","Chỉ tên","Không gì"], a:0},
    {q:"Nên làm gì trên giấy?", o:["Đi thử luồng để bắt lỗi sớm","Không thử","Vẽ đẹp là đủ","Bỏ qua"], a:0},
    {q:"Wireframe giúp?", o:["Hình dung sản phẩm trước khi làm","Bán sản phẩm","Rối hơn","Không lợi ích"], a:0},
    {q:"Bắt lỗi thiết kế sớm giúp?", o:["Tiết kiệm công sau này","Tốn công hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Luồng chính là?", o:["Đường người dùng đi qua sản phẩm","Màu nền","Tên file","Giờ"], a:0},
    {q:"Phác toàn bộ để?", o:["Thấy trước cấu trúc sản phẩm","Cho vui","Tốn giấy","Không lý do"], a:0},
    {q:"Đi thử luồng trên giấy?", o:["Rẻ và nhanh hơn sửa sản phẩm thật","Đắt hơn","Không làm được","Vô ích"], a:0},
    {q:"Bộ wireframe hoàn chỉnh là?", o:["Phác đủ các màn hình chính","Một màn hình","Không gì","Sản phẩm cuối"], a:0},
    {q:"Bài học?", o:["Phác toàn bộ màn hình và luồng trước khi làm","Làm luôn không phác","Chỉ vẽ đẹp","Bỏ wireframe"], a:0}
  ],

  "4.5.5": [
    {q:"Kế hoạch 10 tuần là?", o:["Lịch xây dựng chi tiết theo tuần","Một trò chơi","Một bài hát","Không gì"], a:0},
    {q:"Mỗi tuần có?", o:["Mốc kiểm","Chỉ nghỉ","Không mốc","Ngẫu nhiên"], a:0},
    {q:"Kế hoạch được duyệt là?", o:["'Lệnh khởi công'","Kết thúc","Thất bại","Không cần làm"], a:0},
    {q:"Nên chừa gì trong kế hoạch?", o:["Thời gian đệm cho sự cố","Không chừa gì","Chỉ nghỉ","Không lý do"], a:0},
    {q:"Chia việc theo tuần giúp?", o:["Quản lý tiến độ dài hạn","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Thời gian đệm dùng khi?", o:["Tuần dễ phát sinh sự cố","Không bao giờ","Chỉ để nghỉ","Không cần"], a:0},
    {q:"Mốc kiểm mỗi tuần để?", o:["Biết có đúng tiến độ không","Trang trí","Cho vui","Không lý do"], a:0},
    {q:"Kế hoạch 10 tuần cho Capstone vì?", o:["Đây là dự án lớn, dài hơi","Cho oai","Không lý do","Để lâu"], a:0},
    {q:"'Lệnh khởi công' nghĩa là?", o:["Được bắt đầu xây dựng","Dừng lại","Bỏ dự án","Nghỉ"], a:0},
    {q:"Bài học?", o:["Lập kế hoạch chi tiết có mốc và thời gian đệm","Không lập kế hoạch","Làm tới đâu hay tới đó","Bỏ mốc"], a:0}
  ],

  "4.5.6": [
    {q:"'Dựng móng' nghĩa là?", o:["Tạo dự án, khung chính chạy được","Xây tường thật","Trang trí","Ra mắt"], a:0},
    {q:"Khung chính nên?", o:["Mở lên được","Hoàn hảo ngay","Không chạy","Đầy đủ tính năng"], a:0},
    {q:"Móng vững giúp?", o:["Xây cao an toàn (thêm tính năng)","Sập nhanh","Không đổi","Rối"], a:0},
    {q:"Nên làm gì đầu tiên?", o:["Khung cơ bản chạy được","Tính năng khó nhất","Trang trí","Ra mắt"], a:0},
    {q:"'Móng chắc thì xây cao mới an toàn' nghĩa là?", o:["Nền tốt mới phát triển được","Không liên quan","Xây bừa","Bỏ móng"], a:0},
    {q:"Khung Capstone mở lên được là?", o:["Bước đầu vững chắc","Sản phẩm cuối","Thất bại","Không cần"], a:0},
    {q:"Dựng móng trước khi?", o:["Thêm các tính năng","Ra mắt","Kết thúc","Nghỉ"], a:0},
    {q:"Nền vững quan trọng vì?", o:["Mọi tính năng dựa vào đó","Cho oai","Không lý do","Trang trí"], a:0},
    {q:"Nếu móng yếu?", o:["Sản phẩm dễ gặp vấn đề về sau","Tốt hơn","Không sao","Nhanh hơn"], a:0},
    {q:"Bài học?", o:["Dựng nền vững trước khi xây tiếp","Bỏ qua nền","Trang trí trước","Ra mắt ngay"], a:0}
  ],

  "4.6.1": [
    {q:"Tuần xây 1 làm?", o:["Lõi sản phẩm - tính năng trung tâm","Trang trí","Ra mắt","Nghỉ"], a:0},
    {q:"Nên ưu tiên?", o:["Phần giải quyết đúng vấn đề chính","Phần cho vui","Phần đẹp","Phần dễ"], a:0},
    {q:"Cho nó?", o:["Hoạt động trước","Đẹp trước","Không chạy","Bỏ qua"], a:0},
    {q:"Kết thúc tuần nên?", o:["Báo cáo tiến độ ngắn","Không báo","Ra mắt","Nghỉ dài"], a:0},
    {q:"Lõi sản phẩm là?", o:["Tính năng trung tâm quan trọng nhất","Phần rìa","Trang trí","Phần thừa"], a:0},
    {q:"Vì sao làm lõi trước?", o:["Nó quyết định giá trị sản phẩm","Cho oai","Không lý do","Để lâu"], a:0},
    {q:"Mốc 1 đạt nghĩa là?", o:["Tính năng trung tâm hoạt động","Thất bại","Chưa làm gì","Ra mắt"], a:0},
    {q:"Báo cáo tiến độ cuối tuần giúp?", o:["Mọi người nắm tình hình","Trang trí","Tốn thời gian","Không lợi ích"], a:0},
    {q:"Tính năng trung tâm nên?", o:["Chạy được trước tiên","Đẹp trước","Bỏ qua","Làm cuối"], a:0},
    {q:"Bài học?", o:["Làm lõi sản phẩm hoạt động trước","Trang trí trước","Ra mắt ngay","Không ưu tiên"], a:0}
  ],

  "4.6.2": [
    {q:"Tuần xây 2 làm?", o:["Hoàn thiện luồng chính đầu-cuối","Xoá lõi","Trang trí","Nghỉ"], a:0},
    {q:"Cần bảo đảm?", o:["Người dùng đi được từ đầu đến cuối","Bị kẹt giữa chừng","Không dùng được","Chỉ nửa đường"], a:0},
    {q:"Một luồng chạy trọn so với nhiều tính năng dở?", o:["Quan trọng hơn","Kém hơn","Y hệt","Không quan trọng"], a:0},
    {q:"'Luồng chính' là?", o:["Đường đi chính của người dùng","Màu nền","Tên","Giờ"], a:0},
    {q:"Người dùng bị kẹt nghĩa là?", o:["Luồng chưa hoàn thiện","Sản phẩm tốt","Không sao","Thành công"], a:0},
    {q:"Hoàn thiện luồng đầu-cuối giúp?", o:["Sản phẩm dùng được trọn vẹn","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Mốc 2 đạt nghĩa là?", o:["Luồng chính chạy trọn","Chưa làm gì","Thất bại","Ra mắt"], a:0},
    {q:"Nên tránh?", o:["Nhiều tính năng dở dang","Một luồng hoàn chỉnh","Kiểm thử","Báo cáo"], a:0},
    {q:"Người dùng cần?", o:["Đi hết được từ đầu đến cuối","Bị kẹt","Nhiều nút vô dụng","Không dùng được"], a:0},
    {q:"Bài học?", o:["Ưu tiên một luồng chạy trọn vẹn","Nhiều thứ dở dang","Bỏ luồng chính","Ra mắt sớm"], a:0}
  ],

  "4.6.3": [
    {q:"Tuần xây 3 làm?", o:["Tích hợp AI vào sản phẩm","Xoá AI","Trang trí","Nghỉ"], a:0},
    {q:"Gắn pipeline AI đã học vào?", o:["Đúng chỗ cần","Mọi chỗ bừa","Không chỗ nào","Chỗ vô nghĩa"], a:0},
    {q:"Nên kiểm tra gì?", o:["AI chạy được trong sản phẩm thật","Màu sắc","Tên","Giờ"], a:0},
    {q:"Nên có gì để bắt lỗi?", o:["Điểm kiểm tra khi AI trả kết quả lạ","Không gì","Trang trí","Màu"], a:0},
    {q:"Tích hợp AI nghĩa là?", o:["Đưa AI vào hoạt động của sản phẩm","Chỉ nói lý thuyết","Xoá AI","Không dùng"], a:0},
    {q:"Mốc 3 đạt nghĩa là?", o:["AI chạy trong sản phẩm","Chưa có AI","Thất bại","Ra mắt"], a:0},
    {q:"Nên gắn AI ở?", o:["Chỗ thật sự cần","Mọi chỗ","Không chỗ nào","Chỗ không liên quan"], a:0},
    {q:"Kết quả AI lạ thì?", o:["Điểm kiểm tra sẽ bắt được","Bỏ qua","Không sao","Tự khỏi"], a:0},
    {q:"Pipeline AI đã học từ?", o:["Module phối hợp nhiều AI","Không đâu","Level 1","Tự nghĩ"], a:0},
    {q:"Bài học?", o:["Tích hợp AI có kiểm soát vào sản phẩm","Gắn bừa","Không dùng AI","Bỏ kiểm tra"], a:0}
  ],

  "4.6.4": [
    {q:"Tuần xây 4 làm?", o:["Tính năng phụ quan trọng thứ hai","Xoá lõi","Trang trí trước","Nghỉ"], a:0},
    {q:"Tính năng phụ giúp?", o:["Sản phẩm hoàn chỉnh hơn","Rối hơn","Hỏng lõi","Không gì"], a:0},
    {q:"Chỉ làm tính năng phụ sau khi?", o:["Lõi đã ổn","Chưa có lõi","Ra mắt","Không bao giờ"], a:0},
    {q:"Nên tránh?", o:["Sa đà tính năng phụ khi lõi chưa vững","Làm lõi trước","Kiểm thử","Báo cáo"], a:0},
    {q:"Tính năng phụ là?", o:["Bổ trợ, không phải trung tâm","Quan trọng nhất","Vô dụng","Thay lõi"], a:0},
    {q:"Mốc 4 đạt nghĩa là?", o:["Tính năng phụ hoàn thành","Chưa làm gì","Thất bại","Ra mắt"], a:0},
    {q:"Nếu lõi chưa vững mà làm phụ?", o:["Không nên","Rất tốt","Bắt buộc","Nhanh hơn"], a:0},
    {q:"Tính năng phụ giúp sản phẩm?", o:["Đầy đủ, tiện hơn","Kém đi","Không đổi","Hỏng"], a:0},
    {q:"Thứ tự đúng?", o:["Lõi trước, phụ sau","Phụ trước, lõi sau","Chỉ phụ","Không thứ tự"], a:0},
    {q:"Bài học?", o:["Thêm tính năng phụ sau khi lõi ổn","Làm phụ trước","Bỏ lõi","Trang trí trước"], a:0}
  ],

  "4.6.5": [
    {q:"Kiểm thử giữa kỳ là?", o:["Người ngoài dùng thử bản giữa kỳ","Tự thử","Ra mắt","Bỏ thử"], a:0},
    {q:"Nên quan sát?", o:["Họ dùng, ghi lỗi","Màu áo","Giờ giấc","Không gì"], a:0},
    {q:"Test sớm giữa kỳ giúp?", o:["Tránh dồn lỗi về cuối","Dồn lỗi","Không lợi ích","Chậm hơn"], a:0},
    {q:"Sau kiểm thử, lập?", o:["Danh sách cần sửa","Danh sách khen","Không gì","Bài hát"], a:0},
    {q:"Người ngoài test cho?", o:["Góc nhìn khách quan","Thiên vị","Không lợi ích","Sai lệch"], a:0},
    {q:"'Giữa kỳ' nghĩa là?", o:["Khoảng giữa quá trình xây dựng","Cuối cùng","Đầu tiên","Sau ra mắt"], a:0},
    {q:"Test giữa kỳ giúp phát hiện?", o:["Lỗi sớm để còn thời gian sửa","Không gì","Màu sắc","Tên"], a:0},
    {q:"Biên bản test gồm?", o:["Lỗi và danh sách sửa","Chỉ điểm số","Chỉ màu","Không gì"], a:0},
    {q:"Dồn lỗi về cuối thì?", o:["Khó sửa kịp","Tốt hơn","Không sao","Nhanh hơn"], a:0},
    {q:"Bài học?", o:["Kiểm thử giữa kỳ để sửa sớm","Chỉ test cuối","Không test","Che lỗi"], a:0}
  ],

  "4.6.6": [
    {q:"Tuần xây 5 làm?", o:["Sửa và gia cố theo phản hồi","Thêm thật nhiều tính năng","Trang trí","Nghỉ"], a:0},
    {q:"Nên xử lý?", o:["Lỗi từ kiểm thử","Không gì","Chỉ màu","Tên"], a:0},
    {q:"Ưu tiên sửa?", o:["Lỗi ảnh hưởng người dùng nhiều nhất","Lỗi nhỏ nhất","Không sửa","Lỗi màu"], a:0},
    {q:"'Gia cố' nghĩa là?", o:["Làm sản phẩm ổn định, chắc hơn","Làm yếu đi","Xoá bớt","Trang trí"], a:0},
    {q:"Vá điểm yếu giúp?", o:["Sản phẩm bền hơn","Yếu hơn","Không đổi","Hỏng"], a:0},
    {q:"Mốc 5 đạt nghĩa là?", o:["Đã sửa và gia cố xong","Chưa làm gì","Thất bại","Ra mắt"], a:0},
    {q:"Phản hồi từ kiểm thử giúp?", o:["Biết sửa gì","Không gì","Rối hơn","Che lỗi"], a:0},
    {q:"Nên sửa lỗi nào trước?", o:["Ảnh hưởng nhiều nhất","Ít gặp nhất","Về màu","Không sửa"], a:0},
    {q:"Gia cố sau kiểm thử để?", o:["Sản phẩm sẵn sàng hơn","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Bài học?", o:["Sửa lỗi và làm sản phẩm ổn định","Thêm tính năng bừa","Bỏ qua lỗi","Không sửa"], a:0}
  ],

  "4.6.7": [
    {q:"Tuần xây 6 làm?", o:["Hoàn thiện và viết hướng dẫn sử dụng","Bắt đầu lại","Xoá sản phẩm","Nghỉ"], a:0},
    {q:"Nên làm gì về giao diện?", o:["Làm đẹp vừa đủ","Trang trí quá đà","Bỏ giao diện","Làm xấu"], a:0},
    {q:"Hướng dẫn sử dụng để?", o:["Người mới dùng được ngay","Che thông tin","Cho dài","Không lý do"], a:0},
    {q:"Nên nhờ ai đọc hướng dẫn?", o:["Người chưa từng dùng","Chỉ mình em","Không ai","Người đã rất quen"], a:0},
    {q:"Người mới đọc hướng dẫn để?", o:["Xem có hiểu không","Cho vui","Chê","Không lý do"], a:0},
    {q:"'Bản ứng viên phát hành' nghĩa là?", o:["Bản gần như sẵn sàng ra mắt","Bản nháp đầu","Bản hỏng","Không có"], a:0},
    {q:"Hoàn thiện gồm?", o:["Làm đẹp vừa đủ + hướng dẫn","Chỉ thêm lỗi","Xoá tính năng","Không gì"], a:0},
    {q:"Hướng dẫn nên?", o:["Ngắn, dễ hiểu","Dài, khó hiểu","Không có","Toàn thuật ngữ"], a:0},
    {q:"Vì sao cần hướng dẫn?", o:["Giúp người dùng bắt đầu dễ dàng","Cho dài","Trang trí","Không lý do"], a:0},
    {q:"Bài học?", o:["Hoàn thiện và viết hướng dẫn dễ hiểu","Bỏ hướng dẫn","Trang trí quá đà","Không hoàn thiện"], a:0}
  ],

  "4.6.8": [
    {q:"Tổng kiểm thử trước?", o:["Khi phát hành","Sau phát hành","Không bao giờ","Khi bắt đầu"], a:0},
    {q:"Nên đi qua?", o:["Danh sách kiểm (checklist)","Không gì","Chỉ màu","Tên"], a:0},
    {q:"Cần bảo đảm?", o:["Mọi luồng chính chạy đúng, không lỗi nghiêm trọng","Chỉ đẹp","Chỉ nhanh","Không kiểm"], a:0},
    {q:"Khi nào yên tâm phát hành?", o:["Tick đủ checklist","Chưa kiểm gì","Có lỗi nặng","Không bao giờ"], a:0},
    {q:"Checklist phát hành giúp?", o:["Không bỏ sót kiểm tra quan trọng","Trang trí","Tốn thời gian","Che lỗi"], a:0},
    {q:"Lỗi nghiêm trọng còn thì?", o:["Chưa nên phát hành","Cứ phát hành","Không sao","Tốt hơn"], a:0},
    {q:"'Tổng kiểm thử' là?", o:["Kiểm tra toàn bộ lần cuối","Kiểm một phần","Không kiểm","Trang trí"], a:0},
    {q:"Mọi luồng chính chạy đúng nghĩa là?", o:["Người dùng dùng được trọn vẹn","Bị kẹt","Không dùng được","Chỉ nửa"], a:0},
    {q:"Tick đủ checklist rồi?", o:["Mới phát hành","Không phát hành","Xoá đi","Bắt đầu lại"], a:0},
    {q:"Bài học?", o:["Kiểm tra toàn bộ trước khi phát hành","Phát hành ngay","Bỏ kiểm tra","Che lỗi"], a:0}
  ],

  "4.6.9": [
    {q:"Phát hành Capstone là?", o:["Đưa sản phẩm đến người dùng thật","Giấu sản phẩm","Xoá","Không làm gì"], a:0},
    {q:"Nên mời ai?", o:["Đúng nhóm người cần sản phẩm","Bất kỳ ai","Không ai","Người ghét nó"], a:0},
    {q:"Nên làm gì cho họ?", o:["Hướng dẫn bắt đầu","Bỏ mặc","Giấu cách dùng","Không nói gì"], a:0},
    {q:"Đây là cột mốc?", o:["Lớn - sản phẩm ra đời thật","Nhỏ nhặt","Vô nghĩa","Kết thúc buồn"], a:0},
    {q:"Sản phẩm bước ra đời thật khi?", o:["Có người dùng thật","Nằm im","Chỉ mình biết","Không ai dùng"], a:0},
    {q:"Phát hành nghĩa là?", o:["Đưa ra cho người dùng","Giữ bí mật","Xoá","Trang trí"], a:0},
    {q:"Hướng dẫn người dùng bắt đầu giúp?", o:["Họ dùng được ngay","Họ bối rối","Không lợi ích","Rời đi"], a:0},
    {q:"Capstone chính thức có người dùng là?", o:["Thành công quan trọng","Thất bại","Không đáng kể","Chỉ để khoe"], a:0},
    {q:"Nên mời người?", o:["Thật sự cần sản phẩm","Không liên quan","Ghét sản phẩm","Bất kỳ"], a:0},
    {q:"Bài học?", o:["Đưa Capstone đến đúng người dùng thật","Giấu đi","Không phát hành","Mời bừa"], a:0}
  ],

  "4.6.10": [
    {q:"Tuần theo dõi sau?", o:["Phát hành","Bắt đầu","Không bao giờ","Kiểm thử"], a:0},
    {q:"Nên làm gì?", o:["Thu số liệu, sửa lỗi nóng","Nghỉ hẳn","Bỏ mặc","Xoá sản phẩm"], a:0},
    {q:"'Lỗi nóng' là?", o:["Lỗi gấp cần sửa ngay","Lỗi nhỏ để sau","Không lỗi","Màu sắc"], a:0},
    {q:"Phản hồi tuần đầu?", o:["Rất quý, cần lắng nghe","Vô ích","Nên bỏ qua","Đáng ghét"], a:0},
    {q:"Theo dõi giúp?", o:["Biết người dùng phản ứng ra sao","Che số liệu","Không lợi ích","Rối"], a:0},
    {q:"Nên ghi lại?", o:["Điều cần cải thiện","Không gì","Chỉ màu","Tên"], a:0},
    {q:"Số liệu tuần đầu cho biết?", o:["Sản phẩm hoạt động thế nào thật sự","Màu yêu thích","Giờ","Không gì"], a:0},
    {q:"Sửa lỗi nóng để?", o:["Người dùng không bỏ đi","Cho vui","Tốn công","Không lý do"], a:0},
    {q:"Báo cáo tuần đầu sau phát hành giúp?", o:["Nắm tình hình để cải thiện","Trang trí","Không lợi ích","Che lỗi"], a:0},
    {q:"Bài học?", o:["Theo dõi và xử lý nhanh sau phát hành","Bỏ mặc","Không theo dõi","Che lỗi"], a:0}
  ],

  "4.7.1": [
    {q:"'Câu chuyện 2 năm' nhìn lại?", o:["Từ buổi gõ phím đầu đến Capstone","Chỉ hôm nay","Không gì","Chỉ Capstone"], a:0},
    {q:"Nên kể gì?", o:["Cột mốc và điều em trưởng thành","Chỉ điểm xấu","Không gì","Chuyện người khác"], a:0},
    {q:"Đây là chất liệu cho?", o:["Bài trình bày tốt nghiệp","Một trò chơi","Mật khẩu","Không gì"], a:0},
    {q:"Nên chọn kể?", o:["Vài khoảnh khắc đáng nhớ nhất","Tất cả chi tiết","Không gì","Chuyện không liên quan"], a:0},
    {q:"Nhìn lại hành trình giúp?", o:["Thấy mình đã tiến xa","Buồn bã","Không đổi","Quên hết"], a:0},
    {q:"Câu chuyện của em nên?", o:["Chân thật, có cảm xúc","Bịa đặt","Khô khan","Chép của bạn"], a:0},
    {q:"Nên tránh gì khi kể?", o:["Liệt kê tất cả, dài dòng","Chọn lọc","Kể mạch lạc","Có cảm xúc"], a:0},
    {q:"Dàn ý bài trình bày để?", o:["Kể hành trình có thứ tự","Cho dài","Trang trí","Không lý do"], a:0},
    {q:"Khoảnh khắc đáng nhớ giúp?", o:["Bài kể sinh động, cuốn hút","Nhàm chán","Rối","Không gì"], a:0},
    {q:"Bài học?", o:["Nhìn lại hành trình để kể câu chuyện của mình","Quên hết","Không kể","Chép của bạn"], a:0}
  ],

  "4.7.2": [
    {q:"Portfolio (hồ sơ năng lực) là?", o:["Tập hợp mọi sản phẩm của em","Một trò chơi","Một mật khẩu","Một con số"], a:0},
    {q:"Portfolio dạng?", o:["Trang web hoặc tài liệu","Chỉ trong đầu","Không lưu","Bí mật"], a:0},
    {q:"Mỗi dự án nên có?", o:["Mô tả và hình ảnh","Chỉ tên","Không gì","Chỉ ngày"], a:0},
    {q:"Portfolio là 'bằng chứng'?", o:["Em làm được gì","Em thích màu gì","Giờ học","Không gì"], a:0},
    {q:"Portfolio hữu ích?", o:["Về sau (học, thi, xin việc)","Không lúc nào","Chỉ hôm nay","Không lợi ích"], a:0},
    {q:"Nên gom gì vào portfolio?", o:["Các dự án đã làm","Bài của người khác","Không gì","Ảnh ngẫu nhiên"], a:0},
    {q:"Portfolio số nghĩa là?", o:["Lưu dạng số (web/tài liệu)","Vẽ tay giấy","Chỉ nói","Không lưu"], a:0},
    {q:"Mô tả dự án giúp?", o:["Người xem hiểu em làm gì","Che giấu","Rối hơn","Không lợi ích"], a:0},
    {q:"Portfolio hoàn chỉnh thể hiện?", o:["Hành trình và năng lực của em","Không gì","Màu sắc","Giờ giấc"], a:0},
    {q:"Bài học?", o:["Xây portfolio ghi lại thành quả","Không lưu gì","Giấu sản phẩm","Chép của bạn"], a:0}
  ],

  "4.7.3": [
    {q:"Bài trình bày tốt nghiệp dài?", o:["Khoảng 7 phút","7 giờ","Cả ngày","10 giây"], a:0},
    {q:"Nội dung gồm?", o:["Hành trình + demo Capstone","Chỉ hát","Chỉ ảnh","Không gì"], a:0},
    {q:"Slide nên?", o:["Gọn, nhiều hình","Dày chữ","Không hình","Toàn số"], a:0},
    {q:"Nên luyện gì?", o:["Nói trôi chảy phần hành trình và demo","Không luyện","Đọc vẹt","Bỏ qua"], a:0},
    {q:"Nên làm gì khi luyện?", o:["Bấm giờ để vừa 7 phút","Không tính giờ","Nói tuỳ ý","Bỏ qua"], a:0},
    {q:"Luyện nói giúp?", o:["Trình bày mượt, tự tin","Run hơn","Quên bài","Không đổi"], a:0},
    {q:"Slide gọn giúp?", o:["Người nghe dễ theo dõi","Rối hơn","Khó hiểu","Không lợi ích"], a:0},
    {q:"Demo Capstone cho thấy?", o:["Sản phẩm chạy thật","Chỉ ý tưởng","Không gì","Ảnh"], a:0},
    {q:"Bấm giờ khi luyện để?", o:["Chắc chắn đúng thời lượng","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Bài học?", o:["Chuẩn bị slide gọn và luyện nói có bấm giờ","Không luyện","Slide dày chữ","Đọc vẹt"], a:0}
  ],

  "4.7.4": [
    {q:"Tổng duyệt là?", o:["Chạy thử toàn bộ Demo Day","Ra mắt luôn","Không thử","Bỏ qua"], a:0},
    {q:"Nên xử lý trước gì?", o:["Sự cố kỹ thuật (mạng, máy chiếu, âm thanh)","Không gì","Chỉ màu","Tên"], a:0},
    {q:"Nên chuẩn bị phương án B nếu?", o:["Demo trực tiếp gặp trục trặc","Không cần","Mọi thứ hoàn hảo","Không bao giờ"], a:0},
    {q:"Ví dụ phương án B?", o:["Video quay sẵn","Không có gì","Bỏ demo","Đọc slide"], a:0},
    {q:"Diễn tập trọn vẹn giúp?", o:["Tự tin và ít sự cố","Run hơn","Không lợi ích","Rối"], a:0},
    {q:"Tổng duyệt trước Demo Day để?", o:["Phát hiện và khắc phục vấn đề","Cho vui","Tốn thời gian","Không lý do"], a:0},
    {q:"Sự cố kỹ thuật thường gặp?", o:["Mạng, máy chiếu, âm thanh","Màu áo","Thời tiết","Giờ ăn"], a:0},
    {q:"Vượt tổng duyệt nghĩa là?", o:["Sẵn sàng cho Demo Day thật","Thất bại","Kết thúc","Bỏ cuộc"], a:0},
    {q:"Phương án B giúp?", o:["Không bị động khi trục trặc","Rối hơn","Không lợi ích","Chậm hơn"], a:0},
    {q:"Bài học?", o:["Chạy thử toàn bộ và có phương án dự phòng","Không diễn tập","Không có phương án B","Bỏ qua"], a:0}
  ],

  "4.7.5": [
    {q:"Demo Day tốt nghiệp trình bày trước?", o:["Phụ huynh, khách mời, các bé khoá dưới","Chỉ mình em","Không ai","Con mèo"], a:0},
    {q:"Nên làm gì?", o:["Tự tin kể hành trình, demo, trả lời phản biện","Trốn tránh","Đọc lí nhí","Bỏ chạy"], a:0},
    {q:"Đây là lúc?", o:["Toả sáng","Xấu hổ","Sợ hãi","Bỏ cuộc"], a:0},
    {q:"Nên làm gì để bớt hồi hộp?", o:["Hít thở sâu, nhìn khán giả","Cúi gằm","Nói thật nhanh","Bỏ chạy"], a:0},
    {q:"Nên tự hào về?", o:["Chặng đường đã qua","Không gì","Người khác","Điểm số"], a:0},
    {q:"Trả lời phản biện cần?", o:["Hiểu rõ sản phẩm, bình tĩnh","Trốn tránh","Cãi nhau","Im lặng"], a:0},
    {q:"Demo sản phẩm để?", o:["Cho mọi người thấy nó chạy thật","Chỉ nói suông","Che giấu","Không demo"], a:0},
    {q:"Nhìn khán giả khi nói giúp?", o:["Kết nối, tự tin hơn","Run hơn","Không lợi ích","Rối"], a:0},
    {q:"Demo Day tốt nghiệp là?", o:["Cột mốc lớn của hành trình","Bình thường","Vô nghĩa","Kết thúc buồn"], a:0},
    {q:"Bài học?", o:["Tự tin trình bày và tự hào về hành trình","Trốn tránh","Sợ hãi","Bỏ cuộc"], a:0}
  ],

  "4.7.6": [
    {q:"Lễ tốt nghiệp là dịp?", o:["Nhận chứng nhận và định hướng tiếp theo","Kết thúc mọi thứ","Nghỉ hè","Không gì"], a:0},
    {q:"Con đường tiếp theo có thể?", o:["Học sâu, thi, dự án riêng","Không gì","Quên hết","Bỏ cuộc"], a:0},
    {q:"Kết thúc lộ trình là?", o:["Điểm khởi đầu cho hành trình lớn hơn","Dấu chấm hết","Thất bại","Vô nghĩa"], a:0},
    {q:"Chứng nhận hoàn thành ghi nhận?", o:["Nỗ lực và thành quả của em","Không gì","Màu sắc","Giờ giấc"], a:0},
    {q:"Bản định hướng cá nhân giúp?", o:["Biết bước đi tiếp theo","Trang trí","Cho vui","Không lý do"], a:0},
    {q:"Sau khi tốt nghiệp, em nên?", o:["Tiếp tục học và phát triển","Ngừng hẳn","Quên hết","Sợ hãi"], a:0},
    {q:"Hành trình đã cho em?", o:["Kiến thức và kỹ năng thật","Không gì","Chỉ mệt mỏi","Vô ích"], a:0},
    {q:"'Định hướng' nghĩa là?", o:["Chọn hướng đi tương lai","Kết thúc","Quay lại đầu","Không nghĩ gì"], a:0},
    {q:"Tự hào về hành trình vì?", o:["Em đã học và làm được nhiều điều","Không có gì","Người khác làm hộ","Vô nghĩa"], a:0},
    {q:"Bài học cuối cùng?", o:["Đây là khởi đầu, hãy tiếp tục hành trình học AI","Đã hết, dừng lại","Không cần học nữa","Quên tất cả"], a:0}
  ]

});
