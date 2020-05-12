import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import heartIcon from '../../../../static/heartIcon.png';
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import { fetchProducts } from '../../../../services/shelf/actions'

class Product extends React.Component {
  state = {
    product: ''
   }
  componentDidMount(){
    let {id} = this.props.match.params
    this.props.fetchProducts(id)
   }
   handleChange = value => {
    this.setState({ product: value })
   }
// const Product = ({ product, addProduct }) => {
  
render() {

   this.product.quantity = 1;

   let formattedPrice = formatPrice(p.price, p.currencyId);
  return (
    <div className="shelf-item">
      <img 
        onClick={() => addProduct(p)}
        data-sku={p.sku} 
        className="shelf-stopper" 
        src={heartIcon} 
        alt="heart icon"/> 
      <Thumb value={this.state.product}
        handleChange={this.handleChange}
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${p.sku}_1.jpg`)}
        alt={p.title}
      />
      <p className="shelf-item__title">{p.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{p.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        
      </div>
      <div className="shelf-item__buy-btn">More Details</div>
    </div>
  );
};
  }

  const mapDispatchToProps = (dispatch) => {
    return {
     fetchProducts: (id) => { dispatch(fetchProducts(id))},
    }
   }
   const mapStateToProps = (state) => {
    return {
      getProducts: state.getProducts
    }
   }

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps, mapDispatchToProps
  //,{ addProduct }
)(Product);
