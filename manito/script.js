const button = document.querySelector("#login-button");
const popup = document.querySelector("#vid-popup");
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

button.onclick = login;

password.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});

function login() {
    if ((["lee haechan", "ryu yangyang"].includes(username.value.toLowerCase()) && password.value == "bfftilljannah") ||
        (password.value == "txtfromnorden" && username.value)
    ) {
        popup.style.display = "block";
        form.style.display = "none";
    } else {
        alert("Wrong Password! Try again.");
    }
}