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
  documentId,
} from 'firebase/firestore';
import {
  createPost,
  createPostDiv,
  getUserEmail,
  getUsername,
  addLike,
  removeLike,
  deletePost,
  userLogout,
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

  profileButton.addEventListener('click', () => onNavigate('/profile'));

  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
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
      const publicacionPost = document.createElement('div');
      publicacionPost.className = 'publicacionPost';

      const likeImg = document.createElement('img');
      const removeLikeImg = document.createElement('img');

      likeImg.src = 'img/red-paw-like.png';
      likeImg.alt = 'icono de motita like';
      likeImg.className = 'likeImg';
      removeLikeImg.src = 'img/grey-paw-like.png';
      removeLikeImg.alt = 'icono de motita like';
      removeLikeImg.className = 'removeLikeImg';

      const spanLike = document.createElement('span');
      spanLike.innerHTML = '(0)';
      spanLike.classList.add('spanLike');
      if (post.data().likes !== undefined) {
        spanLike.innerHTML = `(${post.data().likes.length})`;
      }

      likeImg.addEventListener('click', () => {
        if (post.likes === undefined) {
          addLike(post.id, []);
        } else {
          addLike(post.id, post.data().likes);
        }
      });

      removeLikeImg.addEventListener('click', () => {
        removeLike(post.id);
      });

      const name = post.data().displayName;
      const localDate = post.data().time.toDate().toLocaleDateString();
      const localTime = post.data().time.toDate().toLocaleTimeString().slice(0, 5);
      const content = post.data().content;
      const docId = post.id;
      
      postsDiv.appendChild(createPostDiv(name, localDate, localTime, content, docId));
      publicacionPost.appendChild(postsDiv);
      publicacionPost.appendChild(likeImg);
      publicacionPost.appendChild(spanLike);
      publicacionPost.appendChild(removeLikeImg);
    });
  });
  return timelineDiv;
};

