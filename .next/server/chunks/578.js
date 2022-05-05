"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": () => (/* binding */ CANCEL_ORDER_SUCCESS),
/* harmony export */   "Ee": () => (/* binding */ CANCEL_ORDER_REQUEST),
/* harmony export */   "VA": () => (/* binding */ ORDER_SAVE_REQUEST),
/* harmony export */   "XO": () => (/* binding */ ORDER_SAVE_SUCCESS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gQ": () => (/* binding */ GET_ORDER_ALL_SUCCESS),
/* harmony export */   "mU": () => (/* binding */ ORDER_SAVE_FAILURE),
/* harmony export */   "nQ": () => (/* binding */ GET_ORDER_ALL_REQUEST),
/* harmony export */   "pw": () => (/* binding */ GET_ORDER_ALL_FAILURE),
/* harmony export */   "sr": () => (/* binding */ CANCEL_ORDER_FAILURE)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    orderList: [],
    orderSaveLoading: false,
    orderSaveDone: false,
    orderSaveError: null,
    getOrderAllLoading: false,
    getOrderAllDone: false,
    getOrderAllError: null,
    cancelOrderLoading: false,
    cancelOrderDone: false,
    cancelOrderError: null
};
const ORDER_SAVE_REQUEST = "ORDER_SAVE_REQUEST";
const ORDER_SAVE_SUCCESS = "ORDER_SAVE_SUCCESS";
const ORDER_SAVE_FAILURE = "ORDER_SAVE_FAILURE";
const GET_ORDER_ALL_REQUEST = "GET_ORDER_ALL_REQUEST";
const GET_ORDER_ALL_SUCCESS = "GET_ORDER_ALL_SUCCESS";
const GET_ORDER_ALL_FAILURE = "GET_ORDER_ALL_FAILURE";
const CANCEL_ORDER_REQUEST = "CANCEL_ORDER_REQUEST";
const CANCEL_ORDER_SUCCESS = "CANCEL_ORDER_SUCCESS";
const CANCEL_ORDER_FAILURE = "CANCEL_ORDER_FAILURE";
const reducer = (state = initialState, action)=>{
    return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case ORDER_SAVE_REQUEST:
                draft.orderSaveLoading = true;
                draft.orderSaveDone = false;
                draft.orderSaveError = null;
                break;
            case ORDER_SAVE_SUCCESS:
                draft.orderSaveLoading = false;
                draft.orderSaveDone = true;
                break;
            case ORDER_SAVE_FAILURE:
                draft.orderSaveLoading = false;
                draft.orderSaveError = action.error;
                break;
            case GET_ORDER_ALL_REQUEST:
                draft.getOrderAllLoading = true;
                draft.getOrderAllDone = false;
                draft.getOrderAllError = null;
                break;
            case GET_ORDER_ALL_SUCCESS:
                draft.getOrderAllLoading = false;
                draft.getOrderAllDone = true;
                draft.orderList = action.data;
                break;
            case GET_ORDER_ALL_FAILURE:
                draft.getOrderAllLoading = false;
                draft.getOrderAllError = action.error;
                break;
            case CANCEL_ORDER_REQUEST:
                draft.cancelOrderLoading = true;
                draft.cancelOrderDone = false;
                draft.cancelOrderError = null;
                break;
            case CANCEL_ORDER_SUCCESS:
                draft.cancelOrderLoading = false;
                draft.cancelOrderDone = true;
                draft.orderList = action.data;
                break;
            case CANCEL_ORDER_FAILURE:
                draft.cancelOrderLoading = false;
                draft.cancelOrderError = action.error;
                break;
            default:
                return state;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ })

};
;