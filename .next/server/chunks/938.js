"use strict";
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 7938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _multipleFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_multipleFields__WEBPACK_IMPORTED_MODULE_2__]);
_multipleFields__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TitleCard = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-hero flex flex-col gap-y-3 md:px-14 lg:px-36 xl:px-40 2xl:px-72 py-12",
        children: [
            props?.heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-white text-[36px] xl:text-[50px] font-extrabold",
                children: props?.heading
            }),
            props?.headingWithBr && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-white text-[36px] xl:text-[50px] font-extrabold",
                children: [
                    props?.beforeBr,
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    props?.afterBr
                ]
            }),
            props?.paragraph && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-white text-[22px] xl:text-[22px] tracking-[-0.9px]",
                children: props?.paragraph
            }),
            props?.paragraphWithBr && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-white text-[22px] xl:text-[22px] tracking-[-0.9px]",
                children: [
                    props?.beforeBr,
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    props?.afterBr
                ]
            }),
            props?.headingAfterParagraph && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-white text-[36px] xl:text-[50px] font-extrabold",
                children: props?.headingAfterParagraph
            }),
            props?.field && props?.control && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full justify-start",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_multipleFields__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        control: props?.control,
                        start: props?.start ? props?.start : false
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;