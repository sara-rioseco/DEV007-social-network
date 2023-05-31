import { onNavigate } from '../main.js';

export const timeline = () => {
  const timelineDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const msgDiv = document.createElement('div');
  const homeBttn = document.createElement('button');

  headerDiv.textContent = "PETS' DIARIES";
  msgDiv.textContent = 'Publicaciones más recientes';
  homeBttn.textContent = 'Volver al inicio';

  homeBttn.addEventListener('click', onNavigate('/'));

  timelineDiv.appendChild(headerDiv);
  timelineDiv.appendChild(msgDiv);
  timelineDiv.appendChild(homeBttn);

  return timelineDiv;
};
