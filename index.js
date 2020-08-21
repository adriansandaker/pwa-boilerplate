const DEBUG_TAG = '[SW]';

/* Check if service workers are supported. Register service worker if found. */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => {
      console.log(DEBUG_TAG, 'Service worker registered.')
    })
    .catch(() => {
      console.log(DEBUG_TAG, 'Error: Unable to register service-worker.')
    })
}

if (!('Notification' in window)) {
  console.log('This browser does not support notifications!');
}

// Request permission to show notifications
Notification.requestPermission(status => {
  if (status === 'granted') {
    console.log(DEBUG_TAG, 'Notifications granted.');
  } else {
    console.log(DEBUG_TAG, 'Notifications denied.');
  }
});


document.getElementById('button-notification').addEventListener('click', event => {
  navigator.serviceWorker.getRegistration().then(reg => {
    const notificationText = document.getElementById('input-notification').value;
    reg.showNotification('Hi there!',
      {
        body: notificationText ? notificationText : 'Write something in the input field!',
        icon: 'icons/icon-96.png'
      }
    );
  })
})