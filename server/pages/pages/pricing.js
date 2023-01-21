"use strict";
(() => {
var exports = {};
exports.id = 9623;
exports.ids = [9623];
exports.modules = {

/***/ 7635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pricing),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.js
var hex_to_rgba = __webpack_require__(5026);
;// CONCATENATED MODULE: ./src/views/pages/pricing/PricingCTA.js
// ** MUI Imports






// ** Util Import

// ** Styled Components
const BoxWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        position: "relative",
        padding: theme.spacing(11.25, 36),
        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.04),
        [theme.breakpoints.down("xl")]: {
            padding: theme.spacing(11.25, 20)
        },
        [theme.breakpoints.down("md")]: {
            textAlign: "center"
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(10, 5)
        }
    }));
const GridStyled = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            order: -1
        }
    }));
const Img = (0,styles_.styled)("img")(({ theme  })=>({
        bottom: 0,
        right: 144,
        width: 219,
        position: "absolute",
        [theme.breakpoints.down("md")]: {
            width: 200,
            position: "static"
        },
        [theme.breakpoints.down("sm")]: {
            width: 180
        }
    }));
const PricingCTA = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(BoxWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 5,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h5",
                            sx: {
                                mb: 2.5,
                                color: "primary.main"
                            },
                            children: "Still not convinced? Start with a 14-day FREE trial!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                mb: 10,
                                color: "text.secondary"
                            },
                            children: "You will get full access to with all the features for 14 days."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            children: "Start 14-day FREE trial"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GridStyled, {
                    item: true,
                    xs: 12,
                    md: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                        alt: "pricing-cta-avatar",
                        src: "/images/pages/pricing-cta-illustration.png"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const pricing_PricingCTA = (PricingCTA);

// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
;// CONCATENATED MODULE: ./src/views/pages/pricing/PricingTable.js
// ** MUI Imports










// ** Icon Imports

// ** Custom Components Imports

const PricingTable = ({ data  })=>{
    const renderTableCell = (row)=>{
        if (typeof row.pro === "boolean") {
            return /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                fontSize: 20,
                icon: row.pro ? "mdi:check-circle" : "mdi:close-circle"
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                size: "small",
                skin: "light",
                label: row.pro,
                color: "primary",
                sx: {
                    lineHeight: 1
                }
            });
        }
    };
    return data && data.pricingTable ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 12,
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        sx: {
                            mb: 2.5
                        },
                        children: "Pick a plan that works best for you"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Stay cool, we have a 48-hour money back guarantee!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    mt: 8,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    "& .MuiTableRow-root:nth-of-type(even)": {
                        backgroundColor: "action.hover"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
                                    children: data.pricingTable.header.map((head, index)=>/*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: index === 0 ? "flex-start" : "center"
                                                },
                                                children: [
                                                    head.isPro ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            position: "relative",
                                                            "& svg": {
                                                                top: -10,
                                                                right: -25,
                                                                position: "absolute",
                                                                color: "primary.main"
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                noWrap: true,
                                                                sx: {
                                                                    fontSize: ".75rem",
                                                                    fontWeight: 600,
                                                                    letterSpacing: ".17px"
                                                                },
                                                                children: head.title
                                                            }),
                                                            head.isPro ? /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                icon: "mdi:star-circle"
                                                            }) : null
                                                        ]
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        noWrap: true,
                                                        sx: {
                                                            fontSize: ".75rem",
                                                            fontWeight: 600,
                                                            letterSpacing: ".17px"
                                                        },
                                                        children: head.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        noWrap: true,
                                                        sx: {
                                                            fontSize: ".75rem",
                                                            letterSpacing: ".4px",
                                                            textTransform: "capitalize"
                                                        },
                                                        children: head.subtitle
                                                    })
                                                ]
                                            })
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                children: [
                                    data.pricingTable.rows.map((row, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    sx: {
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: row.feature
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "center",
                                                    sx: {
                                                        "& svg": {
                                                            verticalAlign: "middle",
                                                            color: row.starter ? "primary.main" : "text.disabled"
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        fontSize: 20,
                                                        icon: row.starter ? "mdi:check-circle" : "mdi:close-circle"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "center",
                                                    sx: {
                                                        "& svg": {
                                                            verticalAlign: "middle",
                                                            color: row.pro ? "primary.main" : "text.disabled"
                                                        }
                                                    },
                                                    children: renderTableCell(row)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "center",
                                                    sx: {
                                                        "& svg": {
                                                            verticalAlign: "middle",
                                                            color: row.enterprise ? "primary.main" : "text.disabled"
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        fontSize: 20,
                                                        icon: row.enterprise ? "mdi:check-circle" : "mdi:close-circle"
                                                    })
                                                })
                                            ]
                                        }, index)),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                        sx: {
                                            "& .MuiTableCell-root": {
                                                border: 0
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "center",
                                                sx: {
                                                    whiteSpace: "nowrap"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "outlined",
                                                    children: "Choose Plan"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "center",
                                                sx: {
                                                    whiteSpace: "nowrap"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "contained",
                                                    children: "Choose Plan"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                align: "center",
                                                sx: {
                                                    whiteSpace: "nowrap"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "outlined",
                                                    children: "Choose Plan"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }) : null;
};
/* harmony default export */ const pricing_PricingTable = (PricingTable);

// EXTERNAL MODULE: ./src/views/pages/pricing/PricingPlans.js + 1 modules
var PricingPlans = __webpack_require__(2958);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
;// CONCATENATED MODULE: ./src/views/pages/pricing/PricingHeader.js
// ** MUI Imports






// ** Icon Import

// ** Custom Component Import

const PricingHeader = (props)=>{
    // ** Props
    const { plan , handleChange  } = props;
    // ** Hook
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("sm"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            mb: [
                10,
                17.5
            ],
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                children: "Pricing Plans"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mt: 2.5,
                    mb: 10.75
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "All plans include 40+ advanced tools and features to boost your product."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Choose the best plan to fit your needs."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                        htmlFor: "pricing-switch",
                        sx: {
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: "0.875rem",
                            color: "text.secondary"
                        },
                        children: "Monthly"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                        color: "secondary",
                        id: "pricing-switch",
                        onChange: handleChange,
                        checked: plan === "annually"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                        htmlFor: "pricing-switch",
                        sx: {
                            fontWeight: 500,
                            cursor: "pointer",
                            fontSize: "0.875rem"
                        },
                        children: "Annually"
                    }),
                    !hidden && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            top: -30,
                            left: "50%",
                            display: "flex",
                            position: "absolute",
                            transform: "translateX(35%)",
                            "& svg": {
                                mt: 2,
                                mr: 1,
                                color: "text.disabled"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:arrow-down-left"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                size: "small",
                                skin: "light",
                                color: "primary",
                                label: "Save up to 10%"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pricing_PricingHeader = (PricingHeader);

// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(4604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(8279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(9409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
;// CONCATENATED MODULE: ./src/views/pages/pricing/PricingFooter.js
// ** React Imports


// ** MUI Imports






// ** Icon Imports

const Accordion = (0,styles_.styled)((Accordion_default()))(({ theme  })=>({
        "&:before": {
            display: "none"
        },
        boxShadow: `${theme.shadows[0]} !important`,
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        "&:first-of-type": {
            borderTop: `1px solid ${theme.palette.divider}`
        },
        "&.Mui-expanded + .MuiAccordion-root": {
            borderTop: `1px solid ${theme.palette.divider}`
        }
    }));
const PricingFooter = (props)=>{
    // ** Props
    const { data  } = props;
    // ** Props
    const [expanded, setExpanded] = (0,external_react_.useState)(false);
    const handleChange = (panel)=>(event, isExpanded)=>{
            setExpanded(isExpanded ? panel : false);
        };
    const renderAccordion = ()=>{
        return data?.faq.map((item)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion, {
                elevation: 0,
                expanded: expanded === item.id,
                onChange: handleChange(item.id),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                        id: `pricing-accordion-${item.id}-header`,
                        expandIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:chevron-down"
                        }),
                        "aria-controls": `pricing-accordion-${item.id}-content`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: item.question
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: item.answer
                        })
                    })
                ]
            }, item.id);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 11.75,
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        sx: {
                            mb: 2.5
                        },
                        children: "FAQ’s"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Let us help answer the most common questions."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: renderAccordion()
                })
            })
        ]
    });
};
/* harmony default export */ const pricing_PricingFooter = (PricingFooter);

