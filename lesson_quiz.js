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
