// The name used for cache in browser.
const CACHE_NAME = 'app-cache';

/* Files to cache for offline access.
   Bootstrap included to show how we might include external resources in our
   offline experience. */

const CACHE_URLS = [
  'index.html',
  'styles.css',
  'index.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
];

/* Define the actions for install-event.
   Here we cache the files defined in CACHE_URLS to
   enable basic offline support. */

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(CACHE_URLS)
    })
  );
})

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