const guess = document.querySelector('.guess__number')
const btn = document.querySelector('.guess__check')
const answer = document.querySelector('.guess__answer')

const check = function (e) {
  if (guess.value !== NaN) {
    let num = Math.round(Math.random().toFixed(1) * 10)
    console.log(num) //!
    if (+guess.value === num) {
      answer.textContent = `Вітаю, ви вгадали число! (${num}) `
      answer.style.color = '#039900'
    }
    if (+guess.value !== num) {
      answer.textContent = `Ви програли, комп’ютер загадав (${num}) `
      answer.style.color = '#900'
    }
  }

  if (guess.value === NaN) {
    alert('Це не число')
  }
}

btn.addEventListener('click', check)

guess.addEventListener('change', (e) => {
  answer.textContent = ''
})
