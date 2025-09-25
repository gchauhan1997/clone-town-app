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

  // Select all submenu elements and hide them by default
  document.querySelectorAll(".submenu-mobile").forEach(sub => {
    sub.style.display = "none";
  });

  // Add click event for each menu item
  document.querySelectorAll(".menu-li-mobile").forEach(menu => {
    menu.addEventListener("click", () => {
      const submenu = menu.querySelector(".submenu-mobile");
      if (submenu) {
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
      }
    });
  });