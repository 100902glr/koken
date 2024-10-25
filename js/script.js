let slideIndex = 0;
// voeg foto's toe!!
let images = [
  'url("../media/slide.jpg")',
  'url("../media/slide2.jpg")',
  'url("../media/slide3.jpg")',
];

function showSlides() {
  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  document.body.style.backgroundImage = images[slideIndex - 1];
  setTimeout(showSlides, 4000); // verander achtergrond om de ... seconden
}

showSlides(); // Start de slideshow
