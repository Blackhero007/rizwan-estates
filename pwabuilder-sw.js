// PWABuilder default service worker
const CACHE = "pwabuilder-precache";
const precacheFiles = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(precacheFiles);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
