webpackHotUpdate_N_E("pages/index",{

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

/***/ }),

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
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/Header.module.css */ "./src/components/css/Header.module.css");
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_AddCloth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/AddCloth */ "./src/pages/AddCloth.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Login */ "./src/pages/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Register */ "./src/pages/Register.js");
/* harmony import */ var _service_Auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/Auth.service */ "./service/Auth.service.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);







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
      currentUser: {
        username: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentUser = _service_Auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentUser();
      this.setState({
        currentUser: currentUser
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          show = _this$state.show,
          currentUser = _this$state.currentUser;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        expand: "lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          className: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerLayout,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Brand, {
            href: "#home",
            className: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerColor,
            children: "COOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
              className: "ms-auto",
              children: [currentUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "AddCloth",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "\uB4F1\uB85D\uD558\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"], {
                title: "Store",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenu,
                show: show,
                onMouseEnter: this.showDropdown,
                onMouseLeave: this.hideDropdown,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.1",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "New arrivals"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.2",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Outwear"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.3",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Knitwear"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Sweatshirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Shirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "T-shirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "#home",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "Register",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "Login",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
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
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/Header.module.css */ "./src/components/css/Header.module.css");
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_AddCloth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/AddCloth */ "./src/pages/AddCloth.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Login */ "./src/pages/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Register */ "./src/pages/Register.js");
/* harmony import */ var _service_Auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/Auth.service */ "./service/Auth.service.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\components\\header.js";

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
      currentUser: {
        username: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentUser = _service_Auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentUser();
      this.setState({
        currentUser: currentUser
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          show = _this$state.show,
          currentUser = _this$state.currentUser;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        expand: "lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          className: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerLayout,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Brand, {
            href: "#home",
            className: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerColor,
            children: "COOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
              className: "ms-auto",
              children: [currentUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "AddCloth",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "\uB4F1\uB85D\uD558\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"], {
                title: "Store",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenu,
                show: show,
                onMouseEnter: this.showDropdown,
                onMouseLeave: this.hideDropdown,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.1",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "New arrivals"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.2",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Outwear"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.3",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Knitwear"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Sweatshirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "Shirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NavDropdown"].Item, {
                  href: "#action/3.4",
                  id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dropdownMenuItem,
                  children: "T-shirt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "#home",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "help"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "Register",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
                href: "Login",
                id: _css_Header_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navLink,
                children: "login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS9BdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJjb25maWciLCJBdXRoU2VydmljZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJlbWFpbCIsInBhcnNlIiwiZ2V0SXRlbSIsIkhlYWRlciIsInByb3BzIiwic2V0U3RhdGUiLCJzaG93Iiwic3RhdGUiLCJjdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwic3R5bGVzIiwiaGVhZGVyTGF5b3V0IiwiaGVhZGVyQ29sb3IiLCJuYXZMaW5rIiwiZHJvcGRvd25NZW51Iiwic2hvd0Ryb3Bkb3duIiwiaGlkZURyb3Bkb3duIiwiZHJvcGRvd25NZW51SXRlbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sR0FBQyxTQUF2Qjs7SUFFTUMsVzs7Ozs7OztXQUNKLGVBQU1DLFFBQU4sRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3hCLGFBQU9DLDRDQUFLLENBQ1RDLElBREksQ0FDQ04sT0FBTyxHQUFHLFFBRFgsRUFDcUI7QUFDeEJHLGdCQUFRLEVBQVJBLFFBRHdCO0FBRXhCQyxnQkFBUSxFQUFSQTtBQUZ3QixPQURyQixFQUtKRyxJQUxJLENBS0MsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFlBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFsQixFQUF5QjtBQUN2QkMsc0JBQVksQ0FBQ0MsT0FBYixDQUFxQixN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QUssSUFBTDtBQUFVLG9CQUFJLEVBQUMsVUFBZjtBQUEwQixrQkFBRSxFQUFFSCw2REFBTSxDQUFDRyxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFyQkYsZUFzQkUsc0VBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsb0JBQUksRUFBQyxPQUFmO0FBQXVCLGtCQUFFLEVBQUVILDZEQUFNLENBQUNHLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQW1DRDs7OztFQTNEaUNLLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM2ZDczYmQ3MmZhMzkyYmRlOWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9zcmMvY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9IGNvbmZpZytcImFpd2Fjcy9cIjtcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAucG9zdChBUElfVVJMICsgXCJzaWduaW5cIiwge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0sKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudG9rZW4pIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcih1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgXCJzaWdudXBcIiwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsTmF2YmFyLE5hdixOYXZEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Nzcy9IZWFkZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IEFkZENsb3RoIGZyb20gJy4uL3BhZ2VzL0FkZENsb3RoJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL3BhZ2VzL0xvZ2luJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vcGFnZXMvUmVnaXN0ZXInO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9BdXRoLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBcIlwiIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlciB9KVxyXG4gIH1cclxuXHJcbiAgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWV9KVxyXG4gIH1cclxuICBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2V9KVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2hvdyxjdXJyZW50VXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgPE5hdmJhciAgZXhwYW5kPVwibGdcIiAgPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGF5b3V0fT5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29sb3J9PkNPT1I8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCIgPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiA+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIkFkZENsb3RoXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT7rk7HroZ3tlZjquLA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlN0b3JlXCIgXHJcbiAgICAgICAgICAgICAgICBpZD17c3R5bGVzLmRyb3Bkb3duTWVudX1cclxuICAgICAgICAgICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuc2hvd0Ryb3Bkb3dufSBcclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCIgaWQ9e3N0eWxlcy5kcm9wZG93bk1lbnVJdGVtfT5OZXcgYXJyaXZhbHM8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19Pk91dHdlYXI8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcImlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+S25pdHdlYXI8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19PlN3ZWF0c2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19PlNoaXJ0PC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCIgaWQ9e3N0eWxlcy5kcm9wZG93bk1lbnVJdGVtfT5ULXNoaXJ0PC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiIGlkPXtzdHlsZXMubmF2TGlua30+aGVscDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCJSZWdpc3RlclwiIGlkPXtzdHlsZXMubmF2TGlua30+Y2FydDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCJMb2dpblwiIGlkPXtzdHlsZXMubmF2TGlua30+bG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lcixOYXZiYXIsTmF2LE5hdkRyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY3NzL0hlYWRlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQWRkQ2xvdGggZnJvbSAnLi4vcGFnZXMvQWRkQ2xvdGgnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vcGFnZXMvTG9naW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9wYWdlcy9SZWdpc3Rlcic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlL0F1dGguc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IFwiXCIgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyIH0pXHJcbiAgfVxyXG5cclxuICBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZX0pXHJcbiAgfVxyXG4gIGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZX0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93LGN1cnJlbnRVc2VyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICA8TmF2YmFyICBleHBhbmQ9XCJsZ1wiICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMYXlvdXR9PlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb2xvcn0+Q09PUjwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiA+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiID5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiQWRkQ2xvdGhcIiBpZD17c3R5bGVzLm5hdkxpbmt9PuuTseuhne2VmOq4sDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RvcmVcIiBcclxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51fVxyXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zaG93RHJvcGRvd259IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19Pk5ldyBhcnJpdmFsczwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+T3V0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiaWQ9e3N0eWxlcy5kcm9wZG93bk1lbnVJdGVtfT5Lbml0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U3dlYXRzaGlydDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19PlQtc2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5oZWxwPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIlJlZ2lzdGVyXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5jYXJ0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIkxvZ2luXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5sb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=