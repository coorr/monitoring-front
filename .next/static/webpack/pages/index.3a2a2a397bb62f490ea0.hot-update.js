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

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "card card-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
              src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
              alt: "profile-img",
              className: "profile-img-card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
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
                  lineNumber: 101,
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
                  lineNumber: 102,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
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
                  lineNumber: 114,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
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
                    lineNumber: 130,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
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
                    lineNumber: 139,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
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
                lineNumber: 145,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsicmVxdWlyZWQiLCJ2YWx1ZSIsIkxvZ2luIiwicHJvcHMiLCJoYW5kbGVMb2dpbiIsImJpbmQiLCJvbkNoYW5nZVVzZXJuYW1lIiwib25DaGFuZ2VQYXNzd29yZCIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvYWRpbmciLCJtZXNzYWdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwidmFsaWRhdGVBbGwiLCJjaGVja0J0biIsImNvbnRleHQiLCJfZXJyb3JzIiwibGVuZ3RoIiwiQXV0aFNlcnZpY2UiLCJsb2dpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0aGVuIiwicmVzIiwicmVsb2FkIiwiZXJyb3IiLCJyZXNNZXNzYWdlIiwicmVzcG9uc2UiLCJkYXRhIiwidG9TdHJpbmciLCJjIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN4QixNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLHdCQUNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLFVBQUksRUFBQyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7QUFDRixDQVJEOztJQVVxQkMsSzs7Ozs7QUFDbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0JBQU1BLEtBQU47QUFDQSxXQUFLQyxXQUFMLEdBQW1CLE9BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLDBHQUFuQjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLE9BQUtBLGdCQUFM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TCxDQUFXSTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEzQ0osZUFtREUsc0VBQUMsb0VBQUQ7QUFDRSxxQkFBSyxFQUFFO0FBQUUwQix5QkFBTyxFQUFFO0FBQVgsaUJBRFQ7QUFFRSxtQkFBRyxFQUFFLGFBQUFGLENBQUMsRUFBSTtBQUNSLHdCQUFJLENBQUNqQixRQUFMLEdBQWdCaUIsQ0FBaEI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsc0JBREE7QUF5RUQ7Ozs7RUF6SWdDRywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYTJhMmEzOTdiYjYyZjQ5MGVhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9pbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tCdXR0b24gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvYnV0dG9uXCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4vaW5kZXhcIlxyXG5cclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlL2F1dGguc2VydmljZVwiO1xyXG5cclxuY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhhbmRsZUxvZ2luID0gdGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZVVzZXJuYW1lID0gdGhpcy5vbkNoYW5nZVVzZXJuYW1lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VVc2VybmFtZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMb2dpbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mb3JtLnZhbGlkYXRlQWxsKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tCdG4uY29udGV4dC5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBBdXRoU2VydmljZS5sb2dpbih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2ZpbGVcIik7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNNZXNzYWdlID1cclxuICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkgfHxcclxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICA8QXBwTGF5b3V0IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi8vc3NsLmdzdGF0aWMuY29tL2FjY291bnRzL3VpL2F2YXRhcl8yeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nLWNhcmRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVMb2dpbn1cclxuICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3JlcXVpcmVkXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3JlcXVpcmVkXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzE3cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDaGVja0J1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCdG4gPSBjO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=