import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
} from 'firebase/auth';
import {
  addDoc,
  collection,
} from 'firebase/firestore';
import { auth, db } from '../firebase.js';

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const userGoogleLogin = () => {
  // Signup using a popup
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const createPost = (text) => addDoc(collection(db, 'posts'), {
  content: text,
});
