function testRespond() {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=9D03cau88SxQ5iX4hF8HgStRBQdce2I6&s=cats'
  )
    .then(function (response) {
      console.log('successful response');
    })
    .catch(function (err) {
      console.log('bad response');
    });
}

function addImage() {
  const img = document.querySelector('img');
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=9D03cau88SxQ5iX4hF8HgStRBQdce2I6&s=cats',
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(e => {
      console.log(e)
    });
}

addImage();
