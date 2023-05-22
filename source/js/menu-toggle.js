let menu = document.querySelector('.page-header__menu');
let btn = document.querySelector('.page-header__menu-toggle');
let text = document.querySelector('.menu-toggle__text');
let menuOpenIcon = document.querySelector('.menu-toggle__icon--open');
let menuCloseIcon = document.querySelector('.menu-toggle__icon--close');

menu.classList.remove('page-header__menu--nojs');

btn.addEventListener('click', function () {
  if (menu.classList.contains('page-header__menu--closed')) {
    text.textContent = "Закрыть меню.";
    menuOpenIcon.style.display = "none";
    menuCloseIcon.style.display = "block";
    menu.classList.remove('page-header__menu--closed');
    menu.classList.add('page-header__menu--opened');
  } else {
    text.textContent = "Открыть меню.";
    menuOpenIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
    menu.classList.add('page-header__menu--closed');
    menu.classList.remove('page-header__menu--opened');
  }
});
