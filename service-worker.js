// The name used for cache in browser.
const CACHE_NAME = 'app-cache';

/* Serve cached content if offline. If not, download and refresh cache.
   This is known as the 'stale while revalidate' pattern. */
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.open(CACHE_NAME).then( (cache) => {
        return cache.match(event.request).then( (response) => {
          const fetchPromise = fetch(event.request).then( (networkResponse) => {
            if (!networkResponse.url.includes('sockjs-node')) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
          return response || fetchPromise;
        });
      }),
  );
});

// Listen for push messages.
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'No data in push message',
    icon: './icons/icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {action: 'open', title: 'Open and do stuff'},
      {action: 'close', title: 'Close'},
    ],
  };

  event.waitUntil(
      self.registration.showNotification('Push Notification', options),
  );
});
