
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputHours');
    const calculateButton = document.querySelector('.section__calculatorTime--button');
    const resultDisplay = document.querySelector('.section__calculatorTime--result');
    const secretImage = document.getElementById('secretImage');
    
    let imageTimeout;

    function showSecretImage() {
        if (imageTimeout) {
            clearTimeout(imageTimeout);
        }
        
        secretImage.classList.add('show');
        
        imageTimeout = setTimeout(() => {
            secretImage.classList.remove('show');
        }, 1000);
    }

    function calculateTime(totalHours) {
        const hours = Number(totalHours);
        
        if (isNaN(hours) || hours < 0) {
            return { days: 0, hours: 0, minutes: 0 };
        }

        const totalMinutes = hours * 60;
        const days = Math.floor(totalMinutes / (24 * 60));
        const remainingMinutes = totalMinutes % (24 * 60);
        const remainingHours = Math.floor(remainingMinutes / 60);
        const minutes = Math.round(remainingMinutes % 60);

        return { days: days, hours: remainingHours, minutes: minutes };
    }

    function formatResult(days, hours, minutes) {
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${days} дн. ${formattedHours}:${formattedMinutes}`;
    }

    function updateResult() {
        const inputValue = inputField.value.trim();
        
        if (inputValue === '67' || inputValue === '67.0' || inputValue === '67.00') {
            showSecretImage();
        }
        
        if (inputValue === '') {
            resultDisplay.textContent = '0 дн. 00:00';
            return;
        }

        const totalHours = parseFloat(inputValue);
        
        if (isNaN(totalHours) || totalHours < 0) {
            resultDisplay.textContent = '0 дн. 00:00';
            return;
        }

        const time = calculateTime(totalHours);
        resultDisplay.textContent = formatResult(time.days, time.hours, time.minutes);
    }

    calculateButton.addEventListener('click', updateResult);
    
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            updateResult();
        }
    });

    if (inputField.value) {
        updateResult();
    }
});