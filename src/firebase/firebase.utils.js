import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 const config = {
    apiKey: "AIzaSyBDlDTUtMuUFRBlMzGzUrJPhDM4KKlq9v0",
    authDomain: "crwn-db-fe3ad.firebaseapp.com",
    databaseURL: "https://crwn-db-fe3ad.firebaseio.com",
    projectId: "crwn-db-fe3ad",
    storageBucket: "crwn-db-fe3ad.appspot.com",
    messagingSenderId: "564373932622",
    appId: "1:564373932622:web:76b967eae391935ef3911f"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters( {prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase