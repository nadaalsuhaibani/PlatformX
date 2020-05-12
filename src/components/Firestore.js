import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


// Your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa2xuvuxGZvxY_z-cnrLvq9Pcb7NPLfxU",
  authDomain: "x-project-1.firebaseapp.com",
  databaseURL: "https://x-project-1.firebaseio.com",
  projectId: "x-project-1",
  storageBucket: "x-project-1.appspot.com",
  messagingSenderId: "645546586124",
  appId: "1:645546586124:web:3c3b4af4eb9f0631513e29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
