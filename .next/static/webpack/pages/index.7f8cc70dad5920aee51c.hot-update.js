webpackHotUpdate_N_E("pages/index",{

/***/ "./service/auth.service.js":
/*!*********************************!*\
  !*** ./service/auth.service.js ***!
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




var API_URL = _src_config_config__WEBPACK_IMPORTED_MODULE_3__["config"] + "aiwacs/";

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
        console.log(response);
        console.log(response.data);

        if (response.data.accessToken) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS9hdXRoLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsImNvbmZpZyIsIkF1dGhTZXJ2aWNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJlbWFpbCIsInBhcnNlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sR0FBQyxTQUF2Qjs7SUFFTUMsVzs7Ozs7OztXQUNKLGVBQU1DLFFBQU4sRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3hCLGFBQU9DLDRDQUFLLENBQ1RDLElBREksQ0FDQ04sT0FBTyxHQUFHLFFBRFgsRUFDcUI7QUFDeEJHLGdCQUFRLEVBQVJBLFFBRHdCO0FBRXhCQyxnQkFBUSxFQUFSQTtBQUZ3QixPQURyQixFQUtKRyxJQUxJLENBS0MsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjs7QUFDQSxZQUFJSCxRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBbEIsRUFBK0I7QUFDN0JDLHNCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixRQUFRLENBQUNHLElBQXhCLENBQTdCO0FBQ0Q7O0FBRUQsZUFBT0gsUUFBUSxDQUFDRyxJQUFoQjtBQUNELE9BYkksQ0FBUDtBQWNEOzs7V0FFRCxrQkFBUztBQUNQRSxrQkFBWSxDQUFDSSxVQUFiLENBQXdCLE1BQXhCO0FBQ0Q7OztXQUVELGtCQUFTZCxRQUFULEVBQW1CZSxLQUFuQixFQUEwQmQsUUFBMUIsRUFBb0M7QUFDbEMsYUFBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXTixPQUFPLEdBQUcsUUFBckIsRUFBK0I7QUFDcENHLGdCQUFRLEVBQVJBLFFBRG9DO0FBRXBDZSxhQUFLLEVBQUxBLEtBRm9DO0FBR3BDZCxnQkFBUSxFQUFSQTtBQUhvQyxPQUEvQixDQUFQO0FBS0Q7OztXQUVELDBCQUFpQjtBQUNmLGFBQU9XLElBQUksQ0FBQ0ksS0FBTCxDQUFXTixZQUFZLENBQUNPLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0Q7Ozs7OztBQUdZLG1FQUFJbEIsV0FBSixFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmOGNjNzBkYWQ1OTIwYWVlNTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9zcmMvY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9IGNvbmZpZytcImFpd2Fjcy9cIjtcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAucG9zdChBUElfVVJMICsgXCJzaWduaW5cIiwge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0sKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoQVBJX1VSTCArIFwic2lnbnVwXCIsIHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=