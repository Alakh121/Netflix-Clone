import firebase from "firebase/app"

import "firebase/auth"

import "firebase/database"

import "firebase/storage"

const firebaseConfig = {

 apiKey: "AIzaSyB3GAxBeDh6pkPxuORduCMjJNAyE7NunjQ",
  authDomain: "netflix-1c7bf.firebaseapp.com",
  projectId: "netflix-1c7bf",
  storageBucket: "netflix-1c7bf.appspot.com",
  messagingSenderId: "736361932773",
  appId: "1:736361932773:web:8c7f912b84944ad92db10c"

};
  firebase.initializeApp(firebaseConfig);

export default firebase;