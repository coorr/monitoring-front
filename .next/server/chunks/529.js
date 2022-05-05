exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 7951:
/***/ ((module) => {

// Exports
module.exports = {
	"headerColor": "Header_headerColor__mXmDj",
	"headerLayout": "Header_headerLayout__Pt4Gx",
	"navLink": "Header_navLink__Uof5x",
	"dropdownMenu": "Header_dropdownMenu__DtDIk",
	"dropdownMenuItem": "Header_dropdownMenuItem__0sT0o",
	"orderHeaderLayout": "Header_orderHeaderLayout__7Bs8t",
	"orderHeaderMargin": "Header_orderHeaderMargin__u1spz",
	"headerTitle": "Header_headerTitle__CvQKp",
	"postCodeStyle": "Header_postCodeStyle__ivjve",
	"postHeaderColor": "Header_postHeaderColor__waVXl"
};


/***/ }),

/***/ 1268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2076);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);






const Footer = ()=>{
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isMounted , 1: setIsMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    const handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsActive(true);
        undefined.setState({
            isActive: true
        }, ()=>react_tooltip__WEBPACK_IMPORTED_MODULE_5___default().rebuild()
        );
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    height: "500px"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    borderTop: "0.5px solid #eee",
                    marginTop: "50px"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                style: {
                    height: "100px",
                    maxWidth: "250px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\xa0\xa0\xa0",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                "data-for": "enrich",
                                "data-tip": true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineGoogle, {
                                    size: 40
                                })
                            }),
                            isMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
                                style: {
                                    backgroundColor: "black",
                                    color: "white"
                                },
                                effect: "solid",
                                id: "enrich",
                                // delayHide={1500}
                                getContent: ()=>"wlsdiqkdrk@gmail.com"
                            }),
                            "\xa0\xa0\xa0\xa0",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                href: "https://github.com/coorr",
                                style: {
                                    backgroundColor: "white",
                                    border: 0
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillGithub, {
                                    size: 40
                                })
                            }),
                            "\xa0\xa0\xa0\xa0\xa0\xa0",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                href: "https://coor.tistory.com/",
                                style: {
                                    backgroundColor: "white",
                                    border: 0
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_4__.SiBloglovin, {
                                    size: 40
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;