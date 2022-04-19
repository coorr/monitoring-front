import axios from 'axios';
import { all, fork, takeLatest, delay, put,call } from 'redux-saga/effects';
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
} from '../reducers/user';



// function logInAPI(data) {
//   return axios.post("/user/login", data)
// }

function* logIn(action) {
  try {
    // const result =  yield call(logInAPI, action.data);
    // console.log(result);
    yield put({       
      type: LOG_IN_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error : err.response.data
    })
  }  
}


function logOutAPI() {
  // return axios.post("/user/logout")
}
function* logOut() {
  try {
    // yield call(logOutAPI);
    // yield delay(1000);
    yield put({       // action을 dispatch 하는 느낌의 put
      type: LOG_OUT_SUCCESS, 
    }) 
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error : err.response.data
    })
  }  
}


// function signUpAPI(data) {
//   return axios.post('/user', data);
// }
function* signUp(action) {
  try {
    // const result =  yield call(signUpAPI, action.data);
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