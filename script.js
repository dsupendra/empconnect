document.addEventListener('DOMContentLoaded', () => {

    const usernameDisplay = document.getElementById('username');
    const loginButton = document.getElementById('login-button');

    // Event listener for login button
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform simple authentication (replace with more secure authentication in production)
        if (authenticateUser(username, password)) {
            currentUser = username;
            updateUIAfterLogin();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    function authenticateUser(username, password) {
        // Simple authentication logic (replace with more secure authentication)
        const validUsers = ['Upendra_D', 'Ramesh_R', 'Vismaya_R', 'Vinod_K', 'Deepika_N', 'Upendra_Y'];
        return validUsers.includes(username) && password === 'DSU';
    }

    function updateUIAfterLogin() {
        const googleSearchUrl = 'http://127.0.0.1:5501/dashb.html';
        window.open(googleSearchUrl, '_blank');
    }
});

