/* =========================================================
   HỌC AI VUI — app.js (BỘ KHUNG TRẮNG)
   -----------------------------------------------------------
   Khung UI tái sử dụng từ dự án "Học Tiếng Việt", đã gỡ backend
   (đăng nhập / Supabase / TTS / dashboard). Ưu tiên: PHÁT TRIỂN BÀI HỌC.

   👉 Muốn thêm nội dung, chỉ cần sửa 4 khối DATA bên dưới:
      FEATURES · TOPICS · LESSONS · BANK
   Phần ENGINE (điều hướng, quiz, modal) không cần đụng tới.
   ========================================================= */

/* =========================================================
   1) DATA — CHỈNH Ở ĐÂY
   ========================================================= */

/* Thẻ "Vì sao học cùng chúng mình" ở trang chủ */
const FEATURES = [
  {i:"🧩", h:"Dễ hiểu", p:"Khái niệm AI được kể bằng ví dụ đời thường, không thuật ngữ khó."},
  {i:"🎮", h:"Học mà chơi", p:"Mỗi bài có ví dụ trực quan và câu hỏi ôn tập vui nhộn."},
  {i:"🛡️", h:"Dùng AI đúng cách", p:"Hiểu điểm mạnh, giới hạn và cách dùng AI an toàn, có trách nhiệm."},
  {i:"⚡", h:"Bắt nhịp thời đại", p:"Nắm những gì đang thay đổi thế giới nhờ trí tuệ nhân tạo."},
];

/* Các chủ đề (thẻ màu ở trang chủ). key dùng để gắn câu hỏi vào chủ đề. */
const TOPICS = {
  khainiem: {name:"AI là gì?",        color:"#7C3AED", emoji:"💡"},
  hoatdong: {name:"AI học thế nào",   color:"#06B6D4", emoji:"🧠"},
  ungdung:  {name:"AI quanh ta",      color:"#22C55E", emoji:"🌍"},
  prompt:   {name:"Ra lệnh cho AI",   color:"#F59E0B", emoji:"💬"},
  antoan:   {name:"Dùng AI an toàn",  color:"#EF4444", emoji:"🛡️"},
};

