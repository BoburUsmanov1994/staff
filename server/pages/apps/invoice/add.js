(() => {
var exports = {};
exports.id = 2712;
exports.ids = [2712];
exports.modules = {

/***/ 1609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Repeater = (props)=>{
    // ** Props
    const { count , tag , children  } = props;
    // ** Custom Tag
    const Tag = tag || "div";
    // ** Default Items
    const items = [];
    // ** Loop passed count times and push it in items Array
    for(let i = 0; i < count; i++){
        items.push(children(i));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        ...props,
        children: items
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Repeater);


/***/ }),

/***/ 1045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ add),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__(983);
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(152);
// EXTERNAL MODULE: ./src/@core/components/repeater/index.js
var repeater = __webpack_require__(882);
;// CONCATENATED MODULE: ./src/views/apps/invoice/add/AddCard.js
// ** React Imports


// ** MUI Imports





















// ** Icon Imports

// ** Third Party Imports

// ** Configs

// ** Custom Component Imports

const CustomInput = /*#__PURE__*/ (0,external_react_.forwardRef)(({ ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
        size: "small",
        inputRef: ref,
        sx: {
            width: {
                sm: "250px",
                xs: "170px"
            },
            "& .MuiInputBase-input": {
                color: "text.secondary"
            }
        },
        ...props
    });
});
const MUITableCell = (0,styles_.styled)((TableCell_default()))(({ theme  })=>({
        borderBottom: 0,
        padding: `${theme.spacing(1, 0)} !important`
    }));
const CalcWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&:not(:last-of-type)": {
            marginBottom: theme.spacing(2)
        }
    }));
const RepeatingContent = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        paddingRight: 0,
        display: "flex",
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        "& .col-title": {
            top: "-1.5rem",
            position: "absolute"
        },
        "& .MuiInputBase-input": {
            color: theme.palette.text.secondary
        },
        [theme.breakpoints.down("lg")]: {
            "& .col-title": {
                top: "0",
                position: "relative"
            }
        }
    }));
const RepeaterWrapper = (0,styles_.styled)((CardContent_default()))(({ theme  })=>({
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(5.5),
        "& .repeater-wrapper + .repeater-wrapper": {
            marginTop: theme.spacing(12)
        }
    }));
const InvoiceAction = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: theme.spacing(2, 1),
        borderLeft: `1px solid ${theme.palette.divider}`
    }));
const CustomSelectItem = (0,styles_.styled)((MenuItem_default()))(({ theme  })=>({
        color: theme.palette.success.main,
        backgroundColor: "transparent !important",
        "&:hover": {
            backgroundColor: `${(0,styles_.alpha)(theme.palette.success.main, 0.1)} !important`
        }
    }));
