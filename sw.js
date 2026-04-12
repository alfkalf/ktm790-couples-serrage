const CACHE = 'ktm890-v4';
const FILES = [
  './couples_serrage_ktm890.html',
  './manifest.json',
  './eclates_img/page_06.png',
  './eclates_img/page_07.png',
  './eclates_img/page_08.png',
  './eclates_img/page_09.png',
  './eclates_img/page_10.png',
  './eclates_img/page_11.png',
  './eclates_img/page_12.png',
  './eclates_img/page_13.png',
  './eclates_img/page_14.png',
  './eclates_img/page_15.png',
  './eclates_img/page_16.png',
  './eclates_img/page_17.png',
  './eclates_img/page_18.png',
  './eclates_img/page_19.png',
  './eclates_img/page_20.png',
  './eclates_img/page_21.png',
  './eclates_img/page_22.png',
  './eclates_img/page_23.png',
  './eclates_img/page_24.png',
  './eclates_img/page_25.png',
  './eclates_img/page_26.png',
  './eclates_img/page_27.png',
  './eclates_img/page_28.png',
  './eclates_img/page_29.png',
  './eclates_img/page_30.png',
  './eclates_img/page_31.png',
  './eclates_img/page_32.png',
  './eclates_img/page_33.png',
  './eclates_img/page_34.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
