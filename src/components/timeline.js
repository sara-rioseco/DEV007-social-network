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
  getUsername
} from '../lib/index.js';
import { db } from '../firebase.js';

export const Timeline = (onNavigate) => {
  const timelineDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const nav = document.createElement('nav');
  const logoImg = document.createElement('img');
  const profileButton = document.createElement('button');
  const homeButton = document.createElement('button');
  const logoutButton = document.createElement('button');
  const title = document.createElement('h1');
  const contentDiv = document.createElement('div');
  const postsDiv = document.createElement('div');
  const postInput = document.createElement('input');
  const publishBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, where('content', '=', true), orderBy('time', 'desc'));

  nav.className = 'navigation';
  logoImg.src = 'img/logo.png';
  logoImg.alt = 'Logo';
  logoImg.classList.add('logo');
  profileButton.textContent = 'Perfil';
  homeButton.textContent = 'Inicio';
  logoutButton.textContent = 'Cerrar sesión';
  postInput.classList.add('inputBox');
  postInput.id = 'myPostInput';
  postInput.placeholder = 'Escribe lo que quieras publicar';
  postInput.required = true;
  postsDiv.id = 'posts-div';
  publishBttn.id = 'publishbutton';
  homeBttn.id = 'home-button';

  backgroundImg.classList.add('pets');
  const divTitleRegister = document.createElement('li');
  divTitleRegister.classList.add('divTitleRegister');
  timelineDiv.className = 'home-div';// 'timeline-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'TimelineContentDiv';
  postsDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';

  title.textContent = 'Comparte tu historia';
  publishBttn.textContent = 'Publicar';
  homeBttn.textContent = 'Volver al inicio';

  onSnapshot(postsRef, (querySnapshot) => {
    postsDiv.innerHTML = '';
    querySnapshot.forEach((post) => {
      const username = getUsername();

      const postDiv = `
      <div class="publicacionPost">
      <p class="usuario">${username} publicó:</p>
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

  homeBttn.addEventListener('click', () => onNavigate('/'));
  publishBttn.addEventListener('click', async (e) => {
    e.preventDefault();
    const postText = document.getElementById('myPostInput').value;
    createPost(postText);
  });

  homeButton.addEventListener('click', () => onNavigate('/'));
  logoutButton.addEventListener('click', () => {
    // Add your logout logic here
    console.log('Logout clicked');
  });

  nav.appendChild(logoImg);
  nav.appendChild(profileButton);
  nav.appendChild(homeButton);
  nav.appendChild(logoutButton);
  contentImgDiv.appendChild(backgroundImg);
  timelineDiv.appendChild(contentImgDiv);

  contentDiv.appendChild(title);
  contentDiv.appendChild(postInput);
  contentDiv.appendChild(publishBttn);
  contentDiv.appendChild(homeBttn);
  timelineDiv.appendChild(nav);
  timelineDiv.appendChild(contentDiv);
  timelineDiv.appendChild(postsDiv);

  return timelineDiv;
};
