// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const toTop = document.getElementById('to-top');

  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.add('flex');
    toTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik window untuk close hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});
