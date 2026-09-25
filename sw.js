/* =========================================================
   sw.js — Service Worker cho "Học AI Vui" (PWA)
   - Điều hướng (HTML): network-first → offline dùng bản cache.
   - Tài nguyên tĩnh cùng origin: stale-while-revalidate (mở tức thì).
   - Google Fonts: cache-first (SWR).
   Đổi CACHE_VER mỗi khi cần buộc làm mới toàn bộ cache.
   ========================================================= */
const CACHE_VER = "v3";
const CACHE = "hocaivui-" + CACHE_VER;

/* App shell — tiền nạp để chạy được offline ngay lần đầu. */
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./art.js",
  "./placement.js",
  "./exercises.js",
  "./roleplay.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./favicon-32.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(PRECACHE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const isFont = (u) => /fonts\.(googleapis|gstatic)\.com/.test(u);

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Điều hướng trang → network-first, offline fallback về index.html đã cache.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Google Fonts → cache-first (SWR).
  if (isFont(url.href)) {
    e.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Ảnh cùng origin → NETWORK-FIRST: online luôn lấy ảnh mới (tránh kẹt bản cũ khi
  // cập nhật ảnh mà giữ nguyên tên file); offline mới dùng bản đã cache.
  if (url.origin === self.location.origin && /\.(png|jpe?g|webp|gif|svg)$/i.test(url.pathname)) {
    e.respondWith(networkFirst(req));
    return;
  }

  // Cùng origin còn lại (js/css/webmanifest — đã version bằng ?v) → stale-while-revalidate.
  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req));
    return;
  }
  // Khác origin còn lại: để trình duyệt tự xử lý.
});

function networkFirst(req) {
  return caches.open(CACHE).then((cache) =>
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && (res.type === "basic" || res.type === "cors")) {
          cache.put(req, res.clone()).catch(() => {});
        }
        return res;
      })
      .catch(() => cache.match(req))
  );
}

function staleWhileRevalidate(req) {
  return caches.open(CACHE).then((cache) =>
    cache.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && (res.type === "basic" || res.type === "cors")) {
            cache.put(req, res.clone()).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
}
