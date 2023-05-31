import { onNavigate } from '../main.js';

export const login = () => {
  const loginDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const msgDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const homeBttn = document.createElement('button');

  headerDiv.textContent = "PETS' DIARIES";
  msgDiv.textContent = 'Ingresa tus datos para iniciar sesión';
  loginBttn.textContent = 'Iniciar sesión';
  homeBttn.textContent = 'Volver al inicio';

  loginBttn.addEventListener('click', onNavigate('/login'));
  homeBttn.addEventListener('click', onNavigate('/'));

  loginDiv.appendChild(headerDiv);
  loginDiv.appendChild(msgDiv);
  loginDiv.appendChild(loginBttn);

  return loginDiv;
};
