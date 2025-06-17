const shareButton = document.querySelector('.component__share-button');
const shareButtonClose = document.querySelector(
  '.component__share-button--close'
);
const shareToast = document.querySelector('.share-tost--mobile');

shareButton.addEventListener('click', (e) => {
  e.stopPropagation();
  hideToast();
});

shareButtonClose.addEventListener('click', (e) => {
  e.stopPropagation();
  hideToast();
});

document.addEventListener('click', (e) => {
  const isClickInsideToast = shareToast.contains(e.target);

  if (!isClickInsideToast && !shareToast.classList.contains('hidden')) {
    hideToast();
  }
});

function hideToast() {
  shareToast.classList.toggle('hidden');
}
