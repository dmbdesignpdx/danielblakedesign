"use strict"

const
name = "daniel-blake-v2",
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
   "/fonts/montserrat-900.woff",
   "/img/icons.svg",
   "/img/favicon.svg",
   "/img/favicon-96x96.png",
   "/img/favicon-192x192.png",
   "/img/android-chrome-192x192.png",
   "/img/pinned-tab.svg",
   "/img/work-fl.webp",
   "/img/work-sm.webp",
   "/img/work-lg.webp",
   "/img/work-xl.webp",
   "/img/turntable/turntable-1-fl.webp",
   "/img/turntable/turntable-1-sm.webp",
   "/img/turntable/turntable-1-lg.webp",
   "/img/turntable/turntable-1-xl.webp",
   "/img/turntable/turntable-2-fl.webp",
   "/img/turntable/turntable-2-sm.webp",
   "/img/turntable/turntable-2-lg.webp",
   "/img/turntable/turntable-2-xl.webp",
   "/img/turntable/turntable-3-fl.webp",
   "/img/turntable/turntable-3-sm.webp",
   "/img/turntable/turntable-3-lg.webp",
   "/img/turntable/turntable-3-xl.webp",
   "/img/flexr/flexr-1-fl.webp",
   "/img/flexr/flexr-1-sm.webp",
   "/img/flexr/flexr-1-lg.webp",
   "/img/flexr/flexr-1-xl.webp",
   "/img/flexr/flexr-2-fl.webp",
   "/img/flexr/flexr-2-sm.webp",
   "/img/flexr/flexr-2-lg.webp",
   "/img/flexr/flexr-2-xl.webp",
   "/img/flexr/flexr-3-fl.webp",
   "/img/flexr/flexr-3-sm.webp",
   "/img/flexr/flexr-3-lg.webp",
   "/img/flexr/flexr-3-xl.webp",
   "/img/leadshub/leadshub-1-fl.webp",
   "/img/leadshub/leadshub-1-sm.webp",
   "/img/leadshub/leadshub-1-lg.webp",
   "/img/leadshub/leadshub-1-xl.webp",
   "/img/leadshub/leadshub-2-fl.webp",
   "/img/leadshub/leadshub-2-sm.webp",
   "/img/leadshub/leadshub-2-lg.webp",
   "/img/leadshub/leadshub-2-xl.webp",
   "/img/leadshub/leadshub-3-fl.webp",
   "/img/leadshub/leadshub-3-sm.webp",
   "/img/leadshub/leadshub-3-lg.webp",
   "/img/leadshub/leadshub-3-xl.webp",
]


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
         return response || fetch(request)
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
