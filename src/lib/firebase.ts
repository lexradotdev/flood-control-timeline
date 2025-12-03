import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqOzEnBKPXxdw3h7ki_hcKKMXOEkhWj6A",
  authDomain: "flood-control-timeline.firebaseapp.com",
  projectId: "flood-control-timeline",
  storageBucket: "flood-control-timeline.firebasestorage.app",
  messagingSenderId: "746307212000",
  appId: "1:746307212000:web:172a06a8e7a5880f5c3685",
  measurementId: "G-8FL8K4ZFW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
