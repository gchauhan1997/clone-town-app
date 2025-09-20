document.addEventListener('DOMContentLoaded', function () {
  const mobileNav = document.querySelector('.Navigation__Mobile-sc-o5xf0x-6');
  const hamburger = document.querySelector('.Navigation__Hamburg-sc-o5xf0x-8');

  if (mobileNav && hamburger) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open');
    });
  }
});
