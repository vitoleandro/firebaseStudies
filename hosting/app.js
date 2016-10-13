(function (){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCrU9NesLIWFAN4g0l2glRGoLfiABJZAtk",
        authDomain: "attendance-68049.firebaseapp.com",
        databaseURL: "https://attendance-68049.firebaseio.com",
        storageBucket: "attendance-68049.appspot.com",
        messagingSenderId: "540055401894"
    };
    firebase.initializeApp(config);

    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    fileButton.addEventListener('change', function(e) {

        // Get file
        var file = e.target.files[0];

        // Storage Refer
        var storageRef = firebase.storage().ref('images/' + file.name);

        // Update file
        var task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            function error(err) {},
            function complete() {}
        );
    });
}())
