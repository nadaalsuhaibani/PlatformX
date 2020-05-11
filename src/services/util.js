export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

// export const productsAPI =
   //'https://x-project-1.firebaseio.com/products';
//  //export const productsAPI = "http://localhost:8001/api/products";
