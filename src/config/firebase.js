import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8tg0h8DZt2nT9QOjci9kiDZLDWiZBkgo",
  authDomain: "info-ninaa.firebaseapp.com",
  projectId: "info-ninaa",
  storageBucket: "info-ninaa.appspot.com",
  messagingSenderId: "590013710164",
  appId: "1:590013710164:web:013bbb08a2604c703152c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
