import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  getAuth,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  addDoc,
  collection,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore';
import { Database } from 'firebase/database';
import { auth, db } from '../firebase.js';

export const createUser = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    (user) => {
      updateProfile(user, {
        displayName: name,
      });
    },
    () => {
      console.log('error registrando usuario');
    },
  );
};

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const userGoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const getUserEmail = () => {
  const loggedInUser = auth.currentUser;
  loggedInUser.getIdToken(true)
    .then(
      () => console.log(loggedInUser.email),
      () => console.log('error'),
    )
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
};

export const getUsername = () => {
  const loggedInUser = auth.currentUser;
  loggedInUser.getIdToken(true)
    .then(
      () => console.log(loggedInUser.displayName),
      () => console.log('error'),
    )
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
};

/* export const findUser = () => {
  getAuth()
    .getUser(uid)
    .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
}; */

export const createPost = (text) => addDoc(collection(db, 'posts'), {
  content: text,
  time: serverTimestamp(),
  email: auth.currentUser.email,
  displayName: auth.currentUser.displayName,
});

export const createUserDoc = (email, name, profileUrl) => addDoc.(collection(db, 'users'), {
  email: auth.currentUser.email,
  displayName; ,
  profileUrl: ,
});

export const showLikes = (boolean) => {
  const likeImg = document.createElement('img');
  likeImg.alt = 'like';
  likeImg.id = 'likeImg';
  if (boolean === true) {
    likeImg.src = 'img/red-paw-like.png';
  } if (boolean === false) {
    likeImg.src = 'img/grey-paw-like.png';
  }
  return likeImg;
};

export const createPostDiv = () => {
  const postDiv = document.createElement('div');
  const headerPostDiv = document.createElement('div');
  const msgPostDiv = document.createElement('div');
  const footerPostDiv = document.createElement('div');
  const boolean = false;
  let showingLikes = showLikes(boolean);
  postDiv.className = 'content-div';
  headerPostDiv.className = 'sub-div';
  msgPostDiv.className = 'sub-div';
  footerPostDiv.className = 'sub-div';
  postDiv.id = 'post-div';
  headerPostDiv.id = 'header-post-div';
  msgPostDiv.id = 'msg-post-div';
  footerPostDiv.id = 'footer-post-div';
  footerPostDiv.appendChild(showingLikes);
  postDiv.appendChild(headerPostDiv);
  postDiv.appendChild(msgPostDiv);
  postDiv.appendChild(footerPostDiv);
  showingLikes.addEventListener('click', (e) => {
    e.preventDefault();
    showingLikes = showLikes(!boolean);
  });
};
