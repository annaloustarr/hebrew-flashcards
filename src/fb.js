import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI8NDPjtj1P14boROVarhcmy8qjnAhDAA",
  authDomain: "hebrew-flashcards-52673.firebaseapp.com",
  databaseURL: "https://hebrew-flashcards-52673.firebaseio.com",
  projectId: "hebrew-flashcards-52673",
  storageBucket: "hebrew-flashcards-52673.appspot.com",
  messagingSenderId: "787897355004",
  appId: "1:787897355004:web:e059b96891de20c9196579",
  measurementId: "G-F0PNC02VZL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export default db;
