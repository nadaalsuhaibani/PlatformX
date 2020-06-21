
// import { FETCH_PRODUCTS } from './actionTypes';

// const initialState = {
//   products: []
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_PRODUCTS:
//       return {
//         ...state,
//         products: action.payload
//       };
//     default:
//       return state;
//   }
// }
//------------
import { FETCH_PRODUCTS } from './actionTypes';

const initialState = {
  products: []
};

const shelfReducer = (state = initialState, action) => {
  const {products} = action
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [
        ...state,
        products
      ];
    default:
      return state
  }
}
export default shelfReducer