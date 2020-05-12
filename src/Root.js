import React from 'react';
import { Provider } from 'react-redux';
import firebase from './components/Firestore'
import Store from './services/store';
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import * as serviceWorker from './serviceWorker';

const rrfConfig = {
  userProfile: 'products',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: Store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
// const Root = ({ children, initialState = {} }) => (
//   <Provider store={store(initialState)}>
const Root = ({ children}) => (
  <Provider store={Store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    {children}
    </ReactReduxFirebaseProvider>,
    </Provider>
);
serviceWorker.unregister();

export default Root;
