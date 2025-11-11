const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.nav-bar');

navToggle.addEventListener('click', () => {
   navBar.classList.toggle('nav-bar--visible');
})