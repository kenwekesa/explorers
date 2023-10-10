// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyB0L5I8bXhI4Jm4EZy-puwo4489Kiw-dAY",
  authDomain: "chats-59bf5.firebaseapp.com",
  projectId: "chats-59bf5",
  storageBucket: "chats-59bf5.appspot.com",
  messagingSenderId: "422927579841",
  appId: "1:422927579841:web:f4b305f28a5702cbecf240",
  measurementId: "G-9N0T0FB7FE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
export const auth = getAuth()
// export const storage = getStorage()
export const storage = getStorage()
// export const db = getFirestore()
export const db = getFirestore()
// export const database  =  getDatabase()
export const database = getDatabase()