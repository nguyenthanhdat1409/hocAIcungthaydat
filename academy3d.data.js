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
      { id: "amb1", kind: "person", name: "Bạn dạo công viên", emo: "🙂", x: 5.5, z: -1.5, color: 0xfca5a5, look: { hair: 0x4a2f1a, skin: 0xf1c79b, style: "short", pants: 0xb45309 }, wander: [[5.5, -1.5], [7.5, -4.5], [4, -4], [6, -1]] },
      { id: "amb2", kind: "person", name: "Học sinh", emo: "🎒", x: -6.5, z: -2.5, color: 0xa7f3d0, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0x0f766e }, wander: [[-6.5, -2.5], [-6.5, 2.5], [-3.5, 1], [-5, -1]] },
      { id: "door_academy", kind: "door", name: "Học viện AI 🏫", emo: "🏫", to: "academy1", x: -4.2, z: -8.6 },
      { id: "door_library", kind: "door", name: "Thư viện 📚", emo: "📚", to: "library", x: 4.2, z: -8.6 }
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
      { id: "c1", kind: "person", name: "Bạn cùng lớp", emo: "📄", x: -4.6, z: 4.2, color: 0xf6c344, look: { hair: 0x6b4a2a, skin: 0xffe0bd, style: "long", pants: 0xca8a04 }, prop: "paper" },
      { id: "c2", kind: "person", name: "Kỹ thuật viên", emo: "📊", x: 4.6, z: 4.2, color: 0x58d898, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0x0ea371 }, prop: "chart" },
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

  window.A3D_DATA = { start: "campus", zones: { campus: campus, academy1: academy1 } };
})();
