"use strict";
exports.id = 8198;
exports.ids = [8198];
exports.modules = {

/***/ 1283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
// ** React Imports


// ** MUI Imports


const Sidebar = (props)=>{
    // ** Props
    const { sx , show , direction , children , hideBackdrop , onOpen , onClose , backDropClick  } = props;
    const handleBackdropClick = ()=>{
        if (backDropClick) {
            backDropClick();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (show && onOpen) {
            onOpen();
        }
        if (show === false && onClose) {
            onClose();
        }
    }, [
        onClose,
        onOpen,
        show
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    top: 0,
                    height: "100%",
                    zIndex: "drawer",
                    position: "absolute",
                    transition: "all 0.25s ease-in-out",
                    backgroundColor: "background.paper",
                    ...show ? {
                        opacity: 1
                    } : {
                        opacity: 0
                    },
                    ...direction === "right" ? {
                        left: "auto",
                        right: show ? 0 : "-100%"
                    } : {
                        right: "auto",
                        left: show ? 0 : "-100%"
                    },
                    ...sx
                },
                children: children
            }),
            hideBackdrop ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_2___default()), {
                open: show,
                transitionDuration: 250,
                onClick: handleBackdropClick,
                sx: {
                    position: "absolute",
                    zIndex: (theme)=>theme.zIndex.drawer - 1
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);
Sidebar.defaultProps = {
    direction: "left"
};


/***/ }),

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getInitials)
/* harmony export */ });
// ** Returns initials from string
const getInitials = (string)=>string.split(/\s/).reduce((response, word)=>response += word.slice(0, 1), "");


/***/ })

};
;