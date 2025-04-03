import getToken from './module/unsplash.js';

(async () => {
  const token = await getToken();
  const body = document.querySelector('body');
  const locationName = document.querySelector('#locationName');
  body.style.backgroundImage = `url(${token.bg})`;
  locationName.textContent = token.location;
})();

