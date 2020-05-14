import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState =
  JSON.parse(window.localStorage.getItem('state')) || {};

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
              applyMiddleware(thunk.withExtraArgument({getFirestore}))
                  )
             
  );

store.subscribe(() => {
  const state = store.getState();
  const persist = {
    cart: state.cart,
    total: state.total,
    saved: state.saved,
  };

  window.localStorage.setItem('state', JSON.stringify(persist));
});

export default store;
//-------------------------------
// import { compose, createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import {  getFirestore } from 'redux-firestore'
// import thunk from 'redux-thunk';
// //import { getFirebase } from 'react-redux-firebase';
// //import  firebase from "../components/Firestore";
// //test
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const middleware = [thunk.withExtraArgument({getFirestore})];

// // const initialState =
// //   JSON.parse(window.localStorage.getItem('state')) || {};

// const store = createStore(
//   rootReducer,
//   //initialState,
//   composeEnhancers(
//             applyMiddleware(thunk.withExtraArgument({getFirestore}))
//                 )
           
// );

// // export default initialState => {
// //   initialState =
// //     JSON.parse(window.localStorage.getItem('state')) || initialState;
//      //const middleware = [thunk.withExtraArgument({getFirestore})];

//   // const store = createStore(
//   //   rootReducer,
//   //   initialState,
//   //   compose(
//   //             applyMiddleware(thunk.withExtraArgument({getFirestore}))
//   //                 )
//   //               /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   //       window.__REDUX_DEVTOOLS_EXTENSION__() */
//   // );


//   // store.subscribe(() => {
//   //   const state = store.getState();
//   //   const persist = {
//   //     cart: state.cart,
//   //     total: state.total
//   //   };

//    // window.localStorage.setItem('state', JSON.stringify(persist));});

//     export default store;
