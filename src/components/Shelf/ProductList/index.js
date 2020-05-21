import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import Product from './Product';
import PropTypes from 'prop-types';


export default function ProductList() {
  useFirestoreConnect([
    { collection: "products" }
  ]);
  const products = useSelector(state => state.firestore.ordered.products);
  //const firestore = useFirestore();

  return products.map(p => {
     return <Product product={p} key={p.id} />;
  })
  
};
ProductList.propTypes = {
  firestore: PropTypes.object,
}
//export default ProductList;
//-------------------
// import React from 'react';
// import { connect } from 'react-redux';

// import Product from './Product';
// //import { addProduct } from '../../../../services/cart/actions';
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'
// import { fetchProducts } from '../../../services/shelf/actions'

// const ProductList = ({ products }) => {
//   return products.map(p => {
//     return <Product product={p} key={p.id} />;
//   });
// };
// // const ProductList = (props) => {
// //   console.log(props);

// //   const {product} = props
  
// //   if (this.props.products){
  
// //   return  this.props.products = product.map(p => {
// //     return <Product product={p} key={p.id}/>
// //   });
// // }
// //  return <div></div>
// // }

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     fetchProducts: (id) => { dispatch(fetchProducts(id))}
// //   }
// //  }

// // const mapStateToProps = (state) =>{
// //   const product5= state.firestore.ordered.products
// //    console.log(state);
// //   return{
// //     product: state.firestore.ordered.products
// //   }
// // }

// // export default compose(
// //   connect(mapStateToProps, mapDispatchToProps),
// //   firestoreConnect([
// //    { collection: 'products'}
// //   ])
// //  )(ProductList)
// export default ProductList;
