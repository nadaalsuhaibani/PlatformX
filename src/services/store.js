import { compose, createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
//import thunk from 'redux-thunk';
import {rootReducer }from './reducers';
//import { reduxFirestore, getFirestore } from 'redux-firestore'
//import db from './firestoreReducer'
export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  //const middleware = [thunk.withExtraArgument({getFirestore})];
  
  const store = createStore(
    rootReducer,
    
    // compose(
    //   applyMiddleware(...middleware)
    //   //reduxFirestore(db)
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__() 
    // )
=======
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { reactReduxFirebase } from "react-redux-firebase";
import  firebase from "../components/Firestore";

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;


  const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(createStore);
  const store = createStoreWithFirebase(
    rootReducer,
    initialState,
      applyMiddleware(reduxThunk)
      /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
>>>>>>> 789e03cc0dd15c28520c222c09cc66004dad86cb
  );


  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};
