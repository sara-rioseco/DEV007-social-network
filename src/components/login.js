export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h3');
  const contentDiv = document.createElement('div');
  const firstDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const loginTitle = document.createElement('h4');
  const passwordInput = document.createElement('input');
  const loginBttn = document.createElement('button');
  const loginHomeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');
  const buttonLoginGoogle = document.createElement('button');
  const logoGoogle = document.createElement('img');
  const divTitleLogin = document.createElement('li');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  emailInput.classList.add('inputBox');
  emailInput.placeholder = 'Ingresa tu Correo';
  passwordInput.classList.add('inputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.minLength = 6;
  passwordInput.required = true;
  backgroundImg.classList.add('pets');
  divTitleLogin.classList.add('divTitleLogin');
  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';

  logoGoogle.src = 'https://i.ibb.co/D49QQs0/logo-Google.png';
  logoGoogle.classList.add('logoGoogle');
  loginBttn.classList.add('loginBttn');
  buttonLoginGoogle.innerHTML = 'Iniciar sesión con <i class="fa fa-google"></i>oogle';
  buttonLoginGoogle.classList.add('loginBttnGoogle');
  title.textContent = 'Iniciar Sesión';
  subtitle.textContent = 'O con tu cuenta de gmail';
  loginBttn.textContent = 'iniciar sesión';
  loginHomeBttn.classList.add('loginHomeBttn');
  loginHomeBttn.textContent = 'Volver atrás';

  loginBttn.addEventListener('click', () => onNavigate('/timeline'));
  loginHomeBttn.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(heartImg);
  contentImgDiv.appendChild(backgroundImg);
  loginDiv.appendChild(contentImgDiv);
  contentDiv.appendChild(title);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(subtitle);
  contentDiv.appendChild(buttonLoginGoogle);
  buttonLoginGoogle.appendChild(logoGoogle);
  firstDiv.appendChild(loginTitle);
  contentDiv.appendChild(loginHomeBttn);
  loginDiv.appendChild(contentDiv);

  return loginDiv;
};
