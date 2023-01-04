import {
    initializeApp
} from "firebase/app";
import {
    getAuth,signInWithEmailAndPassword,onAuthStateChanged
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBzdfXPBLN51-F5bSx22CNdBDq35wzbmeI",
    authDomain: "dc-backend-3ea84.firebaseapp.com",
    projectId: "dc-backend-3ea84",
    storageBucket: "dc-backend-3ea84.appspot.com",
    messagingSenderId: "322207006742",
    appId: "1:322207006742:web:d12ffa1d0e77ff92c5f537",
    measurementId: "G-V314LNCRP6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth , signInWithEmailAndPassword,onAuthStateChanged}