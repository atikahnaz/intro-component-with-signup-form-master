
const claim = document.getElementById('claimButton');const form = document.getElementById('form');

// error message container
const errorFirst = document.getElementById('errorFirst');
const errorLast = document.getElementById('errorLast');
const errorEmail = document.getElementById('errorEmail');
const errorPwd = document.getElementById('errorPwd');

// input container
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

claim.addEventListener('click', (event) => {
    event.preventDefault();

    // Check if the input is empty or contains only whitespace characters
    if (firstName.value === '') {
       showError(errorFirst, "First Name cannot be empty");
       showImage(firstName);
    } else {
        //clearInput(firstName);
        clearError(errorFirst);
        clearImage(firstName);
    }

     if (lastName.value === '') {
        showError(errorLast, "Last Name cannot be empty");
        showImage(lastName);
     } else {
        //clearInput(lastName);
        clearError(errorLast);
        clearImage(lastName);
     }

     if (email.value === '') {
        showError(errorEmail, "Email cannot be empty");
        showImage(email);
     } else {
        if (!isValidEmail(email.value)) {
            showError(errorEmail, "Looks like this is not an email");
            showImage(email);
        } else {
            clearError(errorEmail);
            clearImage(email);
        }
     }

     if (password.value === '') {
        showError(errorPwd, "Password cannot be empty");
        showImage(password);
     } else {
        //clearInput(password);
        clearError(errorPwd);
        clearImage(password);
     }
    });

// display error message
function showError(errorContainer, message) {
    errorContainer.textContent = message;
}

// show error icon
function showImage(inputContainer) {
    inputContainer.placeholder = '';
    inputContainer.style.backgroundImage = "url('images/icon-error.svg')";
    inputContainer.style.backgroundRepeat = "no-repeat";
    inputContainer.style.backgroundPosition = "right 20px center";
}

// clear error icon
function clearImage(inputContainer) {
    inputContainer.style.backgroundImage = 'none';
}

// clear the error message
function clearError(errorContainer) {
    errorContainer.textContent = '';
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
