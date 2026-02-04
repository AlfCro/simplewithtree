document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('greeting-btn');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Hello! Thanks for clicking!';
    });
});
