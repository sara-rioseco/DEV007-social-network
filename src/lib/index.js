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
  query,
  orderBy,
  Timestamp,
  serverTimestamp,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { Database } from 'firebase/database';
import {
  getStorage, ref, getDownloadURL, uploadBytes,
} from 'firebase/storage';
import { auth, db } from '../firebase.js';

export const validatePassword = (password1, password2) => {
  if (password1 === password2) {
    return true;
  }
  return false;
};

export const validateEmail = (email) => {
  /* const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; */
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const createUser = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const loggedUser = auth.currentUser;
      loggedUser.getIdToken(true)
        .then(() => {
          updateProfile(loggedUser, {
            displayName: name, photoURL: '',
          });
        })
        .catch((error) => {
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

export const userLogout = () => signOut(auth);

export const createPost = (text) => addDoc(collection(db, 'posts'), {
  content: text,
  time: serverTimestamp(),
  email: auth.currentUser.email,
  displayName: auth.currentUser.displayName,
});

export const createDeleteModal = () => {
  const deleteModal = document.createElement('dialog');
  const modalContentDiv = document.createElement('div');
  const modalActionDiv = document.createElement('div');
  const modalMsg = document.createElement('h2');
  const deleteButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  deleteModal.classList.add('delete-modal-div');
  modalContentDiv.classList.add('modal-div');
  modalActionDiv.classList.add('modal-div');
  deleteButton.classList.add('navBttn');
  cancelButton.classList.add('navBttn');
  deleteModal.id = 'delete-modal';
  deleteButton.id = 'delete-button';
  cancelButton.id = 'cancel-button';
  modalMsg.innerHTML = '';
  modalMsg.innerHTML = '¿Quieres eliminar esta publicación?';
  deleteButton.textContent = 'Eliminar';
  cancelButton.textContent = 'Cancelar';

  deleteButton.addEventListener('click', () => console.log('presionaste eliminar'));
  cancelButton.addEventListener('click', () => deleteModal.close());

  modalContentDiv.appendChild(modalMsg);
  modalActionDiv.appendChild(deleteButton);
  modalActionDiv.appendChild(cancelButton);
  deleteModal.appendChild(modalContentDiv);
  deleteModal.appendChild(modalActionDiv);

  return deleteModal;
};

export const createPostDiv = (name, localDate, localTime, content) => {
  const postDiv = document.createElement('div');
  const editDiv = document.createElement('div');
  const deleteDiv = document.createElement('div');
  const userP = document.createElement('p');
  const msgP = document.createElement('p');
  const editBttn = document.createElement('button');
  const deleteBttn = document.createElement('button');
  const deleteModal = createDeleteModal();
  postDiv.classList.add('publicacionPost');
  editDiv.classList.add('editarPublicacion');
  deleteDiv.classList.add('eliminarPublicacion');
  userP.classList.add('usuario');
  msgP.classList.add('descripcionPost');
  editBttn.classList.add('editar');
  deleteBttn.classList.add('eliminar');
  userP.textContent = `${name} publicó el ${localDate} a las ${localTime} :`;
  msgP.textContent = `${content}`;
  editBttn.id = 'edit-button';
  deleteBttn.id = 'delete-button';
  editBttn.textContent = 'Editar';
  deleteBttn.textContent = 'Eliminar';

  editBttn.addEventListener('click', () => console.log('presionaste editar'));
  deleteBttn.addEventListener('click', () => {
    deleteModal.showModal();
    console.log('presionaste eliminar');
  });

  editDiv.appendChild(editBttn);
  deleteDiv.appendChild(deleteBttn);
  postDiv.appendChild(userP);
  postDiv.appendChild(msgP);
  postDiv.appendChild(editDiv);
  postDiv.appendChild(deleteDiv);
  postDiv.appendChild(deleteModal);

  return postDiv;
};

export const deletePost = () => {
  const loggedUser = auth.currentUser;
  const postsRef = query(collection(db, 'posts'), orderBy('time', 'desc'));
  loggedUser.getIdToken(true)
    .then(() => {
      deleteDoc(loggedUser);
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
};