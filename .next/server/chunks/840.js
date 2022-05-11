"use strict";
exports.id = 840;
exports.ids = [840];
exports.modules = {

/***/ 6451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _user_auth_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6345);



const API_URL = _src_config_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v + "api/item/";
class ItemService {
    insertItemAll(itemData) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "admin/insertItemAll", itemData, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(),
                "Content-Type": "multipart/form-data"
            }
        });
    }
    selectItemAll(lastId, size, category) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + "getItem?lastId=" + lastId + "&size=" + size + "&category=" + category, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    getItemOne(id) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + "getItemOne/" + id, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    basketAddUser(id, data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "basketAddUser/" + id, data, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    getCurrentItem() {
        return JSON.parse(localStorage.getItem("localRecentProduct"));
    }
    getItemLength() {
        return JSON.parse(localStorage.getItem("itemLength"));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ItemService());


/***/ }),

/***/ 4978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nh": () => (/* binding */ SIGNUP_SUCCESS),
/* harmony export */   "RZ": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "Xd": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h": () => (/* binding */ SIGNUP_FAILURE),
/* harmony export */   "kV": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "mD": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "uF": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "yK": () => (/* binding */ LOG_IN_FAILURE),
/* harmony export */   "yc": () => (/* binding */ SIGNUP_REQUEST)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    singupLoading: false,
    singupDone: false,
    singupError: null,
    isLoggingOut: false,
    userId: null,
    username: null,
    email: null
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "SIGNUP_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const reducer = (state = initialState, action)=>{
    return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case SIGNUP_REQUEST:
                draft.singupLoading = true;
                draft.singupDone = false;
                draft.singupError = null;
                break;
            case SIGNUP_SUCCESS:
                draft.username = action.data.username;
                draft.email = action.data.email;
                draft.singupLoading = false;
                draft.singupDone = true;
                break;
            case SIGNUP_FAILURE:
                draft.singupDone = false;
                draft.singupError = action.error;
                break;
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.userId = action.data;
                break;
            case LOG_IN_FAILURE:
                draft.logInDone = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.userId = null;
                draft.logInDone = false;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
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