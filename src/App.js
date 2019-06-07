import React from 'react';
import { Route, Switch } from 'react-router'
import './App.css';

import Header from './components/Header';
import CartPage from './components/cartPage/CartPage';
import CheckoutSuccessPage from './components/checkout/CheckoutSuccessPage';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
          <Route exact path="/" render={() => (<CartPage />)} />
          <Route exact path="/checkout-success" render={() => (<CheckoutSuccessPage />)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
