"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-bootstrap/SSRProvider"
const SSRProvider_namespaceObject = require("react-bootstrap/SSRProvider");
var SSRProvider_default = /*#__PURE__*/__webpack_require__.n(SSRProvider_namespaceObject);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "@redux-saga/core"
const core_namespaceObject = require("@redux-saga/core");
var core_default = /*#__PURE__*/__webpack_require__.n(core_namespaceObject);
// EXTERNAL MODULE: ./src/reducers/user.js
var user = __webpack_require__(4978);
// EXTERNAL MODULE: ./src/reducers/item.js
var item = __webpack_require__(5383);
// EXTERNAL MODULE: ./src/reducers/order.js
var order = __webpack_require__(3578);
;// CONCATENATED MODULE: ./src/reducers/index.js





const rootReducer = (state, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_namespaceObject.HYDRATE:
            return action.payload;
        default:
            {
                const combineReducer = (0,external_redux_namespaceObject.combineReducers)({
                    user: user/* default */.ZP,
                    item: item/* default */.ZP,
                    order: order/* default */.ZP
                });
                return combineReducer(state, action);
            }
    }
};
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
// EXTERNAL MODULE: ./service/item/Item.service.js
var Item_service = __webpack_require__(6451);
// EXTERNAL MODULE: ./service/user/Auth.service.js
var Auth_service = __webpack_require__(6834);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/store/tokenCheck.js


