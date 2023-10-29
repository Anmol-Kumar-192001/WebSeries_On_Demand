// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtYAUD3UpCgvlNLrcSOtcR7NCRh-sos5I",
  authDomain: "netflixgpt-d2f7f.firebaseapp.com",
  projectId: "netflixgpt-d2f7f",
  storageBucket: "netflixgpt-d2f7f.appspot.com",
  messagingSenderId: "520390253492",
  appId: "1:520390253492:web:f7c8687b133e4fb627b0e1",
  measurementId: "G-LZ66BHGQMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth();;