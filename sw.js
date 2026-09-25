// Service worker minimal : cache-first pour le shell et les assets statiques.
const CACHE = "audit-normes-v16";
const ASSETS = ["./", "./index.html", "./css/styles.css", "./manifest.json", "./ads.txt",
  "./js/app.js", "./js/store.js", "./js/views.js", "./js/ads.js", "./js/billing.js",
  "./js/export.js", "./js/data/index.js", "./js/data/meta.js", "./js/data/dom2.js",
  "./js/data/dom3.js", "./js/data/dom4.js", "./js/data/dom5.js", "./js/data/glossary.js",
  "./vendor/jspdf.umd.min.js", "./vendor/xlsx.full.min.js",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./icons/icon-maskable-192.png", "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(e.request, copy));
    return res;
  }).catch(() => caches.match("./index.html"))));
});
