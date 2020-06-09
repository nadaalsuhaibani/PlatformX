import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import Product from './Product';
import PropTypes from 'prop-types';
import Loading from '../../Loading'

export default function ProductList() {
  useFirestoreConnect([
    { collection: "products" }
  ]);
  const products = useSelector(state => state.firestore.ordered.products);
  console.log(products);


  if (!products) return <Loading/>;

  return products.map(p =>(
    <Product product={p} key={p.id} />
  ))

};
