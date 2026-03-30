const modal = document.querySelector('.modal'); 

const input = document.querySelector('.modal__input');
const startBtn = document.querySelector('.modal__start-button');

const content = document.querySelector('.modal__content');
const thanks = document.querySelector('.modal__thanks');

const closeButtons = document.querySelectorAll('.modal__close-button');

const welcomeText = document.querySelector('.header__welcome');

startBtn.addEventListener('click', () => {
  const name = input.value.trim();

  if (name !== '') {
    content.style.display = 'none';
    thanks.style.display = 'block';

    welcomeText.textContent = `Вітаємо, ${name}!`;

  } else {
    alert('Введіть ім’я');
  }
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});