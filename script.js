function validateUsername() {
    const usernameInput = document.getElementById('username');
    const errorMessage = document.getElementById('usernameError');
    const usernamePattern = /^[a-zA-Z0-9]*$/; // Alphanumeric characters only

    if (!usernamePattern.test(usernameInput.value)) {
        errorMessage.style.display = 'block'; // Show error
    } else {
        errorMessage.style.display = 'none'; // Hide error
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/; // At least one lowercase, one uppercase, and one number

    if (!passwordPattern.test(passwordInput.value)) {
        errorMessage.style.display = 'block'; // Show error
    } else {
        errorMessage.style.display = 'none'; // Hide error
    }
}
