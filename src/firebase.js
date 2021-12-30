import firebase from "firebase/compat/app";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAQYRhWGK_PrUpwtRNq2SNPS6sIe6uUfI8",
  authDomain: "react-login-page-by-siva.firebaseapp.com",
  projectId: "react-login-page-by-siva",
  storageBucket: "react-login-page-by-siva.appspot.com",
  messagingSenderId: "981288034206",
  appId: "1:981288034206:web:7b003007fa2e3ce6cfc08f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
