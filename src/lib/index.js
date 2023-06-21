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
import { auth, db } from '../firebase.js';

import redPaw from '../img/red-paw-like.png';
import greyPaw from '../img/grey-paw-like.png';

// función para validar contraseña
export const validatePassword = (password1, password2) => {
  if (password1 === password2) {
    return true;
  }
  return false;
};

// función para validar formato de correo
export const validateEmail = (email) => {
  /* const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; */
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

// función para crear usuario en firebase
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
          // eslint-disable-next-line no-console
          console.log('Error fetching user data:', error);
        });
    });
};

// función para login
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// función para login con Google
export const userGoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

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

// función para crear modal de confirmación para eliminar post
export const createDeleteModal = (docId) => {
  const deleteModal = document.createElement('dialog');
  const modalContentDiv = document.createElement('div');
  const modalActionDiv = document.createElement('div');
  const modalMsg = document.createElement('h2');
  const deleteButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  deleteModal.classList.add('big-modal-div');
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

  deleteButton.addEventListener('click', async () => {
    const docRef = doc(db, 'posts', docId);
    await deleteDoc(docRef);
  });
  cancelButton.addEventListener('click', () => deleteModal.close());

  modalContentDiv.appendChild(modalMsg);
  modalActionDiv.appendChild(deleteButton);
  modalActionDiv.appendChild(cancelButton);
  deleteModal.appendChild(modalContentDiv);
  deleteModal.appendChild(modalActionDiv);

  return deleteModal;
};

// función para crear modal de edición de un post
export const createEditModal = (content, docId) => {
  const editModal = document.createElement('dialog');
  const modalContentDiv = document.createElement('div');
  const modalActionDiv = document.createElement('div');
  const modalMsg = document.createElement('h2');
  const modalInput = document.createElement('textarea');
  const editButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  editModal.classList.add('big-modal-div');
  modalContentDiv.classList.add('modal-div');
  modalActionDiv.classList.add('modal-div');
  editButton.classList.add('navBttn');
  cancelButton.classList.add('navBttn');
  modalContentDiv.id = 'edit-content-div';
  editModal.id = 'edit-modal';
  editModal.style.height = '200px';
  editButton.id = 'edit-button';
  cancelButton.id = 'cancel-button';
  modalMsg.innerHTML = '';
  modalMsg.innerHTML = 'Editar publicación: <br>';
  modalInput.id = 'new-input';
  modalInput.attribute = 'rows=3';
  modalInput.style.height = '70px';
  modalInput.innerHTML = content;
  modalInput.style.width = '400px';
  editButton.textContent = 'Editar';
  cancelButton.textContent = 'Cancelar';
  modalContentDiv.style.display = 'flex';
  modalContentDiv.style.flexDirection = 'column';
  modalContentDiv.style.alignItems = 'space-between';

  editButton.addEventListener('click', async () => {
    const docRef = doc(db, 'posts', docId);
    let newInput = document.getElementById('new-input').value;
    newInput = modalInput.value;
    await updateDoc(docRef, {
      content: `${newInput}`,
    });
  });
  cancelButton.addEventListener('click', () => editModal.close());

  modalContentDiv.appendChild(modalMsg);
  modalContentDiv.appendChild(modalInput);
  modalActionDiv.appendChild(editButton);
  modalActionDiv.appendChild(cancelButton);
  editModal.appendChild(modalContentDiv);
  editModal.appendChild(modalActionDiv);

  return editModal;
};

// función para crear cada post en un div
export const createPostDiv = (name, localDate, localTime, content, docId, spanLike) => {
  const postDiv = document.createElement('div');
  const actionDiv = document.createElement('div');
  const editDiv = document.createElement('div');
  const deleteDiv = document.createElement('div');
  const userP = document.createElement('p');
  const msgP = document.createElement('p');
  const editBttn = document.createElement('button');
  const deleteBttn = document.createElement('button');
  const deleteModal = createDeleteModal(`${docId}`);
  const editModal = createEditModal(`${content}`, `${docId}`);
  const loggedUser = auth.currentUser.displayName;
  const spanLikeElement = spanLike;
  postDiv.classList.add('publicacionPost');
  actionDiv.classList.add('actionDiv');
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

  editBttn.addEventListener('click', () => {
    editModal.showModal();
  });
  deleteBttn.addEventListener('click', () => {
    deleteModal.showModal();
  });

  postDiv.appendChild(userP);
  postDiv.appendChild(msgP);
  if (`${name}` === loggedUser) {
    editDiv.appendChild(editBttn);
    deleteDiv.appendChild(deleteBttn);
    actionDiv.appendChild(editDiv);
    actionDiv.appendChild(deleteDiv);
    actionDiv.appendChild(deleteModal);
    actionDiv.appendChild(editModal);
  }
  actionDiv.appendChild(spanLikeElement);
  postDiv.appendChild(actionDiv);
  return postDiv;
};

// función para eliminar un post en firestore
export const deletePost = () => {
  const loggedUser = auth.currentUser;
  loggedUser.getIdToken(true)
    .then(() => {
      deleteDoc(loggedUser);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error fetching user data:', error);
    });
};

// para dar like
export const addLike = (id, likes) => {
  if (likes.length === 0 || !(likes.includes(auth.currentUser.email))) {
    updateDoc(doc(db, 'posts', id), {
      likes: arrayUnion(auth.currentUser.email),
    });
  }
};

// para quitar like
export const removeLike = (id) => updateDoc(doc(db, 'posts', id), {
  likes: arrayRemove(auth.currentUser.email),
});

// para mostrar íconos contador de likes
export const spanLikeFunc = (docRef, likesArr) => {
  const spanLikeDiv = document.createElement('div');
  const spanLike = document.createElement('span');
  const likeImg = document.createElement('img');
  likeImg.alt = 'icono de motita like';
  likeImg.className = 'likeImg';
  spanLike.innerHTML = '(0)';
  spanLike.classList.add('spanLike');
  spanLikeDiv.className = 'spanLikeDiv';
  if (likesArr.includes(auth.currentUser.email)) {
    spanLike.innerHTML = `(${likesArr.length})`;
    likeImg.src = `${redPaw}`;
    likeImg.addEventListener('click', () => {
      removeLike(docRef.id)
        .then(() => {
          likeImg.src = `${greyPaw}`;
        })
        .catch((error) => {
        // eslint-disable-next-line no-console
          console.log('Error removing like:', error);
        });
    });
  } else {
    spanLike.innerHTML = `(${likesArr.length})`;
    likeImg.src = `${greyPaw}`;
    likeImg.addEventListener('click', () => {
      addLike(docRef.id, likesArr);
    });
  }
  spanLikeDiv.appendChild(likeImg);
  spanLikeDiv.appendChild(spanLike);
  return spanLikeDiv;
};

// función para obtener nombre de usuario logueado
export const getLoggedUser = () => auth.currentUser.displayName;

// función para actualizar nombre de usuario logueado
export const updateDisplayNameAndPhotoURL = (name, picURL) => {
  const loggedUser = auth.currentUser;
  loggedUser.getIdToken(true)
    .then(() => {
      updateProfile(loggedUser, {
        displayName: name, photoURL: picURL,
      });
    })
    .catch((error) => {
    // eslint-disable-next-line no-console
      console.log('Error fetching user data:', error);
    });
};