const now = new Date();
const tomorrowDate = now.setDate(now.getDate() + 7);
const AddCard = (props)=>{
    // ** Props
    const { clients , invoiceNumber , selectedClient , setSelectedClient , toggleAddCustomerDrawer  } = props;
    // ** States
    const [count, setCount] = (0,external_react_.useState)(1);
    const [selected, setSelected] = (0,external_react_.useState)("");
    const [issueDate, setIssueDate] = (0,external_react_.useState)(new Date());
    const [dueDate, setDueDate] = (0,external_react_.useState)(new Date(tomorrowDate));
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // ** Deletes form
    const deleteForm = (e)=>{
        e.preventDefault();
        // @ts-ignore
        e.target.closest(".repeater-wrapper").remove();
    };
    // ** Handle Invoice To Change
    const handleInvoiceChange = (event)=>{
        setSelected(event.target.value);
        if (clients !== undefined) {
            setSelectedClient(clients.filter((i)=>i.name === event.target.value)[0]);
        }
    };
    const handleAddNewCustomer = ()=>{
        toggleAddCustomerDrawer();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xl: 6,
                            xs: 12,
                            sx: {
                                mb: {
                                    xl: 0,
                                    xs: 4
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 6,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: 40,
                                                fill: "none",
                                                height: 22,
                                                viewBox: "0 0 268 150",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        rx: "25.1443",
                                                        width: "50.2886",
                                                        height: "143.953",
                                                        fill: theme.palette.primary.main,
                                                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        rx: "25.1443",
                                                        width: "50.2886",
                                                        height: "143.953",
                                                        fillOpacity: "0.4",
                                                        fill: "url(#paint0_linear_7821_79167)",
                                                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        rx: "25.1443",
                                                        width: "50.2886",
                                                        height: "143.953",
                                                        fill: theme.palette.primary.main,
                                                        transform: "matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        rx: "25.1443",
                                                        width: "50.2886",
                                                        height: "143.953",
                                                        fill: theme.palette.primary.main,
                                                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        rx: "25.1443",
                                                        width: "50.2886",
                                                        height: "143.953",
                                                        fillOpacity: "0.4",
                                                        fill: "url(#paint1_linear_7821_79167)",
                                                        transform: "matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        rx: "25.1443",
                                                        width: "50.2886",
                                                        height: "143.953",
                                                        fill: theme.palette.primary.main,
                                                        transform: "matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                                                y1: "0",
                                                                x1: "25.1443",
                                                                x2: "25.1443",
                                                                y2: "143.953",
                                                                id: "paint0_linear_7821_79167",
                                                                gradientUnits: "userSpaceOnUse",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                        offset: "1",
                                                                        stopOpacity: "0"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                                                y1: "0",
                                                                x1: "25.1443",
                                                                x2: "25.1443",
                                                                y2: "143.953",
                                                                id: "paint1_linear_7821_79167",
                                                                gradientUnits: "userSpaceOnUse",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                        offset: "1",
                                                                        stopOpacity: "0"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "h6",
                                                sx: {
                                                    ml: 2,
                                                    fontWeight: 700,
                                                    lineHeight: 1.2
                                                },
                                                children: themeConfig/* default.templateName */.Z.templateName
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    mb: 1
                                                },
                                                children: "Office 149, 450 South Brand Brooklyn"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    mb: 1
                                                },
                                                children: "San Diego County, CA 91905, USA"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                children: "+1 (123) 456 7891, +44 (876) 543 2198"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xl: 6,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: {
                                        xl: "flex-end",
                                        xs: "flex-start"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "h6",
                                                sx: {
                                                    mr: 1,
                                                    width: "105px"
                                                },
                                                children: "Invoice"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                size: "small",
                                                value: invoiceNumber,
                                                sx: {
                                                    width: {
                                                        sm: "250px",
                                                        xs: "170px"
                                                    }
                                                },
                                                InputProps: {
                                                    disabled: true,
                                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                        position: "start",
                                                        children: "#"
                                                    })
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    mr: 2,
                                                    width: "100px"
                                                },
                                                children: "Date Issued:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
                                                id: "issue-date",
                                                selected: issueDate,
                                                customInput: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {}),
                                                onChange: (date)=>setIssueDate(date)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    mr: 2,
                                                    width: "100px"
                                                },
                                                children: "Date Due:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
                                                id: "due-date",
                                                selected: dueDate,
                                                customInput: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {}),
                                                onChange: (date)=>setDueDate(date)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    my: (theme)=>`${theme.spacing(1)} !important`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                sx: {
                    pb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            sx: {
                                mb: {
                                    lg: 0,
                                    xs: 4
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "subtitle2",
                                    sx: {
                                        mb: 3,
                                        color: "text.primary"
                                    },
                                    children: "Invoice To:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    size: "small",
                                    value: selected,
                                    onChange: handleInvoiceChange,
                                    sx: {
                                        mb: 4,
                                        width: "200px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomSelectItem, {
                                            value: "",
                                            onClick: handleAddNewCustomer,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    color: "success.main",
                                                    "& svg": {
                                                        mr: 2
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:plus",
                                                        fontSize: 20
                                                    }),
                                                    "Add New Customer"
                                                ]
                                            })
                                        }),
                                        clients !== undefined && clients.map((client)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: client.name,
                                                children: client.name
                                            }, client.name))
                                    ]
                                }),
                                selectedClient !== null && selectedClient !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mb: 1,
                                                color: "text.primary"
                                            },
                                            children: selectedClient.company
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mb: 1,
                                                color: "text.primary"
                                            },
                                            children: selectedClient.address
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mb: 1,
                                                color: "text.primary"
                                            },
                                            children: selectedClient.contact
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mb: 1,
                                                color: "text.primary"
                                            },
                                            children: selectedClient.companyEmail
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            sx: {
                                display: "flex",
                                justifyContent: [
                                    "flex-start",
                                    "flex-end"
                                ]
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        sx: {
                                            mb: 2.5,
                                            color: "text.primary"
                                        },
                                        children: "Bill To:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Table_default()), {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "Total Due:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "$12,110.55"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "Bank name:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "American Bank"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "Country:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "United States"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "IBAN:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "ETD95476213874685"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "SWIFT code:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body2",
                                                                    children: "BR91905"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    mb: (theme)=>`${theme.spacing(1.25)} !important`
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RepeaterWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(repeater/* default */.Z, {
                        count: count,
                        children: (i)=>{
                            const Tag = i === 0 ? (Box_default()) : (Collapse_default());
                            return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                                className: "repeater-wrapper",
                                ...i !== 0 ? {
                                    in: true
                                } : {},
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    container: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RepeatingContent, {
                                        item: true,
                                        xs: 12,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                container: true,
                                                sx: {
                                                    py: 4,
                                                    width: "100%",
                                                    pr: {
                                                        lg: 0,
                                                        xs: 4
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                        item: true,
                                                        lg: 6,
                                                        md: 5,
                                                        xs: 12,
                                                        sx: {
                                                            px: 4,
                                                            my: {
                                                                lg: 0,
                                                                xs: 4
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "subtitle2",
                                                                className: "col-title",
                                                                sx: {
                                                                    mb: {
                                                                        md: 2,
                                                                        xs: 0
                                                                    },
                                                                    color: "text.primary"
                                                                },
                                                                children: "Item"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                fullWidth: true,
                                                                size: "small",
                                                                defaultValue: "App Design",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                        value: "App Design",
                                                                        children: "App Design"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                        value: "App Customization",
                                                                        children: "App Customization"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                        value: "ABC Template",
                                                                        children: "ABC Template"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                        value: "App Development",
                                                                        children: "App Development"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                rows: 2,
                                                                fullWidth: true,
                                                                multiline: true,
                                                                size: "small",
                                                                sx: {
                                                                    mt: 3.5
                                                                },
                                                                defaultValue: "Customization & Bug Fixes"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                        item: true,
                                                        lg: 2,
                                                        md: 3,
                                                        xs: 12,
                                                        sx: {
                                                            px: 4,
                                                            my: {
                                                                lg: 0,
                                                                xs: 4
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "subtitle2",
                                                                className: "col-title",
                                                                sx: {
                                                                    mb: {
                                                                        md: 2,
                                                                        xs: 0
                                                                    },
                                                                    color: "text.primary"
                                                                },
                                                                children: "Cost"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                size: "small",
                                                                type: "number",
                                                                placeholder: "24",
                                                                defaultValue: "24",
                                                                InputProps: {
                                                                    inputProps: {
                                                                        min: 0
                                                                    }
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                                sx: {
                                                                    mt: 3.5
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        component: "span",
                                                                        variant: "body2",
                                                                        sx: {
                                                                            lineHeight: 2
                                                                        },
                                                                        children: "Discount:"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        component: "span",
                                                                        variant: "body2",
                                                                        children: "0%"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                        title: "Tax 1",
                                                                        placement: "top",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            component: "span",
                                                                            variant: "body2",
                                                                            sx: {
                                                                                mx: 2
                                                                            },
                                                                            children: "0%"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                        title: "Tax 2",
                                                                        placement: "top",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            component: "span",
                                                                            variant: "body2",
                                                                            children: "0%"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                        item: true,
                                                        lg: 2,
                                                        md: 2,
                                                        xs: 12,
                                                        sx: {
                                                            px: 4,
                                                            my: {
                                                                lg: 0,
                                                                xs: 4
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "subtitle2",
                                                                className: "col-title",
                                                                sx: {
                                                                    mb: {
                                                                        md: 2,
                                                                        xs: 0
                                                                    },
                                                                    color: "text.primary"
                                                                },
                                                                children: "Hours"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                size: "small",
                                                                type: "number",
                                                                placeholder: "1",
                                                                defaultValue: "1",
                                                                InputProps: {
                                                                    inputProps: {
                                                                        min: 0
                                                                    }
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                        item: true,
                                                        lg: 2,
                                                        md: 1,
                                                        xs: 12,
                                                        sx: {
                                                            px: 4,
                                                            my: {
                                                                lg: 0
                                                            },
                                                            mt: 2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "subtitle2",
                                                                className: "col-title",
                                                                sx: {
                                                                    mb: {
                                                                        md: 2,
                                                                        xs: 0
                                                                    },
                                                                    color: "text.primary"
                                                                },
                                                                children: "Price"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                children: "$24.00"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(InvoiceAction, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    size: "small",
                                                    onClick: deleteForm,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:close",
                                                        fontSize: 20
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }, i);
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        container: true,
                        sx: {
                            mt: 4.75
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sx: {
                                px: 0
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                variant: "contained",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:plus",
                                    fontSize: 20
                                }),
                                onClick: ()=>setCount(count + 1),
                                children: "Add Item"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 9,
                            sx: {
                                order: {
                                    sm: 1,
                                    xs: 2
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 4,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mr: 2,
                                                color: "text.primary",
                                                fontWeight: 600,
                                                letterSpacing: ".25px"
                                            },
                                            children: "Salesperson:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            size: "small",
                                            defaultValue: "Tommy Shelby",
                                            sx: {
                                                maxWidth: "150px",
                                                "& .MuiInputBase-input": {
                                                    color: "text.secondary"
                                                }
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    size: "small",
                                    placeholder: "Thanks for your business",
                                    sx: {
                                        maxWidth: "300px",
                                        "& .MuiInputBase-input": {
                                            color: "text.secondary"
                                        }
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 3,
                            sx: {
                                mb: {
                                    sm: 0,
                                    xs: 4
                                },
                                order: {
                                    sm: 2,
                                    xs: 1
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalcWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "Subtotal:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600,
                                                color: "text.primary",
                                                lineHeight: ".25px"
                                            },
                                            children: "$1800"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalcWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "Discount:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600,
                                                color: "text.primary",
                                                lineHeight: ".25px"
                                            },
                                            children: "$28"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalcWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "Tax:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600,
                                                color: "text.primary",
                                                lineHeight: ".25px"
                                            },
                                            children: "21%"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                    sx: {
                                        mt: (theme)=>`${theme.spacing(6)} !important`,
                                        mb: (theme)=>`${theme.spacing(1.5)} !important`
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalcWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "Total:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontWeight: 600,
                                                color: "text.primary",
                                                lineHeight: ".25px"
                                            },
                                            children: "$1690"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    my: (theme)=>`${theme.spacing(1)} !important`
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    pt: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                        htmlFor: "invoice-note",
                        children: "Note:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        rows: 2,
                        fullWidth: true,
                        multiline: true,
                        id: "invoice-note",
                        sx: {
                            "& .MuiInputBase-input": {
                                color: "text.secondary"
                            }
                        },
                        defaultValue: "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const add_AddCard = (AddCard);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: ./src/views/apps/invoice/add/AddActions.js
// ** Next Import


// ** MUI Imports











// ** Icon Imports

const OptionsWrapper = (0,styles_.styled)((Box_default()))(()=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }));
const AddActions = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                fullWidth: true,
                                sx: {
                                    mb: 3.5
                                },
                                variant: "contained",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:send-outline"
                                }),
                                children: "Send Invoice"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                fullWidth: true,
                                component: (link_default()),
                                sx: {
                                    mb: 3.5
                                },
                                variant: "outlined",
                                href: "/apps/invoice/preview/4987",
                                children: "Preview"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                fullWidth: true,
                                variant: "outlined",
                                sx: {
                                    mb: 3.5
                                },
                                children: "Save"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 12,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                id: "payment-select",
                                children: "Accept payments via"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                fullWidth: true,
                                defaultValue: "Internet Banking",
                                label: "Accept payments via",
                                labelId: "payment-select",
                                sx: {
                                    mb: 4
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        value: "Internet Banking",
                                        children: "Internet Banking"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        value: "Debit Card",
                                        children: "Debit Card"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        value: "Credit Card",
                                        children: "Credit Card"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        value: "Paypal",
                                        children: "Paypal"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        value: "UPI Transfer",
                                        children: "UPI Transfer"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OptionsWrapper, {
                        sx: {
                            mb: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "invoice-add-payment-terms",
                                sx: {
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    color: "text.secondary"
                                },
                                children: "Payment Terms"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                defaultChecked: true,
                                id: "invoice-add-payment-terms"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OptionsWrapper, {
                        sx: {
                            mb: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "invoice-add-client-notes",
                                sx: {
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    color: "text.secondary"
                                },
                                children: "Client Notes"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                id: "invoice-add-client-notes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OptionsWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "invoice-add-payment-stub",
                                sx: {
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    color: "text.secondary"
                                },
                                children: "Payment Stub"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                id: "invoice-add-payment-stub"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const add_AddActions = (AddActions);

// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/FormHelperText"
var FormHelperText_ = __webpack_require__(6354);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2951);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
;// CONCATENATED MODULE: ./src/views/apps/invoice/add/AddNewCustomer.js
// ** MUI Imports













// ** Third Party Imports



// ** Icon Imports

const Header = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(3, 4),
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default
    }));
const schema = external_yup_.object().shape({
    name: external_yup_.string().required(),
    email: external_yup_.string().email().required(),
    company: external_yup_.string().required(),
    contact: external_yup_.string().min(10).max(10).required(),
    address: external_yup_.string().max(120).required()
});
const AddNewCustomer = ({ open , toggle , setSelectedClient , clients , setClients  })=>{
    const { reset , control , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        resolver: (0,yup_.yupResolver)(schema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            address: "",
            country: "USA",
            contact: ""
        }
    });
    const onSubmit = (data)=>{
        const { address , company , contact , country , email , name  } = data;
        const finalData = {
            name,
            country,
            contact,
            company,
            address,
            companyEmail: email
        };
        if (clients !== undefined) {
            setClients([
                ...clients,
                finalData
            ]);
        }
        setSelectedClient(finalData);
        toggle();
        reset({
            name: "",
            email: "",
            company: "",
            address: "",
            country: "USA",
            contact: ""
        });
    };
    const handleDrawerClose = ()=>{
        toggle();
        reset({
            name: "",
            email: "",
            company: "",
            address: "",
            country: "USA",
            contact: ""
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
        open: open,
        anchor: "right",
        variant: "temporary",
        onClose: handleDrawerClose,
        ModalProps: {
            keepMounted: true
        },
        sx: {
            "& .MuiDrawer-paper": {
                width: [
                    300,
                    400
                ]
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        children: "Add New Customer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        size: "small",
                        onClick: toggle,
                        sx: {
                            color: "text.primary"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:close",
                            fontSize: 20
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: "form",
                sx: {
                    p: 5
                },
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                name: "name",
                                control: control,
                                rules: {
                                    required: true
                                },
                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        label: "Name",
                                        value: value,
                                        variant: "outlined",
                                        onChange: onChange,
                                        error: Boolean(errors.name)
                                    })
                            }),
                            errors.name && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                sx: {
                                    color: "error.main"
                                },
                                id: "invoice-name-error",
                                children: errors.name.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                name: "company",
                                control: control,
                                rules: {
                                    required: true
                                },
                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        value: value,
                                        label: "Company",
                                        variant: "outlined",
                                        onChange: onChange,
                                        error: Boolean(errors.company)
                                    })
                            }),
                            errors.company && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                sx: {
                                    color: "error.main"
                                },
                                id: "invoice-company-error",
                                children: errors.company.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                name: "email",
                                control: control,
                                rules: {
                                    required: true
                                },
                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        type: "email",
                                        label: "Email",
                                        value: value,
                                        variant: "outlined",
                                        onChange: onChange,
                                        error: Boolean(errors.email)
                                    })
                            }),
                            errors.email && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                sx: {
                                    color: "error.main"
                                },
                                id: "invoice-email-error",
                                children: errors.email.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                name: "address",
                                control: control,
                                rules: {
                                    required: true
                                },
                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        rows: 6,
                                        multiline: true,
                                        value: value,
                                        label: "Address",
                                        variant: "outlined",
                                        onChange: onChange,
                                        error: Boolean(errors.address),
                                        placeholder: "1037 Lady Bug Drive New York"
                                    })
                            }),
                            errors.address && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                sx: {
                                    color: "error.main"
                                },
                                id: "invoice-address-error",
                                children: errors.address.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                id: "invoice-country",
                                children: "Country"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                name: "country",
                                control: control,
                                rules: {
                                    required: true
                                },
                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                        label: "Country",
                                        value: value,
                                        onChange: onChange,
                                        labelId: "invoice-country",
                                        error: Boolean(errors.country),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: "USA",
                                                children: "USA"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: "UK",
                                                children: "UK"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: "Russia",
                                                children: "Russia"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: "Australia",
                                                children: "Australia"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: "Canada",
                                                children: "Canada"
                                            })
                                        ]
                                    })
                            }),
                            errors.country && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                sx: {
                                    color: "error.main"
                                },
                                id: "invoice-country-error",
                                children: errors.country.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            mb: 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                name: "contact",
                                control: control,
                                rules: {
                                    required: true
                                },
                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        type: "number",
                                        value: value,
                                        variant: "outlined",
                                        onChange: onChange,
                                        label: "Contact Number",
                                        placeholder: "763-242-9206",
                                        error: Boolean(errors.contact)
                                    })
                            }),
                            errors.contact && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                sx: {
                                    color: "error.main"
                                },
                                id: "invoice-contact-error",
                                children: errors.contact.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "large",
                                type: "submit",
                                variant: "contained",
                                sx: {
                                    mr: 4
                                },
                                children: "Add"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "large",
                                variant: "outlined",
                                color: "secondary",
                                onClick: handleDrawerClose,
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const add_AddNewCustomer = (AddNewCustomer);

// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.js
var react_datepicker = __webpack_require__(4488);
;// CONCATENATED MODULE: ./src/pages/apps/invoice/add/index.js
// ** React Imports


// ** MUI Imports

// ** Third Party Components

// ** Demo Components Imports



// ** Styled Component

const InvoiceAdd = ({ apiClientData , invoiceNumber  })=>{
    // ** State
    const [addCustomerOpen, setAddCustomerOpen] = (0,external_react_.useState)(false);
    const [selectedClient, setSelectedClient] = (0,external_react_.useState)(null);
    const [clients, setClients] = (0,external_react_.useState)(apiClientData);
    const toggleAddCustomerDrawer = ()=>setAddCustomerOpen(!addCustomerOpen);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_datepicker/* default */.Z, {
        sx: {
            "& .react-datepicker-wrapper": {
                width: "auto"
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xl: 9,
                        md: 8,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(add_AddCard, {
                            clients: clients,
                            invoiceNumber: invoiceNumber,
                            selectedClient: selectedClient,
                            setSelectedClient: setSelectedClient,
                            toggleAddCustomerDrawer: toggleAddCustomerDrawer
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xl: 3,
                        md: 4,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(add_AddActions, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(add_AddNewCustomer, {
                clients: clients,
                open: addCustomerOpen,
                setClients: setClients,
                toggle: toggleAddCustomerDrawer,
                setSelectedClient: setSelectedClient
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const clientResponse = await external_axios_default().get("/apps/invoice/clients");
    const apiClientData = clientResponse.data;
    const allInvoicesResponse = await external_axios_default().get("/apps/invoice/invoices", {
        params: {
            q: "",
            status: ""
        }
    });
    const lastInvoiceNumber = Math.max(...allInvoicesResponse.data.allData.map((i)=>i.id));
    return {
        props: {
            apiClientData,
            invoiceNumber: lastInvoiceNumber + 1
        }
    };
};
/* harmony default export */ const add = (InvoiceAdd);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ }),

/***/ 2951:
/***/ ((module) => {

"use strict";
module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ 5863:
/***/ ((module) => {

"use strict";
module.exports = require("@iconify/react");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 8891:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 6354:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormHelperText");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 911:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 2651:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Select");

/***/ }),

/***/ 3191:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 9181:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 8099:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 4848:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 6042:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7229:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 983:
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 4409:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,152,9550,1514,4488], () => (__webpack_exec__(1045)));
module.exports = __webpack_exports__;

})();