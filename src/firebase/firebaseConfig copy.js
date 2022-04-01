import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJotertv6S3zDqAZGHypKzCFFkwCsUjsw",
    authDomain: "gestwork-bad1b.firebaseapp.com",
    projectId: "gestwork-bad1b",
    storageBucket: "gestwork-bad1b.appspot.com",
    messagingSenderId: "810323040534",
    appId: "1:810323040534:web:d24b14d5ba12b34b1e1837"
  };

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}

