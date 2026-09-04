/* =========================================================
   HỌC AI VUI — app.js (BỘ KHUNG TRẮNG)
   -----------------------------------------------------------
   Khung UI tái sử dụng từ dự án "Học Tiếng Việt", đã gỡ backend
   (đăng nhập / Supabase / TTS / dashboard). Ưu tiên: PHÁT TRIỂN BÀI HỌC.

   👉 Muốn thêm nội dung, chỉ cần sửa 4 khối DATA bên dưới:
      FEATURES · TOPICS · BANK  (bài học lộ trình ở curriculum.js)
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
    {topic:"ungdung", q:"Loa thông minh trong nhà dùng AI để làm gì?", opts:["Nghe và trả lời câu hỏi","Nấu cơm","Quét nhà","Tưới cây"], a:0},
    {topic:"khainiem", q:"AI tạo sinh có thể làm gì?", opts:["Viết văn, vẽ tranh theo yêu cầu","Giặt quần áo","Rửa bát","Đá bóng"], a:0},
    {topic:"antoan", q:"Với AI, em KHÔNG nên chia sẻ điều gì?", opts:["Mật khẩu, địa chỉ nhà","Một câu hỏi Toán","Tên loài hoa","Màu em thích"], a:0},
    {topic:"hoatdong", q:"Với máy tính, một bức ảnh thực chất là gì?", opts:["Nhiều ô màu = những con số","Một bài hát","Một mùi hương","Một cơn gió"], a:0},
    {topic:"ungdung", q:"Robot hút bụi dùng AI để làm gì?", opts:["Tránh vật cản, tự tìm đường","Hát ru","Pha trà","Gấp quần áo"], a:0},
  ],
  2: [
    {topic:"hoatdong", q:"Muốn AI nhận ra con mèo, ta cần cho nó xem gì?", opts:["Nhiều ảnh mèo có gán nhãn","Một câu thơ","Một bản nhạc buồn","Một hộp bút màu"], a:0},
    {topic:"prompt", q:"\"Prompt\" nghĩa là gì?", opts:["Câu lệnh/yêu cầu ta gõ cho AI","Tên một loại máy in","Một môn thể thao","Một loại pin"], a:0},
    {topic:"antoan", q:"Khi AI trả lời, ta nên làm gì?", opts:["Kiểm tra lại thông tin quan trọng","Tin tuyệt đối 100%","Chép ngay không đọc","Tắt máy đi ngủ"], a:0},
    {topic:"ungdung", q:"Ứng dụng nào KHÔNG phải nhờ AI?", opts:["Dùng thước kẻ để đo","Gợi ý video","Dịch ngôn ngữ tự động","Lọc thư rác"], a:0},
    {topic:"antoan", q:"Vì sao không nên tin AI 100%?", opts:["AI đôi khi bịa hoặc trả lời sai","AI luôn buồn ngủ","AI sợ ánh sáng","AI chỉ nói tiếng Anh"], a:0},
    {topic:"prompt", q:"Cách nào giúp prompt cho kết quả tốt hơn?", opts:["Giao vai và nói rõ khuôn dạng","Viết thật ngắn kiểu 'làm đi'","Gõ toàn chữ in hoa","Không nói gì cả"], a:0},
    {topic:"ungdung", q:"AI tạo sinh 'sáng tạo' bằng cách nào?", opts:["Đoán phần tiếp theo hợp lý nhất","Hỏi ý ông Bụt","Tra từ điển giấy","Bấm số ngẫu nhiên"], a:0},
    {topic:"khainiem", q:"Câu nào ĐÚNG về robot và AI?", opts:["Robot là thân máy, AI là 'bộ não'","Robot nào cũng có AI","AI phải có tay chân mới chạy được","Robot và AI là một thứ y hệt"], a:0},
    {topic:"hoatdong", q:"Trợ lý ảo 'nghe hiểu' lời em bằng cách nào?", opts:["Đổi giọng nói thành chữ rồi hiểu","Đọc suy nghĩ trong đầu","Nhìn nét mặt","Ngửi mùi"], a:0},
  ],
  3: [
    {topic:"prompt", q:"Prompt nào rõ ràng và dễ cho kết quả tốt nhất?", opts:["Giải thích cho học sinh lớp 5 vì sao trời mưa, trong 3 câu","Nói gì đó","Kể chuyện","Viết đi"], a:0},
    {topic:"hoatdong", q:"Vì sao AI đôi khi trả lời sai?", opts:["Do dữ liệu học bị thiếu hoặc lệch","Do trời nóng","Do màn hình nhỏ","Do bàn phím cũ"], a:0},
    {topic:"antoan", q:"Đâu là cách dùng AI có trách nhiệm?", opts:["Không chia sẻ thông tin cá nhân nhạy cảm","Đưa hết mật khẩu cho AI","Tin mọi câu trả lời","Dùng AI để bắt nạt bạn"], a:0},
    {topic:"khainiem", q:"Câu nào ĐÚNG về AI hiện nay?", opts:["AI giỏi từng việc cụ thể, không 'biết tuốt' như người","AI có cảm xúc thật như con người","AI luôn đúng tuyệt đối","AI không cần dữ liệu"], a:0},
    {topic:"antoan", q:"Khi AI đưa một con số quan trọng, em nên làm gì?", opts:["Kiểm chứng ở nguồn đáng tin","Tin ngay và dùng luôn","Xoá đi cho chắc","Kể cho cả lớp là đúng"], a:0},
    {topic:"prompt", q:"'Giao vai cho AI' nghĩa là gì?", opts:["Nói AI đóng vai ai đó, ví dụ thầy giáo vui tính","Tặng quà cho AI","Đặt tên cho máy tính","Tắt máy rồi bật lại"], a:0},
    {topic:"ungdung", q:"Kỹ năng nào con người giữ vững mà AI khó thay?", opts:["Sáng tạo và thấu cảm","Sạc pin nhanh","Lưu nhiều dữ liệu","Tính toán số lớn"], a:0},
    {topic:"antoan", q:"Đâu là cách dùng AI trung thực khi làm bài?", opts:["Nói thật là mình có dùng AI hỗ trợ","Chép y nguyên rồi nhận là của mình","Giấu không cho ai biết","Xoá lịch sử trò chuyện"], a:0},
    {topic:"antoan", q:"'Deepfake' là gì?", opts:["Ảnh/video/giọng giả do AI tạo, trông như thật","Một trò chơi điện tử","Một loại máy ảnh","Một kiểu tóc"], a:0},
    {topic:"antoan", q:"Thấy một tin gây sốc trên mạng, em nên làm gì trước?", opts:["Kiểm chứng nguồn trước khi tin và chia sẻ","Chia sẻ ngay cho thật nhiều người","Tin luôn vì thấy 'tận mắt'","Bình luận tức giận"], a:0},
    {topic:"ungdung", q:"Vì sao AI chơi cờ có thể thắng nhà vô địch?", opts:["Thử rất nhiều nước đi rồi chọn nước tốt nhất","Vì nó biết tuốt mọi thứ","Vì nó may mắn","Vì nó làm đối thủ sợ"], a:0},
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

/* ---------- Điều hướng ---------- */
const SECTIONS = ["home","baihoc","kiemtra","dauvao"];
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
  if(id === "baihoc") showCurriculum();
}

