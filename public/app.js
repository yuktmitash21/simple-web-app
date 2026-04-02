document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username and password.';
            return;
        }

        // Dummy authentication logic
        if (username === 'admin' && password === 'password') {
            errorMessage.textContent = '';
            alert('Login successful!');
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});