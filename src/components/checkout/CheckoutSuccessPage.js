import React, { Component } from 'react';
import './CheckoutSuccessPage.css'
import LABELS from '../../i18n/labels';

class CheckoutSuccessPage extends Component {

  render() {
    return (
      <div className="grid-x grid-padding-x">
        <div className="cell small-12 medium-12 large-12">
          <p className="order-successful-msg">{LABELS.ORDER_PLACED_SUCCESSFULLY_MSG}</p>
        </div>
      </div>
    );
  }

}

export default CheckoutSuccessPage;
