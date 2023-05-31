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

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
