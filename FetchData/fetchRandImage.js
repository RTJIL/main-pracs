/* function testRespond() {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=9D03cau88SxQ5iX4hF8HgStRBQdce2I6&s=cats'
  )
    .then(function (response) {
      console.log('successful response');
    })
    .catch(function (err) {
      console.log('bad response');
    });
} */

async function fetchRandImage() {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=9D03cau88SxQ5iX4hF8HgStRBQdce2I6&s=cats',
      { mode: 'cors' }
    );

    if(!response.ok) {
      throw new Error('Network was not ok')
    }

    const catData = await response.json();
    const catDataUrl = catData.data.images.original.url;
    return catDataUrl;
  } catch (e) {
    console.error('Error fetching image: ' + e);
    return null;
  }
}

export { fetchRandImage };
