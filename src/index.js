import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import createRootReducer from './reducers';
import loggerMW from './middlewares/logger';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/sagas'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(loggerMW, sagaMiddleware, routerMiddleware(history));//, sagaMiddleware
const composedEnhancers = compose(
  middlewareEnhancer
)

const preloadedState = undefined;

const store = createStore(createRootReducer(history), preloadedState, composedEnhancers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
