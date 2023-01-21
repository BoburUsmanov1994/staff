"use strict";
exports.id = 3921;
exports.ids = [3921];
exports.modules = {

/***/ 3921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_core_components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1609);
// ** MUI Imports



// ** Custom Icon Import

// Styled Box component
const Box = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()))(()=>({
        width: 20,
        height: 20,
        borderWidth: 3,
        borderRadius: "50%",
        borderStyle: "solid"
    }));
const StepperCustomDot = (props)=>{
    // ** Props
    const { active , completed , error  } = props;
    // ** Hooks
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            icon: "mdi:alert",
            fontSize: 20,
            color: theme.palette.error.main,
            transform: "scale(1.2)"
        });
    } else if (completed) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            icon: "mdi:check-circle",
            fontSize: 20,
            color: theme.palette.primary.main,
            transform: "scale(1.2)"
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Box, {
            sx: {
                borderColor: active ? "primary.main" : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.primary.main, 0.3)
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepperCustomDot);


/***/ })

};
;