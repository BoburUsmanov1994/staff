"use strict";
exports.id = 4560;
exports.ids = [4560];
exports.modules = {

/***/ 4560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_core_components_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1609);
/* harmony import */ var src_core_hooks_useSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1514);
// ** React Imports


// ** Next Import

// ** MUI Imports





// ** Icon Imports

// ** Hook Import

const MenuItemWrapper = ({ children , option  })=>{
    if (option.href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),
            href: option.href,
            ...option.linkProps,
            sx: {
                px: 4,
                py: 1.5,
                width: "100%",
                display: "flex",
                color: "inherit",
                alignItems: "center",
                textDecoration: "none"
            },
            children: children
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    }
};
const OptionsMenu = (props)=>{
    // ** Props
    const { icon , options , menuProps , iconProps , leftAlignMenu , iconButtonProps  } = props;
    // ** State
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // ** Hook & Var
    const { settings  } = (0,src_core_hooks_useSettings__WEBPACK_IMPORTED_MODULE_9__/* .useSettings */ .r)();
    const { direction  } = settings;
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                "aria-haspopup": "true",
                onClick: handleClick,
                ...iconButtonProps,
                children: icon ? icon : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_icon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    icon: "mdi:dots-vertical",
                    ...iconProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4___default()), {
                keepMounted: true,
                anchorEl: anchorEl,
                onClose: handleClose,
                open: Boolean(anchorEl),
                ...!leftAlignMenu && {
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: direction === "ltr" ? "right" : "left"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: direction === "ltr" ? "right" : "left"
                    }
                },
                ...menuProps,
                children: options.map((option, index)=>{
                    if (typeof option === "string") {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                            onClick: handleClose,
                            children: option
                        }, index);
                    } else if ("divider" in option) {
                        return option.divider && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                            ...option.dividerProps
                        }, index);
                    } else {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                            ...option.menuItemProps,
                            ...option.href && {
                                sx: {
                                    p: 0
                                }
                            },
                            onClick: (e)=>{
                                handleClose();
                                option.menuItemProps && option.menuItemProps.onClick ? option.menuItemProps.onClick(e) : null;
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuItemWrapper, {
                                option: option,
                                children: [
                                    option.icon ? option.icon : null,
                                    option.text
                                ]
                            })
                        }, index);
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsMenu);


/***/ })

};
;