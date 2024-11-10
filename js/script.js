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

document.addEventListener("DOMContentLoaded", function() {
  const dishes = document.querySelectorAll(".freak");
  dishes.forEach(item => {
      item.addEventListener("click", function() {
          const name = encodeURIComponent(this.getAttribute("data-name"));
          const img = encodeURIComponent(this.getAttribute("data-img"));
          const description = encodeURIComponent(this.getAttribute("data-description"));
          // Redirect to details page with parameters
          window.location.href = `html/details.html?name=${name}&img=${img}&description=${description}`;
      });
  });
});
