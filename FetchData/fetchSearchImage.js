function fetchSearchImage(searchTerm) {
  const apiKey = '9D03cau88SxQ5iX4hF8HgStRBQdce2I6';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
    searchTerm
  )}&limit=1`;

  return fetch(url, { mode: 'cors' })
    .then((response) => {
        if (!response.ok) throw new Error(`HTTP erro! Status ${response.status}`)
        return response.json();
    })
    .then((data) => {
      if (!data.data || data.data.length === 0) {
        return null;
      }
      return data.data[0].images.original.url;
    })
    .catch((e) => {
      console.error('Error fetching image: ', e);
      return null;
    });
}

export { fetchSearchImage };
