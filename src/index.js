import './styles.css';
import swUtils from './utils/swUtils';

async function initApp() {
  await swUtils.setupServiceWorker();

  if (await swUtils.checkNotificationSupport) {
    await swUtils.requestNotificationPermission();
  }
}

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
});

initApp();