const footerInput = document.querySelector('.section__footer--subscribe-input');
const footerButton = document.querySelector('.section__footer--subscribe-button');

if (!footerInput || !footerButton) return
function isValidEmail(email) {
    email = email.trim();
    return email.includes('@' && '.');
    return email.length > 5
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
        footerInput.placeholder = 'Введіть коректну електронну адресу';
    }
});