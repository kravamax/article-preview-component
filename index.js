const shareButton = document.querySelector('.component__share-button');
const shareButtonClose = document.querySelector(
  '.component__share-button--close'
);
const shareToast = document.querySelector('.share-tost--mobile');

shareButton.addEventListener('click', () => {
  shareToast.classList.toggle('hidden');
});

shareButtonClose.addEventListener('click', () => {
  shareToast.classList.toggle('hidden');
});
