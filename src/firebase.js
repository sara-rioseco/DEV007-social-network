// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  addDoc,
  doc,
} from 'firebase/firestore';
import {
  getAuth,onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAoPzifXuWI56JUEwPFZDnkPnbVyF7tLa4',
  authDomain: 'pets--diaries.firebaseapp.com',
  projectId: 'pets--diaries',
  storageBucket: 'pets--diaries.appspot.com',
  messagingSenderId: '954679174408',
  appId: '1:954679174408:web:cbf851119a71a5f81f78bd',
  measurementId: 'G-BKTBMV3M64',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
