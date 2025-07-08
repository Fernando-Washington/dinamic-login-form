const eyeIcon = document.querySelector('#eye-closed-icon');
const passwordInput = document.querySelector('#password');

eyeIcon.onclick = function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'assets/images/eye.svg';
        eyeIcon.alt = 'eye open icon';
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'assets/images/eye-closed.svg';
        eyeIcon.alt = 'eye closed icon';
    }
}
