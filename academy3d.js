/* =========================================================
   academy3d.js — AI Academy bản 3D (Three.js, nạp lazy)
   Nhân vật low-poly dựng bằng code, đi trong phòng 3D, tới NPC để điều tra.
   Ghi đè window.startAcademy (2D) khi file này nạp sau minigames.js.
   Dùng chung #runner + Cloud + sfx/burst.
   ========================================================= */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  function sfxSafe(n) { try { if (window.sfx && sfx[n]) sfx[n](); } catch (e) {} }
  function burstSafe(n) { try { if (window.burst) burst(n); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* Nội dung Chapter 1 (giống bản 2D) */
  var AC = {
    hook: { who: "07:42 sáng", text: "Hệ thống AI của trường vừa <span class='hl hl-pink'>khóa tài khoản</span> bạn Minh vì “gian lận”. Bạn có <span class='hl hl-orange'>30 phút</span> để <span class='hl hl-violet'>điều tra!</span>" },
    lan: "AI chấm bài thấy điểm Minh bất thường nên kết luận gian lận. Em điều tra giúp cô nhé, Thám tử AI!",
    clues: [
      { ic: "🖥️", label: "Nhật ký AI", info: "AI thấy bài Minh giống tài liệu trên mạng 85% → tự kết luận “chép”." },
      { ic: "📄", label: "Bài của Minh", info: "Minh dùng nhiều câu giống dàn ý thầy phát — vì em học thuộc dàn ý đó." },
      { ic: "📊", label: "Dữ liệu của AI", info: "AI chỉ học từ 50 bài mẫu, chưa từng thấy cách trình bày của Minh." }
    ],
    q: "AI báo Minh gian lận với độ tin cậy 85%. Em làm gì?",
    options: [
      { t: "😮 Tin AI, khóa tài khoản luôn", good: false, reply: "Em tin ngay… Minh bị oan! Thử lại nhé." },
      { t: "❓ Hỏi AI: “dựa vào gì mà kết luận?”", good: true, reply: "Tốt! Luôn bắt AI giải thích lý do." },
      { t: "🔎 Tự đi kiểm chứng bằng chứng", good: true, reply: "Xuất sắc! Kiểm chứng trước khi tin." }
    ],
    result: "Em trình bày bằng chứng cho cô Lan. Minh được minh oan! Trường ra quy định: <b>AI chỉ GỢI Ý, con người mới QUYẾT ĐỊNH.</b>",
    endTitle: "Phá án thành công! 🎉",
    lesson: "AI kết luận dựa trên <b>dữ liệu nó được học</b>. Dữ liệu ít/lệch → kết luận sai. Đừng coi AI là chân lý — hãy <b>hỏi lý do &amp; kiểm chứng</b>!"
  };

  // vị trí NPC trong phòng (x,z); phòng ~ 16x16 tâm (0,0)
  var NPCS = [
    { id: "lan", emo: "👩‍🏫", name: "Cô Lan", x: -5, z: -5, color: 0xf9a8d4 },
    { id: "c0", emo: "🖥️", name: "Nhật ký AI", x: 5, z: -5, color: 0x93c5fd },
    { id: "c1", emo: "📄", name: "Bài của Minh", x: -5, z: 5, color: 0xfcd34d },
    { id: "c2", emo: "📊", name: "Dữ liệu AI", x: 5, z: 5, color: 0x86efac },
    { id: "ai", emo: "🤖", name: "Máy AI", x: 0, z: -6.5, color: 0xc4b5fd }
  ];

  var THREE = null, ready = false;
  var renderer, scene, camera, hero, raf = 0;
  var keys = {}, pad = {}, dialogOpen = false, seen = {}, solved = false, wrong = 0, nearNpc = null;
  var npcMeshes = [];

  window.startAcademy = function () {
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    $("starBox").classList.add("hidden");
    var counter = $("counter"); if (counter) counter.textContent = "🎓 AI Academy 3D";
    var bar = $("bar"); if (bar) bar.style.width = "0%";
    seen = {}; solved = false; wrong = 0; nearNpc = null; keys = {}; pad = {};
    $("qCard").innerHTML = '<div class="a3dLoading">⏳ Đang tải thế giới 3D…</div>';
    import("https://esm.sh/three@0.160.0").then(function (mod) {
      THREE = mod; ready = true; a3dBuild();
    }).catch(function (e) {
      $("qCard").innerHTML = '<div class="a3dLoading">😕 Không tải được 3D (cần mạng). Hãy thử lại.</div>';
    });
  };

  function a3dBuild() {
    $("qCard").innerHTML =
      '<div class="a3dGame">' +
        '<div class="a3dTop"><span class="rpgBadge">🔍 Manh mối: <b id="a3dClue">0</b>/3</span>' +
          '<span class="rpgHintTxt">Mũi tên / WASD / D-pad để đi · lại gần NPC để nói chuyện</span></div>' +
        '<div class="a3dStage" id="a3dStage"></div>' +
        '<button class="btn a3dInteract hidden" id="a3dInteract" onclick="a3dDoInteract()"></button>' +
        '<div class="a3dPad">' +
          '<button class="rpgKey" data-d="U">⬆️</button>' +
          '<div class="rpgPadRow"><button class="rpgKey" data-d="L">⬅️</button>' +
            '<button class="rpgKey" data-d="D">⬇️</button><button class="rpgKey" data-d="R">➡️</button></div>' +
        "</div>" +
        '<div class="rpgDialog hidden" id="rpgDialog"></div>' +
      "</div>";

    var stage = $("a3dStage");
    var w = stage.clientWidth || 400, h = Math.round(w * 0.66);
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe9e6ff);
    camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 100);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    stage.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xfff4ff, 0xcdbfff, 0.95));
    var dir = new THREE.DirectionalLight(0xffffff, 1.0); dir.position.set(6, 13, 6);
    dir.castShadow = true; dir.shadow.mapSize.set(1024, 1024);
    dir.shadow.camera.left = -11; dir.shadow.camera.right = 11; dir.shadow.camera.top = 11; dir.shadow.camera.bottom = -11;
    scene.add(dir);
    var warm = new THREE.PointLight(0xffdca8, 0.7, 28); warm.position.set(-5, 5, -6); scene.add(warm); // nắng cửa sổ ấm

    // sàn + thảm + lưới
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), new THREE.MeshStandardMaterial({ color: 0xf3efff, roughness: 0.9 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
    var rug = new THREE.Mesh(new THREE.CircleGeometry(4.3, 36), new THREE.MeshStandardMaterial({ color: 0xede9fe }));
    rug.rotation.x = -Math.PI / 2; rug.position.y = 0.02; rug.receiveShadow = true; scene.add(rug);
    var grid = new THREE.GridHelper(16, 16, 0xc4b5fd, 0xe6e0ff); grid.position.y = 0.013; scene.add(grid);
    // 4 tường
    var wallMat = new THREE.MeshStandardMaterial({ color: 0xb9a7f5, roughness: 0.95 });
    [[0, -8, 16, 0.4], [0, 8, 16, 0.4], [-8, 0, 0.4, 16], [8, 0, 0.4, 16]].forEach(function (p) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(p[2], 2.6, p[3]), wallMat);
      m.position.set(p[0], 1.3, p[1]); m.receiveShadow = true; scene.add(m);
    });
    a3dProps();

    // NPC/vật: bệ + emoji nổi + dấu "!" nhấp nháy (ẩn khi đã điều tra)
    npcMeshes = [];
    NPCS.forEach(function (n) {
      var base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 0.5, 20), new THREE.MeshStandardMaterial({ color: n.color, roughness: 0.6 }));
      base.position.set(n.x, 0.25, n.z); base.castShadow = true; base.receiveShadow = true; scene.add(base);
      var sp = a3dEmoji(n.emo); sp.position.set(n.x, 1.5, n.z); scene.add(sp);
      var mk = a3dEmoji("❗"); mk.scale.set(0.7, 0.7, 1); mk.position.set(n.x, 2.45, n.z); scene.add(mk);
      npcMeshes.push({ data: n, base: base, sp: sp, mk: mk });
    });

    // nhân vật low-poly
    hero = a3dHero();
    hero.position.set(0, 0, 3);
    scene.add(hero);
    var sp = a3dEmoji("🧑‍🎓"); sp.position.set(0, 2.1, 0); sp.scale.set(1, 1, 1); hero.add(sp);

    a3dBindInput();
    window.addEventListener("resize", a3dResize);
    a3dSay("🔔", AC.hook.who, AC.hook.text, a3dCloseDialog); // hook
    raf = requestAnimationFrame(a3dTick);
  }

  function a3dHero() {
    var g = new THREE.Group();
    var skin = 0xffe0bd, cloth = 0x6366f1;
    var body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.9, 0.5), new THREE.MeshStandardMaterial({ color: cloth }));
    body.position.y = 0.95; g.add(body);
    var head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), new THREE.MeshStandardMaterial({ color: skin }));
    head.position.y = 1.7; g.add(head);
    var armMat = new THREE.MeshStandardMaterial({ color: cloth });
    [-0.6, 0.6].forEach(function (x) { var a = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), armMat); a.position.set(x, 0.95, 0); g.add(a); });
    var legMat = new THREE.MeshStandardMaterial({ color: 0x4338ca });
    [-0.22, 0.22].forEach(function (x) { var l = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.6, 0.28), legMat); l.position.set(x, 0.3, 0); g.add(l); });
    g.traverse(function (o) { if (o.isMesh) o.castShadow = true; });
    return g;
  }
  function a3dProps() {
    function box(w, h, d, color, x, y, z) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: color, roughness: 0.85 }));
      m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; scene.add(m); return m;
    }
    // cửa sổ sáng (tường sau) + khung
    var win = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.9), new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xffe6a8, emissiveIntensity: 0.85 }));
    win.position.set(-5, 1.7, -7.78); scene.add(win);
    box(3.8, 0.18, 0.18, 0xffffff, -5, 2.7, -7.74); box(3.8, 0.18, 0.18, 0xffffff, -5, 0.75, -7.74);
    box(0.18, 1.95, 0.18, 0xffffff, -6.8, 1.7, -7.74); box(0.18, 1.95, 0.18, 0xffffff, -3.2, 1.7, -7.74);
    // kệ sách (tường phải) + sách màu
    box(0.5, 2.4, 3.2, 0xcd9b6a, 7.55, 1.2, 3);
    [0, 1, 2].forEach(function (i) { box(0.55, 0.7, 0.55, [0xf87171, 0xfbbf24, 0x60a5fa][i], 7.35, 0.75 + i * 0.75, 2 + i * 0.6); });
    // 2 chậu cây ở góc
    [[7, -7], [-7, 7]].forEach(function (p) {
      box(0.6, 0.55, 0.6, 0xef9a6a, p[0], 0.27, p[1]);
      var f = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), new THREE.MeshStandardMaterial({ color: 0x4ade80, roughness: 0.8 }));
      f.position.set(p[0], 1.05, p[1]); f.castShadow = true; scene.add(f);
    });
    // poster tường trái
    [[0xf472b6, -2], [0x60a5fa, 2.5]].forEach(function (p) {
      var m = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 2.1), new THREE.MeshStandardMaterial({ color: p[0] }));
      m.position.set(-7.77, 2, p[1]); m.rotation.y = Math.PI / 2; scene.add(m);
    });
  }
  function a3dEmoji(emoji) {
    var cv = document.createElement("canvas"); cv.width = cv.height = 128;
    var ctx = cv.getContext("2d"); ctx.font = "96px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(emoji, 64, 74);
    var tex = new THREE.CanvasTexture(cv); tex.anisotropy = 2;
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sp.scale.set(1.3, 1.3, 1); return sp;
  }

  var moveT = 0;
  function a3dTick() {
    if (!renderer || !renderer.domElement.isConnected) { a3dCleanup(); return; }
    raf = requestAnimationFrame(a3dTick);
    if (!dialogOpen) a3dUpdateMove();
    // camera theo sau nhân vật
    var cx = hero.position.x, cz = hero.position.z;
    camera.position.x += (cx - camera.position.x) * 0.1;
    camera.position.z += (cz + 9 - camera.position.z) * 0.1;
    camera.position.y += (9 - camera.position.y) * 0.1;
    camera.lookAt(cx, 1, cz);
    moveT += 0.05;
    for (var i = 0; i < npcMeshes.length; i++) { var mk = npcMeshes[i].mk; if (mk && mk.visible) mk.position.y = 2.45 + Math.sin(moveT * 2 + i) * 0.14; }
    renderer.render(scene, camera);
  }
  function a3dUpdateMove() {
    var dx = 0, dz = 0;
    if (keys.U || pad.U) dz -= 1; if (keys.D || pad.D) dz += 1;
    if (keys.L || pad.L) dx -= 1; if (keys.R || pad.R) dx += 1;
    if (dx || dz) {
      var len = Math.hypot(dx, dz); dx /= len; dz /= len;
      var sp = 0.12;
      hero.position.x = Math.max(-7, Math.min(7, hero.position.x + dx * sp));
      hero.position.z = Math.max(-7, Math.min(7, hero.position.z + dz * sp));
      hero.rotation.y = Math.atan2(dx, dz);
      moveT += 0.3; hero.position.y = Math.abs(Math.sin(moveT)) * 0.12; // nhún khi đi
    } else { hero.position.y = 0; }
    // kiểm tra gần NPC
    var found = null;
    for (var i = 0; i < NPCS.length; i++) {
      var n = NPCS[i];
      if (Math.hypot(hero.position.x - n.x, hero.position.z - n.z) < 2.1) { found = n; break; }
    }
    if (found !== nearNpc) {
      nearNpc = found;
      var btn = $("a3dInteract");
      if (btn) { if (found) { btn.textContent = "💬 Nói chuyện với " + found.name; btn.classList.remove("hidden"); } else btn.classList.add("hidden"); }
    }
  }

  function a3dBindInput() {
    document.addEventListener("keydown", a3dKey);
    document.addEventListener("keyup", a3dKeyUp);
    document.querySelectorAll(".a3dPad .rpgKey").forEach(function (b) {
      var d = b.getAttribute("data-d");
      var on = function (e) { e.preventDefault(); pad[d] = true; };
      var off = function () { pad[d] = false; };
      b.addEventListener("pointerdown", on); b.addEventListener("pointerup", off);
      b.addEventListener("pointerleave", off); b.addEventListener("pointercancel", off);
    });
  }
  function a3dKey(e) {
    if (!renderer || !renderer.domElement.isConnected) { document.removeEventListener("keydown", a3dKey); return; }
    if (dialogOpen) { if (e.key === "Enter" || e.key === " ") { var b = document.querySelector("#rpgDialog .rpgDlgNext"); if (b) { e.preventDefault(); b.click(); } } return; }
    var k = e.key.toLowerCase();
    if (k === "arrowup" || k === "w") { keys.U = 1; e.preventDefault(); }
    else if (k === "arrowdown" || k === "s") { keys.D = 1; e.preventDefault(); }
    else if (k === "arrowleft" || k === "a") { keys.L = 1; e.preventDefault(); }
    else if (k === "arrowright" || k === "d") { keys.R = 1; e.preventDefault(); }
    else if (k === "enter" || k === " ") { if (nearNpc) { e.preventDefault(); a3dDoInteract(); } }
  }
  function a3dKeyUp(e) {
    var k = e.key.toLowerCase();
    if (k === "arrowup" || k === "w") keys.U = 0; else if (k === "arrowdown" || k === "s") keys.D = 0;
    else if (k === "arrowleft" || k === "a") keys.L = 0; else if (k === "arrowright" || k === "d") keys.R = 0;
  }
  function a3dResize() {
    var stage = $("a3dStage"); if (!stage || !renderer) return;
    var w = stage.clientWidth || 400, h = Math.round(w * 0.66);
    renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
  }

  /* ---- Hộp thoại (dùng lại CSS rpgDialog) ---- */
  function a3dDlg(html) { dialogOpen = true; var d = $("rpgDialog"); if (!d) return; d.innerHTML = html; d.classList.remove("hidden"); d.classList.add("show"); }
  window.a3dCloseDialog = function () { dialogOpen = false; var d = $("rpgDialog"); if (d) { d.classList.add("hidden"); d.innerHTML = ""; } };
  function a3dSay(av, who, text, onNext) {
    window._a3dNext = onNext || window.a3dCloseDialog;
    a3dDlg('<div class="rpgRow"><div class="rpgAva">' + av + "</div><div class=\"rpgSpeech\">" +
      (who ? '<div class="rpgWho">' + esc(who) + "</div>" : "") + '<div class="rpgText">' + text + "</div>" +
      '<div class="center"><button class="btn rpgDlgNext" onclick="_a3dNext()">Tiếp ➜</button></div></div></div>');
  }
  window.a3dDoInteract = function () {
    if (!nearNpc || dialogOpen) return;
    var n = nearNpc;
    function hideMk(id) { for (var i = 0; i < npcMeshes.length; i++) if (npcMeshes[i].data.id === id && npcMeshes[i].mk) npcMeshes[i].mk.visible = false; }
    if (n.id === "lan") { hideMk("lan"); a3dSay("👩‍🏫", "Cô Lan", AC.lan, window.a3dCloseDialog); }
    else if (n.id === "c0" || n.id === "c1" || n.id === "c2") {
      var idx = +n.id.slice(1), cl = AC.clues[idx];
      seen[n.id] = true; var cEl = $("a3dClue"); if (cEl) cEl.textContent = a3dSeen();
      hideMk(n.id); sfxSafe("correct"); burstSafe(3);
      a3dSay(cl.ic, cl.label, esc(cl.info), window.a3dCloseDialog);
    } else if (n.id === "ai") {
      if (a3dSeen() < 3) { a3dSay("🤖", "Máy AI", "Hãy xem đủ <b>3 manh mối</b> (🖥️ 📄 📊) rồi hãy quyết định nhé!", window.a3dCloseDialog); return; }
      if (solved) { a3dSay("🤖", "Máy AI", "Vụ án đã khép lại — làm tốt lắm, Thám tử! 🎉", window.a3dCloseDialog); return; }
      a3dDecision();
    }
  };
  function a3dSeen() { return Object.keys(seen).length; }
  function a3dDecision() {
    var opts = AC.options.map(function (o, i) { return '<button class="rpgOpt" onclick="a3dPick(' + i + ')">' + esc(o.t) + "</button>"; }).join("");
    a3dDlg('<div class="rpgRow"><div class="rpgAva">🤖</div><div class="rpgSpeech"><div class="rpgWho">Máy AI</div>' +
      '<div class="rpgText">' + esc(AC.q) + '</div><div class="rpgOpts" id="rpgOpts">' + opts + "</div>" +
      '<div class="rpgReply hidden" id="rpgReply"></div></div></div>');
  }
  window.a3dPick = function (i) {
    var o = AC.options[i], box = $("rpgReply"), ok = !!o.good;
    if (ok) sfxSafe("correct"); else { sfxSafe("wrong"); wrong++; }
    if (box) { box.className = "rpgReply " + (ok ? "good" : "bad"); box.innerHTML = (ok ? "👍 " : "🤔 ") + esc(o.reply); box.classList.remove("hidden"); }
    if (ok) {
      document.querySelectorAll("#rpgOpts .rpgOpt").forEach(function (b) { b.disabled = true; }); burstSafe(6);
      window._a3dNext = function () { a3dSay("🎉", "Kết quả", AC.result, function () { solved = true; a3dEnd(); }); };
      box.innerHTML += '<div class="center" style="margin-top:8px"><button class="btn rpgDlgNext" onclick="_a3dNext()">Tiếp ➜</button></div>';
    }
  };
  function a3dEnd() {
    a3dCleanup();
    var stars = wrong === 0 ? 3 : wrong <= 2 ? 2 : 1;
    var starRow = '<div class="mzStarRow">' + [1, 2, 3].map(function (n) { return '<span class="mzStar' + (n <= stars ? " on" : "") + '" style="animation-delay:' + (n * 0.12) + 's">★</span>'; }).join("") + "</div>";
    $("runnerTop").classList.add("hidden"); $("qCard").classList.add("hidden");
    $("resultCard").innerHTML =
      '<div class="mgResultIco">🎓</div><h2 style="margin-top:6px">' + esc(AC.endTitle) + "</h2>" +
      starRow + '<div class="plTier">Bạn là một Thám tử AI tài ba!</div>' +
      '<div class="plRec"><div class="plRecHead">💡 Em vừa học</div><p>' + AC.lesson + "</p></div>" +
      '<div class="center"><button class="btn" onclick="startAcademy()">Chơi lại 🔄</button>' +
        '<button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về Bài tập ✏️</button></div>';
    $("resultCard").classList.remove("hidden"); $("runner").scrollTo({ top: 0 });
    burstSafe(20); sfxSafe("win");
    if (window.Cloud) {
      var pct = stars >= 3 ? 100 : stars >= 2 ? 75 : 50;
      Cloud.saveQuizResult({ mode: "practice", score: stars, total: 3, percent: pct, stars: stars });
      Cloud.aiRecord({ xp: 15, lesson: "ai:game:academy1", quiz: true, percent: pct, stars: stars });
    }
  }
  function a3dCleanup() {
    if (raf) cancelAnimationFrame(raf); raf = 0;
    document.removeEventListener("keydown", a3dKey); document.removeEventListener("keyup", a3dKeyUp);
    window.removeEventListener("resize", a3dResize);
    try { if (renderer) { renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); } } catch (e) {}
    renderer = null; scene = null; camera = null; hero = null;
  }
})();
