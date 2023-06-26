import { createUser, validatePassword, validateEmail } from '../lib/index.js';

export const Register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h3');
  const contentDiv = document.createElement('div');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const passwordInput2 = document.createElement('input');
  const registerBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');

  const divTitleRegister = document.createElement('li');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heartRegister');
  nameInput.classList.add('registerInputBox');
  nameInput.id = 'myNameInput';
  nameInput.placeholder = 'Nombre';
  nameInput.required = true;
  emailInput.classList.add('registerInputBox');
  emailInput.id = 'myEmailInput';
  emailInput.placeholder = 'Email';
  emailInput.required = true;
  passwordInput.classList.add('registerInputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Ingresa tu contraseña - mínimo 6 dígitos';
  passwordInput.minLength = 6;
  passwordInput.required = true;
  passwordInput2.classList.add('registerInputBox');
  passwordInput2.type = 'password';
  passwordInput2.id = 'myPasswordInput2';
  passwordInput2.placeholder = 'Repetir contraseña';
  passwordInput2.minLength = 6;
  passwordInput2.required = true;
  registerBttn.id = 'registerbutton';
  homeBttn.id = 'home-button';
  homeBttn.classList.add('registerBttn');
  backgroundImg.classList.add('pets');
  divTitleRegister.classList.add('divTitleLogin');
  registerDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-register';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';
  registerBttn.classList.add('registerBttn');
  title.textContent = 'Regístrate';
  subtitle.textContent = 'O con tu cuenta de Google';
  registerBttn.textContent = 'Registrarme';
  homeBttn.textContent = 'Volver al inicio';

  homeBttn.addEventListener('click', () => onNavigate('/'));
  registerBttn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const password1 = passwordInput.value;
    const password2 = passwordInput2.value;
    if (validatePassword(password1, password2) === false) {
      // eslint-disable-next-line no-alert
      alert('la contraseña ingresada no coincide');
    } else if (validateEmail(email) === false) {
      // eslint-disable-next-line no-alert
      alert('la contraseña sí coincide pero el correo electrónico no es válido');
    } else {
      createUser(email, password1, name);
      onNavigate('/timeline');
    }
  });

  registerDiv.appendChild(heartImg);
  contentImgDiv.appendChild(backgroundImg);
  registerDiv.appendChild(contentImgDiv);
  contentDiv.appendChild(title);
  contentDiv.appendChild(nameInput);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(passwordInput2);
  contentDiv.appendChild(registerBttn);
  contentDiv.appendChild(homeBttn);
  registerDiv.appendChild(contentDiv);

  return registerDiv;
};
