"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7951);
/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_user_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6834);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4978);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3160);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _service_item_Item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6451);












const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: admin , 1: setAdmin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: userId , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: basket , 1: setBasket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: userItemLength , 1: setUserItemLength  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { currentItem , itemLength  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.item
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const adminData = _service_user_Auth_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getCurrentUser */ .Z.getCurrentUser();
        console.log("11");
        if (admin === "" && adminData !== null) {
            setCurrentUser(true);
            setAdmin(null);
            setUserId(adminData.id);
            if (adminData.roles[0] === "ROLE_ADMIN") {
                setAdmin(adminData);
            }
        }
    }, [
        userId,
        currentUser,
        admin
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const basketLocal = _service_item_Item_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getCurrentItem */ .Z.getCurrentItem();
        console.log("22");
        if (userId === "" && !basket && basketLocal !== null) {
            setBasket(basketLocal);
        }
    }, [
        userId,
        basket
    ]);
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
        // router.push("/")
        window.location.reload();
    });
    const login = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        console.log("login \uC2DC\uB3C4 \uC911");
        router.push("/user/login");
    });
    const onClickTest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        router.push("/help");
    });
    console.log(userId);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
            expand: "lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                className: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerLayout),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
                        href: "/",
                        className: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerColor),
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
                                admin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                    onClick: ()=>router.push("/addItem")
                                    ,
                                    id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLink),
                                    children: "\uB4F1\uB85D\uD558\uAE30"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown, {
                                    title: "Store",
                                    id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().dropdownMenu),
                                    show: show,
                                    onMouseEnter: showDropdown,
                                    onMouseLeave: hideDropdown,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                            onClick: onClickTest,
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().dropdownMenuItem),
                                            children: "Outwear"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                            onClick: ()=>router.push("/help")
                                            ,
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().dropdownMenuItem),
                                            children: "Knitwear"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                            onClick: ()=>router.push("/help")
                                            ,
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().dropdownMenuItem),
                                            children: "Sweatshirt"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                            onClick: ()=>router.push("/help")
                                            ,
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().dropdownMenuItem),
                                            children: "Shirt"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {
                                            onClick: ()=>router.push("/help")
                                            ,
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().dropdownMenuItem),
                                            children: "T-shirt"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                    onClick: ()=>router.push("/help")
                                    ,
                                    id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLink),
                                    children: "info"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                    onClick: ()=>router.push("/help")
                                    ,
                                    id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLink),
                                    children: "help"
                                }),
                                currentUser ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLink),
                                            onClick: logOut,
                                            children: "LogOut"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                            id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLink),
                                            onClick: ()=>router.push("/mypage/list")
                                            ,
                                            children: "MyPage"
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                    id: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().navLink),
                                    href: "/user/login",
                                    children: "login"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                                    onClick: ()=>router.push("/basket")
                                    ,
                                    children: "card"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;