const dropdownMenu = document.querySelector('.header__dropdown-menu');
const dropdownButton = document.querySelector('.header__dropdown');
const dropdownArrow = document.querySelector('.header__arrow');
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('is-hidden');
    if (dropdownMenu.classList.contains('is-hidden')) {
        dropdownArrow.style.transform = 'rotate(0deg)';
    } else {
        dropdownArrow.style.transform = 'rotate(-180deg)';
    }
});