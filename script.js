let submitBtn = document.querySelector('.submit');
let form = document.querySelector('.email');

let errorIcon = document.querySelector('.error-icon');
let errorText = document.querySelector('.error-text');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let email = form.value;
    console.log(email);

    if (!(email.includes("@"))) {
        errorIcon.style.display = 'block';
        errorText.style.display = 'block';

        errorIcon.style.animation = 'scaleIn .3s ease-in-out forwards';
        errorText.style.animation = 'scaleIn .3s ease-in-out forwards';

        form.style.border = '4px solid var(--primary-soft-red)';
    }
});