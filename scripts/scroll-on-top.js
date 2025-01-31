var scrollUpButton = document.getElementById('scroll-up-button');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }  
});

scrollUpButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});