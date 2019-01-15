"use strict"

// Unregisters service worker and deletes its cache for danielblake.design


self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  
  self.registration.unregister()
    .then(() => self.clients.matchAll())
    .then(clients => {
      clients.forEach(client => client.navigate(client.url))
    })

    const keep = ["remove"]
 
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
