const homeImageSlides = document.querySelectorAll('.home-image-slide');

homeImageSlides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
})

let currentSlide = 0;

const nextSlideButton = document.querySelector('.carousel-nav-arrow.next-btn-icon');

nextSlideButton.addEventListener('click', () => {
  if (currentSlide === homeImageSlides.length - 1) currentSlide = 0;
  else currentSlide++;
  homeImageSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  })
});

const prevSlideButton = document.querySelector('.carousel-nav-arrow.prev-btn-icon');

prevSlideButton.addEventListener('click', () => { 
  if (currentSlide === 0) currentSlide = homeImageSlides.length - 1;
  else currentSlide--;
  homeImageSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  })
});