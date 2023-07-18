import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  doc,
  addDoc,
  collection,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';
import { auth, db } from './firebase.js';

// función para actualizar nombre de usuario
export const updateUsername = async (name) => {
  const currentAuth = auth.currentUser;
  try {
    await updateProfile(currentAuth, {
      displayName: name,
      photoURL: '',
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error deleting post:', error);
    throw error; // Propagate the error
  }
};

// función para crear usuario en firebase
// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// función para login
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// función para login con Google

export const userGoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// función para obtener nombre de usuario logueado
export const getLoggedUser = () => auth.currentUser.displayName;

// función para log out
export const userLogout = () => signOut(auth);

// función para crear post en firestore

export const createPost = (text) => addDoc(collection(db, 'posts'), {
  content: text,
  time: serverTimestamp(),
  email: auth.currentUser.email,
  displayName: auth.currentUser.displayName,
  likes: [],
});

// función para editar un post en firestore
export const editPost = async (newInput, docId) => {
  const docRef = doc(db, 'posts', docId);
  await updateDoc(docRef, {
    content: `${newInput}`,
  });
};

//  función para eliminar post en firestore
export const deletePost = async (docRef) => {
  const currentAuth = auth.currentUser;
  try {
    await currentAuth.getIdToken(true);
    await deleteDoc(docRef);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error deleting post:', error);
    throw error; // Propagate the error
  }
};

// para dar like
export const addLike = (id, likes) => {
  if (likes.length === 0 || !(likes.includes(auth.currentUser.email))) {
    updateDoc(doc(db, 'posts', id), {
      likes: arrayUnion(auth.currentUser.email),
    }).catch((error) => error);
  }
};

// para quitar like
export const removeLike = (id) => updateDoc(doc(db, 'posts', id), {
  likes: arrayRemove(auth.currentUser.email),
});
