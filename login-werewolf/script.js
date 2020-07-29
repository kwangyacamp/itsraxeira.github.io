const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
const name = document.querySelector("#name");
const prodigy = document.querySelector("#prodigy");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#login-button");
const clueImage = document.querySelector("#clue");
const iframe = document.querySelector("#inner-frame");
let isOpened = false;
const PASSWORD = "14052020";
const SECRETS = {
  "nordenium": "images/tcif.png",
  "sydenium": "images/cbs.png",
  "vestenium": "images/hkc.png",
  "ostenium": "images/hvfss.png"
};

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

const login = () => {  
  if (password.value === PASSWORD) {
    let url = SECRETS[prodigy.value.toLowerCase()];
    if (url) {
      loadIframe("../wwplayerprof/index.html");
    } else {
      alert("Prodigy Name is invalid")
    }
  } else {
    alert("Authentication Failure");
    name.value = "";
    prodigy.value = "";
    password.value = "";
  }
}

const loadIframe = (url) => {
  iframe.src = "../wwplayerprof/index.html";
  modal.style.display = "none";
}

const loadImage = (url) => {
  document.querySelector(".modal-left").style = "display:none";
  clueImage.src = url;
}

async function loadURL(url) {
  body.innerHTML = await (await fetch(url)).text();
}

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
loginButton.addEventListener("click", login);
password.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    login();
  }
});

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};