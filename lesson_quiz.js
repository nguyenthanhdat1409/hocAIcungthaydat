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
