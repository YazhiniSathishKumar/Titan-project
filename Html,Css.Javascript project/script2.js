// Event listener for sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "login.html"; // Redirect to login page
});

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Login successful! Redirecting to homepage...");
    window.location.href = "index.html"; // Redirect to home page
});
