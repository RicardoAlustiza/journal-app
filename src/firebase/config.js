import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC6ndACI3sE9-7Tut7TF8kLTljQ68Waxq8",
  authDomain: "journal-app-228c7.firebaseapp.com",
  projectId: "journal-app-228c7",
  storageBucket: "journal-app-228c7.appspot.com",
  messagingSenderId: "261288199904",
  appId: "1:261288199904:web:f4570ee1cc64e4be5cb285"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);