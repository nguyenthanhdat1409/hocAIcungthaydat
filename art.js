/* =========================================================
   art.js — Tranh minh hoạ SVG vẽ tay theo nhóm chủ đề (offline)
   Dùng cho phần đầu mỗi bài học. Không cần mạng, không thư viện ngoài.
   window.LessonArt.svg(lesson, color) -> chuỗi <svg>…</svg>
   window.LessonArt.keyFor(lesson)      -> tên nhóm chủ đề
   ========================================================= */
(function(){
  const INK = "#1E1B4B";

  /* Map từ khoá trong tên/nội dung bài -> nhóm tranh */
  const KEYS = [
    [/deepfake|tin giả|lừa|giả mạo|an toàn|riêng tư|mật khẩu|bảo mật/i, "shield"],
    [/prompt|câu lệnh|ra lệnh|hỏi ai|trò chuyện|chatbot/i, "chat"],
    [/robot|trí tuệ nhân tạo|máy học|mô hình|học sâu|mạng nơ|neural|\bai\b/i, "robot"],
    [/ảnh|hình|nhìn|thị giác|vẽ|tranh|camera|chụp/i, "image"],
    [/âm thanh|giọng|nghe|nói|nhạc|hát|thu âm/i, "audio"],
    [/game|trò chơi|cờ /i, "game"],
    [/dữ liệu|số liệu|bảng|thống kê|biểu đồ|đồ thị/i, "data"],
    [/internet|web|mạng|trình duyệt|online|email|thư điện/i, "globe"],
    [/thư mục|tệp|file|lưu|sắp xếp/i, "folder"],
    [/bàn phím|gõ|đánh máy|typing|wpm|chuột/i, "keyboard"],
    [/màn hình|cửa sổ|máy tính|phần cứng|bộ phận|thiết bị/i, "computer"],
    [/scratch|lập trình|khối lệnh|thuật toán|flowchart|code|biến|vòng lặp|điều kiện|hàm/i, "code"],
  ];
  function keyFor(ls){
    const t = (ls.name || "") + " " + (ls.content || "");
    for(const [re, k] of KEYS){ if(re.test(t)) return k; }
    return "idea";
  }

  /* Khung nền chung: gradient màu level + vài hình trôi */
  function wrap(inner, c){
    return `<svg class="artSvg" viewBox="0 0 400 210" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs><linearGradient id="artbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${INK}" stop-opacity=".55"/>
      </linearGradient></defs>
      <rect width="400" height="210" fill="url(#artbg)"/>
      <circle cx="46" cy="40" r="50" fill="#fff" opacity=".08"/>
      <circle cx="360" cy="185" r="66" fill="#fff" opacity=".08"/>
      <circle cx="335" cy="34" r="9" fill="#fff" opacity=".2"/>
      <circle cx="60" cy="180" r="6" fill="#fff" opacity=".25"/>
      <circle cx="300" cy="60" r="5" fill="#fff" opacity=".22"/>
      ${inner}
    </svg>`;
  }

  const S = { "stroke-linejoin":"round", "stroke-linecap":"round" };
  const g = (c) => `stroke="${INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`;

  const SCENES = {
    computer(c){ return `
      <g ${g()}>
        <rect x="138" y="52" width="124" height="82" rx="10" fill="#fff"/>
        <rect x="150" y="64" width="100" height="48" rx="5" fill="${c}" opacity=".3" stroke="none"/>
        <circle cx="200" cy="124" r="4" fill="${INK}" stroke="none"/>
        <rect x="186" y="134" width="28" height="16" fill="#fff"/>
        <rect x="164" y="150" width="72" height="9" rx="4.5" fill="#fff"/>
      </g>`; },
    keyboard(c){ return `
      <g ${g()}>
        <rect x="112" y="92" width="160" height="58" rx="12" fill="#fff"/>
        <g fill="${c}" stroke="none">
          <rect x="126" y="104" width="16" height="12" rx="3"/><rect x="150" y="104" width="16" height="12" rx="3"/>
          <rect x="174" y="104" width="16" height="12" rx="3"/><rect x="198" y="104" width="16" height="12" rx="3"/>
          <rect x="222" y="104" width="16" height="12" rx="3"/><rect x="138" y="124" width="108" height="12" rx="3"/>
        </g>
        <rect x="286" y="98" width="36" height="54" rx="18" fill="#fff"/>
        <line x1="304" y1="104" x2="304" y2="118"/>
      </g>`; },
    folder(c){ return `
      <g ${g()}>
        <rect x="176" y="70" width="90" height="70" rx="8" fill="#fff" transform="rotate(6 200 105)"/>
        <path d="M134 74 h44 l12 14 h70 a10 10 0 0 1 10 10 v46 a10 10 0 0 1 -10 10 h-126 a10 10 0 0 1 -10 -10 v-70 a10 10 0 0 1 10 -10 z" fill="${c}"/>
      </g>`; },
    globe(c){ return `
      <g ${g()}>
        <circle cx="200" cy="105" r="54" fill="#fff"/>
        <ellipse cx="200" cy="105" rx="23" ry="54" fill="none"/>
        <line x1="146" y1="105" x2="254" y2="105"/>
        <path d="M158 74 q42 26 84 0" fill="none"/>
        <path d="M158 136 q42 -26 84 0" fill="none"/>
      </g>`; },
    robot(c){ return `
      <g ${g()}>
        <line x1="200" y1="38" x2="200" y2="56"/><circle cx="200" cy="34" r="6" fill="#fff"/>
        <rect x="150" y="56" width="100" height="84" rx="18" fill="#fff"/>
        <circle cx="178" cy="94" r="11" fill="${c}" stroke="none"/><circle cx="222" cy="94" r="11" fill="${c}" stroke="none"/>
        <circle cx="178" cy="94" r="4" fill="#fff" stroke="none"/><circle cx="222" cy="94" r="4" fill="#fff" stroke="none"/>
        <rect x="176" y="116" width="48" height="9" rx="4.5" fill="${INK}" stroke="none"/>
        <line x1="150" y1="100" x2="140" y2="100"/><line x1="250" y1="100" x2="260" y2="100"/>
      </g>`; },
    chat(c){ return `
      <g ${g()}>
        <path d="M116 66 h116 a14 14 0 0 1 14 14 v36 a14 14 0 0 1 -14 14 h-74 l-26 22 v-22 h-16 a14 14 0 0 1 -14 -14 v-36 a14 14 0 0 1 14 -14 z" fill="#fff"/>
        <g fill="${c}" stroke="none"><circle cx="150" cy="98" r="7"/><circle cx="178" cy="98" r="7"/><circle cx="206" cy="98" r="7"/></g>
        <path d="M244 118 h44 a12 12 0 0 1 12 12 v24 a12 12 0 0 1 -12 12 h-6 v16 l-18 -16 h-20 a12 12 0 0 1 -12 -12 v-6" fill="${c}" opacity=".85"/>
      </g>`; },
    shield(c){ return `
      <g ${g()}>
        <path d="M200 52 l48 17 v36 c0 32 -24 49 -48 58 c-24 -9 -48 -26 -48 -58 v-36 z" fill="#fff"/>
        <path d="M178 106 l16 16 l30 -34" fill="none" stroke="${c}" stroke-width="8"/>
      </g>`; },
    image(c){ return `
      <g ${g()}>
        <rect x="134" y="62" width="132" height="90" rx="12" fill="#fff"/>
        <circle cx="168" cy="90" r="12" fill="${c}" stroke="none"/>
        <path d="M144 148 l34 -40 l24 26 l22 -18 l32 32 z" fill="${c}" opacity=".5" stroke="none"/>
        <path d="M144 148 l34 -40 l24 26 l22 -18 l32 32" fill="none"/>
      </g>`; },
    audio(c){ return `
      <g ${g()}>
        <rect x="184" y="58" width="32" height="60" rx="16" fill="#fff"/>
        <path d="M164 100 a36 36 0 0 0 72 0" fill="none"/>
        <line x1="200" y1="136" x2="200" y2="152"/><line x1="182" y1="152" x2="218" y2="152"/>
        <g stroke="${c}"><path d="M120 90 q-10 15 0 30" fill="none"/><path d="M104 78 q-18 27 0 54" fill="none"/>
        <path d="M280 90 q10 15 0 30" fill="none"/><path d="M296 78 q18 27 0 54" fill="none"/></g>
      </g>`; },
    game(c){ return `
      <g ${g()}>
        <rect x="120" y="80" width="160" height="70" rx="34" fill="#fff"/>
        <g stroke="${INK}"><line x1="160" y1="100" x2="160" y2="130"/><line x1="145" y1="115" x2="175" y2="115"/></g>
        <circle cx="228" cy="106" r="9" fill="${c}" stroke="none"/><circle cx="250" cy="126" r="9" fill="${c}" stroke="none"/>
      </g>`; },
    data(c){ return `
      <g ${g()}>
        <line x1="150" y1="60" x2="150" y2="150"/><line x1="150" y1="150" x2="262" y2="150"/>
        <g fill="${c}" stroke="none">
          <rect x="166" y="116" width="20" height="34"/><rect x="196" y="96" width="20" height="54"/>
          <rect x="226" y="78" width="20" height="72"/></g>
        <g fill="${c}" opacity=".45" stroke="none">
          <rect x="166" y="116" width="20" height="34"/><rect x="196" y="96" width="20" height="54"/><rect x="226" y="78" width="20" height="72"/></g>
      </g>`; },
    code(c){ return `
      <g ${g()}>
        <rect x="132" y="60" width="136" height="90" rx="12" fill="#fff"/>
        <line x1="132" y1="82" x2="268" y2="82"/>
        <g fill="${c}" stroke="none"><circle cx="146" cy="71" r="4"/><circle cx="158" cy="71" r="4"/><circle cx="170" cy="71" r="4"/></g>
        <g stroke="${c}" stroke-width="5"><path d="M176 100 l-14 14 l14 14" fill="none"/><path d="M224 100 l14 14 l-14 14" fill="none"/><line x1="196" y1="98" x2="204" y2="132"/></g>
      </g>`; },
    idea(c){ return `
      <g ${g()}>
        <circle cx="200" cy="92" r="38" fill="#fff"/>
        <rect x="186" y="126" width="28" height="16" fill="#fff"/><rect x="190" y="142" width="20" height="9" rx="4" fill="#fff"/>
        <path d="M200 74 v18 M200 92 l-12 12 M200 92 l12 12" fill="none" stroke="${c}" stroke-width="5"/>
        <g fill="#fff" stroke="none"><path d="M120 70 l6 12 l12 6 l-12 6 l-6 12 l-6 -12 l-12 -6 l12 -6 z" opacity=".8"/>
        <path d="M285 120 l5 10 l10 5 l-10 5 l-5 10 l-5 -10 l-10 -5 l10 -5 z" opacity=".7"/></g>
      </g>`; },
  };

  function svg(ls, color){
    const k = keyFor(ls);
    const scene = SCENES[k] || SCENES.idea;
    return wrap(scene(color), color);
  }

  window.LessonArt = { svg, keyFor };
})();
