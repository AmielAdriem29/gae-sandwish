

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthday = document.getElementById('birthday');
const gender = document.getElementById('gender');
const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('Password');
const confirmPassword = document.getElementById('confirmPassword');

const firstName_error = document.getElementById('firstName_error');

FormData.addEventListener('submit', (e)=>
{
    if (firstName.value === '' || firstName.value == null)
        {
            e.preventDefault();
            firstName_error.innerHTML = "Name is required";        }
})