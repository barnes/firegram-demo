import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBC68IHCg7vVp-YBeE2tBJT-o9ZExZ3JhQ",
    authDomain: "playground-3832a.firebaseapp.com",
    projectId: "playground-3832a",
    storageBucket: "playground-3832a.appspot.com",
    messagingSenderId: "763616160156",
    appId: "1:763616160156:web:f5b436b19892d4f1fbc059"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };