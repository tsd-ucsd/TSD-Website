const affordableImage = document.querySelector('#affordable-img');
const industryImage = document.querySelector('#industry-img');
const sustainableImage = document.querySelector('#sustainable-img');

affordableImage.addEventListener('click', () => {
  window.open('https://sdgs.un.org/goals/goal7', '_blank');
});

industryImage.addEventListener('click', () => {
  window.open('https://sdgs.un.org/goals/goal9', '_blank');
});

sustainableImage.addEventListener('click', () => {
  window.open('https://sdgs.un.org/goals/goal11', '_blank');
});
