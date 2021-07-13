import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_r9SKs87MmCHCmf_0wbIiYwJlU98-t3s",
  authDomain: "linkedin-53634.firebaseapp.com",
  projectId: "linkedin-53634",
  storageBucket: "linkedin-53634.appspot.com",
  messagingSenderId: "281416117995",
  appId: "1:281416117995:web:316dd69eec9775554e98ae",
  measurementId: "G-MZKP6X0BR6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
