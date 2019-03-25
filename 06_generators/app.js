function moviesSequence() {
  console.log('Gone in 60 seconds');
  console.log('Peaceful Warrior');
  console.log('Matrix');
}

moviesSequence();

// Generator demo:
function* moviesSequence() {
  yield 'Gone in 60 seconds';
  yield 'Peaceful Warrior';
  yield 'Matrix';
}

const movies = moviesSequence();
console.log(movies);
console.log(movies.next());
console.log(movies.next());

for (let movie of movies) {
  console.log(movie);
}

// generators + promises 
import axios from 'axios';

const url = `https://api.discogs.com/artists/`;
function fetchArtist(url) {
  axios.get(url).then(response => artistGen.next(response.data)).catch(err => console.log(err));
}

function* artists() {
  const artist = yield fetchArtist(url + 782590);
  console.log(artist.name);
};

const artistGen = artists();
artistGen.next();

// async example 
async function artists() {
  const artists = await fetchArtist(url + 782590);
}
artists([782590]);