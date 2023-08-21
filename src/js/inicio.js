// Script para el carrusel bucle infinito con retroceso
const carouselImages = document.querySelector('.carousel-images');
const carouselImageWidth = document.querySelector('.carousel-image').clientWidth;
let currentSlide = 0;
let direction = 1; // 1 para avanzar y -1 para retroceder

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = carouselImages.children.length - 1;
  } else if (slideIndex >= carouselImages.children.length) {
    slideIndex = 0;
  }

  carouselImages.style.transform = `translateX(-${slideIndex * carouselImageWidth}px)`;
  currentSlide = slideIndex;
}

function changeSlide() {
  showSlide(currentSlide + direction);
}

function toggleDirection() {
  direction = direction === 1 ? -1 : 1;
}

setInterval(changeSlide, 3000); // Cambiar de imagen cada 3 segundos


//==================
