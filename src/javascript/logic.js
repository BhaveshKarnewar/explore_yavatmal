// floating menu sidebar

let menuBtn = document.querySelector("#menuBtn");
let crossBtn = document.querySelector("#crossBtn");

let floatedMenu = document.querySelector("#floatedMenu");
menuBtn.addEventListener("click", function () {
  floatedMenu.style.display = "block";
});

crossBtn.addEventListener("click", function () {
  floatedMenu.style.display = "none";
  console.log("Cross clicked");
});

// image and text changing in right grid

let image = document.querySelector("#myImage");
let text = document.querySelector("#imageText");

let imageSet = [
  "images/chausala.jpg",
  "images/yelabaraOGdark.jpg",
  "images/nightMarket.jpg",
];

let textSet = [
  "Explore the city through my perspective",
  "Adventure awaits just beyond your doorstep!",
  "Visit Pre-reviewed places & actual experiences",
];
let currentIndex = 0;

function changeImage() {
  image.src = imageSet[currentIndex];
  text.innerHTML = textSet[currentIndex];
  currentIndex = (currentIndex + 1) % imageSet.length;
}

setInterval(changeImage, 3000);

// image and text changing in Navratri 2024

let navratriImage = document.querySelector("#navratriImage");
// let text = document.querySelector("#imageText");

let navratriImageSet = [
  "Navratri_images/01.jpg",
  "Navratri_images/02.jpg",
  "Navratri_images/03.jpg",
  "Navratri_images/04.jpg",
  "Navratri_images/05.jpg",
  "Navratri_images/06.jpg",
  "Navratri_images/07.jpg",
  "Navratri_images/08.jpg",
  "Navratri_images/09.jpg",
  "Navratri_images/10.jpg",
  "Navratri_images/11.jpg",
  "Navratri_images/12.jpg",
];

let navratriCurrentIndex = 0;

function navvratriChangeImage() {
  navratriImage.src = navratriImageSet[navratriCurrentIndex];
  navratriCurrentIndex = (navratriCurrentIndex + 1) % navratriImageSet.length;
}

setInterval(navvratriChangeImage, 2000);
