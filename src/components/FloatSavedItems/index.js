import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadSaved, removeProduct, changeProductQuantity } from '../../services/saved/actions';
import SavedProduct from './SavedProduct';
import {firebaseConnect, isEmpty, isLoaded} from 'react-redux-firebase'

import './style.scss';
import {compose} from "redux";
import Loading from "../Loading";

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
  componentDidMount() {
    loadSaved(this.props.auth.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }


  openFloatCart = () => {
    loadSaved(this.props.auth.id);
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { savedProducts } = this.props;
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
    if (!isLoaded(this.props.auth) || isEmpty(this.props.auth.email))
       return (<Loading/>);
    this.props.loadSaved(this.props.auth.uid);
    if (!this.props.savedProducts)
      return (<Loading/>);
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =( state) => ({
  auth: state.firebase.auth,
  savedProducts: state.saved.products,
  newProduct: state.saved.productToAdd,
  productToRemove: state.saved.productToRemove,

});

export default compose(
  connect(
    mapStateToProps,
    { loadSaved, removeProduct, changeProductQuantity }),
  firebaseConnect(),
)(FloatSavedItems);
