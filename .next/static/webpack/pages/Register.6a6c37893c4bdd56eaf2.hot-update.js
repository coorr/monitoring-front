webpackHotUpdate_N_E("pages/Register",{

/***/ "./service/Auth.service.js":
/*!*********************************!*\
  !*** ./service/Auth.service.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/config/config */ "./src/config/config.js");




var API_URL = _src_config_config__WEBPACK_IMPORTED_MODULE_3__["config"] + "api/user/";

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthService, [{
    key: "login",
    value: function login(username, password) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(API_URL + "signin", {
        username: username,
        password: password
      }).then(function (response) {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      localStorage.removeItem("user");
    }
  }, {
    key: "register",
    value: function register(username, email, password) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(API_URL + "signup", {
        username: username,
        email: email,
        password: password
      });
    }
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS9BdXRoLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsImNvbmZpZyIsIkF1dGhTZXJ2aWNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImVtYWlsIiwicGFyc2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxHQUFDLFdBQXZCOztJQUVNQyxXOzs7Ozs7O1dBQ0osZUFBTUMsUUFBTixFQUFnQkMsUUFBaEIsRUFBMEI7QUFDeEIsYUFBT0MsNENBQUssQ0FDVEMsSUFESSxDQUNDTixPQUFPLEdBQUcsUUFEWCxFQUNxQjtBQUN4QkcsZ0JBQVEsRUFBUkEsUUFEd0I7QUFFeEJDLGdCQUFRLEVBQVJBO0FBRndCLE9BRHJCLEVBS0pHLElBTEksQ0FLQyxVQUFBQyxRQUFRLEVBQUk7QUFDaEIsWUFBSUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWxCLEVBQXlCO0FBQ3ZCQyxzQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sUUFBUSxDQUFDQyxJQUF4QixDQUE3QjtBQUNEOztBQUVELGVBQU9ELFFBQVEsQ0FBQ0MsSUFBaEI7QUFDRCxPQVhJLENBQVA7QUFZRDs7O1dBRUQsa0JBQVM7QUFDUEUsa0JBQVksQ0FBQ0ksVUFBYixDQUF3QixNQUF4QjtBQUNEOzs7V0FFRCxrQkFBU1osUUFBVCxFQUFtQmEsS0FBbkIsRUFBMEJaLFFBQTFCLEVBQW9DO0FBQ2xDLGFBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBV04sT0FBTyxHQUFHLFFBQXJCLEVBQStCO0FBQ3BDRyxnQkFBUSxFQUFSQSxRQURvQztBQUVwQ2EsYUFBSyxFQUFMQSxLQUZvQztBQUdwQ1osZ0JBQVEsRUFBUkE7QUFIb0MsT0FBL0IsQ0FBUDtBQUtEOzs7V0FFRCwwQkFBaUI7QUFDZixhQUFPUyxJQUFJLENBQUNJLEtBQUwsQ0FBV04sWUFBWSxDQUFDTyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNEOzs7Ozs7QUFHWSxtRUFBSWhCLFdBQUosRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZWdpc3Rlci42YTZjMzc4OTNjNGJkZDU2ZWFmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vc3JjL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBjb25maWcrXCJhcGkvdXNlci9cIjtcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAucG9zdChBUElfVVJMICsgXCJzaWduaW5cIiwge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0sKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcih1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgXCJzaWdudXBcIiwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==