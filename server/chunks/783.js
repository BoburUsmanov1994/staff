"use strict";
exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5374);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
// ** MUI Imports





const CustomRadioBasic = (props)=>{
    // ** Props
    const { name , data , selected , gridProps , handleChange , color ="primary"  } = props;
    const { meta , title , value , content  } = data;
    const renderData = ()=>{
        if (meta && title && content) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                        sx: {
                            mb: 1,
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between"
                        },
                        children: [
                            typeof title === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                sx: {
                                    mr: 2,
                                    fontWeight: 500
                                },
                                children: title
                            }) : title,
                            typeof meta === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: meta
                            }) : meta
                        ]
                    }),
                    typeof content === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        variant: "body2",
                        children: content
                    }) : content
                ]
            });
        } else if (meta && title && !content) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                },
                children: [
                    typeof title === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        sx: {
                            mr: 2,
                            fontWeight: 500
                        },
                        children: title
                    }) : title,
                    typeof meta === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: meta
                    }) : meta
                ]
            });
        } else if (!meta && title && content) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    typeof title === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        sx: {
                            mb: 1,
                            fontWeight: 500
                        },
                        children: title
                    }) : title,
                    typeof content === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        variant: "body2",
                        children: content
                    }) : content
                ]
            });
        } else if (!meta && !title && content) {
            return typeof content === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                variant: "body2",
                children: content
            }) : content;
        } else if (!meta && title && !content) {
            return typeof title === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    fontWeight: 500
                },
                children: title
            }) : title;
        } else {
            return null;
        }
    };
    const renderComponent = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
            item: true,
            ...gridProps,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                onClick: ()=>handleChange(value),
                sx: {
                    p: 4,
                    height: "100%",
                    display: "flex",
                    borderRadius: 1,
                    cursor: "pointer",
                    position: "relative",
                    alignItems: "flex-start",
                    border: (theme)=>`1px solid ${theme.palette.divider}`,
                    ...selected === value ? {
                        borderColor: `${color}.main`
                    } : {
                        "&:hover": {
                            borderColor: (theme)=>`rgba(${theme.palette.customColors.main}, 0.25)`
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3___default()), {
                        name: name,
                        size: "small",
                        color: color,
                        value: value,
                        onChange: handleChange,
                        checked: selected === value,
                        sx: {
                            mb: -2,
                            mt: -1.75,
                            ml: -1.75
                        }
                    }),
                    renderData()
                ]
            })
        });
    };
    return data ? renderComponent() : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomRadioBasic);


/***/ })

};
;