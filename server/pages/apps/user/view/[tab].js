(() => {
var exports = {};
exports.id = 2319;
exports.ids = [2319];
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

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getInitials)
/* harmony export */ });
// ** Returns initials from string
const getInitials = (string)=>string.split(/\s/).reduce((response, word)=>response += word.slice(0, 1), "");


/***/ }),

/***/ 2170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _tab_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
;// CONCATENATED MODULE: ./src/views/apps/user/view/UserSuspendDialog.js
// ** React Imports


// ** MUI Imports






// ** Icon Imports

const UserSuspendDialog = (props)=>{
    // ** Props
    const { open , setOpen  } = props;
    // ** States
    const [userInput, setUserInput] = (0,external_react_.useState)("yes");
    const [secondDialogOpen, setSecondDialogOpen] = (0,external_react_.useState)(false);
    const handleClose = ()=>setOpen(false);
    const handleSecondDialogClose = ()=>setSecondDialogOpen(false);
    const handleConfirmation = (value)=>{
        handleClose();
        setUserInput(value);
        setSecondDialogOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: open,
                onClose: handleClose,
                sx: {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: 512
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 4,
                                        maxWidth: "85%",
                                        textAlign: "center",
                                        "& svg": {
                                            mb: 12.25,
                                            color: "warning.main"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:alert-circle-outline",
                                            fontSize: "5.5rem"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h4",
                                            sx: {
                                                color: "text.secondary"
                                            },
                                            children: "Are you sure?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "You won't be able to revert user!"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                        sx: {
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                onClick: ()=>handleConfirmation("yes"),
                                children: "Yes, Suspend user!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                color: "secondary",
                                onClick: ()=>handleConfirmation("cancel"),
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: secondDialogOpen,
                onClose: handleSecondDialogClose,
                sx: {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: 512
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                "& svg": {
                                    mb: 14,
                                    color: userInput === "yes" ? "success.main" : "error.main"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    fontSize: "5.5rem",
                                    icon: userInput === "yes" ? "mdi:check-circle-outline" : "mdi:close-circle-outline"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h4",
                                    sx: {
                                        mb: 8
                                    },
                                    children: userInput === "yes" ? "Suspended!" : "Cancelled"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: userInput === "yes" ? "User has been suspended." : "Cancelled Suspension :)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                        sx: {
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            color: "success",
                            onClick: handleSecondDialogClose,
                            children: "OK"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const view_UserSuspendDialog = (UserSuspendDialog);

;// CONCATENATED MODULE: ./src/views/apps/user/view/UserSubscriptionDialog.js
// ** React Imports


// ** MUI Imports






// ** Icon Imports

const UserSubscriptionDialog_UserSuspendDialog = (props)=>{
    // ** Props
    const { open , setOpen  } = props;
    // ** States
    const [userInput, setUserInput] = (0,external_react_.useState)("yes");
    const [secondDialogOpen, setSecondDialogOpen] = (0,external_react_.useState)(false);
    const handleClose = ()=>setOpen(false);
    const handleSecondDialogClose = ()=>setSecondDialogOpen(false);
    const handleConfirmation = (value)=>{
        handleClose();
        setUserInput(value);
        setSecondDialogOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: open,
                onClose: handleClose,
                sx: {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: 512
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    maxWidth: "85%",
                                    textAlign: "center",
                                    "& svg": {
                                        mb: 1,
                                        color: "warning.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:alert-circle-outline",
                                        fontSize: "5.5rem"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: "Are you sure you would like to cancel your subscription?"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                        sx: {
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                onClick: ()=>handleConfirmation("yes"),
                                children: "Yes"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                color: "secondary",
                                onClick: ()=>handleConfirmation("cancel"),
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                open: secondDialogOpen,
                onClose: handleSecondDialogClose,
                sx: {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: 512
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                "& svg": {
                                    mb: 14,
                                    color: userInput === "yes" ? "success.main" : "error.main"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    fontSize: "5.5rem",
                                    icon: userInput === "yes" ? "mdi:check-circle-outline" : "mdi:close-circle-outline"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h4",
                                    sx: {
                                        mb: 8
                                    },
                                    children: userInput === "yes" ? "Unsubscribed!" : "Cancelled"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: userInput === "yes" ? "Your subscription cancelled successfully." : "Unsubscription Cancelled!!"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                        sx: {
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            color: "success",
                            onClick: handleSecondDialogClose,
                            children: "OK"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const UserSubscriptionDialog = (UserSubscriptionDialog_UserSuspendDialog);

// EXTERNAL MODULE: ./src/@core/utils/get-initials.js
var get_initials = __webpack_require__(3552);
;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewLeft.js
// ** React Imports


// ** MUI Imports























// ** Icon Imports

// ** Custom Components




// ** Utils Import

const data = {
    id: 1,
    role: "admin",
    status: "active",
    username: "gslixby0",
    avatarColor: "primary",
    country: "El Salvador",
    company: "Yotz PVT LTD",
    contact: "(479) 232-9151",
    currentPlan: "enterprise",
    fullName: "Daisy Patterson",
    email: "gslixby0@abc.net.au",
    avatar: "/images/avatars/4.png"
};
const roleColors = {
    admin: "error",
    editor: "info",
    author: "warning",
    maintainer: "success",
    subscriber: "primary"
};
const statusColors = {
    active: "success",
    pending: "warning",
    inactive: "secondary"
};
// ** Styled <sup> component
const Sup = (0,styles_.styled)("sup")(({ theme  })=>({
        top: "0.2rem",
        left: "-0.6rem",
        position: "absolute",
        color: theme.palette.primary.main
    }));
// ** Styled <sub> component
const Sub = (0,styles_.styled)("sub")({
    fontWeight: 300,
    fontSize: "1rem",
    alignSelf: "flex-end"
});
const UserViewLeft = ()=>{
    // ** States
    const [openEdit, setOpenEdit] = (0,external_react_.useState)(false);
    const [openPlans, setOpenPlans] = (0,external_react_.useState)(false);
    const [suspendDialogOpen, setSuspendDialogOpen] = (0,external_react_.useState)(false);
    const [subscriptionDialogOpen, setSubscriptionDialogOpen] = (0,external_react_.useState)(false);
    // Handle Edit dialog
    const handleEditClickOpen = ()=>setOpenEdit(true);
    const handleEditClose = ()=>setOpenEdit(false);
    // Handle Upgrade Plan dialog
    const handlePlansClickOpen = ()=>setOpenPlans(true);
    const handlePlansClose = ()=>setOpenPlans(false);
    if (data) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                sx: {
                                    pt: 15,
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                },
                                children: [
                                    data.avatar.length ? /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        src: data.avatar,
                                        variant: "rounded",
                                        alt: data.fullName,
                                        sx: {
                                            width: 120,
                                            height: 120,
                                            fontWeight: 600,
                                            mb: 4,
                                            fontSize: "3rem"
                                        }
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                        skin: "light",
                                        variant: "rounded",
                                        color: data.avatarColor,
                                        sx: {
                                            width: 120,
                                            height: 120,
                                            fontWeight: 600,
                                            mb: 4,
                                            fontSize: "3rem"
                                        },
                                        children: (0,get_initials/* getInitials */.Q)(data.fullName)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            mb: 2
                                        },
                                        children: data.fullName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                        skin: "light",
                                        size: "small",
                                        label: data.role,
                                        color: roleColors[data.role],
                                        sx: {
                                            height: 20,
                                            fontWeight: 600,
                                            borderRadius: "5px",
                                            fontSize: "0.875rem",
                                            textTransform: "capitalize",
                                            "& .MuiChip-label": {
                                                mt: -0.25
                                            }
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                sx: {
                                    my: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mr: 8,
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
                                                        icon: "mdi:check"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                lineHeight: 1.3
                                                            },
                                                            children: "1.23k"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body2",
                                                            children: "Task Done"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
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
                                                        mr: 3
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:briefcase-variant-outline"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                lineHeight: 1.3
                                                            },
                                                            children: "568"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body2",
                                                            children: "Project Done"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        children: "Details"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                        sx: {
                                            mt: (theme)=>`${theme.spacing(4)} !important`
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            pt: 2,
                                            pb: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "subtitle2",
                                                        sx: {
                                                            mr: 2,
                                                            color: "text.primary"
                                                        },
                                                        children: "Username:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        variant: "body2",
                                                        children: [
                                                            "@",
                                                            data.username
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "subtitle2",
                                                        sx: {
                                                            mr: 2,
                                                            color: "text.primary"
                                                        },
                                                        children: "Billing Email:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: data.email
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "subtitle2",
                                                        sx: {
                                                            mr: 2,
                                                            color: "text.primary"
                                                        },
                                                        children: "Status:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                                        skin: "light",
                                                        size: "small",
                                                        label: data.status,
                                                        color: statusColors[data.status],
                                                        sx: {
                                                            height: 20,
                                                            fontWeight: 500,
                                                            fontSize: "0.75rem",
                                                            borderRadius: "5px",
                                                            textTransform: "capitalize"
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mr: 2,
                                                            fontWeight: 500,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Role:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        sx: {
                                                            textTransform: "capitalize"
                                                        },
                                                        children: data.role
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mr: 2,
                                                            fontWeight: 500,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Tax ID:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Tax-8894"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mr: 2,
                                                            fontWeight: 500,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Contact:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        variant: "body2",
                                                        children: [
                                                            "+1 ",
                                                            data.contact
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mr: 2,
                                                            fontWeight: 500,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Language:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "English"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mr: 2,
                                                            fontWeight: 500,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Country:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: data.country
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                                sx: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        sx: {
                                            mr: 2
                                        },
                                        onClick: handleEditClickOpen,
                                        children: "Edit"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        color: "error",
                                        variant: "outlined",
                                        onClick: ()=>setSuspendDialogOpen(true),
                                        children: "Suspend"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                open: openEdit,
                                onClose: handleEditClose,
                                "aria-labelledby": "user-view-edit",
                                sx: {
                                    "& .MuiPaper-root": {
                                        width: "100%",
                                        maxWidth: 650,
                                        p: [
                                            2,
                                            10
                                        ]
                                    }
                                },
                                "aria-describedby": "user-view-edit-description",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                        id: "user-view-edit",
                                        sx: {
                                            textAlign: "center",
                                            fontSize: "1.5rem !important"
                                        },
                                        children: "Edit User Information"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                                variant: "body2",
                                                id: "user-view-edit-description",
                                                sx: {
                                                    textAlign: "center",
                                                    mb: 7
                                                },
                                                children: "Updating user details will receive a privacy audit."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                    container: true,
                                                    spacing: 6,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                fullWidth: true,
                                                                label: "Full Name",
                                                                defaultValue: data.fullName
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                fullWidth: true,
                                                                label: "Username",
                                                                defaultValue: data.username,
                                                                InputProps: {
                                                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                        position: "start",
                                                                        children: "@"
                                                                    })
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                fullWidth: true,
                                                                type: "email",
                                                                label: "Billing Email",
                                                                defaultValue: data.email
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                                fullWidth: true,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                                        id: "user-view-status-label",
                                                                        children: "Status"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                        label: "Status",
                                                                        defaultValue: data.status,
                                                                        id: "user-view-status",
                                                                        labelId: "user-view-status-label",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "pending",
                                                                                children: "Pending"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "active",
                                                                                children: "Active"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "inactive",
                                                                                children: "Inactive"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                fullWidth: true,
                                                                label: "TAX ID",
                                                                defaultValue: "Tax-8894"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                fullWidth: true,
                                                                label: "Contact",
                                                                defaultValue: `+1 ${data.contact}`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                                fullWidth: true,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                                        id: "user-view-language-label",
                                                                        children: "Language"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                        label: "Language",
                                                                        defaultValue: "English",
                                                                        id: "user-view-language",
                                                                        labelId: "user-view-language-label",
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
                                                                                value: "Portuguese",
                                                                                children: "Portuguese"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "Russian",
                                                                                children: "Russian"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "French",
                                                                                children: "French"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "German",
                                                                                children: "German"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                                fullWidth: true,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                                        id: "user-view-country-label",
                                                                        children: "Country"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                        label: "Country",
                                                                        defaultValue: "USA",
                                                                        id: "user-view-country",
                                                                        labelId: "user-view-country-label",
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
                                                                                value: "Spain",
                                                                                children: "Spain"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "Russia",
                                                                                children: "Russia"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "France",
                                                                                children: "France"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                value: "Germany",
                                                                                children: "Germany"
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
                                                                label: "Use as a billing address?",
                                                                control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                                    defaultChecked: true
                                                                }),
                                                                sx: {
                                                                    "& .MuiTypography-root": {
                                                                        fontWeight: 500
                                                                    }
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                        sx: {
                                            justifyContent: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "contained",
                                                sx: {
                                                    mr: 1
                                                },
                                                onClick: handleEditClose,
                                                children: "Submit"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "outlined",
                                                color: "secondary",
                                                onClick: handleEditClose,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(view_UserSuspendDialog, {
                                open: suspendDialogOpen,
                                setOpen: setSuspendDialogOpen
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(UserSubscriptionDialog, {
                                open: subscriptionDialogOpen,
                                setOpen: setSubscriptionDialogOpen
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        sx: {
                            boxShadow: "none",
                            border: (theme)=>`2px solid ${theme.palette.primary.main}`
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    pb: "0 !important",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                        skin: "light",
                                        size: "small",
                                        color: "primary",
                                        label: "Standard",
                                        sx: {
                                            fontSize: "0.75rem",
                                            borderRadius: "4px"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Sup, {
                                                children: "$"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "h3",
                                                sx: {
                                                    mb: -1.2,
                                                    lineHeight: 1,
                                                    color: "primary.main"
                                                },
                                                children: "99"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Sub, {
                                                children: "/ month"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mt: 4,
                                            mb: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2.5,
                                                    alignItems: "center",
                                                    "& svg": {
                                                        mr: 2,
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:circle",
                                                        fontSize: "0.625rem"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        component: "span",
                                                        sx: {
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "10 Users"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mt: 2.5,
                                                    display: "flex",
                                                    mb: 2.5,
                                                    alignItems: "center",
                                                    "& svg": {
                                                        mr: 2,
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:circle",
                                                        fontSize: "0.625rem"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        component: "span",
                                                        sx: {
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Up to 10GB storage"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mt: 2.5,
                                                    display: "flex",
                                                    mb: 2.5,
                                                    alignItems: "center",
                                                    "& svg": {
                                                        mr: 2,
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:circle",
                                                        fontSize: "0.625rem"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        component: "span",
                                                        sx: {
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Basic Support"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            mb: 1.5,
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    fontWeight: 600,
                                                    color: "text.secondary"
                                                },
                                                children: "Days"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    fontWeight: 600,
                                                    color: "text.secondary"
                                                },
                                                children: "26 of 30 Days"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                                        value: 86.66,
                                        variant: "determinate",
                                        sx: {
                                            height: 8,
                                            borderRadius: "5px"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "caption",
                                        sx: {
                                            mt: 1.5,
                                            mb: 6
                                        },
                                        children: "4 days remaining"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        sx: {
                                            width: "100%"
                                        },
                                        onClick: handlePlansClickOpen,
                                        children: "Upgrade Plan"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                open: openPlans,
                                onClose: handlePlansClose,
                                "aria-labelledby": "user-view-plans",
                                "aria-describedby": "user-view-plans-description",
                                sx: {
                                    "& .MuiPaper-root": {
                                        width: "100%",
                                        maxWidth: 650,
                                        pt: 8,
                                        pb: 8
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                        id: "user-view-plans",
                                        sx: {
                                            textAlign: "center",
                                            fontSize: "1.5rem !important"
                                        },
                                        children: "Upgrade Plan"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                            variant: "body2",
                                            sx: {
                                                textAlign: "center"
                                            },
                                            id: "user-view-plans-description",
                                            children: "Choose the best plan for the user."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                        sx: {
                                            display: "flex",
                                            pb: 8,
                                            pl: [
                                                6,
                                                15
                                            ],
                                            pr: [
                                                6,
                                                15
                                            ],
                                            alignItems: "center",
                                            flexWrap: [
                                                "wrap",
                                                "nowrap"
                                            ],
                                            pt: (theme)=>`${theme.spacing(2)} !important`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                fullWidth: true,
                                                size: "small",
                                                sx: {
                                                    mr: [
                                                        0,
                                                        3
                                                    ],
                                                    mb: [
                                                        3,
                                                        0
                                                    ]
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        id: "user-view-plans-select-label",
                                                        children: "Choose Plan"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                        label: "Choose Plan",
                                                        defaultValue: "Standard",
                                                        id: "user-view-plans-select",
                                                        labelId: "user-view-plans-select-label",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: "Basic",
                                                                children: "Basic - $0/month"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: "Standard",
                                                                children: "Standard - $99/month"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: "Enterprise",
                                                                children: "Enterprise - $499/month"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: "Company",
                                                                children: "Company - $999/month"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "contained",
                                                sx: {
                                                    minWidth: [
                                                        "100%",
                                                        0
                                                    ]
                                                },
                                                children: "Upgrade"
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
                                            pt: 8,
                                            pl: [
                                                6,
                                                15
                                            ],
                                            pr: [
                                                6,
                                                15
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    fontWeight: 500,
                                                    mb: 2,
                                                    fontSize: "0.875rem"
                                                },
                                                children: "User current plan is standard plan"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexWrap: [
                                                        "wrap",
                                                        "nowrap"
                                                    ],
                                                    justifyContent: "space-between"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            mr: 3,
                                                            display: "flex",
                                                            ml: 2.4,
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Sup, {
                                                                children: "$"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "h3",
                                                                sx: {
                                                                    mb: -1.2,
                                                                    lineHeight: 1,
                                                                    color: "primary.main",
                                                                    fontSize: "3rem !important"
                                                                },
                                                                children: "99"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Sub, {
                                                                children: "/ month"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        color: "error",
                                                        sx: {
                                                            mt: 2
                                                        },
                                                        variant: "outlined",
                                                        onClick: ()=>setSubscriptionDialogOpen(true),
                                                        children: "Cancel Subscription"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    } else {
        return null;
    }
};
/* harmony default export */ const view_UserViewLeft = (UserViewLeft);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
var TabList_default = /*#__PURE__*/__webpack_require__.n(TabList_);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/AlertTitle"
var AlertTitle_ = __webpack_require__(5992);
var AlertTitle_default = /*#__PURE__*/__webpack_require__.n(AlertTitle_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
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
;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewBilling.js
// ** React Imports


// ** MUI Imports





























// ** Icon Imports

// ** Third Party Imports


// ** Custom Components


// ** Util Import

// ** Styled Component Imports

// ** Styles Import

// ** Styled <sup> component
const UserViewBilling_Sup = (0,styles_.styled)("sup")(({ theme  })=>({
        top: "0.2rem",
        left: "-0.6rem",
        position: "absolute",
        color: theme.palette.primary.main
    }));
// ** Styled <sub> component
const UserViewBilling_Sub = (0,styles_.styled)("sub")({
    fontWeight: 300,
    fontSize: "1rem",
    alignSelf: "flex-end"
});
const UserViewBilling_data = [
    {
        cardCvc: "587",
        name: "Tom McBride",
        expiryDate: "12/24",
        imgAlt: "Mastercard",
        badgeColor: "primary",
        cardStatus: "Popular",
        cardNumber: "5577 0000 5577 9865",
        imgSrc: "/images/logos/mastercard.png"
    },
    {
        cardCvc: "681",
        imgAlt: "Visa card",
        expiryDate: "02/24",
        name: "Mildred Wagner",
        cardNumber: "4532 3616 2070 5678",
        imgSrc: "/images/logos/visa.png"
    },
    {
        cardCvc: "3845",
        expiryDate: "08/20",
        badgeColor: "error",
        cardStatus: "Expired",
        name: "Lester Jennings",
        imgAlt: "American Express card",
        cardNumber: "3700 000000 00002",
        imgSrc: "/images/logos/american-express.png"
    }
];
const UserViewBilling = ()=>{
    // ** States
    const [cvc, setCvc] = (0,external_react_.useState)("");
    const [name, setName] = (0,external_react_.useState)("");
    const [focus, setFocus] = (0,external_react_.useState)();
    const [cardId, setCardId] = (0,external_react_.useState)(0);
    const [expiry, setExpiry] = (0,external_react_.useState)("");
    const [cardNumber, setCardNumber] = (0,external_react_.useState)("");
    const [dialogTitle, setDialogTitle] = (0,external_react_.useState)("Add");
    const [openEditCard, setOpenEditCard] = (0,external_react_.useState)(false);
    const [openAddressCard, setOpenAddressCard] = (0,external_react_.useState)(false);
    const [openUpgradePlans, setOpenUpgradePlans] = (0,external_react_.useState)(false);
    const [subscriptionDialogOpen, setSubscriptionDialogOpen] = (0,external_react_.useState)(false);
    // Handle Edit Card dialog and get card ID
    const handleEditCardClickOpen = (id)=>{
        setDialogTitle("Edit");
        setCardId(id);
        setCardNumber(UserViewBilling_data[id].cardNumber);
        setName(UserViewBilling_data[id].name);
        setCvc(UserViewBilling_data[id].cardCvc);
        setExpiry(UserViewBilling_data[id].expiryDate);
        setOpenEditCard(true);
    };
    const handleAddCardClickOpen = ()=>{
        setDialogTitle("Add");
        setCardNumber("");
        setName("");
        setCvc("");
        setExpiry("");
        setOpenEditCard(true);
    };
    const handleEditCardClose = ()=>{
        setDialogTitle("Add");
        setCardNumber("");
        setName("");
        setCvc("");
        setExpiry("");
        setOpenEditCard(false);
    };
    // Handle Upgrade Plan dialog
    const handleUpgradePlansClickOpen = ()=>setOpenUpgradePlans(true);
    const handleUpgradePlansClose = ()=>setOpenUpgradePlans(false);
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
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Current plan"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mb: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        sx: {
                                                            fontWeight: 500,
                                                            mb: 1,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: [
                                                            "Your Current Plan is ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Basic"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "A simple start for everyone"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mb: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            fontWeight: 500,
                                                            mb: 1,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Active until Dec 09, 2021"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "We will send you a notification upon Subscription expiration"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            display: "flex",
                                                            mb: 1,
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    mr: 2,
                                                                    fontWeight: 500,
                                                                    fontSize: "0.875rem"
                                                                },
                                                                children: "$99 Per Month"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                                                skin: "light",
                                                                size: "small",
                                                                label: "Popular",
                                                                color: "primary",
                                                                sx: {
                                                                    height: 20,
                                                                    fontSize: "0.75rem",
                                                                    fontWeight: 600,
                                                                    borderRadius: "5px"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Standard plan for small to medium businesses"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        sx: {
                                            mt: [
                                                4,
                                                4,
                                                0
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Alert_default()), {
                                                icon: false,
                                                severity: "warning",
                                                sx: {
                                                    mb: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((AlertTitle_default()), {
                                                        sx: {
                                                            fontWeight: 600,
                                                            mb: (theme)=>`${theme.spacing(1)} !important`
                                                        },
                                                        children: "We need your attention!"
                                                    }),
                                                    "Your plan requires updates"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    mb: 2,
                                                    justifyContent: "space-between"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            fontWeight: 600,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "Days"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            fontWeight: 600,
                                                            fontSize: "0.875rem"
                                                        },
                                                        children: "26 of 30 Days"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                                                value: 86.6666666,
                                                variant: "determinate",
                                                sx: {
                                                    height: 10,
                                                    borderRadius: "5px"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                sx: {
                                                    mt: 2,
                                                    mb: 4
                                                },
                                                children: "Your plan requires update"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        sx: {
                                            mt: 4,
                                            display: "flex",
                                            flexWrap: "wrap",
                                            alignItems: "flex-start"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "contained",
                                                onClick: handleUpgradePlansClickOpen,
                                                sx: {
                                                    mr: 3,
                                                    mb: [
                                                        3,
                                                        0
                                                    ]
                                                },
                                                children: "Upgrade Plan"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "outlined",
                                                color: "error",
                                                onClick: ()=>setSubscriptionDialogOpen(true),
                                                children: "Cancel Subscription"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(UserSubscriptionDialog, {
                            open: subscriptionDialogOpen,
                            setOpen: setSubscriptionDialogOpen
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                            open: openUpgradePlans,
                            onClose: handleUpgradePlansClose,
                            "aria-labelledby": "user-view-plans",
                            "aria-describedby": "user-view-plans-description",
                            sx: {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: 650,
                                    pt: 8,
                                    pb: 8
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                    id: "user-view-plans",
                                    sx: {
                                        textAlign: "center",
                                        fontSize: "1.5rem !important"
                                    },
                                    children: "Upgrade Plan"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                        variant: "body2",
                                        sx: {
                                            textAlign: "center"
                                        },
                                        id: "user-view-plans-description",
                                        children: "Choose the best plan for the user."
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                    sx: {
                                        pb: 8,
                                        px: [
                                            6,
                                            15
                                        ],
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: [
                                            "wrap",
                                            "nowrap"
                                        ],
                                        pt: (theme)=>`${theme.spacing(2)} !important`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            size: "small",
                                            sx: {
                                                mr: [
                                                    0,
                                                    3
                                                ],
                                                mb: [
                                                    3,
                                                    0
                                                ]
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "user-view-plans-select-label",
                                                    children: "Choose Plan"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    label: "Choose Plan",
                                                    defaultValue: "Standard",
                                                    id: "user-view-plans-select",
                                                    labelId: "user-view-plans-select-label",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Basic",
                                                            children: "Basic - $0/month"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Standard",
                                                            children: "Standard - $99/month"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Enterprise",
                                                            children: "Enterprise - $499/month"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "Company",
                                                            children: "Company - $999/month"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "contained",
                                            sx: {
                                                minWidth: [
                                                    "100%",
                                                    0
                                                ]
                                            },
                                            children: "Upgrade"
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
                                        pt: 8,
                                        pl: [
                                            6,
                                            15
                                        ],
                                        pr: [
                                            6,
                                            15
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 500,
                                                mb: 2,
                                                fontSize: "0.875rem"
                                            },
                                            children: "User current plan is standard plan"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                flexWrap: [
                                                    "wrap",
                                                    "nowrap"
                                                ],
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mr: 3,
                                                        display: "flex",
                                                        ml: 2.4,
                                                        position: "relative"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(UserViewBilling_Sup, {
                                                            children: "$"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h3",
                                                            sx: {
                                                                mb: -1.2,
                                                                lineHeight: 1,
                                                                color: "primary.main",
                                                                fontSize: "3rem !important"
                                                            },
                                                            children: "99"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(UserViewBilling_Sub, {
                                                            children: "/ month"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    color: "error",
                                                    variant: "outlined",
                                                    sx: {
                                                        mt: 2
                                                    },
                                                    onClick: ()=>setSubscriptionDialogOpen(true),
                                                    children: "Cancel Subscription"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Payment Methods",
                            action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                variant: "contained",
                                onClick: handleAddCardClickOpen,
                                sx: {
                                    "& svg": {
                                        mr: 1
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:plus",
                                        fontSize: "1.125rem"
                                    }),
                                    "Add Card"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: UserViewBilling_data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        p: 5,
                                        display: "flex",
                                        borderRadius: 1,
                                        flexDirection: [
                                            "column",
                                            "row"
                                        ],
                                        justifyContent: [
                                            "space-between"
                                        ],
                                        alignItems: [
                                            "flex-start",
                                            "center"
                                        ],
                                        mb: index !== UserViewBilling_data.length - 1 ? 4 : undefined,
                                        border: (theme)=>`1px solid ${theme.palette.divider}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    height: "25",
                                                    alt: item.imgAlt,
                                                    src: item.imgSrc
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mt: 0.5,
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                fontWeight: 500
                                                            },
                                                            children: item.name
                                                        }),
                                                        item.cardStatus ? /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                                            skin: "light",
                                                            size: "small",
                                                            label: item.cardStatus,
                                                            color: item.badgeColor,
                                                            sx: {
                                                                height: 20,
                                                                ml: 2,
                                                                fontSize: "0.75rem",
                                                                fontWeight: 600,
                                                                borderRadius: "5px"
                                                            }
                                                        }) : null
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                    variant: "body2",
                                                    children: [
                                                        "**** **** **** ",
                                                        item.cardNumber.substring(item.cardNumber.length - 4)
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mt: [
                                                    3,
                                                    0
                                                ],
                                                textAlign: [
                                                    "start",
                                                    "end"
                                                ]
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "outlined",
                                                    sx: {
                                                        mr: 3
                                                    },
                                                    onClick: ()=>handleEditCardClickOpen(index),
                                                    children: "Edit"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    variant: "outlined",
                                                    color: "secondary",
                                                    children: "Delete"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        mt: 5
                                                    },
                                                    children: [
                                                        "Card expires at ",
                                                        item.expiryDate
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                            open: openEditCard,
                            onClose: handleEditCardClose,
                            "aria-labelledby": "user-view-billing-edit-card",
                            sx: {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: 650,
                                    p: [
                                        2,
                                        10
                                    ]
                                }
                            },
                            "aria-describedby": "user-view-billing-edit-card-description",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                    id: "user-view-billing-edit-card",
                                    sx: {
                                        textAlign: "center",
                                        fontSize: "1.5rem !important"
                                    },
                                    children: [
                                        dialogTitle,
                                        " Card"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContentText_default()), {
                                            variant: "body2",
                                            id: "user-view-billing-edit-card-description",
                                            sx: {
                                                textAlign: "center",
                                                mb: 7
                                            },
                                            children: [
                                                dialogTitle,
                                                " card for future billing"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                container: true,
                                                spacing: 6,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_credit_cards/* default */.Z, {
                                                            sx: {
                                                                "& .rccs": {
                                                                    m: "0 auto"
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
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                            container: true,
                                                            spacing: 6,
                                                            children: [
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
                                                                    sm: 8,
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
                                                                    sm: 4,
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
                                                                    sm: 8,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                                        fullWidth: true,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                                                id: "user-view-billing-edit-card-status-label",
                                                                                children: "Card Status"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                                label: "Card Status",
                                                                                id: "user-view-billing-edit-card-status",
                                                                                labelId: "user-view-billing-edit-card-status-label",
                                                                                defaultValue: UserViewBilling_data[cardId].cardStatus ? UserViewBilling_data[cardId].cardStatus : "",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                        value: "Primary",
                                                                                        children: "Primary"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                        value: "Expired",
                                                                                        children: "Expired"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                                        value: "Active",
                                                                                        children: "Active"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                                    item: true,
                                                                    xs: 12,
                                                                    sm: 4,
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
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                    sx: {
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "contained",
                                            sx: {
                                                mr: 1
                                            },
                                            onClick: handleEditCardClose,
                                            children: "Submit"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: handleEditCardClose,
                                            children: "Cancel"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Billing Address",
                            action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                onClick: ()=>setOpenAddressCard(true),
                                children: "Edit Address"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        lg: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Table_default()), {
                                                size: "small",
                                                sx: {
                                                    width: "95%"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                                    sx: {
                                                        "& .MuiTableCell-root": {
                                                            border: 0,
                                                            pt: 2,
                                                            pb: 2,
                                                            pl: "0 !important",
                                                            pr: "0 !important",
                                                            "&:first-of-type": {
                                                                width: 148
                                                            }
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Company Name:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "ThemeSelection"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Billing Email:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "gertrude@gmail.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Tax ID:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "TAX-875623"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "VAT Number:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "SDF754K77"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Billing Address:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "100 Water Plant Avenue, Building 1303 Wake Island"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        lg: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Table_default()), {
                                                size: "small",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                                    sx: {
                                                        "& .MuiTableCell-root": {
                                                            border: 0,
                                                            pt: 2,
                                                            pb: 2,
                                                            pl: "0 !important",
                                                            pr: "0 !important",
                                                            "&:first-of-type": {
                                                                width: 148
                                                            }
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Contact:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "+1(609) 933-44-22"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Country:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "Australia"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "State:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "Queensland"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            fontWeight: 500,
                                                                            fontSize: "0.875rem",
                                                                            whiteSpace: "nowrap",
                                                                            lineHeight: "22px",
                                                                            letterSpacing: "0.1px"
                                                                        },
                                                                        children: "Zip Code:"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                                    children: "403114"
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                            open: openAddressCard,
                            onClose: ()=>setOpenAddressCard(false),
                            "aria-labelledby": "user-address-edit",
                            sx: {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: 650,
                                    p: [
                                        2,
                                        10
                                    ]
                                }
                            },
                            "aria-describedby": "user-address-edit-description",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                    id: "user-address-edit",
                                    sx: {
                                        textAlign: "center",
                                        fontSize: "1.5rem !important"
                                    },
                                    children: "Edit Address"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                            variant: "body2",
                                            id: "user-address-edit-description",
                                            sx: {
                                                textAlign: "center",
                                                mb: 7
                                            },
                                            children: "Edit Address for future billing"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                container: true,
                                                spacing: 6,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            size: "small",
                                                            defaultValue: "ThemeSelection",
                                                            label: "Company Name"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            type: "email",
                                                            size: "small",
                                                            defaultValue: "gertrude@gmail.com",
                                                            label: "Email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            size: "small",
                                                            defaultValue: "TAX-875623",
                                                            label: "Tax ID"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            size: "small",
                                                            defaultValue: "SDF754K77",
                                                            label: "VAT Number"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            fullWidth: true,
                                                            multiline: true,
                                                            minRows: 2,
                                                            size: "small",
                                                            label: "Billing Address",
                                                            defaultValue: "100 Water Plant Avenue, Building 1303 Wake Island"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            size: "small",
                                                            defaultValue: "+1(609) 933-44-22",
                                                            label: "Contact"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                            size: "small",
                                                            fullWidth: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                                    id: "country-select",
                                                                    children: "Country"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                    labelId: "country-select",
                                                                    defaultValue: "usa",
                                                                    label: "Country",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: "usa",
                                                                            children: "USA"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: "uk",
                                                                            children: "UK"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: "france",
                                                                            children: "France"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: "germany",
                                                                            children: "Germany"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            value: "japan",
                                                                            children: "Japan"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            size: "small",
                                                            defaultValue: "Capholim",
                                                            label: "State"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            type: "number",
                                                            size: "small",
                                                            defaultValue: "403114",
                                                            label: "Zip Code"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                    sx: {
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "contained",
                                            sx: {
                                                mr: 1
                                            },
                                            onClick: ()=>setOpenAddressCard(false),
                                            children: "Submit"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: ()=>setOpenAddressCard(false),
                                            children: "Cancel"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const view_UserViewBilling = (UserViewBilling);

// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/lab/TimelineDot"
var TimelineDot_ = __webpack_require__(7277);
var TimelineDot_default = /*#__PURE__*/__webpack_require__.n(TimelineDot_);
// EXTERNAL MODULE: external "@mui/lab/TimelineItem"
var TimelineItem_ = __webpack_require__(4641);
var TimelineItem_default = /*#__PURE__*/__webpack_require__.n(TimelineItem_);
// EXTERNAL MODULE: external "@mui/lab/TimelineContent"
var TimelineContent_ = __webpack_require__(788);
var TimelineContent_default = /*#__PURE__*/__webpack_require__.n(TimelineContent_);
// EXTERNAL MODULE: external "@mui/lab/TimelineSeparator"
var TimelineSeparator_ = __webpack_require__(2032);
var TimelineSeparator_default = /*#__PURE__*/__webpack_require__.n(TimelineSeparator_);
// EXTERNAL MODULE: external "@mui/lab/TimelineConnector"
var TimelineConnector_ = __webpack_require__(5392);
var TimelineConnector_default = /*#__PURE__*/__webpack_require__.n(TimelineConnector_);
// EXTERNAL MODULE: external "@mui/lab/Timeline"
var Timeline_ = __webpack_require__(6964);
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/x-data-grid"
var x_data_grid_ = __webpack_require__(7738);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: ./src/@core/components/option-menu/index.js
var option_menu = __webpack_require__(4560);
;// CONCATENATED MODULE: ./src/views/apps/user/view/UsersInvoiceListTable.js
// ** React Imports


// ** Next Import

// ** MUI Imports











// ** Icon Imports

// ** Custom Component Imports


const StyledLink = (0,styles_.styled)((link_default()))(({ theme  })=>({
        textDecoration: "none",
        color: theme.palette.primary.main
    }));
// ** Vars
const invoiceStatusObj = {
    Sent: {
        color: "secondary",
        icon: "mdi:send"
    },
    Paid: {
        color: "success",
        icon: "mdi:check"
    },
    Draft: {
        color: "primary",
        icon: "mdi:content-save-outline"
    },
    "Partial Payment": {
        color: "warning",
        icon: "mdi:chart-pie"
    },
    "Past Due": {
        color: "error",
        icon: "mdi:information-outline"
    },
    Downloaded: {
        color: "info",
        icon: "mdi:arrow-down"
    }
};
const columns = [
    {
        flex: 0.2,
        field: "id",
        minWidth: 90,
        headerName: "# ID",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                href: `/apps/invoice/preview/${row.id}`,
                children: `#${row.id}`
            })
    },
    {
        flex: 0.15,
        minWidth: 80,
        field: "invoiceStatus",
        renderHeader: ()=>/*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:trending-up",
                fontSize: 20
            }),
        renderCell: ({ row  })=>{
            const { dueDate , balance , invoiceStatus  } = row;
            const color = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].color : "primary";
            return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                color: "common.white",
                                fontWeight: 600
                            },
                            children: invoiceStatus
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                color: "common.white",
                                fontWeight: 600
                            },
                            children: "Balance:"
                        }),
                        " ",
                        balance,
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                color: "common.white",
                                fontWeight: 600
                            },
                            children: "Due Date:"
                        }),
                        " ",
                        dueDate
                    ]
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                    skin: "light",
                    color: color,
                    sx: {
                        width: "1.875rem",
                        height: "1.875rem"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: invoiceStatusObj[invoiceStatus].icon,
                        fontSize: "1rem"
                    })
                })
            });
        }
    },
    {
        flex: 0.25,
        minWidth: 90,
        field: "total",
        headerName: "Total",
        renderCell: ({ row  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "body2",
                children: [
                    "$",
                    row.total || 0
                ]
            })
    },
    {
        flex: 0.3,
        minWidth: 125,
        field: "issuedDate",
        headerName: "Issued Date",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                children: row.issuedDate
            })
    },
    {
        flex: 0.1,
        minWidth: 130,
        sortable: false,
        field: "actions",
        headerName: "Actions",
        renderCell: ({ row  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Delete Invoice",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:delete-outline",
                                fontSize: 20
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "View",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            component: (link_default()),
                            href: `/apps/invoice/preview/${row.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:eye-outline",
                                fontSize: 20
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                        iconProps: {
                            fontSize: 20
                        },
                        iconButtonProps: {
                            size: "small"
                        },
                        menuProps: {
                            sx: {
                                "& .MuiMenuItem-root svg": {
                                    mr: 2
                                }
                            }
                        },
                        options: [
                            {
                                text: "Download",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:download",
                                    fontSize: 20
                                })
                            },
                            {
                                text: "Edit",
                                href: `/apps/invoice/edit/${row.id}`,
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:pencil-outline",
                                    fontSize: 20
                                })
                            },
                            {
                                text: "Duplicate",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:content-copy",
                                    fontSize: 20
                                })
                            }
                        ]
                    })
                ]
            })
    }
];
const InvoiceListTable = ({ invoiceData  })=>{
    // ** State
    const [pageSize, setPageSize] = (0,external_react_.useState)(7);
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    // ** Var
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Invoice List",
                sx: {
                    "& .MuiCardHeader-action": {
                        m: 0
                    }
                },
                action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            "aria-haspopup": "true",
                            onClick: handleClick,
                            "aria-expanded": open ? "true" : undefined,
                            endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:chevron-down"
                            }),
                            "aria-controls": open ? "user-view-overview-export" : undefined,
                            children: "Export"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                            open: open,
                            anchorEl: anchorEl,
                            onClose: handleClose,
                            id: "user-view-overview-export",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    onClick: handleClose,
                                    children: "PDF"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    onClick: handleClose,
                                    children: "XLSX"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    onClick: handleClose,
                                    children: "CSV"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(x_data_grid_.DataGrid, {
                autoHeight: true,
                columns: columns,
                rows: invoiceData,
                pageSize: pageSize,
                disableSelectionOnClick: true,
                rowsPerPageOptions: [
                    7,
                    10,
                    25,
                    50
                ],
                onPageSizeChange: (newPageSize)=>setPageSize(newPageSize),
                sx: {
                    "& .MuiDataGrid-columnHeaders": {
                        borderRadius: 0
                    }
                }
            })
        ]
    });
};
/* harmony default export */ const UsersInvoiceListTable = (InvoiceListTable);

;// CONCATENATED MODULE: ./src/views/apps/user/view/UsersProjectListTable.js
// ** React Imports


// ** MUI Imports









// ** Third Party Imports

const Img = (0,styles_.styled)("img")(({ theme  })=>({
        width: 32,
        height: 32,
        borderRadius: "50%",
        marginRight: theme.spacing(3)
    }));
const UsersProjectListTable_columns = [
    {
        flex: 0.3,
        minWidth: 230,
        field: "projectTitle",
        headerName: "Project",
        renderCell: ({ row  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                        src: row.img,
                        alt: `project-${row.projectTitle}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    fontWeight: 500,
                                    fontSize: "0.875rem"
                                },
                                children: row.projectTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                sx: {
                                    color: "text.disabled"
                                },
                                children: row.projectType
                            })
                        ]
                    })
                ]
            })
    },
    {
        flex: 0.15,
        minWidth: 100,
        field: "totalTask",
        headerName: "Total Tasks",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                children: row.totalTask
            })
    },
    {
        flex: 0.15,
        minWidth: 200,
        headerName: "Progress",
        field: "progressValue",
        renderCell: ({ row  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "body2",
                        children: [
                            row.progressValue,
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                        variant: "determinate",
                        value: row.progressValue,
                        color: row.progressColor,
                        sx: {
                            height: 6,
                            mt: 1,
                            borderRadius: "5px"
                        }
                    })
                ]
            })
    },
    {
        flex: 0.15,
        minWidth: 100,
        field: "hours",
        headerName: "Hours",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                children: row.hours
            })
    }
];
const UsersProjectListTable_InvoiceListTable = ()=>{
    // ** State
    const [value, setValue] = (0,external_react_.useState)("");
    const [pageSize, setPageSize] = (0,external_react_.useState)(7);
    const [data, setData] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get("/apps/users/project-list", {
            params: {
                q: value
            }
        }).then((res)=>setData(res.data));
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "User's Projects List"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            sx: {
                                mr: 2
                            },
                            children: "Search:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            size: "small",
                            placeholder: "Search Project",
                            value: value,
                            onChange: (e)=>setValue(e.target.value)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(x_data_grid_.DataGrid, {
                autoHeight: true,
                rows: data,
                columns: UsersProjectListTable_columns,
                pageSize: pageSize,
                disableSelectionOnClick: true,
                rowsPerPageOptions: [
                    7,
                    10,
                    25,
                    50
                ],
                onPageSizeChange: (newPageSize)=>setPageSize(newPageSize)
            })
        ]
    });
};
/* harmony default export */ const UsersProjectListTable = (UsersProjectListTable_InvoiceListTable);

;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewOverview.js
// ** MUI Imports















// ** Demo Component Imports


// Styled Timeline component
const Timeline = (0,styles_.styled)((Timeline_default()))(({ theme  })=>({
        margin: 0,
        padding: 0,
        marginLeft: theme.spacing(0.75),
        "& .MuiTimelineItem-root": {
            "&:before": {
                display: "none"
            },
            "&:last-child": {
                minHeight: 60
            }
        }
    }));
const UserViewOverview = ({ invoiceData  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(UsersProjectListTable, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "User Activity Timeline"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timeline, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                                        color: "error"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            mb: 2,
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    mr: 2,
                                                                    fontWeight: 600,
                                                                    color: "text.primary"
                                                                },
                                                                children: "User login"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "caption",
                                                                children: "12 min ago"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "User login at 2:12pm"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                                        color: "primary"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            mb: 2,
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    mr: 2,
                                                                    fontWeight: 600,
                                                                    color: "text.primary"
                                                                },
                                                                children: "Meeting with John"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "caption",
                                                                children: "45 min ago"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        sx: {
                                                            mb: 2
                                                        },
                                                        children: "React Project meeting with John @10:15am"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                alt: "Avatar",
                                                                src: "/images/avatars/2.png",
                                                                sx: {
                                                                    width: 40,
                                                                    height: 40,
                                                                    mr: 2
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "column"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        variant: "body2",
                                                                        sx: {
                                                                            fontWeight: 600,
                                                                            color: "text.primary"
                                                                        },
                                                                        children: "Leona Watkins (Client)"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        variant: "body2",
                                                                        children: "CEO of Watkins Group"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                                        color: "info"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            mb: 2,
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    mr: 2,
                                                                    fontWeight: 600,
                                                                    color: "text.primary"
                                                                },
                                                                children: "Create a new react project for client"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "caption",
                                                                children: "2 day ago"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Add files to new design folder"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                                        color: "success"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            mb: 2,
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    mr: 2,
                                                                    fontWeight: 600,
                                                                    color: "text.primary"
                                                                },
                                                                children: "Create invoices for client"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "caption",
                                                                children: "12 min ago"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Create new invoices and send to Leona Watkins"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            mt: 2,
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                sx: {
                                                                    width: 28,
                                                                    height: "auto"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    width: 28,
                                                                    height: 28,
                                                                    alt: "invoice.pdf",
                                                                    src: "/images/icons/file-icons/pdf.png"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "subtitle2",
                                                                sx: {
                                                                    ml: 2,
                                                                    fontWeight: 600
                                                                },
                                                                children: "invoice.pdf"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(UsersInvoiceListTable, {
                    invoiceData: invoiceData
                })
            })
        ]
    });
};
/* harmony default export */ const view_UserViewOverview = (UserViewOverview);

// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(7730);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);
;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewSecurity.js
// ** React Imports


// ** MUI Imports


























// ** Icon Imports

const UserViewSecurity_data = [
    {
        device: "Dell XPS 15",
        location: "United States",
        browser: "Chrome on Windows",
        recentActivity: "10, Jan 2020 20:07"
    },
    {
        location: "Ghana",
        device: "Google Pixel 3a",
        browser: "Chrome on Android",
        recentActivity: "11, Jan 2020 10:16"
    },
    {
        location: "Mayotte",
        device: "Apple iMac",
        browser: "Chrome on MacOS",
        recentActivity: "11, Jan 2020 12:10"
    },
    {
        location: "Mauritania",
        device: "Apple iPhone XR",
        browser: "Chrome on iPhone",
        recentActivity: "12, Jan 2020 8:29"
    }
];
const UserViewSecurity = ()=>{
    // ** States
    const [defaultValues, setDefaultValues] = (0,external_react_.useState)({
        mobile: "+1(968) 819-2547"
    });
    const [mobileNumber, setMobileNumber] = (0,external_react_.useState)(defaultValues.mobile);
    const [openEditMobileNumber, setOpenEditMobileNumber] = (0,external_react_.useState)(false);
    const [values, setValues] = (0,external_react_.useState)({
        newPassword: "",
        showNewPassword: false,
        confirmNewPassword: "",
        showConfirmNewPassword: false
    });
    // Handle Password
    const handleNewPasswordChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowNewPassword = ()=>{
        setValues({
            ...values,
            showNewPassword: !values.showNewPassword
        });
    };
    const handleMouseDownNewPassword = (event)=>{
        event.preventDefault();
    };
    // Handle Confirm Password
    const handleConfirmNewPasswordChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowConfirmNewPassword = ()=>{
        setValues({
            ...values,
            showConfirmNewPassword: !values.showConfirmNewPassword
        });
    };
    const handleMouseDownConfirmNewPassword = (event)=>{
        event.preventDefault();
    };
    // Handle edit mobile number dialog
    const handleEditMobileNumberClickOpen = ()=>setOpenEditMobileNumber(true);
    const handleEditMobileNumberClose = ()=>setOpenEditMobileNumber(false);
    // Handle button click inside the dialog
    const handleCancelClick = ()=>{
        setMobileNumber(defaultValues.mobile);
        handleEditMobileNumberClose();
    };
    const handleSubmitClick = ()=>{
        setDefaultValues({
            ...defaultValues,
            mobile: mobileNumber
        });
        handleEditMobileNumberClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Change Password"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Alert_default()), {
                                    icon: false,
                                    severity: "warning",
                                    sx: {
                                        mb: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((AlertTitle_default()), {
                                            sx: {
                                                fontWeight: 600,
                                                mb: (theme)=>`${theme.spacing(1)} !important`
                                            },
                                            children: "Ensure that these requirements are met"
                                        }),
                                        "Minimum 8 characters long, uppercase & symbol"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                    onSubmit: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        container: true,
                                        spacing: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                    fullWidth: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                            htmlFor: "user-view-security-new-password",
                                                            children: "New Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                            label: "New Password",
                                                            value: values.newPassword,
                                                            id: "user-view-security-new-password",
                                                            onChange: handleNewPasswordChange("newPassword"),
                                                            type: values.showNewPassword ? "text" : "password",
                                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                position: "end",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                    edge: "end",
                                                                    onClick: handleClickShowNewPassword,
                                                                    "aria-label": "toggle password visibility",
                                                                    onMouseDown: handleMouseDownNewPassword,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                        icon: values.showNewPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                    fullWidth: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                            htmlFor: "user-view-security-confirm-new-password",
                                                            children: "Confirm New Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                            label: "Confirm New Password",
                                                            value: values.confirmNewPassword,
                                                            id: "user-view-security-confirm-new-password",
                                                            type: values.showConfirmNewPassword ? "text" : "password",
                                                            onChange: handleConfirmNewPasswordChange("confirmNewPassword"),
                                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                position: "end",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                    edge: "end",
                                                                    "aria-label": "toggle password visibility",
                                                                    onClick: handleClickShowConfirmNewPassword,
                                                                    onMouseDown: handleMouseDownConfirmNewPassword,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                        icon: values.showConfirmNewPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    type: "submit",
                                                    variant: "contained",
                                                    children: "Change Password"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Two-step verification",
                            titleTypographyProps: {
                                sx: {
                                    mb: 1
                                }
                            },
                            subheader: "Keep your account secure with authentication step."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        fontWeight: 500,
                                        fontSize: "0.875rem"
                                    },
                                    children: "SMS"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: mobileNumber
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    "aria-label": "edit",
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    onClick: handleEditMobileNumberClickOpen,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:square-edit-outline",
                                                        fontSize: "1.25rem"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    "aria-label": "delete",
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:delete-outline",
                                                        fontSize: "1.25rem"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                    sx: {
                                        mt: "0 !important",
                                        mb: (theme)=>`${theme.spacing(4)} !important`
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    variant: "body2",
                                    children: [
                                        "Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            href: "/",
                                            onClick: (e)=>e.preventDefault(),
                                            children: "Learn more"
                                        }),
                                        "."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                            open: openEditMobileNumber,
                            onClose: handleCancelClick,
                            "aria-labelledby": "user-view-security-edit-mobile-number",
                            sx: {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: 650,
                                    p: [
                                        2,
                                        10
                                    ]
                                }
                            },
                            "aria-describedby": "user-view-security-edit-mobile-number-description",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                    id: "user-view-security-edit-mobile-number",
                                    sx: {
                                        textAlign: "center",
                                        fontSize: "1.5rem !important"
                                    },
                                    children: "Enable One Time Password"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            children: "Verify Your Mobile Number for SMS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                mt: 2,
                                                mb: 5
                                            },
                                            children: "Enter your mobile phone number with country code and we will send you a verification code."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            onSubmit: (e)=>e.preventDefault(),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    autoFocus: true,
                                                    fullWidth: true,
                                                    value: mobileNumber,
                                                    label: "Mobile number with country code",
                                                    onChange: (e)=>setMobileNumber(e.target.value)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mt: 6.5,
                                                        display: "flex",
                                                        justifyContent: "flex-end"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            type: "reset",
                                                            color: "secondary",
                                                            variant: "outlined",
                                                            onClick: handleCancelClick,
                                                            children: "Cancel"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                            type: "submit",
                                                            sx: {
                                                                ml: 3
                                                            },
                                                            variant: "contained",
                                                            onClick: handleSubmitClick,
                                                            children: "Send"
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Recent devices"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            sx: {
                                m: "0 !important"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                sx: {
                                    minWidth: 500
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                        sx: {
                                            backgroundColor: (theme)=>theme.palette.mode === "light" ? "grey.50" : "background.default"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: "Browser"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: "Device"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: "Location"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: "Recent Activity"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                                        children: UserViewSecurity_data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                hover: true,
                                                sx: {
                                                    "&:last-of-type td": {
                                                        border: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    width: "22",
                                                                    height: "22",
                                                                    alt: "Chrome",
                                                                    src: "/images/logos/chrome.png"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    sx: {
                                                                        ml: 2,
                                                                        fontWeight: 500,
                                                                        fontSize: "0.875rem"
                                                                    },
                                                                    children: item.browser
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: item.device
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: item.location
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: item.recentActivity
                                                    })
                                                ]
                                            }, index))
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
/* harmony default export */ const view_UserViewSecurity = (UserViewSecurity);

;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewConnection.js
// ** MUI Imports










// ** Icon Imports

const connectedAccountsArr = [
    {
        checked: true,
        title: "Google",
        logo: "/images/logos/google.png",
        subtitle: "Calendar and Contacts"
    },
    {
        checked: false,
        title: "Slack",
        logo: "/images/logos/slack.png",
        subtitle: "Communications"
    },
    {
        checked: true,
        title: "Github",
        logo: "/images/logos/github.png",
        subtitle: "Manage your Git repositories"
    },
    {
        checked: true,
        title: "Mailchimp",
        subtitle: "Email marketing service",
        logo: "/images/logos/mail-chimp.png"
    },
    {
        title: "Asana",
        checked: false,
        subtitle: "Communication",
        logo: "/images/logos/asana.png"
    }
];
const socialAccountsArr = [
    {
        title: "Facebook",
        isConnected: false,
        logo: "/images/logos/facebook.png"
    },
    {
        title: "Twitter",
        isConnected: true,
        username: "@ThemeSelection",
        logo: "/images/logos/twitter.png"
    },
    {
        title: "Instagram",
        isConnected: true,
        username: "@ThemeSelection",
        logo: "/images/logos/instagram.png"
    },
    {
        title: "Dribbble",
        isConnected: false,
        logo: "/images/logos/dribbble.png"
    },
    {
        title: "Behance",
        isConnected: false,
        logo: "/images/logos/behance.png"
    }
];
const UserViewConnection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Connected Accounts"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        mb: 4,
                                        color: "text.secondary"
                                    },
                                    children: "Display content from your connected accounts on your site"
                                }),
                                connectedAccountsArr.map((account)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            gap: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&:not(:last-of-type)": {
                                                mb: 4
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                        sx: {
                                                            mr: 4,
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: account.logo,
                                                            alt: account.title,
                                                            height: "30",
                                                            width: "30"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    fontWeight: 500
                                                                },
                                                                children: account.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    color: "text.disabled"
                                                                },
                                                                children: account.subtitle
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                defaultChecked: account.checked
                                            })
                                        ]
                                    }, account.title);
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Social Accounts"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        mb: 4,
                                        color: "text.secondary"
                                    },
                                    children: "Display content from social accounts on your site"
                                }),
                                socialAccountsArr.map((account)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            gap: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&:not(:last-of-type)": {
                                                mb: 4
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                        sx: {
                                                            mr: 4,
                                                            minWidth: 45,
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: account.logo,
                                                            alt: account.title,
                                                            height: "30"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    fontWeight: 500
                                                                },
                                                                children: account.title
                                                            }),
                                                            account.isConnected ? /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                href: "/",
                                                                component: (Link_default()),
                                                                sx: {
                                                                    color: "primary.main"
                                                                },
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: account.username
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    color: "text.disabled"
                                                                },
                                                                children: "Not Connected"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "outlined",
                                                sx: {
                                                    p: 1.5,
                                                    minWidth: 38
                                                },
                                                color: account.isConnected ? "error" : "secondary",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: account.isConnected ? "mdi:delete-outline" : "mdi:link-variant"
                                                })
                                            })
                                        ]
                                    }, account.title);
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const view_UserViewConnection = (UserViewConnection);

// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(8330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewNotification.js
// ** MUI Imports















const UserViewNotification = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Notifications"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    m: "0 !important"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    sx: {
                        fontWeight: 600,
                        color: "text.primary"
                    },
                    children: "You will receive notification for the below selected items."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    m: "0 !important"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                    sx: {
                        minWidth: 500
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            sx: {
                                backgroundColor: (theme)=>theme.palette.mode === "light" ? "grey.50" : "background.default"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            py: 3
                                        },
                                        children: "Type"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            py: 3
                                        },
                                        align: "center",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            py: 3
                                        },
                                        align: "center",
                                        children: "Browser"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            py: 3
                                        },
                                        align: "center",
                                        children: "App"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    hover: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "New for you"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    hover: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "Account activity"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    hover: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "A new browser used to sign in"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    hover: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: "A new device is linked"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            sx: {
                                                pt: "0 !important",
                                                pb: "0 !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {})
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        sx: {
                            mr: 2
                        },
                        children: "Save Changes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "secondary",
                        variant: "outlined",
                        children: "Discard"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const view_UserViewNotification = (UserViewNotification);

;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewRight.js
// ** React Imports


// ** Next Import

// ** MUI Imports








// ** Icon Imports

// ** Demo Components Imports





// ** Styled Tab component
const Tab = (0,styles_.styled)((Tab_default()))(({ theme  })=>({
        minHeight: 48,
        flexDirection: "row",
        "& svg": {
            marginBottom: "0 !important",
            marginRight: theme.spacing(1)
        }
    }));
const UserViewRight = ({ tab , invoiceData  })=>{
    // ** State
    const [activeTab, setActiveTab] = (0,external_react_.useState)(tab);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    // ** Hooks
    const router = (0,router_.useRouter)();
    const handleChange = (event, value)=>{
        setIsLoading(true);
        setActiveTab(value);
        router.push({
            pathname: `/apps/user/view/${value.toLowerCase()}`
        }).then(()=>setIsLoading(false));
    };
    (0,external_react_.useEffect)(()=>{
        if (tab && tab !== activeTab) {
            setActiveTab(tab);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tab
    ]);
    (0,external_react_.useEffect)(()=>{
        if (invoiceData) {
            setIsLoading(false);
        }
    }, [
        invoiceData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContext_default()), {
        value: activeTab,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabList_default()), {
                variant: "scrollable",
                scrollButtons: "auto",
                onChange: handleChange,
                "aria-label": "forced scroll tabs example",
                sx: {
                    borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                        value: "overview",
                        label: "Overview",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:account-outline"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                        value: "security",
                        label: "Security",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:lock-outline"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                        value: "billing-plan",
                        label: "Billing & Plan",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:bookmark-outline"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                        value: "notification",
                        label: "Notification",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:bell-outline"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Tab, {
                        value: "connection",
                        label: "Connection",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:link-variant"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    mt: 6
                },
                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mt: 6,
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
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                            sx: {
                                p: 0
                            },
                            value: "overview",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewOverview, {
                                invoiceData: invoiceData
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                            sx: {
                                p: 0
                            },
                            value: "security",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewSecurity, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                            sx: {
                                p: 0
                            },
                            value: "billing-plan",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewBilling, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                            sx: {
                                p: 0
                            },
                            value: "notification",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewNotification, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                            sx: {
                                p: 0
                            },
                            value: "connection",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewConnection, {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const view_UserViewRight = (UserViewRight);

;// CONCATENATED MODULE: ./src/views/apps/user/view/UserViewPage.js
// ** MUI Imports


// ** Demo Components Imports


const UserView = ({ tab , invoiceData  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 5,
                lg: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewLeft, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 7,
                lg: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(view_UserViewRight, {
                    tab: tab,
                    invoiceData: invoiceData
                })
            })
        ]
    });
};
/* harmony default export */ const UserViewPage = (UserView);

;// CONCATENATED MODULE: ./src/pages/apps/user/view/[tab].js
// ** Third Party Imports


// ** Demo Components Imports

const _tab_UserView = ({ tab , invoiceData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(UserViewPage, {
        tab: tab,
        invoiceData: invoiceData
    });
};
const getStaticPaths = ()=>{
    return {
        paths: [
            {
                params: {
                    tab: "overview"
                }
            },
            {
                params: {
                    tab: "security"
                }
            },
            {
                params: {
                    tab: "billing-plan"
                }
            },
            {
                params: {
                    tab: "notification"
                }
            },
            {
                params: {
                    tab: "connection"
                }
            }
        ],
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const res = await external_axios_default().get("/apps/invoice/invoices");
    const invoiceData = res.data.allData;
    return {
        props: {
            invoiceData,
            tab: params?.tab
        }
    };
};
/* harmony default export */ const _tab_ = (_tab_UserView);


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

/***/ 6964:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/Timeline");

/***/ }),

/***/ 5392:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TimelineConnector");

/***/ }),

/***/ 788:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TimelineContent");

/***/ }),

/***/ 7277:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TimelineDot");

/***/ }),

/***/ 4641:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TimelineItem");

/***/ }),

/***/ 2032:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/lab/TimelineSeparator");

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

/***/ 3691:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 9361:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 8330:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ 8369:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 9048:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CircularProgress");

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

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 2468:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

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

/***/ 5545:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/LinearProgress");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

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

/***/ 5953:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableHead");

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

/***/ 7738:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-data-grid");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,152,9550,1514,7294,2024,4560,9882], () => (__webpack_exec__(2170)));
module.exports = __webpack_exports__;

})();