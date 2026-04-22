// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnBI7B2wfwFTzR9fum6bfACI-c6cbxQSk",
  authDomain: "contactbook-26730.firebaseapp.com",
  projectId: "contactbook-26730",
  storageBucket: "contactbook-26730.firebasestorage.app",
  messagingSenderId: "309244217980",
  appId: "1:309244217980:web:bf54868d1dbef5c35e17f9",
  measurementId: "G-V4E3BFFRKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
