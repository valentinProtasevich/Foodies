function hideElement(element) {
  element.classList.toggle('hidden');
}

function toggleOpenedNav(element) {
  element.classList.toggle('openedNav');
}

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  hideElement(document.querySelector('.logo'));
  hideElement(document.querySelector('.company-name'));
  hideElement(document.querySelector('.nav__main-block'));
  hideElement(document.querySelector('.addMenus'));
  toggleOpenedNav(document.querySelector('.nav'));
});