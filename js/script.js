const imageUrls = ['img/imagem-home/download.jpg', 'img/imagem-home/download (1).jpg', 'img/imagem-home/cinza-escuro.jpg'];
let currentIndex = 0;

const currentImage = document.querySelector('.img1');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageUrls.length - 1;
  }
  currentImage.src = imageUrls[currentIndex];
});

next.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= imageUrls.length) {
    currentIndex = 0;
  }
  currentImage.src = imageUrls[currentIndex];
});