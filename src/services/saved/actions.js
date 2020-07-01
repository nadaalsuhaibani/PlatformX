import { LOAD_SAVED, ADD_PRODUCT_TO_SAVED, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

const loadSaved_ = products => ({
  type: LOAD_SAVED,
  payload: products
});

export const loadSaved = (userId) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    let products = [];
    firebase.firestore().collection('users').doc(userId).collection("savedItems")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(queryDocumentSnapshot => {
          products.push(queryDocumentSnapshot.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      }).then(() => {
      dispatch(loadSaved_(products))
    });
  }
};


const addProductToSaved_ = product => ({
  type: ADD_PRODUCT_TO_SAVED,
  payload: product
});
export const addProductToSaved = (userId, product) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log(userId, product.id);
    firebase.firestore().collection('users').doc(userId).collection("savedItems").where("id", "==", product.id)
      .get()
      .then(function(querySnapshot) {
          if (querySnapshot.empty)
            firebase.firestore().collection('users').doc(userId).collection("savedItems").add(product)
      })
      .catch(function(error) {
        console.log("Error adding document: ", error);
      }).then(() => {
      dispatch(addProductToSaved_(product))
    });
  }
};

const removeProduct_ = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const removeProduct = (userId, product) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log(userId, product.id);
    firebase.firestore().collection('users').doc(userId).collection("savedItems").where("id", "==", product.id)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          doc.ref.delete();
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      }).then(() => {
      dispatch(removeProduct_(product))
    });
  }
};

export const changeProductQuantity = product => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});
