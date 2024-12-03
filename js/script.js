'use strict';
const navbar = document.querySelector('.navbar');
// For Navbar Scrolls
const userScroll = function () {
  window.addEventListener('scroll', () => {
    if (window.scrollY) {
      navbar.classList.add('bg-dark', 'navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark', 'navbar-sticky');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  userScroll();
});
