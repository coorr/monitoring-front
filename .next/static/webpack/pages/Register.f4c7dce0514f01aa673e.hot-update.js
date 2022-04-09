webpackHotUpdate_N_E("pages/Register",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_AddCloth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/AddCloth */ "./src/pages/AddCloth.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Login */ "./src/pages/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Register */ "./src/pages/Register.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\components\\Header.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "showDropdown", function () {
      _this.setState({
        show: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hideDropdown", function () {
      _this.setState({
        show: false
      });
    });

    _this.state = {
      show: false,
      data: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var show = this.state.show;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        expand: "lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          className: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerLayout,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Brand, {
            href: "#home",
            className: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerColor,
            children: "COOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
              className: "ms-auto",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "AddCloth",
                id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "\uB4F1\uB85D\uD558\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"], {
                title: "Store",
                id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenu,
                show: show,
                onMouseEnter: this.showDropdown,
                onMouseLeave: this.hideDropdown,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.1",
                  id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "New arrivals"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.2",
                  id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Outwear"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.3",
                  id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Knitwear"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Sweatshirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Shirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "T-shirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "#home",
                id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "Register",
                id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "Login",
                id: _Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }, this);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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

/***/ }),

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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/auth.service */ "./service/auth.service.js");
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
        _service_auth_service__WEBPACK_IMPORTED_MODULE_12__["default"].register( // body 역할
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzZXRTdGF0ZSIsInNob3ciLCJzdGF0ZSIsImRhdGEiLCJzdHlsZXMiLCJoZWFkZXJMYXlvdXQiLCJoZWFkZXJDb2xvciIsIm5hdkxpbmsiLCJkcm9wZG93bk1lbnUiLCJzaG93RHJvcGRvd24iLCJoaWRlRHJvcGRvd24iLCJkcm9wZG93bk1lbnVJdGVtIiwiQ29tcG9uZW50IiwicmVxdWlyZWQiLCJ2YWx1ZSIsImVtYWlsIiwiaXNFbWFpbCIsInZ1c2VybmFtZSIsImxlbmd0aCIsInZwYXNzd29yZCIsIlJlZ2lzdGVyIiwiaGFuZGxlUmVnaXN0ZXIiLCJiaW5kIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlRW1haWwiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInN1Y2Nlc3NmdWwiLCJtZXNzYWdlIiwiZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInZhbGlkYXRlQWxsIiwiY2hlY2tCdG4iLCJjb250ZXh0IiwiX2Vycm9ycyIsIkF1dGhTZXJ2aWNlIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsInJlc01lc3NhZ2UiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJjIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBRXFCQSxNOzs7OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsdU5BWUosWUFBTTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFBRUMsWUFBSSxFQUFF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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKLEVBa0RHLEtBQUtqQixLQUFMLENBQVcyQixPQUFYLGlCQUNDO0FBQUsseUJBQVMsRUFBQyxZQUFmO0FBQUEsdUNBQ0U7QUFDRSwyQkFBUyxFQUNQLEtBQUszQixLQUFMLENBQVcwQixVQUFYLEdBQ0kscUJBREosR0FFSSxvQkFKUjtBQU1FLHNCQUFJLEVBQUMsT0FOUDtBQUFBLDRCQVFHLEtBQUsxQixLQUFMLENBQVcyQjtBQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5ESixlQWdFRSxzRUFBQyxvRUFBRDtBQUNFLHFCQUFLLEVBQUU7QUFBRW1CLHlCQUFPLEVBQUU7QUFBWCxpQkFEVDtBQUVFLG1CQUFHLEVBQUUsYUFBQUQsQ0FBQyxFQUFJO0FBQ1Isd0JBQUksQ0FBQ1osUUFBTCxHQUFnQlksQ0FBaEI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUEsc0JBREY7QUFzRkQ7Ozs7RUFsS21DbkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUmVnaXN0ZXIuZjRjN2RjZTA1MTRmMDFhYTY3M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLE5hdmJhcixOYXYsTmF2RHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IEFkZENsb3RoIGZyb20gJy4uL3BhZ2VzL0FkZENsb3RoJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL3BhZ2VzL0xvZ2luJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vcGFnZXMvUmVnaXN0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGRhdGE6JydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICB9XHJcblxyXG4gIHNob3dEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlfSlcclxuICB9XHJcbiAgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlfSlcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDxOYXZiYXIgIGV4cGFuZD1cImxnXCIgID5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxheW91dH0+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbG9yfT5DT09SPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiID5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIkFkZENsb3RoXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT7rk7HroZ3tlZjquLA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RvcmVcIiBcclxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51fVxyXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zaG93RHJvcGRvd259IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19Pk5ldyBhcnJpdmFsczwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+T3V0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiaWQ9e3N0eWxlcy5kcm9wZG93bk1lbnVJdGVtfT5Lbml0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U3dlYXRzaGlydDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19PlQtc2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5oZWxwPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIlJlZ2lzdGVyXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5jYXJ0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIkxvZ2luXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5sb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvaW5wdXRcIjtcclxuaW1wb3J0IENoZWNrQnV0dG9uIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSBcInZhbGlkYXRvclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlbWFpbCA9IHZhbHVlID0+IHtcclxuICBpZiAoIWlzRW1haWwodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB2dXNlcm5hbWUgPSB2YWx1ZSA9PiB7XHJcbiAgaWYgKHZhbHVlLmxlbmd0aCA8IDMgfHwgdmFsdWUubGVuZ3RoID4gMjApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgVGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiAzIGFuZCAyMCBjaGFyYWN0ZXJzLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdnBhc3N3b3JkID0gdmFsdWUgPT4ge1xyXG4gIGlmICh2YWx1ZS5sZW5ndGggPCA2IHx8IHZhbHVlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFRoZSBwYXNzd29yZCBtdXN0IGJlIGJldHdlZW4gNiBhbmQgNDAgY2hhcmFjdGVycy5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVSZWdpc3RlciA9IHRoaXMuaGFuZGxlUmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VVc2VybmFtZSA9IHRoaXMub25DaGFuZ2VVc2VybmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZUVtYWlsID0gdGhpcy5vbkNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUVtYWlsKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlZ2lzdGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgc3VjY2Vzc2Z1bDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZm9ybS52YWxpZGF0ZUFsbCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrQnRuLmNvbnRleHQuX2Vycm9ycy5sZW5ndGggPT09IDApIHsgIC8vIDDsnYAgaWQsZW1haWwscHfri6Qg7Jis67CU66W06rKMIOyeheugpe2WiOydhOuVjCAsIOyEnOuyhOuztOuLpCDsmrDshKDsiJzsnIQg66i87KCAXHJcbiAgICAgIEF1dGhTZXJ2aWNlLnJlZ2lzdGVyKCAgIC8vIGJvZHkg7Jet7ZWgXHJcbiAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgICAgICB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmRcclxuICAgICAgKS50aGVuKFxyXG4gICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9XHJcbiAgICAgICAgICAgIChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc01lc3NhZ2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi8vc3NsLmdzdGF0aWMuY29tL2FjY291bnRzL3VpL2F2YXRhcl8yeC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nLWNhcmRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVSZWdpc3Rlcn1cclxuICAgICAgICAgICAgcmVmPXtjID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXRoaXMuc3RhdGUuc3VjY2Vzc2Z1bCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZCwgdnVzZXJuYW1lXX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZCwgZW1haWxdfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e1tyZXF1aXJlZCwgdnBhc3N3b3JkXX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q2hlY2tCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIHJlZj17YyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9