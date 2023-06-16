const images = ["england.jpg", "france.jpg", "germany.jpg", "italy.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);
