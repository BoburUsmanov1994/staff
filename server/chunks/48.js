"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 1048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
// ** MUI Import




const FallbackSpinner = ({ sx  })=>{
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: 80,
                fill: "none",
                height: 44,
                viewBox: "0 0 268 150",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        rx: "25.1443",
                        width: "50.2886",
                        height: "143.953",
                        fill: theme.palette.primary.main,
                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        rx: "25.1443",
                        width: "50.2886",
                        height: "143.953",
                        fillOpacity: "0.4",
                        fill: "url(#paint0_linear_7821_79167)",
                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        rx: "25.1443",
                        width: "50.2886",
                        height: "143.953",
                        fill: theme.palette.primary.main,
                        transform: "matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        rx: "25.1443",
                        width: "50.2886",
                        height: "143.953",
                        fill: theme.palette.primary.main,
                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        rx: "25.1443",
                        width: "50.2886",
                        height: "143.953",
                        fillOpacity: "0.4",
                        fill: "url(#paint1_linear_7821_79167)",
                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        rx: "25.1443",
                        width: "50.2886",
                        height: "143.953",
                        fill: theme.palette.primary.main,
                        transform: "matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                y1: "0",
                                x1: "25.1443",
                                x2: "25.1443",
                                y2: "143.953",
                                id: "paint0_linear_7821_79167",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                        offset: "1",
                                        stopOpacity: "0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                y1: "0",
                                x1: "25.1443",
                                x2: "25.1443",
                                y2: "143.953",
                                id: "paint1_linear_7821_79167",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                        offset: "1",
                                        stopOpacity: "0"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default()), {
                disableShrink: true,
                sx: {
                    mt: 6
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackSpinner);


/***/ })

};
;