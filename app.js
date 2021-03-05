const menuToggle = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Disply mobile menu

const mobileMenu = () => {
  menuToggle.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menuToggle.addEventListener("click", mobileMenu);

// Show active tab when scrolling

const navbarPosition = () => {
  const elem = document.querySelector(".highlight");
  const homeNav = document.querySelector("#home-page");
  const aboutNav = document.querySelector("#about-page");
  const projectsNav = document.querySelector("#projects-page");
  const contactsNav = document.querySelector("#contacts-page");
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  if (window.innerWidth > 960 && scrollPos < 500) {
    homeNav.classList.add("highlight");
    aboutNav.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    aboutNav.classList.add("highlight");
    homeNav.classList.remove("highlight");
    projectsNav.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2100) {
    aboutNav.classList.remove("highlight");
    contactsNav.classList.remove("highlight");
    projectsNav.classList.add("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    contactsNav.classList.add("highlight");
    projectsNav.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", navbarPosition);
window.addEventListener("click", navbarPosition);

// Close mobile menu

const hideMobileMenu = () => {
  const menuNav = document.querySelector(".is-active");
  if (window.innerWidth <= 1300 && menuNav) {
    menuToggle.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
