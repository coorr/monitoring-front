"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 9145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _user_auth_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6345);



const API_URL = _src_config_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v + "api/order/";
class OrderService {
    saveOrderDeliveryItem(userId, data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "saveOrderDeliveryItem/" + userId, data, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    quantityCheckOrder(userId, data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "quantityCheckOrder/" + userId, data, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    soldOutItemRemove(userId) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "soldOutItemRemove/" + userId, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    getOrderUserById(userId, startDate, endDate, status) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + "getOrderUserById/" + userId + "?startDate=" + startDate + "&endDate=" + endDate + "&status=" + status, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
    cancelOrder(orderId, startDate, endDate) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "cancelOrderItem/" + orderId + "?startDate=" + startDate + "&endDate=" + endDate, {
            headers: {
                Authorization: (0,_user_auth_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new OrderService());


/***/ })

};
;