"use strict";
exports.id = 7294;
exports.ids = [7294];
exports.modules = {

/***/ 1609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5863);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
// ** Icon Imports


const IconifyIcon = ({ icon , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon,
        fontSize: "1.5rem",
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconifyIcon);


/***/ }),

/***/ 7071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8369);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9550);
// ** MUI Imports


// ** Third Party Imports

// ** Hooks Imports

const Chip = (props)=>{
    // ** Props
    const { sx , skin , color , rounded  } = props;
    // ** Hook
    const bgColors = (0,src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const colors = {
        primary: {
            ...bgColors.primaryLight
        },
        secondary: {
            ...bgColors.secondaryLight
        },
        success: {
            ...bgColors.successLight
        },
        error: {
            ...bgColors.errorLight
        },
        warning: {
            ...bgColors.warningLight
        },
        info: {
            ...bgColors.infoLight
        }
    };
    const propsToPass = {
        ...props
    };
    propsToPass.rounded = undefined;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...propsToPass,
        variant: "filled",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
            "MuiChip-rounded": rounded,
            "MuiChip-light": skin === "light"
        }),
        sx: skin === "light" && color ? Object.assign(colors[color], sx) : sx
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chip);


/***/ })

};
;