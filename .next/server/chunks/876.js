"use strict";
exports.id = 876;
exports.ids = [876];
exports.modules = {

/***/ 9876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ReactSelectField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref = null)=>{
    const [focusState, setFocusState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { title , style , type , errors , defaultValue , onChange , isMulti =false , onFocus , onBlur , capitalize =true , menuPlacement , isHighLight =false , ellipses , ...others } = props;
    const { field , fieldState , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useController)(props);
    let err = lodash__WEBPACK_IMPORTED_MODULE_4___default().get(errors, props.name);
    const handleInputChange = (e1)=>{
        if (props.onInputChange) {
            props.onInputChange(e1);
        }
        setInputValue(e1);
        if (props.handleSelectOption) {
            props.handleSelectOption(e1);
        }
    };
    const customStyles = {
        control: (base, state)=>({
                ...base,
                height: !isMulti ? 46 : "100%",
                minHeight: props.minHeight ? props.minHeight : 40,
                maxHeight: "100%",
                boxShadow: "none",
                border: "1px solid #C6C4C4",
                backgroundColor: props?.backgroundColor ? props?.backgroundColor : "#ffffff",
                borderTopLeftRadius: props?.borderTopLeftRadius ? props?.borderTopLeftRadius : "",
                borderBottomLeftRadius: props?.borderBottomLeftRadius ? props?.borderBottomLeftRadius : "",
                borderTopRightRadius: props?.borderTopRightRadius ? props?.borderTopRightRadius : "",
                borderBottomRightRadius: props?.borderBottomRightRadius ? props?.borderBottomRightRadius : ""
            }),
        menu: (provided, state)=>({
                ...provided,
                zIndex: 50
            })
    };
    const getOptionLabel = (e1)=>{
        if (props.getOptionLabel) {
            return props.getOptionLabel(e1);
        } else {
            return e1[props.showLabel || "label"];
        }
    };
    const onCrossHandler = (event)=>{
    // console.log(
    //   "🚀 ~ file: ReactSelectField.js:47 ~ onCrossHandler ~ event",
    //   event
    // );
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                name: props?.name,
                rules: props?.rules,
                control: props?.control,
                defaultValue: defaultValue,
                render: ({ field: { onChange  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...field,
                        ...others,
                        ref: ref || field.ref,
                        components: props?.CustomOption && {
                            Option: props?.CustomOption
                        },
                        isLoading: props.isLoading || false,
                        noOptionsMessage: ()=>null,
                        getOptionLabel: getOptionLabel,
                        styles: customStyles,
                        isSearchable: true,
                        options: props?.optionData,
                        placeholder: "",
                        menuPlacement: menuPlacement || "auto",
                        className: `bg-white placeholder:text-black 
                            placeholder:font-normal 
                            placeholder:text-base ui-control-input focus:border-teal-c-900 rounded-md ${capitalize && "capitalize"}`,
                        isClearable: true,
                        defaultOptions: true,
                        onChange: (val, action)=>{
                            onChange(val);
                            if (props.onChange) {
                                props.onChange(val, action);
                            }
                        },
                        value: field.value,
                        menuIsOpen: props.menuIsOpen || undefined,
                        onFocus: ()=>{
                            setFocusState(true);
                            if (props.onFocus) {
                                props.onFocus(e);
                            }
                        },
                        onBlur: (e1)=>{
                            field.onBlur;
                            setFocusState(false);
                            if (props.onBlur) {
                                props.onBlur(e1);
                            }
                        },
                        isDisabled: props.isDisabled,
                        onInputChange: handleInputChange,
                        getOptionValue: (option)=>option[props.showLabel || "label"],
                        // styles={customStyles}
                        onMenuClose: ()=>onCrossHandler(),
                        isOptionDisabled: (option)=>option.disabled,
                        isMulti: isMulti,
                        ...others
                    })
            }),
            props.rules && err && props.rules && err?.message ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " text-xs text-red-600 h-3",
                id: "email-error",
                children: props.rules && err && props.rules && err?.message
            }) : ""
        ]
    });
});
ReactSelectField.displayName = "ReactSelectField";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactSelectField);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;