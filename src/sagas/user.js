import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
} from '../reducers/user';


function* logIn(action) {
  try {
    yield put({       
      type: LOG_IN_SUCCESS, 
      data: action.data,
    }) 
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error : err.response.data
    })
  }  
}

function* logOut(action) {
  try {
    yield put({       
      type: LOG_OUT_SUCCESS, 
    }) 
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error : err.response.data
    })
  }  
}

function* signUp(action) {
  try {
    yield put({       
      type: SIGNUP_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: SIGNUP_FAILURE,
      error : err.response.data
    })
  }  
}



function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default function* userSage() {
    yield all([
      fork(watchLogIn),
      fork(watchLogOut),
      fork(watchSignUp),
    ])
  }