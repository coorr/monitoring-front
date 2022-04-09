webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Header.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/css/Header.module.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/css/Header.module.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Header_headerColor__OJZMh { font-size: 35px !important; font-weight: bold !important; }\r\n.Header_headerLayout__32Tbi { max-width: 95% !important; }\r\n\r\n#Header_navLink__1jsEH { margin-right: 20px;}\r\n#Header_dropdownMenu__1c3Gx { background-color: white; margin-right:20px; }\r\n#Header_dropdownMenuItem__2Ne1_ { background-color: white; }\r\n", "",{"version":3,"sources":["webpack://src/components/css/Header.module.css"],"names":[],"mappings":"AAAA,6BAAe,0BAA0B,EAAE,4BAA4B,EAAE;AACzE,8BAAgB,yBAAyB,EAAE;;AAE3C,yBAAW,kBAAkB,CAAC;AAC9B,8BAAgB,uBAAuB,EAAE,iBAAiB,EAAE;AAC5D,kCAAoB,uBAAuB,EAAE","sourcesContent":[".headerColor { font-size: 35px !important; font-weight: bold !important; }\r\n.headerLayout { max-width: 95% !important; }\r\n\r\n#navLink { margin-right: 20px;}\r\n#dropdownMenu { background-color: white; margin-right:20px; }\r\n#dropdownMenuItem { background-color: white; }\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"headerColor": "Header_headerColor__OJZMh",
	"headerLayout": "Header_headerLayout__32Tbi",
	"navLink": "Header_navLink__1jsEH",
	"dropdownMenu": "Header_dropdownMenu__1c3Gx",
	"dropdownMenuItem": "Header_dropdownMenuItem__2Ne1_"
};
module.exports = ___CSS_LOADER_EXPORT___;


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
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/auth.service */ "./service/auth.service.js");
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
      var currentUser = _service_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentUser();
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

/***/ "./src/components/Header.module.css":
false,

