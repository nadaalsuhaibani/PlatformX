import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadSaved, removeProduct, changeProductQuantity } from '../../services/saved/actions';
import SavedProduct from './SavedProduct';

import './style.scss';

class FloatSavedItems extends Component {
  static propTypes = {
    loadSaved: PropTypes.func.isRequired,
    savedProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
  };

  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { savedProducts, updateSaved } = this.props;
    let productAlreadyInCart = false;

    savedProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      savedProducts.push(product);
    }
    this.openFloatCart();
  };

  removeProduct = product => {
    const { savedProducts } = this.props;

    const index = savedProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      savedProducts.splice(index, 1);
    }
  };

  render() {
    const { savedProducts, removeProduct } = this.props;

    const products = savedProducts.map(p => {
      return (
        <SavedProduct product={p} removeProduct={removeProduct} key={p.id} />
      );
    });

    let classes = ['float-saved'];

    if (!!this.state.isOpen) {
      classes.push('float-saved--open');
    }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-saved__close-btn"
          >
            X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!this.state.isOpen && (
          <span
            onClick={() => this.openFloatCart()}
            className="bag bag--float-saved-closed"
          >
            <span className="bag__quantity">{savedProducts.length}</span>
          </span>
        )}

        <div className="float-saved__content">
          <div className="float-saved__header">
            <span className="bag">
              <span className="bag__quantity">{savedProducts.length}</span>
            </span>
            <span className="header-title">FAVORITE</span>
          </div>

          <div className="float-saved__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
          empty <br />
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedProducts: state.saved.products,
  newProduct: state.saved.productToAdd,
  productToRemove: state.saved.productToRemove,
});

export default connect(
  mapStateToProps,
  { loadSaved, removeProduct, changeProductQuantity }
)(FloatSavedItems);
