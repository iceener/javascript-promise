function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", event => resolve(img));
    img.addEventListener("error", reason => reject(new Error(`Failed to load ${url}`)));
    img.src = url;
  });
}

loadImageAsync("http://thecatapi.com/api/images/get?format=src&type=jpg&size=small")
  .then(img => document.querySelector('.image').appendChild(img))
  .catch(reason => console.log(reason));