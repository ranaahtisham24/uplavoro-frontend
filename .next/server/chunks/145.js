"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 4981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/award.d2164f1b.svg","height":29,"width":29,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/calendar-remove.176ec7a0.svg","height":29,"width":29,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/location.56351112.svg","height":29,"width":29,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/timer.6870f0bd.svg","height":29,"width":29,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 8145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ jobCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/assets/icons/star-slash.svg
/* harmony default export */ const star_slash = ({"src":"/_next/static/media/star-slash.166ea3b5.svg","height":28,"width":28,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./public/assets/icons/location.svg
var icons_location = __webpack_require__(5546);
// EXTERNAL MODULE: ./public/assets/icons/award.svg
var award = __webpack_require__(4981);
// EXTERNAL MODULE: ./public/assets/icons/timer.svg
var timer = __webpack_require__(2105);
// EXTERNAL MODULE: ./public/assets/icons/calendar-remove.svg
var calendar_remove = __webpack_require__(2800);
;// CONCATENATED MODULE: ./src/components/jobOffers/jobCard.js








const JobCard = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ` ${props?.callFrom === "profile" ? "md:w-[50%] lg:w-[48%] xl:w-[32%]" : "md:w-[32%] xl:w-[32%]"}  h-[304px] flex flex-col gap-y-2 bg-white border border-gray-100 rounded-[12px] p-6`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-[13px] tracking-[-0.39px] text-[#707070] font-semibold",
                        children: "Published 4 days ago"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: star_slash,
                        alt: "",
                        style: {
                            width: "24px",
                            height: "24px"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-[18px] tracking-[-0.69px] text-black font-semibold break-words",
                    children: "Archive clerk part time warehouse employee"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-y-4 pt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-x-4 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: icons_location/* default */.Z,
                                alt: "",
                                style: {
                                    width: "24px",
                                    height: "24px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[13px] tracking-[-0.39px] text-[#707070] font-semibold",
                                children: "Published 4 days ago"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-x-4 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: award/* default */.Z,
                                alt: "",
                                style: {
                                    width: "24px",
                                    height: "24px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[13px] tracking-[-0.39px] text-[#707070] font-semibold",
                                children: "Published 4 days ago"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-x-4 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: timer/* default */.Z,
                                alt: "",
                                style: {
                                    width: "24px",
                                    height: "24px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[13px] tracking-[-0.39px] text-[#707070] font-semibold",
                                children: "Published 4 days ago"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-x-4 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: calendar_remove/* default */.Z,
                                alt: "",
                                style: {
                                    width: "24px",
                                    height: "24px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[13px] tracking-[-0.39px] text-[#707070] font-semibold",
                                children: "Published 4 days ago"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const jobCard = (JobCard);


/***/ })

};
;