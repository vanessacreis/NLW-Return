window.addEventListener("scroll", onScroll);

function onScroll() {
  showNavOnScroll();
  showBackToTopBTNOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function showBackToTopBTNOnScroll() {
  if (scrollY > 400) {
    backToTopBTN.classList.add("show");
  } else {
    backToTopBTN.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`);
