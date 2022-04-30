import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDG_Wn15OJG6hcjp3qeJ2f659lx-_llZ8w",
    authDomain: "dragonhacks22.firebaseapp.com",
    projectId: "dragonhacks22",
    storageBucket: "dragonhacks22.appspot.com",
    messagingSenderId: "618608151728",
    appId: "1:618608151728:web:da008998ef25be2c3b3f75",
    measurementId: "G-6M3QSG4JSL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
