const footerInput = document.querySelector('.section__footer--subscribe-input');
const footerButton = document.querySelector('.section__footer--subscribe-button');

function isValidEmail(email) {
    email = email.trim();
    return email.endsWith('@gmail.com') && email !== '@gmail.com';
}

footerButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (isValidEmail(footerInput.value)) {
        const originalPlaceholder = footerInput.placeholder;
        
        footerInput.placeholder = "thank you for subbing";
        
        footerInput.value = '';
        
        setTimeout(() => {
            footerInput.placeholder = originalPlaceholder;
        }, 5000);
    } else {
        console.log('Not a valid Gmail address');
    }
});