import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDgZxeGzfGTnB19ZvruGpbUXol94bPNBa8",
    authDomain: "crwn-clothing-db-d4e89.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-d4e89.firebaseio.com",
    projectId: "crwn-clothing-db-d4e89",
    storageBucket: "crwn-clothing-db-d4e89.appspot.com",
    messagingSenderId: "234910888694",
    appId: "1:234910888694:web:1d74d239a7a514df59b2d7"
  };


export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName, email, createdAt,...additionalData
      })
    }catch(err){
      console.log('Error creating user: ',err.message)
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;