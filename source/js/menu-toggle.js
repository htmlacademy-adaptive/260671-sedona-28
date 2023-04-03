let menu = document.querySelector('.page-header__menu');
let btn = document.querySelector('.menu__toggle');

menu.classList.remove('page-header__menu--nojs');

btn.addEventListener('click', function () {
  if (menu.classList.contains('page-header__menu--closed')) {
    menu.classList.remove('page-header__menu--closed');
    menu.classList.add('page-header__menu--opened');
  } else {
    menu.classList.add('page-header__menu--closed');
    menu.classList.remove('page-header__menu--opened');
  }
});
