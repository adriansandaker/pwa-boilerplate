import './styles.css';
import swUtils from './utils/swUtils';

const notificationButton = document.getElementById('button-notification');

async function initApp() {
  await swUtils.setupServiceWorker();

  if (await swUtils.checkNotificationSupport) {
    await swUtils.requestNotificationPermission();
  }
}

notificationButton.addEventListener('click', event => {
  navigator.serviceWorker.getRegistration().then(reg => {
    const text = document.getElementById('input-notification').value;
    reg.showNotification(
        'Hi there!',
        {
          body: text ? text : 'Write something in the input field!',
          icon: 'icons/icon-96.png',
        },
    );
  });
});

initApp();
