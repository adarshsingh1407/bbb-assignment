import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeQty } from '../../../actions/CheckoutActions';
import LABELS from '../../../i18n/labels';
import {QTY_OPTIONS} from '../../../const/constants';

class CartItem extends Component {
  handleQtyChange = (newQty) => {
    this.props.changeQty(this.props.cartItem.productId, parseInt(newQty, 10));
  }
  render() {
    const {cartItem} = this.props;
    return (
      <React.Fragment>
        <div className="grid-x grid-padding-x cart-item page-title">
          <div className="cell small-3 medium-3 large-3">
            <img src={cartItem.img} className="product-img-thumb" alt={cartItem.imgAlt} />
          </div>
          <div className="cell auto">
            <div className="large-auto">
              <div>
                <h5>{cartItem.name}</h5>
                <ul>
                  {cartItem.attributes && cartItem.attributes.length && cartItem.attributes.map((attr, index) => {
                    return (<li key={index}>{attr}</li>);
                  })}
                </ul>
                <div className="grid-x grid-padding-x">
                  <div className="cell grid-padding-x large-12">
                    <div className="grid-x grid-padding-x qty-padding">
                      <div className="qty-select-padding">
                        <label htmlFor="right-label" className="text-right">{LABELS.QTY}</label>
                      </div>
                      <div className="qty-select-padding">
                        <select
                          defaultValue={cartItem.qty}
                          onChange={(e) => this.handleQtyChange(e.target.value)}>
                          {QTY_OPTIONS && QTY_OPTIONS.length && QTY_OPTIONS.map(qty => {
                            return (<option key={qty} value={qty}>{qty}</option>);
                          })}
                        </select>
                      </div>
                      <div className="qty-select-padding amount-value">{`${LABELS.PRICE_UNIT} ${cartItem.qty * cartItem.perUnitAmt}`}</div>
                    </div>
                  </div>
                </div>
                <button type="button" onClick={() => this.handleQtyChange(0)} className="clear alert button cart-item-remove">{LABELS.REMOVE}</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default connect(
  undefined,
  { changeQty }
)(CartItem);