/* ------- BÀI HỌC -------
   Mỗi bài: {icon, color, title, desc, body(HTML)}.
   Trong body dùng được các lớp có sẵn:
     <div class="secTitle" data-icon="📖">Tiêu đề mục</div>
     <div class="tipBox"><b>Mẹo:</b> ...</div>
     <p> ... <b>chữ nổi bật</b> ... </p> · <ul><li>...</li></ul>
*/
const LESSONS = [
  {icon:"💡", color:"#7C3AED", title:"Bài 1: AI là gì?",
    desc:"Hiểu trí tuệ nhân tạo bằng ví dụ gần gũi — không cần biết lập trình.",
    body:`
      <p><b>AI (trí tuệ nhân tạo)</b> là khi máy tính làm được những việc mà trước đây tưởng chỉ con người mới làm được: nhận ra hình ảnh, hiểu câu nói, gợi ý bài hát, trả lời câu hỏi…</p>
      <div class="secTitle" data-icon="🔍">Ví dụ em gặp mỗi ngày</div>
      <ul>
        <li>📱 Điện thoại mở khoá bằng <b>khuôn mặt</b>.</li>
        <li>🎬 App gợi ý <b>video em có thể thích</b>.</li>
        <li>🗺️ Bản đồ chỉ <b>đường nhanh nhất</b>.</li>
        <li>💬 Trợ lý ảo <b>trả lời câu hỏi</b> của em.</li>
      </ul>
      <div class="secTitle" data-icon="🤖">AI khác gì phần mềm thường?</div>
      <p>Phần mềm thường làm <b>đúng y hệt</b> điều người ta lập trình. Còn AI có thể <b>học từ ví dụ</b> để tự cải thiện — càng nhiều dữ liệu, càng làm tốt hơn.</p>
      <div class="tipBox"><b>Ghi nhớ:</b> AI không "thông minh như người". Nó giỏi <b>một việc cụ thể</b> nhờ được học từ rất nhiều ví dụ.</div>`},

  {icon:"🧠", color:"#06B6D4", title:"Bài 2: AI học như thế nào?",
    desc:"Dữ liệu, ví dụ và luyện tập — cách máy 'học' để giỏi dần lên.",
    body:`
      <p>Giống như em học nhận biết con mèo bằng cách <b>nhìn thật nhiều con mèo</b>, AI học bằng cách xem <b>rất nhiều ví dụ</b> (gọi là <b>dữ liệu</b>).</p>
      <div class="secTitle" data-icon="📚">3 bước đơn giản</div>
      <ul>
        <li><b>1. Cho ví dụ:</b> đưa hàng nghìn ảnh có ghi "mèo" hoặc "không phải mèo".</li>
        <li><b>2. Luyện tập:</b> AI đoán, sai thì tự chỉnh lại cho đúng dần.</li>
        <li><b>3. Kiểm tra:</b> đưa ảnh mới để xem AI đã đoán giỏi chưa.</li>
      </ul>
      <div class="secTitle" data-icon="⚠️">Vì sao AI đôi khi sai?</div>
      <p>Nếu ví dụ để học bị <b>thiếu</b> hoặc <b>lệch</b>, AI sẽ đoán sai. Ví dụ chỉ học ảnh mèo lông vàng thì có thể không nhận ra mèo đen.</p>
      <div class="tipBox"><b>Ghi nhớ:</b> Dữ liệu tốt → AI tốt. "Rác vào thì rác ra".</div>`},

  {icon:"💬", color:"#F59E0B", title:"Bài 3: Cách ra lệnh cho AI (prompt)",
    desc:"Viết yêu cầu rõ ràng để AI trả lời đúng ý mình hơn.",
    body:`
      <p><b>Prompt</b> là câu lệnh (yêu cầu) em gõ cho AI. Prompt càng <b>rõ ràng</b>, kết quả càng tốt.</p>
      <div class="secTitle" data-icon="✅">Một prompt tốt thường có</div>
      <ul>
        <li>🎯 <b>Việc cần làm:</b> "Tóm tắt", "Giải thích", "Viết"…</li>
        <li>📄 <b>Bối cảnh:</b> cho ai, để làm gì.</li>
        <li>📏 <b>Yêu cầu cụ thể:</b> độ dài, giọng văn, ví dụ.</li>
      </ul>
      <div class="secTitle" data-icon="🔁">So sánh</div>
      <p>❌ "Kể về chó." → quá chung chung.<br>
         ✅ "Giải thích cho học sinh lớp 5 vì sao chó là bạn của con người, trong 3 câu ngắn."</p>
      <div class="tipBox"><b>Mẹo:</b> Nếu chưa ưng, hãy <b>nói rõ muốn sửa gì</b> rồi yêu cầu lại — cứ trò chuyện nhiều lượt.</div>`},
];

