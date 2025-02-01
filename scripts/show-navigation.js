var menu = document.getElementById('hamburger'),
    closeMenu = document.getElementById('close'),
    navigation = document.getElementById('nav-bar');

menu.addEventListener('click', () => {
  navigation.style.transition = '0.5s';
  navigation.style.top = '0';

  menu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  navigation.style.transition = '0.5s';
  navigation.style.top = '-195px';

  menu.style.display = 'block';
  closeMenu.style.display = 'none';
});