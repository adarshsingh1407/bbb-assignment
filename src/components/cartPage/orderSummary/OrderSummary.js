import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import './OrderSummary.css';
import LABELS from '../../../i18n/labels';

function CartItemSummaryRows(props) {
  const {cartItems} = props;
  if (cartItems && cartItems.length) {
    return cartItems.map(cartItem => {
      return (<tr key={cartItem.productId}><td>{cartItem.name}</td><td>{'USD ' + (cartItem.qty * cartItem.perUnitAmt)}</td></tr>);
    })
  } else {
    return null;
  }
}

class OrderSummary extends Component {
  render() {
    const {cartItems, shippingCharges} = this.props;
    let totalAmt = shippingCharges || 0;
    if (cartItems && cartItems.length) {
      totalAmt += cartItems.reduce((acc, cartItem) => {
        return acc + (cartItem.qty * cartItem.perUnitAmt);
      }, 0);
    }
    return (
      <div id="right-panel" className="cell large-auto">
        <div>
          <h4>{LABELS.ORDER_SUMMARY_HEADING}</h4>
        </div>
        <div>
          <table className="hover striped">
            <thead>
              <tr>
                <th width="100">{LABELS.PRODUCT}</th>
                <th width="100">{LABELS.AMOUNT}</th>
              </tr>
            </thead>
            <tbody>
              <CartItemSummaryRows cartItems={cartItems} />
              <tr>
                <td>{LABELS.SHIPPING_CHARGES}</td>
                <td>{`${LABELS.PRICE_UNIT} ${shippingCharges}`}</td>
              </tr>
              <tr>
                <td>{LABELS.TOTAL}</td>
                <td>{`${LABELS.PRICE_UNIT} ${totalAmt}`}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/checkout-success" style={{color: 'white'}} activeStyle={{color: 'red'}}>
            <button type="button" disabled={totalAmt <= 0} className="button  expanded checkout">
              {LABELS.CHECKOUT}
            </button>
          </Link>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    cartItems: state.checkout.cartItems,
    shippingCharges: state.checkout.shippingCharges
  };
};

export default connect(
  mapStateToProps
)(OrderSummary);
