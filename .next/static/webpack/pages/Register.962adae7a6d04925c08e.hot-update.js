webpackHotUpdate_N_E("pages/Register",{

/***/ "./src/pages/AddCloth.js":
/*!*******************************!*\
  !*** ./src/pages/AddCloth.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddCloth; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/auth.service */ "./service/auth.service.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\pages\\AddCloth.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var AddCloth = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AddCloth, _Component);

  var _super = _createSuper(AddCloth);

  function AddCloth(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddCloth);

    _this = _super.call(this, props);
    _this.state = {
      currentUser: {
        username: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddCloth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentUser = _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["default"].getCurrentUser();
      console.log(currentUser);

      if (!currentUser) {
        console.log("AA");
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 14
        }, this);
      } else {
        console.log("BB");
        this.setState({
          currentUser: currentUser
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
          children: "asdassad"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }]);

  return AddCloth;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0FkZENsb3RoLmpzIl0sIm5hbWVzIjpbIkFkZENsb3RoIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwidXNlcm5hbWUiLCJBdXRoU2VydmljZSIsImdldEN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0lBRXFCQSxROzs7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWjtBQURGLEtBQWI7QUFGaUI7QUFLbEI7Ozs7V0FFRCw2QkFBb0I7QUFDbEIsVUFBTUQsV0FBVyxHQUFHRSw2REFBVyxDQUFDQyxjQUFaLEVBQXBCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaOztBQUVBLFVBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQkksZUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBLDRCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0xELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxhQUFLQyxRQUFMLENBQWM7QUFBRU4scUJBQVcsRUFBRUE7QUFBZixTQUFkO0FBQ0Q7QUFDRjs7O1dBQ0Qsa0JBQVM7QUFDUCwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQURGO0FBTUQ7Ozs7RUEzQm1DTywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZWdpc3Rlci45NjJhZGFlN2E2ZDA0OTI1YzA4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkQ2xvdGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXJyZW50VXNlcjogeyB1c2VybmFtZTogXCJcIiB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQUFcIik7XHJcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJCQlwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlciB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8cD5hc2Rhc3NhZDwvcD5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=