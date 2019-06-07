import React, { Component } from 'react';
import CartItem from './CartItem';
import LABELS from '../../../i18n/labels';

class CartItems extends Component {

  render() {
    const {cartItems} = this.props;
    if (cartItems && cartItems.length) {
      return (
        <div id="left-panel" className="cell large-8">
          <div>
            <h4>{`${LABELS.YOUR_CART} (${cartItems.length})`}</h4>
          </div>
          <div className="grid-y medium-grid-frame">
            <div className="cell shrink header medium-cell-block-container">
              {cartItems && cartItems.length && cartItems.map(cartItem => {
                return (<CartItem key={cartItem.productId} cartItem={cartItem} />);
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (<div id="left-panel" className="cell large-8">
        <div>
          <h4>{`${LABELS.YOUR_CART} (${cartItems.length})`}</h4>
        </div>
      </div>);
    }
  }

}

export default CartItems;
