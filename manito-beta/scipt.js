    // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8JH_xK-n3RPChWBWyoGrzD7N3vmQ7YbU",
    authDomain: "flameseeker-56fb5.firebaseapp.com",
    databaseURL: "https://flameseeker-56fb5.firebaseio.com",
    projectId: "flameseeker-56fb5",
    storageBucket: "flameseeker-56fb5.appspot.com",
    messagingSenderId: "121065227260",
    appId: "1:121065227260:web:02a46a9c0cbbfc86656879"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// HTML related logic
const sender = document.querySelector("#sender");
const recipient = document.querySelector("#recipient");
const message = document.querySelector("#message");
const sendButton = document.querySelector("#send-button");


var msg;

function sendMessage() {

    if (sender.value && recipient.value && message.value) {
        var jsonMessage = {
            from: sender.value,
            to: recipient.value,
            message: message.value
        };
        msg = jsonMessage;
    
        db.collection("norde-manito")
            .add(jsonMessage)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                alert("Your message is successfully sent!");
                sender.value = "";
                recipient.value = "";
                message.value = "";
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                alert(error);
            })
    } else {
        alert("Message cannot be empty!");
    }
    
}

sendButton.addEventListener("click", sendMessage);