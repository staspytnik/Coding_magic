export function findMaxNumber() {
  const firstNum = document.querySelector('.number__input--first')
  const secondNum = document.querySelector('.number__input--second')
  const thirdNum = document.querySelector('.number__input--third')
  const answer = document.querySelector('.number__answer span')

  function calculateMax() {
    const val1 = Number(firstNum.value)
    const val2 = Number(secondNum.value)
    const val3 = Number(thirdNum.value)

    const max = Math.max(val1, val2, val3)

    answer.textContent = max
  }

  firstNum.addEventListener('input', calculateMax)
  secondNum.addEventListener('input', calculateMax)
  thirdNum.addEventListener('input', calculateMax)
}

findMaxNumber()
