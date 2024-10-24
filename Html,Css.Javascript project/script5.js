document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;

    // Simulate user login and store user info in localStorage
    if (username) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('userImg', 'https://example.com/user-image.jpg'); // Simulated image URL

        // Redirect to the dashboard page after login
        window.location.href = 'dashboard.html';
    }
});
