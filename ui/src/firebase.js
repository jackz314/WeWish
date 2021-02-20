// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDnGW8SPLYZ_TgaYVXxkiX4rp6YnYbzEE",
    authDomain: "wewish.firebaseapp.com",
    projectId: "wewish",
    storageBucket: "wewish.appspot.com",
    messagingSenderId: "371870672394",
    appId: "1:371870672394:web:a1609b47563393f5f7e1f3",
    measurementId: "G-D7RQ2S0B8V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

const addWish = (name) => {
    
}

export default fb;