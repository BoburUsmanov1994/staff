"use strict";
(() => {
var exports = {};
exports.id = 2137;
exports.ids = [2137];
exports.modules = {

/***/ 1609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _subcategory_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
var TabList_default = /*#__PURE__*/__webpack_require__.n(TabList_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
;// CONCATENATED MODULE: ./src/views/pages/help-center/subcategory/index.js
// ** React Imports


// ** Next Imports


// ** MUI Imports











// ** Icon Imports

// ** Custom Components Import

const TabList = (0,styles_.styled)((TabList_default()))(({ theme  })=>({
        border: 0,
        marginRight: 0,
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
            minWidth: 300,
            maxWidth: 300,
            textAlign: "start",
            flexDirection: "row",
            justifyContent: "flex-start",
            borderRadius: theme.shape.borderRadius,
            "& svg": {
                marginBottom: 0,
                marginRight: theme.spacing(1)
            },
            [theme.breakpoints.down("md")]: {
                minWidth: "100%",
                maxWidth: "100%"
            }
        }
    }));
const HelpCenterSubcategory = ({ data , activeTab  })=>{
    // ** State
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [tabValue, setTabValue] = (0,external_react_.useState)(activeTab);
    // ** Hook
    const router = (0,router_.useRouter)();
    const handleChange = (event, newValue)=>{
        setIsLoading(true);
        router.push(`/pages/help-center/${data.slug}/${newValue}`).then(()=>setIsLoading(false));
    };
    (0,external_react_.useEffect)(()=>{
        if (activeTab && activeTab !== tabValue) {
            setTabValue(activeTab);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        activeTab
    ]);
    const renderTabs = ()=>{
        return data && data.subCategories.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                value: tab.slug,
                label: tab.title
            }, tab.slug));
    };
    const renderContent = ()=>{
        const dataToRender = data.subCategories.filter((item)=>item.slug === tabValue)[0];
        return /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
            value: tabValue,
            sx: {
                p: 0,
                width: "100%"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mb: 7,
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                    skin: "light",
                                    variant: "rounded",
                                    sx: {
                                        mr: 3
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: dataToRender.icon
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: dataToRender.title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                mb: 6
                            },
                            children: dataToRender.articles.map((article)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        "&:not(:last-of-type)": {
                                            mb: 4
                                        },
                                        "& svg": {
                                            color: "text.disabled"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:chevron-right"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            component: (link_default()),
                                            sx: {
                                                ml: 1.5,
                                                color: "primary.main",
                                                textDecoration: "none"
                                            },
                                            href: `/pages/help-center/${data.slug}/${activeTab}/${article.slug}`,
                                            children: article.title
                                        })
                                    ]
                                }, article.title);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: (link_default()),
                            variant: "outlined",
                            href: "/pages/help-center",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:chevron-left"
                            }),
                            children: "Back to help center"
                        })
                    ]
                })
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((TabContext_default()), {
        value: tabValue,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                display: "flex",
                flexDirection: [
                    "column",
                    "column",
                    "row"
                ]
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mr: [
                            0,
                            0,
                            5
                        ],
                        mb: [
                            5,
                            5,
                            0
                        ],
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mb: 4,
                                fontWeight: 600
                            },
                            children: data.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TabList, {
                            orientation: "vertical",
                            onChange: handleChange,
                            "aria-label": "vertical tabs example",
                            children: renderTabs()
                        })
                    ]
                }),
                isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mt: 11,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                            sx: {
                                mb: 4
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: "Loading..."
                        })
                    ]
                }) : renderContent()
            ]
        })
    });
};
/* harmony default export */ const subcategory = (HelpCenterSubcategory);

;// CONCATENATED MODULE: ./src/pages/pages/help-center/[category]/[subcategory]/index.js
// ** Third Party Imports


// ** Demo Components Imports

const HelpCenterSubcategoryPage = ({ apiData  })=>{
    return apiData ? /*#__PURE__*/ jsx_runtime_.jsx(subcategory, {
        data: apiData.data,
        activeTab: apiData.activeTab
    }) : null;
};
const getStaticPaths = async ()=>{
    const res = await external_axios_default().get("/pages/help-center/subcategory", {
        params: {
            category: "getting-started"
        }
    });
    const apiData = await res.data;
    const paths = [];
    apiData.categories.forEach((category)=>category.subCategories.forEach((subcategory)=>{
            paths.push({
                params: {
                    category: `${category.slug}`,
                    subcategory: `${subcategory.slug}`
                }
            });
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const res = await external_axios_default().get("/pages/help-center/subcategory", {
        params: {
            category: params?.category,
            subcategory: params?.subcategory
        }
    });
    const apiData = await res.data;
    return {
        props: {
            apiData
        }
    };
};
/* harmony default export */ const _subcategory_ = (HelpCenterSubcategoryPage);


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

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

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

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9550,2024], () => (__webpack_exec__(8582)));
module.exports = __webpack_exports__;

})();