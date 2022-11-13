import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC2PDV1MKaq2b_qXf_gE-m2xgEQTU3XViw",
    authDomain: "soloop-project.firebaseapp.com",
    projectId: "soloop-project",
    storageBucket: "soloop-project.appspot.com",
    messagingSenderId: "80509062530",
    appId: "1:80509062530:web:8b3298d3b59894e432d39b",
    measurementId: "G-LVQX5YX05J"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}
