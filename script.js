
const claim = document.getElementById('claimButton');
const form = document.getElementById('form');
const errorFirst = document.getElementById('errorFirst');
const errorLast = document.getElementById('errorLast');
const errorPwd = document.getElementById('errorPwd');
const firstName = document.getElementById('firstName');
const errorImage = document.createElement('img');



claim.addEventListener('click', (event) => {
    event.preventDefault();
    
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let formCheck = true;
    
    // Check if the input is empty or contains only whitespace characters
    if (firstName.value === '') {
       showError(errorFirst, "First Name cannot be empty");
       showImage();
       //showError(errorLast, "Last Name cannot be empty");
    } else {
        // The input is not empty, clear the error message and submit the form
        clearError(errorFirst)
        formCheck = false;
        //clearError(errorLast)
    }

     if (lastName === '') {
        showError(errorLast, "Last Name cannot be empty");
        showImage();
     } else {
         // The input is not empty, clear the error message and submit the form
         clearError(errorLast)
     }

     if (password === '') {
        showError(errorPwd, "Password cannot be empty");
     } else {
        clearError(errorPwd);
     }

    // clear the form 
    const inputElements = document.querySelectorAll('.form-email input');
    inputElements.forEach(input => {
    input.placeholder = '';

    // Create an image element
    const imageElement = document.createElement('img');

    // Set the source of the image (replace 'path/to/your/image.jpg' with the actual image URL)
    imageElement.src = 'images/icon-error.svg';

    // Append the image element after the input element
    input.insertAdjacentElement('afterend', imageElement);
    
    });
});

function showError(errorContainer, message) {
    errorContainer.textContent = message;
    
}

function showImage() {
    errorImage.src = 'images/icon-error.svg';
    firstName.appendChild(errorImage);
    
}

// Function to clear the error message
function clearError(errorContainer) {
    errorContainer.textContent = 'hi';
    errorContainer.style.display = 'none';
}