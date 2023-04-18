/* Pages - https://rolling-scopes-school.github.io/arturvetrov-JSFE2023Q1/shelter/ */
/* Burger menu start */
const BurgerMenu = document.querySelector('.header-burger-icon');
const Blackout = document.querySelector('.blackout');
const NavMenuLink = document.querySelector('.nav_menu-burger');

BurgerMenu.addEventListener('click', () => {
  if (!BurgerMenu.classList.contains("active-burger")) {
    BurgerMenu.classList.add("active-burger");
    document.body.classList.add("position-fixed");
    Blackout.classList.add("blackout-active");
  } else {
    BurgerMenu.classList.remove("active-burger");
    document.body.classList.remove("position-fixed");
    Blackout.classList.remove("blackout-active");
  }
})

NavMenuLink.addEventListener('click', () => {
  BurgerMenu.classList.remove("active-burger");
  document.body.classList.remove("position-fixed");
  Blackout.classList.remove("blackout-active");
})

Blackout.addEventListener('click', () => {
  BurgerMenu.classList.remove("active-burger");
  document.body.classList.remove("position-fixed");
  Blackout.classList.remove("blackout-active");
})


/* Burger menu end */

/* Slider start */
