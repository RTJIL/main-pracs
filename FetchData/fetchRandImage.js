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

function  fetchRandImage() {
  return fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=9D03cau88SxQ5iX4hF8HgStRBQdce2I6&s=cats',
    { mode: 'cors' }
  )
    .then(response => response.json())
    .then(data => data.data.images.original.url)
    .catch((e) => {
      console.error("Error fetching image: " + e);
    });
}

export { fetchRandImage };
