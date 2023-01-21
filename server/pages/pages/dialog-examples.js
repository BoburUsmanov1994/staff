(() => {
var exports = {};
exports.id = 5631;
exports.ids = [5631];
exports.modules = {

/***/ 2890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
// ** MUI Imports

const CardWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    display: "flex",
    "& .rccs, & .rccs__card": {
        margin: 0
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardWrapper);


/***/ }),

/***/ 1549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dialog_examples),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/Fade"
var Fade_ = __webpack_require__(5634);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "payment"
var external_payment_ = __webpack_require__(2863);
var external_payment_default = /*#__PURE__*/__webpack_require__.n(external_payment_);
// EXTERNAL MODULE: external "react-credit-cards"
var external_react_credit_cards_ = __webpack_require__(7568);
var external_react_credit_cards_default = /*#__PURE__*/__webpack_require__.n(external_react_credit_cards_);
// EXTERNAL MODULE: ./src/@core/utils/format.js
var format = __webpack_require__(9882);
// EXTERNAL MODULE: ./src/@core/styles/libs/react-credit-cards/index.js
var react_credit_cards = __webpack_require__(2890);
// EXTERNAL MODULE: ./node_modules/react-credit-cards/es/styles-compiled.css
var styles_compiled = __webpack_require__(1538);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogAddCard.js
// ** React Imports


// ** MUI Imports














// ** Third Party Imports


// ** Util Import

// ** Styled Component Imports

// ** Styles Import

// ** Icon Imports

const Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const DialogAddCard = ()=>{
    // ** States
    const [name, setName] = (0,external_react_.useState)("");
    const [show, setShow] = (0,external_react_.useState)(false);
    const [cvc, setCvc] = (0,external_react_.useState)("");
    const [cardNumber, setCardNumber] = (0,external_react_.useState)("");
    const [focus, setFocus] = (0,external_react_.useState)();
    const [expiry, setExpiry] = (0,external_react_.useState)("");
    const handleBlur = ()=>setFocus(undefined);
    const handleInputChange = ({ target  })=>{
        if (target.name === "number") {
            target.value = (0,format/* formatCreditCardNumber */.mf)(target.value, (external_payment_default()));
            setCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = (0,format/* formatExpirationDate */.N)(target.value);
            setExpiry(target.value);
        } else if (target.name === "cvc") {
            target.value = (0,format/* formatCVC */.tE)(target.value, cardNumber, (external_payment_default()));
            setCvc(target.value);
        }
    };
    const handleClose = ()=>{
        setShow(false);
        setCvc("");
        setName("");
        setExpiry("");
        setCardNumber("");
        setFocus(undefined);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:credit-card-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Add New Card"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Quickly collect the credit card details, built in input mask and form validation support."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: show,
                maxWidth: "sm",
                scroll: "body",
                onClose: handleClose,
                onBackdropClick: handleClose,
                TransitionComponent: Transition,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                        sx: {
                            pb: 6,
                            px: {
                                xs: 8,
                                sm: 15
                            },
                            pt: {
                                xs: 8,
                                sm: 12.5
                            },
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                onClick: handleClose,
                                sx: {
                                    position: "absolute",
                                    right: "1rem",
                                    top: "1rem"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:close"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 4,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        sx: {
                                            mb: 3,
                                            lineHeight: "2rem"
                                        },
                                        children: "Add New Card"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: "Add card for future billing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_credit_cards/* default */.Z, {
                                            sx: {
                                                "& .rccs": {
                                                    m: "0 auto",
                                                    display: {
                                                        xs: "none",
                                                        sm: "block"
                                                    }
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_credit_cards_default()), {
                                                cvc: cvc,
                                                focused: focus,
                                                expiry: expiry,
                                                name: name,
                                                number: cardNumber
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        sx: {
                                            pt: (theme)=>`${theme.spacing(5)} !important`
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                            container: true,
                                            spacing: 6,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    item: true,
                                                    xs: 12,
                                                    sx: {
                                                        mt: 7
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                        fullWidth: true,
                                                        name: "number",
                                                        value: cardNumber,
                                                        autoComplete: "off",
                                                        label: "Card Number",
                                                        onBlur: handleBlur,
                                                        onChange: handleInputChange,
                                                        placeholder: "0000 0000 0000 0000",
                                                        onFocus: (e)=>setFocus(e.target.name)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                        fullWidth: true,
                                                        name: "name",
                                                        value: name,
                                                        autoComplete: "off",
                                                        onBlur: handleBlur,
                                                        label: "Name on Card",
                                                        placeholder: "John Doe",
                                                        onChange: (e)=>setName(e.target.value),
                                                        onFocus: (e)=>setFocus(e.target.name)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                        fullWidth: true,
                                                        name: "expiry",
                                                        label: "Expiry",
                                                        value: expiry,
                                                        onBlur: handleBlur,
                                                        placeholder: "MM/YY",
                                                        onChange: handleInputChange,
                                                        inputProps: {
                                                            maxLength: "5"
                                                        },
                                                        onFocus: (e)=>setFocus(e.target.name)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    item: true,
                                                    xs: 12,
                                                    sm: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                        fullWidth: true,
                                                        name: "cvc",
                                                        label: "CVC",
                                                        value: cvc,
                                                        autoComplete: "off",
                                                        onBlur: handleBlur,
                                                        onChange: handleInputChange,
                                                        onFocus: (e)=>setFocus(e.target.name),
                                                        placeholder: external_payment_default().fns.cardType(cardNumber) === "amex" ? "1234" : "123"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    item: true,
                                                    xs: 12,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                            defaultChecked: true
                                                        }),
                                                        label: "Save Card for future billing?",
                                                        sx: {
                                                            "& .MuiTypography-root": {
                                                                color: "text.secondary"
                                                            }
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                        sx: {
                            pb: {
                                xs: 8,
                                sm: 12.5
                            },
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                sx: {
                                    mr: 2
                                },
                                onClick: handleClose,
                                children: "Submit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                color: "secondary",
                                onClick: handleClose,
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogAddCard = (DialogAddCard);

// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: ./src/views/pages/pricing/PricingPlans.js + 1 modules
var PricingPlans = __webpack_require__(2958);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogPricing.js
// ** React Imports


// ** MUI Imports











// ** Icon Imports

// ** Component Import

const DialogPricing_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const DialogPricing = ({ data  })=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:currency-usd",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Pricing"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Elegant pricing options dialog popup example, easy to use in any page."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                open: show,
                scroll: "body",
                maxWidth: "lg",
                onClose: ()=>setShow(false),
                TransitionComponent: DialogPricing_Transition,
                onBackdropClick: ()=>setShow(false),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    sx: {
                        px: {
                            xs: 8,
                            sm: 15
                        },
                        py: {
                            xs: 8,
                            sm: 12.5
                        },
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: ()=>setShow(false),
                            sx: {
                                position: "absolute",
                                right: "1rem",
                                top: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:close"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mb: 4,
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    sx: {
                                        mb: 3,
                                        lineHeight: "2rem"
                                    },
                                    children: "Subscription Plan"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mb: 7,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    htmlFor: "modal-pricing-switch",
                                    sx: {
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        fontSize: "0.875rem"
                                    },
                                    children: "Monthly"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                    color: "secondary",
                                    onChange: handleChange,
                                    id: "modal-pricing-switch",
                                    checked: plan === "annually"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    htmlFor: "modal-pricing-switch",
                                    sx: {
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        fontSize: "0.875rem"
                                    },
                                    children: "Annually"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PricingPlans/* default */.Z, {
                            data: data,
                            plan: plan
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mt: 6,
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        mb: 2.5
                                    },
                                    children: "Still Not Convinced? Start with a 14-day FREE trial!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    onClick: ()=>setShow(false),
                                    children: "Start your trial"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogPricing = (DialogPricing);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(7730);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogReferEarn.js
// ** React Imports


// ** MUI Imports
















// ** Icon Imports

// ** Custom Components Imports

const DialogReferEarn_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const FacebookBtn = (0,styles_.styled)((IconButton_default()))(({ theme  })=>{
    return {
        color: theme.palette.common.white,
        backgroundColor: "#3B5998 !important",
        borderRadius: theme.shape.borderRadius
    };
});
const TwitterBtn = (0,styles_.styled)((IconButton_default()))(({ theme  })=>{
    return {
        margin: theme.spacing(0, 3),
        color: theme.palette.common.white,
        backgroundColor: "#55ACEE !important",
        borderRadius: theme.shape.borderRadius
    };
});
const LinkedInBtn = (0,styles_.styled)((IconButton_default()))(({ theme  })=>{
    return {
        color: theme.palette.common.white,
        backgroundColor: "#007BB6 !important",
        borderRadius: theme.shape.borderRadius
    };
});
const DialogReferEarn = ()=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:gift-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Refer & Earn"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: show,
                maxWidth: "md",
                scroll: "body",
                onClose: ()=>setShow(false),
                TransitionComponent: DialogReferEarn_Transition,
                onBackdropClick: ()=>setShow(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                        sx: {
                            pb: 10,
                            px: [
                                8,
                                15
                            ],
                            pt: [
                                8,
                                12.5
                            ],
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                onClick: ()=>setShow(false),
                                sx: {
                                    position: "absolute",
                                    right: "1rem",
                                    top: "1rem"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:close"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 10,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        sx: {
                                            mb: 3,
                                            lineHeight: "2rem"
                                        },
                                        children: "Refer & Earn"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: "Invite your friend to vuexy, if thay sign up, you and your friend will get 30 days free trial"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                sx: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 4,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                                    skin: "light",
                                                    color: "primary",
                                                    sx: {
                                                        mb: 2.5,
                                                        width: [
                                                            70,
                                                            100
                                                        ],
                                                        height: [
                                                            70,
                                                            100
                                                        ],
                                                        "& svg": {
                                                            fontSize: [
                                                                "2.2rem",
                                                                "2.5rem"
                                                            ]
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:message-outline"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mb: 3,
                                                        fontWeight: "600"
                                                    },
                                                    children: "Send Invitation \uD83D\uDC4D\uD83C\uDFFB"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        textAlign: "center",
                                                        maxWidth: "200px"
                                                    },
                                                    children: "Send your referral link to your friend"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 4,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                                    skin: "light",
                                                    color: "primary",
                                                    sx: {
                                                        mb: 2.5,
                                                        width: [
                                                            70,
                                                            100
                                                        ],
                                                        height: [
                                                            70,
                                                            100
                                                        ],
                                                        "& svg": {
                                                            fontSize: [
                                                                "2.2rem",
                                                                "2.5rem"
                                                            ]
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:clipboard-outline"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mb: 3,
                                                        fontWeight: "600"
                                                    },
                                                    children: "Registration \uD83D\uDE0E"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        textAlign: "center",
                                                        maxWidth: "200px"
                                                    },
                                                    children: "Let them register to our services"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 4,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                                    skin: "light",
                                                    color: "primary",
                                                    sx: {
                                                        mb: 2.5,
                                                        width: [
                                                            70,
                                                            100
                                                        ],
                                                        height: [
                                                            70,
                                                            100
                                                        ],
                                                        "& svg": {
                                                            fontSize: [
                                                                "2.2rem",
                                                                "2.5rem"
                                                            ]
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:license"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mb: 3,
                                                        fontWeight: "600"
                                                    },
                                                    children: "Free Trial \uD83C\uDF89"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        textAlign: "center",
                                                        maxWidth: "200px"
                                                    },
                                                    children: "Your friend will get 30 days free trial"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            m: "0 !important"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                        sx: {
                            pt: 7.5,
                            px: [
                                8,
                                15
                            ],
                            pb: [
                                8,
                                12.5
                            ],
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 8
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            mb: 4,
                                            lineHeight: "2rem"
                                        },
                                        children: "Invite your friends"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                        htmlFor: "refer-email",
                                        sx: {
                                            mb: 2.5,
                                            fontSize: "0.875rem",
                                            lineHeight: "1.25rem",
                                            display: "inline-flex",
                                            whiteSpace: "break-spaces"
                                        },
                                        children: "Enter your friend’s email address and invite them to join Materialize \uD83D\uDE0D"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            width: "100%",
                                            flexWrap: {
                                                xs: "wrap",
                                                sm: "nowrap"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                fullWidth: true,
                                                size: "small",
                                                id: "refer-email",
                                                sx: {
                                                    mr: {
                                                        xs: 0,
                                                        sm: 4
                                                    }
                                                },
                                                placeholder: "johnDoe@email.com"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "contained",
                                                sx: {
                                                    mt: {
                                                        xs: 2,
                                                        sm: 0
                                                    },
                                                    width: {
                                                        xs: "100%",
                                                        sm: "auto"
                                                    }
                                                },
                                                children: "Send"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            mb: 4,
                                            lineHeight: "2rem"
                                        },
                                        children: "Share the referral link"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                        htmlFor: "refer-social",
                                        sx: {
                                            mb: 2.5,
                                            fontSize: "0.875rem",
                                            lineHeight: "1.25rem",
                                            display: "inline-flex",
                                            whiteSpace: "break-spaces"
                                        },
                                        children: "You can also copy and send it or share it on your social media. \uD83D\uDE80"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            flexWrap: [
                                                "wrap",
                                                "nowrap"
                                            ],
                                            justifyContent: [
                                                "flex-end",
                                                "initial"
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                fullWidth: true,
                                                size: "small",
                                                id: "refer-social",
                                                sx: {
                                                    pr: 1.25,
                                                    mr: [
                                                        0,
                                                        4
                                                    ]
                                                },
                                                placeholder: "http://referral.link",
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        size: "small",
                                                        children: "Copy Link"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mt: [
                                                        2,
                                                        0
                                                    ],
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(FacebookBtn, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: "mdi:facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TwitterBtn, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: "mdi:twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkedInBtn, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: "mdi:linkedin"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogReferEarn = (DialogReferEarn);

// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
var TabList_default = /*#__PURE__*/__webpack_require__.n(TabList_);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: ./src/@core/hooks/useSettings.js
var useSettings = __webpack_require__(1514);
// EXTERNAL MODULE: external "@mui/material/Radio"
var Radio_ = __webpack_require__(5374);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/create-app-tabs/DialogTabDetails.js
// ** React Imports


// ** MUI Imports




// ** Icon Imports

// ** Custom Avatar Component

const TabDetails = ()=>{
    const [value, setValue] = (0,external_react_.useState)("ecommerce");
    const handleChange = (event)=>{
        setValue(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                fullWidth: true,
                sx: {
                    mb: 4
                },
                label: "Application Name",
                placeholder: "Materialize Admin"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    mb: 4
                },
                children: "Category"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 8
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("crm"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "info",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:briefcase-outline"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "CRM Application"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Scales with any business"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "crm",
                                onChange: handleChange,
                                checked: value === "crm"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("ecommerce"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "success",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:cart-outline"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "Ecommerce Platforms"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Grow Your Business With App"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "ecommerce",
                                onChange: handleChange,
                                checked: value === "ecommerce"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("learning"),
                        sx: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "error",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:license"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "Online Learning platform"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Start learning today"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "learning",
                                onChange: handleChange,
                                checked: value === "learning"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const DialogTabDetails = (TabDetails);

;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/create-app-tabs/DialogTabBilling.js
// ** React Imports


// ** MUI Imports




// ** Third Party Imports


// ** Util Import

// ** Styled Component Imports

// ** Styles Import

const TabBilling = ()=>{
    // ** States
    const [name, setName] = (0,external_react_.useState)("");
    const [cvc, setCvc] = (0,external_react_.useState)("");
    const [cardNumber, setCardNumber] = (0,external_react_.useState)("");
    const [focus, setFocus] = (0,external_react_.useState)();
    const [expiry, setExpiry] = (0,external_react_.useState)("");
    const handleBlur = ()=>setFocus(undefined);
    const handleInputChange = ({ target  })=>{
        if (target.name === "number") {
            target.value = (0,format/* formatCreditCardNumber */.mf)(target.value, (external_payment_default()));
            setCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = (0,format/* formatExpirationDate */.N)(target.value);
            setExpiry(target.value);
        } else if (target.name === "cvc") {
            target.value = (0,format/* formatCVC */.tE)(target.value, cardNumber, (external_payment_default()));
            setCvc(target.value);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sx: {
                    pt: (theme)=>[
                            "0 !important",
                            `${theme.spacing(6)} !important`
                        ]
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_credit_cards/* default */.Z, {
                    sx: {
                        "& .rccs": {
                            m: "0 auto",
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_credit_cards_default()), {
                        cvc: cvc,
                        focused: focus,
                        expiry: expiry,
                        name: name,
                        number: cardNumber
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    fullWidth: true,
                    name: "number",
                    value: cardNumber,
                    autoComplete: "off",
                    label: "Card Number",
                    onBlur: handleBlur,
                    onChange: handleInputChange,
                    placeholder: "0000 0000 0000 0000",
                    onFocus: (e)=>setFocus(e.target.name)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    fullWidth: true,
                    name: "name",
                    value: name,
                    autoComplete: "off",
                    onBlur: handleBlur,
                    label: "Name on Card",
                    placeholder: "John Doe",
                    onChange: (e)=>setName(e.target.value),
                    onFocus: (e)=>setFocus(e.target.name)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 6,
                sm: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    fullWidth: true,
                    name: "expiry",
                    label: "Expiry",
                    value: expiry,
                    onBlur: handleBlur,
                    placeholder: "MM/YY",
                    onChange: handleInputChange,
                    inputProps: {
                        maxLength: "5"
                    },
                    onFocus: (e)=>setFocus(e.target.name)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 6,
                sm: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    fullWidth: true,
                    name: "cvc",
                    label: "CVC",
                    value: cvc,
                    autoComplete: "off",
                    onBlur: handleBlur,
                    onChange: handleInputChange,
                    onFocus: (e)=>setFocus(e.target.name),
                    placeholder: external_payment_default().fns.cardType(cardNumber) === "amex" ? "1234" : "123"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                        defaultChecked: true
                    }),
                    label: "Save Card for future billing?",
                    sx: {
                        "& .MuiTypography-root": {
                            color: "text.secondary"
                        }
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const DialogTabBilling = (TabBilling);

;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/create-app-tabs/DialogTabDatabase.js
// ** React Imports


// ** MUI Imports




// ** Icon Imports

// ** Custom Avatar Component

const TabDatabase = ()=>{
    const [value, setValue] = (0,external_react_.useState)("firebase");
    const handleChange = (event)=>{
        setValue(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                fullWidth: true,
                sx: {
                    mb: 4
                },
                label: "Database Name",
                placeholder: "materialize_database"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    mb: 4
                },
                children: "Select Database Engine"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 8
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("firebase"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "error",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:firebase"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "Firebase"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Cloud Firestore"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "firebase",
                                onChange: handleChange,
                                checked: value === "firebase"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("aws"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "warning",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:aws"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "AWS"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Amazon Fast NoSQL Database"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "aws",
                                onChange: handleChange,
                                checked: value === "aws"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("sql"),
                        sx: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "info",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:database-outline"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "MySQL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Basic MySQL database"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "sql",
                                onChange: handleChange,
                                checked: value === "sql"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const DialogTabDatabase = (TabDatabase);

;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/create-app-tabs/DialogTabFramework.js
// ** React Imports


// ** MUI Imports



// ** Icon Imports

// ** Custom Avatar Component

const TabFramework = ()=>{
    const [value, setValue] = (0,external_react_.useState)("react");
    const handleChange = (event)=>{
        setValue(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    mb: 4
                },
                children: "Select Framework"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 8
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("react"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "info",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:react"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "React Native"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Create truly native apps"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "react",
                                onChange: handleChange,
                                checked: value === "react"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("angular"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "error",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:angular"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "Angular"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Most suited for your application"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "angular",
                                onChange: handleChange,
                                checked: value === "angular"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("vuejs"),
                        sx: {
                            mb: 6,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "success",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:vuejs"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "Vue"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "Progressive Framework"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "vuejs",
                                onChange: handleChange,
                                checked: value === "vuejs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        onClick: ()=>setValue("laravel"),
                        sx: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        color: "warning",
                                        variant: "rounded",
                                        sx: {
                                            mr: 3,
                                            width: 48,
                                            height: 48
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:laravel"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: "Laravel"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "caption",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "PHP web frameworks"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                value: "laravel",
                                onChange: handleChange,
                                checked: value === "laravel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const DialogTabFramework = (TabFramework);

;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogCreateApp.js
// ** React Imports


// ** MUI Imports














// ** Icon Imports

// ** Hook Imports

// ** Tab Content Imports




const DialogCreateApp_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const TabLabel = (props)=>{
    const { icon , title , subtitle , active  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                display: "flex",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    variant: "rounded",
                    sx: {
                        mr: 3.5,
                        ...active ? {
                            color: "common.white",
                            backgroundColor: "primary.main"
                        } : {
                            color: "text.primary"
                        }
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        textAlign: "left"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                color: "text.disabled",
                                textTransform: "none"
                            },
                            children: subtitle
                        })
                    ]
                })
            ]
        })
    });
};
const tabsArr = [
    "detailsTab",
    "frameworkTab",
    "DatabaseTab",
    "paymentTab",
    "submitTab"
];
const DialogCreateApp = ()=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
    const [activeTab, setActiveTab] = (0,external_react_.useState)("detailsTab");
    // ** Hook
    const { settings  } = (0,useSettings/* useSettings */.r)();
    // ** Var
    const { direction  } = settings;
    const handleClose = ()=>{
        setShow(false);
        setActiveTab("detailsTab");
    };
    const nextArrow = direction === "ltr" ? "mdi:arrow-right" : "mdi:arrow-left";
    const previousArrow = direction === "ltr" ? "mdi:arrow-left" : "mdi:arrow-right";
    const renderTabFooter = ()=>{
        const prevTab = tabsArr[tabsArr.indexOf(activeTab) - 1];
        const nextTab = tabsArr[tabsArr.indexOf(activeTab) + 1];
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                mt: 8.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "outlined",
                    color: "secondary",
                    disabled: activeTab === "detailsTab",
                    onClick: ()=>setActiveTab(prevTab),
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: previousArrow
                    }),
                    children: "Previous"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: activeTab === "submitTab" ? "success" : "primary",
                    endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: activeTab === "submitTab" ? "mdi:check" : nextArrow
                    }),
                    onClick: ()=>{
                        if (activeTab !== "submitTab") {
                            setActiveTab(nextTab);
                        } else {
                            handleClose();
                        }
                    },
                    children: activeTab === "submitTab" ? "Submit" : "Next"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:cube-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Create App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Provide application data with this form to create the app dialog popup example, easy to use in any page."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                open: show,
                scroll: "body",
                maxWidth: "md",
                onClose: handleClose,
                onBackdropClick: handleClose,
                TransitionComponent: DialogCreateApp_Transition,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    sx: {
                        position: "relative",
                        pr: {
                            xs: 5,
                            sm: 12
                        },
                        pl: {
                            xs: 4,
                            sm: 11
                        },
                        pt: {
                            xs: 8,
                            sm: 12.5
                        },
                        pb: {
                            xs: 5,
                            sm: 12.5
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: handleClose,
                            sx: {
                                position: "absolute",
                                right: "1rem",
                                top: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:close"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mb: 3,
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    sx: {
                                        mb: 3,
                                        lineHeight: "2rem"
                                    },
                                    children: "Create App"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Provide data with this form to create your app."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: "flex",
                                flexWrap: {
                                    xs: "wrap",
                                    md: "nowrap"
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContext_default()), {
                                value: activeTab,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabList_default()), {
                                        orientation: "vertical",
                                        onChange: (e, newValue)=>setActiveTab(newValue),
                                        sx: {
                                            border: 0,
                                            minWidth: 200,
                                            "& .MuiTabs-indicator": {
                                                display: "none"
                                            },
                                            "& .MuiTabs-flexContainer": {
                                                alignItems: "flex-start",
                                                "& .MuiTab-root": {
                                                    width: "100%",
                                                    alignItems: "flex-start"
                                                }
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                disableRipple: true,
                                                value: "detailsTab",
                                                label: /*#__PURE__*/ jsx_runtime_.jsx(TabLabel, {
                                                    title: "Details",
                                                    subtitle: "Enter Details",
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:clipboard-outline"
                                                    }),
                                                    active: activeTab === "detailsTab"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                disableRipple: true,
                                                value: "frameworkTab",
                                                label: /*#__PURE__*/ jsx_runtime_.jsx(TabLabel, {
                                                    title: "Frameworks",
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:star-outline"
                                                    }),
                                                    subtitle: "Select Framework",
                                                    active: activeTab === "frameworkTab"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                disableRipple: true,
                                                value: "DatabaseTab",
                                                label: /*#__PURE__*/ jsx_runtime_.jsx(TabLabel, {
                                                    title: "Database",
                                                    active: activeTab === "DatabaseTab",
                                                    subtitle: "Select Database",
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:chart-donut"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                disableRipple: true,
                                                value: "paymentTab",
                                                label: /*#__PURE__*/ jsx_runtime_.jsx(TabLabel, {
                                                    title: "Billing",
                                                    active: activeTab === "paymentTab",
                                                    subtitle: "Payment details",
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:credit-card-outline"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                disableRipple: true,
                                                value: "submitTab",
                                                label: /*#__PURE__*/ jsx_runtime_.jsx(TabLabel, {
                                                    title: "Submit",
                                                    subtitle: "Submit",
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:check"
                                                    }),
                                                    active: activeTab === "submitTab"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                                        value: "detailsTab",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTabDetails, {}),
                                            renderTabFooter()
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                                        value: "frameworkTab",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTabFramework, {}),
                                            renderTabFooter()
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                                        value: "DatabaseTab",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTabDatabase, {}),
                                            renderTabFooter()
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                                        value: "paymentTab",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTabBilling, {}),
                                            renderTabFooter()
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                                        value: "submitTab",
                                        sx: {
                                            flexGrow: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h6",
                                                        children: "Submit"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Submit to kickstart your project."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                        sx: {
                                                            mt: 5,
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            alt: "submit-img",
                                                            src: `/images/pages/create-app-dialog-illustration-${settings.mode}.png`
                                                        })
                                                    })
                                                ]
                                            }),
                                            renderTabFooter()
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogCreateApp = (DialogCreateApp);

// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: ./src/@core/hooks/useBgColor.js
var useBgColor = __webpack_require__(9550);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogAddAddress.js
// ** React Imports


// ** MUI Imports


















// ** Icon Imports

// ** Hooks

const DialogAddAddress_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const DialogAddAddress = ()=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
    const [addressType, setAddressType] = (0,external_react_.useState)("home");
    // ** Hooks
    const bgColors = (0,useBgColor/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:home-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Add New Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Ready to use form to collect user address data with validation and custom input support."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: show,
                maxWidth: "md",
                scroll: "body",
                onClose: ()=>setShow(false),
                TransitionComponent: DialogAddAddress_Transition,
                onBackdropClick: ()=>setShow(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                        sx: {
                            pb: 6,
                            px: {
                                xs: 8,
                                sm: 15
                            },
                            pt: {
                                xs: 8,
                                sm: 12.5
                            },
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                onClick: ()=>setShow(false),
                                sx: {
                                    position: "absolute",
                                    right: "1rem",
                                    top: "1rem"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:close"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 9,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        sx: {
                                            mb: 3,
                                            lineHeight: "2rem"
                                        },
                                        children: "Add New Address"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: "Add address for billing address"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            onClick: ()=>setAddressType("home"),
                                            sx: {
                                                py: 3,
                                                px: 4,
                                                borderRadius: 1,
                                                cursor: "pointer",
                                                ...addressType === "home" ? {
                                                    ...bgColors.primaryLight
                                                } : {
                                                    backgroundColor: "action.hover"
                                                },
                                                border: (theme)=>`1px solid ${addressType === "home" ? theme.palette.primary.main : theme.palette.secondary.main}`,
                                                ...addressType === "home" ? {
                                                    ...bgColors.primaryLight
                                                } : {
                                                    backgroundColor: bgColors.secondaryLight.backgroundColor
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mb: 1,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        "& svg": {
                                                            mr: 2
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: "mdi:home-outline"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                ...addressType === "home" ? {
                                                                    color: "primary.main"
                                                                } : {}
                                                            },
                                                            children: "Home"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        ...addressType === "home" ? {
                                                            color: "primary.main"
                                                        } : {}
                                                    },
                                                    children: "Delivery Time (7am - 9pm)"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            onClick: ()=>setAddressType("office"),
                                            sx: {
                                                py: 3,
                                                px: 4,
                                                borderRadius: 1,
                                                cursor: "pointer",
                                                ...addressType === "office" ? {
                                                    ...bgColors.primaryLight
                                                } : {
                                                    backgroundColor: "action.hover"
                                                },
                                                border: (theme)=>`1px solid ${addressType === "office" ? theme.palette.primary.main : theme.palette.secondary.main}`,
                                                ...addressType === "office" ? {
                                                    ...bgColors.primaryLight
                                                } : {
                                                    backgroundColor: bgColors.secondaryLight.backgroundColor
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mb: 1,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        "& svg": {
                                                            mr: 2
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: "mdi:briefcase-outline"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                ...addressType === "office" ? {
                                                                    color: "primary.main"
                                                                } : {}
                                                            },
                                                            children: "Office"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        ...addressType === "office" ? {
                                                            color: "primary.main"
                                                        } : {}
                                                    },
                                                    children: "Delivery Time (10am - 6pm)"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "First Name",
                                            placeholder: "John"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Last Name",
                                            placeholder: "Doe"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "country-select",
                                                    children: "Country"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    fullWidth: true,
                                                    placeholder: "UK",
                                                    label: "Country",
                                                    labelId: "country-select",
                                                    defaultValue: "Select Country",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Select Country",
                                                            children: "Select Country"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "France",
                                                            children: "France"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Russia",
                                                            children: "Russia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "China",
                                                            children: "China"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "UK",
                                                            children: "UK"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "US",
                                                            children: "US"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Address Line 1",
                                            placeholder: "12, Business Park"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Address Line 2",
                                            placeholder: "Mall Road"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Town",
                                            placeholder: "Los Angeles"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "State / Province",
                                            placeholder: "California"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Zip Code",
                                            placeholder: "99950"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                defaultChecked: true
                                            }),
                                            label: "Make this default shipping address"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                        sx: {
                            pb: {
                                xs: 8,
                                sm: 12.5
                            },
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                sx: {
                                    mr: 2
                                },
                                onClick: ()=>setShow(false),
                                children: "Submit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                color: "secondary",
                                onClick: ()=>setShow(false),
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogAddAddress = (DialogAddAddress);

// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/ListItemAvatar"
var ListItemAvatar_ = __webpack_require__(2101);
var ListItemAvatar_default = /*#__PURE__*/__webpack_require__.n(ListItemAvatar_);
// EXTERNAL MODULE: external "@mui/material/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__(1211);
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(152);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogShareProject.js
// ** React Imports


// ** MUI Imports





















// ** Icon Imports

// ** Configs Imports

// ** Hooks Imports

const DialogShareProject_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const data = [
    {
        avatar: "1.png",
        value: "Can Edit",
        name: "Lester Palmer",
        email: "pe@vogeiz.net"
    },
    {
        avatar: "2.png",
        value: "owner",
        name: "Mittie Blair",
        email: "peromak@zukedohik.gov"
    },
    {
        avatar: "3.png",
        value: "Can Comment",
        name: "Marvin Wheeler",
        email: "rumet@jujpejah.net"
    },
    {
        avatar: "4.png",
        value: "Can View",
        name: "Nannie Ford",
        email: "negza@nuv.io"
    },
    {
        avatar: "5.png",
        value: "Can Edit",
        name: "Julian Murphy",
        email: "lunebame@umdomgu.net"
    },
    {
        avatar: "6.png",
        value: "Can View",
        name: "Sophie Gilbert",
        email: "ha@sugit.gov"
    },
    {
        avatar: "7.png",
        value: "Can Comment",
        name: "Chris Watkins",
        email: "zokap@mak.org"
    },
    {
        avatar: "8.png",
        value: "Can Edit",
        name: "Adelaide Nichols",
        email: "ujinomu@jigo.com"
    }
];
const options = [
    {
        avatar: "1.png",
        name: "Chandler Bing"
    },
    {
        avatar: "2.png",
        name: "Rachel Green"
    },
    {
        avatar: "3.png",
        name: "Joey Tribbiani"
    },
    {
        avatar: "4.png",
        name: "Pheobe Buffay"
    },
    {
        avatar: "5.png",
        name: "Ross Geller"
    },
    {
        avatar: "8.png",
        name: "Monica Geller"
    }
];
const DialogShareProject = ()=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    // ** Hooks
    const { settings  } = (0,useSettings/* useSettings */.r)();
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("sm"));
    // ** Var
    const { direction  } = settings;
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:file-document-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Share Project"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Elegant Share Project options modal popup example, easy to use in any page."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                open: show,
                maxWidth: "md",
                scroll: "body",
                onClose: ()=>setShow(false),
                TransitionComponent: DialogShareProject_Transition,
                onBackdropClick: ()=>setShow(false),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    sx: {
                        px: {
                            xs: 8,
                            sm: 15
                        },
                        py: {
                            xs: 8,
                            sm: 12.5
                        },
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: ()=>setShow(false),
                            sx: {
                                position: "absolute",
                                right: "1rem",
                                top: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:close"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mb: 4,
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    sx: {
                                        mb: 3,
                                        lineHeight: "2rem"
                                    },
                                    children: "Share Project"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Share project with a team members"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                            htmlFor: "add-members",
                            sx: {
                                mb: 1.5,
                                fontWeight: 500,
                                lineHeight: "2rem",
                                display: "inline-flex",
                                fontSize: [
                                    "1.125rem",
                                    "1.25rem"
                                ]
                            },
                            children: "Add Members"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                            autoHighlight: true,
                            sx: {
                                mb: 8
                            },
                            id: "add-members",
                            options: options,
                            ListboxComponent: (List_default()),
                            getOptionLabel: (option)=>option.name,
                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    ...params,
                                    size: "small",
                                    placeholder: "Add project members..."
                                }),
                            renderOption: (props, option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                    ...props,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                src: `/images/avatars/${option.avatar}`,
                                                alt: option.name,
                                                sx: {
                                                    height: 28,
                                                    width: 28
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: option.name
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            children: `${data.length} Members`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                            dense: true,
                            sx: {
                                py: 4
                            },
                            children: data.map((member)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                    sx: {
                                        p: 0,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        ".MuiListItem-container:not(:last-child) &": {
                                            mb: 4
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemAvatar_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                src: `/images/avatars/${member.avatar}`,
                                                alt: member.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: member.name,
                                            secondary: member.email,
                                            sx: {
                                                m: 0,
                                                "& .MuiListItemText-primary, & .MuiListItemText-secondary": {
                                                    lineHeight: "1.25rem"
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemSecondaryAction_default()), {
                                            sx: {
                                                right: 0
                                            },
                                            children: hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                size: "small",
                                                "aria-haspopup": "true",
                                                onClick: handleClick,
                                                "aria-controls": "modal-share-examples",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:chevron-down",
                                                    fontSize: 20
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    color: "secondary",
                                                    "aria-haspopup": "true",
                                                    onClick: handleClick,
                                                    sx: {
                                                        textTransform: "capitalize"
                                                    },
                                                    "aria-controls": "modal-share-examples",
                                                    endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:chevron-down",
                                                        fontSize: 20
                                                    }),
                                                    children: member.value
                                                })
                                            })
                                        })
                                    ]
                                }, member.name);
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        "& svg": {
                                            mr: 2
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:account-multiple-outline",
                                            fontSize: "1.25rem"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 600,
                                                fontSize: "0.875rem"
                                            },
                                            children: `Public to ${themeConfig/* default.templateName */.Z.templateName} - Pixinvent`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                    sx: {
                                        lineHeight: "1.5rem",
                                        "& svg": {
                                            mr: 2
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:link-variant",
                                            fontSize: 20
                                        }),
                                        "Copy Project Link"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                            keepMounted: true,
                            anchorEl: anchorEl,
                            onClose: handleClose,
                            open: Boolean(anchorEl),
                            id: "modal-share-examples",
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: direction === "ltr" ? "right" : "left"
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: direction === "ltr" ? "right" : "left"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: "owner",
                                    sx: {
                                        fontSize: "0.875rem"
                                    },
                                    onClick: handleClose,
                                    children: "Owner"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: "Can Edit",
                                    sx: {
                                        fontSize: "0.875rem"
                                    },
                                    onClick: handleClose,
                                    children: "Can Edit"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: "Can Comment",
                                    sx: {
                                        fontSize: "0.875rem"
                                    },
                                    onClick: handleClose,
                                    children: "Can Comment"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: "Can View",
                                    sx: {
                                        fontSize: "0.875rem"
                                    },
                                    onClick: handleClose,
                                    children: "Can View"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogShareProject = (DialogShareProject);

// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogEditUserInfo.js
// ** React Imports


// ** MUI Imports



















// ** Icon Imports

const DialogEditUserInfo_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const DialogEditUserInfo = ()=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
    const [languages, setLanguages] = (0,external_react_.useState)([]);
    const handleChange = (event)=>{
        const { target: { value  }  } = event;
        setLanguages(typeof value === "string" ? value.split(",") : value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:account-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Edit User Info"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Use this modal to modify the existing user′s current information."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: show,
                maxWidth: "md",
                scroll: "body",
                onClose: ()=>setShow(false),
                TransitionComponent: DialogEditUserInfo_Transition,
                onBackdropClick: ()=>setShow(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                        sx: {
                            pb: 6,
                            px: {
                                xs: 8,
                                sm: 15
                            },
                            pt: {
                                xs: 8,
                                sm: 12.5
                            },
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                onClick: ()=>setShow(false),
                                sx: {
                                    position: "absolute",
                                    right: "1rem",
                                    top: "1rem"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:close"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 8,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        sx: {
                                            mb: 3,
                                            lineHeight: "2rem"
                                        },
                                        children: "Edit User Information"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: "Updating user details will receive a privacy audit."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            defaultValue: "Oliver",
                                            label: "First Name",
                                            placeholder: "John"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            defaultValue: "Queen",
                                            label: "Last Name",
                                            placeholder: "Doe"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            defaultValue: "oliverQueen",
                                            label: "Username",
                                            placeholder: "johnDoe"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Billing Email",
                                            placeholder: "johnDoe@email.com",
                                            defaultValue: "oliverQueen@email.com"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "status-select",
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    defaultValue: "Status",
                                                    fullWidth: true,
                                                    labelId: "status-select",
                                                    label: "Status",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Status",
                                                            children: "Status"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Active",
                                                            children: "Active"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Inactive",
                                                            children: "Inactive"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Suspended",
                                                            children: "Suspended"
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Tax ID",
                                            placeholder: "Tax-7490",
                                            defaultValue: "Tax-8894"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            label: "Contact",
                                            placeholder: "+ 123 456 7890",
                                            defaultValue: "+1 609 933 4422"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "language-select",
                                                    children: "Language"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    multiple: true,
                                                    fullWidth: true,
                                                    label: "Language",
                                                    value: languages,
                                                    onChange: handleChange,
                                                    labelId: "language-select",
                                                    renderValue: (selected)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                flexWrap: "wrap",
                                                                gap: 0.5
                                                            },
                                                            children: selected.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                                                    label: value
                                                                }, value))
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "English",
                                                            children: "English"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Spanish",
                                                            children: "Spanish"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "French",
                                                            children: "French"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "German",
                                                            children: "German"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Hindi",
                                                            children: "Hindi"
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
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "country-select",
                                                    children: "Country"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    fullWidth: true,
                                                    label: "Country",
                                                    placeholder: "UK",
                                                    labelId: "country-select",
                                                    defaultValue: "Select Country",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Select Country",
                                                            children: "Select Country"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "France",
                                                            children: "France"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Russia",
                                                            children: "Russia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "China",
                                                            children: "China"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "UK",
                                                            children: "UK"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "US",
                                                            children: "US"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                defaultChecked: true
                                            }),
                                            label: "Make this default shipping address",
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    color: "text.secondary"
                                                }
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                        sx: {
                            pb: {
                                xs: 8,
                                sm: 12.5
                            },
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                sx: {
                                    mr: 2
                                },
                                onClick: ()=>setShow(false),
                                children: "Submit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                color: "secondary",
                                onClick: ()=>setShow(false),
                                children: "Discard"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogEditUserInfo = (DialogEditUserInfo);

// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "@mui/material/AlertTitle"
var AlertTitle_ = __webpack_require__(5992);
var AlertTitle_default = /*#__PURE__*/__webpack_require__.n(AlertTitle_);
;// CONCATENATED MODULE: ./src/views/pages/dialog-examples/DialogAuthentication.js
// ** React Imports


// ** MUI Imports













// ** Icon Imports

// ** Hooks


const DialogAuthentication_Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        ref: ref,
        ...props
    });
});
const DialogAuthentication = ()=>{
    // ** States
    const [show, setShow] = (0,external_react_.useState)(false);
    const [authType, setAuthType] = (0,external_react_.useState)("app");
    const [showAuthDialog, setShowAuthDialog] = (0,external_react_.useState)(false);
    // ** Hooks
    const bgColors = (0,useBgColor/* default */.Z)();
    const { settings  } = (0,useSettings/* useSettings */.r)();
    // ** Var
    const { direction  } = settings;
    const handleClose = ()=>{
        setShow(false);
        setAuthType("app");
    };
    const handleAuthDialogClose = ()=>{
        if (show) {
            setShow(false);
        }
        setShowAuthDialog(false);
        if (authType !== "app") {
            setTimeout(()=>{
                setAuthType("app");
            }, 250);
        }
    };
    const arrowIcon = direction === "ltr" ? "mdi:chevron-right" : "mdi:chevron-left";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    textAlign: "center",
                    "& svg": {
                        mb: 2
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:lock-outline",
                        fontSize: "2rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 4
                        },
                        children: "Two Factor Auth"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 3
                        },
                        children: "Enhance your application security by enabling two factor authentication."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setShow(true),
                        children: "Show"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                open: show,
                maxWidth: "md",
                scroll: "body",
                onClose: handleClose,
                onBackdropClick: handleClose,
                TransitionComponent: DialogAuthentication_Transition,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    sx: {
                        px: {
                            xs: 8,
                            sm: 15
                        },
                        py: {
                            xs: 8,
                            sm: 12.5
                        },
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: handleClose,
                            sx: {
                                position: "absolute",
                                right: "1rem",
                                top: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:close"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 3,
                                            textAlign: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "h5",
                                                sx: {
                                                    mb: 3,
                                                    lineHeight: "2rem"
                                                },
                                                children: "Select Authentication Method"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                children: "You also need to select a method by which the proxy authenticates to the directory serve."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        onClick: ()=>setAuthType("app"),
                                        sx: {
                                            pt: 4,
                                            pb: 2.75,
                                            px: 7.2,
                                            borderRadius: 1,
                                            cursor: "pointer",
                                            ...authType === "app" ? {
                                                ...bgColors.primaryLight
                                            } : {
                                                backgroundColor: "action.hover"
                                            },
                                            border: (theme)=>`1px solid ${authType === "app" ? theme.palette.primary.main : theme.palette.secondary.main}`,
                                            ...authType === "app" ? {
                                                ...bgColors.primaryLight
                                            } : {
                                                backgroundColor: bgColors.secondaryLight.backgroundColor
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                "& svg": {
                                                    mr: 5.25
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:cog-outline",
                                                    fontSize: "2.375rem"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                mb: 1.25,
                                                                ...authType === "app" && {
                                                                    color: "primary.main"
                                                                }
                                                            },
                                                            children: "Authenticator Apps"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                ...authType === "app" && {
                                                                    color: "primary.main"
                                                                }
                                                            },
                                                            children: "Get code from an app like Google Authenticator or Microsoft Authenticator."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        onClick: ()=>setAuthType("sms"),
                                        sx: {
                                            pt: 4,
                                            pb: 2.75,
                                            px: 7.2,
                                            borderRadius: 1,
                                            cursor: "pointer",
                                            ...authType === "sms" ? {
                                                ...bgColors.primaryLight
                                            } : {
                                                backgroundColor: "action.hover"
                                            },
                                            border: (theme)=>`1px solid ${authType === "sms" ? theme.palette.primary.main : theme.palette.secondary.main}`,
                                            ...authType === "sms" ? {
                                                ...bgColors.primaryLight
                                            } : {
                                                backgroundColor: bgColors.secondaryLight.backgroundColor
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                "& svg": {
                                                    mr: 5.25
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:message-outline",
                                                    fontSize: "2.375rem"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                mb: 1.25,
                                                                fontWeight: 600,
                                                                textTransform: "uppercase",
                                                                ...authType === "sms" && {
                                                                    color: "primary.main"
                                                                }
                                                            },
                                                            children: "sms"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                ...authType === "sms" && {
                                                                    color: "primary.main"
                                                                }
                                                            },
                                                            children: "We will send a code via SMS if you need to use your backup login method."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    sx: {
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: arrowIcon
                                        }),
                                        onClick: ()=>{
                                            setShow(false);
                                            setShowAuthDialog(true);
                                        },
                                        children: "Continue"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                maxWidth: "md",
                scroll: "body",
                open: showAuthDialog,
                onClose: handleAuthDialogClose,
                TransitionComponent: DialogAuthentication_Transition,
                onBackdropClick: handleAuthDialogClose,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    sx: {
                        px: {
                            xs: 8,
                            sm: 15
                        },
                        py: {
                            xs: 8,
                            sm: 12.5
                        },
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: handleAuthDialogClose,
                            sx: {
                                position: "absolute",
                                right: "1rem",
                                top: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:close"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            spacing: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: authType === "sms" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            children: "Verify Your Mobile Number for SMS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "Enter your mobile phone number with country code and we will send you a verification code."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            sx: {
                                                my: 4
                                            },
                                            label: "Mobile Number",
                                            placeholder: "+1 123 456 7890"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                            container: true,
                                            spacing: 6,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: "flex-end"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        variant: "outlined",
                                                        color: "secondary",
                                                        onClick: handleAuthDialogClose,
                                                        sx: {
                                                            mr: 4
                                                        },
                                                        children: "Cancel"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        variant: "contained",
                                                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: arrowIcon
                                                        }),
                                                        onClick: handleAuthDialogClose,
                                                        children: "Continue"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h5",
                                            sx: {
                                                mb: 4,
                                                textAlign: "center"
                                            },
                                            children: "Add Authenticator App"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            children: "Authenticator Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mb: 4
                                            },
                                            children: "Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                my: 12,
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                width: 122,
                                                height: 122,
                                                alt: "qr-code",
                                                src: "/images/pages/pixinvent-qr.png"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Alert_default()), {
                                            severity: "warning",
                                            icon: false,
                                            sx: {
                                                mb: 4,
                                                "& .MuiAlert-message": {
                                                    overflow: "hidden"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((AlertTitle_default()), {
                                                    sx: {
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis"
                                                    },
                                                    children: "ASDLKNASDA9AHS678dGhASD78AB"
                                                }),
                                                "If you having trouble using the QR code, select manual entry on your app"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            fullWidth: true,
                                            sx: {
                                                mb: 4
                                            },
                                            label: "Enter Authentication Code",
                                            placeholder: "Enter Authentication Code"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                            container: true,
                                            spacing: 6,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: "flex-end"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        variant: "outlined",
                                                        color: "secondary",
                                                        onClick: handleAuthDialogClose,
                                                        sx: {
                                                            mr: 4
                                                        },
                                                        children: "Cancel"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        variant: "contained",
                                                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: arrowIcon
                                                        }),
                                                        onClick: handleAuthDialogClose,
                                                        children: "Continue"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const dialog_examples_DialogAuthentication = (DialogAuthentication);

;// CONCATENATED MODULE: ./src/pages/pages/dialog-examples/index.js
// ** MUI Imports


// ** Third Party Components

// ** Demo Components Imports








const DialogExamples = ({ apiPricingPlanData  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        className: "match-height",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogShareProject, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogAddCard, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogPricing, {
                    data: apiPricingPlanData
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogReferEarn, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogAddAddress, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogCreateApp, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogAuthentication, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 4,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog_examples_DialogEditUserInfo, {})
            })
        ]
    });
const getStaticProps = async ()=>{
    const res = await external_axios_default().get("/pages/pricing");
    const data = res.data;
    return {
        props: {
            apiPricingPlanData: data.pricingPlans
        }
    };
};
/* harmony default export */ const dialog_examples = (DialogExamples);


/***/ }),

/***/ 1538:
/***/ (() => {



/***/ }),

/***/ 5863:
/***/ ((module) => {

"use strict";
module.exports = require("@iconify/react");

/***/ }),

/***/ 6741:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TabContext");

/***/ }),

/***/ 861:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TabList");

/***/ }),

/***/ 2071:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TabPanel");

/***/ }),

/***/ 3765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 5992:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AlertTitle");

/***/ }),

/***/ 2311:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Autocomplete");

/***/ }),

/***/ 2120:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

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

/***/ 8369:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5634:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Fade");

/***/ }),

/***/ 8891:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8185:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControlLabel");

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

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 2101:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemAvatar");

/***/ }),

/***/ 1211:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 8125:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 5374:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Radio");

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

/***/ 1307:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 6042:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

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

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2863:
/***/ ((module) => {

"use strict";
module.exports = require("payment");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7568:
/***/ ((module) => {

"use strict";
module.exports = require("react-credit-cards");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,9550,1514,7294,2024,9882,2958], () => (__webpack_exec__(1549)));
module.exports = __webpack_exports__;

})();