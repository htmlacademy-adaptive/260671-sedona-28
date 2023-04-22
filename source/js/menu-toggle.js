let menu = document.querySelector('.page-header__menu');
let btn = document.querySelector('.menu__toggle');
let text = document.querySelector('.menu__toggle--text');
let menuOpenIcon = document.querySelector('.menu__icon--open');
let menuCloseIcon = document.querySelector('.menu__icon--close');

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
