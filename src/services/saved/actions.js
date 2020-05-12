import { LOAD_SAVED, ADD_PRODUCT_TO_SAVED, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const loadSaved = products => ({
  type: LOAD_SAVED,
  payload: products
});

export const addProductToSaved = product => ({
  type: ADD_PRODUCT_TO_SAVED,
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
