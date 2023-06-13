import {
  collection,
  query,
  where,
  doc,
  onSnapshot,
  getDocs,
  getDoc,
  deleteDoc,
  orderBy,
  QuerySnapshot,
} from 'firebase/firestore';
import {
  createPost,
  createPostDiv,
  getUserEmail,
  getUsername,
} from '../lib/index.js';
import { db } from '../firebase.js';

export const Timeline = (onNavigate) => {
  const timelineDiv = document.createElement('div');
  const navigationDiv = document.createElement('div');
  const logoImg = document.createElement('img');
  const profileButton = document.createElement('button');
  const homeButton = document.createElement('button');
  const logoutButton = document.createElement('button');

  const contentDiv = document.createElement('div');
  const postsDiv = document.createElement('div');

  const title = document.createElement('h4');
  const postInput = document.createElement('input');
  const publishButton = document.createElement('button');
  const backgroundImg = document.createElement('img');
  const contentImgDiv = document.createElement('div');

  const postsRef = query(collection(db, 'posts'), orderBy('time', 'desc'));

  logoImg.src = 'img/logo-title-red.png';
  logoImg.alt = 'Logo';
  logoImg.classList.add('timelineLogo');
  profileButton.textContent = 'Perfil';
  homeButton.textContent = 'Inicio';
  logoutButton.textContent = 'Cerrar sesión';
  postInput.classList.add('timelineInputBox');
  postInput.id = 'myPostInput';
  postInput.placeholder = 'Escribe lo que quieras publicar';
  postInput.required = true;

  postsDiv.id = 'posts-div';

  publishButton.id = 'publishbutton';
  publishButton.textContent = 'Publicar';
  title.textContent = 'Comparte tu historia';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'timelineCornerImage';
  navigationDiv.className = 'navigation';

  contentDiv.className = 'timelineContentDiv';
  postsDiv.className = '';

  contentImgDiv.className = 'timelineContentImg';

  homeButton.addEventListener('click', () => onNavigate('/'));

  profileButton.addEventListener('click', () => onNavigate('/perfil'));

  logoutButton.addEventListener('click', () => {
    // Agrega aquí tu lógica para cerrar sesión
    console.log('Logout clicked');
  });

  publishButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const post = document.getElementById('myPostInput').value;
    createPost(post);
    console.log('Se ha creado tu post');
  });

  navigationDiv.appendChild(logoImg);
  navigationDiv.appendChild(profileButton);
  navigationDiv.appendChild(homeButton);
  navigationDiv.appendChild(logoutButton);

  contentDiv.appendChild(title);
  contentDiv.appendChild(postInput);
  contentDiv.appendChild(publishButton);
  contentImgDiv.appendChild(backgroundImg);
  timelineDiv.appendChild(navigationDiv);

  timelineDiv.appendChild(contentDiv);
  timelineDiv.appendChild(contentImgDiv);
  timelineDiv.appendChild(postsDiv);

  /* const divTitleRegister = document.createElement('li');
  divTitleRegister.classList.add('divTitleRegister');
  timelineDiv.className = 'home-div';// 'timeline-div';
  headerDiv.className = 'header-div';

  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';

  title.textContent = 'Comparte tu historia';
  homeBttn.textContent = 'Volver al inicio';

  nav.appendChild(logoImg);
  nav.appendChild(profileButton);
  nav.appendChild(homeButton);
  nav.appendChild(logoutButton);
  contentImgDiv.appendChild(backgroundImg);
  timelineDiv.appendChild(contentImgDiv);

  contentDiv.appendChild(title);
  contentDiv.appendChild(postInput);
  contentDiv.appendChild(publishButton);
  contentDiv.appendChild(homeBttn);
  timelineDiv.appendChild(nav);
  timelineDiv.appendChild(contentDiv);
  timelineDiv.appendChild(postsDiv);
*/

  onSnapshot(postsRef, (querySnapshot) => {
    postsDiv.innerHTML = '';
    querySnapshot.forEach((post) => {
      const username = getUsername();

      const postDiv = `
      <div class="publicacionPost">
      <p class="usuario">${post.data().displayName} publicó:</p>
      <p class="descripcionPost">${post.data().content}</p>
      <div class="editarPublicacion">
        <button class="editar">Editar</button>
      </div>
      <div class="eliminarPublicacion">
        <button class="eliminar">Eliminar</button>
      </div>
      </div>
      `;
      postsDiv.innerHTML += postDiv;
    });
  });

  return timelineDiv;
};
