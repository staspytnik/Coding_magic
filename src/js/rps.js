export function rps() {
  const choices = ['Камінь', 'Ножиці', 'Папір']
  const results = {
    Камінь: { Ножиці: 'win', Папір: 'lose', Камінь: 'draw' },
    Ножиці: { Папір: 'win', Камінь: 'lose', Ножиці: 'draw' },
    Папір: { Камінь: 'win', Ножиці: 'lose', Папір: 'draw' },
  }

  const compOption = document.querySelector('.rps__btn')
  const userChoices = document.querySelectorAll('.rps__choice')
  const resultText = document.querySelector('.rps__status')
  const compScoreSpan = document.querySelector('.rps__pc span')
  const userScoreSpan = document.querySelector('.rps__user span')

  let compScore = 0
  let userScore = 0

  userChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
      const currentSelected = document.querySelector('.rps__choice.is-selected')
      if (currentSelected) {
        currentSelected.classList.remove('is-selected')
      }

      choice.classList.add('is-selected')

      const userPick = choice.getAttribute('data-choice')
      const compPick = choices[Math.floor(Math.random() * choices.length)]

      const outcome = results[userPick][compPick]

      if (outcome === 'win') {
        resultText.textContent = `Вітаю, ви виграли!`
        resultText.style.color = '#039900'
        userScore++
        userScoreSpan.textContent = userScore
      } else if (outcome === 'lose') {
        resultText.textContent = `Ви програли!`
        resultText.style.color = 'red'
        compScore++
        compScoreSpan.textContent = compScore
      } else {
        resultText.textContent = `Нічия!`
        resultText.style.color = `grey`
      }

      compOption.textContent = compPick
    })
  })
}
rps()
