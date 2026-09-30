/* =========================================================
   minigames.js — Trò chơi AI (3D nhẹ bằng CSS)
   • 🤖 Robot mê cung V2: lập kế hoạch chuỗi lệnh, tối ưu bước (BFS), sao, gợi ý,
     pin thu thập, bẫy, năng lượng, mở khoá màn → tư duy thuật toán
   • 🕵️ Thật hay AI? (AI Detective)  • 🎯 Prompt Master
   Dùng chung #runner. Cộng XP qua Cloud.aiRecord nếu đăng nhập.
   ========================================================= */
(function () {
  "use strict";
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var $ = function (id) { return document.getElementById(id); };
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  function sfxSafe(name) { try { if (window.sfx && sfx[name]) sfx[name](); } catch (e) {} }
  function burstSafe(n) { try { if (window.burst) burst(n); } catch (e) {} }

  window.MINIGAMES = true;

  /* =======================================================
     GAME 1 — 🤖 ROBOT MÊ CUNG V2
     Ký tự bản đồ: S=xuất phát  G=đích  #=tường  B=pin(gom hết mới thắng)
                   T=bẫy(tránh)  .=ô trống
     ======================================================= */
  var MAZE = [
    { name: "Màn 1 · Khởi động", intro: "Xếp lệnh đưa robot tới 🔋 rồi bấm ▶️ Chạy!",
      grid: ["S....", ".###.", ".....", ".###.", "....G"] },
    { name: "Màn 2 · Lập kế hoạch", intro: "Gom 🔋 pin rồi mới tới đích — nghĩ trước khi chạy nhé!",
      grid: ["S.....", ".####.", ".#..#.", ".#.B#.", ".#...G", "......"], energy: 16 },
    { name: "Màn 3 · Tối ưu", intro: "Tránh 🔥 bẫy, gom pin và tìm đường NGẮN NHẤT!",
      grid: ["S......", "##.###.", "...T.#.", ".#.##..", ".#.B.#.", ".###.#.", ".....G."], energy: 18 }
  ];
  var DIR = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
  var DIR_ICON = { up: "⬆️", down: "⬇️", left: "⬅️", right: "➡️" };

  var mzLevel = 0, mzProg = [], mzRunning = false, mzHintUsed = false;
  var mzGrid = null, mzRows = 0, mzCols = 0, mzStart = null, mzGoal = null, mzBats = [], mzTraps = {}, mzOptimal = 0;
  var mzStars = [0, 0, 0], mzUnlocked = 1;

  function mzParse(rows) {
    mzGrid = rows.map(function (r) { return r.split(""); });
    mzRows = mzGrid.length; mzCols = mzGrid[0].length; mzBats = []; mzTraps = {};
    for (var r = 0; r < mzRows; r++) for (var c = 0; c < mzCols; c++) {
      var ch = mzGrid[r][c];
      if (ch === "S") mzStart = [r, c];
      else if (ch === "G") mzGoal = [r, c];
      else if (ch === "B") mzBats.push([r, c]);
      else if (ch === "T") mzTraps[r + "," + c] = true;
    }
  }
  function mzBlocked(r, c) { return r < 0 || c < 0 || r >= mzRows || c >= mzCols || mzGrid[r][c] === "#" || mzGrid[r][c] === "T"; }
  // BFS trạng thái (r,c,mask pin) → bước tối ưu + đường đi
  function mzSolve(wantPath) {
    var bidx = {}; mzBats.forEach(function (b, i) { bidx[b[0] + "," + b[1]] = i; });
    var all = (1 << mzBats.length) - 1;
    var D = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    var key = function (r, c, m) { return r + "," + c + "," + m; };
    var q = [[mzStart[0], mzStart[1], 0]], seen = {}, parent = {};
    seen[key(mzStart[0], mzStart[1], 0)] = true;
    while (q.length) {
      var cur = q.shift(), r = cur[0], c = cur[1], m = cur[2];
      if (r === mzGoal[0] && c === mzGoal[1] && m === all) {
        if (!wantPath) return { opt: distOf(parent, key, r, c, m) };
        var path = [], k = key(r, c, m);
        while (k) { var p = k.split(","); path.unshift([+p[0], +p[1]]); k = parent[k]; }
        return { opt: path.length - 1, path: path };
      }
      for (var d = 0; d < 4; d++) {
        var nr = r + D[d][0], nc = c + D[d][1];
        if (mzBlocked(nr, nc)) continue;
        var nm = m; var bi = bidx[nr + "," + nc]; if (bi !== undefined) nm = m | (1 << bi);
        var nk = key(nr, nc, nm);
        if (seen[nk]) continue; seen[nk] = true; parent[nk] = key(r, c, m);
        q.push([nr, nc, nm]);
      }
    }
    return { opt: null };
  }
  function distOf(parent, key, r, c, m) { var d = 0, k = key(r, c, m); while (parent[k]) { d++; k = parent[k]; } return d; }

  window.startMaze = function () {
    mzStars = [0, 0, 0]; mzUnlocked = 1; mzLevel = 0;
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    mzGoLevel(0);
  };
  window.mzGoLevel = function (i) {
    if (i > mzUnlocked - 1) return; // chưa mở khoá
    mzLevel = i; mzProg = []; mzRunning = false; mzHintUsed = false;
    mzParse(MAZE[i].grid);
    var s = mzSolve(false); mzOptimal = s.opt || 0;
    $("qCard").classList.remove("hidden");
    $("resultCard").classList.add("hidden");
    $("runnerTop").classList.remove("hidden");
    mzRender();
  };

  function mzLevelStrip() {
    return '<div class="mzLevels">' + MAZE.map(function (lv, i) {
      var locked = i > mzUnlocked - 1;
      var st = mzStars[i] ? "★".repeat(mzStars[i]) : "";
      var cls = "mzLvPill" + (i === mzLevel ? " on" : "") + (locked ? " locked" : "");
      var label = locked ? "🔒" : (mzStars[i] ? '<span class="mzLvStars">' + st + "</span>" : (i + 1));
      return '<button class="' + cls + '" ' + (locked ? "disabled" : 'onclick="mzGoLevel(' + i + ')"') + '>' + label + "</button>";
    }).join("") + "</div>";
  }

  function mzRender() {
    var lv = MAZE[mzLevel];
    var counter = $("counter"); if (counter) counter.textContent = "Màn " + (mzLevel + 1) + "/" + MAZE.length;
    var bar = $("bar"); if (bar) bar.style.width = (mzLevel / MAZE.length * 100) + "%";

    var cells = "";
    for (var r = 0; r < mzRows; r++) for (var c = 0; c < mzCols; c++) {
      var ch = mzGrid[r][c];
      var cls = "mzCell", inner = "";
      if (ch === "#") cls += " mzWall";
      else if (ch === "G") { cls += " mzGoal"; inner = "🏁"; }
      else if (ch === "B") { cls += " mzBat"; inner = "🔋"; }
      else if (ch === "T") { cls += " mzTrap"; inner = "🔥"; }
      cells += '<div class="' + cls + '" data-rc="' + r + "-" + c + '">' + inner + "</div>";
    }
    var energyHtml = lv.energy
      ? '<span class="mzStat mzEnergy" id="mzEnergy">⚡ <b>' + (lv.energy - mzProg.length) + "</b>/" + lv.energy + "</span>"
      : "";
    $("qCard").innerHTML =
      '<div class="mzGame">' +
        mzLevelStrip() +
        '<div class="mzHead"><b>🤖 ' + esc(lv.name) + '</b><span>' + esc(lv.intro) + "</span></div>" +
        '<div class="mzStats"><span class="mzStat">🎯 Tối ưu: <b>' + mzOptimal + '</b></span>' +
          '<span class="mzStat">👣 Đã dùng: <b id="mzUsed">0</b></span>' + energyHtml + "</div>" +
        '<div class="mzWrap"><div class="mzBoard" id="mzBoard" style="--cols:' + mzCols + ";--rows:" + mzRows + '">' +
          cells + '<div class="mzBot" id="mzBot">🤖</div></div></div>' +
        '<div class="mzProgLbl">🧩 Các lệnh của bé</div>' +
        '<div class="mzProgWrap"><div class="mzProg" id="mzProg"></div></div>' +
        '<div class="mzPad">' +
          '<button class="mzKey" onclick="mzAdd(\'up\')">⬆️</button>' +
          '<div class="mzPadRow">' +
            '<button class="mzKey" onclick="mzAdd(\'left\')">⬅️</button>' +
            '<button class="mzKey" onclick="mzAdd(\'down\')">⬇️</button>' +
            '<button class="mzKey" onclick="mzAdd(\'right\')">➡️</button>' +
          "</div></div>" +
        '<div class="mzBtns">' +
          '<button class="mzTool" onclick="mzUndo()">↶ Hoàn tác</button>' +
          '<button class="mzTool" onclick="mzClear()">🗑️ Xoá hết</button>' +
          '<button class="mzTool mzHintBtn" onclick="mzHint()">💡 Gợi ý</button>' +
          '<button class="btn mzRun" id="mzRun" onclick="mzRun()">▶️ Chạy</button>' +
        "</div>" +
        '<div class="mzMsg" id="mzMsg"></div>' +
      "</div>";
    mzPlaceBot(mzStart[0], mzStart[1], true);
    mzDrawProg();
    $("runner").scrollTo({ top: 0 });
  }

  function mzCell(r, c) { return document.querySelector('#mzBoard .mzCell[data-rc="' + r + "-" + c + '"]'); }
  function mzPlaceBot(r, c, instant) {
    var bot = $("mzBot"); if (!bot) return;
    if (instant) bot.style.transition = "none"; else bot.style.transition = "";
    bot.style.left = (c / mzCols * 100) + "%";
    bot.style.top = (r / mzRows * 100) + "%";
    if (instant) { void bot.offsetWidth; bot.style.transition = ""; }
  }
  function mzDrawProg() {
    var el = $("mzProg"); if (!el) return;
    el.innerHTML = mzProg.length
      ? mzProg.map(function (d, i) { return '<button class="mzChip" id="mzChip-' + i + '" onclick="mzDelAt(' + i + ')" title="Xoá lệnh này">' + DIR_ICON[d] + "</button>"; }).join("")
      : '<span class="mzEmpty">Bấm mũi tên bên dưới để thêm lệnh…</span>';
    var used = $("mzUsed"); if (used) used.textContent = mzProg.length;
    var lv = MAZE[mzLevel];
    if (lv.energy) { var e = $("mzEnergy"); if (e) e.innerHTML = "⚡ <b>" + Math.max(0, lv.energy - mzProg.length) + "</b>/" + lv.energy; }
  }
  window.mzAdd = function (d) {
    if (mzRunning) return;
    var lv = MAZE[mzLevel];
    if (lv.energy && mzProg.length >= lv.energy) {
      var e = $("mzEnergy"); if (e) { e.classList.remove("flash"); void e.offsetWidth; e.classList.add("flash"); }
      var msg = $("mzMsg"); if (msg) { msg.className = "mzMsg bad"; msg.textContent = "⚡ Hết năng lượng rồi! Hãy tìm đường ngắn hơn nhé."; }
      return;
    }
    mzProg.push(d); mzDrawProg(); sfxSafe("pop");
  };
  window.mzDelAt = function (i) { if (mzRunning) return; mzProg.splice(i, 1); mzDrawProg(); };
  window.mzUndo = function () { if (mzRunning) return; mzProg.pop(); mzDrawProg(); };
  window.mzClear = function () { if (mzRunning) return; mzProg = []; mzDrawProg(); };

  window.mzHint = async function () {
    if (mzRunning) return;
    mzHintUsed = true;
    var sol = mzSolve(true);
    var msg = $("mzMsg");
    if (!sol.path) { if (msg) { msg.className = "mzMsg"; msg.textContent = ""; } return; }
    if (msg) { msg.className = "mzMsg"; msg.textContent = "💡 Đường gợi ý đang sáng lên — đường ngắn nhất dài " + mzOptimal + " bước."; }
    for (var i = 0; i < sol.path.length; i++) {
      var cell = mzCell(sol.path[i][0], sol.path[i][1]);
      if (cell) { cell.classList.add("mzHintPath"); }
    }
    await sleep(2600);
    document.querySelectorAll("#mzBoard .mzHintPath").forEach(function (c) { c.classList.remove("mzHintPath"); });
  };

  window.mzRun = async function () {
    if (mzRunning || !mzProg.length) return;
    mzRunning = true;
    var runBtn = $("mzRun"); if (runBtn) runBtn.disabled = true;
    var msg = $("mzMsg"); if (msg) { msg.className = "mzMsg"; msg.textContent = ""; }
    mzPlaceBot(mzStart[0], mzStart[1], true);
    var r = mzStart[0], c = mzStart[1];
    var got = {}; // pin đã gom
    for (var i = 0; i < mzProg.length; i++) {
      var chip = $("mzChip-" + i); if (chip) chip.classList.add("running");
      var d = DIR[mzProg[i]], nr = r + d[0], nc = c + d[1];
      if (nr < 0 || nc < 0 || nr >= mzRows || nc >= mzCols || mzGrid[nr][nc] === "#") {
        var bot = $("mzBot"); if (bot) bot.classList.add("mzBump"); sfxSafe("wrong");
        await sleep(420); if (bot) bot.classList.remove("mzBump");
        if (chip) chip.classList.remove("running");
        return mzStuck("Oops! Robot gặp vật cản 🤖 — thử nghĩ lại đường đi nhé!");
      }
      if (mzGrid[nr][nc] === "T") {
        var bot2 = $("mzBot"); if (bot2) bot2.classList.add("mzBump"); sfxSafe("wrong");
        await sleep(420); if (bot2) bot2.classList.remove("mzBump");
        if (chip) chip.classList.remove("running");
        return mzStuck("Úi! Robot dính bẫy 🔥 — tránh ô lửa ra nhé!");
      }
      r = nr; c = nc; mzPlaceBot(r, c); sfxSafe("pop");
      await sleep(300);
      if (mzGrid[r][c] === "B" && !got[r + "," + c]) {
        got[r + "," + c] = true;
        var bc = mzCell(r, c); if (bc) { bc.classList.add("mzBatGot"); bc.textContent = "✨"; }
        burstSafe(4);
      }
      if (chip) chip.classList.remove("running");
    }
    var allBats = mzBats.every(function (b) { return got[b[0] + "," + b[1]]; });
    if (r === mzGoal[0] && c === mzGoal[1] && allBats) return mzWin();
    if (r === mzGoal[0] && c === mzGoal[1] && !allBats) return mzStuck("Gần đúng rồi! 🔋 Nhớ gom đủ pin trước khi tới đích nhé!");
    return mzStuck("Robot chưa tới được đích 🤖 — thêm/bớt lệnh rồi thử lại nhé!");
  };
  function mzStuck(text) {
    var msg = $("mzMsg"); if (msg) { msg.className = "mzMsg bad"; msg.textContent = text; }
    mzRunning = false; var runBtn = $("mzRun"); if (runBtn) runBtn.disabled = false;
  }

  function mzWin() {
    var used = mzProg.length;
    var stars = used <= mzOptimal ? 3 : used <= mzOptimal + 3 ? 2 : 1;
    if (mzHintUsed) stars = Math.min(stars, 2);
    if (stars > mzStars[mzLevel]) mzStars[mzLevel] = stars;
    if (mzLevel + 1 > mzUnlocked - 1 && mzLevel + 1 < MAZE.length) mzUnlocked = mzLevel + 2;
    sfxSafe("win"); burstSafe(22);
    var isLast = mzLevel >= MAZE.length - 1;
    var starRow = '<div class="mzStarRow">' + [1, 2, 3].map(function (n) {
      return '<span class="mzStar' + (n <= stars ? " on" : "") + '" style="animation-delay:' + (n * 0.12) + 's">★</span>';
    }).join("") + "</div>";
    var praise = stars === 3 ? "Xuất sắc! Bạn đang suy nghĩ như một lập trình viên! 🎉" : stars === 2 ? "Giỏi lắm! Thử tìm đường ngắn hơn để đạt 3 sao nhé! 💪" : "Hoàn thành rồi! Lần sau tối ưu hơn nhé! 🌟";
    $("runnerTop").classList.add("hidden");
    $("qCard").classList.add("hidden");
    $("resultCard").innerHTML =
      '<div class="mgResultIco">🤖</div>' +
      "<h2 style=\"margin-top:6px\">🎉 Hoàn thành " + esc(MAZE[mzLevel].name.split("·")[0].trim()) + "!</h2>" +
      starRow +
      '<div class="plTier">' + praise + "</div>" +
      '<div class="mzScoreBox"><div>👣 Bước của bạn: <b>' + used + "</b></div><div>🎯 Bước tối ưu: <b>" + mzOptimal + "</b></div></div>" +
      '<div class="center">' +
        (isLast ? "" : '<button class="btn" onclick="mzGoLevel(' + (mzLevel + 1) + ')">Chơi màn tiếp →</button> ') +
        '<button class="btn light" onclick="mzGoLevel(' + mzLevel + ')" style="margin-left:8px">Chơi lại 🔄</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về Bài tập ✏️</button>' +
      "</div>" +
      (isLast ? '<div class="plRec" style="margin-top:14px"><div class="plRecHead">🏆 Tuyệt vời!</div><p>Em đã qua cả 3 màn! Ra lệnh <b>rõ ràng, đúng thứ tự và ngắn gọn</b> chính là <b>thuật toán</b> — nền tảng để hiểu cách máy tính và AI làm việc.</p></div>' : "");
    $("resultCard").classList.remove("hidden");
    $("runner").scrollTo({ top: 0 });
    if (isLast && window.Cloud) {
      var totalStars = mzStars.reduce(function (a, b) { return a + b; }, 0);
      var pct = Math.round(totalStars / 9 * 100);
      Cloud.saveQuizResult({ mode: "practice", score: totalStars, total: 9, percent: pct, stars: Math.round(totalStars / 3) });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:maze", quiz: true, percent: pct, stars: Math.round(totalStars / 3) });
    }
  }

  /* =======================================================
     GAME 2 — 🕵️ THẬT HAY AI?
     ======================================================= */
  var RA_ROUNDS = [
    { icon: "🖼️", text: "Bức ảnh một bàn tay người có <b>6 ngón</b>, mấy ngón cong kỳ lạ, nền phía sau nhoè và méo.", isAI: true, why: "AI vẽ ảnh thường sai chi tiết nhỏ như số ngón tay, răng, chữ viết. Thấy tay 6 ngón là dấu hiệu ảnh do AI tạo." },
    { icon: "📖", text: "Bài văn kể buổi đi học đầu tiên, có tên cô giáo, cảm xúc hồi hộp và <b>vài lỗi chính tả nhỏ</b>.", isAI: false, why: "Trải nghiệm cá nhân thật, cảm xúc riêng và vài lỗi nhỏ thường là dấu hiệu do người viết." },
    { icon: "💬", text: "Một câu trả lời rất trôi chảy, tự tin nói rằng <b>“Cá voi là loài cá lớn nhất”</b>.", isAI: true, why: "AI có thể trả lời rất mượt nhưng vẫn <b>sai sự thật</b> (cá voi là thú, không phải cá). Luôn kiểm chứng lại thông tin!" },
    { icon: "🎵", text: "Một bài hát được tạo xong chỉ trong <b>10 giây</b> theo yêu cầu “vui, về mùa hè”.", isAI: true, why: "Tạo nhạc/thơ/ảnh cực nhanh theo mô tả là điều AI làm rất giỏi." },
    { icon: "✍️", text: "Bức thư tay viết cho bà, nét chữ nghiêng, có chỗ tẩy xoá và một vết mực lem.", isAI: false, why: "Chữ viết tay, tẩy xoá, vết mực là dấu vết của con người thật." },
    { icon: "🖼️", text: "Ảnh phong cảnh <b>quá hoàn hảo</b>: ánh sáng đều tăm tắp, mọi thứ mượt như tranh, không một hạt bụi.", isAI: true, why: "Ảnh “đẹp không tì vết”, chi tiết mượt bất thường thường là ảnh do AI tạo." },
    { icon: "🗣️", text: "Đoạn ghi âm bạn kể chuyện, có tiếng cười, đôi chỗ <b>ậm ừ</b> và nói vấp.", isAI: false, why: "Ngập ngừng, cười, nói vấp tự nhiên thường là người thật." },
    { icon: "📰", text: "Một “tin” giật gân kèm ảnh người nổi tiếng, nhưng <b>không báo nào khác đưa tin</b>.", isAI: true, why: "Nội dung/ảnh giả (deepfake) do AI tạo hay lan truyền một mình. Hãy kiểm tra nhiều nguồn tin cậy trước khi tin." },
    { icon: "🎨", text: "Bức tranh bé tự vẽ bằng sáp màu, hơi lệch, tô lem ra ngoài viền.", isAI: false, why: "Nét vẽ tay chưa đều, tô lem là sản phẩm thật của con người." }
  ];
  var RA_CLUES = [
    { ic: "✨", n: "Ánh sáng", tip: "Ảnh AI hay có ánh sáng quá mượt, đều một cách bất thường." },
    { ic: "👀", n: "Khuôn mặt", tip: "Nhìn kỹ mắt, răng, tai — AI hay vẽ méo hoặc lệch." },
    { ic: "🖐️", n: "Bàn tay", tip: "Đếm ngón tay nhé! AI thường vẽ thừa hoặc thiếu ngón." },
    { ic: "🌳", n: "Bối cảnh", tip: "Nền nhoè, méo, vật thể dính vào nhau → dấu hiệu AI." },
    { ic: "📝", n: "Chi tiết", tip: "Nội dung “quá hoàn hảo” hoặc chắc nịch mà sai sự thật → nghi AI." }
  ];
  var raList = [], raIdx = 0, raScore = 0, raCorrect = 0, raLocked = false, raHints = 0, raTimeId = null, raTimeLeft = 15;

  function raClearTimer() { if (raTimeId) { clearInterval(raTimeId); raTimeId = null; } }
  window.startRealAI = function () {
    raList = window.shuffle ? shuffle(RA_ROUNDS.slice()) : RA_ROUNDS.slice();
    raList = raList.slice(0, 6); raIdx = 0; raScore = 0; raCorrect = 0;
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    $("starBox").classList.add("hidden");
    raRender();
  };
  function raRender() {
    raClearTimer();
    raLocked = false; raHints = 0; raTimeLeft = 15;
    var it = raList[raIdx];
    var counter = $("counter"); if (counter) counter.textContent = "Câu " + (raIdx + 1) + "/" + raList.length;
    var bar = $("bar"); if (bar) bar.style.width = (raIdx / raList.length * 100) + "%";
    var clues = RA_CLUES.map(function (c, i) {
      return '<button class="adClue" style="animation-delay:' + (i * 0.07) + 's" onclick="raClue(' + i + ',this)">' + c.ic + " " + esc(c.n) + "</button>";
    }).join("");
    $("qCard").innerHTML =
      '<div class="adGame">' +
        '<div class="adBar">' +
          '<span class="adTimer" id="adTimer">⏱️ <b>15</b>s</span>' +
          '<span class="adScoreBox">⭐ <b id="adScore">' + raScore + '</b> điểm</span>' +
          '<button class="adHint" id="adHint" onclick="raHint()">💡 Gợi ý</button>' +
        '</div>' +
        '<div class="adMain">' +
          '<div class="adLeft"><div class="adMedia" id="adMedia">' +
            '<div class="adMediaEmoji">' + it.icon + '</div>' +
            '<div class="adPost"><div class="adPostTop"><span class="adAva">❓</span><span>Nội dung bí ẩn</span></div>' +
              '<p class="adPostBody">' + it.text + '</p></div>' +
            '<div class="adZoom">🔍 Quan sát thật kỹ nhé!</div>' +
          '</div></div>' +
          '<div class="adRight">' +
            '<div class="adDetectiveHead">🕵️ Thám tử AI</div>' +
            '<div class="adQ">Nội dung này do <b>AI</b> tạo hay <b>người/thật</b>?</div>' +
            '<div class="adClueLbl">🔍 Bé hãy quan sát:</div>' +
            '<div class="adClues">' + clues + '</div>' +
            '<div class="adClueTip" id="adClueTip">Bấm vào một dấu hiệu để xem mẹo quan sát 👆</div>' +
            '<div class="adAnswers" id="adAnswers">' +
              '<button class="adAns adAI" onclick="raPick(true)"><span class="adAnsIco">🤖</span><b>AI TẠO</b><small>Do trí tuệ nhân tạo</small></button>' +
              '<button class="adAns adHuman" onclick="raPick(false)"><span class="adAnsIco">👤</span><b>NGƯỜI THẬT</b><small>Do con người</small></button>' +
            '</div>' +
            '<div class="adFeedback hidden" id="adFeedback"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    requestAnimationFrame(function () { var m = $("adMedia"); if (m) m.classList.add("in"); });
    raStartTimer();
    $("runner").scrollTo({ top: 0 });
  }
  function raStartTimer() {
    raTimeLeft = 15;
    raTimeId = setInterval(function () {
      if (!$("adTimer")) { raClearTimer(); return; }
      raTimeLeft--;
      var tb = $("adTimer"); if (tb) { tb.innerHTML = "⏱️ <b>" + Math.max(0, raTimeLeft) + "</b>s"; tb.classList.toggle("warn", raTimeLeft <= 5); }
      if (raTimeLeft <= 0) { raClearTimer(); if (!raLocked) raReveal(null, true); }
    }, 1000);
  }
  window.raClue = function (i, el) {
    var tip = $("adClueTip");
    if (tip) { tip.innerHTML = "<b>" + RA_CLUES[i].ic + " " + esc(RA_CLUES[i].n) + ":</b> " + esc(RA_CLUES[i].tip); tip.classList.add("show"); }
    if (el) { document.querySelectorAll(".adClue.on").forEach(function (c) { c.classList.remove("on"); }); el.classList.add("on"); }
  };
  window.raHint = function () {
    if (raLocked || raHints >= 2) return;
    raHints++;
    var hints = ["Đừng nhìn tổng thể — hãy soi những chi tiết nhỏ 👀", "Kiểm tra ánh sáng, bàn tay và xem thông tin có đúng sự thật không 🔎"];
    var tip = $("adClueTip"); if (tip) { tip.innerHTML = "💡 <b>Gợi ý:</b> " + hints[raHints - 1] + " <i>(−1 sao)</i>"; tip.classList.add("show"); }
    if (raHints >= 2) { var h = $("adHint"); if (h) { h.disabled = true; h.textContent = "💡 Hết gợi ý"; } }
  };
  window.raPick = function (guessAI) { if (raLocked) return; raReveal(guessAI, false); };
  function raReveal(guessAI, timedOut) {
    raLocked = true; raClearTimer();
    var it = raList[raIdx];
    var ok = (!timedOut && guessAI === it.isAI);
    var stars = ok ? Math.max(1, 3 - raHints) : 1;
    raScore += stars; if (ok) raCorrect++;
    var ansWrap = $("adAnswers");
    if (ansWrap) {
      ansWrap.querySelectorAll(".adAns").forEach(function (b) { b.disabled = true; });
      var cEl = ansWrap.querySelector(it.isAI ? ".adAI" : ".adHuman"); if (cEl) cEl.classList.add("correct");
      if (!timedOut && !ok) { var chEl = ansWrap.querySelector(guessAI ? ".adAI" : ".adHuman"); if (chEl) chEl.classList.add("wrong"); }
    }
    if (ok) { sfxSafe("correct"); burstSafe(14); }
    else { sfxSafe("wrong"); var m = $("adMedia"); if (m) { m.classList.add("shake"); setTimeout(function () { m.classList.remove("shake"); }, 500); } }
    var sc = $("adScore"); if (sc) { sc.textContent = raScore; sc.classList.remove("pop"); void sc.offsetWidth; sc.classList.add("pop"); }
    var pctAI = it.isAI ? (78 + (raIdx % 3) * 5) : (12 + (raIdx % 3) * 6);
    var real = it.isAI ? "🤖 Do AI tạo" : "👤 Do người / Thật";
    var head = timedOut ? "⏰ Hết giờ rồi!" : (ok ? "🎉 Chính xác!" : "💡 Chưa đúng!");
    var sub = timedOut ? "Không sao, cùng xem đáp án nhé!" : (ok ? "Bạn đã phát hiện đúng dấu hiệu! 🕵️" : "Không sao — hãy xem kỹ các chi tiết nhé!");
    var starRow = '<div class="adStars">' + [1, 2, 3].map(function (n) { return '<span class="adStar' + (n <= stars ? " on" : "") + '" style="animation-delay:' + (n * 0.1) + 's">★</span>'; }).join("") + "</div>";
    var fb = $("adFeedback");
    fb.className = "adFeedback " + (ok ? "good" : "warn");
    fb.innerHTML =
      '<div class="adFbHead">' + head + "</div>" +
      starRow + '<div class="adFbPts">+' + stars + " điểm</div>" +
      '<div class="adFbSub">' + sub + "</div>" +
      '<div class="adDetector"><div class="adDetLbl">🤖 AI DETECTOR</div>' +
        '<div class="adDetBar"><span style="width:' + pctAI + '%"></span></div>' +
        '<div class="adDetVal">' + pctAI + "% giống AI · " + real + "</div></div>" +
      '<div class="adWhy"><b>🔍 Dấu hiệu:</b> ' + it.why + "</div>" +
      '<button class="btn adNext" onclick="raNext()">' + (raIdx < raList.length - 1 ? "Câu tiếp ➜" : "Xem kết quả 🏁") + "</button>";
    fb.classList.remove("hidden");
    if (ansWrap) ansWrap.classList.add("answered");
  }
  window.raNext = function () { if (raIdx < raList.length - 1) { raIdx++; raRender(); } else raFinish(); };
  function raFinish() {
    raClearTimer();
    var maxStars = raList.length * 3;
    var pct = Math.round(raScore / maxStars * 100);
    var badge = pct >= 85 ? "Thám tử AI đại tài! 🏆" : pct >= 55 ? "Thám tử AI cừ khôi! 😎" : "Tân thám tử AI 🔎";
    $("runnerTop").classList.add("hidden"); $("qCard").classList.add("hidden");
    var big = '<div class="adFinalStars">' + [1, 2, 3].map(function (n) { return '<span class="adStar' + (pct >= n * 30 ? " on" : "") + '">★</span>'; }).join("") + "</div>";
    $("resultCard").innerHTML =
      '<div class="mgResultIco">🕵️</div><h2 style="margin-top:8px">🎉 Bạn đã trở thành AI Detective!</h2>' +
      big +
      '<div class="plTier">' + badge + " · Nhận diện đúng <b>" + raCorrect + "/" + raList.length + "</b> · " + raScore + "/" + maxStars + " điểm</div>" +
      '<div class="plRec"><div class="plRecHead">💡 Ghi nhớ</div><p>AI tạo được ảnh, văn, nhạc rất nhanh và “mượt”, nhưng có thể <b>sai chi tiết</b> hoặc <b>bịa thông tin</b>. Hãy luôn <b>quan sát kỹ &amp; kiểm chứng nhiều nguồn</b>!</p></div>' +
      '<div class="center"><button class="btn" onclick="startRealAI()">🔄 Chơi lại</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">🚀 Tiếp tục học AI</button></div>';
    $("resultCard").classList.remove("hidden"); $("runner").scrollTo({ top: 0 });
    if (pct >= 55) burstSafe(20);
    if (window.Cloud) {
      var st = pct >= 85 ? 3 : pct >= 55 ? 2 : 1;
      Cloud.saveQuizResult({ mode: "practice", score: raCorrect, total: raList.length, percent: pct, stars: st });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:realai", quiz: true, percent: pct, stars: st });
    }
  }

  /* =======================================================
     GAME 3 — 🎯 PROMPT MASTER (ghép mảnh prompt)
     ======================================================= */
  var PROMPTS = [
    { goal: "Nhờ AI viết lời chúc sinh nhật cho bà 70 tuổi", pieces: [
      { t: "Đóng vai người cháu yêu bà", good: true },
      { t: "Lời chúc ấm áp, khoảng 3 câu", good: true },
      { t: "Nhắc bà thích trồng hoa và nấu ăn", good: true },
      { t: "Viết gì đó hay hay là được", good: false } ] },
    { goal: "Nhờ AI giúp ôn bài môn Toán lớp 5 về phân số", pieces: [
      { t: "Giải thích phân số bằng ví dụ chiếc bánh pizza", good: true },
      { t: "Cho 3 bài tập từ dễ đến khó kèm đáp án", good: true },
      { t: "Dùng lời lẽ dễ hiểu cho học sinh lớp 5", good: true },
      { t: "Làm cho nó thú vị đi", good: false } ] },
    { goal: "Nhờ AI gợi ý tên cho chú cún mới nuôi", pieces: [
      { t: "Cún là chó Corgi, lông vàng, rất nghịch", good: true },
      { t: "Gợi ý 5 cái tên dễ thương, dễ gọi", good: true },
      { t: "Kèm ý nghĩa ngắn cho mỗi tên", good: true },
      { t: "Đặt tên nào cũng được", good: false } ] },
    { goal: "Nhờ AI tóm tắt một bài đọc dài cho dễ hiểu", pieces: [
      { t: "Tóm tắt thành 5 gạch đầu dòng", good: true },
      { t: "Nêu ý chính và bài học rút ra", good: true },
      { t: "Viết cho bạn 12 tuổi dễ hiểu", good: true },
      { t: "Tóm tắt sao cũng được, ngắn là ok", good: false } ] }
  ];
  var pmList = [], pmIdx = 0, pmScore = 0, pmLocked = false;
  window.startPrompt = function () {
    pmList = window.shuffle ? shuffle(PROMPTS.slice()) : PROMPTS.slice();
    pmIdx = 0; pmScore = 0;
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false); pmRender();
  };
  function pmRender() {
    pmLocked = false;
    var it = pmList[pmIdx];
    var counter = $("counter"); if (counter) counter.textContent = (pmIdx + 1) + "/" + pmList.length;
    var bar = $("bar"); if (bar) bar.style.width = (pmIdx / pmList.length * 100) + "%";
    var pieces = (window.shuffle ? shuffle(it.pieces.slice()) : it.pieces.slice());
    var chips = pieces.map(function (p) {
      return '<button class="pmChip" data-good="' + (p.good ? 1 : 0) + '" onclick="pmToggle(this)">🧩 ' + esc(p.t) + "</button>";
    }).join("");
    $("qCard").innerHTML =
      '<div class="pmGame">' +
        '<div class="pmHead"><b>🎯 Prompt Master</b><span>Chọn các mảnh giúp câu lệnh RÕ RÀNG (bỏ mảnh mơ hồ)</span></div>' +
        '<div class="pmGoal">🎁 Mục tiêu: <b>' + esc(it.goal) + "</b></div>" +
        '<div class="pmChips">' + chips + "</div>" +
        '<div class="center"><button class="btn" id="pmCheck" onclick="pmCheck()">Chấm điểm ✨</button></div>' +
        '<div class="pmResult hidden" id="pmResult"></div>' +
        '<div class="center pmNextWrap hidden" id="pmNextWrap"><button class="btn light" id="pmNext" onclick="pmNext()">Câu tiếp ➜</button></div>' +
      "</div>";
    $("runner").scrollTo({ top: 0 });
  }
  window.pmToggle = function (btn) { if (pmLocked) return; btn.classList.toggle("on"); sfxSafe("pop"); };
  window.pmCheck = function () {
    if (pmLocked) return; pmLocked = true;
    var it = pmList[pmIdx];
    var chips = Array.prototype.slice.call(document.querySelectorAll("#qCard .pmChip"));
    var right = 0, chosenGood = [];
    chips.forEach(function (ch) {
      var good = ch.dataset.good === "1", on = ch.classList.contains("on");
      ch.disabled = true;
      if (good && on) { ch.classList.add("cGood"); right++; chosenGood.push(ch.textContent.replace(/^🧩\s*/, "")); }
      else if (!good && !on) { right++; }
      else if (good && !on) { ch.classList.add("cMiss"); }
      else { ch.classList.add("cBad"); }
    });
    var roundPct = Math.round(right / it.pieces.length * 100);
    pmScore += roundPct;
    var stars = roundPct >= 100 ? "⭐⭐⭐" : roundPct >= 75 ? "⭐⭐" : "⭐";
    var preview = chosenGood.length ? chosenGood.join(". ") + "." : "(chưa chọn mảnh nào tốt)";
    var res = $("pmResult");
    res.className = "pmResult " + (roundPct >= 75 ? "good" : "bad");
    res.innerHTML =
      '<div class="pmScoreLine">' + stars + " · Prompt của em đạt <b>" + roundPct + "%</b></div>" +
      '<div class="pmPreview"><span>📝 Prompt ghép được:</span><p>“' + esc(preview) + '”</p></div>' +
      '<div class="pmTip">💡 Prompt tốt = <b>vai trò + bối cảnh + yêu cầu rõ ràng + định dạng</b>. Tránh câu mơ hồ như “sao cũng được”.</div>';
    res.classList.remove("hidden");
    $("pmCheck").classList.add("hidden");
    var nw = $("pmNextWrap"); if (nw) nw.classList.remove("hidden");
    var nx = $("pmNext"); if (nx) nx.textContent = (pmIdx < pmList.length - 1) ? "Câu tiếp ➜" : "Xem kết quả 🏁";
    if (roundPct >= 75) { sfxSafe("correct"); burstSafe(6); } else sfxSafe("wrong");
  };
  window.pmNext = function () { if (pmIdx < pmList.length - 1) { pmIdx++; pmRender(); } else pmFinish(); };
  function pmFinish() {
    var pct = Math.round(pmScore / pmList.length);
    var stars = pct >= 85 ? 3 : pct >= 60 ? 2 : 1;
    var tier = pct >= 85 ? "Bậc thầy ra lệnh AI! 🏆" : pct >= 60 ? "Ra lệnh khá tốt! 😎" : "Luyện thêm cách hỏi nhé 💪";
    $("runnerTop").classList.add("hidden"); $("qCard").classList.add("hidden");
    $("resultCard").innerHTML =
      '<div class="mgResultIco">🎯</div><h2 style="margin-top:8px">Prompt Master</h2>' +
      '<div class="plTier">Điểm trung bình <b>' + pct + "%</b> — " + tier + "</div>" +
      '<div class="plRec"><div class="plRecHead">💡 Bí quyết ra lệnh cho AI</div><p>Câu lệnh (prompt) càng <b>rõ ràng, đủ thông tin</b> thì AI trả lời càng đúng ý: nói rõ <b>vai trò</b>, <b>bối cảnh</b>, <b>việc cần làm</b> và <b>định dạng</b> mong muốn.</p></div>' +
      '<div class="center"><button class="btn" onclick="startPrompt()">Chơi lại 🔄</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về Bài tập ✏️</button></div>';
    $("resultCard").classList.remove("hidden"); $("runner").scrollTo({ top: 0 });
    if (pct >= 60) burstSafe(18);
    if (window.Cloud) {
      Cloud.saveQuizResult({ mode: "practice", score: pct, total: 100, percent: pct, stars: stars });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:prompt", quiz: true, percent: pct, stars: stars });
    }
  }

  /* =======================================================
     GAME 4 — 💣 GỠ BOOM (dò mìn + trả lời câu hỏi AI)
     Bấm ô để mở; trúng boom phải trả lời câu hỏi để gỡ.
     Bàn cờ & số boom tăng dần theo vòng. Thắng = mở hết ô an toàn + pass vòng.
     ======================================================= */
  var GB_Q = [
    { q: "AI là viết tắt của điều gì?", o: ["Trí tuệ nhân tạo", "Ánh sáng nhân tạo", "Âm thanh ảo"], a: 0 },
    { q: "ChatGPT có thể làm gì?", o: ["Trò chuyện, trả lời câu hỏi", "Nấu ăn thật", "Giặt quần áo"], a: 0 },
    { q: "AI trở nên giỏi hơn nhờ điều gì?", o: ["Nhiều dữ liệu tốt", "Ngủ nhiều", "Ăn kẹo"], a: 0 },
    { q: "Khi AI trả lời, em nên?", o: ["Kiểm chứng lại thông tin", "Tin tuyệt đối", "Bỏ qua"], a: 0 },
    { q: "Đâu KHÔNG phải là AI?", o: ["Cái bàn gỗ", "Trợ lý ảo", "Xe tự lái"], a: 0 },
    { q: "Robot hút bụi né đồ vật nhờ gì?", o: ["Cảm biến", "Phép thuật", "May mắn"], a: 0 },
    { q: "Deepfake là gì?", o: ["Ảnh/video giả do AI tạo", "Một món ăn", "Một trò chơi"], a: 0 },
    { q: "Muốn AI vẽ đúng ý, em cần?", o: ["Mô tả rõ ràng (prompt tốt)", "Hét thật to", "Nhắm mắt"], a: 0 },
    { q: "AI có cảm xúc thật như con người không?", o: ["Không", "Có", "Luôn buồn"], a: 0 },
    { q: "Dùng AI an toàn nghĩa là?", o: ["Không chia sẻ thông tin cá nhân", "Tin mọi thứ AI nói", "Dùng cả ngày"], a: 0 },
    { q: "AI dịch tiếng Anh sang tiếng Việt là ứng dụng của?", o: ["Xử lý ngôn ngữ", "Nấu ăn", "Thể thao"], a: 0 },
    { q: "Ai là người kiểm tra kết quả của AI?", o: ["Con người", "Không ai cả", "Chú mèo"], a: 0 }
  ];
  var GB_TOTAL = 3;
  var gbRound = 0, gbRows = 0, gbCols = 5, gbBooms = {}, gbState = [], gbCount = [];
  var gbLives = 3, gbScore = 0, gbHiddenLeft = 0, gbLocked = false, gbQIdx = 0, gbQPool = [];

  window.startBoom = function () {
    gbRound = 0; gbLives = 3; gbScore = 0;
    gbQPool = window.shuffle ? shuffle(GB_Q.slice()) : GB_Q.slice(); gbQIdx = 0;
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    $("starBox").classList.add("hidden");
    gbNewRound();
  };

  function gbNewRound() {
    gbCols = 5; gbRows = 4 + gbRound;              // bàn cờ to dần theo vòng
    var cells = gbRows * gbCols;
    var nBooms = Math.max(3, Math.round(cells * 0.16) + gbRound); // boom nhiều dần
    gbBooms = {};
    var placed = 0;
    while (placed < nBooms) {
      var r = Math.floor(Math.random() * gbRows), c = Math.floor(Math.random() * gbCols);
      if (!gbBooms[r + "," + c]) { gbBooms[r + "," + c] = true; placed++; }
    }
    gbState = []; gbCount = [];
    for (var i = 0; i < gbRows; i++) { gbState.push(new Array(gbCols).fill("hidden")); gbCount.push(new Array(gbCols).fill(0)); }
    for (var r2 = 0; r2 < gbRows; r2++) for (var c2 = 0; c2 < gbCols; c2++) {
      if (gbBooms[r2 + "," + c2]) continue;
      var n = 0;
      for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        if (gbBooms[(r2 + dr) + "," + (c2 + dc)]) n++;
      }
      gbCount[r2][c2] = n;
    }
    gbHiddenLeft = cells;   // thắng khi mở/gỡ HẾT mọi ô (kể cả gỡ hết boom)
    gbLocked = false;
    gbRender(nBooms);
  }

  function gbRender(nBooms) {
    var counter = $("counter"); if (counter) counter.textContent = "Vòng " + (gbRound + 1) + "/" + GB_TOTAL;
    var bar = $("bar"); if (bar) bar.style.width = (gbRound / GB_TOTAL * 100) + "%";
    var cells = "";
    for (var r = 0; r < gbRows; r++) for (var c = 0; c < gbCols; c++) {
      cells += '<button class="gbCell gbHidden" data-rc="' + r + '-' + c + '" onclick="gbReveal(' + r + ',' + c + ')"></button>';
    }
    $("qCard").innerHTML =
      '<div class="gbGame">' +
        '<div class="gbBar">' +
          '<span class="gbStat gbLives" id="gbLives">' + gbHeartsHTML() + "</span>" +
          '<span class="gbStat">⭐ <b id="gbScore">' + gbScore + '</b></span>' +
          '<span class="gbStat">💣 <b>' + nBooms + '</b></span>' +
        "</div>" +
        '<div class="gbHint">💣 Bấm ô để mở. Trúng boom thì trả lời câu hỏi để gỡ nhé!</div>' +
        '<div class="mzWrap gbWrap"><div class="gbBoard" id="gbBoard" style="--cols:' + gbCols + ";--rows:" + gbRows + '">' + cells + "</div></div>" +
        '<div class="gbQuiz hidden" id="gbQuiz"></div>' +
        '<div class="gbMsg" id="gbMsg"></div>' +
      "</div>";
    $("runner").scrollTo({ top: 0 });
  }

  function gbEl(r, c) { return document.querySelector('#gbBoard [data-rc="' + r + "-" + c + '"]'); }
  function gbHeartsHTML() { var h = ""; for (var i = 0; i < gbLives; i++) h += '<span class="gbHeart">❤️</span>'; return h; }
  function gbPaint(r, c) {
    var el = gbEl(r, c); if (!el) return;
    var st = gbState[r][c];
    el.className = "gbCell " + st;      // open = ô an toàn (không hiện số); defused = đã gỡ boom
    if (st === "defused") { el.textContent = "✅"; }
    else { el.textContent = ""; }
  }

  window.gbReveal = function (r, c) {
    if (gbLocked || gbState[r][c] !== "hidden") return;
    if (gbBooms[r + "," + c]) { gbAsk(r, c); return; }
    // flood fill mở ô an toàn
    var stack = [[r, c]];
    while (stack.length) {
      var cur = stack.pop(), cr = cur[0], cc = cur[1];
      if (cr < 0 || cc < 0 || cr >= gbRows || cc >= gbCols) continue;
      if (gbState[cr][cc] !== "hidden" || gbBooms[cr + "," + cc]) continue;
      gbState[cr][cc] = "open"; gbHiddenLeft--; gbScore++; gbPaint(cr, cc);
      if (gbCount[cr][cc] === 0) {
        for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          stack.push([cr + dr, cc + dc]);
        }
      }
    }
    var sc = $("gbScore"); if (sc) sc.textContent = gbScore;
    sfxSafe("pop");
    if (gbHiddenLeft <= 0) gbRoundWin();
  };

  function gbAsk(r, c) {
    gbLocked = true;
    var el = gbEl(r, c); if (el) { el.className = "gbCell gbAsk"; el.textContent = "💣"; } // hiện boom ngay trên ô vừa chọn
    var q = gbQPool[gbQIdx % gbQPool.length]; gbQIdx++;
    var pairs = q.o.map(function (t, i) { return [t, i === q.a]; });
    if (window.shuffle) pairs = shuffle(pairs);
    var opts = pairs.map(function (p) {
      return '<button class="gbOpt" data-ok="' + (p[1] ? 1 : 0) + '" onclick="gbAnswer(this,' + r + "," + c + ')">' + esc(p[0]) + "</button>";
    }).join("");
    var qz = $("gbQuiz");
    qz.innerHTML =
      '<div class="gbQHead">💣 Boom! Trả lời đúng để gỡ nhé</div>' +
      '<div class="gbQText">' + esc(q.q) + "</div>" +
      '<div class="gbOpts">' + opts + "</div>";
    qz.classList.remove("hidden");
    qz.classList.add("show");
    $("runner").scrollTo({ top: $("qCard").scrollHeight });
  }

  window.gbAnswer = function (btn, r, c) {
    var ok = btn.dataset.ok === "1";
    var opts = document.querySelectorAll("#gbQuiz .gbOpt");
    opts.forEach(function (b) { b.disabled = true; if (b.dataset.ok === "1") b.classList.add("ok"); });
    if (!ok) btn.classList.add("no");
    var msg = $("gbMsg");
    if (ok) {
      gbState[r][c] = "defused"; gbScore += 10; gbHiddenLeft--; gbPaint(r, c); sfxSafe("correct"); burstSafe(8);
      if (msg) { msg.className = "gbMsg good"; msg.textContent = "✅ Gỡ boom thành công! +10 điểm 🎉"; }
    } else {
      gbState[r][c] = "boom"; gbHiddenLeft--; gbPaint(r, c); sfxSafe("wrong");
      var hs = document.querySelectorAll("#gbLives .gbHeart:not(.lost)");
      if (hs.length) hs[hs.length - 1].classList.add("lost");   // hiệu ứng mất 1 tim
      gbLives--;
      if (msg) { msg.className = "gbMsg bad"; msg.textContent = "💥 Boom nổ! Mất 1 mạng — còn " + Math.max(0, gbLives) + ". Cùng học tiếp nhé!"; }
    }
    var sc = $("gbScore"); if (sc) sc.textContent = gbScore;
    setTimeout(function () {
      var qz = $("gbQuiz"); if (qz) { qz.classList.add("hidden"); qz.innerHTML = ""; }
      if (gbState[r][c] === "boom") { gbState[r][c] = "open"; gbPaint(r, c); }  // clear boom ra khỏi ô
      gbLocked = false;
      if (gbLives <= 0) { gbOver(); return; }
      if (gbHiddenLeft <= 0) gbRoundWin();
    }, 1100);
  };

  function gbRoundWin() {
    gbLocked = true;
    var msg = $("gbMsg"); if (msg) { msg.className = "gbMsg good"; msg.textContent = "🎉 Qua vòng " + (gbRound + 1) + "!"; }
    burstSafe(16); sfxSafe("win");
    setTimeout(function () {
      if (gbRound < GB_TOTAL - 1) { gbRound++; gbNewRound(); }
      else gbFinish(true);
    }, 1200);
  }
  function gbOver() { gbFinish(false); }

  function gbFinish(won) {
    gbLocked = true;
    $("runnerTop").classList.add("hidden"); $("qCard").classList.add("hidden");
    var head = won ? "🏆 Thắng rồi! Bạn là chuyên gia gỡ boom!" : "💪 Hết mạng rồi — thử lại nhé!";
    var stars = won ? 3 : (gbRound >= 1 ? 2 : 1);
    $("resultCard").innerHTML =
      '<div class="mgResultIco">💣</div><h2 style="margin-top:8px">Gỡ boom</h2>' +
      '<div class="plTier">' + head + " · <b>" + gbScore + "</b> điểm · Qua <b>" + (won ? GB_TOTAL : gbRound) + "/" + GB_TOTAL + "</b> vòng</div>" +
      '<div class="plRec"><div class="plRecHead">💡 Em vừa ôn</div><p>Vừa rèn <b>quan sát &amp; suy luận</b> (như dò mìn), vừa ôn kiến thức AI qua các câu hỏi. Cứ sai là được học thêm điều mới!</p></div>' +
      '<div class="center"><button class="btn" onclick="startBoom()">Chơi lại 🔄</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về Bài tập ✏️</button></div>';
    $("resultCard").classList.remove("hidden"); $("runner").scrollTo({ top: 0 });
    if (won) burstSafe(22);
    if (won && window.Cloud) {
      Cloud.saveQuizResult({ mode: "practice", score: gbScore, total: gbScore, percent: 100, stars: stars });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:boom", quiz: true, percent: 100, stars: stars });
    }
  }
})();
