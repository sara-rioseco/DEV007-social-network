import { doc, onSnapshot } from 'firebase/firestore';
import { createPost } from '../lib/index.js';

/* const timelineChg = onSnapshot(doc(db, "cities", "SF"), (doc) => {
  console.log("Current data: ", doc.data());
}); */

export const Timeline = (onNavigate) => {
  const timelineDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const contentDiv = document.createElement('div');
  const postInput = document.createElement('input');
  const publishBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  postInput.classList.add('inputBox');
  postInput.id = 'myPostInput';
  postInput.placeholder = 'Escribe lo que quieras publicar';
  postInput.required = true;

  publishBttn.id = 'publishbutton';
  homeBttn.id = 'home-button';

  backgroundImg.classList.add('pets');
  const divTitleRegister = document.createElement('li');

  divTitleRegister.classList.add('divTitleRegister');
  timelineDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';
  headerDiv.innerHTML = '<img src="./img/logo-title-red.png" alt="logo" id="logo">';

  title.textContent = 'Comparte tu historia';
  publishBttn.textContent = 'Publicar';
  homeBttn.textContent = 'Volver al inicio';

  homeBttn.addEventListener('click', () => onNavigate('/'));
  publishBttn.addEventListener('click', (e) => {
    e.preventDefault();
    const post = document.getElementById('myPostInput').value;
    createPost(post);
    console.log('Se ha creado tu post');
  });

  timelineDiv.appendChild(heartImg);

  contentImgDiv.appendChild(backgroundImg);
  timelineDiv.appendChild(contentImgDiv);

  contentDiv.appendChild(title);
  contentDiv.appendChild(postInput);
  contentDiv.appendChild(publishBttn);
  contentDiv.appendChild(homeBttn);
  timelineDiv.appendChild(contentDiv);

  return timelineDiv;
};