/* ---------- Tải dữ liệu bài học theo yêu cầu (chỉ khi mở trang Bài học) ---------- */
const ASSET_VER = "25";
let _curDataPromise = null;
function loadCurriculumData(){
  if(_curDataPromise) return _curDataPromise;
  _curDataPromise = new Promise((resolve, reject) => {
    const files = ["curriculum.js", "lessons_content.js", "lesson_quiz.js"];
    let i = 0;
    (function next(){
      if(i >= files.length){ resolve(); return; }
      const s = document.createElement("script");
      s.src = files[i] + "?v=" + ASSET_VER;
      s.onload = () => { i++; next(); };
      s.onerror = reject;
      document.head.appendChild(s);
    })();
  });
  return _curDataPromise;
}
function showCurriculum(){
  const host = document.getElementById("curriculum");
  if(!host || host.dataset.rendered) return;
  if(window.CURRICULUM){ renderCurriculum(); return; }
  host.innerHTML = `<div class="curLoading"><span class="curSpin">⏳</span> Đang tải bài học…</div>`;
  loadCurriculumData().then(() => { renderCurriculum(); })
    .catch(() => { host.innerHTML = `<div class="curLoading">😕 Không tải được bài học. Hãy tải lại trang.</div>`; });
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
  const cst = curriculumStats();
  setText("statLessons", cst.lessons || 192);   // số cố định khi chưa tải dữ liệu bài học
  setText("statTopics", cst.modules || 31);
  setText("statQuiz", totalQ);
  setText("quizCount", totalQ + " câu");
  document.getElementById("quizTags").innerHTML =
    Object.values(TOPICS).map(t => `<span>${t.emoji} ${t.name}</span>`).join("");
}
function setText(id, v){ const el = document.getElementById(id); if(el) el.textContent = v; }

