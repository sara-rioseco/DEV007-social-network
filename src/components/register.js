export const Register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const registerBttn = document.createElement('button');
  const homeBttn = document.createElement('button');

  registerDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';

  title.textContent = "PETS' DIARIES";
  subtitle.textContent = 'Ingresa tus datos para registrarte';
  registerBttn.textContent = 'Registrarme';
  homeBttn.textContent = 'Volver atrás';

  registerBttn.addEventListener('click', () => onNavigate('/register'));
  homeBttn.addEventListener('click', () => onNavigate('/'));

  contentDiv.appendChild(registerBttn);
  contentDiv.appendChild(homeBttn);
  headerDiv.appendChild(title);
  headerDiv.appendChild(subtitle);
  registerDiv.appendChild(headerDiv);
  registerDiv.appendChild(contentDiv);

  return registerDiv;
};
