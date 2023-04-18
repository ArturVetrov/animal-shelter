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

console.log(`
Привет, из всего задания у меня получилось сделать только бургер-меню, остальные части можешь не проверять.\n
Реализация burger menu на обеих страницах: +26 \n
при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2\n
при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4\n
высота адаптивного меню занимает всю высоту экрана: +2\n
при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4\n
бургер-иконка создана при помощи html+css, без использования изображений: +2\n
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2\n
при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2\n
расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2\n
область, свободная от бургер-меню, затемняется: +2\n
страница под бургер-меню не прокручивается: +4\n
`);

