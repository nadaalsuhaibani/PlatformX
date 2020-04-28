import { createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { reactReduxFirebase } from "react-redux-firebase";
import  firebase from "../Firestore";
import { reduxFirestore } from 'redux-firestore'


export default initialState => {

  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;

  const store = createStore(rootReducer, initialState);

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

// applyMiddleware(reduxThunk)
// /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__() */
