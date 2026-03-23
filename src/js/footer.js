const footerInput = document.querySelector('.section__footer--subscribe-input');
const footerButton = document.querySelector('.section__footer--subscribe-button');

// if(!footerInput && !footerButton) {
//     console.log("ymova vykonalas");
//     return null;

// }

function isValidEmail(email) {
    email = email.trim();
    
    if (email.includes('@') && email.includes('.') && email.length >= 5) {
        return true;
    } else {
        return false;
    }
}

    footerButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = footerInput.value;
        const originalPlaceholder = footerInput.placeholder;
        
        if (isValidEmail(email)) {
            footerInput.placeholder = "Дякую за підписку!";
            
            footerInput.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
            footerInput.style.borderColor = '#4caf50';
            footerInput.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.5)';
            
            footerInput.value = '';
            
            setTimeout(() => {
                footerInput.placeholder = originalPlaceholder;
                footerInput.style.borderColor = '';
                footerInput.style.boxShadow = '';
            }, 1500);
        } else {
            footerInput.style.transition = 'border-color 0.3s ease-out, box-shadow 0.3s ease-out';
            footerInput.style.borderColor = '#ff0000ff';
            footerInput.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
            footerInput.value = '';
            footerInput.placeholder = 'Вкажіть коректний email.';

            setTimeout(() => {
                footerInput.placeholder = originalPlaceholder;
                footerInput.style.borderColor = '';
                footerInput.style.boxShadow = '';
            }, 1500);
        }
    });