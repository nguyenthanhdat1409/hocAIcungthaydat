/* =========================================================
   academy3d.js — AI Academy 3D (Three.js, nạp lazy)
   Game giáo dục: vào vai "Thám tử AI" điều tra vụ AI khóa nhầm tài khoản bạn Minh.
   - Thế giới low-poly ấm cúng, viewport toàn màn hình (immersive).
   - Nhân vật có tay/chân + hoạt hình đi/đứng, camera 3/4 theo sau, va chạm thật.
   - Vòng chơi: giao nhiệm vụ → khám phá → gặp 3 NPC → thu 3 manh mối →
     mở Bảng điều tra → đối chiếu bằng chứng với kết luận của AI → quyết định →
     nghe giải thích về suy luận & giới hạn của AI → hoàn thành + nhận thưởng.
   Ghi đè window.startAcademy (bản 2D ở minigames.js). Dùng chung #runner + Cloud + sfx/burst.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Tiện ích ---------- */
  var $ = function (id) { return document.getElementById(id); };
  function sfxSafe(n) { try { if (!muted && window.sfx && sfx[n]) sfx[n](); } catch (e) {} }
  function burstSafe(n) { try { if (window.burst) burst(n); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  var REDUCED = false;
  try { REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var muted = false;
  try { muted = localStorage.getItem("a3dMuted") === "1"; } catch (e) {}

  /* ---------- Nội dung giáo dục (giữ nguyên cốt truyện bản cũ, mở rộng cho gameplay) ---------- */
  /* ---------- Dữ liệu màn chơi: nạp từ academy3d.data.js (TÁCH data khỏi logic) ---------- */
  var LEVEL = null, AC = null, ENT = null;

  // Adapter: dựng object AC (tương thích code UI cũ) từ dữ liệu quest của màn
  function buildAC(level) {
    var q = {}; (level.quests || []).forEach(function (x) { q[x.id] = x; });
    var brief = q.brief || {}, collect = q.collect || {}, inv = q.investigate || {}, dec = q.decision || {};
    return {
      brief: { who: brief.who || "", lines: brief.lines || [], avatar: brief.avatar || "👩‍🏫" },
      clues: collect.items || [],
      need: (collect.need != null ? collect.need : (collect.items ? collect.items.length : 0)),
      boardOpts: inv.opts || [], boardLead: inv.lead || "", boardSummary: inv.summary || "",
      q: dec.question || "", options: dec.options || [], result: dec.result || "",
      explainTitle: dec.explainTitle || "Giải thích", avatarAI: dec.avatar || "🤖", whoAI: dec.who || "Máy AI",
      endTitle: level.endTitle || "Hoàn thành!", endTier: level.endTier || "", lesson: level.lesson || "",
      reward: level.reward || {}
    };
  }

  /* ---------- QuestEngine: độc lập scene, chạy theo dữ liệu, CHẶN sai điều kiện ---------- */
  var Engine = {
    level: null, quests: [], byId: {}, done: {}, inv: {}, cbs: {},
    load: function (level) { this.level = level; this.quests = level.quests || []; this.byId = {}; var s = this; this.quests.forEach(function (q) { s.byId[q.id] = q; }); this.reset(); },
    reset: function () { this.done = {}; this.inv = {}; },
    on: function (ev, cb) { (this.cbs[ev] = this.cbs[ev] || []).push(cb); },
    emit: function (ev, d) { (this.cbs[ev] || []).forEach(function (c) { try { c(d); } catch (e) {} }); },
    invCount: function () { return Object.keys(this.inv).length; },
    reqMet: function (q) {
      var r = (q && q.requires) || {};
      if (r.quest && !this.done[r.quest]) return false;
      if (r.quests) for (var i = 0; i < r.quests.length; i++) if (!this.done[r.quests[i]]) return false;
      if (r.items != null && this.invCount() < r.items) return false;
      return true;
    },
    status: function (id) { if (this.done[id]) return "done"; var q = this.byId[id]; if (!q) return "none"; return this.reqMet(q) ? "active" : "locked"; },
    active: function () { for (var i = 0; i < this.quests.length; i++) { var q = this.quests[i]; if (!this.done[q.id] && this.reqMet(q)) return q; } return null; },
    collect: function (id) { if (!this.inv[id]) { this.inv[id] = true; this.emit("collect", id); } },
    complete: function (id) { if (this.byId[id] && !this.done[id]) { this.done[id] = true; this.emit("quest:complete", this.byId[id]); } this.emit("advance", this.active()); },
    allDone: function () { for (var i = 0; i < this.quests.length; i++) if (!this.done[this.quests[i].id]) return false; return true; }
  };

  /* ---------- QuestionBank: BỌC ngân hàng câu hỏi có sẵn của web (window.BANK) ---------- */
  var QBank = {
    used: {},
    init: function () { try { this.used = JSON.parse(localStorage.getItem("a3dQused") || "{}") || {}; } catch (e) { this.used = {}; } },
    save: function () { try { localStorage.setItem("a3dQused", JSON.stringify(this.used)); } catch (e) {} },
    resetUsed: function () { this.used = {}; this.save(); },
    _rnd: function () { try { return Math.random(); } catch (e) { return 0.5; } },
    _shuffle: function (a) { for (var i = a.length - 1; i > 0; i--) { var j = (this._rnd() * (i + 1)) | 0; var t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
    _key: function (d, i) { return d + ":" + i; },
    pick: function (cfg) {
      cfg = cfg || {}; var src = getBank(); if (!src) return [];
      var count = cfg.count || 1, topics = cfg.topics, diff = cfg.difficulty || 1, self = this, pool = [];
      function gather(d) { (src[d] || []).forEach(function (q, i) { if (!topics || topics.indexOf(q.topic) >= 0) pool.push({ d: d, i: i, q: q }); }); }
      gather(diff);
      var fresh = pool.filter(function (p) { return !self.used[self._key(p.d, p.i)]; });
      if (fresh.length < count) { [1, 2, 3].forEach(function (d) { if (d !== diff) gather(d); }); fresh = pool.filter(function (p) { return !self.used[self._key(p.d, p.i)]; }); }
      var use = fresh.length >= count ? fresh : pool;             // ngân hàng cạn → cho dùng lại (không kẹt)
      this._shuffle(use);
      var picked = use.slice(0, Math.min(count, use.length));
      return picked.map(function (p) { self.used[self._key(p.d, p.i)] = true; return self._norm(p.q); });
    },
    _norm: function (q) {
      var pairs = q.opts.map(function (o, i) { return [o, i === q.a]; });
      this._shuffle(pairs);                                       // xáo đáp án, vẫn giữ đúng khóa
      return { q: q.q, opts: pairs.map(function (p) { return p[0]; }), correct: pairs.map(function (p) { return p[1]; }).indexOf(true), topic: q.topic };
    }
  };

  // Ngân hàng câu hỏi của web: app.js khai báo `const BANK` (biến này KHÔNG nằm trên window,
  // nhưng dùng chung global-lexical-environment giữa các script thường) → tham chiếu trực tiếp.
  function getBank() { try { if (typeof BANK !== "undefined" && BANK) return BANK; } catch (e) {} return (window.BANK || null); }

  /* ---------- Kiểm tra schema dữ liệu màn (chống dữ liệu hỏng) ---------- */
  function hasQuest(level, id) { return (level.quests || []).some(function (q) { return q.id === id; }); }
  function validateLevel(level) {
    var errs = [];
    if (!level) return { ok: false, errors: ["level null"] };
    if (!level.id) errs.push("level thiếu id");
    var npc = {}; (level.npcs || []).forEach(function (n) { if (npc[n.id]) errs.push("NPC trùng id: " + n.id); npc[n.id] = true; });
    var qid = {};
    (level.quests || []).forEach(function (q) {
      if (!q.id) errs.push("quest thiếu id");
      if (qid[q.id]) errs.push("quest trùng id: " + q.id); qid[q.id] = true;
      if (!q.type) errs.push("quest " + q.id + " thiếu type");
      if ((q.type === "talk" || q.type === "decision") && q.npc && !npc[q.npc]) errs.push("quest " + q.id + " trỏ NPC không tồn tại: " + q.npc);
      if (q.type === "collect") { if (!(q.items || []).length) errs.push("collect " + q.id + " không có item"); (q.items || []).forEach(function (it) { if (it.npc && !npc[it.npc]) errs.push("manh mối " + it.id + " trỏ NPC không tồn tại: " + it.npc); }); }
      if (q.type === "decision") { if (!q.question) errs.push("decision " + q.id + " thiếu câu hỏi"); if (!(q.options || []).some(function (o) { return o.good; })) errs.push("decision " + q.id + " không có đáp án đúng"); }
      if (q.type === "quiz" && (!q.pool || !(q.pool.count > 0))) errs.push("quiz " + q.id + " thiếu pool/count");
      if (q.requires && q.requires.quest && !hasQuest(level, q.requires.quest)) errs.push("quest " + q.id + " requires quest không tồn tại: " + q.requires.quest);
    });
    if (!(level.quests || []).length) errs.push("level không có nhiệm vụ nào");
    return { ok: errs.length === 0, errors: errs };
  }

  /* ---------- Trạng thái module ---------- */
  var THREE = null;
  var renderer, scene, camera, clock, hero, raf = 0, lastT = 0;
  var npcs = [], colliders = [], interactables = [], markers = [];
  var robotGLB = null, aiMixer = null, aiActions = null, aiCurrent = null; // Máy AI dạng GLB (CC0 RobotExpressive)
  var keys = {}, joy = { x: 0, z: 0, active: false }, nearest = null;
  var state = "", cluesGot = {}, boardDone = {}, wrong = 0, solved = false;
  var dialogOpen = false, overlayOpen = false;
  var listeners = [], visHandler = null, ro = null;
  var vel = { x: 0, z: 0 }, walkPhase = 0, idleT = 0, facing = 0, camPos = null;
  // ---- Camera System V2 ----
  var camMode = "third", yaw = Math.PI, pitch = 0.0, thirdDist = 7.2, isoZoom = 1, heroHidden = false;
  var dragging = false, dragPId = null, dragLX = 0, dragLY = 0, pointerLocked = false, camMenuOpen = false;
  try { var _cm = localStorage.getItem("a3dCam"); if (_cm === "first" || _cm === "third" || _cm === "iso") camMode = _cm; } catch (e) {}

  /* ========================================================================
     KHỞI ĐỘNG
     ======================================================================== */
  window.startAcademy = function () {
    if (typeof runnerReturn !== "undefined") runnerReturn = "baitap";
    enterRunner(false);
    try { localStorage.getItem; } catch (e) {}
    // reset
    npcs = []; colliders = []; interactables = []; markers = [];
    keys = {}; joy = { x: 0, z: 0, active: false }; nearest = null;
    cluesGot = {}; boardDone = {}; wrong = 0; solved = false;
    dialogOpen = false; overlayOpen = false; vel = { x: 0, z: 0 }; walkPhase = 0; idleT = 0; facing = 0;
    robotGLB = null; aiMixer = null; aiActions = null; aiCurrent = null;
    yaw = Math.PI; pitch = 0; thirdDist = 7.2; isoZoom = 1; heroHidden = false;
    dragging = false; dragPId = null; pointerLocked = false; camMenuOpen = false;
    listeners = [];

    // Nạp dữ liệu màn (tách khỏi logic). Kiểm tra schema trước khi chơi.
    LEVEL = (window.A3D_DATA && A3D_DATA.levels && A3D_DATA.levels.academy1) || null;
    if (LEVEL) {
      var vr = validateLevel(LEVEL);
      if (!vr.ok) { try { console.warn("[A3D] Dữ liệu màn có vấn đề:", vr.errors); } catch (e) {} }
      AC = buildAC(LEVEL); ENT = LEVEL.npcs; Engine.load(LEVEL); QBank.init();
      if (LEVEL.spawn && LEVEL.spawn.yaw != null) yaw = LEVEL.spawn.yaw;
    }

    var runner = $("runner"); if (runner) runner.classList.add("a3dMode");
    buildShell();

    if (!LEVEL) { var st0 = $("a3dStage"); if (st0) st0.innerHTML = '<div class="a3dLoading">😕 Thiếu dữ liệu màn chơi (academy3d.data.js).</div>'; return; }

    // Ưu tiên bản three.js lưu cục bộ (chạy offline, không phụ thuộc CDN).
    // Nếu thiếu file vì lý do nào đó → mới quay sang esm.sh.
    import("./three.module.js")
      .catch(function () { return import("https://esm.sh/three@0.160.0"); })
      .then(function (mod) { THREE = mod; return loadRobotGLB(); })  // nạp mô hình Máy AI (không chặn nếu lỗi)
      .then(function () { buildWorld(); })
      .catch(function () {
        var st = $("a3dStage");
        if (st) st.innerHTML = '<div class="a3dLoading">😕 Không tải được thế giới 3D. <button class="a3dBtn" onclick="startAcademy()">Thử lại</button></div>';
      });
  };

  /* Khung HUD (DOM) phủ toàn màn hình bên trong #runner */
  function buildShell() {
    var host = $("qCard");
    if (!host) return;
    host.classList.remove("hidden");
    host.innerHTML =
      '<div class="a3dRoot" id="a3dRoot">' +
        '<div class="a3dStage" id="a3dStage"><div class="a3dLoading">⏳ Đang dựng thế giới 3D…</div></div>' +
        /* HUD trên cùng */
        '<div class="a3dHud a3dHudTop">' +
          '<div class="a3dQuest">' +
            '<div class="a3dQuestTitle">' + ((LEVEL && LEVEL.questTitle) ? LEVEL.questTitle : "🔍 AI Academy") + '</div>' +
            '<div class="a3dObjective" id="a3dObjective">Đang tải…</div>' +
          '</div>' +
          '<div class="a3dTopRight">' +
            '<div class="a3dClueChip" id="a3dClueChip"><span class="a3dClueIc">🧩</span> <b id="a3dClueN">0</b>/<b id="a3dClueTot">' + (AC ? AC.need : 3) + '</b></div>' +
            '<button class="a3dRound" id="a3dCamBtn" title="Góc nhìn (V)" aria-label="Góc nhìn">🎬</button>' +
            '<button class="a3dRound" id="a3dHelp" title="Trợ giúp" aria-label="Trợ giúp">?</button>' +
            '<button class="a3dRound" id="a3dMute" title="Bật/tắt âm" aria-label="Bật/tắt âm">' + (muted ? "🔇" : "🔊") + '</button>' +
            '<button class="a3dRound a3dExit" id="a3dExit" title="Thoát" aria-label="Thoát">✕</button>' +
          '</div>' +
        '</div>' +
        /* Menu chọn góc nhìn */
        '<div class="a3dCamMenu hidden" id="a3dCamMenu">' +
          '<button data-cam="third">🎬 Góc nhìn thứ 3 <span>V</span></button>' +
          '<button data-cam="first">👁️ Góc nhìn thứ 1 <span>V</span></button>' +
          '<button data-cam="iso">🗺️ Toàn cảnh</button>' +
        '</div>' +
        /* Nút Bảng điều tra (ẩn tới khi đủ manh mối) */
        '<button class="a3dBoardBtn hidden" id="a3dBoardBtn">📋 Mở Bảng điều tra</button>' +
        /* Khung tương tác ngữ cảnh */
        '<div class="a3dPrompt hidden" id="a3dPrompt"></div>' +
        /* Cần gạt + nút hành động (cảm ứng) */
        '<div class="a3dJoyZone" id="a3dJoyZone"><div class="a3dJoyBase" id="a3dJoyBase"><div class="a3dJoyStick" id="a3dJoyStick"></div></div></div>' +
        '<button class="a3dAction hidden" id="a3dAction" aria-label="Tương tác">💬</button>' +
        /* Toast mục tiêu */
        '<div class="a3dToast" id="a3dToast"></div>' +
        /* Lớp hội thoại / bảng / kết thúc */
        '<div class="a3dLayer hidden" id="a3dLayer"></div>' +
      '</div>';

    on($("a3dHelp"), "click", showHelp);
    on($("a3dMute"), "click", toggleMute);
    on($("a3dExit"), "click", quit);
    on($("a3dBoardBtn"), "click", openBoard);
    on($("a3dAction"), "click", doInteract);
  }

  /* ========================================================================
     DỰNG THẾ GIỚI 3D
     ======================================================================== */
  function buildWorld() {
    var stage = $("a3dStage");
    if (!stage) return;
    stage.innerHTML = "";
    var w = stage.clientWidth || 800, h = stage.clientHeight || 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe7e3ff);
    scene.fog = new THREE.Fog(0xe7e3ff, 20, 46);

    camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 120);
    camPos = new THREE.Vector3(0, 11, 13);
    camera.position.copy(camPos);

    var lowEnd = (navigator.hardwareConcurrency || 4) <= 4 || Math.min(screen.width, screen.height) <= 500;
    renderer = new THREE.WebGLRenderer({ antialias: !lowEnd, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowEnd ? 1.5 : 2));
    renderer.setSize(w, h, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    stage.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    buildLights();
    buildRoom();
    buildFurniture();
    buildEntities();
    buildHero();

    bindInput();
    on(window, "resize", resize);
    // ResizeObserver: canvas luôn khớp khung (sau khi layout ổn định / xoay máy)
    try {
      if (window.ResizeObserver) { ro = new ResizeObserver(function () { resize(); }); ro.observe(stage); }
    } catch (e) {}
    visHandler = function () { if (!document.hidden && !raf) { lastT = 0; raf = requestAnimationFrame(tick); } };
    document.addEventListener("visibilitychange", visHandler);

    // Bắt đầu: giao nhiệm vụ (tự mở lời thoại của cô Lan)
    syncQuestUI();
    raf = requestAnimationFrame(tick);
    runBrief(0);
  }

  function buildLights() {
    var hemi = new THREE.HemisphereLight(0xfff3ff, 0xccbfff, 0.85);
    scene.add(hemi);
    var sun = new THREE.DirectionalLight(0xfff0d6, 1.15);
    sun.position.set(-7, 13, -4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    var c = sun.shadow.camera;
    c.left = -11; c.right = 11; c.top = 11; c.bottom = -11; c.near = 1; c.far = 40;
    sun.shadow.bias = -0.0004;
    scene.add(sun);
    var warm = new THREE.PointLight(0xffd9a0, 0.55, 26, 1.4);
    warm.position.set(-4.8, 4.2, -6);
    scene.add(warm);
    var fill = new THREE.DirectionalLight(0xbcd2ff, 0.28);
    fill.position.set(6, 6, 8);
    scene.add(fill);
  }

  /* mặt phẳng vân gỗ / vải bằng canvas (nhẹ, không cần tải ảnh) */
  function makeTex(draw, px) {
    px = px || 128;
    var cv = document.createElement("canvas"); cv.width = cv.height = px;
    draw(cv.getContext("2d"), px);
    var t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }

  function buildRoom() {
    // sàn gỗ (ván dọc)
    var floorTex = makeTex(function (x, p) {
      x.fillStyle = "#e9dcc6"; x.fillRect(0, 0, p, p);
      for (var i = 0; i < 6; i++) {
        x.fillStyle = i % 2 ? "#e3d2b6" : "#ede0cc";
        x.fillRect(i * (p / 6), 0, p / 6 - 1, p);
      }
      x.strokeStyle = "rgba(120,90,50,.18)"; x.lineWidth = 2;
      for (var j = 0; j <= 6; j++) { x.beginPath(); x.moveTo(j * (p / 6), 0); x.lineTo(j * (p / 6), p); x.stroke(); }
    }, 256);
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(4, 4);
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 16),
      new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.92 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);

    // thảm tròn mềm
    var rug = new THREE.Mesh(new THREE.CircleGeometry(4.6, 48),
      new THREE.MeshStandardMaterial({ color: 0xd9ccff, roughness: 1 }));
    rug.rotation.x = -Math.PI / 2; rug.position.y = 0.02; rug.receiveShadow = true; scene.add(rug);
    var rug2 = new THREE.Mesh(new THREE.RingGeometry(3.7, 4.2, 48),
      new THREE.MeshStandardMaterial({ color: 0xc3b1f7, roughness: 1 }));
    rug2.rotation.x = -Math.PI / 2; rug2.position.y = 0.025; scene.add(rug2);

    // tường + chân tường (wainscot)
    var wallMat = new THREE.MeshStandardMaterial({ color: 0xcdbdf6, roughness: 0.96 });
    var wainMat = new THREE.MeshStandardMaterial({ color: 0xa88fe8, roughness: 0.9 });
    var defs = [[0, -8, 16, 0.4], [0, 8, 16, 0.4], [-8, 0, 0.4, 16], [8, 0, 0.4, 16]];
    defs.forEach(function (p) {
      var wall = new THREE.Mesh(new THREE.BoxGeometry(p[2], 3.2, p[3]), wallMat);
      wall.position.set(p[0], 1.6, p[1]); wall.receiveShadow = true; scene.add(wall);
      var wain = new THREE.Mesh(new THREE.BoxGeometry(p[2] === 0.4 ? 0.5 : p[2], 0.9, p[3] === 0.4 ? 0.5 : p[3]), wainMat);
      wain.position.set(p[0], 0.45, p[1]); wain.receiveShadow = true; scene.add(wain);
    });

    // cửa sổ lớn (tường sau) + bầu trời + nắng
    var skyTex = makeTex(function (x, p) {
      var g = x.createLinearGradient(0, 0, 0, p);
      g.addColorStop(0, "#bfe3ff"); g.addColorStop(0.6, "#e7f5ff"); g.addColorStop(1, "#fff6e6");
      x.fillStyle = g; x.fillRect(0, 0, p, p);
      x.fillStyle = "rgba(255,255,255,.9)";
      [[40, 42, 22], [78, 60, 16], [95, 34, 13]].forEach(function (c) {
        x.beginPath(); x.arc(c[0], c[1], c[2], 0, 7); x.arc(c[0] + c[2], c[1] + 3, c[2] * 0.8, 0, 7); x.fill();
      });
    }, 128);
    var sky = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.0),
      new THREE.MeshStandardMaterial({ map: skyTex, emissive: 0xffffff, emissiveMap: skyTex, emissiveIntensity: 0.9 }));
    sky.position.set(-4.8, 1.9, -7.78); scene.add(sky);
    // khung cửa sổ
    var frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 });
    [[3.9, 0.16, 0, 3.0], [3.9, 0.16, 0, 0.78], [0.16, 2.1, -1.85, 1.9], [0.16, 2.1, 0, 1.9], [0.16, 2.1, 1.85, 1.9]].forEach(function (f) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(f[0], f[1], 0.16), frameMat);
      m.position.set(-4.8 + f[2], f[3], -7.74); scene.add(m);
    });
    // vệt nắng trên sàn
    if (!REDUCED) {
      var beam = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 4.2),
        new THREE.MeshBasicMaterial({ color: 0xfff3cf, transparent: true, opacity: 0.22, depthWrite: false }));
      beam.rotation.x = -Math.PI / 2; beam.position.set(-4.8, 0.04, -4.2); scene.add(beam);
    }

    // trần nhẹ + đèn thả
    var ceil = new THREE.Mesh(new THREE.PlaneGeometry(16, 16),
      new THREE.MeshStandardMaterial({ color: 0xf3eeff, roughness: 1 }));
    ceil.rotation.x = Math.PI / 2; ceil.position.y = 3.2; scene.add(ceil);
    // đèn thả hình chụp (cone) — trông rõ là đèn treo trần, không phải quả cầu lơ lửng
    var lamp = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.42, 18),
      new THREE.MeshStandardMaterial({ color: 0xf4ede0, emissive: 0xffe6a8, emissiveIntensity: 0.5, side: THREE.DoubleSide }));
    lamp.position.set(0, 2.98, 0); scene.add(lamp);
    var bulb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10),
      new THREE.MeshStandardMaterial({ color: 0xfff6df, emissive: 0xffdf8f, emissiveIntensity: 1 }));
    bulb.position.set(0, 2.82, 0); scene.add(bulb);
    var cord = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 8), matSmooth(0xb9abe0, 0.7));
    cord.position.set(0, 3.2, 0); scene.add(cord);
  }

  function matFlat(color, rough) { return new THREE.MeshStandardMaterial({ color: color, roughness: rough == null ? 0.85 : rough, flatShading: true }); }
  function matSmooth(color, rough) { return new THREE.MeshStandardMaterial({ color: color, roughness: rough == null ? 0.7 : rough }); }

  function box(w, h, d, color, x, y, z, rot) {
    var m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), matSmooth(color, 0.85));
    m.position.set(x, y, z); if (rot) m.rotation.y = rot; m.castShadow = true; m.receiveShadow = true; scene.add(m); return m;
  }

  function buildFurniture() {
    // kệ sách (tường phải)
    var shelf = box(0.55, 2.6, 3.4, 0xcf9a63, 7.45, 1.3, 2.4);
    [0, 1, 2].forEach(function (i) {
      [0xf87171, 0xfbbf24, 0x60a5fa, 0x34d399].forEach(function (col, j) {
        var bk = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.16), matSmooth(col, 0.7));
        bk.position.set(7.25, 0.75 + i * 0.78, 1.15 + i * 0.1 + j * 0.2); bk.rotation.z = (j % 2 ? 0.08 : -0.05);
        bk.castShadow = true; scene.add(bk);
      });
    });
    colliders.push({ x: 7.45, z: 2.4, r: 1.6 });

    // bàn giáo viên gần cô Lan (tường trái sau)
    deskAt(-6.3, -6.0, 0, 0x9b6b43);
    colliders.push({ x: -6.3, z: -6.0, r: 1.2 });

    // vài bộ bàn học sinh gọn 2 bên
    [[-2.2, 6.4, 0], [2.2, 6.4, 0]].forEach(function (p) {
      deskAt(p[0], p[1], p[2], 0xb98a5a);
      colliders.push({ x: p[0], z: p[1], r: 1.0 });
    });

    // 2 chậu cây ở góc
    [[6.7, -6.7], [-6.7, 6.7]].forEach(function (p) {
      var pot = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.34, 0.6, 16), matSmooth(0xe08a5a, 0.8));
      pot.position.set(p[0], 0.3, p[1]); pot.castShadow = true; scene.add(pot);
      var leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.72, 1), matFlat(0x5bd37a, 0.85));
      leaf.position.set(p[0], 1.15, p[1]); leaf.castShadow = true; scene.add(leaf);
      var leaf2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), matFlat(0x7ee29a, 0.85));
      leaf2.position.set(p[0] + 0.25, 1.5, p[1] - 0.1); scene.add(leaf2);
      colliders.push({ x: p[0], z: p[1], r: 0.7 });
    });

    // poster màu trên tường trái
    [[0xf472b6, -2.5, "AI"], [0x60a5fa, 1.5, "?"]].forEach(function (p) {
      var pst = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.0), matSmooth(p[0], 0.9));
      pst.position.set(-7.77, 2.0, p[1]); pst.rotation.y = Math.PI / 2; scene.add(pst);
      var sp = makeEmoji(p[2] === "AI" ? "🧠" : "💡", 110);
      sp.position.set(-7.7, 2.1, p[1]); sp.scale.set(1.1, 1.1, 1); scene.add(sp);
    });

    // bảng xanh (tường sau, phải cửa sổ)
    var board = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.9, 0.1), matSmooth(0x2f6f57, 0.8));
    board.position.set(3.4, 1.9, -7.7); board.receiveShadow = true; scene.add(board);
    var bframe = new THREE.Mesh(new THREE.BoxGeometry(3.7, 2.2, 0.08), matSmooth(0xcaa06a, 0.6));
    bframe.position.set(3.4, 1.9, -7.73); scene.add(bframe);
    var sp2 = makeEmoji("✏️", 110); sp2.position.set(3.4, 1.9, -7.6); sp2.scale.set(1.4, 1.4, 1); scene.add(sp2);
  }

  function deskAt(x, z, rot, color) {
    var top = box(1.6, 0.14, 0.8, color, x, 0.78, z, rot);
    [[-0.65, -0.3], [0.65, -0.3], [-0.65, 0.3], [0.65, 0.3]].forEach(function (l) {
      var lx = x + Math.cos(rot) * l[0] - Math.sin(rot) * l[1];
      var lz = z + Math.sin(rot) * l[0] + Math.cos(rot) * l[1];
      box(0.12, 0.74, 0.12, 0x7a5636, lx, 0.37, lz);
    });
    return top;
  }

  /* biểu tượng emoji dạng sprite (dùng cho đạo cụ & dấu ❗) */
  function makeEmoji(emoji, px) {
    px = px || 128;
    var cv = document.createElement("canvas"); cv.width = cv.height = 128;
    var ctx = cv.getContext("2d"); ctx.font = px + "px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(emoji, 64, 72);
    var t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 2;
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false }));
    sp.scale.set(1.3, 1.3, 1); return sp;
  }

  /* ---------- Nhân vật ---------- */
  function makePerson(color, opts) {
    opts = opts || {};
    var hair = opts.hair == null ? 0x3a2a1a : opts.hair;
    var skin = opts.skin == null ? 0xffd9b0 : opts.skin;
    var style = opts.style || "short";
    var g = new THREE.Group();
    var torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.5, 6, 12), matSmooth(color, 0.75));
    torso.position.y = 1.02; g.add(torso);
    var collar = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.27, 0.12, 14), matSmooth(color, 0.7));
    collar.position.y = 1.4; g.add(collar);
    var hipMat = matSmooth(opts.pants == null ? 0x5b5be0 : opts.pants, 0.75);
    var head = new THREE.Mesh(new THREE.SphereGeometry(0.33, 20, 16), matSmooth(skin, 0.6));
    head.position.y = 1.62; g.add(head);
    // tóc theo kiểu (short / bun / long / spiky)
    var hairMat = matSmooth(hair, 0.85);
    var hairM = new THREE.Mesh(new THREE.SphereGeometry(0.355, 20, 16, 0, 6.3, 0, style === "short" ? 1.35 : 1.75), hairMat);
    hairM.position.y = 1.66; g.add(hairM);
    if (style === "bun") { var bun = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), hairMat); bun.position.set(0, 1.93, -0.12); g.add(bun); }
    else if (style === "long") { [-0.3, 0.3].forEach(function (sx) { var s = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.32, 4, 8), hairMat); s.position.set(sx, 1.42, -0.04); g.add(s); }); }
    else if (style === "spiky") { [[-0.13, 0.08], [0.13, 0.08], [0, 0.16]].forEach(function (p) { var sp = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 6), hairMat); sp.position.set(p[0], 1.88, p[1] - 0.1); g.add(sp); }); }
    // mắt + miệng cười
    [-0.12, 0.12].forEach(function (ex) {
      var eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), new THREE.MeshStandardMaterial({ color: 0x2b2b2b }));
      eye.position.set(ex, 1.63, 0.3); g.add(eye);
    });
    var mouth = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.03, 0.02), new THREE.MeshStandardMaterial({ color: 0xb5544e }));
    mouth.position.set(0, 1.52, 0.31); g.add(mouth);
    // kính (ví dụ cô Lan)
    if (opts.glasses) {
      var gm = new THREE.MeshStandardMaterial({ color: 0x33323a, roughness: 0.4 });
      [-0.12, 0.12].forEach(function (ex) { var r = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.016, 8, 16), gm); r.position.set(ex, 1.63, 0.31); g.add(r); });
      var bridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.018, 0.02), gm); bridge.position.set(0, 1.63, 0.32); g.add(bridge);
    }
    // tay
    var arms = [];
    [-0.46, 0.46].forEach(function (ax) {
      var arm = new THREE.Group();
      var mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.48, 4, 8), matSmooth(color, 0.75));
      mesh.position.y = -0.3; arm.add(mesh);
      var hand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10), matSmooth(skin, 0.6));
      hand.position.y = -0.56; arm.add(hand);
      arm.position.set(ax, 1.28, 0); g.add(arm); arms.push(arm);
    });
    // chân + giày
    var legs = [];
    [-0.17, 0.17].forEach(function (lx) {
      var leg = new THREE.Group();
      var mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.5, 4, 8), hipMat);
      mesh.position.y = -0.3; leg.add(mesh);
      var shoe = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.3), matSmooth(0x3b3550, 0.6));
      shoe.position.set(0, -0.56, 0.05); leg.add(shoe);
      leg.position.set(lx, 0.72, 0); g.add(leg); legs.push(leg);
    });
    g.traverse(function (o) { if (o.isMesh) { o.castShadow = true; } });
    g.userData.rig = { arms: arms, legs: legs, head: head, person: true };
    return g;
  }

  function makeRobot(color) {
    var g = new THREE.Group();
    var body = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 0.5, 6, 12), matSmooth(0xe5ddff, 0.4));
    body.position.y = 0.95; g.add(body);
    var head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.55, 0.55), matSmooth(color, 0.4));
    head.position.y = 1.62; g.add(head);
    var screen = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.34),
      new THREE.MeshStandardMaterial({ color: 0x1b1030, emissive: 0x6d4bd0, emissiveIntensity: 0.9 }));
    screen.position.set(0, 1.64, 0.285); g.add(screen);
    [-0.12, 0.12].forEach(function (ex) {
      var eye = new THREE.Mesh(new THREE.CircleGeometry(0.05, 12), new THREE.MeshStandardMaterial({ color: 0x9be7ff, emissive: 0x7fd6ff, emissiveIntensity: 1 }));
      eye.position.set(ex, 1.66, 0.29); g.add(eye);
    });
    var ant = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), new THREE.MeshStandardMaterial({ color: 0xff7eb6, emissive: 0xff5ba3, emissiveIntensity: 0.8 }));
    ant.position.set(0, 2.02, 0); g.add(ant);
    box2(0.06, 0.26, 0.06, 0xbcb0e8, 0, 1.9, 0, g);
    g.traverse(function (o) { if (o.isMesh) o.castShadow = true; });
    g.userData.rig = { head: head, ant: ant };
    return g;
  }
  function box2(w, h, d, c, x, y, z, parent) {
    var m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), matSmooth(c, 0.6));
    m.position.set(x, y, z); parent.add(m); return m;
  }

  /* Máy AI bằng mô hình GLB: RobotExpressive (CC0 — Tomás Laulhé/Quaternius, chỉnh sửa Don McCurdy).
     Nạp cục bộ (precache offline). Nếu lỗi → fallback makeRobot() dựng-bằng-code. */
  function loadRobotGLB() {
    return import("./GLTFLoader.module.js").then(function (m) {
      return new Promise(function (res) {
        try {
          new m.GLTFLoader().load("./models/RobotExpressive.glb",
            function (g) { robotGLB = g; res(); },
            undefined,
            function () { res(); });
        } catch (e) { res(); }
      });
    }).catch(function () { /* thiếu loader → bỏ qua, dùng robot code */ });
  }

  function setupRobotGLB() {
    var root = robotGLB.scene;
    root.updateMatrixWorld(true);
    root.traverse(function (o) { if (o.isMesh || o.isSkinnedMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; } });
    // chuẩn hoá kích thước bằng WRAPPER (không scale trực tiếp gltf.scene — sẽ vỡ skeleton/skinning)
    var box = new THREE.Box3().setFromObject(root);
    var h = (box.max.y - box.min.y) || 1;
    var s = 1.8 / h;
    root.position.y = -box.min.y;        // chân về 0 ở hệ gốc (chưa scale)
    var g = new THREE.Group(); g.add(root);
    g.scale.setScalar(s);                 // scale wrapper → skeleton bên trong giữ bind gốc
    aiMixer = new THREE.AnimationMixer(root);
    aiActions = {};
    ["Idle", "Wave"].forEach(function (n) {
      var c = THREE.AnimationClip.findByName(robotGLB.animations, n);
      if (c) aiActions[n] = aiMixer.clipAction(c);
    });
    if (aiActions.Idle) { aiActions.Idle.play(); aiCurrent = aiActions.Idle; }
    g.userData.rig = { robotGLB: true };
    return g;
  }

  function playAI(name) {
    if (!aiMixer || !aiActions || !aiActions[name] || aiCurrent === aiActions[name]) return;
    var next = aiActions[name];
    next.reset().fadeIn(0.3).play();
    if (aiCurrent) aiCurrent.fadeOut(0.3);
    aiCurrent = next;
  }

  function buildEntities() {
    npcs = [];
    ENT.forEach(function (e) {
      var g = e.kind === "robot" ? (robotGLB ? setupRobotGLB() : makeRobot(e.color)) : makePerson(e.color, e.look);
      g.position.set(e.x, 0, e.z);
      // quay mặt về giữa phòng
      g.rotation.y = Math.atan2(-e.x, -e.z);
      scene.add(g);

      // bệ tròn dưới chân
      var pad = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.86, 0.12, 24),
        matSmooth(e.color, 0.5));
      pad.position.set(e.x, 0.06, e.z); pad.receiveShadow = true; scene.add(pad);

      // vòng sáng chỉ dẫn (ẩn/hiện theo trạng thái)
      var ring = new THREE.Mesh(new THREE.RingGeometry(0.92, 1.1, 32),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.0, depthWrite: false }));
      ring.rotation.x = -Math.PI / 2; ring.position.set(e.x, 0.05, e.z); scene.add(ring);

      // marker nổi: NPC manh mối hiện biểu tượng manh mối (🖥️/📄/📊) cho dễ nhận;
      // cô Lan / Máy AI dùng dấu ❗.
      var markEmo = "❗", markSc = 0.7;
      if (e.id.charAt(0) === "c") { var _c = clueById(e.id); if (_c) { markEmo = _c.ic; markSc = 0.95; } }
      var mk = makeEmoji(markEmo, 100); mk.scale.set(markSc, markSc, 1); mk.position.set(e.x, 2.55, e.z); scene.add(mk);
      markers.push(mk);

      // đạo cụ cạnh NPC manh mối
      if (e.prop) buildProp(e.prop, e.x, e.z);

      colliders.push({ x: e.x, z: e.z, r: 0.75 });
      var rec = { data: e, group: g, ring: ring, mk: mk };
      npcs.push(rec);
      interactables.push(rec);
    });
    updateMarkers();
  }

  function buildProp(kind, x, z) {
    // đặt đạo cụ lệch ra phía giữa phòng một chút
    var ox = x * 0.78, oz = z * 0.78;
    if (kind === "computer") {
      box(0.7, 0.14, 0.5, 0x8a7bb5, ox, 0.6, oz);                 // bàn nhỏ
      var mon = box(0.62, 0.42, 0.06, 0x2b2b3a, ox, 0.95, oz - 0.1);
      mon.material = new THREE.MeshStandardMaterial({ color: 0x1b2340, emissive: 0x3b82f6, emissiveIntensity: 0.6 });
    } else if (kind === "paper") {
      box(0.7, 0.14, 0.5, 0xb98a5a, ox, 0.6, oz);
      var pp = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.04, 0.5), matSmooth(0xffffff, 0.8));
      pp.position.set(ox, 0.69, oz); pp.rotation.y = 0.2; pp.castShadow = true; scene.add(pp);
    } else if (kind === "chart") {
      var stand = box(0.9, 1.1, 0.08, 0xffffff, ox, 0.85, oz);
      var sp = makeEmoji("📊", 90); sp.position.set(ox, 1.0, oz + 0.08); sp.scale.set(0.8, 0.8, 1); scene.add(sp);
    }
  }

  function buildHero() {
    hero = makePerson(0x6366f1, { hair: 0x2a1c12, skin: 0xffe0bd, style: "short", pants: 0x4338ca });
    // mũ thám tử nhỏ cho khác NPC
    var cap = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.12, 16), matSmooth(0x4338ca, 0.7));
    cap.position.y = 1.86; hero.add(cap);
    var brim = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.05, 16), matSmooth(0x4338ca, 0.7));
    brim.position.set(0, 1.8, 0.1); hero.add(brim);
    var sp = (LEVEL && LEVEL.spawn) ? LEVEL.spawn : { x: 0, z: 3.4, yaw: Math.PI };
    hero.position.set(sp.x || 0, 0, sp.z || 3.4);
    facing = (sp.yaw != null ? sp.yaw : Math.PI);
    hero.rotation.y = facing;
    scene.add(hero);
  }

  /* ========================================================================
     INPUT (bàn phím + cần gạt cảm ứng)
     ======================================================================== */
  function on(el, ev, fn, opts) { if (!el) return; el.addEventListener(ev, fn, opts); listeners.push([el, ev, fn, opts]); }

  function bindInput() {
    on(document, "keydown", onKey);
    on(document, "keyup", onKeyUp);
    bindJoystick();
    bindCamera();
  }

  function bindCamera() {
    var cv = renderer.domElement;
    on(cv, "pointerdown", camDown);
    on(cv, "pointermove", camMove);
    on(cv, "pointerup", camUp);
    on(cv, "pointercancel", camUp);
    on(cv, "wheel", camWheel, { passive: false });
    on(cv, "click", camClick);
    on(document, "pointerlockchange", onLockChange);
    on(document, "mousemove", onMouseLook);
    on($("a3dCamBtn"), "click", toggleCamMenu);
    var menu = $("a3dCamMenu");
    if (menu) menu.querySelectorAll("[data-cam]").forEach(function (b) {
      on(b, "click", function () { setCamMode(b.getAttribute("data-cam")); closeCamMenu(); });
    });
    updateCamUI();
  }
  function camDown(e) {
    if (dialogOpen || overlayOpen || pointerLocked) return;
    dragging = true; dragPId = e.pointerId; dragLX = e.clientX; dragLY = e.clientY;
    try { renderer.domElement.setPointerCapture(e.pointerId); } catch (ex) {}
  }
  function camMove(e) {
    if (!dragging || e.pointerId !== dragPId) return;
    var dx = e.clientX - dragLX, dy = e.clientY - dragLY; dragLX = e.clientX; dragLY = e.clientY;
    yaw -= dx * 0.005;
    if (camMode === "first") pitch = clamp(pitch - dy * 0.005, -1.2, 1.2);
  }
  function camUp(e) { if (e.pointerId === dragPId) { dragging = false; dragPId = null; } }
  function camWheel(e) {
    if (dialogOpen || overlayOpen) return;
    if (e.cancelable) e.preventDefault();
    if (camMode === "iso") isoZoom = clamp(isoZoom + e.deltaY * 0.0015, 0.6, 1.8);
    else if (camMode === "third") thirdDist = clamp(thirdDist + e.deltaY * 0.01, 4.5, 11);
  }
  function camClick() { if (camMode === "first" && !pointerLocked && !dialogOpen && !overlayOpen) maybeLockPointer(); }
  function onLockChange() { pointerLocked = (document.pointerLockElement === (renderer && renderer.domElement)); }
  function onMouseLook(e) {
    if (!pointerLocked || dialogOpen || overlayOpen) return;
    yaw -= (e.movementX || 0) * 0.0022;
    pitch = clamp(pitch - (e.movementY || 0) * 0.0022, -1.2, 1.2);
  }

  function onKey(e) {
    if (overlayOpen) return;
    var k = e.key.toLowerCase();
    if (dialogOpen) {
      if (k === "enter" || k === " ") {
        var b = $("a3dLayer") && $("a3dLayer").querySelector(".a3dNext");
        if (b) { e.preventDefault(); b.click(); }
      }
      return;
    }
    if (k === "arrowup" || k === "w") { keys.U = 1; e.preventDefault(); }
    else if (k === "arrowdown" || k === "s") { keys.D = 1; e.preventDefault(); }
    else if (k === "arrowleft" || k === "a") { keys.L = 1; e.preventDefault(); }
    else if (k === "arrowright" || k === "d") { keys.R = 1; e.preventDefault(); }
    else if (k === "e" || k === "enter" || k === " ") { if (nearest) { e.preventDefault(); doInteract(); } }
    else if (k === "v") { setCamMode(camMode === "first" ? "third" : "first"); }
    else if (k === "escape") { if (camMenuOpen) closeCamMenu(); }
  }
  function onKeyUp(e) {
    var k = e.key.toLowerCase();
    if (k === "arrowup" || k === "w") keys.U = 0;
    else if (k === "arrowdown" || k === "s") keys.D = 0;
    else if (k === "arrowleft" || k === "a") keys.L = 0;
    else if (k === "arrowright" || k === "d") keys.R = 0;
  }

  function bindJoystick() {
    var zone = $("a3dJoyZone"), base = $("a3dJoyBase"), stick = $("a3dJoyStick");
    if (!zone) return;
    var cx = 0, cy = 0, R = 46, id = null;
    function start(e) {
      if (dialogOpen || overlayOpen) return;
      var t = e.changedTouches ? e.changedTouches[0] : e; id = e.pointerId != null ? e.pointerId : 0;
      var r = zone.getBoundingClientRect();
      cx = t.clientX; cy = t.clientY;
      // đặt cần gạt tại điểm chạm
      base.style.left = (cx - r.left) + "px"; base.style.top = (cy - r.top) + "px";
      base.classList.add("show"); joy.active = true;
      try { if (e.pointerId != null) zone.setPointerCapture(e.pointerId); } catch (ex) {}
      move(e);
    }
    function move(e) {
      if (!joy.active) return;
      var t = e.changedTouches ? e.changedTouches[0] : e;
      var dx = t.clientX - cx, dy = t.clientY - cy;
      var d = Math.hypot(dx, dy); if (d > R) { dx = dx / d * R; dy = dy / d * R; }
      stick.style.transform = "translate(" + dx + "px," + dy + "px)";
      joy.x = dx / R; joy.z = dy / R;
      if (e.cancelable) e.preventDefault();
    }
    function end() {
      joy.active = false; joy.x = 0; joy.z = 0; id = null;
      stick.style.transform = "translate(0,0)"; base.classList.remove("show");
    }
    on(zone, "pointerdown", start);
    on(zone, "pointermove", move);
    on(zone, "pointerup", end);
    on(zone, "pointercancel", end);
    on(zone, "pointerleave", end);
  }

  /* ========================================================================
     VÒNG LẶP
     ======================================================================== */
  function tick() {
    if (!renderer || !renderer.domElement.isConnected) { cleanup(); return; }
    if (document.hidden) { raf = 0; return; } // tạm dừng khi ẩn tab (tiết kiệm pin)
    raf = requestAnimationFrame(tick);
    var dt = clock ? Math.min(clock.getDelta(), 0.05) : 0.016;

    if ((dialogOpen || overlayOpen) && pointerLocked) { try { document.exitPointerLock(); } catch (e) {} }
    if (!dialogOpen && !overlayOpen) updateMove(dt);
    else { vel.x = lerp(vel.x, 0, 0.2); vel.z = lerp(vel.z, 0, 0.2); animateHero(dt, 0); }

    animateNpcs(dt);
    if (aiMixer) aiMixer.update(dt);
    updateCamera(dt);
    renderer.render(scene, camera);
  }

  function updateMove(dt) {
    // input: f = tiến/lùi, r = phải/trái
    var f = (keys.U ? 1 : 0) - (keys.D ? 1 : 0);
    var r = (keys.R ? 1 : 0) - (keys.L ? 1 : 0);
    if (joy.active) { f += -joy.z; r += joy.x; }
    // di chuyển THEO HƯỚNG CAMERA (yaw) để không bao giờ "sai hướng"
    // forward = (sin,cos); right = (-cos, sin)
    var sinY = Math.sin(yaw), cosY = Math.cos(yaw);
    var mx = sinY * f - cosY * r;
    var mz = cosY * f + sinY * r;
    var mag = Math.hypot(mx, mz);
    if (mag > 1) { mx /= mag; mz /= mag; }

    var speed = 4.2;
    vel.x = lerp(vel.x, mx * speed, 0.22);
    vel.z = lerp(vel.z, mz * speed, 0.22);

    var nx = hero.position.x + vel.x * dt;
    var nz = hero.position.z + vel.z * dt;
    var res = resolve(nx, nz, 0.42);
    hero.position.x = res[0]; hero.position.z = res[1];

    var sp = Math.abs(vel.x) + Math.abs(vel.z);
    var moving = mag > 0.08 && sp > 0.2;
    if (camMode === "first") { facing = yaw; }                 // thân quay theo hướng nhìn
    else if (moving) { facing = angLerp(facing, Math.atan2(vel.x, vel.z), 0.25); }
    hero.rotation.y = facing;
    animateHero(dt, moving ? Math.min(1, sp / speed) : 0);
    updateNearest();
  }

  function angLerp(a, b, t) {
    var d = ((b - a + Math.PI) % (2 * Math.PI)) - Math.PI;
    if (d < -Math.PI) d += 2 * Math.PI;
    return a + d * t;
  }

  function resolve(px, pz, r) {
    for (var i = 0; i < colliders.length; i++) {
      var c = colliders[i], dx = px - c.x, dz = pz - c.z, d = Math.hypot(dx, dz), min = r + c.r;
      if (d < min) {
        if (d > 1e-4) { px = c.x + dx / d * min; pz = c.z + dz / d * min; }
        else { px = c.x + min; }
      }
    }
    return [clamp(px, -7.2, 7.2), clamp(pz, -7.2, 7.2)];
  }

  function animateHero(dt, speed) {
    var rig = hero.userData.rig; if (!rig) return;
    if (REDUCED) { if (rig.arms) rig.arms.forEach(function (a) { a.rotation.x = 0; }); if (rig.legs) rig.legs.forEach(function (l) { l.rotation.x = 0; }); hero.position.y = 0; return; }
    if (speed > 0.05) {
      walkPhase += dt * 10 * (0.5 + speed);
      var sw = 0.6 * speed;
      if (rig.legs) { rig.legs[0].rotation.x = Math.sin(walkPhase) * sw; rig.legs[1].rotation.x = -Math.sin(walkPhase) * sw; }
      if (rig.arms) { rig.arms[0].rotation.x = -Math.sin(walkPhase) * sw * 0.8; rig.arms[1].rotation.x = Math.sin(walkPhase) * sw * 0.8; }
      hero.position.y = Math.abs(Math.sin(walkPhase)) * 0.06 * speed;
    } else {
      idleT += dt;
      var e = 0.12;
      if (rig.legs) { rig.legs[0].rotation.x = lerp(rig.legs[0].rotation.x, 0, e); rig.legs[1].rotation.x = lerp(rig.legs[1].rotation.x, 0, e); }
      if (rig.arms) { rig.arms[0].rotation.x = lerp(rig.arms[0].rotation.x, 0, e); rig.arms[1].rotation.x = lerp(rig.arms[1].rotation.x, 0, e); }
      hero.position.y = lerp(hero.position.y, Math.sin(idleT * 2) * 0.012, 0.1);
    }
  }

  function animateNpcs(dt) {
    if (REDUCED) return;
    idleT += dt;
    for (var i = 0; i < npcs.length; i++) {
      var n = npcs[i];
      if (n.group.userData.rig && n.group.userData.rig.head) {
        n.group.userData.rig.head.position.y = (n.data.kind === "robot" ? 1.62 : 1.62) + Math.sin(idleT * 1.5 + i) * 0.015;
      }
      if (n.data.kind === "robot" && n.group.userData.rig.ant) {
        n.group.userData.rig.ant.position.y = 2.02 + Math.sin(idleT * 3) * 0.03;
      }
      if (n.mk && n.mk.visible) n.mk.position.y = 2.55 + Math.sin(idleT * 2 + i) * 0.12;
      if (n.ring && nearest === n) n.ring.material.opacity = 0.45 + Math.sin(idleT * 3.2) * 0.22;
      // vẫy tay chào khi người chơi lại gần
      var rig = n.group.userData.rig;
      if (rig && rig.person && rig.arms) {
        var a = rig.arms[1];
        if (nearest === n && !dialogOpen && !overlayOpen) {
          a.rotation.z = lerp(a.rotation.z, -1.5, 0.15);
          a.rotation.x = Math.sin(idleT * 7) * 0.45;
        } else {
          a.rotation.z = lerp(a.rotation.z, 0, 0.12);
          a.rotation.x = lerp(a.rotation.x, 0, 0.12);
        }
      }
    }
  }

  function updateCamera(dt) {
    var hx = hero.position.x, hy = hero.position.y, hz = hero.position.z;
    var k = REDUCED ? 1 : 1 - Math.pow(0.0001, dt);
    if (camMode === "first") {
      var kf = REDUCED ? 1 : 1 - Math.pow(1e-7, dt); // bám mắt nhanh để không nhìn xuyên tường
      var ey = 1.55;
      camera.position.x = lerp(camera.position.x, hx, kf);
      camera.position.y = lerp(camera.position.y, hy + ey, kf);
      camera.position.z = lerp(camera.position.z, hz, kf);
      var cp = Math.cos(pitch);
      camera.lookAt(hx + Math.sin(yaw) * cp, hy + ey + Math.sin(pitch), hz + Math.cos(yaw) * cp);
    } else {
      var dist, height, lookY, ahead;
      if (camMode === "iso") { dist = 8.5 * isoZoom; height = 11 * isoZoom; lookY = 0.9; ahead = 0; }
      else { dist = thirdDist; height = 4.0; lookY = 1.4; ahead = 1.2; } // third
      // camera phía sau hướng nhìn; giữ trong phòng + trên tường để không xuyên geometry
      var wx = hx - Math.sin(yaw) * dist, wz = hz - Math.cos(yaw) * dist, wy = hy + height;
      wx = clamp(wx, -7.6, 7.6); wz = clamp(wz, -7.6, 7.6); wy = Math.max(wy, 1.6);
      camera.position.x = lerp(camera.position.x, wx, k);
      camera.position.y = lerp(camera.position.y, wy, k);
      camera.position.z = lerp(camera.position.z, wz, k);
      camera.lookAt(hx + Math.sin(yaw) * ahead, lookY, hz + Math.cos(yaw) * ahead);
    }
    var wantHidden = (camMode === "first");
    if (wantHidden !== heroHidden) { heroHidden = wantHidden; if (hero) hero.visible = !wantHidden; }
  }

  /* ---- chuyển/điều khiển camera ---- */
  function setCamMode(m) {
    if (m !== "first" && m !== "third" && m !== "iso") return;
    camMode = m;
    try { localStorage.setItem("a3dCam", m); } catch (e) {}
    if (m !== "first" && pointerLocked) { try { document.exitPointerLock(); } catch (e) {} }
    // Pointer Lock CHỈ kích hoạt khi người dùng bấm vào màn hình (camClick) — không tự khoá.
    if (m === "first" && isDesktopPointer()) showToast("👁️ Bấm vào màn hình để nhìn quanh · Esc để thả chuột");
    updateCamUI();
  }
  function isDesktopPointer() { try { return !!(window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches); } catch (e) { return false; } }
  function updateCamUI() {
    var btn = $("a3dCamBtn");
    if (btn) btn.textContent = camMode === "first" ? "👁️" : camMode === "iso" ? "🗺️" : "🎬";
    var menu = $("a3dCamMenu");
    if (menu) menu.querySelectorAll("[data-cam]").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-cam") === camMode); });
  }
  function toggleCamMenu() { camMenuOpen = !camMenuOpen; var m = $("a3dCamMenu"); if (m) m.classList.toggle("hidden", !camMenuOpen); }
  function closeCamMenu() { camMenuOpen = false; var m = $("a3dCamMenu"); if (m) m.classList.add("hidden"); }
  function maybeLockPointer() {
    if (camMode !== "first" || dialogOpen || overlayOpen) return;
    if (!isDesktopPointer()) return; // chỉ desktop
    try { if (renderer && renderer.domElement.requestPointerLock) { var p = renderer.domElement.requestPointerLock(); if (p && p.catch) p.catch(function () {}); } } catch (e) {}
  }

  /* ========================================================================
     TƯƠNG TÁC
     ======================================================================== */
  function updateNearest() {
    var found = null, best = 2.1;
    for (var i = 0; i < interactables.length; i++) {
      var rec = interactables[i], e = rec.data;
      var d = Math.hypot(hero.position.x - e.x, hero.position.z - e.z);
      if (d < best) { best = d; found = rec; }
    }
    if (found !== nearest) {
      nearest = found;
      playAI(found && found.data.id === "ai" && !REDUCED ? "Wave" : "Idle"); // Máy AI vẫy tay khi lại gần
      var prompt = $("a3dPrompt"), action = $("a3dAction");
      // tắt mọi vòng sáng
      for (var j = 0; j < npcs.length; j++) if (npcs[j].ring) npcs[j].ring.material.opacity = 0;
      if (found) {
        prompt.innerHTML = '<span class="a3dPKey">E</span> Nói chuyện với <b>' + esc(found.data.name) + '</b>';
        prompt.classList.remove("hidden");
        action.classList.remove("hidden");
        if (found.ring) found.ring.material.opacity = 0.6;
      } else {
        prompt.classList.add("hidden");
        action.classList.add("hidden");
      }
    }
  }

  function doInteract() {
    if (!nearest || dialogOpen || overlayOpen) return;
    var id = nearest.data.id;
    if (id === "lan") {
      if (!Engine.done["brief"]) { runBrief(0); return; }
      say(AC.brief.avatar, nearest.data.name, hintLine(), null, close);
      return;
    }
    if (id === "ai") {
      var dq = Engine.byId["decision"];
      if (Engine.done["decision"]) { say(AC.avatarAI, AC.whoAI, "Vụ án đã khép lại — làm tốt lắm, Thám tử! 🎉", null, close); return; }
      if (!dq || !Engine.reqMet(dq)) {                       // CHẶN kết luận khi chưa đủ điều kiện
        if (Engine.invCount() < AC.need) say(AC.avatarAI, AC.whoAI, "Hãy xem đủ <b>" + AC.need + " manh mối</b> trước khi quyết định nhé!", null, close);
        else say(AC.avatarAI, AC.whoAI, "Em đã có đủ manh mối rồi! Hãy mở <b>📋 Bảng điều tra</b> để đối chiếu từng bằng chứng trước đã.", null, close);
        return;
      }
      runDecision();
      return;
    }
    // NPC manh mối (collect)
    var cl = clueById(id);
    if (!cl) return;
    var first = !cluesGot[id];
    if (first) { cluesGot[id] = true; Engine.collect(id); sfxSafe("correct"); burstSafe(3); popClue(cl); }
    hideMarker(id);
    var pre = first ? '<span class="a3dHl a3dHl-violet">Manh mối mới!</span> ' : "";
    say(cl.ic, nearest.data.name, pre + cl.info, null, function () {
      close();
      refreshClueState();
    });
  }

  function clueById(id) { for (var i = 0; i < AC.clues.length; i++) if (AC.clues[i].id === id) return AC.clues[i]; return null; }
  function seenCount() { return Object.keys(cluesGot).length; }
  function allBoardDone() { return Object.keys(boardDone).length >= 3; }

  function hintLine() {
    var q = Engine.active();
    if (!q) return "Em đã hoàn thành vụ án rồi! 🎉";
    if (q.type === "collect") return "Em đã thu <b>" + Engine.invCount() + "/" + AC.need + "</b> manh mối. Tìm các bạn có dấu <b>❗</b> để hỏi thêm nhé!";
    if (q.type === "investigate") return "Đủ manh mối rồi! Mở <b>📋 Bảng điều tra</b> để sắp xếp bằng chứng.";
    if (q.type === "decision") return "Em đã sẵn sàng! Tới gặp <b>🤖 Máy AI</b> để kết luận nhé.";
    if (q.type === "quiz") return "Trả lời nhanh mấy câu để chốt bài học nhé!";
    return "Tiếp tục nhiệm vụ nhé!";
  }

  function hideMarker(id) {
    for (var i = 0; i < npcs.length; i++) if (npcs[i].data.id === id && npcs[i].mk) npcs[i].mk.visible = false;
  }

  // Hiện ❗/biểu tượng theo NHIỆM VỤ đang hoạt động (do engine quyết định)
  function updateMarkers() {
    var q = Engine.active();
    for (var i = 0; i < npcs.length; i++) {
      var n = npcs[i], id = n.data.id, show = false;
      if (q) {
        if (q.type === "talk" && q.npc === id) show = true;
        else if (q.type === "collect" && clueById(id) && !cluesGot[id]) show = true;
        else if (q.type === "decision" && q.npc === id) show = true;
      }
      if (n.mk) n.mk.visible = show;
    }
  }

  /* ========================================================================
     TRẠNG THÁI NHIỆM VỤ
     ======================================================================== */
  // Đồng bộ HUD theo nhiệm vụ ĐANG hoạt động của engine (thay cho state-machine cứng)
  function syncQuestUI() {
    var q = Engine.active();
    setObjective(q ? q.objective : "✅ Hoàn thành vụ án!");
    var tot = $("a3dClueTot"); if (tot && AC) tot.textContent = AC.need;
    var bb = $("a3dBoardBtn"); if (bb) bb.classList.toggle("hidden", !(q && q.type === "investigate"));
    updateMarkers();
  }

  function setObjective(text, toast) {
    var o = $("a3dObjective"); if (o) o.innerHTML = text;
    if (toast !== false) showToast(text);
  }

  function refreshClueState() {
    var n = seenCount();
    var chip = $("a3dClueN"); if (chip) chip.textContent = n;
    var chipBox = $("a3dClueChip");
    if (chipBox && !REDUCED) { chipBox.classList.remove("pop"); void chipBox.offsetWidth; chipBox.classList.add("pop"); }
    if (Engine.invCount() >= AC.need && !Engine.done["collect"]) Engine.complete("collect"); // đủ manh mối → xong quest thu thập
    syncQuestUI();
  }

  function runBrief(i) {
    if (i >= AC.brief.lines.length) {
      close();
      Engine.complete("brief");
      syncQuestUI();
      return;
    }
    say(AC.brief.avatar, AC.brief.who, AC.brief.lines[i], null, function () { runBrief(i + 1); });
  }

  /* ========================================================================
     BẢNG ĐIỀU TRA (đối chiếu bằng chứng ↔ kết luận của AI)
     ======================================================================== */
  function openBoard() {
    if (Engine.invCount() < AC.need) return;             // chặn mở bảng khi chưa đủ bằng chứng
    overlayOpen = true;
    var items = AC.clues.map(function (cl, i) {
      var done = !!boardDone[i];
      var optsHtml = AC.boardOpts.map(function (o) {
        var cls = "a3dBoardOpt" + (done && o.k === cl.verdict ? " ok sel" : "");
        return '<button class="' + cls + '" data-i="' + i + '" data-k="' + o.k + '"' + (done ? " disabled" : "") + '>' + esc(o.t) + '</button>';
      }).join("");
      var fxHtml = done ? '<div class="a3dBoardFx good">✅ ' + cl.why + '</div>' : '<div class="a3dBoardFx hidden"></div>';
      return '<div class="a3dBoardItem" data-i="' + i + '">' +
        '<div class="a3dBoardHead"><span class="a3dBoardIc">' + cl.ic + '</span>' +
          '<div><div class="a3dBoardName">' + esc(cl.label) + '</div><div class="a3dBoardInfo">' + cl.info + '</div></div></div>' +
        '<div class="a3dBoardOpts">' + optsHtml + '</div>' + fxHtml +
      '</div>';
    }).join("");
    var layer = $("a3dLayer");
    layer.innerHTML =
      '<div class="a3dPanel a3dBoardPanel">' +
        '<div class="a3dPanelHead"><span>📋 Bảng điều tra</span>' +
          '<button class="a3dRound" id="a3dBoardClose" aria-label="Đóng">✕</button></div>' +
        '<p class="a3dBoardLead">' + AC.boardLead + '</p>' +
        items +
        '<div class="a3dBoardFoot" id="a3dBoardFoot"></div>' +
      '</div>';
    layer.classList.remove("hidden");
    on($("a3dBoardClose"), "click", closeOverlay);
    var btns = layer.querySelectorAll(".a3dBoardOpt");
    for (var b = 0; b < btns.length; b++) on(btns[b], "click", onBoardPick);
    renderBoardFoot();
  }

  function onBoardPick(e) {
    var btn = e.currentTarget, i = +btn.getAttribute("data-i"), k = btn.getAttribute("data-k");
    if (boardDone[i]) return;
    var cl = AC.clues[i], ok = (k === cl.verdict);
    var item = btn.closest(".a3dBoardItem");
    var opts = item.querySelectorAll(".a3dBoardOpt");
    for (var j = 0; j < opts.length; j++) { opts[j].classList.remove("sel", "ok", "no"); }
    btn.classList.add("sel", ok ? "ok" : "no");
    var fx = item.querySelector(".a3dBoardFx");
    if (ok) {
      sfxSafe("correct");
      if (!boardDone[i]) boardDone[i] = true;
      for (var m = 0; m < opts.length; m++) opts[m].disabled = true;
      fx.className = "a3dBoardFx good"; fx.innerHTML = "✅ " + cl.why;
    } else {
      sfxSafe("wrong"); wrong++;
      fx.className = "a3dBoardFx bad"; fx.innerHTML = "🤔 Chưa đúng. Đọc kỹ bằng chứng rồi thử lại nhé.";
      btn.classList.remove("sel");
    }
    fx.classList.remove("hidden");
    renderBoardFoot();
  }

  function renderBoardFoot() {
    var foot = $("a3dBoardFoot"); if (!foot) return;
    var total = AC.clues.length, done = Object.keys(boardDone).length;
    if (done < total) {
      foot.innerHTML = '<div class="a3dBoardCount">Đã đối chiếu <b>' + done + '/' + total + '</b> bằng chứng</div>';
    } else {
      foot.innerHTML = '<div class="a3dBoardCount ok">' + AC.boardSummary + '</div>' +
        '<button class="a3dBtn a3dBtnBig" id="a3dBoardGo">Tới gặp Máy AI để kết luận ➜</button>';
      on($("a3dBoardGo"), "click", function () {
        closeOverlay(); Engine.complete("investigate"); syncQuestUI();
        say(AC.avatarAI, AC.whoAI, "Em đã nắm chắc các bằng chứng. Lại gần tôi (🤖) và nhấn <b>E</b> để đưa ra quyết định cuối cùng nhé!", null, close);
      });
    }
  }

  /* ========================================================================
     QUYẾT ĐỊNH + GIẢI THÍCH + KẾT THÚC
     ======================================================================== */
  function runDecision() {
    dialogOpen = true;
    var opts = AC.options.map(function (o, i) { return '<button class="a3dOpt" data-i="' + i + '">' + esc(o.t) + '</button>'; }).join("");
    var layer = $("a3dLayer");
    layer.innerHTML =
      '<div class="a3dDlg">' +
        '<div class="a3dDlgAva">' + AC.avatarAI + '</div>' +
        '<div class="a3dDlgBody">' +
          '<div class="a3dDlgName">' + esc(AC.whoAI) + '</div>' +
          '<div class="a3dDlgText">' + esc(AC.q) + '</div>' +
          '<div class="a3dOpts" id="a3dOpts">' + opts + '</div>' +
          '<div class="a3dReply hidden" id="a3dReply"></div>' +
        '</div>' +
      '</div>';
    layer.classList.remove("hidden");
    var btns = layer.querySelectorAll(".a3dOpt");
    for (var b = 0; b < btns.length; b++) on(btns[b], "click", onDecide);
  }

  function onDecide(e) {
    var i = +e.currentTarget.getAttribute("data-i"), o = AC.options[i], box = $("a3dReply"), ok = !!o.good;
    if (ok) sfxSafe("correct"); else { sfxSafe("wrong"); wrong++; }
    box.className = "a3dReply " + (ok ? "good" : "bad");
    box.innerHTML = (ok ? "👍 " : "🤔 ") + esc(o.reply);
    box.classList.remove("hidden");
    if (ok) {
      var btns = document.querySelectorAll("#a3dOpts .a3dOpt");
      for (var b = 0; b < btns.length; b++) btns[b].disabled = true;
      burstSafe(6);
      box.innerHTML += '<div class="a3dCenter"><button class="a3dBtn a3dNext" id="a3dResNext">Xem kết quả ➜</button></div>';
      on($("a3dResNext"), "click", function () {
        Engine.complete("decision"); syncQuestUI();
        say("🎉", "Kết quả", AC.result, null, function () {
          say("🧠", AC.explainTitle, AC.lesson, null, function () { close(); afterDecision(); });
        });
      });
    }
  }

  // Sau quyết định: nếu có nhiệm vụ quiz → chơi quiz (lấy câu từ ngân hàng); không thì kết thúc.
  function afterDecision() {
    var q = Engine.active();
    if (q && q.type === "quiz") runQuiz(q);
    else { solved = true; endGame(); }
  }

  /* ---- Quiz: lấy câu hỏi từ ngân hàng có sẵn (QuestionBank → window.BANK) ---- */
  function runQuiz(quest) {
    var qs = QBank.pick(quest.pool); QBank.save();
    if (!qs.length) { Engine.complete("quiz"); solved = true; endGame(); return; }  // ngân hàng rỗng → bỏ qua, không kẹt
    syncQuestUI();
    var idx = 0;
    function ask() {
      if (idx >= qs.length) { Engine.complete("quiz"); solved = true; endGame(); return; }
      dialogOpen = true;
      var qq = qs[idx];
      var opts = qq.opts.map(function (o, i) { return '<button class="a3dOpt" data-i="' + i + '">' + esc(o) + '</button>'; }).join("");
      var layer = $("a3dLayer");
      layer.innerHTML =
        '<div class="a3dDlg"><div class="a3dDlgAva">🧠</div><div class="a3dDlgBody">' +
          '<div class="a3dDlgName">Câu ' + (idx + 1) + '/' + qs.length + '</div>' +
          '<div class="a3dDlgText">' + esc(qq.q) + '</div>' +
          '<div class="a3dOpts" id="a3dQOpts">' + opts + '</div>' +
          '<div class="a3dReply hidden" id="a3dQReply"></div>' +
        '</div></div>';
      layer.classList.remove("hidden");
      var btns = layer.querySelectorAll("#a3dQOpts .a3dOpt");
      for (var b = 0; b < btns.length; b++) on(btns[b], "click", pick);
    }
    function pick(e) {
      var i = +e.currentTarget.getAttribute("data-i"), qq = qs[idx], ok = (i === qq.correct), box = $("a3dQReply");
      if (ok) sfxSafe("correct"); else { sfxSafe("wrong"); wrong++; }
      box.className = "a3dReply " + (ok ? "good" : "bad");
      box.innerHTML = ok ? "👍 Chính xác!" : ("🤔 Đáp án đúng: <b>" + esc(qq.opts[qq.correct]) + "</b>");
      box.classList.remove("hidden");
      var bs = document.querySelectorAll("#a3dQOpts .a3dOpt"); for (var b = 0; b < bs.length; b++) bs[b].disabled = true;
      box.innerHTML += '<div class="a3dCenter"><button class="a3dBtn a3dNext" id="a3dQNext">' + (idx + 1 < qs.length ? "Câu tiếp ➜" : "Xem kết quả ➜") + '</button></div>';
      on($("a3dQNext"), "click", function () { idx++; ask(); });
    }
    say("🧠", "Kiểm tra nhanh", esc(quest.intro || "Trả lời nhanh nhé!"), null, function () { close(); ask(); });
  }

  function endGame() {
    // ẩn các lớp HUD còn sót (prompt/nút hành động/nút bảng) trước màn kết thúc
    ["a3dPrompt", "a3dAction", "a3dBoardBtn"].forEach(function (id) { var el = $(id); if (el) el.classList.add("hidden"); });
    cleanup(true); // giữ DOM shell để hiện màn kết thúc
    var stars = wrong === 0 ? 3 : wrong <= 2 ? 2 : 1;
    var starRow = '<div class="a3dStars">' + [1, 2, 3].map(function (n) {
      return '<span class="a3dStar' + (n <= stars ? " on" : "") + '" style="animation-delay:' + (n * 0.12) + 's">★</span>';
    }).join("") + "</div>";
    var layer = $("a3dLayer");
    if (layer) {
      layer.innerHTML =
        '<div class="a3dEnd">' +
          '<div class="a3dEndIco">🎓</div>' +
          '<h2>' + esc(AC.endTitle) + '</h2>' +
          starRow +
          '<div class="a3dEndTier">' + esc(AC.endTier || "") + '</div>' +
          '<div class="a3dReward">+' + ((AC.reward && AC.reward.xp) || 15) + ' ⭐' + ((AC.reward && AC.reward.badge) ? ' · Mở khóa huy hiệu “' + esc(AC.reward.badge) + '”' : '') + '</div>' +
          '<div class="a3dEndCard"><div class="a3dEndHead">💡 Em vừa học</div><p>' + AC.lesson + '</p></div>' +
          '<div class="a3dCenter">' +
            '<button class="a3dBtn a3dBtnBig" id="a3dReplay">Chơi lại 🔄</button>' +
            '<button class="a3dBtn a3dLight" id="a3dBackEx">Về Bài tập ✏️</button>' +
          '</div>' +
        '</div>';
      layer.classList.remove("hidden");
      on($("a3dReplay"), "click", window.startAcademy);
      on($("a3dBackEx"), "click", quit);
    }
    burstSafe(22); sfxSafe("win");
    if (window.Cloud) {
      var pct = stars >= 3 ? 100 : stars >= 2 ? 75 : 50;
      var rw = AC.reward || {};
      try {
        Cloud.saveQuizResult({ mode: "practice", score: stars, total: 3, percent: pct, stars: stars });
        Cloud.aiRecord({ xp: rw.xp || 15, lesson: rw.cloudLesson || "ai:game:academy1", quiz: true, percent: pct, stars: stars });
      } catch (e) {}
    }
  }

  /* ========================================================================
     HỘP THOẠI + OVERLAY + TOAST + HELP
     ======================================================================== */
  function say(av, who, html, choices, onNext) {
    dialogOpen = true;
    var layer = $("a3dLayer");
    layer.innerHTML =
      '<div class="a3dDlg">' +
        '<div class="a3dDlgAva">' + av + '</div>' +
        '<div class="a3dDlgBody">' +
          (who ? '<div class="a3dDlgName">' + esc(who) + '</div>' : '') +
          '<div class="a3dDlgText">' + html + '</div>' +
          '<div class="a3dCenter"><button class="a3dBtn a3dNext" id="a3dSayNext">Tiếp ➜</button></div>' +
        '</div>' +
      '</div>';
    layer.classList.remove("hidden");
    on($("a3dSayNext"), "click", onNext || close);
  }
  function close() {
    dialogOpen = false;
    var layer = $("a3dLayer"); if (layer) { layer.classList.add("hidden"); layer.innerHTML = ""; }
  }
  function closeOverlay() {
    overlayOpen = false;
    var layer = $("a3dLayer"); if (layer) { layer.classList.add("hidden"); layer.innerHTML = ""; }
  }

  function showToast(text) {
    var t = $("a3dToast"); if (!t) return;
    t.innerHTML = text;
    t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
    clearTimeout(t._tm); t._tm = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  function popClue(cl) {
    showToast('<span class="a3dHl a3dHl-violet">🧩 Manh mối mới:</span> ' + esc(cl.label));
  }

  function showHelp() {
    overlayOpen = true;
    var layer = $("a3dLayer");
    layer.innerHTML =
      '<div class="a3dPanel">' +
        '<div class="a3dPanelHead"><span>❓ Trợ giúp</span><button class="a3dRound" id="a3dHelpClose" aria-label="Đóng">✕</button></div>' +
        '<ul class="a3dHelpList">' +
          '<li><b>Di chuyển:</b> W A S D hoặc phím mũi tên · trên điện thoại: giữ &amp; kéo cần gạt.</li>' +
          '<li><b>Nói chuyện:</b> lại gần người có dấu <b>❗</b>, nhấn <b>E</b> hoặc nút 💬.</li>' +
          '<li><b>Mục tiêu:</b> ' + esc(stripHtml(hintLine())) + '</li>' +
          '<li><b>Bảng điều tra:</b> nút 📋 hiện khi em đủ 3 manh mối.</li>' +
        '</ul>' +
        '<div class="a3dCenter"><button class="a3dBtn" id="a3dHelpOk">Đã hiểu!</button></div>' +
      '</div>';
    layer.classList.remove("hidden");
    on($("a3dHelpClose"), "click", closeOverlay);
    on($("a3dHelpOk"), "click", closeOverlay);
  }
  function stripHtml(s) { var d = document.createElement("div"); d.innerHTML = s; return d.textContent || ""; }

  function toggleMute() {
    muted = !muted;
    try { localStorage.setItem("a3dMuted", muted ? "1" : "0"); } catch (e) {}
    var b = $("a3dMute"); if (b) b.textContent = muted ? "🔇" : "🔊";
  }

  /* ========================================================================
     THOÁT + DỌN DẸP
     ======================================================================== */
  function quit() {
    cleanup();
    var runner = $("runner"); if (runner) runner.classList.remove("a3dMode");
    if (typeof exitRunner === "function") exitRunner();
  }

  function cleanup(keepShell) {
    if (raf) cancelAnimationFrame(raf); raf = 0;
    for (var i = 0; i < listeners.length; i++) {
      var L = listeners[i];
      // giữ lại listener của các nút màn kết thúc khi keepShell
      if (keepShell && L[0] && L[0].id && /^(a3dReplay|a3dBackEx|a3dExit|a3dMute)$/.test(L[0].id)) continue;
      try { L[0].removeEventListener(L[1], L[2], L[3]); } catch (e) {}
    }
    if (!keepShell) listeners = [];
    else listeners = listeners.filter(function (L) { return L[0] && L[0].id && /^(a3dReplay|a3dBackEx|a3dExit|a3dMute)$/.test(L[0].id); });
    if (visHandler) { document.removeEventListener("visibilitychange", visHandler); if (!keepShell) visHandler = null; }
    if (ro) { try { ro.disconnect(); } catch (e) {} ro = null; }

    // dispose geometry/material/texture
    try {
      if (scene) scene.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        var mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
        mats.forEach(function (m) {
          for (var k in m) { var v = m[k]; if (v && v.isTexture) v.dispose(); }
          m.dispose();
        });
      });
    } catch (e) {}
    try { if (renderer) { renderer.dispose(); if (renderer.forceContextLoss) renderer.forceContextLoss(); } } catch (e) {}
    renderer = null; scene = null; camera = null; hero = null; clock = null;
    npcs = []; colliders = []; interactables = []; markers = [];
    if (aiMixer) { try { aiMixer.stopAllAction(); } catch (e) {} }
    aiMixer = null; aiActions = null; aiCurrent = null; robotGLB = null;
  }

  function resize() {
    var stage = $("a3dStage"); if (!stage || !renderer) return;
    var w = stage.clientWidth || 800, h = stage.clientHeight || 500;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }

  // Giữ các hàm cũ để onclick cũ (nếu còn) không lỗi
  window.a3dDoInteract = doInteract;
  window.a3dCloseDialog = close;

  /* ---------- Hook chẩn đoán cho kiểm thử tự động (Playwright) ----------
     CHỈ bật trong môi trường test: URL có ?qa=1 (hoặc localStorage a3dQA="1").
     Production bình thường KHÔNG tạo window.__a3d → không lộ điều khiển "gian lận".
     - Nhóm getter: chỉ đọc trạng thái (an toàn).
     - Nhóm hàm press/interact/teleport/goTo: chỉ có khi A3D_QA bật. */
  var A3D_QA = false;
  try { A3D_QA = /[?&](qa|test)=1\b/.test(location.search) || (window.localStorage && localStorage.getItem("a3dQA") === "1"); } catch (e) {}
  if (A3D_QA) {
    window.__a3d = {
      get ready() { return !!renderer; },
      get state() { var q = Engine.active(); if (!q) return "done"; return ({ brief: "brief", collect: "explore", investigate: "board", decision: "decide", quiz: "quiz" })[q.id] || q.id; },
      get quest() { var q = Engine.active(); return q ? q.id : null; },
      get engine() { return { active: (Engine.active() || {}).id || null, done: Object.keys(Engine.done), inv: Engine.invCount(), quests: Engine.quests.map(function (x) { return x.id; }) }; },
      validate: function (lvl) { return validateLevel(lvl || LEVEL); },
      qbankPick: function (cfg) { return QBank.pick(cfg); },
      get clues() { return seenCount(); },
      get board() { return Object.keys(boardDone).length; },
      get wrong() { return wrong; },
      get solved() { return solved; },
      get dialogOpen() { return dialogOpen; },
      get overlayOpen() { return overlayOpen; },
      get nearest() { return nearest ? nearest.data.id : null; },
      get glbRobot() { return !!robotGLB; },
      get cam() { return { mode: camMode, yaw: +yaw.toFixed(3), pitch: +pitch.toFixed(3), heroVisible: hero ? hero.visible : null, cx: camera ? +camera.position.x.toFixed(2) : null, cy: camera ? +camera.position.y.toFixed(2) : null, cz: camera ? +camera.position.z.toFixed(2) : null }; },
      setCam: function (m) { setCamMode(m); },
      setYaw: function (y) { yaw = y; },
      get aiInfo() {
        var rec = null; for (var i = 0; i < npcs.length; i++) if (npcs[i].data.id === "ai") rec = npcs[i];
        if (!rec || !rec.group || !THREE) return null;
        var g = rec.group, b = new THREE.Box3().setFromObject(g);
        var meshes = [];
        g.traverse(function (o) { if (o.isMesh || o.isSkinnedMesh) { var wp = new THREE.Vector3(); o.getWorldPosition(wp); meshes.push({ sk: !!o.isSkinnedMesh, vis: o.visible, mat: o.material && o.material.type, op: o.material && o.material.opacity, tr: o.material && o.material.transparent, wp: [+wp.x.toFixed(1), +wp.y.toFixed(1), +wp.z.toFixed(1)] }); } });
        return { glb: !!robotGLB, visible: g.visible, pos: [+g.position.x.toFixed(2), +g.position.y.toFixed(2), +g.position.z.toFixed(2)], size: [+(b.max.x - b.min.x).toFixed(2), +(b.max.y - b.min.y).toFixed(2), +(b.max.z - b.min.z).toFixed(2)], minY: +b.min.y.toFixed(2), meshCount: meshes.length, meshes: meshes };
      },
      get hero() { return hero ? { x: +hero.position.x.toFixed(2), z: +hero.position.z.toFixed(2) } : null; },
      press: function (dir, on) { if (/^[UDLR]$/.test(dir)) keys[dir] = on ? 1 : 0; },
      interact: function () { doInteract(); },
      teleport: function (x, z) { if (hero) { hero.position.x = x; hero.position.z = z; updateNearest(); } },
      hideHero: function (hide) { if (hero) hero.visible = !hide; },
      // đưa nhân vật tới trước mặt một NPC (trong tầm tương tác) để QA gọi interact()
      goTo: function (id) {
        for (var i = 0; i < ENT.length; i++) {
          if (ENT[i].id === id && hero) {
            hero.position.x = ENT[i].x; hero.position.z = ENT[i].z + 1.3; updateNearest(); return true;
          }
        }
        return false;
      }
    };
  }
})();
