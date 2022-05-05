"use strict";
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 6834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);


const API_URL = _src_config_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v + "api/user/";
class AuthService {
    login(username, password) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "signin", {
            username,
            password
        }).then((response)=>{
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "signup", {
            username,
            email,
            password
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AuthService());


/***/ }),

/***/ 6345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ authHeader)
/* harmony export */ });
function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return "Bearer " + user.token; // for Spring Boot back-end
    } else {
        return {};
    }
};


/***/ }),

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const config = "http://localhost:8080/"; // export const config = "http://54.180.170.84:8080/"; // 배포 url


/***/ })

};
;