import { FETCH_PRODUCTS } from './actionTypes';

// const initialState = {
//   products: []
// };

const getProducts = (state = {}, action) => {
  const {data} = action
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        data 
        //products: action.payload
      };
    default:
      return state;
  }
}
export default getProducts