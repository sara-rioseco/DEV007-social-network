import logoTitleRed from '../img/logo-title-red.png';

export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const registerBttn = document.createElement('button');
<<<<<<< HEAD
  const contentImgDiv = document.createElement('div');
=======
>>>>>>> main
  const heartImg = document.createElement('img');
  const backgroundImg = document.createElement('img');

  heartImg.src = `${logoTitleRed}`;
  heartImg.classList.add('heart');
  homeDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
<<<<<<< HEAD
  backgroundImg.classList.add('pets');
=======
>>>>>>> main

  subtitle.textContent = '¡Bienvenid@ a la red social para los amantes de los animales!';
  loginBttn.textContent = 'Ingresar';
  registerBttn.textContent = 'Registrarme';
  loginBttn.classList.add('homeBttn');
  registerBttn.classList.add('homeBttn');
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';

  loginBttn.addEventListener('click', () => onNavigate('/login'));
  registerBttn.addEventListener('click', () => onNavigate('/register'));

  contentDiv.appendChild(headerDiv);
  contentImgDiv.appendChild(backgroundImg);
  homeDiv.appendChild(contentImgDiv);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(registerBttn);
  homeDiv.appendChild(heartImg);
  headerDiv.appendChild(subtitle);
  homeDiv.appendChild(contentDiv);
  homeDiv.appendChild(contentDiv);

  return homeDiv;
};
