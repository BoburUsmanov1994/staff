"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 9550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5026);
// ** MUI Imports

// ** Util Import

const UseBgColor = ()=>{
    // ** Hooks
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    return {
        primaryFilled: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main
        },
        primaryLight: {
            color: theme.palette.primary.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.12)
        },
        secondaryFilled: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main
        },
        secondaryLight: {
            color: theme.palette.secondary.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.secondary.main, 0.12)
        },
        successFilled: {
            color: theme.palette.success.contrastText,
            backgroundColor: theme.palette.success.main
        },
        successLight: {
            color: theme.palette.success.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.success.main, 0.12)
        },
        errorFilled: {
            color: theme.palette.error.contrastText,
            backgroundColor: theme.palette.error.main
        },
        errorLight: {
            color: theme.palette.error.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.error.main, 0.12)
        },
        warningFilled: {
            color: theme.palette.warning.contrastText,
            backgroundColor: theme.palette.warning.main
        },
        warningLight: {
            color: theme.palette.warning.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.warning.main, 0.12)
        },
        infoFilled: {
            color: theme.palette.info.contrastText,
            backgroundColor: theme.palette.info.main
        },
        infoLight: {
            color: theme.palette.info.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.info.main, 0.12)
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseBgColor);


/***/ }),

/***/ 5026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ hexToRGBA)
/* harmony export */ });
/**
 ** Hex color to RGBA color
 */ const hexToRGBA = (hexCode, opacity)=>{
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


/***/ })

};
;