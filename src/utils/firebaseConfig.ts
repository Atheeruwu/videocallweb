import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5ZyO5PxT9sxCAlWi5kO2X_l5xDApUx-4",
  authDomain: "video-app-79657.firebaseapp.com",
  projectId: "video-app-79657",
  storageBucket: "video-app-79657.appspot.com",
  messagingSenderId: "26523179803",
  appId: "1:26523179803:web:faaf076f45ef5ab97351be",
  measurementId: "G-NSMM2WBG6K"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
