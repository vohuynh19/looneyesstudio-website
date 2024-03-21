import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeVyj1T_EJMVg1FLAW2CqT8uPmY_eseis",
  authDomain: "vinamatech.firebaseapp.com",
  projectId: "vinamatech",
  storageBucket: "vinamatech.appspot.com",
  messagingSenderId: "481580491277",
  appId: "1:481580491277:web:052959f57ddbba7f3e6b44",
  measurementId: "G-E2PWRCQ69M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export const storage = getStorage(app, "gs://vinamatech.appspot.com");
