"use strict";
exports.id = 5959;
exports.ids = [5959];
exports.modules = {

/***/ 5959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Preview)
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
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(152);
;// CONCATENATED MODULE: ./src/views/apps/invoice/preview/PreviewCard.js
// ** MUI Imports














// ** Configs

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
const PreviewCard = ({ data  })=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    if (data) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                sm: 6,
                                xs: 12,
                                sx: {
                                    mb: {
                                        sm: 0,
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
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                                sm: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        justifyContent: {
                                            xs: "flex-start",
                                            sm: "flex-end"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Table_default()), {
                                        sx: {
                                            maxWidth: "200px"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "h6",
                                                                children: "Invoice"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "h6",
                                                                children: `#${data.invoice.id}`
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                children: "Date Issued:"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                children: data.invoice.issuedDate
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                children: "Date Due:"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(MUITableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                children: data.invoice.dueDate
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    sx: {
                        mt: (theme)=>`${theme.spacing(6.5)} !important`,
                        mb: (theme)=>`${theme.spacing(5.5)} !important`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
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
                                            color: "text.primary",
                                            letterSpacing: ".1px"
                                        },
                                        children: "Invoice To:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 2
                                        },
                                        children: data.invoice.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 2
                                        },
                                        children: data.invoice.company
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 2
                                        },
                                        children: data.invoice.address
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 2
                                        },
                                        children: data.invoice.contact
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 2
                                        },
                                        children: data.invoice.companyEmail
                                    })
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
                                                mb: 3,
                                                color: "text.primary",
                                                letterSpacing: ".1px"
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
                        mt: (theme)=>`${theme.spacing(6.5)} !important`,
                        mb: "0 !important"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "Item"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "hours"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "qty"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "Total"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Premium Branding Package"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Branding & Promotion"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "48"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "$32"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Social Media"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Social media templates"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "42"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "$28"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Web Design"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Web designing package"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "46"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "$24"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "SEO"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "Search engine optimization"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "40"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                children: "$22"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    sx: {
                        pt: 8
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 7,
                                lg: 9,
                                sx: {
                                    order: {
                                        sm: 1,
                                        xs: 2
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 2,
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
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                children: "Tommy Shelby"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: "Thanks for your business"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 5,
                                lg: 3,
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
                                                    color: "text.primary",
                                                    letterSpacing: ".25px",
                                                    fontWeight: 600
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
                                                    color: "text.primary",
                                                    letterSpacing: ".25px",
                                                    fontWeight: 600
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
                                                    color: "text.primary",
                                                    letterSpacing: ".25px",
                                                    fontWeight: 600
                                                },
                                                children: "21%"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                        sx: {
                                            mt: (theme)=>`${theme.spacing(5)} !important`,
                                            mb: (theme)=>`${theme.spacing(3)} !important`
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
                                                    color: "text.primary",
                                                    letterSpacing: ".25px",
                                                    fontWeight: 600
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
                        mt: (theme)=>`${theme.spacing(4.5)} !important`,
                        mb: "0 !important"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "subtitle2",
                        sx: {
                            color: "text.primary"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Note:"
                            }),
                            " It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
                        ]
                    })
                })
            ]
        });
    } else {
        return null;
    }
};
/* harmony default export */ const preview_PreviewCard = (PreviewCard);

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
;// CONCATENATED MODULE: ./src/views/apps/invoice/preview/PreviewActions.js
// ** Next Import


// ** MUI Imports



// ** Icon Imports

const PreviewActions = ({ id , toggleSendInvoiceDrawer , toggleAddPaymentDrawer  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
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
                    color: "secondary",
                    variant: "outlined",
                    children: "Download"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    fullWidth: true,
                    target: "_blank",
                    sx: {
                        mb: 3.5
                    },
                    component: (link_default()),
                    color: "secondary",
                    variant: "outlined",
                    href: `/apps/invoice/print/${id}`,
                    children: "Print"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    fullWidth: true,
                    sx: {
                        mb: 3.5
                    },
                    component: (link_default()),
                    color: "secondary",
                    variant: "outlined",
                    href: `/apps/invoice/edit/${id}`,
                    children: "Edit Invoice"
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
    });
};
/* harmony default export */ const preview_PreviewActions = (PreviewActions);

// EXTERNAL MODULE: ./src/views/apps/invoice/shared-drawer/AddPaymentDrawer.js
var AddPaymentDrawer = __webpack_require__(1266);
// EXTERNAL MODULE: ./src/views/apps/invoice/shared-drawer/SendInvoiceDrawer.js
var SendInvoiceDrawer = __webpack_require__(321);
;// CONCATENATED MODULE: ./src/views/apps/invoice/preview/Preview.js
// ** React Imports


// ** Next Import

// ** MUI Imports


// ** Third Party Components

// ** Demo Components Imports




const InvoicePreview = ({ id  })=>{
    // ** State
    const [error, setError] = (0,external_react_.useState)(false);
    const [data, setData] = (0,external_react_.useState)(null);
    const [addPaymentOpen, setAddPaymentOpen] = (0,external_react_.useState)(false);
    const [sendInvoiceOpen, setSendInvoiceOpen] = (0,external_react_.useState)(false);
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
    const toggleSendInvoiceDrawer = ()=>setSendInvoiceOpen(!sendInvoiceOpen);
    const toggleAddPaymentDrawer = ()=>setAddPaymentOpen(!addPaymentOpen);
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
                            children: /*#__PURE__*/ jsx_runtime_.jsx(preview_PreviewCard, {
                                data: data
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xl: 3,
                            md: 4,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(preview_PreviewActions, {
                                id: id,
                                toggleAddPaymentDrawer: toggleAddPaymentDrawer,
                                toggleSendInvoiceDrawer: toggleSendInvoiceDrawer
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
/* harmony default export */ const Preview = (InvoicePreview);


/***/ })

};
;