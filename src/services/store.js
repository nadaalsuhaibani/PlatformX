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