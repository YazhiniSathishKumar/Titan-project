document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('username');
    const userImg = localStorage.getItem('userImg');

    const userProfile = document.getElementById('user-profile');
    const userImgElem = document.getElementById('user-img');
    const userNameElem = document.getElementById('user-name');
    const userNameDisplay = document.getElementById('user-name-display');
    const logoutBtn = document.getElementById('logout-btn');

    // If the user is logged in, show the dashboard content
    if (isLoggedIn === 'true') {
        userImgElem.src = userImg;
        userNameElem.innerText = userName;
        userNameDisplay.innerText = userName;
    } else {
        // If not logged in, redirect to login page
        window.location.href = 'signin.html';
    }

    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        localStorage.clear(); // Clear login data
        window.location.href = 'signin.html'; // Redirect to login page
    });
});
