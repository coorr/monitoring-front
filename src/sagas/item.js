import axios from 'axios';
import { all, fork, takeLatest, delay, put,call,cancelled  } from 'redux-saga/effects';
import { 
  ADD_ITEM_FAILURE, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, 
  BASKET_ADD_USER_FAILURE, 
  BASKET_ADD_USER_REQUEST, 
  BASKET_ADD_USER_SUCCESS, 
  BASKET_DOWN_USER_FAILURE, 
  BASKET_DOWN_USER_REQUEST, 
  BASKET_DOWN_USER_SUCCESS, 
  BASKET_EMPTY_FAILURE, 
  BASKET_EMPTY_REQUEST, 
  BASKET_EMPTY_SUCCESS, 
  BASKET_GET_FAILURE, 
  BASKET_GET_REQUEST, 
  BASKET_GET_SUCCESS, 
  BASKET_GET_USER_FAILURE, 
  BASKET_GET_USER_REQUEST, 
  BASKET_GET_USER_SUCCESS, 
  BASKET_INSERT_NOTUSER_FAILURE, 
  BASKET_INSERT_NOTUSER_REQUEST, 
  BASKET_INSERT_NOTUSER_SUCCESS, 
  BASKET_PLUS_USER_FAILURE, 
  BASKET_PLUS_USER_REQUEST, 
  BASKET_PLUS_USER_SUCCESS, 
  BASKET_REMOVE_USER_FAILURE, 
  BASKET_REMOVE_USER_REQUEST, 
  BASKET_REMOVE_USER_SUCCESS, 
  DUPLICATE_SIZE_QUANTITY_CHECK_FAILURE, 
  DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST, 
  DUPLICATE_SIZE_QUANTITY_CHECK_SUCCESS, 
  GET_ITEM_FAILURE, GET_ITEM_FIRST_FAILURE, GET_ITEM_FIRST_REQUEST, 
  GET_ITEM_FIRST_SUCCESS, GET_ITEM_ONE_FAILURE, GET_ITEM_ONE_REQUEST, 
  GET_ITEM_ONE_SUCCESS, GET_ITEM_REQUEST, GET_ITEM_SUCCESS, REMOVE_ITEM_FAILURE, REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REVISED_ITEM_FAILURE, 
  REVISED_ITEM_REQUEST, REVISED_ITEM_SUCCESS, UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_REQUEST, 
  UPLOAD_IMAGE_SUCCESS
} from '../reducers/item';
import ItemService from '../../service/item/Item.service'
import TokenCheck from '../store/tokenCheck';
import BasketService from '../../service/basket/Basket.service';

const safe = (handler = null, saga, ...args) => function* (action) {
  try {
    yield call(saga, ...args, action)
  } catch (err) {
    yield call(handler, ...args, err)
  }
}

