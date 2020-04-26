import { compose, createStore, applyMiddleware } from 'redux';
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
