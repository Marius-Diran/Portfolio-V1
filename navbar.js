const navBar = document.querySelector('.hamburger-menu');
const navItems = document.querySelector('.nav-container');

navBar.addEventListener('click', () => {
  navBar.classList.toggle('active');
  navItems.classList.toggle('active');
})