;// CONCATENATED MODULE: ./src/pages/pages/pricing/index.js
// ** React Imports


// ** MUI Imports



// ** Third Party Imports

// ** Demo Imports





// ** Styled Components
const CardContent = (0,styles_.styled)((CardContent_default()))(({ theme  })=>({
        padding: `${theme.spacing(20, 36)} !important`,
        [theme.breakpoints.down("xl")]: {
            padding: `${theme.spacing(20)} !important`
        },
        [theme.breakpoints.down("sm")]: {
            padding: `${theme.spacing(10, 5)} !important`
        }
    }));
const Pricing = ({ apiData  })=>{
    // ** States
    const [plan, setPlan] = (0,external_react_.useState)("annually");
    const handleChange = (e)=>{
        if (e.target.checked) {
            setPlan("annually");
        } else {
            setPlan("monthly");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(pricing_PricingHeader, {
                        plan: plan,
                        handleChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PricingPlans/* default */.Z, {
                        plan: plan,
                        data: apiData.pricingPlans
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(pricing_PricingCTA, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(pricing_PricingTable, {
                    data: apiData
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                sx: {
                    backgroundColor: "action.hover"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(pricing_PricingFooter, {
                    data: apiData
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const res = await external_axios_default().get("/pages/pricing");
    const apiData = res.data;
    return {
        props: {
            apiData
        }
    };
};
/* harmony default export */ const pricing = (Pricing);


/***/ }),

/***/ 5863:
/***/ ((module) => {

module.exports = require("@iconify/react");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 8099:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9550,7294,2958], () => (__webpack_exec__(7635)));
module.exports = __webpack_exports__;

})();