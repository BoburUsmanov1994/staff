"use strict";
exports.id = 9287;
exports.ids = [9287];
exports.modules = {

/***/ 882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Edit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
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
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
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
;// CONCATENATED MODULE: ./src/views/apps/invoice/edit/EditCard.js
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
        ...props,
        sx: {
            width: {
                sm: "250px",
                xs: "170px"
            },
            "& .MuiInputBase-input": {
                color: "text.secondary"
            }
        }
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
            marginTop: theme.spacing(8)
        }
    }));
const InvoiceAction = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: theme.spacing(2, 0),
        borderLeft: `1px solid ${theme.palette.divider}`
    }));
const EditCard = ({ data  })=>{
    // ** States
    const [count, setCount] = (0,external_react_.useState)(1);
    const [selected, setSelected] = (0,external_react_.useState)("");
    const [clients, setClients] = (0,external_react_.useState)(undefined);
    const [selectedClient, setSelectedClient] = (0,external_react_.useState)(null);
    const [dueDate, setDueDate] = (0,external_react_.useState)(data ? new Date(data.invoice.dueDate) : new Date());
    const [issueDate, setIssueDate] = (0,external_react_.useState)(data ? new Date(data.invoice.issuedDate) : new Date());
    // ** Hook
    const theme = (0,styles_.useTheme)();
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get("/apps/invoice/clients").then((response)=>{
            if (response.data && clients === undefined) {
                setClients(response.data);
                setSelected(response.data[0].name);
                setSelectedClient(response.data[0]);
            }
        });
    }, [
        clients
    ]);
    // ** Deletes form
    const deleteForm = (e)=>{
        e.preventDefault();
        // @ts-ignore
        e.target.closest(".repeater-wrapper").remove();
    };
    // ** Handle Invoice To Change
    const handleInvoiceChange = (e)=>{
        setSelected(e.target.value);
        if (clients !== undefined) {
            setSelectedClient(clients.filter((i)=>i.name === e.target.value)[0]);
        }
    };
    if (data) {
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
                                                    value: data.invoice.id,
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
                                                    showDisabledMonthNavigation: true,
                                                    customInput: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {}),
                                                    onChange: (date)=>setIssueDate(date)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
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
                                                    children: "Date Due:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
                                                    selected: dueDate,
                                                    showDisabledMonthNavigation: true,
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
                        mt: (theme)=>`${theme.spacing(1)} !important`
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
                                            mb: 2.5,
                                            color: "text.primary"
                                        },
                                        children: "Invoice To:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                        size: "small",
                                        value: selected,
                                        onChange: handleInvoiceChange,
                                        sx: {
                                            mb: 4,
                                            width: "200px",
                                            color: "text.secondary"
                                        },
                                        children: clients !== undefined && clients.map((client)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: client.name,
                                                children: client.name
                                            }, client.name))
                                    }),
                                    selectedClient !== null ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                                mb: 3.5,
                                                color: "text.primary",
                                                fontWeight: 600
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
                                                                        children: data.paymentDetails.totalDue
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
                                                                        children: data.paymentDetails.bankName
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
                                                                        children: data.paymentDetails.country
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
                                                                        children: data.paymentDetails.iban
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
                                                                        children: data.paymentDetails.swiftCode
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
                                                                    xs: 2
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
                                                                    xs: 2
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
                                                                    xs: 2
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
                                    onClick: ()=>setCount(count + 1),
                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:plus",
                                        fontSize: 20
                                    }),
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
                                                sx: {
                                                    maxWidth: "150px",
                                                    "& .MuiInputBase-input": {
                                                        color: "text.secondary"
                                                    }
                                                },
                                                defaultValue: "Tommy Shelby"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        size: "small",
                                        sx: {
                                            maxWidth: "300px",
                                            "& .MuiInputBase-input": {
                                                color: "text.secondary"
                                            }
                                        },
                                        defaultValue: "Thanks for your business"
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
                                            mt: (theme)=>`${theme.spacing(5)} !important`,
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
                            sx: {
                                mb: 2
                            },
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
    } else {
        return null;
    }
};
/* harmony default export */ const edit_EditCard = (EditCard);

// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: ./src/views/apps/invoice/edit/EditActions.js
// ** Next Import


