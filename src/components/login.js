import logoTitleRed from '../img/logo-title-red.png';
import backgroundPets from '../img/background_pets.png';
import logoGoogleImg from '../img/logo_google.png';
import { userGoogleLogin, userLogin } from '../lib/index.js';

export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const contentDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const loginBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');
  const logoGoogle = document.createElement('img');
  const divTitleLogin = document.createElement('li');

  heartImg.src = `${logoTitleRed}`;
  heartImg.classList.add('heart');

  emailInput.classList.add('loginInputBox');
  emailInput.id = 'myEmailInput';
  emailInput.placeholder = 'Ingresa tu Correo';
  passwordInput.classList.add('loginInputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.minLength = 6;
  passwordInput.required = true;

  loginBttn.classList.add('loginBttn');
  logoGoogle.className = 'logoGoogle';
  homeBttn.classList.add('loginBttn');

  backgroundImg.classList.add('pets');
  divTitleLogin.classList.add('divTitleLogin');

  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-login';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = `${backgroundPets}`;
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = `<img src="${logoTitleRed}" alt="logo" id="logo">`;
  logoGoogle.src = `${logoGoogleImg}`;

  title.textContent = 'Iniciar Sesión';
  loginBttn.textContent = 'Iniciar Sesión';
  homeBttn.textContent = 'Volver al inicio';

  homeBttn.addEventListener('click', () => onNavigate('/'));
  loginBttn.addEventListener('click', () => {
    const email = document.getElementById('myEmailInput').value;
    const password = document.getElementById('myPasswordInput').value;
    userLogin(email, password).then(
      () => {
        onNavigate('/timeline');
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
      },
      // eslint-disable-next-line no-alert
      () => alert('Credenciales incorrectas'),
    );
  });

  logoGoogle.addEventListener('click', () => {
    userGoogleLogin().then(
      () => {
        onNavigate('/timeline');
      },
      // eslint-disable-next-line no-alert
      () => alert('Credenciales incorrectas'),
    );
  });

  loginDiv.appendChild(heartImg);
  contentImgDiv.appendChild(backgroundImg);
  loginDiv.appendChild(contentImgDiv);
  contentDiv.appendChild(title);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(logoGoogle);
  contentDiv.appendChild(homeBttn);
  loginDiv.appendChild(contentDiv);

  return loginDiv;
};
