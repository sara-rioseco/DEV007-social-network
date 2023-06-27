import logoTitleRed from '../img/logo-title-red.png';
import { descriptionModal } from '../lib';

export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const registerBttn = document.createElement('button');
  const heartImg = document.createElement('img');
  const descModal = descriptionModal();

  heartImg.src = `${logoTitleRed}`;
  heartImg.classList.add('heart');
  homeDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  descModal.id = 'about-modal';

  subtitle.textContent = '¡Bienvenid@ a la red social para los amantes de los animales!';
  loginBttn.textContent = 'Ingresar';
  registerBttn.textContent = 'Registrarme';
  loginBttn.classList.add('homeBttn');
  registerBttn.classList.add('homeBttn');

  heartImg.addEventListener('click', () => descModal.showModal());
  loginBttn.addEventListener('click', () => onNavigate('/login'));
  registerBttn.addEventListener('click', () => onNavigate('/register'));

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(registerBttn);
  homeDiv.appendChild(heartImg);
  homeDiv.appendChild(descModal);
  headerDiv.appendChild(subtitle);
  homeDiv.appendChild(contentDiv);
  homeDiv.appendChild(contentDiv);

  return homeDiv;
};
