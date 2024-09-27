
document.getElementById('signupPassword').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('signupPasswordStrength');
    let strength = '';
    const regexUpper = /[A-Z]/;
    const regexLower = /[a-z]/;
    const regexNumber = /[0-9]/;

    if (password.length >= 8 && regexUpper.test(password) && regexLower.test(password) && regexNumber.test(password)) {
        strength = 'strong';
        strengthIndicator.className = 'strong';
    } else if (password.length >= 8 && (regexUpper.test(password) || regexLower.test(password) || regexNumber.test(password))) {
        strength = 'medium';
        strengthIndicator.className = 'medium';
    } else {
        strength = 'poor';
        strengthIndicator.className = 'poor';
    }

    strengthIndicator.textContent = `Password strength: ${strength}`;
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email) || !username || !password) {
        event.preventDefault();
        alert('Please fill in all fields correctly');
    }
});