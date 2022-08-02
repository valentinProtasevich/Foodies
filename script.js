function hideElement(element) {
  element.classList.add('hidden');
}

document.querySelector('.hamburger-menu').addEventListener('click', (e) => {
  hideElement(e.target.parentElement)
});