import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

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

export const fetchProducts = (filters, search, sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!search) {
        products = products.filter(p => p.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
//---------------------------
// import { FETCH_PRODUCTS } from './actionTypes';
// import { getFirestore } from 'redux-firestore'


// const compare = {
//   lowestprice: (a, b) => {
//     if (a.price < b.price) return -1;
//     if (a.price > b.price) return 1;
//     return 0;
//   },
//   highestprice: (a, b) => {
//     if (a.price > b.price) return -1;
//     if (a.price < b.price) return 1;
//     return 0;
//   }
// };



// export const fetchProducts = (filters, search, sortBy, callback,productID) =>  {
 
    
//     return (dispatch, getState, { getFirestore }) => {
//       const firestore = getFirestore()
//     firestore.collection('products').doc(productID).get()
//     .then((doc) => {
//       if(doc.exists){
//         let {products} = doc.data()
//         dispatch({ type: FETCH_PRODUCTS , products }) 
       
      
     
//       // .then(querySnapshot => {
//       //   const productsRef  = querySnapshot.docs.map(doc => doc.data());
//       //   console.log(productsRef);
     
//       if (!!filters && filters.length > 0) {
//         products = products.filter(p =>
//           filters.find(f => p.availableSizes.find(size => size === f))
//         );
//       }

//       if (!!search) {
//         products = products.filter(p => p.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
//       }

//       if (!!sortBy) {
//         products = products.sort(compare[sortBy]);
//       }

//       if (!!callback) {
//         callback();
//       }
// }else{
//         console.log('does not exist')
//        }

      
//       // return dispatch({
//       //   type: FETCH_PRODUCTS,
//       //   payload: products
//       // });
//     })
//     .catch(err => {
//       console.log('Could not fetch products. Try again later.');
//     });
//     }  
// };
