import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk'


const initialState =
  JSON.parse(window.localStorage.getItem('state')) || {};

const store = createStore(rootReducer, initialState,
    applyMiddleware(
      thunk));

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
