const randomDogs = "https://random.dog/woof.json";
const randomFoxes = "https://randomfox.ca/floof/";
const dogContainer = document.querySelector("#dog-container");
const foxContainer = document.querySelector("#fox-container");
const dogBtn = document.querySelector("#dog-btn");
const foxBtn = document.querySelector("#fox-btn");

const addImages = (link, container) => {
  const img = document.createElement("img");
  img.src = link;
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
  container.appendChild(img);
};

const newFox = async () => {
  const foxRes = await fetch(randomFoxes);
  const foxData = await foxRes.json();
  const foxImage = foxData.image;
  addImages(foxImage, foxContainer);
};

const newDog = async () => {
  const dogRes = await fetch(randomDogs);
  const dogData = await dogRes.json();
  const dogImage = dogData.url;
  addImages(dogImage, dogContainer);
};

foxBtn.onclick = () => {
  newFox();
};

dogBtn.onclick = () => {
  newDog();
};

const getImages = () => {
  newFox();
  newDog();
};

getImages();