/* ------- NGÂN HÀNG CÂU HỎI (Kiểm tra) -------
   Chia theo mức sao 1 / 2 / 3 (dễ → khó). Mỗi câu:
     {topic, q, opts:[...4...], a: chỉ-số-đáp-án-đúng}
   Đáp án sẽ được tự động xáo trộn khi hiển thị.
*/
const BANK = {
  1: [
    {topic:"khainiem", q:"AI là viết tắt của điều gì?", opts:["Trí tuệ nhân tạo","Áo ấm Ý","Ăn ít","Ánh sáng"], a:0},
    {topic:"ungdung", q:"Việc nào dưới đây có dùng AI?", opts:["Mở khoá điện thoại bằng khuôn mặt","Bật công tắc đèn","Đóng cửa sổ","Rót nước"], a:0},
    {topic:"khainiem", q:"AI chạy trên thiết bị gì?", opts:["Máy tính / điện thoại","Cây bút chì","Quyển vở","Cục tẩy"], a:0},
    {topic:"hoatdong", q:"AI học chủ yếu từ đâu?", opts:["Dữ liệu (ví dụ)","Ánh trăng","Nước mưa","Gió"], a:0},
  ],
  2: [
    {topic:"hoatdong", q:"Muốn AI nhận ra con mèo, ta cần cho nó xem gì?", opts:["Nhiều ảnh mèo có gán nhãn","Một câu thơ","Một bản nhạc buồn","Một hộp bút màu"], a:0},
    {topic:"prompt", q:"\"Prompt\" nghĩa là gì?", opts:["Câu lệnh/yêu cầu ta gõ cho AI","Tên một loại máy in","Một môn thể thao","Một loại pin"], a:0},
    {topic:"antoan", q:"Khi AI trả lời, ta nên làm gì?", opts:["Kiểm tra lại thông tin quan trọng","Tin tuyệt đối 100%","Chép ngay không đọc","Tắt máy đi ngủ"], a:0},
    {topic:"ungdung", q:"Ứng dụng nào KHÔNG phải nhờ AI?", opts:["Dùng thước kẻ để đo","Gợi ý video","Dịch ngôn ngữ tự động","Lọc thư rác"], a:0},
  ],
  3: [
    {topic:"prompt", q:"Prompt nào rõ ràng và dễ cho kết quả tốt nhất?", opts:["Giải thích cho học sinh lớp 5 vì sao trời mưa, trong 3 câu","Nói gì đó","Kể chuyện","Viết đi"], a:0},
    {topic:"hoatdong", q:"Vì sao AI đôi khi trả lời sai?", opts:["Do dữ liệu học bị thiếu hoặc lệch","Do trời nóng","Do màn hình nhỏ","Do bàn phím cũ"], a:0},
    {topic:"antoan", q:"Đâu là cách dùng AI có trách nhiệm?", opts:["Không chia sẻ thông tin cá nhân nhạy cảm","Đưa hết mật khẩu cho AI","Tin mọi câu trả lời","Dùng AI để bắt nạt bạn"], a:0},
    {topic:"khainiem", q:"Câu nào ĐÚNG về AI hiện nay?", opts:["AI giỏi từng việc cụ thể, không 'biết tuốt' như người","AI có cảm xúc thật như con người","AI luôn đúng tuyệt đối","AI không cần dữ liệu"], a:0},
  ],
};

/* =========================================================
   2) ENGINE — thường không cần sửa
   ========================================================= */

/* ---------- Tiện ích ---------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length-1; i > 0; i--){
    const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
const rand = arr => arr[Math.floor(Math.random()*arr.length)];

/* ---------- Âm thanh vui (WebAudio, không cần file) ---------- */
let _audio = null;
function getAudio(){ return _audio || (_audio = new (window.AudioContext || window.webkitAudioContext)()); }
function playTone(freq, dur, type="square", vol=0.08){
  try {
    const ctx = getAudio(), o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol; g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur);
  } catch {}
}
const sfx = {
  click:  () => playTone(600, 0.08, "square", 0.05),
  correct:() => { playTone(523, 0.1); setTimeout(()=>playTone(659, 0.1), 80); setTimeout(()=>playTone(784, 0.15), 160); },
  wrong:  () => { playTone(200, 0.2, "sawtooth", 0.06); setTimeout(()=>playTone(150, 0.3, "sawtooth", 0.04), 150); },
  win:    () => { [523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f, 0.15, "square", 0.07), i*100)); },
  pop:    () => playTone(400, 0.06, "sine", 0.04),
};
document.addEventListener("click", e => {
  if(e.target.closest("button, .opt, .topicChip, .lessonCard")) sfx.click();
});

/* Pháo hoa emoji */
function burst(n){
  const em = ["🎉","⭐","💜","✨","🔥","🎊"];
  for(let i = 0; i < n; i++){
    const s = document.createElement("span");
    s.className = "confetti";
    s.textContent = em[Math.floor(Math.random()*em.length)];
    s.style.left = Math.random()*100 + "vw";
    s.style.animationDuration = (1.6 + Math.random()*1.6) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3500);
  }
}

