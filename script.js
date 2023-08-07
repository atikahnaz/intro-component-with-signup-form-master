
const claim = document.getElementById('claimButton');
const form = document.getElementById('form');
const errorFirst = document.getElementById('errorFirst');
const errorLast = document.getElementById('errorLast');
const errorEmail = document.getElementById('errorEmail');
const errorPwd = document.getElementById('errorPwd');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorImage = document.createElement('img');


claim.addEventListener('click', (event) => {
    event.preventDefault();


    
    // Check if the input is empty or contains only whitespace characters
    if (firstName.value === '') {
       showError(errorFirst, "First Name cannot be empty");
       showImage(firstName);
       
    } else {
        clearInput(firstName);
    }

     if (lastName.value === '') {
        showError(errorLast, "Last Name cannot be empty");
        showImage(lastName);
     } else {
        clearInput(lastName);
     }

     if (email.value === '') {
        showError(errorEmail, "Looks like this is not an email");
        showImage(email);
     } else {
        clearInput(email);
     }

     if (password.value === '') {
        showError(errorPwd, "Password cannot be empty");
        showImage(password);
     } else {
        clearInput(password);
     }

    });


function showError(errorContainer, message) {
    errorContainer.textContent = message;
}

function showImage(inputContainer) {
    // show image error
    inputContainer.placeholder = '';
    inputContainer.style.backgroundImage = "url('images/icon-error.svg')";
    inputContainer.style.backgroundRepeat = "no-repeat";
    inputContainer.style.backgroundPosition = "right 20px center";
};

function clearInput(inputContainer) {
    inputContainer.value = '';
}

/* Function to clear the error message
function clearError(errorContainer) {
    errorContainer.textContent = 'hi';
    errorContainer.style.display = 'none';
};*/

