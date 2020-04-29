import { compose, createStore, applyMiddleware } from 'redux';
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
