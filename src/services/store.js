import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import {  getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk';
//import  firebase from "../components/Firestore";
//test
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk.withExtraArgument({getFirestore})];

const initialState =
  JSON.parse(window.localStorage.getItem('state')) || {};

const store = createStore(
  rootReducer,
  composeEnhancers(
            applyMiddleware(...middleware)
                )
           
);
export default store 
// export default initialState => {
//   initialState =
//     JSON.parse(window.localStorage.getItem('state')) || initialState;
     //const middleware = [thunk.withExtraArgument({getFirestore})];

  // const store = createStore(
  //   rootReducer,
  //   initialState,
  //   compose(
  //             applyMiddleware(thunk.withExtraArgument({getFirestore}))
  //                 )
  //               /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //       window.__REDUX_DEVTOOLS_EXTENSION__() */
  // );


//   store.subscribe(() => {
//     const state = store.getState();
//     const persist = {
//       cart: state.cart,
//       total: state.total
//     };

//     window.localStorage.setItem('state', JSON.stringify(persist));});

//   return store;};
