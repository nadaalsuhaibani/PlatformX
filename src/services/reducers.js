import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer } from 'redux-firestore'
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';

<<<<<<< HEAD

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
=======
import authReducer from "./auth";
import { firebaseReducer } from "react-redux-firebase";
import apiStatusReducer from "./apiStatus";

export default combineReducers({
>>>>>>> 789e03cc0dd15c28520c222c09cc66004dad86cb
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer,
  filters: filtersReducer,
  sort: sortReducer,
  firebaseReducer,
  authReducer,
  apiStatusReducer
});
