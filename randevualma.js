document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // You can add AJAX calls or validation here
    alert('Login attempted');
});
