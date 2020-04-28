import React from 'react';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from "redux-firestore";
import store from './services/store';
import * as firebase from "firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";


const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
