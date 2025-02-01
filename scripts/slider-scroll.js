/* Games section */

document.querySelector('#games .container #left-button').addEventListener('click', () => {
  document.getElementById('slider-games').scrollTo(0, 0);
});

document.querySelector('#games .container #right-button').addEventListener('click', () => {
  document.getElementById('slider-games').scrollTo(5000, 0);
});



/* Hardware section */

document.querySelector('#hardware .container #left-button').addEventListener('click', () => {
  document.getElementById('slider-hardware').scrollTo(0, 0);
});

document.querySelector('#hardware .container #right-button').addEventListener('click', () => {
  document.getElementById('slider-hardware').scrollTo(5000, 0);
});



/* Merchandise section */

document.querySelector('#merchandise .container #left-button').addEventListener('click', () => {
  document.getElementById('slider-merchandise').scrollBy(-222, 0);
});

document.querySelector('#merchandise .container #right-button').addEventListener('click', () => {
  document.getElementById('slider-merchandise').scrollBy(222, 0);
});