import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl0uENXXLOxs0Zry3IfalrnhOwUfcv7gw",
  authDomain: "daily-organizer-8997d.firebaseapp.com",
  projectId: "daily-organizer-8997d",
  storageBucket: "daily-organizer-8997d.appspot.com",
  messagingSenderId: "1039766568590",
  appId: "1:1039766568590:web:24698e6549f744303c13df"
};

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  export {
    database as default
  }