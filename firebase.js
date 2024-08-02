// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCBtGOP3R65Q9q3H2_c7DUps0wWePCpVw",
  authDomain: "pantrytracker-c3bd5.firebaseapp.com",
  projectId: "pantrytracker-c3bd5",
  storageBucket: "pantrytracker-c3bd5.appspot.com",
  messagingSenderId: "897723766568",
  appId: "1:897723766568:web:e28aea0ee6729a6ac9621d",
  measurementId: "G-NT4CQZ9YZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}