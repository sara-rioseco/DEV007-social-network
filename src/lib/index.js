import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  getAuth,
  signOut,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore';
import { Database } from 'firebase/database';
import {
  getStorage, ref, getDownloadURL, uploadBytes,
} from 'firebase/storage';
import { auth, db } from '../firebase.js';

export const createUser = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const loggedUser = auth.currentUser;
      loggedUser.getIdToken(true)
        .then(() => {
          updateProfile(loggedUser, {
            displayName: name, photoURL: '',
          });
        }).catch((error) => {
          console.log('Error fetching user data:', error);
        });
    });
};

const storage = getStorage();

export const imgReference = (useruid) => {
  console.log(`${useruid}.`);
  return getDownloadURL(ref(storage, (`${useruid}.png`)));
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
  const userDocs = () => getDocs(collection(db, 'users'))
    .then(
      () => console.log(loggedInUser.displayName),
      () => console.log('error'),
    )
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
};

export const createPost = (text) => addDoc(collection(db, 'posts'), {
  content: text,
  time: serverTimestamp(),
  email: auth.currentUser.email,
  displayName: auth.currentUser.displayName,
});

export const userLogout = () => signOut(auth);

/* export const getUserDisplayName = (email) => {
  getDoc(collection(db, 'users').then(
    () => console.log
  )
  .catch((error) => {
    console.log('Error fetching user data:', error);
  }))
  return displayName;
}; */

/* export const showLikes = (boolean) => {
  const likeImg = document.createElement('img');
  likeImg.alt = 'like';
  likeImg.id = 'likeImg';
  if (boolean === true) {
    likeImg.src = 'img/red-paw-like.png';
  } if (boolean === false) {
    likeImg.src = 'img/grey-paw-like.png';
  }
  return likeImg;
}; */

export const createPostDiv = (post, username) => {
  const postDiv = document.createElement('div');
  const headerPostDiv = document.createElement('div');
  const msgPostDiv = document.createElement('div');
  const footerPostDiv = document.createElement('div');
  /* const boolean = false;
  let showingLikes = showLikes(boolean); */
  postDiv.className = 'content-div';
  headerPostDiv.className = 'sub-div';
  msgPostDiv.className = 'sub-div';
  footerPostDiv.className = 'sub-div';
  postDiv.id = 'post-div';
  headerPostDiv.id = 'header-post-div';
  msgPostDiv.id = 'msg-post-div';
  footerPostDiv.id = 'footer-post-div';
  headerPostDiv.innerHTML = `${username}`;
  msgPostDiv.innerHTML = `${post.content}`;
  /* footerPostDiv.appendChild(showingLikes); */
  postDiv.appendChild(headerPostDiv);
  postDiv.appendChild(msgPostDiv);
  postDiv.appendChild(footerPostDiv);
  /* showingLikes.addEventListener('click', (e) => {
    e.preventDefault();
    showingLikes = showLikes(!boolean);
  }); */
};
