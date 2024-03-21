import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWISygmlvoTKyLeTOuIvvMtPEPtpAw9q8",
  authDomain: "looneyesstudio-7883b.firebaseapp.com",
  projectId: "looneyesstudio-7883b",
  storageBucket: "looneyesstudio-7883b.appspot.com",
  messagingSenderId: "150909529400",
  appId: "1:150909529400:web:cdb18901b71bb19dcd25cd",
  measurementId: "G-7BMVKC5LR2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export const storage = getStorage(app, "gs://looneyesstudio-7883b.appspot.com");