function tokenCheck(state) {
    if (state === "invalid authority") {
        Auth_service/* default.logout */.Z.logout();
        alert("\uC138\uC158\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        router_default().push("/user/login");
    }
};

// EXTERNAL MODULE: ./service/basket/Basket.service.js
var Basket_service = __webpack_require__(67);
// EXTERNAL MODULE: ./service/order/Order.service.js
var Order_service = __webpack_require__(9145);
;// CONCATENATED MODULE: ./src/sagas/item.js






function* addRevisedItem(action) {
    try {
        const result = yield Item_service/* default.revisedItem */.Z.revisedItem(action.data);
        alert("\uC800\uC7A5 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        yield (0,effects_namespaceObject.put)({
            type: item/* REVISED_ITEM_SUCCESS */.HN,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* REVISED_ITEM_FAILURE */.wn,
            error: err.response.data
        });
    }
}
function* addItem(action) {
    try {
        const result = yield Item_service/* default.insertItemAll */.Z.insertItemAll(action.data);
        alert("\uC800\uC7A5 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        yield (0,effects_namespaceObject.put)({
            type: item/* ADD_ITEM_SUCCESS */.fV,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* ADD_ITEM_FAILURE */.RK,
            error: err.response.data
        });
    }
}
function* getItemFirst(action) {
    try {
        const result = yield Item_service/* default.selectItemAll */.Z.selectItemAll(action.data !== undefined ? action.data.lastId : 0, action.data !== undefined ? action.data.size : 30);
        yield (0,effects_namespaceObject.put)({
            type: item/* GET_ITEM_FIRST_SUCCESS */.aw,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* GET_ITEM_FIRST_FAILURE */.k4,
            error: err.response.data
        });
    }
}
function* getItem(action) {
    try {
        const result = yield Item_service/* default.selectItemAll */.Z.selectItemAll(action.data !== undefined ? action.data.lastId : 0, action.data !== undefined ? action.data.size : 30);
        yield (0,effects_namespaceObject.put)({
            type: item/* GET_ITEM_SUCCESS */.fK,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* GET_ITEM_FAILURE */.uV,
            error: err.response.data
        });
    }
}
function* getItemOne(action) {
    try {
        const result = yield Item_service/* default.getItemOne */.Z.getItemOne(action.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* GET_ITEM_ONE_SUCCESS */.Wj,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* GET_ITEM_ONE_FAILURE */.nA,
            error: err.response.data
        });
    }
}
function* removeItem(action) {
    try {
        yield Item_service/* default.removeItem */.Z.removeItem(action.data);
        const history = action.history;
        yield (0,effects_namespaceObject.put)({
            type: item/* REMOVE_ITEM_SUCCESS */.I5
        });
        alert("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        history.push("/");
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* REMOVE_ITEM_FAILURE */.ir,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* basketAddUser(action) {
    try {
        const result = yield Basket_service/* default.basketAddUser */.Z.basketAddUser(action.userId, action.data);
        const history = action.history;
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_ADD_USER_SUCCESS */.YB,
            data: result.data
        });
        history.push("/basket");
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_ADD_USER_FAILURE */.oV,
            error: err.response.data.message
        });
        if (err.response.data.message) {
            alert(err.response.data.message);
        }
    }
}
function* basketGet(action) {
    try {
        const result = yield Basket_service/* default.getBasketByUserId */.Z.getBasketByUserId(action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_GET_SUCCESS */.rv,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_GET_FAILURE */.Dx,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* basketGetUser(action) {
    try {
        const result = yield Basket_service/* default.getBasketByUserId */.Z.getBasketByUserId(action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_GET_USER_SUCCESS */.XW,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_GET_USER_FAILURE */.f4,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* basketRemoveUser(action) {
    try {
        const result = yield Basket_service/* default.removeBasketById */.Z.removeBasketById(action.data, action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_REMOVE_USER_SUCCESS */.lP,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_REMOVE_USER_FAILURE */.Wl,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* basketDownUser(action) {
    try {
        const result = yield Basket_service/* default.basketDownUserById */.Z.basketDownUserById(action.data, action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_DOWN_USER_SUCCESS */.x,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_DOWN_USER_FAILURE */.UD,
            error: err.response.data.message
        });
        if (err.response.data.message) {
            alert(err.response.data.message);
        }
    }
}
function* basketPlusUser(action) {
    try {
        const result = yield Basket_service/* default.basketPlusUserById */.Z.basketPlusUserById(action.data, action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_PLUS_USER_SUCCESS */.Im,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_PLUS_USER_FAILURE */.xV,
            error: err.response.data.message
        });
        if (err.response.data.message) {
            alert(err.response.data.message);
        }
    }
}
function* basketEmpty(action) {
    try {
        yield Basket_service/* default.basketEmpty */.Z.basketEmpty(action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_EMPTY_SUCCESS */.oT
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_EMPTY_FAILURE */.XC,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* basketInsertNotUser(action) {
    try {
        const result = yield Basket_service/* default.basketInsertNotUser */.Z.basketInsertNotUser(action.userId, action.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_INSERT_NOTUSER_SUCCESS */.QA,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_INSERT_NOTUSER_FAILURE */.Ib,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* duplicateSizeQuantityCheck(action) {
    const currentItem = action.data;
    try {
        yield Basket_service/* default.duplicateSizeQuantityCheck */.Z.duplicateSizeQuantityCheck(action.data);
        // yield call (uploadImagesAPI, action.data);
        const history = action.history;
        yield (0,effects_namespaceObject.put)({
            type: item/* DUPLICATE_SIZE_QUANTITY_CHECK_SUCCESS */.IE
        });
        const localRecentProduct = JSON.parse(localStorage.getItem("localRecentProduct"));
        if (localRecentProduct !== null) {
            const localKeyAry = localRecentProduct.map((v)=>v.keyIndex
            );
            const sameItemDataAry = currentItem.filter((v)=>localKeyAry.includes(v.keyIndex)
            );
            const diffItemData = currentItem.filter((v)=>!localKeyAry.includes(v.keyIndex)
            );
            if (sameItemDataAry.length > 0) {
                if (confirm("\uC7A5\uBE44\uAD6C\uB2C8\uC5D0 \uB3D9\uC77C\uD55C \uC0C1\uD488\uC774 \uC788\uC2B5\uB2C8\uB2E4. \n\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uCD94\uAC00\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
                    localRecentProduct.forEach((v, i)=>{
                        const ItemSameLocalData = sameItemDataAry.find((s)=>s.keyIndex === v.keyIndex
                        );
                        if (ItemSameLocalData !== undefined) {
                            v.itemCount = v.itemCount + ItemSameLocalData.itemCount;
                            v.itemTotal = v.itemTotal + ItemSameLocalData.itemTotal;
                            v.discount = v.discount + ItemSameLocalData.discount;
                        }
                    });
                } else {
                    return;
                }
            }
            diffItemData.forEach((v, i)=>{
                localRecentProduct.unshift(v);
            });
            localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
        } else {
            localStorage.setItem("localRecentProduct", JSON.stringify(currentItem));
        }
        history.push("/basket");
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* DUPLICATE_SIZE_QUANTITY_CHECK_FAILURE */.QW
        });
        if (err.response.data.message) {
            alert(err.response.data.message);
        }
    }
}
function* soldOutBasket(action) {
    try {
        const result = yield Order_service/* default.soldOutItemRemove */.Z.soldOutItemRemove(action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* SOLD_OUT_BASKET_SUCCESS */.jX,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* SOLD_OUT_BASKET_FAILURE */.BH,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* basketLengthOrderSave(action) {
    try {
        const result = yield Basket_service/* default.getBasketToUserLength */.Z.getBasketToUserLength(action.userId);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_LENGTH_ORDER_SAVE_SUCCESS */.I2,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: item/* BASKET_LENGTH_ORDER_SAVE_FAILURE */.RP,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* watchAddItem() {
    yield (0,effects_namespaceObject.takeLatest)(item/* ADD_ITEM_REQUEST */.C_, addItem);
}
function* watchRevisedAddItem() {
    yield (0,effects_namespaceObject.takeLatest)(item/* REVISED_ITEM_REQUEST */.Yc, addRevisedItem);
}
function* watchGetFirstItem() {
    yield (0,effects_namespaceObject.takeLatest)(item/* GET_ITEM_FIRST_REQUEST */.A9, getItemFirst);
}
function* watchGetItem() {
    yield (0,effects_namespaceObject.takeLatest)(item/* GET_ITEM_REQUEST */.S0, getItem);
}
function* watchGetItemOne() {
    yield (0,effects_namespaceObject.takeLatest)(item/* GET_ITEM_ONE_REQUEST */.mK, getItemOne);
}
function* watchRemoveItem() {
    yield (0,effects_namespaceObject.takeLatest)(item/* REMOVE_ITEM_REQUEST */.PM, removeItem);
}
function* watchBasketAddUser() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_ADD_USER_REQUEST */.E4, basketAddUser);
}
function* watchBasketGet() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_GET_REQUEST */.Ls, basketGet);
}
function* watchBasketGetUser() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_GET_USER_REQUEST */._n, basketGetUser);
}
function* watchBasketRemoveUser() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_REMOVE_USER_REQUEST */.So, basketRemoveUser);
}
function* watchBasketDownUser() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_DOWN_USER_REQUEST */.xC, basketDownUser);
}
function* watchBasketPlusUser() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_PLUS_USER_REQUEST */.uj, basketPlusUser);
}
function* watchBasketEmpty() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_EMPTY_REQUEST */.R0, basketEmpty);
}
function* watchBasketInsertNotUser() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_INSERT_NOTUSER_REQUEST */.Ux, basketInsertNotUser);
}
function* watchDuplicateSizeQuantityCheck() {
    yield (0,effects_namespaceObject.takeLatest)(item/* DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST */.Qr, duplicateSizeQuantityCheck);
}
function* watchSoldOutBasket() {
    yield (0,effects_namespaceObject.takeLatest)(item/* SOLD_OUT_BASKET_REQUEST */.b0, soldOutBasket);
}
function* watchBasketLengthOrderSave() {
    yield (0,effects_namespaceObject.takeLatest)(item/* BASKET_LENGTH_ORDER_SAVE_REQUEST */.tQ, basketLengthOrderSave);
}
function* userSage() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchAddItem),
        (0,effects_namespaceObject.fork)(watchRevisedAddItem),
        (0,effects_namespaceObject.fork)(watchGetFirstItem),
        (0,effects_namespaceObject.fork)(watchGetItem),
        (0,effects_namespaceObject.fork)(watchGetItemOne),
        (0,effects_namespaceObject.fork)(watchRemoveItem),
        (0,effects_namespaceObject.fork)(watchBasketAddUser),
        (0,effects_namespaceObject.fork)(watchBasketGet),
        (0,effects_namespaceObject.fork)(watchBasketGetUser),
        (0,effects_namespaceObject.fork)(watchBasketRemoveUser),
        (0,effects_namespaceObject.fork)(watchBasketDownUser),
        (0,effects_namespaceObject.fork)(watchBasketPlusUser),
        (0,effects_namespaceObject.fork)(watchBasketEmpty),
        (0,effects_namespaceObject.fork)(watchBasketInsertNotUser),
        (0,effects_namespaceObject.fork)(watchDuplicateSizeQuantityCheck),
        (0,effects_namespaceObject.fork)(watchSoldOutBasket),
        (0,effects_namespaceObject.fork)(watchBasketLengthOrderSave), 
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/user.js



