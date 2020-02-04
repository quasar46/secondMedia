var burger = document.querySelector('.burger');
var rightMenu = document.querySelector('.right-menu');
var mobileBurger = document.querySelector('.burger-mobile');
var mobileMenu = document.querySelector('.mobile-menu');
var burgerCross = document.querySelector('.burger-cross');
var social = document.querySelector('.right-menu__social');
var glass = document.querySelector('.right-menu__glass');
var body = document.querySelector('body');

burger.onclick = function () {
  rightMenu.classList.toggle('opened');
  this.classList.toggle('cross');
  social.classList.toggle('mod');
  glass.classList.toggle('mod');
}

mobileBurger.onclick = function () {
  this.classList.toggle('cross');
  mobileMenu.classList.toggle('opened');
  body.classList.toggle('mod');
  social.classList.toggle('mod');
  glass.classList.toggle('mod');
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});

$('.scroll-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 600);
  return false;
});