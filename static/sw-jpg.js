const
name = "daniel-blake-jpg-v1",
assets = [
   "/",
   "/flexr/",
   "/turntable/",
   "leadshub/",
   "/favicon.ico",
   "/apple-touch-icon.png",
   "/css/master.min.css",
   "/dist/main.min.js",
   "/manifest.json",
   "/img/icons.svg",
   "/img/favicon.svg",
   "/img/favicon-96x96.png",
   "/img/favicon-192x192.png",
   "/img/android-chrome-192x192.png",
   "/img/pinned-tab.svg",
   "/img/work-md.jpg",
   "/img/work-sm.jpg",
   "/img/work-xs.jpg",
   "/img/flexr/flexr-1-md.jpg",
   "/img/flexr/flexr-1-sm.jpg",
   "/img/flexr/flexr-1-xs.jpg",
   "/img/flexr/flexr-2-md.jpg",
   "/img/flexr/flexr-2-sm.jpg",
   "/img/flexr/flexr-2-xs.jpg",
   "/img/flexr/flexr-3-md.jpg",
   "/img/flexr/flexr-3-sm.jpg",
   "/img/flexr/flexr-3-xs.jpg",
   "/img/leadshub/leadshub-1-md.jpg",
   "/img/leadshub/leadshub-1-sm.jpg",
   "/img/leadshub/leadshub-1-xs.jpg",
   "/img/leadshub/leadshub-2-md.jpg",
   "/img/leadshub/leadshub-2-sm.jpg",
   "/img/leadshub/leadshub-2-xs.jpg",
   "/img/leadshub/leadshub-3-md.jpg",
   "/img/leadshub/leadshub-3-sm.jpg",
   "/img/leadshub/leadshub-3-xs.jpg",
   "/img/turntable/turntable-1-md.jpg",
   "/img/turntable/turntable-1-sm.jpg",
   "/img/turntable/turntable-1-xs.jpg",
   "/img/turntable/turntable-2-md.jpg",
   "/img/turntable/turntable-2-sm.jpg",
   "/img/turntable/turntable-2-xs.jpg",
   "/img/turntable/turntable-3-md.jpg",
   "/img/turntable/turntable-3-sm.jpg",
   "/img/turntable/turntable-3-xs.jpg",
]


function autoCache(request) {
   fetch(request).then(response => {
      return caches.open(name).then(cache => {
         cache.put(request.url, response.clone())
   
         return response
      })
   })
}


self.addEventListener("install", event => {
   self.skipWaiting()

   event.waitUntil(
      caches.open(name).then(cache => {
         return cache.addAll(assets)
      })
   )
})

self.addEventListener("fetch", event => {
   const request = event.request

   event.respondWith(
      caches.match(request).then(response => {
         return response || autoCache(request)
      })
   )
})

self.addEventListener('activate', event => {
   const keep = [name]
 
   event.waitUntil(
      caches.keys().then(keys => {
         return Promise.all(
            keys.map(key => {
               if (!keep.includes(key)) {
                  return caches.delete(key)
               }
            })
         )
      })
   )
})
