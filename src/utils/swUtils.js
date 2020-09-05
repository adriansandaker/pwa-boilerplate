const DEBUG_TAG = '[SW]';

/* Check if service workers are supported. Register service worker if found. */
async function setupServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => {
          console.log(DEBUG_TAG, 'Service worker registered.');
        })
        .catch(() => {
          console.log(DEBUG_TAG, 'Error: Unable to register service-worker.');
        });
  }
}

async function checkNotificationSupport() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  };
}

async function requestNotificationPermission() {
  // Request permission to show notifications
  Notification.requestPermission(status => {
    if (status === 'granted') {
      console.log(DEBUG_TAG, 'Notifications granted.');
    } else {
      console.log(DEBUG_TAG, 'Notifications denied.');
    }
  });
}

export default {
  setupServiceWorker,
  checkNotificationSupport,
  requestNotificationPermission,
};
