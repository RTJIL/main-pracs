import { fetchRandImage } from './fetchRandImage.js';

function addImg() {
  const content = document.querySelector('.content');
  const button = document.querySelector('[data-random-btn]');

  button.addEventListener('click', async () => {
    const img = document.createElement('img');
    content.appendChild(img);
    console.log('img element added successfuly');

    const url = await fetchRandImage();
    img.src = url;
  });
}

export { addImg };
