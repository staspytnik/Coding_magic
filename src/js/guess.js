const guess = document.querySelector('.guess__number')
const btn = document.querySelector('.guess__check')
const answer = document.querySelector('.guess__answer')

const check = function () {
  if (guess.value === isNaN) {
    answer.textContent = 'Це не число'
    answer.style.color = '#900'
    return
  }
  if (guess.value === '') {
    answer.textContent = 'введіть число'
    answer.style.color = '#900'
    return
  }

  let num = Math.floor(Math.random() * 10) + 1

  if (+guess.value === num) {
    answer.textContent = `Вітаю, ви вгадали число! (${num}) `
    answer.style.color = '#039900'
  }
  if (+guess.value !== num) {
    answer.textContent = `Ви програли, комп’ютер загадав (${num}) `
    answer.style.color = '#900'
    return
  }
}

btn.addEventListener('click', check)

guess.addEventListener('input', () => {
  answer.textContent = ''
})
