const firstNumInput = document.querySelector('.calculator__first--number')
const secondNumInput = document.querySelector('.calculator__second--number')
const resultText = document.querySelector('.calculator__result')

const addBtn = document.getElementById('add-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const subtractBtn = document.getElementById('subtract-btn')
const divideBtn = document.getElementById('divide-btn')
const equalBtn = document.querySelector('.calculator__button--equal')

let firstNum = null
let secondNum = null

let selectedOperator = null

firstNumInput.addEventListener('change', () => {
  firstNum = Number.parseInt(firstNumInput.value)
})

secondNumInput.addEventListener('change', () => {
  if (Number.parseInt(secondNumInput.value) === 0) {
    resultText.textContent = 'Ділення на нуль!'
    return
  }
  secondNum = Number.parseInt(secondNumInput.value)
})

const allButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn]

const chooseOperator = function (button, operator) {
  allButtons.forEach((btn) => btn.classList.remove('select'))
  button.classList.add('select')
  selectedOperator = operator
}

addBtn.addEventListener('click', () => {
  chooseOperator(addBtn, 'add')
})

multiplyBtn.addEventListener('click', () => {
  chooseOperator(multiplyBtn, 'multiply')
})

subtractBtn.addEventListener('click', () => {
  chooseOperator(subtractBtn, 'subtract')
})

divideBtn.addEventListener('click', () => {
  chooseOperator(divideBtn, 'divide')
})

equalBtn.addEventListener('click', () => {
  switch (selectedOperator) {
    case 'add':
      result = firstNum + secondNum
      break
    case 'subtract':
      result = firstNum - secondNum
      break
    case 'multiply':
      result = firstNum * secondNum
      break
    case 'divide':
      result = firstNum / secondNum
      break
  }

  if (isNaN(firstNum) || isNaN(secondNum)) {
    resultText.textContent = 'Введіть числа'
    return
  }
  if (!selectedOperator) {
    resultText.textContent = 'Виберіть оператор'
    return
  }

  resultText.textContent = result.toFixed(5)
})
