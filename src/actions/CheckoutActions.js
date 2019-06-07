import {
  GET_CART_REQUESTED,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  CHANGE_QTY
} from './CheckoutActionTypes';

const getCartItems = () => {
  return {
    type: GET_CART_REQUESTED
  };
}

const getCartItemsSuccess = (cartItems, shippingCharges) => {
  return {
    type: GET_CART_SUCCESS,
    data: {
      cartItems,
      shippingCharges
    }
  };
}

const getCartItemsFailure = () => {
  return {
    type: GET_CART_FAILURE
  };
}

const changeQty = (productId, newQty) => {
  return {
    type: CHANGE_QTY,
    data: {
      productId,
      newQty
    }
  };
}

export {
  getCartItems,
  getCartItemsSuccess,
  getCartItemsFailure,
  changeQty
}
