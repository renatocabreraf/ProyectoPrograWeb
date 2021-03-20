import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDUBUzHbCsCL5aLgwhOcvFqIqLUNiC_F6A",
  authDomain: "hwcgtpw.firebaseapp.com",
  databaseURL: "https://hwcgtpw-default-rtdb.firebaseio.com",
  projectId: "hwcgtpw",
  storageBucket: "hwcgtpw.appspot.com",
  messagingSenderId: "915651578597",
  appId: "1:915651578597:web:083884bc1c69f28824a20c",
  measurementId: "G-1SGK6NZBKM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();