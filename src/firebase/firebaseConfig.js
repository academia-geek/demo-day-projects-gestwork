import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYKVK6SO3WW0hPjkZyiDgqmqQwAny5g28",
    authDomain: "login-poke-296cd.firebaseapp.com",
    projectId: "login-poke-296cd",
    storageBucket: "login-poke-296cd.appspot.com",
    messagingSenderId: "700272454372",
    appId: "1:700272454372:web:39f5580358d782444f1af1"
  };
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}