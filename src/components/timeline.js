export const Timeline = (onNavigate) => {
  const timelineDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');

  timelineDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';

  title.textContent = "PETS' DIARIES";
  subtitle.textContent = '¡Bienvenid@ a la red social para los amantes de los animales!';
  homeBttn.textContent = 'Volver atrás';

  homeBttn.addEventListener('click', () => onNavigate('/'));

  contentDiv.appendChild(homeBttn);
  headerDiv.appendChild(title);
  headerDiv.appendChild(subtitle);
  timelineDiv.appendChild(headerDiv);
  timelineDiv.appendChild(contentDiv);

  return timelineDiv;
};
