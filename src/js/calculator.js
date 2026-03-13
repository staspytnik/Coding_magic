const firstNumInput = document.querySelector('.calculator__first--number')
const secondNumInput = document.querySelector('.calculator__second--number')
const resultText = document.querySelector('.calculator__result')

const addBtn = document.getElementById('add-btn')
const multiplyBtn = document.getElementById('multiply-btn')
const subtractBtn = document.getElementById('subtract-btn')
const divideBtn = document.getElementById('divide-btn')
const equalBtn = document.querySelector('.calculator__button--equal')

let firstNum = undefined
let secondNum = undefined

let result = undefined

firstNumInput.addEventListener('change', (event) => {
  firstNum = Number.parseInt(firstNumInput.value)
})

secondNumInput.addEventListener('change', (event) => {
  secondNum = Number.parseInt(secondNumInput.value)
})

const chooseOperator = function (button, operator) {
  button.classList.add('select')
  if (addBtn !== button) {
    addBtn.classList.remove('select')
  }
  if (subtractBtn !== button) {
    subtractBtn.classList.remove('select')
  }
  if (multiplyBtn !== button) {
    multiplyBtn.classList.remove('select')
  }
  if (divideBtn !== button) {
    divideBtn.classList.remove('select')
  }

  result = operator
}

addBtn.addEventListener('click', (event) => {
  chooseOperator(addBtn, 'add')
})

multiplyBtn.addEventListener('click', (event) => {
  chooseOperator(multiplyBtn, 'multiply')
})

subtractBtn.addEventListener('click', (event) => {
  chooseOperator(subtractBtn, 'subtract')
})

divideBtn.addEventListener('click', (event) => {
  chooseOperator(divideBtn, 'divide')
})

equalBtn.addEventListener('click', (event) => {
  const add = firstNum + secondNum

  const subtract = firstNum - secondNum

  const multiply = firstNum * secondNum

  const divide = firstNum / secondNum

  if (result === 'add') {
    result = add
  }
  if (result === 'subtract') {
    result = subtract
  }
  if (result === 'multiply') {
    result = multiply
  }
  if (result === 'divide') {
    result = divide
  }

  resultText.textContent = result
})
