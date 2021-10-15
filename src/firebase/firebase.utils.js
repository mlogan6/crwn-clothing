import firebase from "firebase/compat/app"; //pulls in firebase utility library
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDcxmew-XMf8-VZMnRd5VD3UE0Y7F9Skvo",
  authDomain: "crwn-db-cc196.firebaseapp.com",
  projectId: "crwn-db-cc196",
  storageBucket: "crwn-db-cc196.appspot.com",
  messagingSenderId: "856478927118",
  appId: "1:856478927118:web:56ffc1760c8ec5d6a02f5f",
  measurementId: "G-YD1DMJK4PT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
