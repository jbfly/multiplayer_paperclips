document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the entered username and password
    var username = document.getElementById('newUsername').value;
    var password = document.getElementById('newPassword').value;

    // Send a request to the server to create a new account
    fetch('/api/createAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        // Handle the response from the server
        if (response.ok) {
            // Account created successfully
            console.log('Account created successfully');
        } else {
            // Account creation failed
            console.error('Failed to create account');
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('An error occurred:', error);
    });
});