/* ---------- Modal (đóng — tái dùng cho giáo án 90') ---------- */
function closeLesson(e){
  if(e && e.target && e.target.id !== "lessonModal" && e.type === "click" && e.currentTarget.id === "lessonModal") return;
  stopReading();
  document.getElementById("lessonModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ---------- Đọc bài bằng giọng nói (Web Speech API — miễn phí, offline) ---------- */
let _readText = "", _reading = false;
function stripForRead(html){
  const d = document.createElement("div"); d.innerHTML = html;
  return (d.textContent || "")
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}←-⇿⬀-⯿️‍]/gu, " ")
    .replace(/\s+/g, " ").trim();
}
function updateReadBtn(on){
  const b = document.getElementById("readBtn");
  if(b){ b.classList.toggle("on", on); b.textContent = on ? "⏹️" : "🔊"; b.title = on ? "Dừng đọc" : "Nghe đọc bài"; }
}
function stopReading(){ try{ if(window.speechSynthesis) window.speechSynthesis.cancel(); }catch{} _reading = false; updateReadBtn(false); }
function readLesson(){
  if(!("speechSynthesis" in window) || !_readText){ return; }
  if(_reading){ stopReading(); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(_readText);
  u.lang = "vi-VN"; u.rate = 0.95; u.pitch = 1.05;
  const voices = window.speechSynthesis.getVoices() || [];
  const vi = voices.find(v => /vi[-_]?VN|vietnam/i.test((v.lang || "") + " " + (v.name || "")));
  if(vi) u.voice = vi;
  u.onend = stopReading; u.onerror = stopReading;
  window.speechSynthesis.speak(u);
  _reading = true; updateReadBtn(true);
}

/* ---------- Kiểm tra (quiz thích ứng theo sao) ---------- */
const KEYS = ["A","B","C","D"];
const PRAISE = ["Chuẩn luôn! 🔥","Quá đỉnh! ⚡","10 điểm! 💯","Xịn xò! 😎","Đỉnh của chóp! 🏆"];
let total = 10, star = 1, idx = 0, score = 0, locked = false, quizHistory = [], used = {};
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
  if(typeof _tyClear === "function") _tyClear();
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
  star = 1; idx = 0; score = 0; locked = false; quizHistory = [];
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
  quizHistory.push({q: current, picked, res});
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
  const trail = quizHistory.map(h => h.res === "full" ? "🟢" : "🔴").join("");
  if(p >= 60) sfx.win();

  let review = "";
  quizHistory.forEach((h, n) => {
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
   2b) LỘ TRÌNH ĐẦY ĐỦ (render từ window.CURRICULUM — SPEC)
   Dữ liệu nguồn nằm ở curriculum.js (không sửa tay, chỉ render).
   ========================================================= */
const LEVEL_COLORS = ["#3B82F6", "#22C55E", "#F97316", "#8B5CF6"]; // L1..L4
const LEVEL_SOFT   = ["#EFF6FF", "#F0FDF4", "#FFF7ED", "#F5F3FF"];

/* 6 giai đoạn của giáo án 90' — màu pastel cố định xuyên suốt */
const PHASES = [
  {kw:"Khởi động",  bg:"#FEF3C7", fg:"#92400E", ic:"⏱️"},
  {kw:"Khám phá",   bg:"#DBEAFE", fg:"#1E40AF", ic:"🔍"},
  {kw:"Thực hành",  bg:"#DCFCE7", fg:"#166534", ic:"✍️"},
  {kw:"Trò chơi",   bg:"#FCE7F3", fg:"#9D174D", ic:"🎮"},
  {kw:"Thử thách",  bg:"#EDE9FE", fg:"#5B21B6", ic:"🏆"},
  {kw:"Tổng kết",   bg:"#CCFBF1", fg:"#115E59", ic:"⭐"},
];
/* Nhịp 1 buổi 90 phút để vẽ timeline ngang */
const SESSION_BEAT = [
  ["Khởi động", 10], ["Khám phá kiến thức", 15], ["Thực hành", 25],
  ["Trò chơi vận dụng", 15], ["Thử thách / Mini project", 20], ["Tổng kết & sao thưởng", 5],
];
function phaseOf(name){
  const p = PHASES.find(p => (name || "").indexOf(p.kw) === 0) || PHASES.find(p => (name || "").indexOf(p.kw) > -1);
  return p || {bg:"#F1F5F9", fg:"#334155", ic:"•"};
}
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function hi(s, term){
  const t = esc(s);
  if(!term) return t;
  try{ return t.replace(new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "ig"), "<mark>$1</mark>"); }catch{ return t; }
}

let curSearch = "";
let _lessonMap = []; // [levelIdx][moduleIdx][lessonIdx] -> lesson (để mở modal)

/* Emoji minh hoạ theo chủ đề của bài (thay cho ảnh) */
const EMOJI_MAP = [
  [/deepfake|tin giả|lừa|giả mạo/i, "🎭"],
  [/an toàn|riêng tư|bảo mật|mật khẩu/i, "🛡️"],
  [/prompt|câu lệnh|ra lệnh|hỏi ai/i, "💬"],
  [/robot/i, "🦾"],
  [/ảnh|hình|nhìn|thị giác|vẽ|tranh/i, "🖼️"],
  [/âm thanh|giọng|nghe|nói|nhạc|hát/i, "🎤"],
  [/game|trò chơi|cờ /i, "🎮"],
  [/video|phim|quay/i, "🎬"],
  [/dữ liệu|số liệu|bảng|thống kê|biểu đồ/i, "📊"],
  [/internet|web|mạng|trình duyệt|online/i, "🌐"],
  [/email|thư điện tử/i, "✉️"],
  [/thư mục|tệp|file|lưu/i, "📁"],
  [/bàn phím|gõ|đánh máy|typing|wpm/i, "⌨️"],
  [/chuột/i, "🖱️"],
  [/màn hình|cửa sổ/i, "🖥️"],
  [/scratch|lập trình|khối lệnh|thuật toán|flowchart|code|biến|vòng lặp|điều kiện/i, "🧩"],
  [/máy tính|phần cứng|bộ phận|thiết bị/i, "💻"],
  [/trình chiếu|slide|thuyết trình/i, "📑"],
  [/bản đồ|vị trí|định vị/i, "🗺️"],
  [/cảm xúc|tư duy|sáng tạo|ý tưởng/i, "💡"],
  [/trí tuệ nhân tạo|máy học|mô hình|\bai\b|chatbot|học sâu|mạng nơ|neural/i, "🤖"],
];
const DECOR = ["✨","🌟","💫","⭐","🎈","🌈","🔆","💠"];
function lessonEmoji(ls, li){
  const text = (ls.name + " " + (ls.content||""));
  for(const [re, e] of EMOJI_MAP){ if(re.test(text)) return e; }
  return ["💡","🧠","🚀","🌟"][li] || "📘";
}
function capFirst(s){ s = String(s||"").trim(); return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

/* Emoji cho từng ý học (giúp nội dung sinh động, không cần ảnh ngoài) */
const POINT_MAP = [
  [/bật|tắt|khởi động|\bmở\b|đóng/i, "🔌"],
  [/nhận diện|nhận biết|phân biệt|gọi tên|quan sát|tìm hiểu/i, "🔎"],
  [/tạo|\blàm\b|\bvẽ\b|viết|soạn|thiết kế|dựng/i, "✏️"],
  [/lưu|sắp xếp|đặt tên|quản lý|tổ chức/i, "💾"],
  [/an toàn|bảo vệ|riêng tư|mật khẩu|cẩn thận/i, "🛡️"],
  [/kiểm tra|kiểm chứng|so sánh|đánh giá|đúng sai/i, "✅"],
  [/chuột/i, "🖱️"], [/bàn phím|gõ|đánh máy/i, "⌨️"], [/màn hình|cửa sổ/i, "🖥️"],
  [/thư mục|tệp|file/i, "📁"], [/internet|web|mạng|trình duyệt/i, "🌐"],
  [/trò chơi|game/i, "🎮"], [/âm thanh|nghe|nói|giọng/i, "🎤"], [/ảnh|hình|vẽ/i, "🖼️"],
];
function pointEmoji(text, i){
  for(const [re, e] of POINT_MAP){ if(re.test(text)) return e; }
  for(const [re, e] of EMOJI_MAP){ if(re.test(text)) return e; }
  return ["📌","✨","🎯","💡","🔹","🌈"][i % 6];
}

/* Soạn phần thân bài học cho người học (không phải giáo án của coach) */
function buildLessonBody(ls){
  const pts = String(ls.content||"").split(/[,;]|\bvà\b/).map(s=>s.trim()).filter(s=>s.length>1);
  let body = `<p>Trong bài này, chúng mình cùng khám phá về <b>${esc(ls.name.toLowerCase())}</b>.</p>`;
  if(pts.length > 1){
    body += `<div class="secTitle" data-icon="🔍">Em sẽ học được gì?</div>
      <div class="learnGrid">${pts.map((p,i)=>
        `<div class="learnItem" style="animation-delay:${i*70}ms"><span class="liIco">${pointEmoji(p,i)}</span><span class="liTxt">${esc(capFirst(p))}</span></div>`
      ).join("")}</div>`;
  } else {
    body += `<p>${esc(capFirst(ls.content||""))}</p>`;
  }
  const note = (window.LESSON_NOTES && window.LESSON_NOTES[ls.code]) || "";
  if(note){
    body += `<div class="secTitle" data-icon="📖">Nội dung bài học</div>${note}`;
  }
  if(ls.challenge){
    const ch = esc(ls.challenge.replace(/^Thử thách:\s*/,"").replace(/^Mini project:\s*/,""));
    const isProj = /mini project/i.test(ls.challenge);
    body += `<div class="tipBox">${isProj?"🛠️ <b>Dự án nhỏ:</b>":"🏆 <b>Cùng thử thách:</b>"} ${ch}</div>`;
  }
  return body;
}

/* Trắc nghiệm trong bài (10 câu). Dữ liệu ở lesson_quiz.js (window.LESSON_QUIZ). */
function renderLessonQuiz(ls){
  const qs = (window.LESSON_QUIZ && window.LESSON_QUIZ[ls.code]) || [];
  if(!qs.length) return "";
  let h = `<div class="secTitle" data-icon="📝">Luyện tập (${qs.length} câu)</div>
    <div class="lquiz" id="lquiz" data-total="${qs.length}" data-done="0" data-score="0">
      <div class="lqBar"><span class="lqBadge" id="lqScore">Chọn đáp án để tự kiểm tra nhé!</span></div>`;
  qs.forEach((item, qi) => {
    const pairs = shuffle(item.o.map((t, i) => [t, i === item.a]));
    h += `<div class="lq"><div class="lqQ"><b>Câu ${qi+1}.</b> ${esc(item.q)}</div><div class="lqOpts">`;
    pairs.forEach(([t, ok]) => {
      h += `<button class="lqOpt" data-ok="${ok?1:0}" onclick="lqPick(this)"><span class="lqDot"></span><span>${esc(t)}</span></button>`;
    });
    h += `</div></div>`;
  });
  h += `<div class="lqEnd" id="lqEnd"></div></div>`;
  return h;
}
function lqPick(btn){
  const q = btn.closest(".lq");
  if(q.classList.contains("answered")) return;
  q.classList.add("answered");
  const ok = btn.dataset.ok === "1";
  btn.classList.add(ok ? "correct" : "wrong");
  q.querySelectorAll(".lqOpt").forEach(b => {
    b.disabled = true;
    if(b.dataset.ok === "1") b.classList.add("correct");
  });
  const quiz = document.getElementById("lquiz");
  const total = +quiz.dataset.total;
  const score = (+quiz.dataset.score) + (ok ? 1 : 0);
  const done = (+quiz.dataset.done) + 1;
  quiz.dataset.score = score; quiz.dataset.done = done;
  const badge = document.getElementById("lqScore");
  if(badge) badge.textContent = `Đúng ${score}/${done}` + (done < total ? ` · còn ${total-done} câu` : "");
  try{ ok ? sfx.correct() : sfx.wrong(); }catch{}
  if(done === total){
    const pass = Math.round(score / total * 100);
    const tier = pass >= 80 ? "Xuất sắc! 🏆" : pass >= 50 ? "Khá lắm, cố thêm nhé! 💪" : "Ôn lại bài chút nha! 📖";
    const end = document.getElementById("lqEnd");
    if(end) end.innerHTML = `<div class="lqResult">🎉 Hoàn thành: <b>${score}/${total}</b> (${pass}%) — ${tier}</div>`;
    if(pass >= 60){ try{ burst(12); }catch{} }
  }
}

function curriculumStats(){
  const C = window.CURRICULUM && window.CURRICULUM.program;
  if(!C) return {levels:0, modules:0, lessons:0};
  const modules = C.levels.reduce((s,lv)=>s+lv.modules.length, 0);
  const lessons = C.levels.reduce((s,lv)=>s+lv.modules.reduce((a,m)=>a+m.lessons.length,0), 0);
  return {levels:C.levels.length, modules, lessons};
}

function renderCurriculum(){
  const host = document.getElementById("curriculum");
  const data = window.CURRICULUM && window.CURRICULUM.program;
  if(!host) return;
  if(!data){ host.innerHTML = `<div class="pageHead"><h2 class="sectionHead">📚 Bài học</h2><p class="sectionSub">Chưa nạp được dữ liệu lộ trình.</p></div>`; return; }

  _lessonMap = data.levels.map(lv => lv.modules.map(m => m.lessons));
  const st = curriculumStats();

  let html = "";
  /* Đầu trang: tên chương trình + 3 con số */
  html += `<div class="curHero">
      <span class="pill">🗺️ Lộ trình học</span>
      <h2 class="curTitle">${esc(data.name)}</h2>
      <p class="curTagline">${esc(data.tagline)}</p>
      <div class="curNums">
        <div><b>${st.levels}</b><span>level</span></div>
        <div><b>${st.lessons}</b><span>bài học</span></div>
        <div><b>${st.modules}</b><span>module</span></div>
      </div>
      <p class="curDuration">⏳ ${esc(data.duration)}</p>
    </div>`;

  /* Nhịp 1 buổi 90 phút */
  html += `<div class="beatWrap"><h3 class="beatHead">⏱️ Nhịp 1 buổi học 90 phút</h3><div class="beatBar">`;
  SESSION_BEAT.forEach(([name, min], i) => {
    const p = phaseOf(name);
    html += `<div class="beatBlock" style="--bbg:${p.bg};--bfg:${p.fg};animation-delay:${i*80}ms">
        <span class="bStep">Bước ${i+1}</span>
        <span class="bIc">${p.ic}</span>
        <span class="bName">${esc(name)}</span>
        <span class="bMin">${min} phút</span></div>`;
  });
  html += `</div></div>`;

  /* Thanh công cụ: tìm kiếm */
  html += `<div class="curTools">
      <div class="curSearch"><span>🔎</span><input id="curSearchInput" type="search" placeholder="Tìm bài học theo tên hoặc nội dung…" oninput="onCurSearch(this.value)" value="${esc(curSearch)}"></div>
    </div>`;

  /* Thanh nhảy tới level */
  html += `<div class="lvJump">`;
  data.levels.forEach((lv, i) => {
    const opt = lv.optional ? ` <em>(Tùy chọn)</em>` : "";
    html += `<button class="lvChipJump" style="--lc:${LEVEL_COLORS[i]}" onclick="jumpLevel(${i})">${esc(lv.name)}${opt}</button>`;
  });
  html += `</div>`;

  /* Các level */
  html += `<div id="lvList">`;
  data.levels.forEach((lv, li) => { html += renderLevel(lv, li); });
  html += `</div>`;

  host.innerHTML = html;
  host.dataset.rendered = "1";
  if(curSearch) applyCurSearch();
  observeReveal();
}

/* Hiệu ứng: hiện dần khi cuộn tới */
let _revObserver = null;
function observeReveal(){
  const targets = document.querySelectorAll("#curriculum .lvSection, #curriculum .modCard");
  if(!("IntersectionObserver" in window)){ targets.forEach(t => t.classList.add("in")); return; }
  if(_revObserver) _revObserver.disconnect();
  _revObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); _revObserver.unobserve(en.target); } });
  }, {rootMargin:"0px 0px -8% 0px", threshold:0.06});
  targets.forEach(t => { t.classList.add("reveal"); _revObserver.observe(t); });
}

