webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/auth.service */ "./service/auth.service.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\aws-next-front\\monitoring-front\\pages\\login.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var required = function required(value) {
  if (!value) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: "This field is required!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
          // this.props.history.push("/profile");
          window.location.reload();
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

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "card card-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
              src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
              alt: "profile-img",
              className: "profile-img-card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_validation_build_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
              onSubmit: this.handleLogin,
              ref: function ref(c) {
                _this4.form = c;
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                  htmlFor: "username",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  type: "text",
                  className: "form-control",
                  name: "username",
                  value: this.state.username,
                  onChange: this.onChangeUsername,
                  validations: [required]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  type: "password",
                  className: "form-control",
                  name: "password",
                  value: this.state.password,
                  onChange: this.onChangePassword,
                  validations: [required]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                  className: "btn btn-primary btn-block",
                  disabled: this.state.loading,
                  children: [this.state.loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                    className: "spinner-border spinner-border-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 13
              }, this), this.state.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  className: "alert alert-danger",
                  role: "alert",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    style: {
                      fontSize: '17px'
                    },
                    children: this.state.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_validation_build_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
                style: {
                  display: "none"
                },
                ref: function ref(c) {
                  _this4.checkBtn = c;
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsicmVxdWlyZWQiLCJ2YWx1ZSIsIkxvZ2luIiwicHJvcHMiLCJoYW5kbGVMb2dpbiIsImJpbmQiLCJvbkNoYW5nZVVzZXJuYW1lIiwib25DaGFuZ2VQYXNzd29yZCIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvYWRpbmciLCJtZXNzYWdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwidmFsaWRhdGVBbGwiLCJjaGVja0J0biIsImNvbnRleHQiLCJfZXJyb3JzIiwibGVuZ3RoIiwiQXV0aFNlcnZpY2UiLCJsb2dpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0aGVuIiwicmVzIiwicmVsb2FkIiwiZXJyb3IiLCJyZXNNZXNzYWdlIiwicmVzcG9uc2UiLCJkYXRhIiwidG9TdHJpbmciLCJjIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Ysd0JBQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBb0MsVUFBSSxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFLRDtBQUNGLENBUkQ7O0lBVXFCQyxLOzs7OztBQUNuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiwrQkFBTUEsS0FBTjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsT0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsMEdBQW5CO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsT0FBS0EsZ0JBQUws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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBM0NKLGVBbURFLHNFQUFDLG9FQUFEO0FBQ0UscUJBQUssRUFBRTtBQUFFMEIseUJBQU8sRUFBRTtBQUFYLGlCQURUO0FBRUUsbUJBQUcsRUFBRSxhQUFBRixDQUFDLEVBQUk7QUFDUix3QkFBSSxDQUFDakIsUUFBTCxHQUFnQmlCLENBQWhCO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQXdFRDs7OztFQXhJZ0NHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjExNzQzYTk1OGYzYTZmYWYyMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi9pbmRleFwiXHJcblxyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlTG9naW4gPSB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxvZ2luKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZvcm0udmFsaWRhdGVBbGwoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja0J0bi5jb250ZXh0Ll9lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuc3RhdGUudXNlcm5hbWUsIHRoaXMuc3RhdGUucGFzc3dvcmQsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkudGhlbihcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc01lc3NhZ2UgPVxyXG4gICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhICYmXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB8fFxyXG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNNZXNzYWdlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvL3NzbC5nc3RhdGljLmNvbS9hY2NvdW50cy91aS9hdmF0YXJfMngucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZS1pbWdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLWltZy1jYXJkXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgIHJlZj17YyA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtID0gYztcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOicxN3B4J319PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q2hlY2tCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIHJlZj17YyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==