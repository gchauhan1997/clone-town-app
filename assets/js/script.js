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

document.querySelectorAll('.Accordion__Wrapper-sc-1tqkz2w-0').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    // remove active class from all summaries (optional)
    document.querySelectorAll('.Accordion__Details-sc-1tqkz2w-3').forEach(summary => {
      summary.classList.remove('active');
    });

    // add active class to the clicked one
    const summary = wrapper.querySelector('.Accordion__Details-sc-1tqkz2w-3');
    if (summary) summary.classList.toggle('active');
  });
});


// Generic handler: make pagination bullets clickable for all Swiper-like sliders on the page
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.swiper-pagination').forEach(pagination => {
    const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
    if (!bullets || bullets.length === 0) return;

    bullets.forEach((bullet, idx) => {
      bullet.addEventListener('click', function () {
        // set active bullet
        bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));
        bullet.classList.add('swiper-pagination-bullet-active');

        // find nearest ancestor that contains a .swiper-wrapper
        let container = pagination;
        let wrapper = null;
        while (container) {
          wrapper = container.querySelector('.swiper-wrapper');
          if (wrapper) break;
          container = container.parentElement;
        }
        // fallback to first .swiper-wrapper on page
        if (!wrapper) wrapper = document.querySelector('.swiper-wrapper');
        if (!wrapper) return;

        const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
        if (slides.length === 0) return;

        // Prefer a non-duplicate slide matching data-swiper-slide-index
        let target = slides.find(s => s.getAttribute('data-swiper-slide-index') == idx && !s.classList.contains('swiper-slide-duplicate'));
        if (!target) target = slides.find(s => s.getAttribute('data-swiper-slide-index') == idx) || slides[idx % slides.length];

        // clear positional classes
        slides.forEach(s => s.classList.remove('swiper-slide-active', 'swiper-slide-prev', 'swiper-slide-next'));

        const targetIndex = slides.indexOf(target);
        if (targetIndex === -1) return;

        // set active/prev/next classes
        slides[targetIndex].classList.add('swiper-slide-active');
        if (slides[targetIndex - 1]) slides[targetIndex - 1].classList.add('swiper-slide-prev');
        if (slides[targetIndex + 1]) slides[targetIndex + 1].classList.add('swiper-slide-next');

        // Translate wrapper so the target slide is visible
        let offset = 0;
        for (let i = 0; i < targetIndex; i++) {
          offset += slides[i].getBoundingClientRect().width;
        }
        wrapper.style.transitionDuration = '300ms';
        wrapper.style.transform = `translate3d(-${offset}px, 0px, 0px)`;
      });
    });
  });
});
