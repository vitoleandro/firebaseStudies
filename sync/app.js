(function() {
    // initialize firebase
    var config = {
        apiKey: "AIzaSyCrU9NesLIWFAN4g0l2glRGoLfiABJZAtk",
        authDomain: "attendance-68049.firebaseapp.com",
        databaseURL: "https://attendance-68049.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "540055401894"
    };

    firebase.initializeApp(config);

    // Elements
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');

    // References
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    // Sync
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');

        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });

    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val(); 
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove(); 
    });
}())