function* addRevisedItem(action) {
  try {
    const result =  yield ItemService.revisedItem(action.data);
    alert("저장 되었습니다.")
    yield put({       
      type: REVISED_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: REVISED_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* addItem(action) {
  try {
    const result =  yield ItemService.insertItemAll(action.data);
    alert("저장 되었습니다.")
    yield put({       
      type: ADD_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: ADD_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* getItemFirst(action) {
  try {
    const result =  yield ItemService.selectItemAll(action.data !== undefined ? action.data.lastId : 0 , 
                                                  action.data !== undefined ? action.data.size : 30);
    yield put({       
      type: GET_ITEM_FIRST_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ITEM_FIRST_FAILURE,
      error : err.response.data
    })
  }  
}


function* getItem(action) {
  try {
    const result =  yield ItemService.selectItemAll(action.data !== undefined ? action.data.lastId : 0 , 
                                                  action.data !== undefined ? action.data.size : 30);
    yield put({       
      type: GET_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* getItemOne(action) {
  try {
    const result =  yield ItemService.getItemOne(action.data);
    yield put({       
      type: GET_ITEM_ONE_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ITEM_ONE_FAILURE,
      error : err.response.data
    })
  }  
}

function* removeItem(action) {
  try {
    yield ItemService.removeItem(action.data);
    const history = action.history;
    yield put({       
      type: REMOVE_ITEM_SUCCESS, 
    }) 
    alert("삭제되었습니다.")
    history.push('/');
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: REMOVE_ITEM_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function* basketAddUser(action) {
  try {
    const result = yield BasketService.basketAddUser(action.userId, action.data);
    const history = action.history;
    yield put({       
      type: BASKET_ADD_USER_SUCCESS, 
      data: result.data
    }) 
    history.push("/basket")
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_ADD_USER_FAILURE,
      error : err.response.data.message,
    })
    if(err.response.data.message) {
      alert(err.response.data.message)
    }

    
  }  
}

function* basketGet(action) {
  try {
    const result = yield BasketService.getBasketByUserId(action.userId);
    yield put({       
      type: BASKET_GET_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_GET_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function* basketGetUser(action) {
  try {
    const result = yield BasketService.getBasketByUserId(action.userId);
    yield put({       
      type: BASKET_GET_USER_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_GET_USER_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function* basketRemoveUser(action) {
  try {
    const result = yield BasketService.removeBasketById(action.data, action.userId);
    yield put({       
      type: BASKET_REMOVE_USER_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_REMOVE_USER_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function* basketDownUser(action) {
  try {
    const result = yield BasketService.basketDownUserById(action.data, action.userId);
    yield put({       
      type: BASKET_DOWN_USER_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_DOWN_USER_FAILURE,
      error : err.response.data.message
    })
    if(err.response.data.message) {
      alert(err.response.data.message)
    }
  }  
}

function* basketPlusUser(action) {
  try {
    const result = yield BasketService.basketPlusUserById(action.data, action.userId);
    yield put({       
      type: BASKET_PLUS_USER_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_PLUS_USER_FAILURE,
      error : err.response.data.message
    })
    if(err.response.data.message) {
      alert(err.response.data.message)
    }
  }  
}

function* basketEmpty(action) {
  try {
    yield BasketService.basketEmpty(action.userId);
    yield put({       
      type: BASKET_EMPTY_SUCCESS, 
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_EMPTY_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function* basketInsertNotUser(action) {
  try {
    const result = yield BasketService.basketInsertNotUser(action.userId, action.data);
    yield put({       
      type: BASKET_INSERT_NOTUSER_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: BASKET_INSERT_NOTUSER_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}

function uploadImagesAPI(data) {
  return axios.post('api/basket/duplicateSizeQuantityCheck', data);
}

function* duplicateSizeQuantityCheck(action) {
  const currentItem = action.data;
  try {
    yield BasketService.duplicateSizeQuantityCheck(action.data);
    // yield call (uploadImagesAPI, action.data);
    const history = action.history
    yield put({       
      type: DUPLICATE_SIZE_QUANTITY_CHECK_SUCCESS, 
    }) 
    const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
            if(localRecentProduct !== null) {
                const localKeyAry = localRecentProduct.map(v => v.keyIndex);
                const sameItemDataAry = currentItem.filter(v => localKeyAry.includes(v.keyIndex))
                const diffItemData = currentItem.filter(v => !localKeyAry.includes(v.keyIndex))
    
                if(sameItemDataAry.length > 0 ) {
                    if(confirm("장비구니에 동일한 상품이 있습니다. \n장바구니에 추가하시겠습니까?")) {
                        localRecentProduct.forEach((v,i) => {
                            const ItemSameLocalData = sameItemDataAry.find(s => s.keyIndex === v.keyIndex)
                            if(ItemSameLocalData !== undefined) {
                                v.itemCount = v.itemCount + ItemSameLocalData.itemCount;
                                v.itemTotal = v.itemTotal + ItemSameLocalData.itemTotal;
                                v.discount = v.discount + ItemSameLocalData.discount;
                            }                 
                        })
                    } else {
                        return;
                    }
                }
    
                diffItemData.forEach((v,i) => {
                    localRecentProduct.unshift(v)
                })
                localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
            } else {
                localStorage.setItem("localRecentProduct", JSON.stringify(currentItem));
            }   
    history.push("/basket")
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: DUPLICATE_SIZE_QUANTITY_CHECK_FAILURE,
    })
    if(err.response.data.message) {
      alert(err.response.data.message)
    }
  }  
}

const onError = (err) => {
  console.log(err)
}


function* watchAddItem() {
  yield takeLatest(ADD_ITEM_REQUEST, addItem);
}
function* watchRevisedAddItem() {
  yield takeLatest(REVISED_ITEM_REQUEST, addRevisedItem);
}
function* watchGetFirstItem() {
  yield takeLatest(GET_ITEM_FIRST_REQUEST, getItemFirst);
}
function* watchGetItem() {
  yield takeLatest(GET_ITEM_REQUEST, getItem);
}
function* watchGetItemOne() {
  yield takeLatest(GET_ITEM_ONE_REQUEST, getItemOne);
}
function* watchRemoveItem() {
  yield takeLatest(REMOVE_ITEM_REQUEST, removeItem);
}
function* watchBasketAddUser() {
  yield takeLatest(BASKET_ADD_USER_REQUEST, safe(onError,basketAddUser));
}
function* watchBasketGet() {
  yield takeLatest(BASKET_GET_REQUEST, basketGet);
}
function* watchBasketGetUser() {
  yield takeLatest(BASKET_GET_USER_REQUEST, basketGetUser);
}
function* watchBasketRemoveUser() {
  yield takeLatest(BASKET_REMOVE_USER_REQUEST, basketRemoveUser);
}
function* watchBasketDownUser() {
  yield takeLatest(BASKET_DOWN_USER_REQUEST, basketDownUser);
}
function* watchBasketPlusUser() {
  yield takeLatest(BASKET_PLUS_USER_REQUEST, basketPlusUser);
}
function* watchBasketEmpty() {
  yield takeLatest(BASKET_EMPTY_REQUEST, basketEmpty);
}
function* watchBasketInsertNotUser() {
  yield takeLatest(BASKET_INSERT_NOTUSER_REQUEST, basketInsertNotUser);
}
function* watchDuplicateSizeQuantityCheck() {
  yield takeLatest(DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST, duplicateSizeQuantityCheck);
}


export default function* userSage() {
    yield all([
      fork(watchAddItem),
      fork(watchRevisedAddItem),
      fork(watchGetFirstItem),
      fork(watchGetItem),
      fork(watchGetItemOne),
      fork(watchRemoveItem),
      fork(watchBasketAddUser),
      fork(watchBasketGet),
      fork(watchBasketGetUser),
      fork(watchBasketRemoveUser),
      fork(watchBasketDownUser),
      fork(watchBasketPlusUser),
      fork(watchBasketEmpty),
      fork(watchBasketInsertNotUser),
      fork(watchDuplicateSizeQuantityCheck),
    ])
  }