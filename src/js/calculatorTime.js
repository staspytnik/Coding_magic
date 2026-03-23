document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('inputHours')
  const calculateButton = document.querySelector('.section__calculatorTime--button')
  const resultDisplay = document.querySelector('.section__calculatorTime--result')
  const secretImage = document.getElementById('secretImage')
  const errorMessage = document.querySelector('.section__calculatorTime--error')
  const secretNumber = 67

  let imageTimeout

const showSecretImage = function() {
    if (imageTimeout) {
      clearTimeout(imageTimeout)
    }

    secretImage.classList.add('show')

    imageTimeout = setTimeout(() => {
      secretImage.classList.remove('show')
    }, 1000)
  }

const calculateTime = function(totalHours) {
    const totalMinutes = totalHours * 60
    const days = Math.floor(totalMinutes / (24 * 60))
    const remainingMinutes = totalMinutes % (24 * 60)
    const remainingHours = Math.floor(remainingMinutes / 60)
    const minutes = Math.round(remainingMinutes % 60)

    return { days: days, hours: remainingHours, minutes: minutes }
  }

const formatResult = function(days, hours, minutes) {
    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')
    return `${days} дн. ${formattedHours}:${formattedMinutes}`
  }

const updateResult = function () {
    const inputValue = inputField.value.trim()
    if (parseFloat(inputValue) === secretNumber) {
      showSecretImage()
    }

    if (inputValue === '') {
      resultDisplay.textContent = '0 дн. 00:00'
      return
    }

    const totalHours = parseFloat(inputValue)

    if (isNaN(totalHours) || totalHours < 0) {
      resultDisplay.textContent = '0 дн. 00:00';
        errorMessage.textContent = 'Будь ласка введіть коректне додатнє число';
      return
    }
    const time = calculateTime(totalHours)
    resultDisplay.textContent = formatResult(time.days, time.hours, time.minutes)
    errorMessage.textContent = '';
  }

  calculateButton.addEventListener('click', updateResult)

  inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      updateResult()
    }
  })

  if (inputField.value) {
    updateResult()
  }
})
