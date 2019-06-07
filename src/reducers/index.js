import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import checkout from './checkout';

export default (history) => combineReducers({
  router: connectRouter(history),
  checkout
});
