// Show/Hide password functionality
document.getElementById('show-password').addEventListener('change', function() {
    var password = document.getElementById('sifre');
    var confirmPassword = document.getElementById('confirm-sifre');
    if (this.checked) {
        password.type = 'password';
        confirmPassword.type = 'password';
    } else {
        password.type = 'text';
        confirmPassword.type = 'text';
    }
});
