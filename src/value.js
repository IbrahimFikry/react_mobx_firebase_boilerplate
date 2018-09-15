import * as firebase from "firebase";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyA56FzZquv2qQRb0qsRE-IimuqCCmPMRyU",
  authDomain: "playground-a846c.firebaseapp.com",
  databaseURL: "https://playground-a846c.firebaseio.com",
  projectId: "playground-a846c",
  storageBucket: "playground-a846c.appspot.com",
  messagingSenderId: "968512693421"
});

export default app;
