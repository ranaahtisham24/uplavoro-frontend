"use strict";
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 8216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/send.4bdb6bea.svg","height":37,"width":37,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 6465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactSelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9876);
/* harmony import */ var _public_assets_icons_send_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8216);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reactSelectField__WEBPACK_IMPORTED_MODULE_2__]);
_reactSelectField__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MultipleFields = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex w-full ${props?.start ? "justify-start" : "justify-center"} items-end`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-y-1 w-[40%]",
                children: [
                    props?.start ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "text-white text-[22px] xl:text-[30px]",
                        children: "Select job category"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white rounded-l-md",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reactSelectField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            placeholder: "What type of job are you looking for?",
                            name: "allergen_type",
                            control: props?.control,
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            minHeight: "40px"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-y-1 w-[40%]",
                children: [
                    props?.start ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "text-white text-[22px] xl:text-[30px]",
                        children: "Select a city"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white rounded-r-md",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reactSelectField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            placeholder: "Start typing a city",
                            name: "allergen_type",
                            control: props?.control,
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px",
                            minHeight: "40px"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-1 bg-white rounded-md p-[1px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_assets_icons_send_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "",
                    style: {
                        width: "44px",
                        height: "44px"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleFields);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;