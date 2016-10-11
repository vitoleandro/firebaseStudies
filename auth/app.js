(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCrU9NesLIWFAN4g0l2glRGoLfiABJZAtk",
        authDomain: "attendance-68049.firebaseapp.com",
        databaseURL: "https://attendance-68049.firebaseio.com",
        storageBucket: "attendance-68049.appspot.com",
        messagingSenderId: "540055401894"
    };

    firebase.initializeApp(config);

    const txtEmail    = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin    = document.getElementById('btnLogin');
    const btnSignUp   = document.getElementById('btnSignUp');
    const logOutBtn   = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass  = txtPassword.value;
        const auth  = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
    });

    logOutBtn.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass  = txtPassword.value;
        const auth  = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            logOutBtn.classList.remove('hide');
        } else {
            console.log('Not logged !');
            logOutBtn.classList.add('hide');
        }
    });

}())
