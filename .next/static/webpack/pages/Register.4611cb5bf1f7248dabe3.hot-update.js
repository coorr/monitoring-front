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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\pages\\Login.js",
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
      lineNumber: 13,
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
          _this3.props.history.push("/");

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
          lineNumber: 86,
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
              lineNumber: 89,
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
                  lineNumber: 102,
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
                  lineNumber: 103,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
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
                  lineNumber: 115,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
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
                    lineNumber: 131,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
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
                    lineNumber: 140,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
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
                lineNumber: 146,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0xvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsdWUiLCJMb2dpbiIsInByb3BzIiwiaGFuZGxlTG9naW4iLCJiaW5kIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwibWVzc2FnZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInZhbGlkYXRlQWxsIiwiY2hlY2tCdG4iLCJjb250ZXh0IiwiX2Vycm9ycyIsImxlbmd0aCIsIkF1dGhTZXJ2aWNlIiwibG9naW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGhlbiIsInJlcyIsImhpc3RvcnkiLCJwdXNoIiwicmVsb2FkIiwiZXJyb3IiLCJyZXNNZXNzYWdlIiwicmVzcG9uc2UiLCJkYXRhIiwidG9TdHJpbmciLCJjIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN4QixNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLHdCQUNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLFVBQUksRUFBQyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7QUFDRixDQVJEOztJQVVxQkMsSzs7Ozs7QUFDbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0JBQU1BLEtBQU47QUFDQSxXQUFLQyxXQUFMLEdBQW1CLE9BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLDBHQUFuQjtBQUNBLFdBQUtDLGdC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QUFBQSx5Q0FDRTtBQUFLLHlCQUFLLEVBQUU7QUFBQzJCLDhCQUFRLEVBQUM7QUFBVixxQkFBWjtBQUFBLDhCQUNDLEtBQUsvQixLQUFMLENBQVdJO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTNDSixlQW1ERSxzRUFBQyxvRUFBRDtBQUNFLHFCQUFLLEVBQUU7QUFBRTRCLHlCQUFPLEVBQUU7QUFBWCxpQkFEVDtBQUVFLG1CQUFHLEVBQUUsYUFBQUYsQ0FBQyxFQUFJO0FBQ1Isd0JBQUksQ0FBQ25CLFFBQUwsR0FBZ0JtQixDQUFoQjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFEQTtBQXlFRDs7OztFQXpJZ0NHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1JlZ2lzdGVyLjQ2MTFjYjViZjFmNzI0OGRhYmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZS9hdXRoLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhhbmRsZUxvZ2luID0gdGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZVVzZXJuYW1lID0gdGhpcy5vbkNoYW5nZVVzZXJuYW1lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VVc2VybmFtZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMb2dpbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mb3JtLnZhbGlkYXRlQWxsKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tCdG4uY29udGV4dC5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBBdXRoU2VydmljZS5sb2dpbih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc01lc3NhZ2UgPVxyXG4gICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhICYmXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB8fFxyXG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNNZXNzYWdlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxBcHBMYXlvdXQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiLy9zc2wuZ3N0YXRpYy5jb20vYWNjb3VudHMvdWkvYXZhdGFyXzJ4LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cInByb2ZpbGUtaW1nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWctY2FyZFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUxvZ2lufVxyXG4gICAgICAgICAgICByZWY9e2MgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGM7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXtbcmVxdWlyZWRdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXtbcmVxdWlyZWRdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMTdweCd9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENoZWNrQnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICByZWY9e2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0J0biA9IGM7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==