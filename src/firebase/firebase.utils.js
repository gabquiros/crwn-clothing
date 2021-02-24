import firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2Z2-wLUb3sRUXfTkc0TvfRnztSZkt5X0",
  authDomain: "crwn-db-65a38.firebaseapp.com",
  projectId: "crwn-db-65a38",
  storageBucket: "crwn-db-65a38.appspot.com",
  messagingSenderId: "57603379420",
  appId: "1:57603379420:web:f01fcc6a4d196c2c87e419",
  measurementId: "G-MLSQTK4N1N"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase; 