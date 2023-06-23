import logoTitleRed from '../img/logo-title-red.png';
import {
  getLoggedUser,
  userLogout,
} from '../lib/index.js';

export const Profile = (onNavigate) => {
  const profileDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');
  const logoutButton = document.createElement('button');
  const heartImg = document.createElement('img');

  heartImg.src = `${logoTitleRed}`;
  heartImg.classList.add('heart');
  profileDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  homeBttn.classList.add('loginBttn');
  logoutButton.classList.add('loginBttn');

  subtitle.textContent = `¡Bienvenid@, ${getLoggedUser()}! Este es tu perfil.`;
  homeBttn.textContent = 'Volver atrás';
  homeBttn.addEventListener('click', () => onNavigate('/timeline'));
  logoutButton.textContent = 'Cerrar sesión';
  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });
  contentDiv.appendChild(headerDiv);
  profileDiv.appendChild(heartImg);
  headerDiv.appendChild(subtitle);
  contentDiv.appendChild(homeBttn);
  contentDiv.appendChild(logoutButton);
  profileDiv.appendChild(contentDiv);

  return profileDiv;
};
