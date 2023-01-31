const cacheName = 'cache-v2.3'

const staticAssets = [
  '/',
  '/index.html',
  '/asian-cuisine.html',
  '/thai-cuisine.html',
  '/manifest.json',
  '/service-worker.js',
  '/styles/base/reset.css',
  '/styles/base/variables.css',
  '/styles/base/global.css',
  '/styles/components/header.css',
  '/styles/components/main.css',
  '/styles/components/navigation.css',
  '/styles/components/dishes.css',
  '/styles/components/footer.css',
  '/styles/index.css',
  '/styles/style.css',
  '/scripts/app.js',
  '/scripts/map.js',
  '/favicon.ico',
  '/favicon.svg',
  '/favicon/favicon-64.png',
  '/favicon/favicon-180.png',
  '/favicon/favicon-192.png',
  '/favicon/favicon-512.png',
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(staticAssets)
  }))
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request)
  }))
})

self.addEventListener('activate', event => {
  const currentCacheName = [cacheName]
  event.waitUntil(caches.keys()
    .then(cacheNames => {
      return cacheNames.filter(name => !currentCacheName.includes(name))
    })
    .then(cacheNames => {
      return Promise.all(cacheNames.map(name => caches.delete(name)))
    })
  )
})
