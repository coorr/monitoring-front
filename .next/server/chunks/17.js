exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 7951:
/***/ ((module) => {

// Exports
module.exports = {
	"headerColor": "Header_headerColor__mXmDj",
	"headerLayout": "Header_headerLayout__Pt4Gx",
	"navLink": "Header_navLink__Uof5x",
	"dropdownMenu": "Header_dropdownMenu__DtDIk",
	"dropdownMenuItem": "Header_dropdownMenuItem__0sT0o"
};


/***/ }),

/***/ 5017:
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
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7951);
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_user_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6834);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4978);








const Header = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: admin1 , 1: setAdmin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const admin = _service_user_Auth_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getCurrentUser */ .Z.getCurrentUser();
        if (admin) {
            setCurrentUser(true);
            if (admin.roles[0] === "ROLE_ADMIN") {
                setAdmin(true);
            }
        }
    });
    const showDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setShow(true);
    }, [
        show
    ]);
    const hideDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setShow(false);
    }, [
        show
    ]);
    const logOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        _service_user_Auth_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].logout */ .Z.logout();
        dispatch({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__/* .LOG_OUT_REQUEST */ .Xd
        });
        setCurrentUser(false);
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/");
    }, []);
    const login = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("login");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
        expand: "lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            className: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerLayout),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
                    href: "/",
                    className: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerColor),
                    children: "COOR"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
                        className: "ms-auto",
                        children: [
                            admin1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                href: "addItem",
                                id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().navLink),
                                children: "\uB4F1\uB85D\uD558\uAE30"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown, {
                                title: "Store",
                                id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenu),
                                show: show,
                                onMouseEnter: showDropdown,
                                onMouseLeave: hideDropdown,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                        href: "addItem",
                                        id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenuItem),
                                        children: "New arrivals"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                        href: "#action/3.2",
                                        id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenuItem),
                                        children: "Outwear"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                        href: "#action/3.3",
                                        id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenuItem),
                                        children: "Knitwear"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                        href: "#action/3.4",
                                        id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenuItem),
                                        children: "Sweatshirt"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                        href: "#action/3.4",
                                        id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenuItem),
                                        children: "Shirt"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                        href: "#action/3.4",
                                        id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenuItem),
                                        children: "T-shirt"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                href: "help",
                                id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().navLink),
                                children: "help"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                href: "register",
                                id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().navLink),
                                children: "cart"
                            }),
                            currentUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().navLink),
                                onClick: logOut,
                                children: "LogOut"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().navLink),
                                onClick: login,
                                children: "login"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;