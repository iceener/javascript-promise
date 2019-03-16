function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", event => resolve(img));
    img.addEventListener("error", reason => reject(new Error(`Failed to load ${url}`)));
    img.src = url;
  });
}

const url = 'http://thecatapi.com/api/images/get?format=src&type=jpg&size=small';
async function loadImages() {
  try {
    const image = await loadImageAsync(url);
    document.querySelector('.image').appendChild(image);
  } catch(err) {
    console.log(Error(err));
  }
}

loadImages();