// ** MUI Imports











// ** Icon Imports

const OptionsWrapper = (0,styles_.styled)((Box_default()))(()=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }));
const EditActions = ({ id , toggleSendInvoiceDrawer , toggleAddPaymentDrawer  })=>{
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
                                onClick: toggleSendInvoiceDrawer,
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:send-outline"
                                }),
                                children: "Send Invoice"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                fullWidth: true,
                                sx: {
                                    mb: 3.5
                                },
                                component: (link_default()),
                                color: "secondary",
                                variant: "outlined",
                                href: `/apps/invoice/preview/${id}`,
                                children: "Preview"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                fullWidth: true,
                                color: "secondary",
                                variant: "outlined",
                                sx: {
                                    mb: 3.5
                                },
                                children: "Save"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                fullWidth: true,
                                color: "success",
                                variant: "contained",
                                onClick: toggleAddPaymentDrawer,
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:currency-usd"
                                }),
                                children: "Add Payment"
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
                                htmlFor: "invoice-edit-payment-terms",
                                sx: {
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    color: "text.secondary"
                                },
                                children: "Payment Terms"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                defaultChecked: true,
                                id: "invoice-edit-payment-terms"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OptionsWrapper, {
                        sx: {
                            mb: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "invoice-edit-client-notes",
                                sx: {
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    color: "text.secondary"
                                },
                                children: "Client Notes"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                id: "invoice-edit-client-notes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OptionsWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "invoice-edit-payment-stub",
                                sx: {
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    color: "text.secondary"
                                },
                                children: "Payment Stub"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                id: "invoice-edit-payment-stub"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const edit_EditActions = (EditActions);

// EXTERNAL MODULE: ./src/views/apps/invoice/shared-drawer/AddPaymentDrawer.js
var AddPaymentDrawer = __webpack_require__(1266);
// EXTERNAL MODULE: ./src/views/apps/invoice/shared-drawer/SendInvoiceDrawer.js
var SendInvoiceDrawer = __webpack_require__(321);
;// CONCATENATED MODULE: ./src/views/apps/invoice/edit/Edit.js
// ** React Imports


// ** Next Import

// ** MUI Imports


// ** Third Party Components

// ** Demo Components Imports




const InvoiceEdit = ({ id  })=>{
    // ** State
    const [error, setError] = (0,external_react_.useState)(false);
    const [data, setData] = (0,external_react_.useState)(null);
    const [addPaymentOpen, setAddPaymentOpen] = (0,external_react_.useState)(false);
    const [sendInvoiceOpen, setSendInvoiceOpen] = (0,external_react_.useState)(false);
    const toggleSendInvoiceDrawer = ()=>setSendInvoiceOpen(!sendInvoiceOpen);
    const toggleAddPaymentDrawer = ()=>setAddPaymentOpen(!addPaymentOpen);
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get("/apps/invoice/single-invoice", {
            params: {
                id
            }
        }).then((res)=>{
            setData(res.data);
            setError(false);
        }).catch(()=>{
            setData(null);
            setError(true);
        });
    }, [
        id
    ]);
    if (data) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
                            children: /*#__PURE__*/ jsx_runtime_.jsx(edit_EditCard, {
                                data: data
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xl: 3,
                            md: 4,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(edit_EditActions, {
                                id: id,
                                toggleSendInvoiceDrawer: toggleSendInvoiceDrawer,
                                toggleAddPaymentDrawer: toggleAddPaymentDrawer
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SendInvoiceDrawer/* default */.Z, {
                    open: sendInvoiceOpen,
                    toggle: toggleSendInvoiceDrawer
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AddPaymentDrawer/* default */.Z, {
                    open: addPaymentOpen,
                    toggle: toggleAddPaymentDrawer
                })
            ]
        });
    } else if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 6,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Alert_default()), {
                    severity: "error",
                    children: [
                        "Invoice with the id: ",
                        id,
                        " does not exist. Please check the list of invoices:",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/apps/invoice/list",
                            children: "Invoice List"
                        })
                    ]
                })
            })
        });
    } else {
        return null;
    }
};
/* harmony default export */ const Edit = (InvoiceEdit);


/***/ })

};
;