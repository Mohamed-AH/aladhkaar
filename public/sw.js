/* Offline support and fast repeat visits. */
const VERSION = "adhkar-v19";
const V = "?v=19"; // keep in step with the ?v= numbers in make.html
// Saved on install. The PDF and image libraries are left out: they are saved the first time they are used.
const SHELL = ["./", "index.html", "make", "landing.css", "landing.js", "data/quotes.json", "make.html", "data/adhkar.json",
  "styles.css" + V, "design.js" + V, "export.js" + V, "i18n-extra.js" + V, "app.js" + V, "vendor/Sortable.min.js", "fonts/fonts.css",
  "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const put = (req, res) => {
  if (res && res.ok && res.type === "basic") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
  return res;
};

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith("/api/")) return; // never cache the contact form or inbox
  const p = url.pathname;
  if (p.startsWith("/fonts/") || p.startsWith("/vendor/") || p.startsWith("/icons/")) {
    // These files never change: answer from the cache straight away.
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => put(req, res))));
  } else if (url.searchParams.has("v")) {
    // Versioned code and styles: answer from the cache at once and refresh it in the background.
    const net = fetch(req).then(res => put(req, res));
    e.respondWith(caches.match(req).then(hit => hit || net));
    e.waitUntil(net.catch(() => {}));
  } else {
    // Pages and data: the network first so updates show, the saved copy if offline or very slow.
    const net = fetch(req).then(res => put(req, res));
    const slow = new Promise(ok => setTimeout(ok, 4000)).then(() => caches.match(req, { ignoreSearch: true }));
    e.respondWith(Promise.race([net.catch(() => caches.match(req, { ignoreSearch: true })), slow.then(hit => hit || net)]));
    e.waitUntil(net.catch(() => {}));
  }
});
