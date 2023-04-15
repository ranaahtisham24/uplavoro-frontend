"use strict";
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 7751:
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




const CheckBox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { field , fieldState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)(props);
    const { title , style , type , errors , defaultValue , labelClass , disabled , ...others } = props;
    let err = lodash__WEBPACK_IMPORTED_MODULE_3___default().get(errors, props.name);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
            name: props?.name,
            control: props?.control,
            rules: props?.rules,
            defaultValue: defaultValue,
            render: ({ field: { onChange , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: `cursor-pointer flex gap-x-2 text-base ${labelClass ? labelClass : "text-black"} ${props.rules && errors && err && "text-red-600"} ${props?.disabled ? "text-gray-200 cursor-not-allowed" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...field,
                                checked: field.value == "1" || field.value === true ? true : false,
                                type: "checkbox",
                                disabled: disabled,
                                onChange: (e)=>{
                                    onChange(e.target.checked);
                                    if (props.onChange) {
                                        props.onChange(e);
                                    }
                                },
                                style: style ? style : {},
                                className: "min-w-[20px] accent-hero border-gray-300"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "px-2",
                                children: title
                            })
                        ]
                    })
                })
        })
    });
});
CheckBox.displayName = "CheckBox";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;