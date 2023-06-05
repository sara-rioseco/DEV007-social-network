export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const googleBttn = document.createElement('button');
  const registerBttn = document.createElement('button');

  homeDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';

  headerDiv.innerHTML = '<img src="./img/logo-big.png" alt="logo" id="logo">';
  title.textContent = "PETS' DIARIES";
  subtitle.textContent = '¡Bienvenid@ a la red social para los amantes de los animales!';
  loginBttn.textContent = 'Iniciar sesión';
  googleBttn.textContent = 'Iniciar sesión con Google';
  registerBttn.textContent = 'Registrarme';

  loginBttn.addEventListener('click', () => onNavigate('/login'));
  registerBttn.addEventListener('click', () => onNavigate('/register'));

  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(googleBttn);
  contentDiv.appendChild(registerBttn);
  headerDiv.appendChild(title);
  headerDiv.appendChild(subtitle);
  homeDiv.appendChild(headerDiv);
  homeDiv.appendChild(contentDiv);

  return homeDiv;
};
