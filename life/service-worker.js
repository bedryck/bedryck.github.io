/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/index.html',
                '/js/app.289c4a4f.js',
                '/js/chunk-vendors.42ac218e.js',
                '/js/chunk-vendors.42ac218e.js.map',
                '/css/chunk-vendors.42ac218e.js.map',
                '/icons/icon.png',
                '/css/app.ba587dee.css',
            ]);
        })
    );
});
self.addEventListener('activate', function (event) {
    // Perform some task
    console.log('activate')

});

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });