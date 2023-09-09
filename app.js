document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (password === getPasswordFromLocalStorage() && username === getUsernameFromLocalStorage()) {
        window.location.href = "dashboard_page.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});

// Function to get the stored password from local storage
function getPasswordFromLocalStorage() {
    return sessionStorage.getItem("newPassword");
}
function getUsernameFromLocalStorage() {
    return sessionStorage.getItem("newUsername");
}


