import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import store from './services/store'
import {createFirestoreInstance} from "redux-firestore";

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
//firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

 export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance //since we are using Firestore
};

export default firebase;
