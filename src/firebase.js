import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjfR9o0vX93D60sT7D7M_P0slD8trKDJI",
  authDomain: "clone-challenge-e182e.firebaseapp.com",
  projectId: "clone-challenge-e182e",
  storageBucket: "clone-challenge-e182e.appspot.com",
  messagingSenderId: "1064767684030",
  appId: "1:1064767684030:web:32e2b4799a78d360a28def",
  measurementId: "G-M42QWZF0Y7",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
