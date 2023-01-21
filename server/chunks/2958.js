"use strict";
exports.id = 2958;
exports.ids = [2958];
exports.modules = {

/***/ 2958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pricing_PricingPlans)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.js
var hex_to_rgba = __webpack_require__(5026);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
;// CONCATENATED MODULE: ./src/@core/components/plan-details/index.js
// ** MUI Imports





// ** Icon Imports

// ** Util Import

// ** Custom Components Imports

// ** Styled Component for the wrapper of whole component
const BoxWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        position: "relative",
        padding: theme.spacing(6),
        paddingTop: theme.spacing(14.75),
        borderRadius: theme.shape.borderRadius
    }));
// ** Styled Component for the wrapper of all the features of a plan
const BoxFeature = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        marginBottom: theme.spacing(5),
        "& > :not(:first-of-type)": {
            marginTop: theme.spacing(4)
        }
    }));
const PlanDetails = (props)=>{
    // ** Props
    const { plan , data  } = props;
    const renderFeatures = ()=>{
        return data?.planBenefits.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "span",
                        sx: {
                            display: "inline-flex",
                            color: "text.secondary",
                            mr: 2
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:circle-outline",
                            fontSize: "0.75rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: item
                    })
                ]
            }, index));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxWrapper, {
        sx: {
            border: (theme)=>!data?.popularPlan ? `1px solid ${theme.palette.divider}` : `1px solid ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.5)}`
        },
        children: [
            data?.popularPlan ? /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                skin: "light",
                label: "Popular",
                color: "primary",
                sx: {
                    top: 12,
                    right: 12,
                    height: 24,
                    position: "absolute",
                    "& .MuiChip-label": {
                        px: 1.75,
                        fontWeight: 600,
                        fontSize: "0.75rem"
                    }
                }
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    mb: 5,
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    width: data?.imgWidth,
                    src: `${data?.imgSrc}`,
                    height: data?.imgHeight,
                    alt: `${data?.title.toLowerCase().replace(" ", "-")}-plan-img`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        sx: {
                            mb: 1.5
                        },
                        children: data?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: data?.subtitle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            my: 7,
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mt: 1.6,
                                            fontWeight: 600,
                                            alignSelf: "flex-start"
                                        },
                                        children: "$"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h3",
                                        sx: {
                                            fontWeight: 600,
                                            color: "primary.main",
                                            lineHeight: 1.17
                                        },
                                        children: plan === "monthly" ? data?.monthlyPrice : data?.yearlyPlan.perMonth
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 1.6,
                                            fontWeight: 600,
                                            alignSelf: "flex-end"
                                        },
                                        children: "/month"
                                    })
                                ]
                            }),
                            plan !== "monthly" && data?.monthlyPrice !== 0 ? /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                sx: {
                                    top: 50,
                                    left: "50%",
                                    position: "absolute",
                                    transform: "translateX(-50%)"
                                },
                                children: `USD ${data?.yearlyPlan.totalAnnual}/year`
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BoxFeature, {
                children: renderFeatures()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                fullWidth: true,
                color: data?.currentPlan ? "success" : "primary",
                variant: data?.popularPlan ? "contained" : "outlined",
                children: data?.currentPlan ? "Your Current Plan" : "Upgrade"
            })
        ]
    });
};
/* harmony default export */ const plan_details = (PlanDetails);

;// CONCATENATED MODULE: ./src/views/pages/pricing/PricingPlans.js
// ** MUI Imports


// ** Custom Components Imports

const PricingPlans = (props)=>{
    // ** Props
    const { plan , data  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        container: true,
        spacing: 6,
        children: data?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(plan_details, {
                    plan: plan,
                    data: item
                })
            }, item.title.toLowerCase()))
    });
};
/* harmony default export */ const pricing_PricingPlans = (PricingPlans);


/***/ })

};
;