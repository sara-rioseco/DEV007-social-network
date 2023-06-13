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
import { getStorage, ref, getDownloadURL , uploadBytes } from 'firebase/storage';
import { auth, db } from '../firebase.js';

const storage = getStorage();

export const imgReference = (useruid) => {
  console.log(`${useruid}.`);
  return getDownloadURL(ref(storage, (`${useruid}.png`)));
};

export const createUser = (email, password) => {
  console.log(`${email} , ${password}`);
  return createUserWithEmailAndPassword(auth, email, password);
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
