import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1djpzu4p-xmh7ZnNhfHNJUrL7W3laq54",
    authDomain: "gestwork-21e90.firebaseapp.com",
    projectId: "gestwork-21e90",
    storageBucket: "gestwork-21e90.appspot.com",
    messagingSenderId: "734191707597",
    appId: "1:734191707597:web:7652ef707bb7c76616d084"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}