function renderLevel(lv, li){
  const c = LEVEL_COLORS[li], soft = LEVEL_SOFT[li];
  const nLessons = lv.modules.reduce((s,m)=>s+m.lessons.length, 0);
  let h = `<section class="lvSection" id="lv${li}" style="--lc:${c};--lcSoft:${soft}">
    <div class="lvHead">
      <div class="lvBadge">${li+1}</div>
      <div class="lvHeadTxt">
        <div class="lvName">${esc(lv.name)}${lv.optional?` <span class="optTag">Tùy chọn</span>`:""}</div>
        <h3 class="lvTitle">${esc(lv.title)}</h3>
        <div class="lvMeta">🗓️ ${esc(lv.duration)} · 📘 ${lv.sessions} buổi · 📚 ${nLessons} bài · 🧩 ${lv.modules.length} module</div>
      </div>
    </div>`;
  if(lv.graduation_criteria){
    h += `<div class="gradBox">🎯 ${esc(lv.graduation_criteria)}</div>`;
  }
  h += `<div class="modList">`;
  lv.modules.forEach((m, mi) => { h += renderModule(m, li, mi); });
  h += `</div></section>`;
  return h;
}

function renderModule(m, li, mi){
  const hasProj = !!m.module_project;
  let h = `<div class="modCard${hasProj?" hasProj":""}" data-mod="${li}-${mi}" data-code="${esc(m.code)}">
    <button class="modHead" onclick="toggleModule(this)">
      <span class="modArrow">▸</span>
      <span class="modTitle"><b>MODULE ${esc(m.code)}</b> – ${esc(m.name)} <span class="modCount">(${m.sessions} buổi)</span></span>
      ${hasProj?`<span class="projFlag">★ PROJECT</span>`:""}
    </button>
    <div class="modBody">`;

  h += `<div class="lsList">`;
  m.lessons.forEach((ls, lsi) => {
    const em = lessonEmoji(ls, li);
    h += `<div class="lsRow" data-ls="${li}-${mi}-${lsi}" onclick="openPlan(${li},${mi},${lsi})">
        <span class="lsEmoji">${em}</span>
        <span class="lsMain">
          <span class="lsName">${esc(ls.name)}</span>
          <span class="lsDesc">${esc(ls.content)}</span>
        </span>
        <span class="lsGo">Vào bài học ➜</span>
      </div>`;
  });
  h += `</div>`;

  if(hasProj){
    h += `<div class="projCard">★ <b>DỰ ÁN MODULE:</b> ${esc(m.module_project)}</div>`;
  }
  if(m.teacher_recap){
    h += `<div class="teacherRecap"><div class="trHead">📣 Tóm tắt cho bé</div><p><b>Qua module này, con đã học được…</b> ${esc(m.teacher_recap.replace(/^Qua module này, con đã học được:\s*/,""))}</p></div>`;
  }

  h += `</div></div>`;
  return h;
}

