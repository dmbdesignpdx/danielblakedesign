"use strict"

const
name = "daniel-blake-jpg-v2",
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
   "/img/work-sm.jpg",
   "/img/work-lg.jpg",
   "/img/work-xl.jpg",
   "/img/work-fl.jpg",
   "/img/flexr/flexr-1-sm.jpg",
   "/img/flexr/flexr-1-lg.jpg",
   "/img/flexr/flexr-1-xl.jpg",
   "/img/flexr/flexr-1-fl.jpg",
   "/img/flexr/flexr-2-sm.jpg",
   "/img/flexr/flexr-2-lg.jpg",
   "/img/flexr/flexr-2-xl.jpg",
   "/img/flexr/flexr-2-fl.jpg",
   "/img/flexr/flexr-3-sm.jpg",
   "/img/flexr/flexr-3-lg.jpg",
   "/img/flexr/flexr-3-xl.jpg",
   "/img/flexr/flexr-3-fl.jpg",
   "/img/leadshub/leadshub-1-sm.jpg",
   "/img/leadshub/leadshub-1-lg.jpg",
   "/img/leadshub/leadshub-1-xl.jpg",
   "/img/leadshub/leadshub-1-fl.jpg",
   "/img/leadshub/leadshub-2-sm.jpg",
   "/img/leadshub/leadshub-2-lg.jpg",
   "/img/leadshub/leadshub-2-xl.jpg",
   "/img/leadshub/leadshub-2-fl.jpg",
   "/img/leadshub/leadshub-3-sm.jpg",
   "/img/leadshub/leadshub-3-lg.jpg",
   "/img/leadshub/leadshub-3-xl.jpg",
   "/img/leadshub/leadshub-3-fl.jpg",
   "/img/turntable/turntable-1-sm.jpg",
   "/img/turntable/turntable-1-lg.jpg",
   "/img/turntable/turntable-1-xl.jpg",
   "/img/turntable/turntable-1-fl.jpg",
   "/img/turntable/turntable-2-sm.jpg",
   "/img/turntable/turntable-2-lg.jpg",
   "/img/turntable/turntable-2-xl.jpg",
   "/img/turntable/turntable-2-fl.jpg",
   "/img/turntable/turntable-3-sm.jpg",
   "/img/turntable/turntable-3-lg.jpg",
   "/img/turntable/turntable-3-xl.jpg",
   "/img/turntable/turntable-3-fl.jpg",
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
