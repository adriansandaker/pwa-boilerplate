// The name used for cache in browser.
const CACHE_NAME = 'app-cache';


/* Serve cached content if offline. If not, download and refresh cache.
   This is known as the 'stale while revalidate' pattern. */
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        var fetchPromise = fetch(event.request).then(function (networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});