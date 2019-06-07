import React, { Component } from 'react';
import './CartPage.css';
import { connect } from "react-redux";
import { getCartItems, getCartItemsSuccess } from '../../actions/CheckoutActions';
import CartItems from './cart/CartItems';
import OrderSummary from './orderSummary/OrderSummary';
// import {DEFAULT_CART_ITEMS, DEFAULT_SHIPPING_CHARGES} from './const/testData';

class CartPage extends Component {
  componentDidMount() {
    this.props.getCartItems();
  }
  render() {
    // console.log(this.props);
    const {cartItems, isFetchingCartItems} = this.props;
    return (
      <div className="grid-x grid-padding-x">
        {!isFetchingCartItems ? (<React.Fragment><CartItems cartItems={cartItems} />
          <OrderSummary /></React.Fragment>) : (<p>Loading cart items</p>)}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    cartItems: state.checkout.cartItems,
    shippingCharges: state.checkout.shippingCharges,
    isFetchingCartItems: state.checkout.isFetchingCartItems
  };
};

export default connect(
  mapStateToProps,
  { getCartItems, getCartItemsSuccess }
)(CartPage);
