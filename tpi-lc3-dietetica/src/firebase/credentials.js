
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAW32LdzIKBNinAuCG-ym8q0b3Hjmx18kg",
  authDomain: "abasto-diet.firebaseapp.com",
  projectId: "abasto-diet",
  storageBucket: "abasto-diet.appspot.com",
  messagingSenderId: "37828382893",
  appId: "1:37828382893:web:f0cfaf23a753c82d1db624",
  measurementId: "G-SK64YC4M9M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
