import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyDllcnBpyl9UyWFjs23k_1a4mjHQuvcrNE",
  authDomain: "c-clothing-ec21d.firebaseapp.com",
  projectId: "c-clothing-ec21d",
  storageBucket: "c-clothing-ec21d.appspot.com",
  messagingSenderId: "642249173583",
  appId: "1:642249173583:web:47490b44e2af94d70ad83a",
  measurementId: "G-M76Y04TRGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

 export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;
    //   // ...
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
}


