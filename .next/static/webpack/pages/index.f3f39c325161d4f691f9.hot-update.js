webpackHotUpdate_N_E("pages/index",{

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
        _service_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].login(this.state.username, this.state.password).then(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0xvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsdWUiLCJMb2dpbiIsInByb3BzIiwiaGFuZGxlTG9naW4iLCJiaW5kIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwibWVzc2FnZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInZhbGlkYXRlQWxsIiwiY2hlY2tCdG4iLCJjb250ZXh0IiwiX2Vycm9ycyIsImxlbmd0aCIsIkF1dGhTZXJ2aWNlIiwibG9naW4iLCJ0aGVuIiwicmVzIiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwicmVzTWVzc2FnZSIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwiYyIsImZvbnRTaXplIiwiZGlzcGxheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN4QixNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLHdCQUNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLFVBQUksRUFBQyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7QUFDRixDQVJEOztJQVVxQkMsSzs7Ozs7QUFDbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0JBQU1BLEtBQU47QUFDQSxXQUFLQyxXQUFMLEdBQW1CLE9BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLDBHQUFuQjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLE9BQUtBLGdCQUFMLENBQXNC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QUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBM0NKLGVBbURFLHNFQUFDLG9FQUFEO0FBQ0UscUJBQUssRUFBRTtBQUFFd0IseUJBQU8sRUFBRTtBQUFYLGlCQURUO0FBRUUsbUJBQUcsRUFBRSxhQUFBRixDQUFDLEVBQUk7QUFDUix3QkFBSSxDQUFDZixRQUFMLEdBQWdCZSxDQUFoQjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFEQTtBQXlFRDs7OztFQXhJZ0NHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYzZjM5YzMyNTE2MWQ0ZjY5MWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZS9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlTG9naW4gPSB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxvZ2luKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZvcm0udmFsaWRhdGVBbGwoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja0J0bi5jb250ZXh0Ll9lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuc3RhdGUudXNlcm5hbWUsIHRoaXMuc3RhdGUucGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9XHJcbiAgICAgICAgICAgIChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc01lc3NhZ2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPEFwcExheW91dCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvL3NzbC5nc3RhdGljLmNvbS9hY2NvdW50cy91aS9hdmF0YXJfMngucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZS1pbWdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLWltZy1jYXJkXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgIHJlZj17YyA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtID0gYztcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOicxN3B4J319PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q2hlY2tCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIHJlZj17YyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9