import {
  GET_CART_REQUESTED,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  CHANGE_QTY
} from '../actions/CheckoutActionTypes';

const initialState = {
  isFetchingCartItems: false,
  errorFetchingCart: false,
  cartItems: [],
  shippingCharges: 0
}

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUESTED: {
      return  {
        ...state,
        isFetchingCartItems: true
      };
    }
    case GET_CART_SUCCESS: {
      return  {
        ...state,
        isFetchingCartItems: false,
        cartItems: action.data.cartItems,
        shippingCharges: action.data.shippingCharges
      };
    }
    case GET_CART_FAILURE: {
      return  {
        ...state,
        isFetchingCartItems: false,
        errorFetchingCart: true,
        cartItems: []
      };
    }
    case CHANGE_QTY: {
      const {productId, newQty} = action.data;
      let newCartItems = [];
      if (newQty <= 0) {
        // remove product
        newCartItems = state.cartItems.filter(cartItem => cartItem.productId !== productId);
      } else {
        // update qty
        state.cartItems.forEach(cartItem => {
          if (cartItem.productId === productId) {
            newCartItems.push({
              ...cartItem,
              qty: newQty
            });
          } else {
            newCartItems.push(cartItem);
          }
        });
      }
      return {
        ...state,
        cartItems: [...newCartItems]
      };
    }
    default: {
      return state;
    }
  }
};

export default checkout;
