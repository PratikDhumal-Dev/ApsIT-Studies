import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDi8a1deOHzAE4QYcBqSPvfJRBzMxhhpRU",
  authDomain: "apsitstudies.firebaseapp.com",
  projectId: "apsitstudies",
  storageBucket: "apsitstudies.appspot.com",
  messagingSenderId: "22643971938",
  appId: "1:22643971938:web:3df2305b620d73dca13e3b",
  measurementId: "G-X68N9BVJJ0",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };

export default fire;
