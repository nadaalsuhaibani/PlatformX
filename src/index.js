import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from './Root';

import './index.scss';

import store from "./services/store";
import {createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "./Firestore";
import {BrowserRouter as Router} from "react-router-dom";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
      <Root>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App />
          </Router>
      </ReactReduxFirebaseProvider>
      </Root>,
  document.getElementById("root")
);
