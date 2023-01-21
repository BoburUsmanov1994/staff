"use strict";
(() => {
var exports = {};
exports.id = 1742;
exports.ids = [1742];
exports.modules = {

/***/ 3366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ faq),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(9409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
var TabList_default = /*#__PURE__*/__webpack_require__.n(TabList_);
// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(4604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(8279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
;// CONCATENATED MODULE: ./src/views/pages/faq/Faqs.js
// ** MUI Imports











// ** Icon Imports

// ** Custom Components Imports

// Styled TabList component
const MuiBox = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        marginTop: theme.spacing(8),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    }));
const TabList = (0,styles_.styled)((TabList_default()))(({ theme  })=>({
        overflow: "visible",
        "& .MuiTabs-flexContainer": {
            flexDirection: "column"
        },
        "& .MuiTabs-indicator": {
            display: "none"
        },
        "& .Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: `${theme.palette.common.white} !important`
        },
        "& .MuiTab-root": {
            minHeight: 40,
            minWidth: 280,
            textAlign: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
            borderRadius: theme.shape.borderRadius,
            "& svg": {
                marginBottom: 0,
                marginRight: theme.spacing(1)
            },
            [theme.breakpoints.down("md")]: {
                maxWidth: "100%"
            }
        }
    }));
const Faqs = ({ data , activeTab , handleChange  })=>{
    const renderTabContent = ()=>{
        return Object.values(data.faqData).map((tab)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                value: tab.id,
                sx: {
                    p: 6,
                    pt: 0,
                    width: "100%"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                    skin: "light",
                                    variant: "rounded",
                                    sx: {
                                        height: 42,
                                        width: 42
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: tab.icon,
                                        fontSize: 28
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        ml: 4
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h5",
                                            children: tab.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                color: "text.secondary"
                                            },
                                            children: tab.subtitle
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                mt: 4
                            },
                            children: tab.qandA.map((item)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                                            expandIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:chevron-down"
                                            }),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    fontWeight: "500"
                                                },
                                                children: item.question
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: item.answer
                                            })
                                        })
                                    ]
                                }, item.id);
                            })
                        })
                    ]
                }, tab.id)
            }, tab.id);
        });
    };
    const renderTabs = ()=>{
        if (data !== null) {
            return Object.values(data.faqData).map((tab)=>{
                if (tab.qandA.length) {
                    return /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                        value: tab.id,
                        label: tab.title,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: tab.icon,
                            fontSize: 20
                        })
                    }, tab.id);
                } else {
                    return null;
                }
            });
        } else {
            return null;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(MuiBox, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContext_default()), {
            value: activeTab,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TabList, {
                            onChange: handleChange,
                            children: renderTabs()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                mt: 12,
                                display: "flex",
                                justifyContent: "center",
                                "& img": {
                                    maxWidth: "100%",
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    }
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                height: 195,
                                alt: "illustration",
                                src: "/images/pages/faq-illustration.png"
                            })
                        })
                    ]
                }),
                renderTabContent()
            ]
        })
    });
};
/* harmony default export */ const faq_Faqs = (Faqs);

// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: ./src/views/pages/faq/FaqHeader.js
// ** MUI Imports







// ** Icon Imports

// Styled Card component
const Card = (0,styles_.styled)((Card_default()))(({ theme  })=>({
        border: 0,
        boxShadow: "none",
        backgroundSize: "cover",
        backgroundImage: `url(/images/pages/pages-header-bg-${theme.palette.mode}.png)`
    }));
// Styled TextField component
const TextField = (0,styles_.styled)((TextField_default()))(({ theme  })=>({
        width: "100%",
        "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.background.paper
        },
        [theme.breakpoints.up("sm")]: {
            width: "55%"
        }
    }));
const FaqHeader = (props)=>{
    // ** Props
    const { searchTerm , setSearchTerm  } = props;
    const handleFaqFilter = (e)=>{
        setSearchTerm(e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Card, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            sx: {
                pt: 23,
                textAlign: "center",
                pb: (theme)=>`${theme.spacing(23)} !important`
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    sx: {
                        mb: 8
                    },
                    children: "Hello, how can we help?"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TextField, {
                    value: searchTerm,
                    placeholder: "Search a question....",
                    onChange: (e)=>handleFaqFilter(e),
                    InputProps: {
                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                            position: "start",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:magnify"
                            })
                        })
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        mt: 4,
                        color: "text.secondary"
                    },
                    children: "or choose a category to quickly find the help you need"
                })
            ]
        })
    });
};
/* harmony default export */ const faq_FaqHeader = (FaqHeader);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
;// CONCATENATED MODULE: ./src/views/pages/faq/FaqFooter.js
// ** Next Import


