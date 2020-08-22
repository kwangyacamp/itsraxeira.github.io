const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#login-button");
const container = document.querySelector("#container");
const auth = document.querySelector("#auth");

button.onclick = login;

password.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});

username.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});

function login() {
    if (username.value == "Project_Ketawa" && password.value == "badut") {
        container.classList.remove("hidden");
        container.classList.add("visible");
        auth.classList.remove("visible");
        auth.classList.add("hidden");
        loadDatabase();
        
    } else {
        alert("Salah, Bro 🤩🤪👀🤟🏻🤡");
    }
}