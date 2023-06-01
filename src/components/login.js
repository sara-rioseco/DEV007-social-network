export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const homeBttn = document.createElement('button');

  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';

  title.textContent = "PETS' DIARIES";
  subtitle.textContent = 'Ingresa tus datos para iniciar sesión';
  loginBttn.textContent = 'Iniciar sesión';
  homeBttn.textContent = 'Volver atrás';

  loginBttn.addEventListener('click', () => onNavigate('/login'));
  homeBttn.addEventListener('click', () => onNavigate('/'));

  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(homeBttn);
  headerDiv.appendChild(title);
  headerDiv.appendChild(subtitle);
  loginDiv.appendChild(headerDiv);
  loginDiv.appendChild(contentDiv);

  return loginDiv;
};
