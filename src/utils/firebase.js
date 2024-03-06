// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-project-415814.firebaseapp.com",
  projectId: "blog-project-415814",
  storageBucket: "blog-project-415814.appspot.com",
  messagingSenderId: "301795334547",
  appId: "1:301795334547:web:2378148f0a206ffbccb066"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);