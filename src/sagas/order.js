import { all, fork, takeLatest, delay, put,call } from 'redux-saga/effects';
import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, GET_ORDER_ALL_FAILURE, GET_ORDER_ALL_REQUEST, GET_ORDER_ALL_SUCCESS, ORDER_SAVE_FAILURE, ORDER_SAVE_REQUEST, ORDER_SAVE_SUCCESS } from '../reducers/order';
import OrderService from '../../service/order/Order.service';
import TokenCheck from '../store/tokenCheck';


function* orderSave(action) {
  try {
    const result = yield OrderService.saveOrderDeliveryItem(action.userId, action.data);
    const history = action.history;
    yield put({       
      type: ORDER_SAVE_SUCCESS, 
      data: result.data,
    }) 
    alert("주문처리가 완료되었습니다.")
    history.push("/mypage/list")
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
    const result = yield OrderService.getOrderUserById(action.userId, action.startDate, action.endDate);
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

function* cancelOrder(action) {
  try {
    const result = yield OrderService.cancelOrder(action.orderId, action.startDate, action.endDate);
    yield put({       
      type: CANCEL_ORDER_SUCCESS, 
      data: result.data,
    }) 
    alert("주문이 정상적으로 주문취소 되었습니다.")
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: CANCEL_ORDER_FAILURE,
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
function* watchCancelOrder() {
  yield takeLatest(CANCEL_ORDER_REQUEST, cancelOrder);
}

export default function* userSage() {
    yield all([
        fork(watchOrderSave),
        fork(watchGetOrderAll),
        fork(watchCancelOrder),
    ])
  }