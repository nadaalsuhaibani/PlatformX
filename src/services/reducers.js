import { combineReducers } from 'redux';
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';

import authReducer from "./auth";
import firebaseReducer from "react-redux-firebase";
import 'firebase/firestore'
import apiStatusReducer from "./apiStatus";
import firestoreReducer from 'redux-firestore'

export default combineReducers({
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer,
  filters: filtersReducer,
  sort: sortReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer,
  apiStatusReducer
});
