webpackHotUpdate_N_E("pages/Login",{

/***/ "./src/components/Header.js":
false,

/***/ "./src/pages/Register.js":
/*!*******************************!*\
  !*** ./src/pages/Register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
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
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _service_Auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/Auth.service */ "./service/Auth.service.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\pages\\Register.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var required = function required(value) {
  if (!value) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
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

var email = function email(value) {
  if (!Object(validator__WEBPACK_IMPORTED_MODULE_10__["isEmail"])(value)) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: "This is not a valid email."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this);
  }
};

var vusername = function vusername(value) {
  if (value.length < 3 || value.length > 20) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: "The username must be between 3 and 20 characters."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this);
  }
};

var vpassword = function vpassword(value) {
  if (value.length < 6 || value.length > 40) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: "The password must be between 6 and 40 characters."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this);
  }
};

var Register = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Register);

    _this2 = _super.call(this, props);
    _this2.handleRegister = _this2.handleRegister.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangeUsername = _this2.onChangeUsername.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangeEmail = _this2.onChangeEmail.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangePassword = _this2.onChangePassword.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Register, [{
    key: "onChangeUsername",
    value: function onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "onChangeEmail",
    value: function onChangeEmail(e) {
      this.setState({
        email: e.target.value
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
    key: "handleRegister",
    value: function handleRegister(e) {
      var _this3 = this;

      e.preventDefault();
      this.setState({
        message: "",
        successful: false
      });
      this.form.validateAll();

      if (this.checkBtn.context._errors.length === 0) {
        // 0은 id,email,pw다 올바르게 입력했을때 , 서버보다 우선순위 먼저
        _service_Auth_service__WEBPACK_IMPORTED_MODULE_12__["default"].register( // body 역할
        this.state.username, this.state.email, this.state.password).then(function (response) {
          _this3.setState({
            message: response.data.message,
            successful: true
          });
        }, function (error) {
          var resMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();

          _this3.setState({
            successful: false,
            message: resMessage
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log(this.state.message);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            className: "card card-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("img", {
              src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
              alt: "profile-img",
              className: "profile-img-card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
              onSubmit: this.handleRegister,
              ref: function ref(c) {
                _this4.form = c;
              },
              children: [!this.state.successful && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("label", {
                    htmlFor: "username",
                    children: "Username"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    type: "text",
                    className: "form-control",
                    name: "username",
                    value: this.state.username,
                    onChange: this.onChangeUsername,
                    validations: [required, vusername]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("label", {
                    htmlFor: "email",
                    children: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    type: "text",
                    className: "form-control",
                    name: "email",
                    value: this.state.email,
                    onChange: this.onChangeEmail,
                    validations: [required, email]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("label", {
                    htmlFor: "password",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    type: "password",
                    className: "form-control",
                    name: "password",
                    value: this.state.password,
                    onChange: this.onChangePassword,
                    validations: [required, vpassword]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("button", {
                    className: "btn btn-primary btn-block",
                    children: "Sign Up"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 15
              }, this), this.state.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: this.state.successful ? "alert alert-success" : "alert alert-danger",
                  role: "alert",
                  children: this.state.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
                style: {
                  display: "none"
                },
                ref: function ref(c) {
                  _this4.checkBtn = c;
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 7
        }, this)]
      }, void 0, true);
    }
  }]);

  return Register;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsdWUiLCJlbWFpbCIsImlzRW1haWwiLCJ2dXNlcm5hbWUiLCJsZW5ndGgiLCJ2cGFzc3dvcmQiLCJSZWdpc3RlciIsInByb3BzIiwiaGFuZGxlUmVnaXN0ZXIiLCJiaW5kIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlRW1haWwiLCJvbkNoYW5nZVBhc3N3b3JkIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic3VjY2Vzc2Z1bCIsIm1lc3NhZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ2YWxpZGF0ZUFsbCIsImNoZWNrQnRuIiwiY29udGV4dCIsIl9lcnJvcnMiLCJBdXRoU2VydmljZSIsInJlZ2lzdGVyIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwicmVzTWVzc2FnZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImMiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFDeEIsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVix3QkFDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFvQyxVQUFJLEVBQUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEO0FBQ0YsQ0FSRDs7QUFVQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBRCxLQUFLLEVBQUk7QUFDckIsTUFBSSxDQUFDRSwwREFBTyxDQUFDRixLQUFELENBQVosRUFBcUI7QUFDbkIsd0JBQ0U7QUFB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Q0U7QUFBUSw2QkFBUyxFQUFDLDJCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixFQWtERyxLQUFLUSxLQUFMLENBQVdJLE9BQVgsaUJBQ0M7QUFBSyx5QkFBUyxFQUFDLFlBQWY7QUFBQSx1Q0FDRTtBQUNFLDJCQUFTLEVBQ1AsS0FBS0osS0FBTCxDQUFXRyxVQUFYLEdBQ0kscUJBREosR0FFSSxvQkFKUjtBQU1FLHNCQUFJLEVBQUMsT0FOUDtBQUFBLDRCQVFHLEtBQUtILEtBQUwsQ0FBV0k7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuREosZUFnRUUsc0VBQUMsb0VBQUQ7QUFDRSxxQkFBSyxFQUFFO0FBQUVxQix5QkFBTyxFQUFFO0FBQVgsaUJBRFQ7QUFFRSxtQkFBRyxFQUFFLGFBQUFELENBQUMsRUFBSTtBQUNSLHdCQUFJLENBQUNiLFFBQUwsR0FBZ0JhLENBQWhCO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBLHNCQURGO0FBc0ZEOzs7O0VBbEttQ0UsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTG9naW4uZDJjYWY0YTM2YTllMTU5YTQyYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvaW5wdXRcIjtcclxuaW1wb3J0IENoZWNrQnV0dG9uIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSBcInZhbGlkYXRvclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2UvQXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlbWFpbCA9IHZhbHVlID0+IHtcclxuICBpZiAoIWlzRW1haWwodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB2dXNlcm5hbWUgPSB2YWx1ZSA9PiB7XHJcbiAgaWYgKHZhbHVlLmxlbmd0aCA8IDMgfHwgdmFsdWUubGVuZ3RoID4gMjApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgVGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiAzIGFuZCAyMCBjaGFyYWN0ZXJzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdnBhc3N3b3JkID0gdmFsdWUgPT4ge1xyXG4gIGlmICh2YWx1ZS5sZW5ndGggPCA2IHx8IHZhbHVlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoZSBwYXNzd29yZCBtdXN0IGJlIGJldHdlZW4gNiBhbmQgNDAgY2hhcmFjdGVycy5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVSZWdpc3RlciA9IHRoaXMuaGFuZGxlUmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VVc2VybmFtZSA9IHRoaXMub25DaGFuZ2VVc2VybmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZUVtYWlsID0gdGhpcy5vbkNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUVtYWlsKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlZ2lzdGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgc3VjY2Vzc2Z1bDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZm9ybS52YWxpZGF0ZUFsbCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrQnRuLmNvbnRleHQuX2Vycm9ycy5sZW5ndGggPT09IDApIHsgIC8vIDDsnYAgaWQsZW1haWwscHfri6Qg7Jis67CU66W06rKMIOyeheugpe2WiOydhOuVjCAsIOyEnOuyhOuztOuLpCDsmrDshKDsiJzsnIQg66i87KCAXHJcbiAgICAgIEF1dGhTZXJ2aWNlLnJlZ2lzdGVyKCAgIC8vIGJvZHkg7Jet7ZWgXHJcbiAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgICAgICB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmRcclxuICAgICAgKS50aGVuKFxyXG4gICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9XHJcbiAgICAgICAgICAgIChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc01lc3NhZ2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi8vc3NsLmdzdGF0aWMuY29tL2FjY291bnRzL3VpL2F2YXRhcl8yeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nLWNhcmRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVSZWdpc3Rlcn1cclxuICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXRoaXMuc3RhdGUuc3VjY2Vzc2Z1bCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZCwgdnVzZXJuYW1lXX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZCwgZW1haWxdfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZCwgdnBhc3N3b3JkXX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q2hlY2tCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIHJlZj17YyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9