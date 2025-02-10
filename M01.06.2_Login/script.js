const userData = {
    name: "David",
    username: "winter",
    password: "012345"
};

function login() {
    const result = document.getElementById("result");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (usernameInput.value.trim().length == 0 && passwordInput.value.trim().length == 0) {
        result.textContent = "Both fields are empty! Please filled in";
        return;
    } else if (usernameInput.value.trim().length == 0) {
        result.textContent = "Username is empty! Please filled in";
        return;
    } else if (passwordInput.value.trim().length == 0) {
        result.textContent = "Password is empty! Please filled in";
        return;
    }

    
    const resultName = usernameInput === userData.username;
    const resultPassword = passwordInput === userData.password;

    if (resultName && resultPassword){
        result.textContent = `Welcome, ${userData.name}!`;
    } else if (!resultPassword) {
        result.textContent = `Wrong password.`;
    } else {
        result.textContent = `Wrong password/username!!`;
    }
}