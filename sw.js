self.addEventListener('install', event => {
    console.log('The Service Worker has been registered.')
    event.waitUntil(
      caches.open('cache').then(cache => cache.addAll([
        '/',
        '/apple-icon-180.png',
        '/index.css',
        '/index.html',
        '/index.js',
        '/manifest-icon-192.maskable.png',
        '/manifest-icon-512.maskable.png',
        '/manifest.webmanifest'
      ]))
    )
  })

  self.addEventListener('fetch', event => {
    console.log(`The client is requesting ${event.request.url}...`)
    event.respondWith(
      fetch(event.request)
        .then(response => {
          console.log(`${event.request.url} could be fetched.`)
          return caches.open('cache').then(cache => {
            return cache.match(event.request)
              .then(response => {
                console.log(`Replacing ${event.request.url} in the cache.`)
                cache.put(event.request, response.clone())
                return response
              })
              .catch(() => {
                console.log(`${event.request.url} should not be in the cache.`)
                return response
              })
          })
        })
        .catch(() => {
          console.log(`${event.request.url} could not be fetched.`)
          return caches.open('cache').then(cache => {
            return cache.match(event.request)
              .then(response => {
                console.log(`${event.request.url} was found in the cache.`)
                return response
              })
              .catch(() => {
                console.log(`${event.request.url} was not found in the cache.`)
              })
          })
        })
    )
  })
