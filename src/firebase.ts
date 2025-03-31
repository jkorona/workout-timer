// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Z9qHAuQhs8E3ssOWpbrVD2kvLEcD68o",
  authDomain: "workout-timer-platform.firebaseapp.com",
  projectId: "workout-timer-platform",
  storageBucket: "workout-timer-platform.firebasestorage.app",
  messagingSenderId: "337164851003",
  appId: "1:337164851003:web:cc54d015169f4b0435091e",
  measurementId: "G-XE2PGR2KPT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
