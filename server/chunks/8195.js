"use strict";
exports.id = 8195;
exports.ids = [8195];
exports.modules = {

/***/ 8195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5168);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9550);
// ** MUI Imports


// ** Hooks Imports

const Badge = (props)=>{
    // ** Props
    const { sx , skin , color  } = props;
    // ** Hook
    const bgColors = (0,src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...props,
        sx: skin === "light" && color ? Object.assign({
            "& .MuiBadge-badge": colors[color]
        }, sx) : sx
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ })

};
;