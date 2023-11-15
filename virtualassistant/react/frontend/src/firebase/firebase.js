import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0L5I8bXhI4Jm4EZy-puwo4489Kiw-dAY",
  authDomain: "chats-59bf5.firebaseapp.com",
  databaseURL: "https://chats-59bf5-default-rtdb.firebaseio.com",
  projectId: "chats-59bf5",
  storageBucket: "chats-59bf5.appspot.com",
  messagingSenderId: "422927579841",
  appId: "1:422927579841:web:f4b305f28a5702cbecf240",
  measurementId: "G-9N0T0FB7FE"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app 
export const storage = getStorage(app)
export const database = getDatabase(app)



