import axios from 'axios';
import { all, fork, takeLatest, delay, put,call } from 'redux-saga/effects';
import { 
  ADD_ITEM_FAILURE,
  ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, generateDummyPost, GET_ITEM_FAILURE, GET_ITEM_REQUEST, GET_ITEM_SUCCESS
} from '../reducers/item';
import ItemService from '../../service/item/Item.service'


function* addItem(action) {
  try {
    const result =  yield call(ItemService.insertItemAll(action.data))
    yield put({       
      type: ADD_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    yield put({
      type: ADD_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* getItem(action) {
  try {
    // const result =  yield call(ItemService.insertItemAll(action.data))
    yield put({       
      type: GET_ITEM_SUCCESS, 
      data: generateDummyPost(10),
    }) 
  } catch (err) {
    yield put({
      type: GET_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* watchAddItem() {
  yield takeLatest(ADD_ITEM_REQUEST, addItem);
}
function* watchGetItem() {
  yield takeLatest(GET_ITEM_REQUEST, getItem);
}

export default function* userSage() {
    yield all([
      fork(watchAddItem),
      fork(watchGetItem)
    ])
  }