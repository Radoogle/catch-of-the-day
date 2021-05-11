import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3L85_gyP4TzXbZyxzC6J6IdZqaWtVeQU",
    authDomain: "catch-of-the-day-radude.firebaseapp.com",
    projectId: "catch-of-the-day-radude",
    databaseURL: "https://catch-of-the-day-radude-default-rtdb.europe-west1.firebasedatabase.app"
    // storageBucket: "catch-of-the-day-radude.appspot.com",
    // messagingSenderId: "601433660582",
    // appId: "1:601433660582:web:4a5e33d2cf6d826b346867",
    // measurementId: "G-6D40PD9VFL"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;