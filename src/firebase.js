// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4gFAcnV1i7Ir8MuxdwXe54DlP9zbHus",
  authDomain: "create-proyect-one-react.firebaseapp.com",
  projectId: "create-proyect-one-react",
  storageBucket: "create-proyect-one-react.appspot.com",
  messagingSenderId: "608063093478",
  appId: "1:608063093478:web:11c59b68b478c724da5927"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();