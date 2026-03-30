const dropdownMenu = document.querySelector('.header__dropdown-menu')
const dropdownButton = document.querySelector('.header__dropdown')
const dropdownArrow = document.querySelector('.header__arrow')
const dropdownLinks = document.querySelectorAll('.header__dropdown-link')

if (dropdownButton && dropdownMenu && dropdownArrow) {
  dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('is-hidden')
    if (dropdownMenu.classList.contains('is-hidden')) {
      dropdownArrow.style.transform = 'rotate(0deg)'
    } else {
      dropdownArrow.style.transform = 'rotate(-180deg)'
    }
  })
}

const filterClassByLabel = {
  Числовий: 'number',
  Ігровий: 'game',
  Ознайомчий: 'introductory',
}

const interactiveSections = document.querySelectorAll('.number, .game, .introductory')

const showSectionsByType = function (selectedClass) {
  interactiveSections.forEach((section) => {
    section.style.display = section.classList.contains(selectedClass) ? '' : 'none'
  })
}

dropdownLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const label = link.textContent.trim()
    const selectedClass = filterClassByLabel[label]
    if (!selectedClass) {
      return
    }

    showSectionsByType(selectedClass)

    if (dropdownMenu && dropdownArrow) {
      dropdownMenu.classList.add('is-hidden')
      dropdownArrow.style.transform = 'rotate(0deg)'
    }
  })
})

const header = document.querySelector('.header')
const checkbox = document.querySelector('.header__checkbox')
const navLinks = document.querySelectorAll('.header__link, .header__dropdown-link, .header__dropdown')
const dropdown = document.querySelector('.header__dropdown-menu')

if (checkbox && header && dropdown) {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      header.style.color = '#ffffff'
      document.body.classList.add('dark-mode')
      navLinks.forEach((link) => (link.style.color = '#ffffff'))
      dropdown.style.backgroundColor = '#000'
      dropdown.style.borderColor = '#ffffff'
    } else {
      header.style.color = '#000'
      document.body.classList.remove('dark-mode')
      navLinks.forEach((link) => (link.style.color = '#000'))
      dropdown.style.backgroundColor = '#ffffff'
      dropdown.style.borderColor = '#000'
    }
  })
}