"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 2024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9550);
// ** React Imports


// ** MUI Imports


// ** Hooks Imports

const Avatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    // ** Props
    const { sx , src , skin , color  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const bgColors = (0,src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const getAvatarStyles = (skin, skinColor)=>{
        let avatarStyles;
        if (skin === "light") {
            avatarStyles = {
                ...bgColors[`${skinColor}Light`]
            };
        } else if (skin === "light-static") {
            avatarStyles = {
                color: bgColors[`${skinColor}Light`].color,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.lighten)(theme.palette[skinColor].main, 0.88)
            };
        } else {
            avatarStyles = {
                ...bgColors[`${skinColor}Filled`]
            };
        }
        return avatarStyles;
    };
    const colors = {
        primary: getAvatarStyles(skin, "primary"),
        secondary: getAvatarStyles(skin, "secondary"),
        success: getAvatarStyles(skin, "success"),
        error: getAvatarStyles(skin, "error"),
        warning: getAvatarStyles(skin, "warning"),
        info: getAvatarStyles(skin, "info")
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: ref,
        ...props,
        sx: !src && skin && color ? Object.assign(colors[color], sx) : sx
    });
});
Avatar.defaultProps = {
    skin: "filled",
    color: "primary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


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


/***/ }),

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