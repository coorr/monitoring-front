"use strict";
exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 1615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Item_service)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__(417);
;// CONCATENATED MODULE: ./service/user/auth-header.js
function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return "Bearer " + user.token; // for Spring Boot back-end
    } else {
        return {};
    }
};

;// CONCATENATED MODULE: ./service/item/Item.service.js



const API_URL = config/* config */.v + "api/item/";
class ItemService {
    insertItemAll(itemData) {
        return external_axios_default().post(API_URL + "insertItemAll", itemData, {
            headers: {
                Authorization: authHeader(),
                "Content-Type": "multipart/form-data"
            }
        });
    }
    selectItemAll(lastId, size) {
        return external_axios_default().get(API_URL + "getItem?lastId=" + lastId + "&size=" + size, {
            headers: {
                Authorization: authHeader()
            }
        });
    }
}
/* harmony default export */ const Item_service = (new ItemService());


/***/ }),

/***/ 5383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C_": () => (/* binding */ ADD_ITEM_REQUEST),
/* harmony export */   "RK": () => (/* binding */ ADD_ITEM_FAILURE),
/* harmony export */   "S0": () => (/* binding */ GET_ITEM_REQUEST),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fK": () => (/* binding */ GET_ITEM_SUCCESS),
/* harmony export */   "fV": () => (/* binding */ ADD_ITEM_SUCCESS),
/* harmony export */   "lG": () => (/* binding */ UPLOAD_IMAGE_REQUEST),
/* harmony export */   "uV": () => (/* binding */ GET_ITEM_FAILURE)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    item: [],
    imagePath: [],
    itemAdded: false,
    hasMoreItem: true,
    getItemLoading: false,
    getItemDone: false,
    getItemError: null,
    addItemLoading: false,
    addItemDone: false,
    addItemError: null,
    uploadImageLoading: false,
    uploadImageDone: false,
    uploadImageError: null
};
const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";
const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";
const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";
const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
const reducer = (state = initialState, action)=>{
    return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        switch(action.type){
            case ADD_ITEM_REQUEST:
                draft.addItemLoading = true;
                draft.addItemDone = false;
                draft.addItemError = null;
                break;
            case ADD_ITEM_SUCCESS:
                draft.item.unshift(action.data);
                draft.addItemLoading = false;
                draft.addItemDone = true;
                break;
            case ADD_ITEM_FAILURE:
                draft.addItemLoading = false;
                draft.addItemError = action.error;
                break;
            case GET_ITEM_REQUEST:
                draft.getItemLoading = true;
                draft.getItemDone = false;
                draft.getItemError = null;
                break;
            case GET_ITEM_SUCCESS:
                draft.getItemLoading = false;
                draft.getItemDone = true;
                // draft.item = action.data.concat(draft.item);
                draft.item = draft.item.concat(action.data);
                draft.hasMoreItem = action.data.length === 10 || action.data.length === 30;
                break;
            case GET_ITEM_FAILURE:
                draft.getItemLoading = false;
                draft.getItemError = action.error;
                break;
            case UPLOAD_IMAGE_REQUEST:
                draft.imagePath = action.data;
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