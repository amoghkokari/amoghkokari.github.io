let cardContainer = document.querySelector('.card-container');

window.addEventListener('resize', function() {
  let width = window.innerWidth;
  if (width < 600) {
    cardContainer.style.width = '100%';
  } else {
    cardContainer.style.width = '1000px';
  }
});