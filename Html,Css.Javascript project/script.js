document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "login.html"; // Redirect to login page
});
