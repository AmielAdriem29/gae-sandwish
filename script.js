
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthday = document.getElementById('birthday');
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');
const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const firstName_error = document.getElementById('firstName_error');
const lastName_error = document.getElementById('lastName_error');
const birthday_error = document.getElementById('birthday_error');
const gender_error = document.getElementById('gender_error');
const emailAddress_error = document.getElementById('emailAddress_error');
const password_error = document.getElementById('password_error');
const confirmPassword_error = document.getElementById('confirmPassword_error');

function isEmailValid(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', (e) => {
    let isValid = true;

    if (firstName.value.trim() === '') {
        e.preventDefault();
        firstName_error.textContent = "First name is required";
        firstName.parentNode.classList.add('error');
        firstName.nextElementSibling.style.top = '54%';
        isValid = false;
    } else {
        firstName_error.textContent = "";
        firstName.parentNode.classList.remove('error');
        firstName.nextElementSibling.style.top = '67%';
    }

    if (lastName.value.trim() === '') {
        e.preventDefault();
        lastName_error.textContent = "Last name is required";
        lastName.nextElementSibling.style.top = '54%';
        lastName.parentNode.classList.add('error');
        isValid = false;
    } else {
        lastName_error.textContent = "";
        lastName.parentNode.classList.remove('error');
        lastName.nextElementSibling.style.top = '67%';
    }

    if (birthday.value.trim() === '') {
        e.preventDefault();
        birthday_error.textContent = "Birthday is required";
        birthday.nextElementSibling.style.top = '54%';
        birthday.parentNode.classList.add('error');
        isValid = false;
    } else {
        birthday_error.textContent = "";
        birthday.parentNode.classList.remove('error');
        birthday.nextElementSibling.style.top = '67%';
    }
    
    if (!genderMale.checked && !genderFemale.checked) {
        e.preventDefault();
        gender_error.innerHTML = "Gender is required";
        document.getElementById('gender').classList.add('error'); 
        isValid = false;
    } else {
        gender_error.innerHTML = "";
        document.getElementById('gender').classList.remove('error');
    }

    if (emailAddress.value === '' || !isEmailValid(emailAddress.value)) {
        valid = false;
        emailAddress_error.textContent = "Valid email is required";
        emailAddress.nextElementSibling.style.top = '54%';
        emailAddress.parentNode.classList.add('error');
    } else {
        emailAddress_error.textContent = "";
        emailAddress.parentNode.classList.remove('error');
        emailAddress.nextElementSibling.style.top = '67%';
    }

    if (password.value === '' || password.value.length < 6) {
        valid = false;
        password_error.textContent = "Password must be at least 6 characters";
        password.nextElementSibling.style.top = '52%';
        password.parentNode.classList.add('error');
    } else {
        password_error.textContent = "";
        password.parentNode.classList.remove('error');
        password.nextElementSibling.style.top = '67%';
    }

    if (confirmPassword.value !== password.value) {
        isValid = false;
        confirmPassword_error.textContent = "Passwords do not match";
        confirmPassword.nextElementSibling.style.top = '54%';
        confirmPassword.parentNode.classList.add('error');
    } else {
        confirmPassword_error.textContent = "";
        confirmPassword.parentNode.classList.remove('error');
        confirmPassword.nextElementSibling.style.top = '67%';
    }

    if (!isValid) {
        e.preventDefault();
    }
});