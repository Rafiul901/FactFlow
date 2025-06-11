// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKDx8TkyGjz1_nIKauUkDlYB-j6G-rcI",
  authDomain: "fact-flow-60413.firebaseapp.com",
  projectId: "fact-flow-60413",
  storageBucket: "fact-flow-60413.firebasestorage.app",
  messagingSenderId: "755689199656",
  appId: "1:755689199656:web:0fb8e858f28781e319fd1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)