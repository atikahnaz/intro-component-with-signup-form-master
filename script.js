
const claim = document.getElementById('claimButton');
const form = document.getElementById('form');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorFirst = document.getElementById('errorFirst');
const errorLast = document.getElementById('errorLast');



form.addEventListener('submit', (event) => {
    event.preventDefault;
    const firstName = fName.value;
    const lastName = lName.value;
    // Check if the input is empty or contains only whitespace characters
    if (firstName === '') {
       showError(errorFirst, "First Name cannot be empty");
    } else {
        // The input is not empty, clear the error message and submit the form
        clearError(errorFirst)
        this.submit();
    }

    if (lastName === '') {
        showError(errorLast, "Last Name cannot be empty");
     } else {
         // The input is not empty, clear the error message and submit the form
         clearError(errorLast)
         this.submit();
     }

  
});

function showError(errorContainer, message) {
    errorContainer.textContent = message;
}

// Function to clear the error message
function clearError(errorContainer) {
    errorContainer.textContent = '';
    errorContainer.style.display = 'none';
}