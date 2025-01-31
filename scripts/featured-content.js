var leftButton = document.getElementById('featured-content-left-button'),
    rightButton = document.getElementById('featured-content-right-button'),
    radioButton1 = document.getElementById('featured-content-radio-button-1'),
    radioButton2 = document.getElementById('featured-content-radio-button-2'),
    radioButton3 = document.getElementById('featured-content-radio-button-3'),
    featuredImageCount = 0;

leftButton.addEventListener('click', () => {
  if (featuredImageCount === 0) {
    featuredImageCount = 2;
  } else {
    featuredImageCount--;
  }

  updateImage();
});

rightButton.addEventListener('click', () => {
  if (featuredImageCount === 2) {
    featuredImageCount = 0;
  } else {
    featuredImageCount++;
  }

  updateImage();
});

radioButton1.addEventListener('click', () => {
  featuredImageCount = 0;
  updateImage();
});

radioButton2.addEventListener('click', () => {
  featuredImageCount = 1;
  updateImage();
});

radioButton3.addEventListener('click', () => {
  featuredImageCount = 2;
  updateImage();
});

function updateImage() {
  switch (featuredImageCount) {
    case 0:
      document.getElementById('featured-content-link').setAttribute('href', 'https://www.nintendo.com/us/whatsnew/donkey-kong-country-returns-hd-is-out-now-for-the-nintendo-switch-system/');
      document.getElementById('featured-content-image').setAttribute('src', 'images/featured-images/donkey-kong-country-1024.png');
      document.getElementById('featured-content-image-1440').setAttribute('srcset', 'images/featured-images/donkey-kong-country-1440.png');
      radioButton1.checked = true;
      break;
    case 1:
      document.getElementById('featured-content-link').setAttribute('href', 'https://www.nintendo.com/us/whatsnew/nintendo-switch-2-to-be-released-in-2025/');
      document.getElementById('featured-content-image').setAttribute('src', 'images/featured-images/nintendo-switch-2-1024.png');
      document.getElementById('featured-content-image-1440').setAttribute('srcset', 'images/featured-images/nintendo-switch-2-1440.png');
      radioButton2.checked = true;
      break;
    case 2:
      document.getElementById('featured-content-link').setAttribute('href', 'https://www.nintendo.com/us/whatsnew/upgrade-your-sandwiches-with-this-free-pokemon-scarlet-and-pokemon-violet-code/');
      document.getElementById('featured-content-image').setAttribute('src', 'images/featured-images/pokemon-scarlet-and-violet-1024.png');
      document.getElementById('featured-content-image-1440').setAttribute('srcset', 'images/featured-images/pokemon-scarlet-and-violet-1440.png');
      radioButton3.checked = true;
  }
}