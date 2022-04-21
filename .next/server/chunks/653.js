"use strict";
exports.id = 653;
exports.ids = [653];
exports.modules = {

/***/ 1653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_configureStore)
});

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(173);
// EXTERNAL MODULE: external "@redux-saga/core"
var core_ = __webpack_require__(6358);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);
// EXTERNAL MODULE: ./src/reducers/user.js
var user = __webpack_require__(4978);
// EXTERNAL MODULE: ./src/reducers/item.js
var item = __webpack_require__(5383);
;// CONCATENATED MODULE: ./src/reducers/index.js




const rootReducer = (state, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_.HYDRATE:
            return action.payload;
        default:
            {
                const combineReducer = (0,external_redux_.combineReducers)({
                    user: user/* default */.ZP,
                    item: item/* default */.ZP
                });
                return combineReducer(state, action);
            }
    }
};
/* harmony default export */ const reducers = (rootReducer);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./service/item/Item.service.js + 1 modules
var Item_service = __webpack_require__(1615);
// EXTERNAL MODULE: ./service/user/Auth.service.js
var Auth_service = __webpack_require__(6834);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/store/tokenCheck.js


function tokenCheck(state) {
    if (state === "invalid authority") {
        Auth_service/* default.logout */.Z.logout();
        router_default().push("login");
    }
};

;// CONCATENATED MODULE: ./src/sagas/item.js





function* addItem(action) {
    try {
        const result = yield Item_service/* default.insertItemAll */.Z.insertItemAll(action.data);
        yield (0,effects_.put)({
            type: item/* ADD_ITEM_SUCCESS */.fV,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_.put)({
            type: item/* ADD_ITEM_FAILURE */.RK,
            error: err.response.data
        });
    }
}
function* getItem(action) {
    console.log("getItem API \uD638\uCD9C : " + action);
    try {
        const result = yield Item_service/* default.selectItemAll */.Z.selectItemAll(action.data !== undefined ? action.data.lastId : 0, action.data !== undefined ? action.data.size : 30);
        yield (0,effects_.put)({
            type: item/* GET_ITEM_SUCCESS */.fK,
            data: result.data
        });
    } catch (err) {
        console.log("errrrrrrrrrr" + err);
        yield (0,effects_.put)({
            type: item/* GET_ITEM_FAILURE */.uV
        });
    }
}
function* watchAddItem() {
    yield (0,effects_.takeLatest)(item/* ADD_ITEM_REQUEST */.C_, addItem);
}
function* watchGetItem() {
    yield (0,effects_.takeLatest)(item/* GET_ITEM_REQUEST */.S0, getItem);
}
function* userSage() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchAddItem),
        (0,effects_.fork)(watchGetItem), 
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/user.js



// function logInAPI(data) {
//   return axios.post("/user/login", data)
// }
function* logIn(action) {
    try {
        // const result =  yield call(logInAPI, action.data);
        // console.log(result);
        yield (0,effects_.put)({
            type: user/* LOG_IN_SUCCESS */.RZ,
            data: action.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: user/* LOG_IN_FAILURE */.yK,
            error: err.response.data
        });
    }
}
function logOutAPI() {
// return axios.post("/user/logout")
}
function* logOut() {
    try {
        // yield call(logOutAPI);
        // yield delay(1000);
        yield (0,effects_.put)({
            type: user/* LOG_OUT_SUCCESS */.kV
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: user/* LOG_OUT_FAILURE */.mD,
            error: err.response.data
        });
    }
}
// function signUpAPI(data) {
//   return axios.post('/user', data);
// }
function* signUp(action) {
    try {
        // const result =  yield call(signUpAPI, action.data);
        yield (0,effects_.put)({
            type: user/* SIGNUP_SUCCESS */.Nh,
            data: action.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: user/* SIGNUP_FAILURE */.h,
            error: err.response.data
        });
    }
}
function* watchLogIn() {
    yield (0,effects_.takeLatest)(user/* LOG_IN_REQUEST */.uF, logIn);
}
function* watchLogOut() {
    yield (0,effects_.takeLatest)(user/* LOG_OUT_REQUEST */.Xd, logOut);
}
function* watchSignUp() {
    yield (0,effects_.takeLatest)(user/* SIGNUP_REQUEST */.yc, signUp);
}
function* user_userSage() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchLogIn),
        (0,effects_.fork)(watchLogOut),
        (0,effects_.fork)(watchSignUp), 
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/index.js




// axios.defaults.baseURL = 'http://localhost:8080/';
(external_axios_default()).defaults.baseURL = "http://54.180.170.84:8080/";
// axios.defaults.withCredentials = true;
function* rootSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(userSage),
        (0,effects_.fork)(user_userSage)
    ]);
};

;// CONCATENATED MODULE: ./src/store/configureStore.js






const loggerMiddleware = ({ dispatch , getState  })=>(next)=>(action)=>{
            console.log(action);
            return next(action);
        }
;
const configureStore = ()=>{
    const sagaMiddleware = core_default()();
    const middlewares = [
        sagaMiddleware,
        loggerMiddleware
    ];
    // const middlewares = [];
    const enhancer =  true ? (0,external_redux_.compose)((0,external_redux_.applyMiddleware)(...middlewares)) // 빌드용
     : 0; // 개발용
    const store = (0,external_redux_.createStore)(reducers, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga); // saga 기능
    return store;
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(configureStore, {
    debug: "production" === "development"
});
/* harmony default export */ const store_configureStore = (wrapper);


/***/ })

};
;