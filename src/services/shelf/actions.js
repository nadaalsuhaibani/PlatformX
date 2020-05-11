import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';
import { productsAPI } from '../util';
//import firestore from '../firestoreReducer'
//import * as ReactRedux from 'react-redux';
import { useSelector } from 'react-redux';
//import { useFirestore } from 'react-redux-firebase'
import { useFirestoreConnect } from 'react-redux-firebase';
 
const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

useFirestoreConnect([{collection:'products'}]);
const products = useSelector((state) => state.firestore.data.products);
//const firestore = getFirestore()
//console.log(products);

export const fetchProducts = (filters, search, sortBy, callback) => dispatch => {
 
  return products &&
  products.map((product) => (
      console.log(product)
    ));
    //firestore.collection('products')
    //.get()
    // .then(querySnapshot => {
    //   const products  = querySnapshot.docs.map(doc => doc.data());
    //   console.log(products);
      // if (!!filters && filters.length > 0) {
      //   products = products.filter(p =>
      //     filters.find(f => p.availableSizes.find(size => size === f))
      //   );
      // }

      // if (!!search) {
      //   products = products.filter(p => p.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      // }

      // if (!!sortBy) {
      //   products = products.sort(compare[sortBy]);
      // }

      // if (!!callback) {
      //   callback();
      // }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    //})
    // .catch(err => {
    //   console.log('Could not fetch products. Try again later.');
    // });
};
