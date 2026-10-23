/* =========================================================
   academy3d.data.js — DỮ LIỆU cho AI Academy 3D (tách khỏi logic Three.js)
   Mỗi MÀN CHƠI (level) mô tả bằng dữ liệu: môi trường, NPC, chuỗi nhiệm vụ,
   điều kiện hoàn thành & mở khoá. QuestEngine trong academy3d.js đọc dữ liệu này.
   Thêm màn mới = thêm một entry vào A3D_DATA.levels, KHÔNG sửa mã game.
   Loại nhiệm vụ hỗ trợ: talk | collect | investigate | decision | quiz
     (engine thiết kế mở rộng cho: inspect | classify | match | choose | interact).
   Câu hỏi quiz LẤY TỪ ngân hàng câu hỏi có sẵn của web (window.BANK) theo topic/độ khó.
   ========================================================= */
(function () {
  "use strict";
  var PI = Math.PI;

  /* ---------------- MÀN 1: AI Academy — Vụ án của Minh ---------------- */
  var academy1 = {
    id: "academy1",
    name: "AI Academy — Vụ án của Minh",
    theme: "AI có thể kết luận SAI khi dữ liệu ít hoặc lệch",
    env: "classroom",                       // tên builder môi trường trong academy3d.js
    questTitle: "🔍 AI Academy — Vụ án của Minh",
    spawn: { x: 0, z: 3.4, yaw: PI },
    unlock: {},                              // màn mở sẵn (màn đầu)
    reward: { xp: 15, badge: "Điều tra viên AI", cloudLesson: "ai:game:academy1" },
    endTitle: "Phá án thành công! 🎉",
    endTier: "Bạn là một Thám tử AI tài ba!",
    lesson: "AI đưa ra kết luận dựa trên <b>dữ liệu mà nó được học</b>. Nếu dữ liệu ít hoặc lệch, kết luận có thể sai. AI rất hữu ích để <b>gợi ý</b>, nhưng đừng coi nó là chân lý — hãy luôn <b>hỏi lý do &amp; tự kiểm chứng</b>!",

    /* Nhân vật / vật thể tương tác trong màn */
    npcs: [
      { id: "lan", kind: "teacher", name: "Cô Lan", emo: "👩‍🏫", x: -4.6, z: -4.6, color: 0xec6fb0, look: { hair: 0x5b3a29, skin: 0xffe0bd, style: "bun", glasses: true, pants: 0xb24f86 } },
      { id: "c0", kind: "person", name: "Trực phòng máy", emo: "🖥️", x: 4.6, z: -4.6, color: 0x5b8def, look: { hair: 0x2b2b2b, skin: 0xf1c79b, style: "short", pants: 0x3b5bdb }, prop: "computer" },
      { id: "c1", kind: "person", name: "Bạn cùng lớp", emo: "📄", x: -4.6, z: 4.2, color: 0xf6c344, look: { hair: 0x6b4a2a, skin: 0xffe0bd, style: "long", pants: 0xca8a04 }, prop: "paper" },
      { id: "c2", kind: "person", name: "Kỹ thuật viên", emo: "📊", x: 4.6, z: 4.2, color: 0x58d898, look: { hair: 0x1f2937, skin: 0xe8b58a, style: "spiky", pants: 0x0ea371 }, prop: "chart" },
      { id: "ai", kind: "robot", name: "Máy AI", emo: "🤖", x: 0, z: -5.9, color: 0xc4b5fd }
    ],

    /* Chuỗi nhiệm vụ — có điều kiện (requires) nên engine CHẶN hoàn thành sai thứ tự.
       need/items KHÔNG cố định ở "3" — chỉ là dữ liệu của màn này. */
    quests: [
      {
        id: "brief", type: "talk", npc: "lan",
        objective: "🎧 Nghe cô Lan giao nhiệm vụ",
        avatar: "👩‍🏫", who: "Cô Lan",
        lines: [
          "Chào Thám tử AI! 07:42 sáng nay, hệ thống AI của trường vừa <span class='a3dHl a3dHl-pink'>khóa tài khoản</span> bạn Minh vì nghi <b>gian lận</b>.",
          "Minh nói mình bị oan. Em có <span class='a3dHl a3dHl-orange'>30 phút</span> để <span class='a3dHl a3dHl-violet'>điều tra</span> và tìm ra sự thật nhé!",
          "Cách chơi: dùng <b>WASD / phím mũi tên</b> (hoặc cần gạt trên điện thoại) để đi. Lại gần người có dấu <b>❗</b> rồi nhấn <b>E</b> (hoặc nút 💬) để nói chuyện."
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
        opts: [ { k: "support", t: "⚖️ Ủng hộ lời buộc tội" }, { k: "refute", t: "🛡️ Phản bác, minh oan cho Minh" } ],
        summary: "🎯 Đã rõ: 1 bằng chứng ủng hộ AI, 2 bằng chứng minh oan cho Minh!",
        requires: { items: 3 }               // cần đủ 3 manh mối mới mở được
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
        requires: { quest: "investigate" }   // phải đối chiếu xong mới được kết luận
      },
      {
        id: "quiz", type: "quiz",
        objective: "🧠 Trả lời nhanh để chốt kiến thức",
        intro: "Trước khi khép hồ sơ, trả lời nhanh 2 câu để chắc kiến thức nhé!",
        /* LẤY TỪ ngân hàng câu hỏi có sẵn của web (window.BANK) theo chủ đề & độ khó */
        pool: { topics: ["hoatdong", "antoan", "khainiem"], difficulty: 1, count: 2 },
        requires: { quest: "decision" }
      }
    ]
  };

  window.A3D_DATA = { levels: { academy1: academy1 } };
})();
