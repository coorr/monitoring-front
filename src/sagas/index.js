import { all ,fork } from 'redux-saga/effects';
import axios from 'axios';

import itemSaga from './item';
import userSage from './user';
import orderSage from './order';

export default function* rootSaga() {
  yield all([
    fork(itemSaga),
    fork(userSage),
    fork(orderSage),
  ])
}