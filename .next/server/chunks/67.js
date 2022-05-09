"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _user_auth_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6345);



const API_URL = _src_config_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v + "api/basket/";
class BasketService {
    basketAddUser(id, data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "basketAddUser/" + id, data, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    getBasketByUserId(id) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + "getBasketByUserId/" + id, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    removeBasketById(id, userId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "removeBasketById/" + id + "/" + userId, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    basketDownUserById(id, userId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "basketDownUserById/" + id + "/" + userId, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    basketPlusUserById(id, userId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "basketPlusUserById/" + id + "/" + userId, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    basketEmpty(userId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "basketEmpty/" + userId, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    basketInsertNotUser(userId, data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "insertNotUserBasket/" + userId, data, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    duplicateSizeQuantityCheck(data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "duplicateSizeQuantityCheck/", data, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    getBasketToUserLength(userId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + "getBasketToUserLength/" + userId, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BasketService());


/***/ })

};
;