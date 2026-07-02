// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChTFcOuuh8tFVieJ1GQpIVg2dxu938_ys",
  authDomain: "bauklotze.firebaseapp.com",
  projectId: "bauklotze",
  storageBucket: "bauklotze.firebasestorage.app",
  messagingSenderId: "940898685561",
  appId: "1:940898685561:web:5f3bbb7cc3683eb555baa8",
  measurementId: "G-NNGWN4838Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)