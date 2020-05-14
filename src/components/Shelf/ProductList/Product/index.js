
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import heartIcon from '../../../../static/heartIcon.png';
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProductToSaved } from '../../../../services/saved/actions';
import { addProductToCart } from '../../../../services/cart/actions';

const Product = ({ product, addProductToSaved, addProductToCart }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  return (
    <div className="shelf-item">
      <img
        onClick={() => addProductToSaved(product)}
        data-sku={product.sku}
        className="shelf-stopper"
        src={heartIcon}
        alt="heart icon"/>
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>

      </div>
      <div className="shelf-item__buy-btn" onClick={() => addProductToCart(product)} data-sku={product.sku}>Add to Cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProductToSaved: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProductToSaved, addProductToCart }
)(Product);
//------------
// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import heartIcon from '../../../../static/heartIcon.png';
// import Thumb from '../../../Thumb';
// import { formatPrice } from '../../../../services/util';
// import { addProductToSaved } from '../../../../services/saved/actions';
// import { addProductToCart } from '../../../../services/cart/actions';

// const Product = ({ product, addProductToSaved, addProductToCart }) => {
//   product.quantity = 1;

//   let formattedPrice = formatPrice(product.price, product.currencyId);

//   return (
//     <div className="shelf-item">
//       <img
//         onClick={() => addProductToSaved(product)}
//         data-sku={product.sku}
//         className="shelf-stopper"
//         src={heartIcon}
//         alt="heart icon"/>
//       <Thumb
//         classes="shelf-item__thumb"
//         src={require(`../../../../static/products/${product.sku}_1.jpg`)}
//         alt={product.title}
//       />
//       <p className="shelf-item__title">{product.title}</p>
//       <div className="shelf-item__price">
//         <div className="val">
//           <small>{product.currencyFormat}</small>
//           <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
//           <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
//         </div>

//       </div>
//       <div className="shelf-item__buy-btn" onClick={() => addProductToCart(product)} data-sku={product.sku}>Add to Cart</div>
//     </div>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
//   addProductToSaved: PropTypes.func.isRequired,
//   addProductToCart: PropTypes.func.isRequired
// };
// // const mapStateToProps = (state) => {
// //   return {
// //     getProductsdata: state.getProducts
// //   }
// //  }

// export default connect(
//  // mapStateToProps,
//  null,
//   { addProductToSaved, addProductToCart }
// )(Product);