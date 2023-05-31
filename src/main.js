import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { timeline } from './components/timeline.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/login': login,
  '/register': register,
  '/timeline': timeline,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
