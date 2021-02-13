import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyB7TzWQCFg3Ku7i1-SALqLUFLtRoLOokhs",
        authDomain: "crwn-db-dd2d2.firebaseapp.com",
        projectId: "crwn-db-dd2d2",
        storageBucket: "crwn-db-dd2d2.appspot.com",
        messagingSenderId: "999198139107",
        appId: "1:999198139107:web:c019b8762f355ae0ed9bd6",
        measurementId: "G-K82LWBY4EH"
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt : 'select_acount'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;