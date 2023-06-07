import { Home } from './components/home.js';
import { Login } from './components/login.js';
import { Register } from './components/register.js';
import { Timeline } from './components/timeline.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/timeline': Timeline,
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
  rootDiv.appendChild(routes[pathname](onNavigate));
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname](onNavigate));
};
rootDiv.appendChild(routes[window.location.pathname](onNavigate));