/* ---------- Tiến trình đơn giản (localStorage) ---------- */
const PROGRESS_KEY = "hocai_progress_v1";
function loadProgress(){ try{ return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {lessonsViewed:[]}; }catch{ return {lessonsViewed:[]}; } }
function saveProgress(){ try{ localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }catch{} }
let progress = loadProgress();

/* ---------- Điều hướng ---------- */
const SECTIONS = ["home","baihoc","kiemtra"];
let navLock = false;
let runnerReturn = "home";
if('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }

function go(id){
  if(!SECTIONS.includes(id)) id = "home";
  const runner = document.getElementById("runner");
  if(!runner.classList.contains("hidden")){ runner.classList.add("hidden"); document.body.style.overflow = ""; }
  document.querySelectorAll("#pages .page").forEach(p => {
    if(p.id === id){
      p.classList.remove("hidden");
      p.style.animation = "none"; void p.offsetWidth; p.style.animation = "fadeUp .4s ease";
    } else { p.classList.add("hidden"); p.style.animation = ""; }
  });
  document.querySelectorAll("#navLinks a").forEach(a => a.classList.toggle("active", a.dataset.nav === id));
  document.getElementById("nav").classList.remove("open");
  if(("#" + id) !== location.hash){ navLock = true; location.hash = id; }
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => {
  if(navLock){ navLock = false; return; }
  go((location.hash || "#home").slice(1));
});
function toggleMenu(){ document.getElementById("nav").classList.toggle("open"); }

/* ---------- Trang chủ ---------- */
function renderHome(){
  document.getElementById("featGrid").innerHTML = FEATURES.map(f =>
    `<div class="featCard"><div class="fi">${f.i}</div><h4>${f.h}</h4><p>${f.p}</p></div>`).join("");
  document.getElementById("skillGrid").innerHTML = Object.values(TOPICS).map(t =>
    `<div class="skillCard" style="background:${t.color}"><span class="se">${t.emoji}</span><span class="sn">${t.name}</span></div>`).join("");
  // Thống kê tự động
  const totalQ = [1,2,3].reduce((s,lv)=>s+BANK[lv].length,0);
  setText("statLessons", LESSONS.length);
  setText("statTopics", Object.keys(TOPICS).length);
  setText("statQuiz", totalQ);
  setText("quizCount", totalQ + " câu");
  document.getElementById("quizTags").innerHTML =
    Object.values(TOPICS).map(t => `<span>${t.emoji} ${t.name}</span>`).join("");
}
function setText(id, v){ const el = document.getElementById(id); if(el) el.textContent = v; }

/* ---------- Bài học ---------- */
function renderLessons(){
  document.getElementById("lessonGrid").innerHTML = LESSONS.map((l, i) =>
    `<div class="lessonCard" style="border-top-color:${l.color}" onclick="openLesson(${i})">
       <div class="lIcon">${l.icon}</div>
       <h3>${l.title}</h3><p>${l.desc}</p>
       <span class="lGo">Xem bài học ➜</span>
     </div>`).join("");
}
function openLesson(i){
  const l = LESSONS[i];
  if(!progress.lessonsViewed.includes(i)){ progress.lessonsViewed.push(i); saveProgress(); }
  document.getElementById("lessonBody").innerHTML =
    `<div class="lessonHead" style="background:linear-gradient(135deg,${l.color},${l.color}cc)">
       <div class="lh-ic">${l.icon}</div><div><h2>${l.title}</h2><p>${l.desc}</p></div>
     </div>
     <div class="lContent">${l.body}</div>`;
  document.getElementById("lessonModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  sfx.pop();
}
function closeLesson(e){
  if(e && e.target && e.target.id !== "lessonModal" && e.type === "click" && e.currentTarget.id === "lessonModal") return;
  document.getElementById("lessonModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ---------- Kiểm tra (quiz thích ứng theo sao) ---------- */
const KEYS = ["A","B","C","D"];
const PRAISE = ["Chuẩn luôn! 🔥","Quá đỉnh! ⚡","10 điểm! 💯","Xịn xò! 😎","Đỉnh của chóp! 🏆"];
let total = 10, star = 1, idx = 0, score = 0, locked = false, history = [], used = {};
let current = null;

function enterRunner(showStars){
  document.getElementById("runner").classList.remove("hidden");
  document.getElementById("runnerTop").classList.remove("hidden");
  document.getElementById("qCard").classList.remove("hidden");
  document.getElementById("resultCard").classList.add("hidden");
  document.getElementById("starBox").classList.toggle("hidden", !showStars);
  document.body.style.overflow = "hidden";
  document.getElementById("runner").scrollTo({top:0});
}
function exitRunner(){
  document.getElementById("runner").classList.add("hidden");
  document.body.style.overflow = "";
  go(runnerReturn || "home");
}
function updateStars(pulse){
  const box = document.getElementById("starBox");
  box.innerHTML = [1,2,3].map(i => `<span class="${i <= star ? "" : "off"}">⭐</span>`).join("");
  if(pulse){ box.classList.remove("pulse"); void box.offsetWidth; box.classList.add("pulse"); }
}
function prep(q){
  const pairs = shuffle(q.opts.map((o,i) => [o, i === q.a]));
  return Object.assign({}, q, { opts: pairs.map(p => p[0]), a: pairs.findIndex(p => p[1]) });
}
function drawQuestion(){
  let lv = star;
  let pool = BANK[lv].map((_,i) => i).filter(i => !used[lv].has(i));
  if(pool.length === 0){
    const borrow = lv === 1 ? [2,3] : lv === 2 ? [1,3] : [2,1];
    for(const l of borrow){
      const p2 = BANK[l].map((_,i) => i).filter(i => !used[l].has(i));
      if(p2.length){ lv = l; pool = p2; break; }
    }
  }
  if(pool.length === 0){ used[lv] = new Set(); pool = BANK[lv].map((_,i) => i); }
  const pi = pool[Math.floor(Math.random()*pool.length)];
  used[lv].add(pi);
  return prep(Object.assign({}, BANK[lv][pi], {lv}));
}
function startQuiz(){
  runnerReturn = "kiemtra";
  const totalQ = [1,2,3].reduce((s,lv)=>s+BANK[lv].length,0);
  total = Math.min(10, totalQ);
  star = 1; idx = 0; score = 0; locked = false; history = [];
  used = {1:new Set(), 2:new Set(), 3:new Set()};
  enterRunner(true);
  updateStars(false);
  render();
}
function render(){
  current = drawQuestion();
  const q = current, t = TOPICS[q.topic] || {name:"Chủ đề", emoji:"❓", color:"#7C3AED"};
  locked = false;
  document.getElementById("counter").textContent = (idx+1) + "/" + total;
  document.getElementById("bar").style.width = (idx / total * 100) + "%";

  let inner = `<span class="catChip" style="background:#EDE9FE;color:#5B21B6;border:2px solid ${t.color}">${t.emoji} ${t.name}</span>`;
  inner += `<span class="lvChip">${"⭐".repeat(q.lv)} Câu ${q.lv} sao</span>`;
  inner += `<div class="qTitle">${q.q}</div>`;
  inner += `<div class="opts">`;
  q.opts.forEach((o, i) => {
    inner += `<button class="opt" onclick="pick(${i}, this)"><span class="key">${KEYS[i]}</span><span>${o}</span></button>`;
  });
  inner += `</div>`;
  inner += `<div class="feedback" id="fb"><div class="hostMini">🤖</div><div class="fbBubble" id="fbText"></div></div>`;
  inner += `<div class="center"><button class="btn next hidden" id="btnNext" onclick="next()">Câu tiếp theo ➜</button></div>`;
  document.getElementById("qCard").innerHTML = inner;
  document.getElementById("runner").scrollTo({top:0});
}
function pick(i, el){
  if(locked) return;
  const q = current;
  const opts = document.querySelectorAll(".opt");
  opts.forEach(o => o.classList.add("locked"));
  const ok = (i === q.a);
  if(ok){
    el.classList.add("correct");
    opts.forEach((o,j) => { if(j !== i) o.classList.add("dim"); });
    applyResult("full", q.opts[i]); sfx.correct();
  } else {
    el.classList.add("wrong");
    opts[q.a].classList.add("correct");
    opts.forEach((o,j) => { if(j !== i && j !== q.a) o.classList.add("dim"); });
    applyResult("none", q.opts[i], "Đáp án đúng: " + q.opts[q.a]); sfx.wrong();
  }
}
function applyResult(res, picked, extra){
  locked = true;
  history.push({q: current, picked, res});
  const fb = document.getElementById("fb"), fbText = document.getElementById("fbText");
  if(res === "full"){
    score += 1;
    const msg = star < 3 ? `Lên ${star+1} sao! ${"⭐".repeat(star+1)}` : "Giữ vững 3 sao! 🏆";
    star = Math.min(3, star + 1);
    fb.classList.add("show","good"); fbText.textContent = rand(PRAISE) + " " + msg; burst(6);
  } else {
    star = Math.max(1, star - 1);
    fb.classList.add("show","bad"); fbText.textContent = (extra || "Chưa đúng rồi!") + " · Về " + star + " sao ⭐";
  }
  updateStars(true);
  document.getElementById("btnNext").classList.remove("hidden");
}
function next(){ idx++; if(idx < total){ render(); } else { showResult(); } }

function showResult(){
  document.getElementById("bar").style.width = "100%";
  document.getElementById("qCard").classList.add("hidden");
  document.getElementById("runnerTop").classList.add("hidden");
  const p = Math.round(score / total * 100);
  const tier = p >= 85 ? "Đỉnh nóc kịch trần! 🏆" : p >= 60 ? "Xịn xò con bò! 😎" : p >= 40 ? "Sắp xịn rồi nè! 💪" : "Khởi động thôi! 🚀";
  const trail = history.map(h => h.res === "full" ? "🟢" : "🔴").join("");
  if(p >= 60) sfx.win();

  let review = "";
  history.forEach((h, n) => {
    const t = TOPICS[h.q.topic] || {name:"", emoji:"❓"};
    const ok = h.res === "full";
    review += `<div class="rv ${ok?"ok":"no"}"><div class="mark">${ok?"✅":"❌"}</div><div class="body">
      <div class="qq">Câu ${n+1} · ${h.q.q}</div>
      <div class="meta">${t.emoji} ${t.name} · ${"⭐".repeat(h.q.lv)}</div>
      <div class="ans">Bạn chọn: <b class="${ok?"good":"badc"}">${h.picked}</b>${ok?"":` → Đúng: <b class="good">${h.q.opts[h.q.a]}</b>`}</div>
    </div></div>`;
  });

  const el = document.getElementById("resultCard");
  el.innerHTML = `
    <div class="hostMini" style="margin:0 auto; width:66px; height:66px; font-size:36px">🤖</div>
    <h2 style="margin-top:10px">Kết quả của bạn nè!</h2>
    <div class="scoreRing" style="--p:${p}"><div class="inner"><span class="num">${score}/${total}</span><span style="font-size:13px; color:#64748B">${p}%</span></div></div>
    <div class="tier">${tier}</div>
    <div class="trail">${trail}</div>
    <div class="trailLbl">Hành trình ${total} câu (🟢 đúng · 🔴 sai)</div>
    <div class="secTitle">🔎 Xem lại từng câu</div>
    <div class="review">${review}</div>
    <div class="center">
      <button class="btn" onclick="startQuiz()">Chơi lại (bộ câu mới) 🔄</button>
      <button class="btn light" onclick="exitRunner()" style="margin-left:8px">Về trang chủ 🏠</button>
    </div>`;
  el.classList.remove("hidden");
  document.getElementById("runner").scrollTo({top:0});
  if(p >= 60) burst(20);
}

/* =========================================================
   3) KHỞI ĐỘNG
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderLessons();
  go((location.hash || "#home").slice(1));
  window.scrollTo(0, 0);
});
