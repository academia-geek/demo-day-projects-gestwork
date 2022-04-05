
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


var firebaseConfig = {
  apiKey: "AIzaSyBJotertv6S3zDqAZGHypKzCFFkwCsUjsw",
  authDomain: "gestwork-bad1b.firebaseapp.com",
  projectId: "gestwork-bad1b",
  storageBucket: "gestwork-bad1b.appspot.com",
  messagingSenderId: "810323040534",
  appId: "1:810323040534:web:d24b14d5ba12b34b1e1837"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});