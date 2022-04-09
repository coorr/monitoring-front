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
        console.log(response.data.token);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS9hdXRoLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsImNvbmZpZyIsIkF1dGhTZXJ2aWNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJlbWFpbCIsInBhcnNlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sR0FBQyxTQUF2Qjs7SUFFTUMsVzs7Ozs7OztXQUNKLGVBQU1DLFFBQU4sRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3hCLGFBQU9DLDRDQUFLLENBQ1RDLElBREksQ0FDQ04sT0FBTyxHQUFHLFFBRFgsRUFDcUI7QUFDeEJHLGdCQUFRLEVBQVJBLFFBRHdCO0FBRXhCQyxnQkFBUSxFQUFSQTtBQUZ3QixPQURyQixFQUtKRyxJQUxJLENBS0MsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQTFCOztBQUNBLFlBQUlKLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxLQUFsQixFQUF5QjtBQUN2QkMsc0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLFFBQVEsQ0FBQ0csSUFBeEIsQ0FBN0I7QUFDRDs7QUFFRCxlQUFPSCxRQUFRLENBQUNHLElBQWhCO0FBQ0QsT0FkSSxDQUFQO0FBZUQ7OztXQUVELGtCQUFTO0FBQ1BFLGtCQUFZLENBQUNJLFVBQWIsQ0FBd0IsTUFBeEI7QUFDRDs7O1dBRUQsa0JBQVNkLFFBQVQsRUFBbUJlLEtBQW5CLEVBQTBCZCxRQUExQixFQUFvQztBQUNsQyxhQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdOLE9BQU8sR0FBRyxRQUFyQixFQUErQjtBQUNwQ0csZ0JBQVEsRUFBUkEsUUFEb0M7QUFFcENlLGFBQUssRUFBTEEsS0FGb0M7QUFHcENkLGdCQUFRLEVBQVJBO0FBSG9DLE9BQS9CLENBQVA7QUFLRDs7O1dBRUQsMEJBQWlCO0FBQ2YsYUFBT1csSUFBSSxDQUFDSSxLQUFMLENBQVdOLFlBQVksQ0FBQ08sT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDRDs7Ozs7O0FBR1ksbUVBQUlsQixXQUFKLEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGRjNjFjZTgzMDI2ZDM5ODE0Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL3NyYy9jb25maWcvY29uZmlnXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gY29uZmlnK1wiYWl3YWNzL1wiO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgIC5wb3N0KEFQSV9VUkwgKyBcInNpZ25pblwiLCB7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgfSwpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcih1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgXCJzaWdudXBcIiwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==