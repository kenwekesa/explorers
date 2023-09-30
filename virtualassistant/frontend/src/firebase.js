// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB4dTjaeiMZgRPES_wWt2IUlO1f1X2FqjE",
  authDomain: "chats-36c2c.firebaseapp.com",
  projectId: "chats-36c2c",
  storageBucket: "chats-36c2c.appspot.com",
  messagingSenderId: "832737910865",
  appId: "1:832737910865:web:aec60a540b2744741b9870",
  measurementId: "G-H400TE3SX3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
export const auth = getAuth()