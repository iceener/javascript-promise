const iTunesPromise = axios.get('https://itunes.apple.com/search?term=alita battle angel&media=music');

iTunesPromise
    .then(
        response => console.log(response.data),
        reason => console.log(reason)
    );

console.log('Finished!');
console.log('Finished!');
console.log('Finished!');
console.log('Finished!');
// iTunes