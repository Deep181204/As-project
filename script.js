// Define a global variable to track login status
var isLoggedIn = false;

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulate backend authentication (replace with actual authentication logic)
    if (username === 'admin' && password === 'aaae') {
        // Redirect to the admin dashboard
        window.location.href = 'admin-dashboard.html';
        // Set isLoggedIn to true upon successful login
        isLoggedIn = true;
    } else if (username === 'customer' && password === 'password') {
        // Redirect to the customer dashboard
        window.location.href = 'customer-dashboard.html';
        // Set isLoggedIn to true upon successful login
        isLoggedIn = true;
    } else {
        // Handle incorrect login credentials
    }
}
