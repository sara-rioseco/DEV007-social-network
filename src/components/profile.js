import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.js';
import logoTitleRed from '../img/logo-title-red.png';
import {
  getLoggedUser,
  userLogout,
} from '../lib/index.js';

// función para crear modal para editar nombre
export const updateUsernameModal = () => {
  const updateUserModal = document.createElement('dialog');
  const modalContentDiv = document.createElement('div');
  const modalActionDiv = document.createElement('div');
  const modalMsg = document.createElement('h2');
  const modalInput = document.createElement('textarea');
  const updateButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  updateUserModal.classList.add('big-modal-div');
  modalContentDiv.classList.add('modal-div');
  modalActionDiv.classList.add('modal-div');
  updateButton.classList.add('navBttn');
  cancelButton.classList.add('navBttn');
  modalContentDiv.id = 'edit-content-div';
  updateUserModal.id = 'edit-modal';
  updateUserModal.style.height = '200px';
  updateButton.id = 'edit-button';
  cancelButton.id = 'cancel-button';
  modalMsg.innerHTML = '';
  modalMsg.innerHTML = 'Escribe tu nuevo nombre de usuario: <br>';
  modalInput.id = 'new-name';
  modalInput.attribute = 'rows=3';
  modalInput.style.height = '70px';
  modalInput.innerHTML = auth.currentUser.displayName;
  modalInput.style.width = '400px';
  updateButton.textContent = 'Cambiar nombre';
  cancelButton.textContent = 'Cancelar';
  modalContentDiv.style.display = 'flex';
  modalContentDiv.style.flexDirection = 'column';
  modalContentDiv.style.alignItems = 'space-between';

  updateButton.addEventListener('click', async () => {
    const loggedUser = auth.currentUser;
    let newName = document.getElementById('new-name').value;
    newName = modalInput.value;
    await loggedUser.getIdToken(true);
    await updateProfile(loggedUser, {
      displayName: newName, photoURL: '',
    }).then(() => {
      updateUserModal.close();
    });
  });

  cancelButton.addEventListener('click', () => updateUserModal.close());

  modalContentDiv.appendChild(modalMsg);
  modalContentDiv.appendChild(modalInput);
  modalActionDiv.appendChild(updateButton);
  modalActionDiv.appendChild(cancelButton);
  updateUserModal.appendChild(modalContentDiv);
  updateUserModal.appendChild(modalActionDiv);

  return updateUserModal;
};

// exportando vista profile

export const Profile = (onNavigate) => {
  const profileDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');
  const logoutButton = document.createElement('button');
  const updateUsernameButton = document.createElement('button');
  const heartImg = document.createElement('img');
  const updateNameModal = updateUsernameModal(onNavigate);

  heartImg.src = `${logoTitleRed}`;
  heartImg.classList.add('heart');
  profileDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  homeBttn.classList.add('loginBttn');
  logoutButton.classList.add('loginBttn');

  subtitle.textContent = `¡Bienvenid@, ${getLoggedUser()}! Este es tu perfil.`;
  updateUsernameButton.textContent = 'Cambiar nombre';
  updateUsernameButton.addEventListener('click', () => updateNameModal.showModal());
  homeBttn.textContent = 'Volver atrás';
  homeBttn.addEventListener('click', () => onNavigate('/timeline'));
  logoutButton.textContent = 'Cerrar sesión';
  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });
  contentDiv.appendChild(headerDiv);
  profileDiv.appendChild(heartImg);
  headerDiv.appendChild(subtitle);
  contentDiv.appendChild(updateUsernameButton);
  contentDiv.appendChild(homeBttn);
  contentDiv.appendChild(logoutButton);
  contentDiv.appendChild(updateNameModal);
  profileDiv.appendChild(contentDiv);

  return profileDiv;
};
