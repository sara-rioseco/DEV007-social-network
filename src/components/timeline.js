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
  const contentPostDiv = document.createElement('div');
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
  profileButton.classList.add('navBttn');
  homeButton.textContent = 'Inicio';
  homeButton.classList.add('navBttn');
  logoutButton.textContent = 'Cerrar sesión';
  logoutButton.classList.add('navBttn');
  postInput.classList.add('timelineInputBox');
  postInput.id = 'myPostInput';
  postInput.placeholder = 'Escribe lo que quieras publicar';
  postInput.required = true;

  postsDiv.id = 'posts-div';

  publishButton.id = 'publishbutton';
  publishButton.textContent = 'Publicar';
  publishButton.className = 'buttonToPost';
  title.textContent = 'Comparte tu historia';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'timelineCornerImage';
  navigationDiv.className = 'navigation';

  timelineDiv.className = 'timelineSection';
  contentDiv.className = 'timelineContentDiv';
  contentPostDiv.className = 'timelinePosts';
  postsDiv.className = '';
  contentImgDiv.className = 'corner-image';

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
  contentPostDiv.appendChild(postsDiv);

  timelineDiv.appendChild(contentDiv);
  timelineDiv.appendChild(contentPostDiv);
  timelineDiv.appendChild(contentImgDiv);

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
