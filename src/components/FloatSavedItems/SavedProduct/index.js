import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';
import {compose} from "redux";
import {firebaseConnect} from "react-redux-firebase";
import {connect} from "react-redux";

class SavedProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      isMouseOver: false
    };
  }

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    const { removeProduct } = this.props;
    const { product } = this.state;
    const userId = this.props.auth.uid;
    const classes = ['shelf-item'];

    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(userId, product)}
        />
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../../static/products/${product.sku}_1.jpg`)}
          alt={product.title}
        />
        <div className="shelf-item__details">
          <p className="title">{product.title}</p>
          <p className="desc">
            {`${product.availableSizes[0]} | ${product.style}`} <br />
          </p>
        </div>
        <div className="shelf-item__price">
          <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps
  ))(SavedProduct);
