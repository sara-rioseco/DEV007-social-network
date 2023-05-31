export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const msgDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const registerBttn = document.createElement('button');

  headerDiv.textContent = "PETS' DIARIES";
  msgDiv.textContent = '¡Bienvenid@ a la red social para los amantes de los animales!';
  loginBttn.textContent = 'Inicia sesión';
  registerBttn.textContent = 'Regístrate';

  loginBttn.addEventListener('click', () => onNavigate('/login'));
  registerBttn.addEventListener('click', () => onNavigate('/register'));

  homeDiv.appendChild(headerDiv);
  homeDiv.appendChild(msgDiv);
  homeDiv.appendChild(loginBttn);
  homeDiv.appendChild(registerBttn);

  return homeDiv;
};
