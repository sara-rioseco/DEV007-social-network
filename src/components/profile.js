export const Profile = (onNavigate) => {
  const profileDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const contentImgDiv = document.createElement('div');
  const backgroundImg = document.createElement('img');
  const heartImg = document.createElement('img');

  heartImg.src = 'img/logo-title-red.png';
  heartImg.classList.add('heart');
  profileDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  contentImgDiv.className = 'content-img';
  backgroundImg.src = 'img/background_pets.png';
  backgroundImg.className = 'corner-image';

  subtitle.textContent = 'Bienvenid@, este es tu perfil';
  contentDiv.appendChild(headerDiv);
  profileDiv.appendChild(heartImg);
  contentImgDiv.appendChild(backgroundImg);
  profileDiv.appendChild(contentImgDiv);
  headerDiv.appendChild(subtitle);
  profileDiv.appendChild(contentDiv);
  profileDiv.appendChild(contentDiv);

  return profileDiv;
};