/***/ "./src/components/css/Header.module.css":
/*!**********************************************!*\
  !*** ./src/components/css/Header.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/css/Header.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/css/Header.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/css/Header.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

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
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../service/auth.service */ "./service/auth.service.js");
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
      var currentUser = _service_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentUser();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3NzL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Nzcy9IZWFkZXIubW9kdWxlLmNzcz82MWYyIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzZXRTdGF0ZSIsInNob3ciLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwidXNlcm5hbWUiLCJBdXRoU2VydmljZSIsImdldEN1cnJlbnRVc2VyIiwic3R5bGVzIiwiaGVhZGVyTGF5b3V0IiwiaGVhZGVyQ29sb3IiLCJuYXZMaW5rIiwiZHJvcGRvd25NZW51Iiwic2hvd0Ryb3Bkb3duIiwiaGlkZURyb3Bkb3duIiwiZHJvcGRvd25NZW51SXRlbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLCtCQUErQiw0QkFBNEIsOEJBQThCLEVBQUUsaUNBQWlDLDJCQUEyQixFQUFFLGdDQUFnQyxxQkFBcUIsaUNBQWlDLHlCQUF5QixtQkFBbUIsRUFBRSxxQ0FBcUMseUJBQXlCLEVBQUUsV0FBVyxtSUFBbUksMEJBQTBCLHdCQUF3QixxQ0FBcUMsMkRBQTJELDRCQUE0Qiw4QkFBOEIsRUFBRSxtQkFBbUIsMkJBQTJCLEVBQUUsa0JBQWtCLHFCQUFxQixtQkFBbUIseUJBQXlCLG1CQUFtQixFQUFFLHVCQUF1Qix5QkFBeUIsRUFBRSx1QkFBdUI7QUFDajhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFD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Q0FBSyxJQUFMO0FBQVUsb0JBQUksRUFBQyxPQUFmO0FBQXVCLGtCQUFFLEVBQUVILDZEQUFNLENBQUNHLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQW1DRDs7OztFQTNEaUNLLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxNjZhMWZjZDRjYTFmZDJkY2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyX2hlYWRlckNvbG9yX19PSlpNaCB7IGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50OyBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyB9XFxyXFxuLkhlYWRlcl9oZWFkZXJMYXlvdXRfXzMyVGJpIHsgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDsgfVxcclxcblxcclxcbiNIZWFkZXJfbmF2TGlua19fMWpzRUggeyBtYXJnaW4tcmlnaHQ6IDIwcHg7fVxcclxcbiNIZWFkZXJfZHJvcGRvd25NZW51X18xYzNHeCB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBtYXJnaW4tcmlnaHQ6MjBweDsgfVxcclxcbiNIZWFkZXJfZHJvcGRvd25NZW51SXRlbV9fMk5lMV8geyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9jc3MvSGVhZGVyLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQWUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUU7QUFDekUsOEJBQWdCLHlCQUF5QixFQUFFOztBQUUzQyx5QkFBVyxrQkFBa0IsQ0FBQztBQUM5Qiw4QkFBZ0IsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUU7QUFDNUQsa0NBQW9CLHVCQUF1QixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXJDb2xvciB7IGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50OyBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyB9XFxyXFxuLmhlYWRlckxheW91dCB7IG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7IH1cXHJcXG5cXHJcXG4jbmF2TGluayB7IG1hcmdpbi1yaWdodDogMjBweDt9XFxyXFxuI2Ryb3Bkb3duTWVudSB7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBtYXJnaW4tcmlnaHQ6MjBweDsgfVxcclxcbiNkcm9wZG93bk1lbnVJdGVtIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJDb2xvclwiOiBcIkhlYWRlcl9oZWFkZXJDb2xvcl9fT0paTWhcIixcblx0XCJoZWFkZXJMYXlvdXRcIjogXCJIZWFkZXJfaGVhZGVyTGF5b3V0X18zMlRiaVwiLFxuXHRcIm5hdkxpbmtcIjogXCJIZWFkZXJfbmF2TGlua19fMWpzRUhcIixcblx0XCJkcm9wZG93bk1lbnVcIjogXCJIZWFkZXJfZHJvcGRvd25NZW51X18xYzNHeFwiLFxuXHRcImRyb3Bkb3duTWVudUl0ZW1cIjogXCJIZWFkZXJfZHJvcGRvd25NZW51SXRlbV9fMk5lMV9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lcixOYXZiYXIsTmF2LE5hdkRyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY3NzL0hlYWRlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQWRkQ2xvdGggZnJvbSAnLi4vcGFnZXMvQWRkQ2xvdGgnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vcGFnZXMvTG9naW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9wYWdlcy9SZWdpc3Rlcic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IFwiXCIgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyIH0pXHJcbiAgfVxyXG5cclxuICBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZX0pXHJcbiAgfVxyXG4gIGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZX0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93LGN1cnJlbnRVc2VyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICA8TmF2YmFyICBleHBhbmQ9XCJsZ1wiICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMYXlvdXR9PlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb2xvcn0+Q09PUjwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiA+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiID5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiQWRkQ2xvdGhcIiBpZD17c3R5bGVzLm5hdkxpbmt9PuuTseuhne2VmOq4sDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RvcmVcIiBcclxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51fVxyXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zaG93RHJvcGRvd259IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19Pk5ldyBhcnJpdmFsczwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+T3V0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiaWQ9e3N0eWxlcy5kcm9wZG93bk1lbnVJdGVtfT5Lbml0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U3dlYXRzaGlydDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19PlQtc2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5oZWxwPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIlJlZ2lzdGVyXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5jYXJ0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIkxvZ2luXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5sb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0hlYWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vSGVhZGVyLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9IZWFkZXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lcixOYXZiYXIsTmF2LE5hdkRyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY3NzL0hlYWRlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQWRkQ2xvdGggZnJvbSAnLi4vcGFnZXMvQWRkQ2xvdGgnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vcGFnZXMvTG9naW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9wYWdlcy9SZWdpc3Rlcic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IFwiXCIgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyIH0pXHJcbiAgfVxyXG5cclxuICBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZX0pXHJcbiAgfVxyXG4gIGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZX0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzaG93LGN1cnJlbnRVc2VyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICA8TmF2YmFyICBleHBhbmQ9XCJsZ1wiICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMYXlvdXR9PlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb2xvcn0+Q09PUjwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiA+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiID5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiQWRkQ2xvdGhcIiBpZD17c3R5bGVzLm5hdkxpbmt9PuuTseuhne2VmOq4sDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RvcmVcIiBcclxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51fVxyXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zaG93RHJvcGRvd259IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19Pk5ldyBhcnJpdmFsczwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+T3V0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiaWQ9e3N0eWxlcy5kcm9wZG93bk1lbnVJdGVtfT5Lbml0d2VhcjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U3dlYXRzaGlydDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiIGlkPXtzdHlsZXMuZHJvcGRvd25NZW51SXRlbX0+U2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIiBpZD17c3R5bGVzLmRyb3Bkb3duTWVudUl0ZW19PlQtc2hpcnQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5oZWxwPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIlJlZ2lzdGVyXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5jYXJ0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIkxvZ2luXCIgaWQ9e3N0eWxlcy5uYXZMaW5rfT5sb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=