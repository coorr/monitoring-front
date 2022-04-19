import { all ,fork } from 'redux-saga/effects';
import axios from 'axios';

import itemSaga from './item';
import userSage from './user';

axios.defaults.baseURL = 'http://localhost:8080/';
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(itemSaga),
    fork(userSage)
  ])
}