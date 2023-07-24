// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEnytAIh-so46vnHlV8GflqYiTJOTcys",
  authDomain: "inkslessreads.firebaseapp.com",
  projectId: "inkslessreads",
  storageBucket: "inkslessreads.appspot.com",
  messagingSenderId: "56729088005",
  appId: "1:56729088005:web:6de06b1e721eca2952ac6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fb = firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
