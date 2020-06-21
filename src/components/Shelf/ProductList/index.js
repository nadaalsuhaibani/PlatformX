import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect} from 'react-redux-firebase';
import Product from './Product';
import Spinner from '../../Spinner';

export default function ProductList() {
  useFirestoreConnect([
    { collection: "products" }
  ]);
  const products = useSelector(state => state.firestore.ordered.products);
 console.log(products);
  if (!products) return <Spinner/>;

  return products.map(p =>(
      <Product product={p} key={p.id} />
  ))
};


