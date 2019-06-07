import { put, takeLatest, all } from 'redux-saga/effects';
import {DEFAULT_CART_ITEMS, DEFAULT_SHIPPING_CHARGES} from '../const/testData';
import {fetchCart} from '../services/api';

function* fetchCartSaga() {
  const apiResponse = yield fetchCart('/');
  apiResponse.data = {
    cartItems: DEFAULT_CART_ITEMS,
    shippingCharges: DEFAULT_SHIPPING_CHARGES
  }
  console.log(apiResponse.status);
  yield put({ type: "GET_CART_SUCCESS", data: apiResponse.data});
}

function* actionWatcher() {
     yield takeLatest('GET_CART_REQUESTED', fetchCartSaga)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