function* logIn(action) {
    try {
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_IN_SUCCESS */.RZ,
            data: action.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_IN_FAILURE */.yK,
            error: err.response.data
        });
    }
}
function* logOut(action) {
    try {
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_OUT_SUCCESS */.kV
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_OUT_FAILURE */.mD,
            error: err.response.data
        });
    }
}
function* signUp(action) {
    try {
        yield (0,effects_namespaceObject.put)({
            type: user/* SIGNUP_SUCCESS */.Nh,
            data: action.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* SIGNUP_FAILURE */.h,
            error: err.response.data
        });
    }
}
function* watchLogIn() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOG_IN_REQUEST */.uF, logIn);
}
function* watchLogOut() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOG_OUT_REQUEST */.Xd, logOut);
}
function* watchSignUp() {
    yield (0,effects_namespaceObject.takeLatest)(user/* SIGNUP_REQUEST */.yc, signUp);
}
function* user_userSage() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchLogIn),
        (0,effects_namespaceObject.fork)(watchLogOut),
        (0,effects_namespaceObject.fork)(watchSignUp), 
    ]);
};

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/sagas/order.js






function* orderSave(action) {
    try {
        const result = yield Order_service/* default.saveOrderDeliveryItem */.Z.saveOrderDeliveryItem(action.userId, action.data);
        const history = action.history;
        yield (0,effects_namespaceObject.put)({
            type: order/* ORDER_SAVE_SUCCESS */.XO,
            data: result.data
        });
        alert("\uC8FC\uBB38\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        history.push("/mypage/list");
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: order/* ORDER_SAVE_FAILURE */.mU,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* getOrderAll(action) {
    try {
        const result = yield Order_service/* default.getOrderUserById */.Z.getOrderUserById(action.userId, action.startDate, action.endDate, action.status);
        yield (0,effects_namespaceObject.put)({
            type: order/* GET_ORDER_ALL_SUCCESS */.gQ,
            data: result.data
        });
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: order/* GET_ORDER_ALL_FAILURE */.pw,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* cancelOrder(action) {
    try {
        const result = yield Order_service/* default.cancelOrder */.Z.cancelOrder(action.orderId, action.startDate, action.endDate);
        yield (0,effects_namespaceObject.put)({
            type: order/* CANCEL_ORDER_SUCCESS */.C1,
            data: result.data
        });
        alert("\uC8FC\uBB38\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC8FC\uBB38\uCDE8\uC18C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    } catch (err) {
        tokenCheck(err.response.data);
        yield (0,effects_namespaceObject.put)({
            type: order/* CANCEL_ORDER_FAILURE */.sr,
            error: err.response.data
        });
        alert("\uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    }
}
function* watchOrderSave() {
    yield (0,effects_namespaceObject.takeLatest)(order/* ORDER_SAVE_REQUEST */.VA, orderSave);
}
function* watchGetOrderAll() {
    yield (0,effects_namespaceObject.takeLatest)(order/* GET_ORDER_ALL_REQUEST */.nQ, getOrderAll);
}
function* watchCancelOrder() {
    yield (0,effects_namespaceObject.takeLatest)(order/* CANCEL_ORDER_REQUEST */.Ee, cancelOrder);
}
function* order_userSage() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchOrderSave),
        (0,effects_namespaceObject.fork)(watchGetOrderAll),
        (0,effects_namespaceObject.fork)(watchCancelOrder), 
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/index.js





// axios.defaults.baseURL = 'http://localhost:8080/';
// axios.defaults.baseURL = 'http://54.180.170.84:8080/';
// axios.defaults.withCredentials = true;
function* rootSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(userSage),
        (0,effects_namespaceObject.fork)(user_userSage),
        (0,effects_namespaceObject.fork)(order_userSage), 
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
    const enhancer =  true ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware)) : 0;
    const store = (0,external_redux_namespaceObject.createStore)(reducers, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    //   store.sagaTask  = sagaMiddleware.run(rootSaga, store.dispatch).toPromise().catch(e => {
    //     logger.error({ message: e.message, source: 'sagaError', stacktrace: e.sagaStack });
    //     store.dispatch({ type: 'ERROR', payload: e })
    // });
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(configureStore, {
    debug: "production" === "development"
});
/* harmony default export */ const store_configureStore = (wrapper);

;// CONCATENATED MODULE: ./src/pages/_app.js







function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "LOOK"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((SSRProvider_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (store_configureStore.withRedux(App));


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7133:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [802,840,383,578,67,145], () => (__webpack_exec__(1781)));
module.exports = __webpack_exports__;

})();