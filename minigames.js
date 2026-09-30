/* =========================================================
   minigames.js — 2 trò chơi AI (3D nhẹ bằng CSS)
   • 🤖 Robot mê cung: xếp chuỗi lệnh đưa robot tới đích → tư duy thuật toán
   • 🕵️ Thật hay AI?: đoán nội dung do AI hay người tạo → AI literacy, tư duy phản biện
   Dùng chung #runner (như game Nhập vai). Cộng XP qua Cloud.aiRecord nếu đăng nhập.
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
     GAME 1 — 🤖 ROBOT MÊ CUNG
     Bản đồ: chuỗi ký tự  S=xuất phát  G=đích  #=tường  .=ô trống
     ======================================================= */
  var MAZE = [
    { name: "Màn 1 · Khởi động", grid: ["S....", ".###.", ".....", "###.G"] },
    { name: "Màn 2 · Rẽ lối",    grid: ["S.#..", "..#..", "..#..", "....#", "#...G"] },
    { name: "Màn 3 · Đường vòng", grid: ["S#...", ".#.#.", ".#.#.", "...#.", "###.G"] }
  ];
  var DIR = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
  var DIR_ICON = { up: "⬆️", down: "⬇️", left: "⬅️", right: "➡️" };

  var mzLevel = 0, mzProg = [], mzRunning = false, mzSolved = 0, mzGrid = null, mzRows = 0, mzCols = 0, mzStart = null, mzGoal = null;

  function mzParse(rows) {
    var g = rows.map(function (r) { return r.split(""); });
    for (var r = 0; r < g.length; r++) for (var c = 0; c < g[r].length; c++) {
      if (g[r][c] === "S") mzStart = [r, c];
      if (g[r][c] === "G") mzGoal = [r, c];
    }
    mzRows = g.length; mzCols = g[0].length; mzGrid = g;
  }

  window.startMaze = function () {
    mzLevel = 0; mzSolved = 0;
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    mzRenderLevel();
  };

  function mzRenderLevel() {
    var lv = MAZE[mzLevel];
    mzParse(lv.grid);
    mzProg = []; mzRunning = false;
    var counter = $("counter"); if (counter) counter.textContent = "Màn " + (mzLevel + 1) + "/" + MAZE.length;
    var bar = $("bar"); if (bar) bar.style.width = (mzLevel / MAZE.length * 100) + "%";

    var cells = "";
    for (var r = 0; r < mzRows; r++) for (var c = 0; c < mzCols; c++) {
      var ch = mzGrid[r][c];
      var cls = "mzCell" + (ch === "#" ? " mzWall" : "") + (ch === "G" ? " mzGoal" : "");
      cells += '<div class="' + cls + '">' + (ch === "G" ? "🔋" : "") + "</div>";
    }
    var pad =
      '<div class="mzPad">' +
      '<button class="mzKey" onclick="mzAdd(\'up\')">⬆️</button>' +
      '<div class="mzPadRow">' +
        '<button class="mzKey" onclick="mzAdd(\'left\')">⬅️</button>' +
        '<button class="mzKey" onclick="mzAdd(\'down\')">⬇️</button>' +
        '<button class="mzKey" onclick="mzAdd(\'right\')">➡️</button>' +
      '</div></div>';

    $("qCard").innerHTML =
      '<div class="mzGame">' +
        '<div class="mzHead"><b>🤖 ' + esc(lv.name) + '</b><span>Xếp lệnh đưa robot tới 🔋 rồi bấm ▶️ Chạy</span></div>' +
        '<div class="mzWrap"><div class="mzBoard" id="mzBoard" style="--cols:' + mzCols + ';--rows:' + mzRows + '">' +
          cells +
          '<div class="mzBot" id="mzBot">🤖</div>' +
        '</div></div>' +
        '<div class="mzProgWrap"><div class="mzProg" id="mzProg"></div></div>' +
        pad +
        '<div class="mzBtns">' +
          '<button class="btn light mzUndo" onclick="mzUndo()">⌫ Xoá lệnh cuối</button>' +
          '<button class="btn mzRun" id="mzRun" onclick="mzRun()">▶️ Chạy</button>' +
        '</div>' +
        '<div class="mzMsg" id="mzMsg"></div>' +
      '</div>';
    mzPlaceBot(mzStart[0], mzStart[1]);
    mzDrawProg();
  }

  function mzPlaceBot(r, c) {
    var bot = $("mzBot"); if (!bot) return;
    bot.style.left = (c / mzCols * 100) + "%";
    bot.style.top = (r / mzRows * 100) + "%";
  }
  function mzDrawProg() {
    var el = $("mzProg"); if (!el) return;
    el.innerHTML = mzProg.length
      ? mzProg.map(function (d) { return '<span class="mzChip">' + DIR_ICON[d] + "</span>"; }).join("")
      : '<span class="mzEmpty">Chưa có lệnh nào… bấm mũi tên để thêm</span>';
  }
  window.mzAdd = function (d) { if (mzRunning) return; if (mzProg.length >= 30) return; mzProg.push(d); mzDrawProg(); sfxSafe("pop"); };
  window.mzUndo = function () { if (mzRunning) return; mzProg.pop(); mzDrawProg(); };

  window.mzRun = async function () {
    if (mzRunning || !mzProg.length) return;
    mzRunning = true;
    var runBtn = $("mzRun"); if (runBtn) runBtn.disabled = true;
    var msg = $("mzMsg"); if (msg) { msg.className = "mzMsg"; msg.textContent = ""; }
    var r = mzStart[0], c = mzStart[1];
    for (var i = 0; i < mzProg.length; i++) {
      var d = DIR[mzProg[i]];
      var nr = r + d[0], nc = c + d[1];
      if (nr < 0 || nc < 0 || nr >= mzRows || nc >= mzCols || mzGrid[nr][nc] === "#") {
        // đụng tường / ra ngoài
        var bot = $("mzBot"); if (bot) { bot.classList.add("mzBump"); }
        sfxSafe("wrong");
        await sleep(400);
        if (bot) bot.classList.remove("mzBump");
        if (msg) { msg.className = "mzMsg bad"; msg.textContent = "😅 Ối! Robot đụng tường ở bước " + (i + 1) + ". Sửa lệnh rồi thử lại nhé!"; }
        mzRunning = false; if (runBtn) runBtn.disabled = false;
        return;
      }
      r = nr; c = nc; mzPlaceBot(r, c); sfxSafe("pop");
      await sleep(340);
    }
    if (r === mzGoal[0] && c === mzGoal[1]) {
      mzSolved++;
      sfxSafe("correct"); burstSafe(10);
      if (msg) { msg.className = "mzMsg good"; msg.textContent = "🎉 Tuyệt! Robot đã tới nơi!"; }
      await sleep(900);
      if (mzLevel < MAZE.length - 1) { mzLevel++; mzRenderLevel(); }
      else mzFinish();
    } else {
      if (msg) { msg.className = "mzMsg bad"; msg.textContent = "🤖 Robot dừng chưa đúng chỗ. Thử thêm/bớt lệnh nhé!"; }
      mzRunning = false; if (runBtn) runBtn.disabled = false;
    }
  };

  function mzFinish() {
    var pct = Math.round(mzSolved / MAZE.length * 100);
    var stars = pct >= 100 ? 3 : pct >= 66 ? 2 : 1;
    var tier = pct >= 100 ? "Lập trình viên nhí! 🏆" : pct >= 66 ? "Tư duy tốt! 😎" : "Cố thêm chút nữa nhé 💪";
    $("runnerTop").classList.add("hidden");
    $("qCard").classList.add("hidden");
    $("resultCard").innerHTML =
      '<div class="mgResultIco">🤖</div>' +
      '<h2 style="margin-top:8px">Robot mê cung</h2>' +
      '<div class="plTier">Qua <b>' + mzSolved + "/" + MAZE.length + "</b> màn · " + pct + "% — " + tier + "</div>" +
      '<div class="plRec"><div class="plRecHead">💡 Em vừa học</div><p>Máy tính &amp; robot làm đúng khi ta ra <b>lệnh rõ ràng, đúng thứ tự</b> — đó chính là <b>thuật toán</b>. AI cũng cần chỉ dẫn rõ ràng thì mới làm tốt!</p></div>' +
      '<div class="center">' +
        '<button class="btn" onclick="startMaze()">Chơi lại 🔄</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về Bài tập ✏️</button>' +
      "</div>";
    $("resultCard").classList.remove("hidden");
    $("runner").scrollTo({ top: 0 });
    if (pct >= 66) burstSafe(18);
    if (window.Cloud) {
      Cloud.saveQuizResult({ mode: "practice", score: mzSolved, total: MAZE.length, percent: pct, stars: stars });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:maze", quiz: true, percent: pct, stars: stars });
    }
  }

  /* =======================================================
     GAME 2 — 🕵️ THẬT HAY AI?
     Mỗi vòng: 1 nội dung → đoán do AI hay Người/Thật tạo → lật thẻ 3D lộ đáp án + vì sao
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

  var raList = [], raIdx = 0, raScore = 0, raLocked = false;

  window.startRealAI = function () {
    raList = RA_ROUNDS.slice();
    // xáo trộn nhẹ theo chỉ số (không dùng Math.random cố định của app — dùng shuffle nếu có)
    if (window.shuffle) raList = shuffle(raList);
    raList = raList.slice(0, 6);
    raIdx = 0; raScore = 0;
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    raRender();
  };

  function raRender() {
    raLocked = false;
    var it = raList[raIdx];
    var counter = $("counter"); if (counter) counter.textContent = (raIdx + 1) + "/" + raList.length;
    var bar = $("bar"); if (bar) bar.style.width = (raIdx / raList.length * 100) + "%";
    $("qCard").innerHTML =
      '<div class="raGame">' +
        '<div class="raHead"><b>🕵️ Thật hay AI?</b><span>Nội dung này do <b>AI</b> tạo hay do <b>người/thật</b>?</span></div>' +
        '<div class="raCard" id="raCard"><div class="raInner" id="raInner">' +
          '<div class="raFront"><div class="raIco">' + it.icon + '</div><p>' + it.text + "</p></div>" +
          '<div class="raBack" id="raBack"></div>' +
        "</div></div>" +
        '<div class="raBtns" id="raBtns">' +
          '<button class="btn raPick" onclick="raPick(true)">🤖 AI tạo</button>' +
          '<button class="btn light raPick" onclick="raPick(false)">🧑 Người / Thật</button>' +
        "</div>" +
        '<div class="center raNextWrap hidden" id="raNextWrap"><button class="btn" id="raNext" onclick="raNext()">Câu tiếp ➜</button></div>' +
      "</div>";
    $("runner").scrollTo({ top: 0 });
  }

  window.raPick = function (guessAI) {
    if (raLocked) return; raLocked = true;
    var it = raList[raIdx];
    var ok = (guessAI === it.isAI);
    if (ok) { raScore++; sfxSafe("correct"); burstSafe(5); } else sfxSafe("wrong");
    var real = it.isAI ? "🤖 Do AI tạo" : "🧑 Do người / Thật";
    $("raBack").innerHTML =
      '<div class="raVerdict ' + (ok ? "good" : "bad") + '">' + (ok ? "✅ Chính xác!" : "❌ Chưa đúng") + "</div>" +
      '<div class="raReal">' + real + "</div>" +
      '<p class="raWhy">' + it.why + "</p>";
    $("raCard").classList.add("flipped");
    $("raBtns").classList.add("hidden");
    var nw = $("raNextWrap"); if (nw) nw.classList.remove("hidden");
    var nx = $("raNext"); if (nx) nx.textContent = (raIdx < raList.length - 1) ? "Câu tiếp ➜" : "Xem kết quả 🏁";
  };

  window.raNext = function () {
    if (raIdx < raList.length - 1) { raIdx++; raRender(); }
    else raFinish();
  };

  function raFinish() {
    var pct = Math.round(raScore / raList.length * 100);
    var stars = pct >= 85 ? 3 : pct >= 60 ? 2 : 1;
    var tier = pct >= 85 ? "Thám tử AI đại tài! 🏆" : pct >= 60 ? "Mắt tinh đấy! 😎" : "Luyện thêm để không bị AI đánh lừa nhé 💪";
    $("runnerTop").classList.add("hidden");
    $("qCard").classList.add("hidden");
    $("resultCard").innerHTML =
      '<div class="mgResultIco">🕵️</div>' +
      '<h2 style="margin-top:8px">Thật hay AI?</h2>' +
      '<div class="plTier">Đúng <b>' + raScore + "/" + raList.length + "</b> · " + pct + "% — " + tier + "</div>" +
      '<div class="plRec"><div class="plRecHead">💡 Ghi nhớ</div><p>AI tạo được ảnh, văn, nhạc rất nhanh và “mượt”, nhưng có thể <b>sai chi tiết</b> hoặc <b>bịa thông tin</b>. Hãy luôn <b>nghi ngờ &amp; kiểm chứng nhiều nguồn</b> trước khi tin.</p></div>' +
      '<div class="center">' +
        '<button class="btn" onclick="startRealAI()">Chơi lại 🔄</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về Bài tập ✏️</button>' +
      "</div>";
    $("resultCard").classList.remove("hidden");
    $("runner").scrollTo({ top: 0 });
    if (pct >= 60) burstSafe(18);
    if (window.Cloud) {
      Cloud.saveQuizResult({ mode: "practice", score: raScore, total: raList.length, percent: pct, stars: stars });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:realai", quiz: true, percent: pct, stars: stars });
    }
  }
})();
