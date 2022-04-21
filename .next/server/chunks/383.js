exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 705:
/***/ ((module) => {

// Exports
module.exports = {
	"login_font_title": "User_login_font_title__AbGou",
	"login_font_input": "User_login_font_input__bN1AP",
	"login_account_layout": "User_login_account_layout__1Q__9",
	"login_account_font_label": "User_login_account_font_label__LFmT0",
	"login_account_font_a": "User_login_account_font_a__dHgCz",
	"register_font_input": "User_register_font_input__UdLGR",
	"add_cloth_cotainer": "User_add_cloth_cotainer__f85Kk",
	"login_form_layout": "User_login_form_layout__7_0P6",
	"textarea_form_control": "User_textarea_form_control__D5zRp"
};


/***/ }),

/***/ 4383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5017);
/* harmony import */ var _components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(705);
/* harmony import */ var _components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _service_user_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6834);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);







const Register_result = ()=>{
    const { username , email  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user
    );
    const handleComplete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/login");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card card-container",
                    id: (_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_form_layout),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_font_title),
                            children: "\uD68C\uC6D0\uAC00\uC785"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default().register_font_input),
                                            children: "\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default().register_font_input),
                                            children: "\uC800\uC758 \uC1FC\uD551\uBAB0\uC744 \uC774\uC6A9\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "username",
                                        className: (_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_font_input),
                                        children: [
                                            "\uC544\uC774\uB514 : ",
                                            username,
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "Password",
                                        className: (_components_css_User_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_font_input),
                                        children: [
                                            "\uC774\uBA54\uC77C : ",
                                            email,
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn btn-primary btn-block",
                                        type: "submit",
                                        onClick: handleComplete,
                                        children: "\uC644\uB8CC"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register_result); // class Register_result extends Component {
 //   constructor(props) {
 //       super(props);
 //       this.state = {
 //         username: this.props.router.query.username,
 //         email: this.props.router.query.email
 //       }
 //   }
 //   componentDidMount() {
 //       const user = AuthService.getCurrentUser();
 //       if(user) {
 //           Router.push("/")
 //       }
 //   }
 //   handleComplete = () => {
 //       Router.push("/login")
 //   }
 //   render() {
 //     const { username, email } = this.state;
 //     return (
 //       <>
 //         <Header />
 //             <div className="col-md-12">
 //             <div className="card card-container">
 //             <label className={styles.login_font_title}>회원가입</label>
 //             <br />
 //             <br />
 //                 <div>
 //                     <div className='form-group'>
 //                         <label className={styles.register_font_input}>회원가입이 완료되었습니다.</label>
 //                         <label className={styles.register_font_input}>저의 쇼핑몰을 이용해 주셔서 감사합니다.</label>
 //                     </div>
 //                     <br />
 //                     <div className="form-group">
 //                         <label htmlFor="username" className={styles.login_font_input}>아이디 : {username} </label>
 //                     </div>
 //                     <div className="form-group">
 //                         <label htmlFor="Password" className={styles.login_font_input}>이메일 : {email} </label>
 //                     </div>
 //                     <br />
 //                     <br />
 //                     <div className="form-group">
 //                       <button className="btn btn-primary btn-block" type="submit" onClick={this.handleComplete}>완료</button>
 //                     </div>
 //                 </div>
 //             </div>
 //         </div>
 //       </>
 //     )
 //   }
 // }
 // export default withRouter(Register_result)


/***/ })

};
;