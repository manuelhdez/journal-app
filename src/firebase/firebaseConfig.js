import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUSXio9Awi-v8djkHERPgiYyQtUc3vXRg",
  authDomain: "journal-app-76c2d.firebaseapp.com",
  databaseURL: "https://journal-app-76c2d.firebaseio.com",
  projectId: "journal-app-76c2d",
  storageBucket: "journal-app-76c2d.appspot.com",
  messagingSenderId: "355701284099",
  appId: "1:355701284099:web:e4698d7ac4aaea84019d36",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
