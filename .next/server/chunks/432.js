"use strict";
exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const InputField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { field , fieldState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)(props);
    const [focusState, setFocusState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { title , style , isHighLight =false , type , errors , defaultValue , customStyle , onChange , ellipses , ...others } = props;
    let err = lodash__WEBPACK_IMPORTED_MODULE_3___default().get(errors, props.name);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${customStyle ? customStyle : "h-[46px]"}  relative w-full border border-gray-100 ${style ? "bg-white" : ""} bg-white focus-within:bg-white outlineStyle rounded ${props?.rules && err ? "focus-within:border-red-600 border-red-600" : "focus-within:border-teal-c-900"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                        name: props?.name,
                        control: props?.control,
                        rules: props?.rules,
                        defaultValue: defaultValue,
                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...props,
                                ...field,
                                type: props?.type ? props?.type : "",
                                onBlurCapture: ()=>setFocusState(false),
                                onFocus: ()=>setFocusState(true),
                                onChange: (e)=>{
                                    field.onChange(e.target.value);
                                    if (props.onChange) {
                                        props.onChange(e, props?.name);
                                    }
                                },
                                min: type === "number" && !props.min ? 0 : props.min,
                                disabled: props.isDisabled,
                                placeholder: props.placeholder ? props.placeholder : "",
                                value: field.value,
                                className: `block w-full h-full p-2 appearance-none focus:outline-none bg-transparent focus:ring-0 text-base font-light text-black-300 ${props.isDisabled && "bg-gray-50 cursor-not-allowed"}  ${isHighLight && " bg-highLight  "}  `,
                                ...others
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `pointer-events-none absolute ml-2 left-0 duration-300 origin-0 mr-2 inline-block px-1 font-normal  ${props?.rules && err ? "text-red-600" : "text-gray-600"}  ${focusState || !field.value == "" || field.value == "0" ? "-top-2 duration-300 bg-[white] text-xs rounded-lg" : `top-2 duration-300 text-base xl:top-1 ${ellipses && "w-[98%] text-ellipsis overflow-hidden whitespace-nowrap"}`} 
            ${isHighLight && " bg-highLight  "}  
            `
                    })
                ]
            }),
            props.rules && err && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " text-xs text-red-600 h-3",
                id: "email-error",
                children: props.rules && err && props.rules && err?.message
            })
        ]
    });
});
InputField.displayName = "InputField";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;