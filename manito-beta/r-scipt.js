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

window.onload = () => {
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    let query = searchParams.get("q");

    let docRef = db.collection("norde-manito").doc(query);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var jsonMessage = doc.data();
            sender.value = jsonMessage.from;
            recipient.value = jsonMessage.to;
            message.value = jsonMessage.message;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
}