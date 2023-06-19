import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import {
  createPost,
  createPostDiv,
  userLogout,
  spanLikeFunc,
  confirmTimestamp,
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
  postInput.autocomplete = 'off';

  postsDiv.id = 'posts-div';
  postsDiv.className = 'publicacionPost';

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

  profileButton.addEventListener('click', () => onNavigate('/profile'));

  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });

  publishButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const post = document.getElementById('myPostInput').value;
    createPost(post);
    postInput.value = '';
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
      const name = post.data().displayName;
      const content = post.data().content;
      const likesArr = post.data().likes;
      const docId = post.id;
      const spanLike = spanLikeFunc(post, likesArr);
      const localDate = post.data().time.toDate().toLocaleDateString();
      const localTime = post.data().time.toDate().toLocaleTimeString().slice(0, 5);
      postsDiv.appendChild(createPostDiv(name, localDate, localTime, content, docId, spanLike));
    });
  });

  return timelineDiv;
};