// ** MUI Imports




// ** Icon Imports

// ** Custom Components Imports


// Styled Box component
const StyledBox1 = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        borderRadius: "10px",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(6.5, 6),
        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`
    }));
// Styled Box component
const StyledBox2 = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        borderRadius: "10px",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(6.5, 6),
        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`
    }));
const FaqFooter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            mt: 13,
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                size: "small",
                skin: "light",
                color: "primary",
                label: "Question"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h5",
                sx: {
                    mt: 1.5,
                    mb: 2
                },
                children: "You still have a question?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                sx: {
                    mb: 10,
                    color: "text.secondary"
                },
                children: "If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBox1, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                    skin: "light",
                                    variant: "rounded",
                                    sx: {
                                        mt: 1.5,
                                        height: 38,
                                        width: 38
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:phone-outline"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    href: "/",
                                    variant: "h6",
                                    component: (link_default()),
                                    onClick: (e)=>e.preventDefault(),
                                    sx: {
                                        mt: 4,
                                        textDecoration: "none",
                                        "&:hover": {
                                            color: "primary.main"
                                        }
                                    },
                                    children: "+ (810) 2548 2568"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        mt: 2,
                                        color: "text.secondary"
                                    },
                                    children: "We are always happy to help!"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBox2, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                    skin: "light",
                                    variant: "rounded",
                                    sx: {
                                        mt: 1.5,
                                        height: 38,
                                        width: 38
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:email-outline"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    href: "/",
                                    variant: "h6",
                                    component: (link_default()),
                                    onClick: (e)=>e.preventDefault(),
                                    sx: {
                                        mt: 4,
                                        textDecoration: "none",
                                        "&:hover": {
                                            color: "primary.main"
                                        }
                                    },
                                    children: "hello@help.com"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        mt: 2,
                                        color: "text.secondary"
                                    },
                                    children: "Best way to get answer faster!"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const faq_FaqFooter = (FaqFooter);

;// CONCATENATED MODULE: ./src/pages/pages/faq/index.js
// ** React Imports


// ** MUI Imports


// ** Icon Imports

// ** Third Party Imports

// ** Demo Imports



const FAQ = ({ apiData  })=>{
    // ** States
    const [data, setData] = (0,external_react_.useState)(null);
    const [searchTerm, setSearchTerm] = (0,external_react_.useState)("");
    const [activeTab, setActiveTab] = (0,external_react_.useState)("payment");
    (0,external_react_.useEffect)(()=>{
        if (searchTerm !== "") {
            external_axios_default().get("/pages/faqs", {
                params: {
                    q: searchTerm
                }
            }).then((response)=>{
                if (response.data.faqData && Object.values(response.data.faqData).length) {
                    setData(response.data);
                    // @ts-ignore
                    setActiveTab(Object.values(response.data.faqData)[0].id);
                } else {
                    setData(null);
                }
            });
        } else {
            setData(apiData);
        }
    }, [
        apiData,
        searchTerm
    ]);
    const handleChange = (event, newValue)=>{
        setActiveTab(newValue);
    };
    const renderNoResult = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            mt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& svg": {
                mr: 2
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:alert-circle-outline"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                children: "No Results Found!!"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(faq_FaqHeader, {
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm
            }),
            data !== null ? /*#__PURE__*/ jsx_runtime_.jsx(faq_Faqs, {
                data: data,
                activeTab: activeTab,
                handleChange: handleChange
            }) : renderNoResult,
            /*#__PURE__*/ jsx_runtime_.jsx(faq_FaqFooter, {})
        ]
    });
};
const getStaticProps = async ()=>{
    const res = await external_axios_default().get("/pages/faqs");
    const apiData = res.data;
    return {
        props: {
            apiData
        }
    };
};
/* harmony default export */ const faq = (FAQ);


/***/ }),

/***/ 5863:
/***/ ((module) => {

module.exports = require("@iconify/react");

/***/ }),

/***/ 6741:
/***/ ((module) => {

module.exports = require("@mui/lab/TabContext");

/***/ }),

/***/ 861:
/***/ ((module) => {

module.exports = require("@mui/lab/TabList");

/***/ }),

/***/ 2071:
/***/ ((module) => {

module.exports = require("@mui/lab/TabPanel");

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

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

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

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9550,7294,2024], () => (__webpack_exec__(3366)));
module.exports = __webpack_exports__;

})();