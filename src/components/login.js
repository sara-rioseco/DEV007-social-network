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
  const googleBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  emailInput.id = 'myEmailInput';
  emailInput.classList.add('inputBox');
  emailInput.placeholder = 'Email';
  passwordInput.classList.add('inputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.minLength = 6;
  passwordInput.required = true;
  homeBttn.id = 'home-button';

  backgroundImg.classList.add('pets');
  const divTitleLogin = document.createElement('li');

  divTitleLogin.classList.add('divTitleLogin');
  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';

  title.textContent = 'Iniciar Sesión';
  subtitle.textContent = 'O con tu cuenta de gmail';
  loginBttn.textContent = 'iniciar sesión';
  googleBttn.textContent = 'Iniciar Sesión con Google';
  loginBttn.textContent = 'Iniciar sesión';
  homeBttn.textContent = 'Volver al inicio';

  loginBttn.addEventListener('click', () => onNavigate('/login'));
  googleBttn.addEventListener('click', () => onNavigate('/'));
  homeBttn.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(heartImg);

  contentImgDiv.appendChild(backgroundImg);
  loginDiv.appendChild(contentImgDiv);

  contentDiv.appendChild(title);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(subtitle);
  contentDiv.appendChild(googleBttn);
  contentDiv.appendChild(homeBttn);
  firstDiv.appendChild(loginTitle);
  loginDiv.appendChild(contentDiv);

  return loginDiv;
};
