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

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  emailInput.classList.add('myEmailInput');
  emailInput.id = 'myEmailInput';
  emailInput.classList.add('inputBox');
  emailInput.placeholder = 'Ingresa tu Correo';
  passwordInput.classList.add('inputBox');
  passwordInput.type = 'password';
  passwordInput.classList.add('myPasswordInput');
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.minLength = 6;
  passwordInput.required = true;
  homeBttn.classList.add('homeButton');
  backgroundImg.classList.add('pets');
  divTitleLogin.classList.add('divTitleLogin');
  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';
  logoGoogle.src = 'img/logo_google.png';
  logoGoogle.classList.add('logoGoogle');
  loginBttn.classList.add('loginBttn');
  title.textContent = 'Iniciar Sesión';
  loginBttn.textContent = 'iniciar sesión';
  loginBttn.textContent = 'Iniciar sesión';
  homeBttn.textContent = 'Volver al inicio';

  homeBttn.addEventListener('click', () => onNavigate('/'));
  loginBttn.addEventListener('click', () => {
    const email = document.getElementById('myEmailInput').value;
    const password = document.getElementById('myPasswordInput').value;
    userLogin(email, password).then(
      (result) => {
        onNavigate('/timeline');
        console.log('Estás loguead@');
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
      },
      () => console.log('Credenciales incorrectas'),
    );
  });

  logoGoogle.addEventListener('click', () => {
    userGoogleLogin().then(
      () => {
        onNavigate('/timeline');
        console.log('Estás loguead@');
      },
      () => console.log('Credenciales incorrectas'),
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
