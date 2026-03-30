const slides = document.querySelectorAll('.ourteam__slide')
const prevBtn = document.querySelector('.ourteam__arrow--left')
const nextBtn = document.querySelector('.ourteam__arrow--right')
const dotsContainer = document.querySelector('.ourteam__dots')

let current = 0

slides.forEach((_, i) => {
  const dot = document.createElement('span')
  dot.addEventListener('click', () => showSlide(i))
  dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll('.ourteam__dots span')

const showSlide = function (index) {
  slides[current].classList.remove('active')
  dots[current].classList.remove('active')

  current = index

  slides[current].classList.add('active')
  dots[current].classList.add('active')
}

prevBtn.addEventListener('click', () => {
  const index = (current - 1 + slides.length) % slides.length
  showSlide(index)
})

nextBtn.addEventListener('click', () => {
  const index = (current + 1) % slides.length
  showSlide(index)
})

showSlide(0)
