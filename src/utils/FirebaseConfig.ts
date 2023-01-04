
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVq5FBIOiFLftHkpdJWeucEgCVv1E67N0",
  authDomain: "zoom-clone-ab644.firebaseapp.com",
  projectId: "zoom-clone-ab644",
  storageBucket: "zoom-clone-ab644.appspot.com",
  messagingSenderId: "578315988874",
  appId: "1:578315988874:web:4cbc26593867ae745be273",
  measurementId: "G-ZJTEL2MXFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const firebaseDB =  getFirestore(app);

export const userRef = collection(firebaseDB, 'users');