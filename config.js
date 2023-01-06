import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD0opl2QL_sZlcqf_lZjfEmmOCIBv6lxt0",
    authDomain: "e-ride-7eab4.firebaseapp.com",
    projectId: "e-ride-7eab4",
    storageBucket: "e-ride-7eab4.appspot.com",
    messagingSenderId: "32248107514",
    appId: "1:32248107514:web:ff62aa80baff075de85443"
  };
  

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
