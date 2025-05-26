import { fetchRandImage } from './fetchRandImage.js';
import { fetchSearchImage } from './fetchSearchImage.js';

const randButton = document.querySelector('[data-random-btn]');
const img = document.querySelector('img');
const form = document.querySelector('.searchForm');

randButton.addEventListener('click', async () => {
  const url = await fetchRandImage();
  img.src = url;
});

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page reload
  const input = document.getElementById('search');
  const searchTerm = input.value.trim();
  if (!searchTerm) return; // don't search empty

  const url = await fetchSearchImage(searchTerm);
  if (url) {
    img.src = url;
  }
});
