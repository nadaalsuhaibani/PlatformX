import { LOAD_CART, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProductToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = product => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});
