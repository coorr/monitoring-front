webpackHotUpdate_N_E("pages/Register",{

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-validation/build/form */ "./node_modules/react-validation/build/form.js");
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-validation/build/input */ "./node_modules/react-validation/build/input.js");
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-validation/build/button */ "./node_modules/react-validation/build/button.js");
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./src/pages/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/auth.service */ "./service/auth.service.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\pages\\Login.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var required = function required(value) {
  if (!value) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: "This field is required!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  }
};

var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this2 = _super.call(this, props);
    _this2.handleLogin = _this2.handleLogin.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangeUsername = _this2.onChangeUsername.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangePassword = _this2.onChangePassword.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "onChangeUsername",
    value: function onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "onChangePassword",
    value: function onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(e) {
      var _this3 = this;

      e.preventDefault();
      this.setState({
        message: "",
        loading: true
      });
      this.form.validateAll();

      if (this.checkBtn.context._errors.length === 0) {
        _service_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].login(this.state.username, this.state.password, window.location.pathname).then(function (res) {
          next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push("/");
        }, function (error) {
          var resMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();

          _this3.setState({
            loading: false,
            message: resMessage
          });
        });
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
            className: "card card-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("img", {
              src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
              alt: "profile-img",
              className: "profile-img-card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_validation_build_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
              onSubmit: this.handleLogin,
              ref: function ref(c) {
                _this4.form = c;
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("label", {
                  htmlFor: "username",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  type: "text",
                  className: "form-control",
                  name: "username",
                  value: this.state.username,
                  onChange: this.onChangeUsername,
                  validations: [required]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  type: "password",
                  className: "form-control",
                  name: "password",
                  value: this.state.password,
                  onChange: this.onChangePassword,
                  validations: [required]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("button", {
                  className: "btn btn-primary btn-block",
                  disabled: this.state.loading,
                  children: [this.state.loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
                    className: "spinner-border spinner-border-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 13
              }, this), this.state.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                  className: "alert alert-danger",
                  role: "alert",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
                    style: {
                      fontSize: '17px'
                    },
                    children: this.state.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_validation_build_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
                style: {
                  display: "none"
                },
                ref: function ref(c) {
                  _this4.checkBtn = c;
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }, this)]
      }, void 0, true);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0xvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsdWUiLCJMb2dpbiIsInByb3BzIiwiaGFuZGxlTG9naW4iLCJiaW5kIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwibWVzc2FnZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInZhbGlkYXRlQWxsIiwiY2hlY2tCdG4iLCJjb250ZXh0IiwiX2Vycm9ycyIsImxlbmd0aCIsIkF1dGhTZXJ2aWNlIiwibG9naW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGhlbiIsInJlcyIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsInJlc01lc3NhZ2UiLCJyZXNwb25zZSIsImRhdGEiLCJ0b1N0cmluZyIsImMiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFDeEIsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVix3QkFDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFvQyxVQUFJLEVBQUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEO0FBQ0YsQ0FSRDs7SUFVcUJDLEs7Ozs7O0FBQ25CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLCtCQUFNQSxLQUFOO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixPQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwwR0FBbkI7QUFDQSxXQUFL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LDhCQUNDLEtBQUs5QixLQUFMLENBQVdJO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTNDSixlQW1ERSxzRUFBQyxvRUFBRDtBQUNFLHFCQUFLLEVBQUU7QUFBRTJCLHlCQUFPLEVBQUU7QUFBWCxpQkFEVDtBQUVFLG1CQUFHLEVBQUUsYUFBQUYsQ0FBQyxFQUFJO0FBQ1Isd0JBQUksQ0FBQ2xCLFFBQUwsR0FBZ0JrQixDQUFoQjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFEQTtBQXlFRDs7OztFQXhJZ0NHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1JlZ2lzdGVyLjVkYjQ3N2YzM2VjMTM5Y2I0NTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZS9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlTG9naW4gPSB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxvZ2luKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZvcm0udmFsaWRhdGVBbGwoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja0J0bi5jb250ZXh0Ll9lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuc3RhdGUudXNlcm5hbWUsIHRoaXMuc3RhdGUucGFzc3dvcmQsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkudGhlbihcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNNZXNzYWdlID1cclxuICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkgfHxcclxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICA8QXBwTGF5b3V0IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi8vc3NsLmdzdGF0aWMuY29tL2FjY291bnRzL3VpL2F2YXRhcl8yeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nLWNhcmRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVMb2dpbn1cclxuICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3JlcXVpcmVkXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3JlcXVpcmVkXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzE3cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDaGVja0J1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCdG4gPSBjO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=