_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/next/dist/pages/_error"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fnext%2Fdist%2Fpages%2F_error&absolutePagePath=C%3A%5CUsers%5Cuser%5CDownloads%5Caws-next-front%5Cmonitoring-front%5Cnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js!./":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fnext%2Fdist%2Fpages%2F_error&absolutePagePath=C%3A%5CUsers%5Cuser%5CDownloads%5Caws-next-front%5Cmonitoring-front%5Cnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/next/dist/pages/_error",
      function () {
        return __webpack_require__(/*! ./node_modules/next/dist/pages/_error.js */ "./node_modules/next/dist/pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }]);

  return Error;
}(_react["default"].Component);

exports["default"] = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.0.0-fc46dba67-20220329';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fnext%2Fdist%2Fpages%2F_error&absolutePagePath=C%3A%5CUsers%5Cuser%5CDownloads%5Caws-next-front%5Cmonitoring-front%5Cnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2FtcC1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2FtcC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9oZWFkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9wYWdlcy9fZXJyb3IudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsiQW1wU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJhbXBGaXJzdCIsImh5YnJpZCIsImhhc1F1ZXJ5IiwiaXNJbkFtcE1vZGUiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY2hpbGQiLCJsaXN0IiwiZnJhZ21lbnRMaXN0IiwiTUVUQVRZUEVTIiwia2V5cyIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImtleSIsImkiLCJsZW4iLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJoZWFkRWxlbWVudCIsImRlZmF1bHRIZWFkIiwicHJvcHMiLCJ1bmlxdWUiLCJjIiwicHJvY2VzcyIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJIZWFkIiwiaXNTZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50Iiwic3RhdHVzQ29kZXMiLCJzdGF0dXNDb2RlIiwicmVzIiwiZXJyIiwidGl0bGUiLCJzdHlsZXMiLCJfX2h0bWwiLCJFcnJvciIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiX2dldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJlcnJvciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQ0FBMkM7O0FBRTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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cUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLGlGQUE0QjtBQUN2RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL25leHQvZGlzdC9wYWdlcy9fZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvd25sb2Fkc1xcXFxhd3MtbmV4dC1mcm9udFxcXFxtb25pdG9yaW5nLWZyb250XFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgSGVhZE1hbmFnZXJDb250ZXh0OiBSZWFjdC5Db250ZXh0PHtcbiAgdXBkYXRlSGVhZD86IChzdGF0ZTogYW55KSA9PiB2b2lkXG4gIG1vdW50ZWRJbnN0YW5jZXM/OiBhbnlcbn0+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgSGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0hlYWRNYW5hZ2VyQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vc2lkZS1lZmZlY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IGlzSW5BbXBNb2RlIH0gZnJvbSAnLi9hbXAnXG5cbnR5cGUgV2l0aEluQW1wTW9kZSA9IHtcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpOiBKU1guRWxlbWVudFtdIHtcbiAgY29uc3QgaGVhZCA9IFs8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPl1cbiAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICBoZWFkLnB1c2goPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+KVxuICB9XG4gIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQoXG4gIGxpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbik6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG4gIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgaWYgKGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKFxuICAgICAgICAoXG4gICAgICAgICAgZnJhZ21lbnRMaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgICAgICAgZnJhZ21lbnRDaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuICAgICAgICApOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKVxuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZClcbn1cblxuY29uc3QgTUVUQVRZUEVTID0gWyduYW1lJywgJ2h0dHBFcXVpdicsICdjaGFyU2V0JywgJ2l0ZW1Qcm9wJ11cblxuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovXG5mdW5jdGlvbiB1bmlxdWUoKSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcbiAgY29uc3QgdGFncyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YUNhdGVnb3JpZXM6IHsgW21ldGF0eXBlOiBzdHJpbmddOiBTZXQ8c3RyaW5nPiB9ID0ge31cblxuICByZXR1cm4gKGg6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgbGV0IGlzVW5pcXVlID0gdHJ1ZVxuXG4gICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gJ251bWJlcicgJiYgaC5rZXkuaW5kZXhPZignJCcpID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSlcbiAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuYWRkKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgc3dpdGNoIChoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV1cbiAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZVxuXG4gICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKVxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSlcbiAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBpc1VuaXF1ZVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoXG4gIGhlYWRFbGVtZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBwcm9wczogV2l0aEluQW1wTW9kZVxuKSB7XG4gIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAucmVkdWNlKFxuICAgICAgKGxpc3Q6IFJlYWN0LlJlYWN0Q2hpbGRbXSwgaGVhZEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KFxuICAgICAgICAgIGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKVxuICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgLnJldmVyc2UoKVxuICAgIC5tYXAoKGM6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGlcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIXByb3BzLmluQW1wTW9kZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgICAvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cbiAgICAgICAgICBbJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJ10uc29tZSgodXJsKSA9PlxuICAgICAgICAgICAgYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIHsga2V5IH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL1xuZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IGFtcFN0YXRlID0gdXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpXG4gIGNvbnN0IGhlYWRNYW5hZ2VyID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG4gIHJldHVybiAoXG4gICAgPEVmZmVjdFxuICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU9e3JlZHVjZUNvbXBvbmVudHN9XG4gICAgICBoZWFkTWFuYWdlcj17aGVhZE1hbmFnZXJ9XG4gICAgICBpbkFtcE1vZGU9e2lzSW5BbXBNb2RlKGFtcFN0YXRlKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FZmZlY3Q+XG4gIClcbn1cblxuLy8gVE9ETzogUmVtb3ZlIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2VcbkhlYWQucmV3aW5kID0gKCkgPT4ge31cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBKU1guRWxlbWVudFtdIHwgdW5kZWZpbmVkXG5cbnR5cGUgU2lkZUVmZmVjdFByb3BzID0ge1xuICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogPFQ+KFxuICAgIGNvbXBvbmVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICBwcm9wczogVFxuICApID0+IFN0YXRlXG4gIGhhbmRsZVN0YXRlQ2hhbmdlPzogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBoZWFkTWFuYWdlcjogYW55XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPiB7XG4gIHByaXZhdGUgX2hhc0hlYWRNYW5hZ2VyOiBib29sZWFuXG5cbiAgZW1pdENoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZChcbiAgICAgICAgdGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShcbiAgICAgICAgICBbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSxcbiAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPVxuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlciAmJiB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNcblxuICAgIGlmIChpc1NlcnZlciAmJiB0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5cbmNvbnN0IHN0YXR1c0NvZGVzOiB7IFtjb2RlOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbn1cblxuZXhwb3J0IHR5cGUgRXJyb3JQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe1xuICByZXMsXG4gIGVycixcbn06IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8RXJyb3JQcm9wcz4gfCBFcnJvclByb3BzIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9XG4gICAgcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSEgOiA0MDRcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcjxQID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAgJiBFcnJvclByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnXG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID1cbiAgICAgIHRoaXMucHJvcHMudGl0bGUgfHxcbiAgICAgIHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8XG4gICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge3N0YXR1c0NvZGV9OiB7dGl0bGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nIH19IC8+XG4gICAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmgyfT57dGl0bGV9LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlczogeyBbazogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBlcnJvcjoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGZvbnRGYW1pbHk6XG4gICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG5cbiAgaDE6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gIH0sXG5cbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0VmVyc2lvbiA9ICcxOC4wLjAtZmM0NmRiYTY3LTIwMjIwMzI5JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCF0eXBlLm5hbWUgJiYgIXR5cGUuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAge1xuICAgIGlmIChkaXNwYXRjaGVyID09PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvcicgKyAnIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuJyArICcxLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4nICsgJzIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4nICsgJzMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG4nICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpO1xuICAgIH1cbiAgfSAvLyBXaWxsIHJlc3VsdCBpbiBhIG51bGwgYWNjZXNzIGVycm9yIGlmIGFjY2Vzc2VkIG91dHNpZGUgcmVuZGVyIHBoYXNlLiBXZVxuICAvLyBpbnRlbnRpb25hbGx5IGRvbid0IHRocm93IG91ciBvd24gZXJyb3IgYmVjYXVzZSB0aGlzIGlzIGluIGEgaG90IHBhdGguXG4gIC8vIEFsc28gaGVscHMgZW5zdXJlIHRoaXMgaXMgaW5saW5lZC5cblxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVRyYW5zaXRpb24oKTtcbn1cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWZlcnJlZFZhbHVlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUlkKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUlkKCk7XG59XG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KTtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RhcnRUcmFuc2l0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG4gIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSB7fTtcbiAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcblxuICB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgc2NvcGUoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0gcHJldlRyYW5zaXRpb247XG5cbiAgICB7XG4gICAgICBpZiAocHJldlRyYW5zaXRpb24gPT09IG51bGwgJiYgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRGaWJlcnNDb3VudCA9IGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLnNpemU7XG5cbiAgICAgICAgaWYgKHVwZGF0ZWRGaWJlcnNDb3VudCA+IDEwKSB7XG4gICAgICAgICAgd2FybignRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiAnICsgJ0lmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuICcgKyAnT3RoZXJ3aXNlIGNvbmN1cnJlbnQgbW9kZSBndWFyYW50ZWVzIGFyZSBvZmYgdGhlIHRhYmxlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gZmFsc2U7XG52YXIgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbDtcbmZ1bmN0aW9uIGVucXVldWVUYXNrKHRhc2spIHtcbiAgaWYgKGVucXVldWVUYXNrSW1wbCA9PT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICAvLyByZWFkIHJlcXVpcmUgb2ZmIHRoZSBtb2R1bGUgb2JqZWN0IHRvIGdldCBhcm91bmQgdGhlIGJ1bmRsZXJzLlxuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIGRldGVjdCBhIHJlcXVpcmUgYW5kIGJ1bmRsZSBhIE5vZGUgcG9seWZpbGwuXG4gICAgICB2YXIgcmVxdWlyZVN0cmluZyA9ICgncmVxdWlyZScgKyBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCA3KTtcbiAgICAgIHZhciBub2RlUmVxdWlyZSA9IG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ107IC8vIGFzc3VtaW5nIHdlJ3JlIGluIG5vZGUsIGxldCdzIHRyeSB0byBnZXQgbm9kZSdzXG4gICAgICAvLyB2ZXJzaW9uIG9mIHNldEltbWVkaWF0ZSwgYnlwYXNzaW5nIGZha2UgdGltZXJzIGlmIGFueS5cblxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbm9kZVJlcXVpcmUuY2FsbChtb2R1bGUsICd0aW1lcnMnKS5zZXRJbW1lZGlhdGU7XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgLy8gd2UncmUgaW4gYSBicm93c2VyXG4gICAgICAvLyB3ZSBjYW4ndCB1c2UgcmVndWxhciB0aW1lcnMgYmVjYXVzZSB0aGV5IG1heSBzdGlsbCBiZSBmYWtlZFxuICAgICAgLy8gc28gd2UgdHJ5IE1lc3NhZ2VDaGFubmVsK3Bvc3RNZXNzYWdlIGluc3RlYWRcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBlcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgJyArICdzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gJyArICdQbGVhc2UgZmlsZSBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzICcgKyAnaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5xdWV1ZVRhc2tJbXBsKHRhc2spO1xufVxuXG52YXIgYWN0U2NvcGVEZXB0aCA9IDA7XG52YXIgZGlkV2Fybk5vQXdhaXRBY3QgPSBmYWxzZTtcbmZ1bmN0aW9uIGFjdChjYWxsYmFjaykge1xuICB7XG4gICAgLy8gYGFjdGAgY2FsbHMgY2FuIGJlIG5lc3RlZCwgc28gd2UgdHJhY2sgdGhlIGRlcHRoLiBUaGlzIHJlcHJlc2VudHMgdGhlXG4gICAgLy8gbnVtYmVyIG9mIGBhY3RgIHNjb3BlcyBvbiB0aGUgc3RhY2suXG4gICAgdmFyIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICBhY3RTY29wZURlcHRoKys7XG5cbiAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgb3V0ZXJtb3N0IGBhY3RgIHNjb3BlLiBJbml0aWFsaXplIHRoZSBxdWV1ZS4gVGhlIHJlY29uY2lsZXJcbiAgICAgIC8vIHdpbGwgZGV0ZWN0IHRoZSBxdWV1ZSBhbmQgdXNlIGl0IGluc3RlYWQgb2YgU2NoZWR1bGVyLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgIH1cblxuICAgIHZhciBwcmV2SXNCYXRjaGluZ0xlZ2FjeSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3k7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLiBPbmx5XG4gICAgICAvLyBzZXQgdG8gYHRydWVgIHdoaWxlIHRoZSBnaXZlbiBjYWxsYmFjayBpcyBleGVjdXRlZCwgbm90IGZvciB1cGRhdGVzXG4gICAgICAvLyB0cmlnZ2VyZWQgZHVyaW5nIGFuIGFzeW5jIGV2ZW50LCBiZWNhdXNlIHRoaXMgaXMgaG93IHRoZSBsZWdhY3lcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIGBhY3RgIGJlaGF2ZWQuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKCk7IC8vIFJlcGxpY2F0ZSBiZWhhdmlvciBvZiBvcmlnaW5hbCBgYWN0YCBpbXBsZW1lbnRhdGlvbiBpbiBsZWdhY3kgbW9kZSxcbiAgICAgIC8vIHdoaWNoIGZsdXNoZWQgdXBkYXRlcyBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2NvcGUgZnVuY3Rpb24gZXhpdHMsIGV2ZW5cbiAgICAgIC8vIGlmIGl0J3MgYW4gYXN5bmMgZnVuY3Rpb24uXG5cbiAgICAgIGlmICghcHJldklzQmF0Y2hpbmdMZWdhY3kgJiYgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gcHJldklzQmF0Y2hpbmdMZWdhY3k7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0aGVuYWJsZVJlc3VsdCA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIGFuIGFzeW5jIGZ1bmN0aW9uIChpLmUuIHJldHVybmVkIGEgcHJvbWlzZSkuIFdhaXRcbiAgICAgIC8vIGZvciBpdCB0byByZXNvbHZlIGJlZm9yZSBleGl0aW5nIHRoZSBjdXJyZW50IHNjb3BlLlxuXG4gICAgICB2YXIgd2FzQXdhaXRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHRoZW5hYmxlID0ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgd2FzQXdhaXRlZCA9IHRydWU7XG4gICAgICAgICAgdGhlbmFibGVSZXN1bHQudGhlbihmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gV2UndmUgZXhpdGVkIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBSZWN1cnNpdmVseSBmbHVzaCB0aGVcbiAgICAgICAgICAgICAgLy8gcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGhlIGNhbGxiYWNrIHRocmV3IGFuIGVycm9yLlxuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWRpZFdhcm5Ob0F3YWl0QWN0ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge30pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF3YXNBd2FpdGVkKSB7XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBlcnJvcignWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiAnICsgJ1RoaXMgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIHRlc3RpbmcgYmVoYXZpb3VyLCAnICsgJ2ludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciAnICsgJ3Njb3Blcy4gJyArICdZb3Ugc2hvdWxkIC0gYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLik7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW5hYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBub3QgYW4gYXN5bmMgZnVuY3Rpb24uIEV4aXQgdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgIC8vIGltbWVkaWF0ZWx5LCB3aXRob3V0IGF3YWl0aW5nLlxuXG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgIC8vIEV4aXRpbmcgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIEZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF9xdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKF9xdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUoX3F1ZXVlKTtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSAvLyBSZXR1cm4gYSB0aGVuYWJsZS4gSWYgdGhlIHVzZXIgYXdhaXRzIGl0LCB3ZSdsbCBmbHVzaCBhZ2FpbiBpblxuICAgICAgICAvLyBjYXNlIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkIGJ5IGEgbWljcm90YXNrLlxuXG5cbiAgICAgICAgdmFyIF90aGVuYWJsZSA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBDb25maXJtIHdlIGhhdmVuJ3QgcmUtZW50ZXJlZCBhbm90aGVyIGBhY3RgIHNjb3BlLCBpbiBjYXNlXG4gICAgICAgICAgICAvLyB0aGUgdXNlciBkb2VzIHNvbWV0aGluZyB3ZWlyZCBsaWtlIGF3YWl0IHRoZSB0aGVuYWJsZVxuICAgICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBmbHVzaCB0aGUgcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgaW5zaWRlIGEgbmVzdGVkIGBhY3RgIHNjb3BlLCB0aGUgcmV0dXJuZWQgdGhlbmFibGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgcmVzb2x2ZXMuIFRoZSBvdXRlciBzY29wZSB3aWxsIGZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF90aGVuYWJsZTIgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpIHtcbiAge1xuICAgIGlmIChwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEpIHtcbiAgICAgIGVycm9yKCdZb3Ugc2VlbSB0byBoYXZlIG92ZXJsYXBwaW5nIGFjdCgpIGNhbGxzLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gJyk7XG4gICAgfVxuXG4gICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCkge1xuICB7XG4gICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBObyBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZC4gRmluaXNoLlxuICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCBmbHVzaGluZyB3b3JrIHVudGlsIHRoZXJlJ3Mgbm9uZSBsZWZ0LlxuICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0ZsdXNoaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQWN0UXVldWUocXVldWUpIHtcbiAge1xuICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgLy8gUHJldmVudCByZS1lbnRyYW5jZS5cbiAgICAgIGlzRmx1c2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgIH0gd2hpbGUgKGNhbGxiYWNrICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgdGhyb3dzLCBsZWF2ZSB0aGUgcmVtYWluaW5nIGNhbGxiYWNrcyBvbiB0aGUgcXVldWUuXG4gICAgICAgIHF1ZXVlID0gcXVldWUuc2xpY2UoaSArIDEpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9