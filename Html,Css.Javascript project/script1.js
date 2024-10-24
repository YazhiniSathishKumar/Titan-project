document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting in the default way

    // You can add validation logic here if needed

    alert("Login successful! Redirecting to homepage...");

    // After successful login, redirect to index.html
    window.location.href = "index.html";
});
