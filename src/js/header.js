const dropdownMenu = document.querySelector('.header__dropdown-menu')
const dropdownButton = document.querySelector('.header__dropdown')
const dropdownArrow = document.querySelector('.header__arrow')
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('is-hidden')
    if (dropdownMenu.classList.contains('is-hidden')) {
        dropdownArrow.style.transform = 'rotate(0deg)'
    } else {
        dropdownArrow.style.transform = 'rotate(-180deg)'
    }
})

const header = document.querySelector('.header')
const checkbox = document.querySelector('.header__checkbox')
const link = document.querySelectorAll('.header__link, .header__dropdown-link, .header__dropdown')
const dropdown = document.querySelector('.header__dropdown-menu')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        header.style.color = '#ffffff'
        document.body.classList.add('dark-mode')
        link.forEach((link) => (link.style.color = '#ffffff'))
        dropdown.style.backgroundColor = '#000'
        dropdown.style.borderColor = '#ffffff'
    } else {
        header.style.color = '#000'
        document.body.classList.remove('dark-mode')
        link.forEach((link) => (link.style.color = '#000'))
        dropdown.style.backgroundColor = '#ffffff'
        dropdown.style.borderColor = '#000'
    }
})