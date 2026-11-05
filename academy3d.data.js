/* =========================================================
   academy3d.data.js — DỮ LIỆU AI Academy 3D (tách khỏi logic Three.js)
   KHU VỰC (zone) = một "màn/địa điểm": môi trường (env builder), spawn, NPC,
   cửa chuyển khu (door), chuỗi nhiệm vụ + điều kiện. QuestEngine đọc dữ liệu này.
   Thêm khu/nhiệm vụ mới = sửa DỮ LIỆU, không sửa mã game.
   Loại nhiệm vụ: talk | reach | collect | investigate | decision | quiz
     (engine mở rộng cho inspect | classify | match | choose | experiment | explore).
   Câu hỏi quiz LẤY TỪ ngân hàng có sẵn của web (window.BANK) theo topic/độ khó.
   ========================================================= */
(function () {
  "use strict";
  var PI = Math.PI;

  /* ---------------- KHU 1: Khuôn viên ngoài trời (hub + onboarding) ---------------- */
  var campus = {
    id: "campus", name: "Khuôn viên Học viện AI", env: "campus",
    questTitle: "🏙️ Khuôn viên Học viện AI",
    spawn: { x: 0, z: 7, yaw: PI },
    npcs: [
      { id: "guide", kind: "person", name: "Bạn Na (hướng dẫn)", emo: "🧭", x: -1.6, z: 3.2, color: 0x7dd3fc, look: { hair: 0x3a2a1a, skin: 0xffe0bd, style: "long", pants: 0x2563eb }, wander: [[-1.6, 3.2], [2.2, 3.4], [2.6, 5], [-1, 5.2]] },
      { id: "amb1", kind: "person", model: "grandpa", name: "Ông dạo công viên", emo: "🙂", x: 5.5, z: -1.5, color: 0xfca5a5, look: { hair: 0x4a2f1a, skin: 0xf1c79b, style: "short", pants: 0xb45309 }, wander: [[5.5, -1.5], [7.5, -4.5], [4, -4], [6, -1]] },
      { id: "amb2", kind: "person", model: "kid_boy", name: "Học sinh", emo: "🎒", x: -6.5, z: -2.5, color: 0xa7f3d0, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0x0f766e }, wander: [[-6.5, -2.5], [-6.5, 2.5], [-3.5, 1], [-5, -1]] },
      { id: "door_academy", kind: "door", name: "Học viện AI 🏫", emo: "🏫", to: "academy1", x: -4.2, z: -8.6 },
      { id: "door_library", kind: "door", name: "Thư viện 📚", emo: "📚", to: "library", x: 4.2, z: -8.6 },
      { id: "door_park", kind: "door", name: "Công viên 🌳", emo: "🌳", to: "park", x: 0, z: 11.5 },
      { id: "door_lab", kind: "door", name: "Phòng Lab 🔬", emo: "🔬", to: "lab", x: 9, z: 0.5 }
    ],
    quests: [
      {
        id: "welcome", type: "talk", npc: "guide",
        objective: "🧭 Nói chuyện với bạn Na ở quảng trường",
        avatar: "🧭", who: "Bạn Na",
        lines: [
          "Chào cậu! Đây là <b>Khuôn viên Học viện AI</b> 🌳. Dùng <b>WASD/mũi tên</b> (hoặc cần gạt) để đi, <b>V</b> đổi góc nhìn.",
          "Phía trước là <b>🏫 Học viện AI</b> và <b>📚 Thư viện</b>. Lại gần cửa rồi nhấn <b>E</b> (hoặc nút 💬) để vào.",
          "Trường vừa có một <span class='a3dHl a3dHl-pink'>vụ rắc rối</span>: AI khóa nhầm tài khoản bạn Minh. Hãy vào <b>Học viện</b> gặp cô Lan để điều tra nhé!"
        ]
      },
      {
        id: "enter-academy", type: "reach", target: "door_academy",
        objective: "🏫 Vào Học viện AI để nhận vụ án của Minh",
        requires: { quest: "welcome" }
      }
    ]
  };

  /* ---------------- KHU 2: Học viện AI — Vụ án của Minh (nội thất, điều tra) ---------------- */
  var academy1 = {
    id: "academy1", name: "Học viện AI — Vụ án của Minh", env: "classroom",
    questTitle: "🔍 Học viện AI — Vụ án của Minh",
    spawn: { x: 0, z: 3.5, yaw: PI },
    returnTo: "campus",                        // thoát khỏi lớp → về khuôn viên
    reward: { xp: 15, coins: 20, badge: "Điều tra viên AI", cloudLesson: "ai:game:academy1" },
    endTitle: "Phá án thành công! 🎉",
    endTier: "Bạn là một Thám tử AI tài ba!",
    lesson: "AI đưa ra kết luận dựa trên <b>dữ liệu mà nó được học</b>. Nếu dữ liệu ít hoặc lệch, kết luận có thể sai. AI rất hữu ích để <b>gợi ý</b>, nhưng đừng coi nó là chân lý — hãy luôn <b>hỏi lý do &amp; tự kiểm chứng</b>!",
    npcs: [
      { id: "lan", kind: "teacher", name: "Cô Lan", emo: "👩‍🏫", x: -4.6, z: -4.6, color: 0xec6fb0, look: { hair: 0x5b3a29, skin: 0xffe0bd, style: "bun", glasses: true, pants: 0xb24f86 } },
      { id: "c0", kind: "person", name: "Trực phòng máy", emo: "🖥️", x: 4.6, z: -4.6, color: 0x5b8def, look: { hair: 0x2b2b2b, skin: 0xf1c79b, style: "short", pants: 0x3b5bdb }, prop: "computer" },
      { id: "c1", kind: "person", model: "kid_girl", name: "Bạn cùng lớp", emo: "📄", x: -4.6, z: 4.2, color: 0xf6c344, look: { hair: 0x6b4a2a, skin: 0xffe0bd, style: "long", pants: 0xca8a04 }, prop: "paper" },
      { id: "c2", kind: "person", model: "kid_boy", name: "Kỹ thuật viên", emo: "📊", x: 4.6, z: 4.2, color: 0x58d898, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0x0ea371 }, prop: "chart" },
      { id: "ai", kind: "robot", name: "Máy AI", emo: "🤖", x: 0, z: -5.9, color: 0xc4b5fd },
      { id: "exit", kind: "door", name: "Ra khuôn viên 🚪", emo: "🚪", to: "campus", x: 0, z: 7.1 }
    ],
    quests: [
      {
        id: "brief", type: "talk", npc: "lan",
        objective: "🎧 Nghe cô Lan giao nhiệm vụ",
        avatar: "👩‍🏫", who: "Cô Lan",
        lines: [
          "Chào Thám tử AI! 07:42 sáng nay, hệ thống AI của trường vừa <span class='a3dHl a3dHl-pink'>khóa tài khoản</span> bạn Minh vì nghi <b>gian lận</b>.",
          "Minh nói mình bị oan. Em có <span class='a3dHl a3dHl-orange'>30 phút</span> để <span class='a3dHl a3dHl-violet'>điều tra</span> và tìm ra sự thật nhé!",
          "Lại gần người có dấu <b>❗</b> rồi nhấn <b>E</b> (hoặc nút 💬) để nói chuyện và thu thập manh mối."
        ],
        requires: {}
      },
      {
        id: "collect", type: "collect",
        objective: "🔎 Gặp 3 nhân vật và thu thập đủ 3 manh mối",
        need: 3,
        items: [
          { id: "c0", npc: "c0", ic: "🖥️", label: "Nhật ký AI", info: "Máy AI báo: bài của Minh <b>giống tài liệu trên mạng 85%</b> → nó tự kết luận là “chép”.", verdict: "support", why: "Đây chính là <b>căn cứ</b> khiến AI buộc tội — nhưng mới chỉ là một con số, chưa phải sự thật." },
          { id: "c1", npc: "c1", ic: "📄", label: "Bài của Minh", info: "Minh dùng nhiều câu giống <b>dàn ý thầy phát</b> cho cả lớp — vì em học thuộc đúng dàn ý đó.", verdict: "refute", why: "Giống nhau có <b>lý do chính đáng</b>: cả lớp học chung dàn ý. Giống ≠ gian lận." },
          { id: "c2", npc: "c2", ic: "📊", label: "Dữ liệu của AI", info: "Máy AI chỉ được học từ <b>50 bài mẫu</b> và <b>chưa từng thấy</b> cách trình bày của Minh.", verdict: "refute", why: "AI học từ dữ liệu <b>quá ít &amp; lệch</b> nên dễ hiểu nhầm cái gì “lạ” thành “sai”." }
        ],
        requires: { quest: "brief" }
      },
      {
        id: "investigate", type: "investigate",
        objective: "📋 Mở Bảng điều tra để đối chiếu bằng chứng",
        claim: "Minh gian lận",
        lead: "Máy AI kết luận <b>“Minh gian lận”</b>. Với mỗi bằng chứng, hãy chọn: nó <b>ủng hộ</b> hay <b>phản bác</b> lời buộc tội đó?",
        opts: [{ k: "support", t: "⚖️ Ủng hộ lời buộc tội" }, { k: "refute", t: "🛡️ Phản bác, minh oan cho Minh" }],
        summary: "🎯 Đã rõ: 1 bằng chứng ủng hộ AI, 2 bằng chứng minh oan cho Minh!",
        requires: { items: 3 }
      },
      {
        id: "decision", type: "decision", npc: "ai",
        objective: "🤖 Gặp Máy AI để đưa ra kết luận",
        avatar: "🤖", who: "Máy AI",
        question: "Sau khi xem xét, AI vẫn báo “Minh gian lận” với độ tin cậy 85%. Em quyết định thế nào?",
        options: [
          { t: "😮 Tin AI ngay, khóa tài khoản Minh", good: false, reply: "Em tin ngay mà chưa kiểm chứng… Minh bị oan mất! Thử lại nhé." },
          { t: "❓ Yêu cầu AI giải thích “dựa vào đâu?”", good: true, reply: "Tốt lắm! Luôn bắt AI nói rõ lý do trước khi tin." },
          { t: "🔎 Dùng 3 manh mối để minh oan cho Minh", good: true, reply: "Xuất sắc! Em để bằng chứng và con người quyết định, không phó mặc cho AI." }
        ],
        result: "Em trình bày đủ bằng chứng cho cô Lan. <b>Minh được minh oan!</b> Trường ra quy định mới: <b>AI chỉ GỢI Ý, con người mới QUYẾT ĐỊNH.</b>",
        explainTitle: "Vì sao AI sai?",
        requires: { quest: "investigate" }
      },
      {
        id: "quiz", type: "quiz",
        objective: "🧠 Trả lời nhanh để chốt kiến thức",
        intro: "Trước khi khép hồ sơ, trả lời nhanh 2 câu để chắc kiến thức nhé!",
        pool: { topics: ["hoatdong", "antoan", "khainiem"], difficulty: 1, count: 2 },
        requires: { quest: "decision" }
      }
    ]
  };

  /* ---------------- KHU 3: Thư viện AI — Thật hay tin đồn? (kiểm chứng nguồn) ---------------- */
  var library = {
    id: "library", name: "Thư viện AI — Thật hay tin đồn?", env: "library",
    questTitle: "📚 Thư viện AI — Thật hay tin đồn?",
    spawn: { x: 0, z: 3.5, yaw: PI },
    returnTo: "campus",
    reward: { xp: 15, coins: 20, badge: "Nhà kiểm chứng", cloudLesson: "ai:game:library" },
    endTitle: "Đã tìm ra sự thật! 🎉",
    endTier: "Bạn là một Nhà kiểm chứng thông tin tài ba!",
    lesson: "AI đôi khi trả lời <b>rất tự tin</b> nhưng vẫn <b>sai</b> (gọi là “ảo giác” của AI). Đừng tin ngay — hãy <b>kiểm chứng với nguồn đáng tin</b> (sách, bách khoa) và hỏi AI <b>“dựa vào nguồn nào?”</b>.",
    npcs: [
      { id: "lib", kind: "teacher", model: "librarian", name: "Cô Thủ thư", emo: "👩‍🏫", x: -4.6, z: -4.6, color: 0x7dd3fc, look: { hair: 0x4a2f1a, skin: 0xffe0bd, style: "bun", glasses: true, pants: 0x2563eb } },
      { id: "k0", kind: "person", name: "Bạn tin AI", emo: "💬", x: 4.6, z: -4.6, color: 0xfca5a5, look: { hair: 0x2b2b2b, skin: 0xf1c79b, style: "short", pants: 0xb45309 } },
      { id: "k1", kind: "person", model: "kid_girl", name: "Bạn mê sách", emo: "📘", x: -4.6, z: 4.2, color: 0x86efac, look: { hair: 0x6b4a2a, skin: 0xffe0bd, style: "long", pants: 0x16a34a }, prop: "paper" },
      { id: "k2", kind: "person", model: "kid_boy", name: "Bạn tra cứu", emo: "📚", x: 4.6, z: 4.2, color: 0xf6c344, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0xca8a04 }, prop: "paper" },
      { id: "ai", kind: "robot", name: "Máy AI", emo: "🤖", x: 0, z: -5.9, color: 0xc4b5fd },
      { id: "exit", kind: "door", name: "Ra khuôn viên 🚪", emo: "🚪", to: "campus", x: 0, z: 7.1 }
    ],
    quests: [
      {
        id: "brief", type: "talk", npc: "lib",
        objective: "🎧 Nghe cô Thủ thư giao nhiệm vụ",
        avatar: "👩‍🏫", who: "Cô Thủ thư",
        lines: [
          "Chào em! Một bạn vừa hỏi AI: <b>“Cá voi có phải là cá không?”</b> — AI trả lời chắc nịch: <span class='a3dHl a3dHl-pink'>“Đúng, cá voi là cá!”</span>",
          "Nhưng nói chắc chưa chắc đúng nhé! Nhiệm vụ của em: <span class='a3dHl a3dHl-violet'>kiểm chứng</span> bằng cách tra <b>nguồn đáng tin</b> trong thư viện.",
          "Lại gần người/kệ có dấu <b>❗</b> rồi nhấn <b>E</b> để đọc và thu thập manh mối."
        ],
        requires: {}
      },
      {
        id: "collect", type: "collect",
        objective: "🔎 Tra 3 nguồn và thu thập đủ 3 manh mối",
        need: 3,
        items: [
          { id: "k0", npc: "k0", ic: "💬", label: "Lời AI", info: "AI nói: “Cá voi <b>sống dưới nước</b> nên nó là <b>cá</b>.”", verdict: "support", why: "AI đoán theo kiểu “ở dưới nước = cá” — nghe hợp lý nhưng <b>chưa kiểm chứng</b>." },
          { id: "k1", npc: "k1", ic: "📘", label: "Sách khoa học", info: "Sách: Cá voi <b>thở bằng phổi</b>, <b>đẻ con và cho con bú sữa</b> → là <b>động vật có vú</b>.", verdict: "refute", why: "Đặc điểm sinh học cho thấy cá voi <b>không phải cá</b>." },
          { id: "k2", npc: "k2", ic: "📚", label: "Bách khoa", info: "Bách khoa: Cá voi là <b>thú biển</b> (mammal), cùng nhóm với người, mèo — khác hẳn loài cá.", verdict: "refute", why: "Nguồn uy tín thứ hai cũng khẳng định ngược với AI." }
        ],
        requires: { quest: "brief" }
      },
      {
        id: "investigate", type: "investigate",
        objective: "📋 Mở Bảng điều tra để đối chiếu nguồn",
        claim: "Cá voi là một loài cá (lời AI)",
        lead: "AI khẳng định <b>“cá voi là cá”</b>. Với mỗi nguồn, hãy chọn: nó <b>ủng hộ</b> hay <b>phản bác</b> lời AI?",
        opts: [{ k: "support", t: "✅ Ủng hộ lời AI" }, { k: "refute", t: "📚 Phản bác (dựa vào nguồn)" }],
        summary: "🎯 Đã rõ: chỉ 1 là phỏng đoán của AI, 2 nguồn uy tín đều nói cá voi là THÚ, không phải cá!",
        requires: { items: 3 }
      },
      {
        id: "decision", type: "decision", npc: "ai",
        objective: "🤖 Gặp Máy AI để chốt kết luận",
        avatar: "🤖", who: "Máy AI",
        question: "Máy AI vẫn nói “cá voi là cá” với giọng rất chắc chắn. Em quyết định thế nào?",
        options: [
          { t: "😮 Tin AI ngay vì nó nói chắc nịch", good: false, reply: "Giọng chắc chắn không có nghĩa là đúng đâu! Thử lại nhé." },
          { t: "❓ Hỏi AI “dựa vào nguồn nào?”", good: true, reply: "Chuẩn! Luôn bắt AI chỉ ra nguồn." },
          { t: "📚 Tin sách &amp; bách khoa đã kiểm chứng", good: true, reply: "Xuất sắc! Nguồn uy tín hơn lời AI nói suông." }
        ],
        result: "Em đối chiếu nguồn và kết luận: <b>Cá voi là ĐỘNG VẬT CÓ VÚ, không phải cá.</b> AI trả lời sai vì chỉ “đoán”. Thư viện ghi chú mới: <b>luôn kiểm chứng câu trả lời của AI!</b>",
        explainTitle: "Vì sao AI nói sai mà vẫn tự tin?",
        requires: { quest: "investigate" }
      },
      {
        id: "quiz", type: "quiz",
        objective: "🧠 Trả lời nhanh để chốt kiến thức",
        intro: "Trả lời nhanh 2 câu để chắc kiến thức kiểm chứng nhé!",
        pool: { topics: ["antoan", "hoatdong", "khainiem"], difficulty: 1, count: 2 },
        requires: { quest: "decision" }
      }
    ]
  };

  /* ---------------- KHU 4: Công viên AI — Dữ liệu từ thiên nhiên (ngoài trời, thu thập dữ liệu) ---------------- */
  var park = {
    id: "park", name: "Công viên AI — Dữ liệu từ thiên nhiên", env: "park",
    questTitle: "🌳 Công viên AI — Dữ liệu từ thiên nhiên",
    spawn: { x: 0, z: 10, yaw: PI },
    returnTo: "campus",
    reward: { xp: 15, coins: 20, badge: "Nhà thu thập dữ liệu", cloudLesson: "ai:game:park" },
    endTitle: "Dữ liệu đầy đủ, AI thông minh hơn! 🎉",
    endTier: "Bạn là một Nhà thu thập dữ liệu tài ba!",
    lesson: "AI học từ <b>DỮ LIỆU (ví dụ)</b>. Càng nhiều ví dụ <b>đa dạng</b>, AI nhận biết càng <b>chính xác</b>. Nếu dữ liệu <b>ít hoặc lệch</b>, AI dễ đoán sai.",
    npcs: [
      { id: "ranger", kind: "teacher", model: "ranger", name: "Anh Kiểm lâm", emo: "🧑‍🌾", x: -2.5, z: 5, color: 0x86efac, look: { hair: 0x3a2a1a, skin: 0xf1c79b, style: "short", pants: 0x15803d } },
      { id: "d0", kind: "person", model: "kid_boy", name: "Bạn bên hồ", emo: "🦆", x: 3.5, z: -2.5, color: 0xfcd34d, look: { hair: 0x6b4a2a, skin: 0xffe0bd, style: "short", pants: 0xd97706 } },
      { id: "d1", kind: "person", model: "kid_girl", name: "Bạn chăm hoa", emo: "🌸", x: -6, z: 1, color: 0xf6a8c6, look: { hair: 0x4a2f1a, skin: 0xffe0bd, style: "long", pants: 0xdb2777 } },
      { id: "d2", kind: "person", model: "grandpa", name: "Bác làm vườn", emo: "🐦", x: 6, z: 3.5, color: 0x5fb8a8, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0x0d9488 } },
      { id: "ai", kind: "robot", name: "App AI", emo: "📱", x: 0, z: 2, color: 0xc4b5fd },
      { id: "exit", kind: "door", name: "Ra khuôn viên 🚪", emo: "🚪", to: "campus", x: 0, z: 12.5 }
    ],
    quests: [
      {
        id: "brief", type: "talk", npc: "ranger",
        objective: "🎧 Nghe anh Kiểm lâm giao nhiệm vụ",
        avatar: "🧑‍🌾", who: "Anh Kiểm lâm",
        lines: [
          "Chào em! App AI nhận diện thiên nhiên của công viên hay <b>nhận nhầm</b> vì nó <span class='a3dHl a3dHl-pink'>mới chỉ học 3 tấm ảnh</span>.",
          "Giúp anh <span class='a3dHl a3dHl-violet'>thu thêm ví dụ</span> (dữ liệu) quanh công viên để App AI học và đoán chính xác hơn nhé!",
          "Lại gần chỗ có dấu <b>❗</b> rồi nhấn <b>E</b> để quan sát và thu thập ví dụ."
        ],
        requires: {}
      },
      {
        id: "collect", type: "collect",
        objective: "🔎 Thu thập đủ 3 ví dụ (dữ liệu) quanh công viên",
        need: 3,
        items: [
          { id: "d0", npc: "d0", ic: "🦆", label: "Ảnh con vịt", info: "Quan sát con vịt bơi ở hồ → thêm 1 <b>ví dụ</b> ảnh “con vịt” cho App AI.", verdict: "support", why: "Nhiều ví dụ “vịt” giúp AI nhận ra vịt chính xác hơn." },
          { id: "d1", npc: "d1", ic: "🌸", label: "Ảnh bông hoa", info: "Quan sát bông hoa hồng → ví dụ cho nhóm “hoa”.", verdict: "support", why: "Dữ liệu đa dạng (nhiều loài) giúp AI phân biệt tốt hơn." },
          { id: "d2", npc: "d2", ic: "🐦", label: "Ảnh con chim", info: "Quan sát con chim trên cây → ví dụ cho nhóm “chim”.", verdict: "support", why: "Thêm ví dụ mới giúp AI bớt nhận nhầm." }
        ],
        requires: { quest: "brief" }
      },
      {
        id: "investigate", type: "investigate",
        objective: "📋 Mở Bảng điều tra để chọn ví dụ dạy AI",
        claim: "App AI cần thêm dữ liệu để nhận biết đúng",
        lead: "Mỗi quan sát là một <b>ví dụ</b>. Với mỗi cái, hãy chọn: nên <b>thêm vào</b> dữ liệu học của AI hay <b>bỏ qua</b>?",
        opts: [{ k: "support", t: "✅ Ví dụ tốt — thêm vào" }, { k: "refute", t: "🚫 Bỏ, không dùng" }],
        summary: "🎯 Cả 3 đều là ví dụ tốt → dữ liệu nhiều &amp; đa dạng hơn, AI đoán chính xác hơn!",
        requires: { items: 3 }
      },
      {
        id: "decision", type: "decision", npc: "ai",
        objective: "📱 Gặp App AI để chốt cách làm nó giỏi hơn",
        avatar: "📱", who: "App AI",
        question: "App AI mới học 3 ảnh nên hay nhận nhầm. Theo em, làm sao để nó giỏi hơn?",
        options: [
          { t: "📷 Cho nó học thật nhiều ví dụ đa dạng", good: true, reply: "Chuẩn! Nhiều dữ liệu đa dạng = AI chính xác hơn." },
          { t: "🙈 Cứ để 3 ảnh, khỏi thêm", good: false, reply: "Ít dữ liệu quá, AI sẽ hay nhầm. Thử lại nhé." },
          { t: "✅ Thu thêm ví dụ rồi kiểm tra lại", good: true, reply: "Tuyệt! Thu dữ liệu rồi kiểm tra — đúng cách làm AI." }
        ],
        result: "App AI học thêm các ví dụ em thu được và <b>nhận biết chính xác hơn hẳn</b>! Nhớ nhé: <b>AI giỏi là nhờ dữ liệu tốt &amp; đa dạng.</b>",
        explainTitle: "Vì sao AI cần nhiều dữ liệu?",
        requires: { quest: "investigate" }
      },
      {
        id: "quiz", type: "quiz",
        objective: "🧠 Trả lời nhanh để chốt kiến thức",
        intro: "Trả lời nhanh 2 câu về “AI học từ dữ liệu” nhé!",
        pool: { topics: ["khainiem", "hoatdong", "antoan"], difficulty: 1, count: 2 },
        requires: { quest: "decision" }
      }
    ]
  };

  /* ---------------- KHU 5: Phòng Lab AI — Dạy máy đoán (thực hành dữ liệu) ---------------- */
  var lab = {
    id: "lab", name: "Phòng Lab AI — Dạy máy đoán", env: "lab",
    questTitle: "🔬 Phòng Lab AI — Dạy máy đoán",
    spawn: { x: 0, z: 3.5, yaw: PI },
    returnTo: "campus",
    reward: { xp: 15, coins: 20, badge: "Kỹ sư AI nhí", cloudLesson: "ai:game:lab" },
    endTitle: "AI đoán đúng rồi! 🎉",
    endTier: "Bạn là một Kỹ sư AI nhí tài ba!",
    lesson: "AI đoán dựa trên <b>dữ liệu đã học</b>. Nếu dữ liệu <b>lệch</b> (chỉ một kiểu), AI sẽ <b>thiên vị</b> và đoán sai cái lạ. Thêm dữ liệu <b>đa dạng &amp; cân bằng</b> → AI đoán đúng &amp; công bằng hơn.",
    npcs: [
      { id: "sci", kind: "teacher", model: "scientist", name: "Cô Kỹ sư", emo: "👩‍🔬", x: -4.6, z: -4.6, color: 0x7dd3fc, look: { hair: 0x2b2b2b, skin: 0xffe0bd, style: "bun", glasses: true, pants: 0x0ea5e9 } },
      { id: "e0", kind: "person", name: "Bạn vận hành máy", emo: "🍎", x: 4.6, z: -4.6, color: 0xfca5a5, look: { hair: 0x6b4a2a, skin: 0xffe0bd, style: "short", pants: 0xdc2626 }, prop: "chart" },
      { id: "e1", kind: "person", model: "kid_girl", name: "Bạn quản dữ liệu", emo: "🗃️", x: -4.6, z: 4.2, color: 0xa78bfa, look: { hair: 0x1f2937, skin: 0xf1c79b, style: "long", pants: 0x7c3aed }, prop: "computer" },
      { id: "e2", kind: "person", model: "kid_boy", name: "Bạn thí nghiệm", emo: "🧪", x: 4.6, z: 4.2, color: 0x5fb8a8, look: { hair: 0x4a2f1a, skin: 0xe8b58a, style: "spiky", pants: 0x0d9488 }, prop: "paper" },
      { id: "ai", kind: "robot", name: "Máy AI", emo: "🤖", x: 0, z: -5.9, color: 0xc4b5fd },
      { id: "exit", kind: "door", name: "Ra khuôn viên 🚪", emo: "🚪", to: "campus", x: 0, z: 7.1 }
    ],
    quests: [
      {
        id: "brief", type: "talk", npc: "sci",
        objective: "🎧 Nghe cô Kỹ sư giao nhiệm vụ",
        avatar: "👩‍🔬", who: "Cô Kỹ sư",
        lines: [
          "Chào em! Mình đang dạy một AI <b>đoán trái cây</b>. Nhưng nó chỉ học toàn <span class='a3dHl a3dHl-pink'>ảnh táo đỏ</span> nên thấy gì <b>tròn &amp; đỏ</b> cũng đoán là “táo”!",
          "Nhiệm vụ của em: <span class='a3dHl a3dHl-violet'>thử nghiệm</span> ở 3 trạm để hiểu vì sao AI đoán sai và cách sửa.",
          "Lại gần trạm có dấu <b>❗</b> rồi nhấn <b>E</b> để quan sát và thu kết quả."
        ],
        requires: {}
      },
      {
        id: "collect", type: "collect",
        objective: "🔎 Thử nghiệm ở 3 trạm và thu đủ 3 kết quả",
        need: 3,
        items: [
          { id: "e0", npc: "e0", ic: "🍎", label: "Cho AI xem cà chua", info: "Đưa quả <b>cà chua</b> (tròn, đỏ) cho AI → nó đoán nhầm là <b>“táo”</b>.", verdict: "support", why: "AI chỉ học táo đỏ nên thấy gì tròn-đỏ cũng tưởng là táo." },
          { id: "e1", npc: "e1", ic: "🗃️", label: "Kiểm tra kho dữ liệu", info: "Xem dữ liệu: AI học <b>20 ảnh, toàn táo đỏ</b> — không có loại quả nào khác.", verdict: "support", why: "Dữ liệu <b>lệch</b> (một kiểu) khiến AI <b>thiên vị</b>." },
          { id: "e2", npc: "e2", ic: "🧪", label: "Thêm quả đa dạng", info: "Thêm ảnh <b>táo xanh, cam, chuối, cà chua</b> vào dữ liệu → AI bắt đầu <b>phân biệt đúng</b>.", verdict: "support", why: "Dữ liệu <b>đa dạng &amp; cân bằng</b> giúp AI đoán chính xác hơn." }
        ],
        requires: { quest: "brief" }
      },
      {
        id: "investigate", type: "investigate",
        objective: "📋 Mở Bảng điều tra để hiểu vì sao AI sai",
        claim: "AI đoán sai vì DỮ LIỆU của nó bị lệch",
        lead: "Với mỗi kết quả thử nghiệm, nó có <b>cho thấy</b> AI sai do dữ liệu lệch, hay <b>không liên quan</b>?",
        opts: [{ k: "support", t: "✅ Cho thấy: lỗi do dữ liệu" }, { k: "refute", t: "❔ Không liên quan" }],
        summary: "🎯 Cả 3 đều chỉ ra: AI đoán sai vì dữ liệu LỆCH — và thêm dữ liệu ĐA DẠNG thì nó đúng!",
        requires: { items: 3 }
      },
      {
        id: "decision", type: "decision", npc: "ai",
        objective: "🤖 Gặp Máy AI để chốt cách sửa",
        avatar: "🤖", who: "Máy AI",
        question: "Làm sao để AI đoán trái cây đúng &amp; công bằng hơn?",
        options: [
          { t: "🍎 Cứ cho học thêm thật nhiều táo đỏ", good: false, reply: "Thêm toàn táo đỏ thì càng lệch! Thử lại nhé." },
          { t: "🌈 Cho học nhiều loại quả đa dạng, cân bằng", good: true, reply: "Chuẩn! Dữ liệu đa dạng = AI công bằng &amp; chính xác." },
          { t: "🔍 Kiểm tra &amp; sửa dữ liệu bị lệch", good: true, reply: "Tuyệt! Luôn kiểm tra dữ liệu trước khi tin AI." }
        ],
        result: "Em bổ sung dữ liệu đa dạng và AI <b>đoán đúng các loại quả</b>! Nhớ nhé: <b>dữ liệu lệch → AI thiên vị; dữ liệu đa dạng &amp; cân bằng → AI công bằng.</b>",
        explainTitle: "Vì sao dữ liệu lệch làm AI sai?",
        requires: { quest: "investigate" }
      },
      {
        id: "quiz", type: "quiz",
        objective: "🧠 Trả lời nhanh để chốt kiến thức",
        intro: "Trả lời nhanh 2 câu về “dữ liệu &amp; AI” nhé!",
        pool: { topics: ["hoatdong", "khainiem", "antoan"], difficulty: 1, count: 2 },
        requires: { quest: "decision" }
      }
    ]
  };

  window.A3D_DATA = { start: "campus", zones: { campus: campus, academy1: academy1, library: library, park: park, lab: lab } };
})();