function toggleModule(btn){
  const card = btn.closest(".modCard");
  card.classList.toggle("open");
}
function jumpLevel(i){
  const el = document.getElementById("lv" + i);
  if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
}
/* --- Modal BÀI HỌC (người học đọc). Phần giáo án cho coach giấu sau nút ? --- */
function openPlan(li, mi, lsi){
  const lv = window.CURRICULUM.program.levels[li];
  const m = lv.modules[mi];
  const ls = m.lessons[lsi];
  const c = LEVEL_COLORS[li];

  /* Minh hoạ: tranh SVG theo chủ đề (mặc định) + ảnh trong images/<mã>.<ext> nếu có */
  const art = window.LessonArt ? window.LessonArt.svg(ls, c) : "";
  const photo = `<img class="lessonPhoto" alt="" loading="lazy" decoding="async" src="images/${encodeURIComponent(ls.code)}.jpg" data-code="${esc(ls.code)}" data-try="0" onerror="photoFallback(this)">`;

  /* Panel cho giáo viên (ẩn, mở bằng nút ?) */
  let steps = "";
  (ls.plan90 || []).forEach((step, si) => {
    const p = phaseOf(step.phase);
    steps += `<div class="planRow" style="--pc:${p.fg};animation-delay:${si*50}ms">
        <div class="planIco" style="background:${p.bg};color:${p.fg}">${p.ic}</div>
        <div class="planMain"><div class="planPhase" style="color:${p.fg}">${esc(step.phase)}</div>
          <div class="planAct">${esc(step.activity)}</div></div>
      </div>`;
  });
  let coach = "";
  if(m.warmup_ritual) coach += `<div class="coachNote"><b>🔥 Khởi động module:</b> ${esc(m.warmup_ritual)}</div>`;
  if(Array.isArray(m.games_pool) && m.games_pool.length)
    coach += `<div class="coachNote"><b>🎮 Kho trò chơi:</b><ul>${m.games_pool.map(g=>`<li>${esc(g)}</li>`).join("")}</ul></div>`;
  coach += `<div class="secTitle" data-icon="🗺️">Các bước lên lớp (90')</div><div class="planList">${steps}</div>`;

  const lessonHtml = buildLessonBody(ls);
  stopReading();
  _readText = ("Bài " + ls.code + ". " + ls.name + ". " + stripForRead(lessonHtml));

  document.getElementById("lessonBody").innerHTML =
    `<div class="lessonHero" style="--lc:${c}">
       <div class="lessonArt">${art}</div>
       ${photo}
     </div>
     <div class="lessonBar" style="background:linear-gradient(135deg,${c},${c}cc)">
       <div class="lessonBarText"><span class="lhCode">Bài ${esc(ls.code)}</span><h2>${esc(ls.name)}</h2></div>
       <button class="readBtn" id="readBtn" onclick="readLesson()" title="Nghe đọc bài" aria-label="Nghe đọc bài">🔊</button>
       <button class="coachQ" onclick="toggleCoachPanel(this)" title="Gợi ý cho giáo viên" aria-label="Gợi ý cho giáo viên">?</button>
     </div>
     <div class="lContent">
       ${lessonHtml}
       ${renderLessonQuiz(ls)}
       <div class="coachPanel hidden" id="coachPanel">
         <div class="coachPanelHead">🎓 Gợi ý cho giáo viên <span>(bấm dấu ? để ẩn)</span></div>
         ${coach}
       </div>
     </div>`;
  document.getElementById("lessonModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  sfx.pop();
}
function toggleCoachPanel(btn){
  const panel = document.getElementById("coachPanel");
  if(!panel) return;
  const nowHidden = panel.classList.toggle("hidden");
  btn.classList.toggle("on", !nowHidden);
  if(!nowHidden){
    const scroller = document.getElementById("lessonBody");
    const doScroll = () => {
      if(scroller){ scroller.scrollTo({top: panel.offsetTop - 12, behavior:"smooth"}); }
      else { panel.scrollIntoView({behavior:"smooth", block:"start"}); }
    };
    (window.requestAnimationFrame || setTimeout)(doScroll);
  }
}
/* Ảnh trong images/<mã bài>.<ext>: thử jpg→png→webp→jpeg; không có thì bỏ để lộ tranh SVG */
function photoFallback(img){
  const exts = ["jpg","png","webp","jpeg"];
  let t = (parseInt(img.dataset.try, 10) || 0) + 1;
  if(t < exts.length){ img.dataset.try = t; img.src = "images/" + encodeURIComponent(img.dataset.code) + "." + exts[t]; }
  else { img.remove(); }
}

/* --- Tìm kiếm realtime --- */
let _searchTimer = null;
function onCurSearch(v){
  curSearch = v.trim();
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(applyCurSearch, 120);
}
function applyCurSearch(){
  const term = curSearch.toLowerCase();
  const rows = document.querySelectorAll(".lsRow");
  rows.forEach(r => {
    const [li,mi,lsi] = r.dataset.ls.split("-").map(Number);
    const ls = _lessonMap[li][mi][lsi];
    const hay = (ls.name + " " + ls.content + " " + (ls.challenge||"")).toLowerCase();
    const hit = !term || hay.indexOf(term) > -1;
    r.classList.toggle("hidden", !hit);
    // tô đậm
    r.querySelector(".lsName").innerHTML = hi(ls.name, term);
    r.querySelector(".lsDesc").innerHTML = hi(ls.content, term);
  });
  // mở/đóng module theo kết quả, ẩn module rỗng
  document.querySelectorAll(".modCard").forEach(card => {
    const visible = card.querySelectorAll(".lsRow:not(.hidden)").length;
    card.classList.toggle("hidden", term && visible === 0);
    if(term && visible > 0) card.classList.add("open");
  });
  // ẩn level rỗng
  document.querySelectorAll(".lvSection").forEach(sec => {
    const visible = sec.querySelectorAll(".modCard:not(.hidden)").length;
    sec.classList.toggle("dim", term && visible === 0);
  });
}

/* =========================================================
   2c) KIỂM TRA ĐẦU VÀO (thích ứng — gợi ý module phù hợp)
   Dữ liệu ở placement.js (window.PLACEMENT, window.PLACEMENT_CATS)
   ========================================================= */
let plAge = 11, plTotal = 20, plIdx = 0, plStar = 1, plLocked = false;
let plCorrect = 0, plLevelSum = 0, plCurrent = null;
let plUsed = {1:new Set(), 2:new Set(), 3:new Set()};
let plCat = {};

function renderAgeButtons(){
  const box = document.getElementById("ageBtns");
  if(!box) return;
  let h = "";
  for(let a = 6; a <= 15; a++){
    h += `<button class="ageBtn${a===plAge?" on":""}" onclick="setAge(${a})">${a}</button>`;
  }
  box.innerHTML = h;
}
function setAge(a){ plAge = a; renderAgeButtons(); }

let comboMode = false, comboData = {};
function _placementRun(total){
  if(!window.PLACEMENT){ return; }
  runnerReturn = "dauvao";
  plTotal = total;
  plIdx = 0; plStar = 1; plCorrect = 0; plLevelSum = 0; plLocked = false;
  plUsed = {1:new Set(), 2:new Set(), 3:new Set()};
  plCat = {};
  enterRunner(true);
  plUpdateStars(false);
  plRender();
}
function startPlacement(){ comboMode = false; _placementRun(20); }
/* Kiểm tra tổng quát: chạy lần lượt Kiến thức → Gõ phím → Tư duy rồi gợi ý chung */
function startCombo(){ comboMode = true; comboData = {}; _placementRun(12); }
function soloTyping(lang){ comboMode = false; startTyping(lang); }
function soloThinking(){ comboMode = false; startThinking(); }
function plUpdateStars(pulse){
  const box = document.getElementById("starBox");
  box.innerHTML = [1,2,3].map(i => `<span class="${i <= plStar ? "" : "off"}">⭐</span>`).join("");
  if(pulse){ box.classList.remove("pulse"); void box.offsetWidth; box.classList.add("pulse"); }
}
function plDraw(){
  let lv = plStar;
  let pool = window.PLACEMENT[lv].map((_,i) => i).filter(i => !plUsed[lv].has(i));
  if(pool.length === 0){
    const borrow = lv === 1 ? [2,3] : lv === 2 ? [1,3] : [2,1];
    for(const l of borrow){
      const p2 = window.PLACEMENT[l].map((_,i) => i).filter(i => !plUsed[l].has(i));
      if(p2.length){ lv = l; pool = p2; break; }
    }
  }
  if(pool.length === 0){ plUsed[lv] = new Set(); pool = window.PLACEMENT[lv].map((_,i) => i); }
  const pi = pool[Math.floor(Math.random()*pool.length)];
  plUsed[lv].add(pi);
  return prep(Object.assign({}, window.PLACEMENT[lv][pi], {lv}));
}
function plRender(){
  plCurrent = plDraw();
  plLocked = false;
  const q = plCurrent, cat = (window.PLACEMENT_CATS||{})[q.cat] || {name:"", emoji:"❓"};
  document.getElementById("counter").textContent = (plIdx+1) + "/" + plTotal;
  document.getElementById("bar").style.width = (plIdx / plTotal * 100) + "%";
  let inner = `<span class="catChip" style="background:#DBEAFE;color:#1E40AF;border:2px solid #3B82F6">${cat.emoji} ${cat.name}</span>`;
  inner += `<span class="lvChip">${"⭐".repeat(q.lv)} Mức ${q.lv}</span>`;
  inner += `<div class="qTitle">${q.q}</div><div class="opts">`;
  q.opts.forEach((o, i) => {
    inner += `<button class="opt" onclick="plPick(${i}, this)"><span class="key">${KEYS[i]}</span><span>${o}</span></button>`;
  });
  inner += `</div>`;
  inner += `<div class="feedback" id="fb"><div class="hostMini">🧭</div><div class="fbBubble" id="fbText"></div></div>`;
  inner += `<div class="center"><button class="btn next hidden" id="btnNext" onclick="plNext()">Câu tiếp theo ➜</button></div>`;
  document.getElementById("qCard").innerHTML = inner;
  document.getElementById("runner").scrollTo({top:0});
}
function plPick(i, el){
  if(plLocked) return;
  plLocked = true;
  const q = plCurrent;
  const opts = document.querySelectorAll(".opt");
  opts.forEach(o => o.classList.add("locked"));
  const ok = (i === q.a);
  plLevelSum += q.lv;
  plCat[q.cat] = plCat[q.cat] || {c:0, t:0};
  plCat[q.cat].t++;
  const fb = document.getElementById("fb"), fbText = document.getElementById("fbText");
  if(ok){
    el.classList.add("correct");
    opts.forEach((o,j) => { if(j !== i) o.classList.add("dim"); });
    plCorrect++; plCat[q.cat].c++;
    const up = plStar < 3;
    plStar = Math.min(3, plStar + 1);
    fb.classList.add("show","good"); fbText.textContent = up ? `Chính xác! Lên mức ${plStar} ⭐` : "Chính xác! Giữ mức 3 ⭐ 🏆";
    sfx.correct(); burst(5);
  } else {
    el.classList.add("wrong");
    opts[q.a].classList.add("correct");
    opts.forEach((o,j) => { if(j !== i && j !== q.a) o.classList.add("dim"); });
    plStar = Math.max(1, plStar - 1);
    fb.classList.add("show","bad"); fbText.textContent = `Chưa đúng · về mức ${plStar} ⭐`;
    sfx.wrong();
  }
  plUpdateStars(true);
  document.getElementById("btnNext").classList.remove("hidden");
}
function plNext(){ plIdx++; if(plIdx < plTotal){ plRender(); } else { plResult(); } }

function plRecommend(){
  const avg = plLevelSum / plTotal; // ~1..3
  // độ chính xác từng nhóm
  const cats = Object.keys(window.PLACEMENT_CATS);
  const acc = {};
  cats.forEach(c => { const o = plCat[c]; acc[c] = (o && o.t) ? o.c/o.t : null; });
  // nhóm yếu nhất (có làm ≥1 câu)
  const done = cats.filter(c => acc[c] !== null);
  const weak = done.slice().sort((a,b) => acc[a] - acc[b]);
  const weakest = weak[0], weakVal = weakest ? acc[weakest] : 1;

  // Bậc năng lực theo điểm trung bình + tuổi
  const _t = tierFor(avg, plAge);            // dùng chung logic năng lực + tuổi
  const tier = _t.tier, start = _t.start, desc = _t.desc;
  // Ghi chú theo tuổi
  let ageNote = "";
  if(plAge <= 8) ageNote = "Ở tuổi này nên học chậm–chắc, nhiều trò chơi và hình ảnh trực quan.";
  else if(plAge >= 12) ageNote = "Ở tuổi này bé có thể tự khám phá và tiến nhanh hơn.";
  // Gợi ý luyện thêm theo nhóm yếu
  const FOCUS = {
    khainiem:"ôn khái niệm AI (Module 1.3, 2.1–2.4)",
    tuduy:"luyện tư duy & thuật toán (Module 1.5–1.6)",
    gophim:"luyện gõ 10 ngón (Module 1.2)",
    prompt:"luyện viết prompt (Module 1.4, 2.5)",
    antoan:"chú trọng an toàn & kiểm chứng (Module 1.3.6, 2.6–2.7)"
  };
  let focus = (weakest && weakVal < 0.6) ? FOCUS[weakest] : "";
  return {avg, tier, mod:_t.mod, start, desc, ageNote, focus, acc};
}
function plResult(){
  document.getElementById("bar").style.width = "100%";
  document.getElementById("qCard").classList.add("hidden");
  document.getElementById("runnerTop").classList.add("hidden");
  const r = plRecommend();
  const pct = Math.round(plCorrect / plTotal * 100);
  if(pct >= 50) sfx.win();

  if(comboMode){
    comboData.ai = {avg:r.avg, correct:plCorrect, total:plTotal, pct, acc:r.acc, weakFocus:r.focus};
    comboStep("Kiến thức AI", `${plCorrect}/${plTotal} đúng`, "⌨️ Tiếp theo: Gõ phím", "startTyping('vi')");
    return;
  }

  const CATS = window.PLACEMENT_CATS || {};
  let bars = Object.keys(CATS).map(c => {
    const a = r.acc[c];
    const val = a === null ? 0 : Math.round(a*100);
    const shown = a === null ? "–" : val + "%";
    return `<div class="catRow"><span class="catName">${CATS[c].emoji} ${CATS[c].name}</span>
      <span class="catBar"><span style="width:${val}%"></span></span><span class="catPct">${shown}</span></div>`;
  }).join("");

  const el = document.getElementById("resultCard");
  el.innerHTML = `
    <div class="hostMini" style="margin:0 auto;width:66px;height:66px;font-size:36px">🧭</div>
    <h2 style="margin-top:10px">Kết quả kiểm tra đầu vào</h2>
    <div class="plTier">Bậc: <b>${r.tier}</b> · ${plCorrect}/${plTotal} câu đúng (${pct}%) · ${plAge} tuổi</div>
    <div class="plRec">
      <div class="plRecHead">📚 Gợi ý điểm bắt đầu</div>
      <div class="plRecStart">${r.start}</div>
      <p>${r.desc}</p>
      ${r.focus ? `<p>💪 Nên luyện thêm: <b>${r.focus}</b>.</p>` : ""}
      ${r.ageNote ? `<p class="plAge">👶 ${r.ageNote}</p>` : ""}
    </div>
    <div class="secTitle">📊 Năng lực theo nhóm</div>
    <div class="catList">${bars}</div>
    <div class="center">
      <button class="btn" onclick="gotoModule('${r.mod}')">Học module gợi ý 📚</button>
      <button class="btn light" onclick="startPlacement()" style="margin-left:8px">Làm lại 🔄</button>
    </div>`;
  el.classList.remove("hidden");
  document.getElementById("runner").scrollTo({top:0});
  if(pct >= 50) burst(18);
}

/* --- Kiểm tra tổng quát: chuyển bước + kết quả chung --- */
function comboStep(doneLabel, scoreLabel, nextText, nextFn){
  const done = Object.keys(comboData).length; // số phần đã xong
  const el = document.getElementById("resultCard");
  el.innerHTML = `
    <div class="hostMini" style="margin:0 auto;width:60px;height:60px;font-size:32px">✅</div>
    <h2 style="margin-top:8px">Xong phần: ${doneLabel}</h2>
    <div class="plTier">${scoreLabel} · đã xong ${done}/3 phần</div>
    <div class="center"><button class="btn" onclick="${nextFn}">${nextText} ➜</button></div>`;
  el.classList.remove("hidden");
  document.getElementById("runner").scrollTo({top:0});
}
/* Gợi ý điểm bắt đầu theo NĂNG LỰC (avg 1..3) KẾT HỢP TUỔI (age) */
function tierFor(avg, age){
  age = age || plAge;
  const young = age <= 8, older = age >= 12;
  if(avg < 1.5){
    return {tier:"Mới bắt đầu", mod:"1.1", start:"Level 1 · Module 1.1 – Làm quen máy tính",
      desc:"Bé nên khởi động từ nền tảng số: bộ phận máy tính, chuột–bàn phím, thư mục, an toàn." +
        (young ? " Ở tuổi nhỏ, học chậm–chắc và nhiều trò chơi trực quan." : "")};
  }
  if(avg < 2.0){
    return {tier:"Nền tảng", mod:"1.2", start:"Level 1 · Module 1.2–1.3 – Gõ phím & Gặp gỡ AI",
      desc:"Luyện gõ 10 ngón cho vững rồi bước vào làm quen AI."};
  }
  if(avg < 2.5){
    // Khá: bé nhỏ tuổi nên đi đủ Level 1 cho chắc; bé lớn có thể vào phần prompt/tư duy sớm
    return young
      ? {tier:"Khá", mod:"1.3", start:"Level 1 · Module 1.3–1.4 – Gặp gỡ AI & Prompt cơ bản",
         desc:"Bé nắm khá tốt; ở tuổi nhỏ nên đi qua đủ Level 1 cho vững, học nhiều qua trò chơi."}
      : {tier:"Khá", mod:"1.4", start:"Level 1 · Module 1.4–1.6 – Prompt & Tư duy thuật toán",
         desc:"Tập trung viết prompt và tư duy phân rã, flowchart."};
  }
  // Vững: chỉ nhảy Level 2 khi ĐỦ TUỔI; bé nhỏ giỏi vẫn nên xây nền Level 1 (học nhanh)
  if(older) return {tier:"Vững", mod:"2.1", start:"Level 2 – Hiểu AI & Kiểm chứng",
    desc:"Bé đủ vững và đủ tuổi — có thể vào Level 2 (AI học từ dữ liệu, kiểm chứng, prompt có phương pháp)."};
  if(age >= 10) return {tier:"Vững", mod:"1.6", start:"Level 1 · Module 1.6–1.7 rồi sang Level 2",
    desc:"Rất tốt! Hoàn thành nhanh cuối Level 1 (thuật toán, Scratch) rồi tiến lên Level 2."};
  return {tier:"Vững", mod:"1.5", start:"Level 1 – học nhanh, chú trọng Tư duy & Scratch (Module 1.5–1.7)",
    desc:"Bé giỏi nhưng còn nhỏ — nên hoàn thành Level 1 để xây nền chắc, có thể học với nhịp nhanh hơn."};
}
/* Nhảy tới một module cụ thể trong trang Bài học và làm nổi bật nó */
function gotoModule(code){
  document.getElementById("runner").classList.add("hidden");
  document.body.style.overflow = "";
  go("baihoc");
  let tries = 0;
  (function wait(){
    const card = code && document.querySelector('.modCard[data-code="' + code + '"]');
    if(card){
      card.classList.add("open", "flash");
      card.scrollIntoView({behavior:"smooth", block:"center"});
      setTimeout(() => card.classList.remove("flash"), 2400);
    } else if(tries++ < 50){ setTimeout(wait, 150); }
  })();
}
function comboResult(){
  document.getElementById("bar").style.width = "100%";
  document.getElementById("qCard").classList.add("hidden");
  document.getElementById("runnerTop").classList.add("hidden");
  const ai = comboData.ai || {avg:1, correct:0, total:12, pct:0};
  const ty = comboData.typing || {wpm:0, acc:0};
  const th = comboData.thinking || {score:0, n:8};
  const t = tierFor(ai.avg || 1, plAge);
  // Gợi ý luyện thêm
  const focuses = [];
  if((ty.wpm||0) < 12 || (ty.acc||100) < 80) focuses.push("luyện gõ 10 ngón (Module 1.2)");
  if(th.n && (th.score/th.n) < 0.5) focuses.push("luyện tư duy & thuật toán (Module 1.5–1.6)");
  if(ai.weakFocus) focuses.push(ai.weakFocus);
  const focusHtml = focuses.length ? `<p>💪 Nên luyện thêm: <b>${focuses.join("; ")}</b>.</p>` : "";
  let ageNote = "";
  if(plAge <= 8) ageNote = "Ở tuổi này nên học chậm–chắc, nhiều trò chơi và hình ảnh trực quan.";
  else if(plAge >= 12) ageNote = "Ở tuổi này bé có thể tự khám phá và tiến nhanh hơn.";
  const ageHtml = ageNote ? `<p class="plAge">👶 ${ageNote}</p>` : "";
  const thPct = th.n ? Math.round(th.score/th.n*100) : 0;
  if(true){ sfx.win(); burst(18); }
  const el = document.getElementById("resultCard");
  el.innerHTML = `
    <div class="hostMini" style="margin:0 auto;width:66px;height:66px;font-size:36px">🎯</div>
    <h2 style="margin-top:10px">Kết quả kiểm tra tổng quát</h2>
    <div class="plTier">Bậc năng lực: <b>${t.tier}</b> · ${plAge} tuổi</div>
    <div class="comboStats">
      <div class="csTile"><span class="csIco">🧠</span><b>${ai.correct}/${ai.total}</b><span>Kiến thức AI</span></div>
      <div class="csTile"><span class="csIco">⌨️</span><b>${ty.wpm} WPM</b><span>Gõ · ${ty.acc}%</span></div>
      <div class="csTile"><span class="csIco">🧩</span><b>${th.score}/${th.n}</b><span>Tư duy · ${thPct}%</span></div>
    </div>
    <div class="plRec">
      <div class="plRecHead">📚 Gợi ý điểm bắt đầu</div>
      <div class="plRecStart">${t.start}</div>
      <p>${t.desc}</p>
      ${focusHtml}
      ${ageHtml}
    </div>
    <div class="center">
      <button class="btn" onclick="gotoModule('${t.mod}')">Học module gợi ý 📚</button>
      <button class="btn light" onclick="startCombo()" style="margin-left:8px">Làm lại 🔄</button>
    </div>`;
  el.classList.remove("hidden");
  document.getElementById("runner").scrollTo({top:0});
}

/* =========================================================
   2d) TEST GÕ PHÍM (đo WPM & độ chính xác)
   ========================================================= */
const TY_LIMIT = 120; // giây — gõ trong 2 phút
const TY_MIN_CHARS = 650; // độ dài tối thiểu của đoạn văn để luyện
let tyText = "", tyStart = 0, tyDone = false, tyLang = "vi", tyTimer = null;
function _fmt(s){ s = Math.max(0, Math.round(s)); return Math.floor(s/60) + ":" + String(s%60).padStart(2,"0"); }
function _tyClear(){ if(tyTimer){ clearInterval(tyTimer); tyTimer = null; } }
/* Ghép ngẫu nhiên nhiều câu thành 1 đoạn văn dài để luyện gõ */
function buildTypingPassage(pool){
  if(!pool || !pool.length) return "";
  let bag = shuffle(pool), out = [], len = 0, i = 0;
  while(len < TY_MIN_CHARS){
    if(i >= bag.length){ bag = shuffle(pool); i = 0; }   // hết thì trộn lại (đề phòng kho ngắn)
    const s = bag[i++];
    out.push(s); len += s.length + 1;
  }
  return out.join(" ");
}
function startTyping(lang){
  if(!window.TYPING_TEXTS) return;
  tyLang = (lang && window.TYPING_TEXTS[lang]) ? lang : "vi";
  const info = (window.TYPING_LANGS || {})[tyLang] || {name:"", flag:"⌨️"};
  runnerReturn = "dauvao";
  tyText = buildTypingPassage(window.TYPING_TEXTS[tyLang]);
  tyStart = 0; tyDone = false; _tyClear();
  document.getElementById("runner").classList.remove("hidden");
  document.getElementById("runnerTop").classList.add("hidden");
  document.getElementById("resultCard").classList.add("hidden");
  document.getElementById("qCard").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  const chars = [...tyText].map((ch,i) => `<span data-i="${i}">${ch === " " ? "&nbsp;" : esc(ch)}</span>`).join("");
  document.getElementById("qCard").innerHTML =
    `<div class="secTitle" data-icon="⌨️">Test gõ phím · ${info.flag} ${esc(info.name)}</div>
     <p class="muted">Gõ lại đoạn văn dưới đây trong <b>2 phút</b>. Đồng hồ bắt đầu khi em gõ chữ đầu tiên; hết giờ sẽ tự chấm.</p>
     <div class="tyTarget" id="tyTarget">${chars}</div>
     <textarea class="tyInput" id="tyInput" rows="4" placeholder="Gõ ở đây…" oninput="tyCheck()" autocomplete="off" autocorrect="off" spellcheck="false"></textarea>
     <div class="tyStats"><span>⚡ <b id="tyWpm">0</b> WPM</span><span>🎯 <b id="tyAcc">100</b>%</span><span>⏱️ <b id="tyRemain">${_fmt(TY_LIMIT)}</b></span></div>
     <div class="tyEnd" id="tyEnd"></div>
     <div class="center">
       <button class="btn" onclick="tyFinishNow()">Nộp bài ✅</button>
       <button class="btn light" onclick="startTyping('${tyLang}')" style="margin-left:8px">Đổi đoạn 🔄</button>
       <button class="btn light" onclick="exitRunner()" style="margin-left:8px">Thoát</button>
     </div>`;
  const inp = document.getElementById("tyInput"); if(inp) inp.focus();
  document.getElementById("runner").scrollTo({top:0});
}
function _tyPaint(val){
  const spans = document.querySelectorAll("#tyTarget span");
  spans.forEach((s, i) => {
    s.classList.remove("ok","bad","cur");
    if(i < val.length){ if(val[i] === tyText[i]) s.classList.add("ok"); else s.classList.add("bad"); }
    else if(i === val.length) s.classList.add("cur");
  });
}
function _tyStats(val, elapsed){
  const correct = document.querySelectorAll("#tyTarget span.ok").length;
  const wpm = elapsed > 0 ? Math.round((val.length / 5) / (elapsed / 60)) : 0;
  const acc = val.length ? Math.round(correct / val.length * 100) : 100;
  setText("tyWpm", wpm); setText("tyAcc", acc);
  const rem = document.getElementById("tyRemain"); if(rem) rem.textContent = _fmt(TY_LIMIT - elapsed);
  return {wpm, acc, correct};
}
function tyCheck(){
  if(tyDone) return;
  const val = document.getElementById("tyInput").value;
  if(!tyStart && val.length > 0){ tyStart = Date.now(); _tyClear(); tyTimer = setInterval(tyTick, 250); }
  _tyPaint(val);
  const elapsed = tyStart ? (Date.now() - tyStart) / 1000 : 0;
  _tyStats(val, elapsed);
  if(val.length >= tyText.length){ tyFinish(); }
}
function tyTick(){
  if(tyDone){ _tyClear(); return; }
  const val = (document.getElementById("tyInput") || {}).value || "";
  const elapsed = tyStart ? (Date.now() - tyStart) / 1000 : 0;
  _tyStats(val, elapsed);
  if(elapsed >= TY_LIMIT) tyFinish();
}
function tyFinishNow(){ tyFinish(); }
function tyFinish(){
  if(tyDone) return;
  tyDone = true; _tyClear();
  const inp = document.getElementById("tyInput");
  const val = (inp || {}).value || "";
  if(inp) inp.disabled = true;
  const elapsed = tyStart ? (Date.now() - tyStart) / 1000 : 0;
  const st = _tyStats(val, elapsed || 0.001);
  tyResult(st.wpm, st.acc);
}
function tyResult(wpm, acc){
  if(comboMode){
    comboData.typing = {wpm, acc};
    sfx.win();
    document.getElementById("tyEnd").innerHTML =
      `<div class="lqResult">⌨️ <b>${wpm} WPM</b> · độ chính xác <b>${acc}%</b>
        <div class="center" style="margin-top:10px"><button class="btn" onclick="startThinking()">🧩 Tiếp theo: Tư duy ➜</button></div></div>`;
    return;
  }
  let rate, note;
  if(acc < 80){ rate = "Cần chính xác hơn 🎯"; note = "Hãy gõ chậm và đúng trước, tốc độ sẽ tự tăng. Bắt đầu từ <b>Module 1.2 – Gõ phím 10 ngón</b>."; }
  else if(wpm < 12){ rate = "Cần luyện thêm 💪"; note = "Nên bắt đầu từ <b>Module 1.2 – Gõ phím 10 ngón</b> để gõ nhanh và không mỏi."; }
  else if(wpm < 22){ rate = "Khá tốt 👍"; note = "Tiếp tục luyện ở <b>Module 1.2</b> để tăng tốc độ nhé."; }
  else { rate = "Rất tốt! 🏆"; note = "Kỹ năng gõ của em đã ổn — có thể tập trung sang các kỹ năng khác."; }
  sfx.win(); burst(12);
  document.getElementById("tyEnd").innerHTML =
    `<div class="lqResult">⌨️ <b>${wpm} WPM</b> · độ chính xác <b>${acc}%</b> — ${rate}<br><span style="font-weight:600">${note}</span>
      <div class="center" style="margin-top:10px"><button class="btn" onclick="gotoModule('1.2')">Luyện gõ phím ⌨️</button></div></div>`;
}

/* =========================================================
   2e) TEST TƯ DUY (câu đố logic)
   ========================================================= */
let thList = [], thIdx = 0, thScore = 0, thLocked = false, thCur = null;
function startThinking(){
  if(!window.THINKING) return;
  runnerReturn = "dauvao";
  thList = shuffle(window.THINKING).slice(0, 8).map(prep);
  thIdx = 0; thScore = 0; thLocked = false;
  document.getElementById("runner").classList.remove("hidden");
  document.getElementById("runnerTop").classList.remove("hidden");
  document.getElementById("starBox").classList.add("hidden");
  document.getElementById("resultCard").classList.add("hidden");
  document.getElementById("qCard").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  thRender();
}
function thRender(){
  thCur = thList[thIdx];
  thLocked = false;
  document.getElementById("counter").textContent = (thIdx+1) + "/" + thList.length;
  document.getElementById("bar").style.width = (thIdx / thList.length * 100) + "%";
  let inner = `<span class="catChip" style="background:#EDE9FE;color:#5B21B6;border:2px solid #7C3AED">🧩 Tư duy logic</span>`;
  inner += `<div class="qTitle">${thCur.q}</div><div class="opts">`;
  thCur.opts.forEach((o, i) => {
    inner += `<button class="opt" onclick="thPick(${i}, this)"><span class="key">${KEYS[i]}</span><span>${o}</span></button>`;
  });
  inner += `</div><div class="feedback" id="fb"><div class="hostMini">🧩</div><div class="fbBubble" id="fbText"></div></div>`;
  inner += `<div class="center"><button class="btn next hidden" id="btnNext" onclick="thNext()">Câu tiếp theo ➜</button></div>`;
  document.getElementById("qCard").innerHTML = inner;
  document.getElementById("runner").scrollTo({top:0});
}
function thPick(i, el){
  if(thLocked) return; thLocked = true;
  const q = thCur, opts = document.querySelectorAll(".opt");
  opts.forEach(o => o.classList.add("locked"));
  const ok = (i === q.a);
  const fb = document.getElementById("fb"), fbText = document.getElementById("fbText");
  if(ok){
    el.classList.add("correct"); opts.forEach((o,j)=>{ if(j!==i) o.classList.add("dim"); });
    thScore++; fb.classList.add("show","good"); fbText.textContent = rand(PRAISE); sfx.correct(); burst(4);
  } else {
    el.classList.add("wrong"); opts[q.a].classList.add("correct");
    opts.forEach((o,j)=>{ if(j!==i && j!==q.a) o.classList.add("dim"); });
    fb.classList.add("show","bad"); fbText.textContent = "Chưa đúng · Đáp án: " + q.opts[q.a]; sfx.wrong();
  }
  document.getElementById("btnNext").classList.remove("hidden");
}
function thNext(){ thIdx++; if(thIdx < thList.length){ thRender(); } else { thResult(); } }
function thResult(){
  document.getElementById("bar").style.width = "100%";
  document.getElementById("qCard").classList.add("hidden");
  document.getElementById("runnerTop").classList.add("hidden");
  if(comboMode){
    comboData.thinking = {score:thScore, n:thList.length};
    comboResult();
    return;
  }
  const n = thList.length, pct = Math.round(thScore/n*100);
  let rate, note;
  if(thScore <= n*0.4){ rate = "Nên luyện tư duy 💪"; note = "Bắt đầu từ <b>Module 1.5 – Tư duy phân rã</b> và <b>1.6 – Thuật toán & Flowchart</b>."; }
  else if(thScore <= n*0.75){ rate = "Khá tốt 👍"; note = "Tư duy của em khá ổn — luyện thêm ở <b>Module 1.5–1.6</b>."; }
  else { rate = "Tư duy tốt! 🏆"; note = "Em có tư duy logic tốt — có thể học nhanh phần thuật toán & lập trình."; }
  if(pct >= 50){ sfx.win(); burst(16); }
  const el = document.getElementById("resultCard");
  el.innerHTML = `
    <div class="hostMini" style="margin:0 auto;width:66px;height:66px;font-size:36px">🧩</div>
    <h2 style="margin-top:10px">Kết quả test tư duy</h2>
    <div class="plTier"><b>${thScore}/${n}</b> câu đúng (${pct}%) — ${rate}</div>
    <div class="plRec"><p>${note}</p></div>
    <div class="center">
      <button class="btn" onclick="gotoModule('1.5')">Luyện tư duy 🧩</button>
      <button class="btn light" onclick="startThinking()" style="margin-left:8px">Làm lại 🔄</button>
    </div>`;
  el.classList.remove("hidden");
  document.getElementById("runner").scrollTo({top:0});
}

/* =========================================================
   3) KHỞI ĐỘNG
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderAgeButtons();
  go((location.hash || "#home").slice(1)); // nếu mở thẳng #baihoc, go() sẽ tự nạp dữ liệu
  window.scrollTo(0, 0);
  // Nạp trước dữ liệu bài học lúc máy rảnh → lần mở đầu tiên mượt hơn (bỏ qua nếu mạng chậm / tiết kiệm dữ liệu)
  const idle = window.requestIdleCallback || (f => setTimeout(f, 1800));
  idle(() => {
    const c = navigator.connection;
    if(c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ""))) return;
    loadCurriculumData().catch(() => {});
  });
});
