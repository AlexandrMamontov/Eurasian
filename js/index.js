//  hero-wrapper
document.addEventListener('DOMContentLoaded', (e) => {
  document.querySelector('.hero__arrow').addEventListener('click', (e) => {
    document.querySelector('.hero__arrow').classList.toggle('hero__arrow--active')
    document.querySelector('.hero__block').classList.toggle('hero__block--active')
    document.querySelector('.hero__wrap').classList.toggle('hero__wrap--active')
    document.querySelector('.hero__list').classList.toggle('hero__list--active')
    document.querySelector('.hero__today').classList.toggle('hero__today--active')
    document.querySelector('.hero__sun').classList.toggle('hero__sun--active')
  })

  document.querySelector('.hero__arrow').addEventListener('click', (e) => {
    e.preventDefault()
  })
})

// hero-burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

// news-pagination
