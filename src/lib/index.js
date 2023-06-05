import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import {
  getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAoPzifXuWI56JUEwPFZDnkPnbVyF7tLa4',
  authDomain: 'pets--diaries.firebaseapp.com',
  projectId: 'pets--diaries',
  storageBucket: 'pets--diaries.appspot.com',
  messagingSenderId: '954679174408',
  appId: '1:954679174408:web:cbf851119a71a5f81f78bd',
  measurementId: 'G-BKTBMV3M64',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
