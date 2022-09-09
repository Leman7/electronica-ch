import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({ 
    apiKey: process.env.REACT_APP_FIRESTORE_APIKEY,
    authDomain: "electronica-diner.firebaseapp.com",
    projectId: "electronica-diner",
    storageBucket: "electronica-diner.appspot.com",
    messagingSenderId: "186411810199",
    appId: process.env.REACT_APP_FIRESTORE_APPID,
    measurementId: "G-H551JP4F7E"
 });

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)