import React from 'react';
import { Provider } from 'react-redux';

import store from './services/store';

import * as firebase from "firebase/app";
import 'firebase/firestore'
//import firebase from "firebase/app";
import "firebase/auth";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const config = {
  apiKey: "AIzaSyDa2xuvuxGZvxY_z-cnrLvq9Pcb7NPLfxU",
  authDomain: "x-project-1.firebaseapp.com",
  databaseURL: "https://x-project-1.firebaseio.com",
  projectId: "x-project-1",
  storageBucket: "x-project-1.appspot.com",
  messagingSenderId: "645546586124",
  appId: "1:645546586124:web:3c3b4af4eb9f0631513e29"
};
const rrfConfig = {
  userProfile: "products",
  useFirestoreForProfile: true
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.firestore();
//export default firestore;
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};


const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    {children}
    </ReactReduxFirebaseProvider>
    </Provider>
);

export default Root;
