import { all, fork, takeLatest, delay, put,call } from 'redux-saga/effects';
import { GET_ORDER_ALL_FAILURE, GET_ORDER_ALL_REQUEST, GET_ORDER_ALL_SUCCESS, ORDER_SAVE_FAILURE, ORDER_SAVE_REQUEST, ORDER_SAVE_SUCCESS } from '../reducers/order';
import OrderService from '../../service/order/Order.service';
import TokenCheck from '../store/tokenCheck';


function* orderSave(action) {
  try {
    const result = yield OrderService.saveOrderDeliveryItem(action.userId, action.data);
    yield put({       
      type: ORDER_SAVE_SUCCESS, 
      data: result.data,
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: ORDER_SAVE_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function* getOrderAll(action) {
  try {
    const result = yield OrderService.getOrderUserById(action.userId);
    yield put({       
      type: GET_ORDER_ALL_SUCCESS, 
      data: result.data,
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ORDER_ALL_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}


function* watchOrderSave() {
  yield takeLatest(ORDER_SAVE_REQUEST, orderSave);
}
function* watchGetOrderAll() {
  yield takeLatest(GET_ORDER_ALL_REQUEST, getOrderAll);
}

export default function* userSage() {
    yield all([
        fork(watchOrderSave),
        fork(watchGetOrderAll),
    ])
  }