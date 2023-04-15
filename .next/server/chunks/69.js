exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 6726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/message-question.8cc9f6df.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 0:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DatePickerFeild = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const [focusState, setFocusState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { title , style , type , errors , defaultValue , isDisabled , dateTime =true , customStyles , onChange , maxDate , isHighLight =false , ...others } = props;
    const { field , fieldState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useController)(props);
    let err = lodash__WEBPACK_IMPORTED_MODULE_5___default().get(errors, props.name);
    // const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current.setOpen(false)
    // }, [])
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `h-[46px] flex items-center relative ${customStyles && customStyles} border border-[#C6C4C4] bg-white  outlineStyle rounded  ${props.rules && err ? "focus-within:border-red-600 border-red-600" : "focus-within:border-teal-c-900"}
        ${isHighLight && " bg-highLight  "}

        `,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "name",
                        className: ` z-10 pointer-events-none absolute bg-white left-2 -mt-px inline-block  px-2  ${props.rules && err ? "text-red-600" : "text-gray-600"} ${focusState || field?.value ? "-top-2 duration-300 text-xs rounded-lg" : "top-1.5 duration-200 text-base font-normal"}
          ${isHighLight && " bg-highLight  "}

          `,
                        children: [
                            title,
                            " ",
                            props?.rules?.required?.value === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500 mt-10",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
                        autoFocus: false,
                        name: props?.name,
                        control: props?.control,
                        rules: props?.rules,
                        defaultValue: defaultValue,
                        render: ({ field: { ref  }  })=>{
                            function validDate(x) {
                                let y = new Date(x);
                                return y instanceof Date && !isNaN(y);
                            }
                            let updateDate = new Date(field?.value);
                            if (!validDate(field?.value)) {
                                updateDate = "";
                            }
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_2___default()), {
                                ...field,
                                ref: (elem)=>{
                                    elem && ref(elem.input);
                                },
                                autoComplete: "off",
                                autoFocus: false,
                                showTimeInput: dateTime,
                                showTimeSelectOnly: props.showTimeSelectOnly,
                                onChange: (e)=>{
                                    field.onChange(e);
                                    if (onChange) {
                                        onChange(e, props?.name);
                                    }
                                },
                                selected: updateDate,
                                //new change for handling reset (start)
                                value: defaultValue,
                                //(end)
                                onFocus: ()=>setFocusState(true),
                                onBlur: ()=>{
                                    field.onBlur;
                                    setFocusState(false);
                                },
                                dateFormat: dateTime ? "MM/dd/yyyy h:mm aa" : "MM/dd/yyyy",
                                className: `block py-1 px-3 h-full w-full appearance-none relative focus:outline-none bg-transparent focus:ring-0 font-normal text-base text-black-c-400 ${isDisabled ? "opacity-50" : ""}                     ${isHighLight && " focus:bg-highLight   "}                `,
                                placeholder: props.placeholder ? props.placeholder : "",
                                disabled: isDisabled,
                                maxDate: props?.maxDate,
                                minDate: props?.minDate,
                                ...others
                            });
                        }
                    })
                ]
            }),
            props.rules && err && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " text-xs text-red-600 h-3",
                id: "email-error",
                children: props.rules && err && props.rules && err.message
            })
        ]
    });
});
DatePickerFeild.displayName = "DatePickerFeild";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePickerFeild);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5905);
/* harmony import */ var _common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9876);
/* harmony import */ var _common_inputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(432);
/* harmony import */ var _common_datePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var _public_assets_icons_message_question_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6726);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__, _common_inputField__WEBPACK_IMPORTED_MODULE_7__, _common_datePicker__WEBPACK_IMPORTED_MODULE_8__, _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__, _common_inputField__WEBPACK_IMPORTED_MODULE_7__, _common_datePicker__WEBPACK_IMPORTED_MODULE_8__, _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CompleteProfileForm = (props)=>{
    const { control , formState: { errors  } , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({});
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const onSubmit = (data)=>{
        let defaultPassword = "Pa$$word123";
        if (data) {
            for(let key in data){
                if (data[key] === undefined) {
                    data[key] = "";
                }
            }
            let postData = {
                ...data,
                password: defaultPassword,
                type: "web"
            };
            dispatch((0,_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_11__/* .registerUser */ .a$)(postData));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (props?.user) {
            setValue("name", props?.user?.name);
            setValue("surname", props?.user?.surname);
            setValue("email", props?.user?.email);
            setValue("phone", props?.user?.phone);
            setValue("gender", props?.user?.gender);
            setValue("birth_date", props?.user?.birth_date);
        }
    }, [
        props?.user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        className: "w-full",
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `w-full flex justify-start text-[18px] xl:text-[20px] ${props?.callFrom === "from_profile" ? "bg-white py-2 2xl:px-0" : "bg-footer-bar py-12 md:px-20 lg:px-36 xl:px-40 2xl:px-72"}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${props?.callFrom === "from_profile" ? "2xl:w-[100%]" : "md:w-[100%] lg:w-[75%] xl:w-[60%]"} flex flex-col gap-y-6`,
                children: [
                    props?.callFrom === "from_profile" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-black text-[24px] xl:text-[30px] tracking-[-0.9px]",
                        children: "Complete your profile with this information to complete register and enter your reserved area"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px] text-[18px] xl:text-[20px]",
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "name",
                                        placeholder: "Mario",
                                        control: control,
                                        rules: {
                                            required: {
                                                value: true,
                                                message: "Name required!"
                                            }
                                        },
                                        errors: errors
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Surname"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "surname",
                                        placeholder: "Rossi",
                                        control: control
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Tax ID code"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "tax_id_code",
                                        placeholder: "MRRSI97E08A944Y",
                                        control: control
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-x-2 w-[49%]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col w-[25%]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-black tracking-[-0.6px]",
                                                children: "Gender"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                name: "gender",
                                                control: control,
                                                defaultValue: {
                                                    id: "male",
                                                    label: "M"
                                                },
                                                optionData: [
                                                    {
                                                        id: "male",
                                                        label: "M"
                                                    },
                                                    {
                                                        id: "female",
                                                        label: "F"
                                                    }
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col w-[75%]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-black tracking-[-0.6px]",
                                                children: "Birth Date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_datePicker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                name: "birth_date",
                                                title: "08-05-1997",
                                                control: control,
                                                dateTime: false,
                                                minDate: new Date()
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Birth nation"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "birth_nation",
                                        placeholder: "Italia",
                                        control: control
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Birth City"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "birth_city",
                                        placeholder: "Bologna",
                                        control: control
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Residential address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "residence_address",
                                        placeholder: "Mura di Porta Galliera, 3",
                                        control: control
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-x-2 w-[49%]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col w-[75%]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-black tracking-[-0.6px]",
                                                children: "Residential city"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                name: "residence_city",
                                                placeholder: "Bologna",
                                                control: control
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col w-[25%]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-black tracking-[-0.6px]",
                                                children: "CAP"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                name: "residence_cap",
                                                placeholder: "40124",
                                                control: control
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Living address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "living_address",
                                        placeholder: "Mura di Porta Galliera, 3",
                                        control: control
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-x-2 w-[49%]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col w-[75%]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-black tracking-[-0.6px]",
                                                children: "Living city"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                name: "living_city",
                                                placeholder: "Bologna",
                                                control: control
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col w-[25%]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-black tracking-[-0.6px]",
                                                children: "CAP"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                name: "living_cap",
                                                placeholder: "40124",
                                                control: control
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "email",
                                        placeholder: "orlandi.enri@gmail.com",
                                        control: control,
                                        rules: {
                                            required: {
                                                value: true,
                                                message: "Email required!"
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Please enter valid email"
                                            }
                                        },
                                        errors: errors
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[49%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-black tracking-[-0.6px]",
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_inputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        name: "phone",
                                        placeholder: "3273498412",
                                        control: control
                                    })
                                ]
                            })
                        ]
                    }),
                    props?.callFrom === "from_profile" ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-col w-[49%]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-black tracking-[-0.6px]",
                                children: "How did you find out about UP?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_reactSelectField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                name: "how_to_find",
                                placeholder: "Via Facebook",
                                control: control
                            })
                        ]
                    }),
                    props?.callFrom === "from_profile" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-hero tracking-[-0.6px]",
                        children: "Attention, the data entered will not be modifiable (excluding telephone and email) verify correctness before saving!"
                    }),
                    props?.callFrom === "from_profile" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-hero tracking-[-0.6px]",
                                children: "Vuoi modificare i tuoi dati? Contatta il supporto"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: _public_assets_icons_message_question_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                alt: "",
                                style: {
                                    width: "24px",
                                    height: "24px"
                                }
                            })
                        ]
                    }),
                    props?.callFrom === "from_profile" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: "Save settings",
                        ring: true,
                        style: "w-full py-4 bg-[#B433F8] text-white"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompleteProfileForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;