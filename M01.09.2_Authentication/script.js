const header = document.getElementById("title");
const description = document.getElementById("description");

const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const inputConfirmPassword = document.getElementById("inputConfirmPassword");

const confirm_container = document.getElementById("confirm-container");

const tagline = document.getElementById("tagline");
const registerMode = document.getElementById("registerMode");

const users=[];

function checkIsLoginForm() {
    return header.textContent === "Welcome back!";
}

function swapAuth() {
    const isLoginForm = checkIsLoginForm();

    confirm_container.style.display = isLoginForm ? "block" : "none";
    
    header.textContent = isLoginForm
    ? "Hello there!"
    : "Welcome back!";

    description.textContent = isLoginForm
    ? "Ready to unlock endless possibilities? Sign up now and let the adventure begin!"
    : "Login to your account and let's get that productivity soaring";

    registerMode.textContent = isLoginForm
    ? "Login"
    : "Sign Up" ;

    tagline.textContent = isLoginForm
    ? "Don't have an account?" 
    : "Have an account?";
}


function handleSubmit() {
    const username = inputUsername.value;
    const password = inputPassword.value;
    const confirmPassword = inputConfirmPassword.value;

    if (username == undefined || password == undefined) 
        return alert("No empty space")

    if (username.trim().length == 0 || password.trim().length == 0)
        return alert("Insert your password/username, instead of space");

    if (checkIsLoginForm()) {
        login(username, password);
    } else {
        signUp(username, password, confirmPassword);
    }
}

function login(username, password) {
    const user = users.find((userCheck) => userCheck.username === username);

    if (user && user.password == password) {
        alert("Successfully Register, Welcome");
    } else if (user && user.password != password) {
        alert("Password is wrong");
    } else {
        alert("Username not found. Please try again");
    }
}

function signUp(username, password, confirmPassword) {
    if (confirmPassword == undefined || confirmPassword.trim().length == 0)
        return alert("Ensure you've insert password second-time");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z@$!%*?&]/;

    if (!regex.test(password))
        return alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character");

    if (password !== confirmPassword) {
        alert('Password do not match.');
    } else {
        users.push({
            username: username,
            password: password,
        });

        alert('Sign up successful! You can now log in.');
        swapAuth();
    }
}