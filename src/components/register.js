import { onNavigate } from '../main.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const msgDiv = document.createElement('div');
  const registerBttn = document.createElement('button');
  const homeBttn = document.createElement('button');

  headerDiv.textContent = "PETS' DIARIES";
  msgDiv.textContent = 'Ingresa tus datos para registrarte';
  registerBttn.textContent = 'Registrarme';
  homeBttn.textContent = 'Volver al inicio';

  registerBttn.addEventListener('click', onNavigate('/register'));
  homeBttn.addEventListener('click', onNavigate('/'));

  registerDiv.appendChild(headerDiv);
  registerDiv.appendChild(msgDiv);
  registerDiv.appendChild(registerBttn);
  registerDiv.appendChild(homeBttn);

  return registerDiv;
};
