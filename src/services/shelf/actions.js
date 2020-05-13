import { FETCH_PRODUCTS } from './actionTypes';
import { getFirestore } from 'redux-firestore'

import axios from 'axios';

import { productsAPI } from '../util';
//import * as ReactRedux from 'react-redux';
import { useSelector } from 'react-redux';
//import { useFirestore } from 'react-redux-firebase'
import { useFirestoreConnect } from 'react-redux-firebase';
import { firestore } from 'firebase';
 
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

//const firestore = useFirestore()
// useFirestoreConnect('products');
// const products = useSelector((state) => state.firestore.data.products);
//const firestore = getFirestore()
// console.log(products);

export const fetchProducts = (filters, search, sortBy, callback,productID) =>  {
 
    
    return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore()
    firestore().collection('products').doc(productID).get()
    .then((doc) => {
      const data = doc.data()
      if(doc.exists){
        dispatch({ type: FETCH_PRODUCTS , data }) 
       }else{
        console.log('does not exist')
       }

      
     
      // .then(querySnapshot => {
      //   const productsRef  = querySnapshot.docs.map(doc => doc.data());
      //   console.log(productsRef);
     
      if (!!filters && filters.length > 0) {
        data = data.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!search) {
        data = data.filter(p => p.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      }

      if (!!sortBy) {
        data = data.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      
      // return dispatch({
      //   type: FETCH_PRODUCTS,
      //   payload: products
      // });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
    }  
};
