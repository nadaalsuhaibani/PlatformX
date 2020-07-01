import { LOAD_SAVED, ADD_PRODUCT_TO_SAVED, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_SAVED:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT_TO_SAVED:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload)
      };
    case CHANGE_PRODUCT_QUANTITY:
      return {
        ...state,
        productToChange: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
}
