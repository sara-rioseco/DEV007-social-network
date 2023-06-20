import {
  getLoggedUser,
} from '../lib/index.js';

export const Profile = (onNavigate) => {
  const profileDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  profileDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  homeBttn.classList.add('loginBttn');

  subtitle.textContent = `¡Bienvenid@, ${getLoggedUser()}! Este es tu perfil.`;
  homeBttn.textContent = 'Volver al inicio';
  homeBttn.addEventListener('click', () => onNavigate('/'));
  contentDiv.appendChild(headerDiv);
  profileDiv.appendChild(heartImg);
  contentImgDiv.appendChild(backgroundImg);
  profileDiv.appendChild(contentImgDiv);
  headerDiv.appendChild(subtitle);
  contentDiv.appendChild(homeBttn);
  profileDiv.appendChild(contentDiv);

  return profileDiv;
};
