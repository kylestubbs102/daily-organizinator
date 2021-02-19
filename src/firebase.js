import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHVNWHruDUO435539J0E55M6at_Uqz3xE",
    authDomain: "web-application-1-303203.firebaseapp.com",
    projectId: "web-application-1-303203",
    storageBucket: "web-application-1-303203.appspot.com",
    messagingSenderId: "249253331405",
    appId: "1:249253331405:web:5c5453ad62172742b44484",
    measurementId: "G-BFSJGSXX7Q"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  export {
    database as default
  }