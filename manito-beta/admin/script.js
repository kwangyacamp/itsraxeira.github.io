
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

var queryResult = []

function prepareTable(dataset) {
    $('#table_id').DataTable({
        paging: false,
        data: dataset,
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
                if (type === 'display') {
                    data = '<a href="' + data + '">' + data + '</a>';
                }
                return data;
            }
        }],
        columns: [
            { data: 'id' },
            { data: 'from' },
            { data: 'to' },
            { data: 'message' }
        ]
    });
}

window.onload = () => {
    db.collection("norde-manito").get()
        .then(function(querySnapshot) {
            // on success, create dataset list
            querySnapshot.forEach(function(doc) {
                let msg = doc.data();
                queryResult.push({
                    id: "https://itsraxeira.github.io/manito-beta/messages/index.html?q=" + doc.id,
                    from: msg.from,
                    to: msg.to,
                    message: msg.message
                });
            });

            // prepare data table
            prepareTable(queryResult);
        });
}