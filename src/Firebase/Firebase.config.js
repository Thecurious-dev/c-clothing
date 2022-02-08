import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDllcnBpyl9UyWFjs23k_1a4mjHQuvcrNE",
  authDomain: "c-clothing-ec21d.firebaseapp.com",
  projectId: "c-clothing-ec21d",
  storageBucket: "c-clothing-ec21d.appspot.com",
  messagingSenderId: "642249173583",
  appId: "1:642249173583:web:47490b44e2af94d70ad83a",
  measurementId: "G-M76Y04TRGD"
};


firebase.initializeApp(firebaseConfig);

//we trying to store the userAuth that we got from Auth inside of database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if there is no userAuth we should not do anything especially when the user sign and we get back null
  if (!userAuth) return;

  // if the user exist in our database we querry into firestore to get the location of the the object, 
  //check if the user exist and safe it into userRef 
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // we then try to get the snapshot of the object
  const snapShot = await userRef.get();
  // console.log(snapShot);
  // if snapshot does not exist we create a snapshot of the user with the following data
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // we then store the data using .set of userRef if there is no user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      // if there is any error we print out the error
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
// we then return our userRef
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const db = getFirestore();