const cacheName = 'quick-speech-v1';
const assets = [
  '/',
  '/index.html',
  '/auto.html',
  '/bar.html',
  '/barvy.html',
  '/cas.html',
  '/crypto.html',
  '/dane_a_dyska.html',
  '/data.html',
  '/doprava.html',
  '/drogy.html',
  '/finance.html',
  '/foto.html',
  '/gaming.html',
  '/gastro.html',
  '/gym.html',
  '/hotel.html',
  '/it-tech.html',
  '/kempovani.html',
  '/komunita.html',
  '/letiste.html',
  '/nakupovani.html',
  '/nouzove_situace.html',
  '/policie.html',
  '/rande.html',
  '/zivel.html',
  '/manifest.json',
  '/icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});