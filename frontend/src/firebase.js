// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0n4X5-U3Zqg4gBbA5cu-iK9NMyBlU0hA",
  authDomain: "webseven-351c3.firebaseapp.com",
  projectId: "webseven-351c3",
  storageBucket: "webseven-351c3.appspot.com",
  messagingSenderId: "376522535209",
  appId: "1:376522535209:web:d82a2bd666c502f5f98738",
  measurementId: "G-HKNMDL1Z69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// app에 대한 인증 사용 선언
export const auth = getAuth(app);

