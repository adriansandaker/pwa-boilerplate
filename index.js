const DEBUG_TAG = '[SW]';

/* Check if service workers are supported. Register service worker if found. */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => { console.log(DEBUG_TAG, 'Service worker registered.') })
    .catch(() => { console.log(DEBUG_TAG, 'Error: Unable to register service-worker.') })
}