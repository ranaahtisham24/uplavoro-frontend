"use strict";
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 5905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Button = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "submit",
        className: `${props?.style ? props?.style : "text-sm"} rounded-md py-2 px-6 ${props?.ring ? "ring-1 ring-inset ring-white" : ""}`,
        onClick: props?.onClick,
        children: props?.title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "TX": () => (/* binding */ logoutUser),
/* harmony export */   "a$": () => (/* binding */ registerUser),
/* harmony export */   "pH": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var _axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _slices_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__]);
_axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const registerUser = (data)=>async (dispatch)=>{
        try {
            //     let obj = {
            //         "name" : "dsfsd",
            //         "surname" : "",
            //         "email" : "customer13@uplarovo.com",
            //         "phone" : "",
            //         "fiscal_code" : "",
            //         "gender" : "M",
            //         "birth_date" : "2023-01-01",
            //         "birth_nation" : "",
            //         "birth_municipality" : "",
            //         "residence_address" : "",
            //         "residence_municipality" : "",
            //         "residence_province" : "",
            //         "residence_postalcode" : "",
            //         "password" : "112233"
            // }
            const res = await (0,_axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__/* .axiosBaseQuery */ .Z)({
                method: "POST",
                url: "/api/register",
                body: data
            });
        } catch (e) {}
    };
const loginUser = (router, data)=>async (dispatch)=>{
        try {
            let obj = {
                email: data?.email,
                password: data?.password,
                "source-domain": "web"
            };
            const res = await (0,_axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__/* .axiosBaseQuery */ .Z)({
                method: "POST",
                url: "/api/login",
                body: obj
            });
            if (res?.data?.code == 0) {
                dispatch((0,_slices_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .login */ .x4)(res?.data?.data));
                router.push("/profile");
            }
        } catch (e) {
            console.log("\uD83D\uDE80 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
        }
    };
const getUser = (token)=>async (dispatch)=>{
        try {
            const res = await (0,_axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__/* .axiosBaseQuery */ .Z)({
                method: "GET",
                url: "/api/user",
                token: token
            });
            if (res?.data?.code == 0) {
                dispatch((0,_slices_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .setUser */ .av)(res?.data?.data));
            }
        } catch (e) {
            console.log("\uD83D\uDE80 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
        }
    };
const logoutUser = (token)=>async (dispatch)=>{
        try {
            const res = await (0,_axiosBaseQuery__WEBPACK_IMPORTED_MODULE_0__/* .axiosBaseQuery */ .Z)({
                method: "GET",
                url: "/api/logout",
                token: token
            });
            if (res?.data?.code == 0) {
                dispatch((0,_slices_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .logout */ .kS)());
            }
        } catch (e) {
            console.log("\uD83D\uDE80 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ axiosBaseQuery)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosBaseQuery = (request)=>{
    let response = (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
        baseURL: "https://uplarovo.arfatsol.com",
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${request?.token}`
        },
        method: request?.method,
        url: request?.url,
        params: request?.params,
        data: request?.body
    });
    return response;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "av": () => (/* binding */ setUser),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports authSlice, authRequestLoading, invalidRequest, register, forgotPassword, resetPassword, reloadPage */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState: {
        isLoading: false,
        error: "",
        token: null,
        user: {},
        user_id: "",
        isAuthenticated: false,
        message: ""
    },
    reducers: {
        authRequestLoading: (state, action)=>{
            state.isLoading = true;
            state.error = "";
            state.token = "";
            state.isAuthenticated = false;
            state.user = {};
        },
        invalidRequest: (state, action)=>{
            state.error = action.payload;
            state.isLoading = false;
            state.user = {};
            state.token = "";
            state.isAuthenticated = false;
        },
        login: (state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.user_id = action.payload.user.id;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = "";
            state.message = "Login Success";
        },
        logout: (state)=>{
            state.user = {};
            state.user_id = "";
            state.token = null;
            state.isLoading = false;
            state.error = "";
            state.message = "Logout Success";
            state.isAuthenticated = false;
        },
        register: (state, action)=>{
            state.user = action.payload.data;
            state.token = action.payload.data.token;
            state.user_id = action.payload.data.id;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = "";
            state.message = "Registered Successfully.";
        },
        setUser: (state, action)=>{
            state.user = action.payload;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);
const { authRequestLoading , invalidRequest , login , logout , register , forgotPassword , resetPassword , reloadPage , setUser  } = authSlice.actions;


/***/ })

};
;