import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyDi8a1deOHzAE4QYcBqSPvfJRBzMxhhpRU",
  authDomain: "apsitstudies.firebaseapp.com",
  projectId: "apsitstudies",
  storageBucket: "apsitstudies.appspot.com",
  messagingSenderId: "22643971938",
  appId: "1:22643971938:web:3df2305b620d73dca13e3b",
  measurementId: "G-X68N9BVJJ0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
