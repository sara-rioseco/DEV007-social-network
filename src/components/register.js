export const Register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h3');
  const contentDiv = document.createElement('div');
  const firstDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const registerTitle = document.createElement('h4');
  const passwordInput = document.createElement('input');
  const registerBttn = document.createElement('button');
  const googleBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  emailInput.classList.add('inputBox');
  emailInput.placeholder = 'Email';
  passwordInput.classList.add('inputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.minLength = 6;
  passwordInput.required = true;

  backgroundImg.classList.add('pets');
  const divTitleRegister = document.createElement('li');

  divTitleRegister.classList.add('divTitleRegister');
  registerDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';

  title.textContent = 'Regístrate';
  subtitle.textContent = 'O con tu cuenta de gmail';
  registerBttn.textContent = 'iniciar sesión';
  googleBttn.textContent = 'Iniciar Sesión con Google';
  registerBttn.textContent = 'Iniciar sesión';

  registerBttn.addEventListener('click', () => onNavigate('/login'));
  googleBttn.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(heartImg);

  contentImgDiv.appendChild(backgroundImg);
  registerDiv.appendChild(contentImgDiv);

  contentDiv.appendChild(title);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(registerBttn);
  contentDiv.appendChild(subtitle);
  contentDiv.appendChild(googleBttn);
  firstDiv.appendChild(registerTitle);
  registerDiv.appendChild(contentDiv);

  return registerDiv;
};
