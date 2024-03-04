// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDT7me7gG0LyEd11wr9TRDgMUYHgQB2x8",
  authDomain: "otp-project-7fef0.firebaseapp.com",
  projectId: "otp-project-7fef0",
  storageBucket: "otp-project-7fef0.appspot.com",
  messagingSenderId: "591199337380",
  appId: "1:591199337380:web:fc7b17d1d5693507d8df31",
  measurementId: "G-5BF8S2XKDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);