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
