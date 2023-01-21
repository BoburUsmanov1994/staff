(() => {
var exports = {};
exports.id = 8708;
exports.ids = [8708,1032,2197,8573];
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

/***/ 1022:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
var TabList_default = /*#__PURE__*/__webpack_require__.n(TabList_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(8330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/FormHelperText"
var FormHelperText_ = __webpack_require__(6354);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/TabAccount.js
// ** React Imports


// ** MUI Imports





















// ** Third Party Imports

// ** Icon Imports

const initialData = {
    state: "",
    number: "",
    address: "",
    zipCode: "",
    lastName: "Doe",
    currency: "usd",
    firstName: "John",
    language: "arabic",
    timezone: "gmt-12",
    country: "australia",
    email: "john.doe@example.com",
    organization: "ThemeSelection"
};
const ImgStyled = (0,styles_.styled)("img")(({ theme  })=>({
        width: 120,
        height: 120,
        marginRight: theme.spacing(5),
        borderRadius: theme.shape.borderRadius
    }));
const ButtonStyled = (0,styles_.styled)((Button_default()))(({ theme  })=>({
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "center"
        }
    }));
const ResetButtonStyled = (0,styles_.styled)((Button_default()))(({ theme  })=>({
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginLeft: 0,
            textAlign: "center",
            marginTop: theme.spacing(4)
        }
    }));
const TabAccount = ()=>{
    // ** State
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [inputValue, setInputValue] = (0,external_react_.useState)("");
    const [userInput, setUserInput] = (0,external_react_.useState)("yes");
    const [formData, setFormData] = (0,external_react_.useState)(initialData);
    const [imgSrc, setImgSrc] = (0,external_react_.useState)("/images/avatars/1.png");
    const [secondDialogOpen, setSecondDialogOpen] = (0,external_react_.useState)(false);
    // ** Hooks
    const { control , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        defaultValues: {
            checkbox: false
        }
    });
    const handleClose = ()=>setOpen(false);
    const handleSecondDialogClose = ()=>setSecondDialogOpen(false);
    const onSubmit = ()=>setOpen(true);
    const handleConfirmation = (value)=>{
        handleClose();
        setUserInput(value);
        setSecondDialogOpen(true);
    };
    const handleInputImageChange = (file)=>{
        const reader = new FileReader();
        const { files  } = file.target;
        if (files && files.length !== 0) {
            reader.onload = ()=>setImgSrc(reader.result);
            reader.readAsDataURL(files[0]);
            if (reader.result !== null) {
                setInputValue(reader.result);
            }
        }
    };
    const handleInputImageReset = ()=>{
        setInputValue("");
        setImgSrc("/images/avatars/1.png");
    };
    const handleFormChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
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
                            title: "Account Details"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                    sx: {
                                        pt: 0
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ImgStyled, {
                                                src: imgSrc,
                                                alt: "Profile Pic"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonStyled, {
                                                        component: "label",
                                                        variant: "contained",
                                                        htmlFor: "account-settings-upload-image",
                                                        children: [
                                                            "Upload New Photo",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                hidden: true,
                                                                type: "file",
                                                                value: inputValue,
                                                                accept: "image/png, image/jpeg",
                                                                onChange: handleInputImageChange,
                                                                id: "account-settings-upload-image"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ResetButtonStyled, {
                                                        color: "secondary",
                                                        variant: "outlined",
                                                        onClick: handleInputImageReset,
                                                        children: "Reset"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mt: 5,
                                                            color: "text.disabled"
                                                        },
                                                        children: "Allowed PNG or JPEG. Max size of 800K."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
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
                                                    label: "First Name",
                                                    placeholder: "John",
                                                    value: formData.firstName,
                                                    onChange: (e)=>handleFormChange("firstName", e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    fullWidth: true,
                                                    label: "Last Name",
                                                    placeholder: "Doe",
                                                    value: formData.lastName,
                                                    onChange: (e)=>handleFormChange("lastName", e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    fullWidth: true,
                                                    type: "email",
                                                    label: "Email",
                                                    value: formData.email,
                                                    placeholder: "john.doe@example.com",
                                                    onChange: (e)=>handleFormChange("email", e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    fullWidth: true,
                                                    label: "Organization",
                                                    placeholder: "ThemeSelection",
                                                    value: formData.organization,
                                                    onChange: (e)=>handleFormChange("organization", e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    fullWidth: true,
                                                    type: "number",
                                                    label: "Phone Number",
                                                    value: formData.number,
                                                    placeholder: "202 555 0111",
                                                    onChange: (e)=>handleFormChange("number", e.target.value),
                                                    InputProps: {
                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                            position: "start",
                                                            children: "US (+1)"
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
                                                    label: "Address",
                                                    placeholder: "Address",
                                                    value: formData.address,
                                                    onChange: (e)=>handleFormChange("address", e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    fullWidth: true,
                                                    label: "State",
                                                    placeholder: "California",
                                                    value: formData.state,
                                                    onChange: (e)=>handleFormChange("state", e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    fullWidth: true,
                                                    type: "number",
                                                    label: "Zip Code",
                                                    placeholder: "231465",
                                                    value: formData.zipCode,
                                                    onChange: (e)=>handleFormChange("zipCode", e.target.value)
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
                                                            children: "Country"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            label: "Country",
                                                            value: formData.country,
                                                            onChange: (e)=>handleFormChange("country", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "australia",
                                                                    children: "Australia"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "canada",
                                                                    children: "Canada"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "france",
                                                                    children: "France"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "united-kingdom",
                                                                    children: "United Kingdom"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "united-states",
                                                                    children: "United States"
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
                                                            children: "Language"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            label: "Language",
                                                            value: formData.language,
                                                            onChange: (e)=>handleFormChange("language", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "arabic",
                                                                    children: "Arabic"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "english",
                                                                    children: "English"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "french",
                                                                    children: "French"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "german",
                                                                    children: "German"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "portuguese",
                                                                    children: "Portuguese"
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
                                                            children: "Timezone"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            label: "Timezone",
                                                            value: formData.timezone,
                                                            onChange: (e)=>handleFormChange("timezone", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-12",
                                                                    children: "(GMT-12:00) International Date Line West"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-11",
                                                                    children: "(GMT-11:00) Midway Island, Samoa"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-10",
                                                                    children: "(GMT-10:00) Hawaii"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-09",
                                                                    children: "(GMT-09:00) Alaska"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-08",
                                                                    children: "(GMT-08:00) Pacific Time (US & Canada)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-08-baja",
                                                                    children: "(GMT-08:00) Tijuana, Baja California"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-07",
                                                                    children: "(GMT-07:00) Chihuahua, La Paz, Mazatlan"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-07-mt",
                                                                    children: "(GMT-07:00) Mountain Time (US & Canada)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-06",
                                                                    children: "(GMT-06:00) Central America"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-06-ct",
                                                                    children: "(GMT-06:00) Central Time (US & Canada)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-06-mc",
                                                                    children: "(GMT-06:00) Guadalajara, Mexico City, Monterrey"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-06-sk",
                                                                    children: "(GMT-06:00) Saskatchewan"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-05",
                                                                    children: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-05-et",
                                                                    children: "(GMT-05:00) Eastern Time (US & Canada)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-05-ind",
                                                                    children: "(GMT-05:00) Indiana (East)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-04",
                                                                    children: "(GMT-04:00) Atlantic Time (Canada)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "gmt-04-clp",
                                                                    children: "(GMT-04:00) Caracas, La Paz"
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
                                                            children: "Currency"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            label: "Currency",
                                                            value: formData.currency,
                                                            onChange: (e)=>handleFormChange("currency", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "usd",
                                                                    children: "USD"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "eur",
                                                                    children: "EUR"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "pound",
                                                                    children: "Pound"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    value: "bitcoin",
                                                                    children: "Bitcoin"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        variant: "contained",
                                                        sx: {
                                                            mr: 3
                                                        },
                                                        children: "Save Changes"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                        type: "reset",
                                                        variant: "outlined",
                                                        color: "secondary",
                                                        onClick: ()=>setFormData(initialData),
                                                        children: "Reset"
                                                    })
                                                ]
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
                            title: "Delete Account"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        sx: {
                                            mb: 4
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                                    name: "checkbox",
                                                    control: control,
                                                    rules: {
                                                        required: true
                                                    },
                                                    render: ({ field  })=>/*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                            label: "I confirm my account deactivation",
                                                            sx: errors.checkbox ? {
                                                                "& .MuiTypography-root": {
                                                                    color: "error.main"
                                                                }
                                                            } : null,
                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                ...field,
                                                                size: "small",
                                                                name: "validation-basic-checkbox",
                                                                sx: errors.checkbox ? {
                                                                    color: "error.main"
                                                                } : null
                                                            })
                                                        })
                                                }),
                                                errors.checkbox && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                                    sx: {
                                                        color: "error.main"
                                                    },
                                                    id: "validation-basic-checkbox",
                                                    children: "Please confirm you want to delete account"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        color: "error",
                                        type: "submit",
                                        disabled: errors.checkbox !== undefined,
                                        children: "Deactivate Account"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                maxWidth: "xs",
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    maxWidth: "85%",
                                    textAlign: "center",
                                    "& svg": {
                                        mb: 4,
                                        color: "warning.main"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:alert-circle-outline",
                                        fontSize: "5.5rem"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: "Are you sure you would like to deactivate your account?"
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
                maxWidth: "xs",
                open: secondDialogOpen,
                onClose: handleSecondDialogClose,
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
                                    children: userInput === "yes" ? "Deleted!" : "Cancelled"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: userInput === "yes" ? "Your account has been deleted." : "Account Deactivation Cancelled!"
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
/* harmony default export */ const account_settings_TabAccount = (TabAccount);

// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: external "@mui/material/AlertTitle"
var AlertTitle_ = __webpack_require__(5992);
var AlertTitle_default = /*#__PURE__*/__webpack_require__.n(AlertTitle_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
// EXTERNAL MODULE: ./src/views/pages/pricing/PricingPlans.js + 1 modules
var PricingPlans = __webpack_require__(2958);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/billing/CurrentPlanCard.js
// ** React Imports


// ** MUI Imports
















// ** Icon Imports

// ** Custom Components Imports

// ** Component Import

const CurrentPlanCard = ({ data  })=>{
    // ** State
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [userInput, setUserInput] = (0,external_react_.useState)("yes");
    const [plan, setPlan] = (0,external_react_.useState)("annually");
    const [secondDialogOpen, setSecondDialogOpen] = (0,external_react_.useState)(false);
    const [openPricingDialog, setOpenPricingDialog] = (0,external_react_.useState)(false);
    const handleChange = (e)=>{
        if (e.target.checked) {
            setPlan("annually");
        } else {
            setPlan("monthly");
        }
    };
    const handleClose = ()=>setOpen(false);
    const handleSecondDialogClose = ()=>setSecondDialogOpen(false);
    const handleConfirmation = (value)=>{
        handleClose();
        setUserInput(value);
        setSecondDialogOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                        title: "Current Plan"
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
                                                mb: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mb: 2,
                                                        fontWeight: 500
                                                    },
                                                    children: "Your Current Plan is Basic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: "A simple start for everyone"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mb: 2,
                                                        fontWeight: 500
                                                    },
                                                    children: "Active until Dec 09, 2021"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: "We will send you a notification upon Subscription expiration"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mb: 2,
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                mr: 2,
                                                                fontWeight: 500
                                                            },
                                                            children: "$199 Per Month"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                                            label: "Popular",
                                                            size: "small",
                                                            color: "primary",
                                                            skin: "light"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
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
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Alert_default()), {
                                            severity: "warning",
                                            icon: false,
                                            sx: {
                                                mb: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((AlertTitle_default()), {
                                                    sx: {
                                                        fontWeight: 700
                                                    },
                                                    children: "We need your attention!"
                                                }),
                                                "Your plan requires update"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                fontWeight: 600,
                                                                color: "text.secondary"
                                                            },
                                                            children: "Days"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                fontWeight: 600,
                                                                color: "text.secondary"
                                                            },
                                                            children: "24 of 30 Days"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                                                    value: 75,
                                                    variant: "determinate",
                                                    sx: {
                                                        my: 1,
                                                        height: 12,
                                                        borderRadius: 6,
                                                        "& .MuiLinearProgress-bar": {
                                                            borderRadius: 6
                                                        }
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: "6 days remaining until your plan requires update"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mt: 3,
                                            gap: 3,
                                            display: "flex",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "contained",
                                                onClick: ()=>setOpenPricingDialog(true),
                                                children: "Upgrade Plan"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "outlined",
                                                color: "secondary",
                                                onClick: ()=>setOpen(true),
                                                children: "Cancel Subscription"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                fullWidth: true,
                maxWidth: "xs",
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    maxWidth: "85%",
                                    textAlign: "center",
                                    "& svg": {
                                        mb: 4,
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
                maxWidth: "xs",
                open: secondDialogOpen,
                onClose: handleSecondDialogClose,
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
                                    children: userInput === "yes" ? "Your subscription cancelled successfully." : "Unsubscription Cancelled!"
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                scroll: "body",
                maxWidth: "lg",
                open: openPricingDialog,
                onClose: ()=>setOpenPricingDialog(false),
                onBackdropClick: ()=>setOpenPricingDialog(false),
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
                            onClick: ()=>setOpenPricingDialog(false),
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
                                        mb: 3
                                    },
                                    children: "Find the right plan for your site"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your needs."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mb: 4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    htmlFor: "modal-pricing-switch",
                                    sx: {
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontSize: "0.875rem",
                                        color: "text.secondary"
                                    },
                                    children: "Monthly"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                    onChange: handleChange,
                                    id: "modal-pricing-switch",
                                    checked: plan === "annually"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    htmlFor: "modal-pricing-switch",
                                    sx: {
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontSize: "0.875rem",
                                        color: "text.secondary"
                                    },
                                    children: "Annually"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PricingPlans/* default */.Z, {
                            data: data,
                            plan: plan
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const billing_CurrentPlanCard = (CurrentPlanCard);

// EXTERNAL MODULE: external "@mui/material/Radio"
var Radio_ = __webpack_require__(5374);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);
// EXTERNAL MODULE: external "@mui/material/RadioGroup"
var RadioGroup_ = __webpack_require__(6563);
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: external "payment"
var external_payment_ = __webpack_require__(2863);
var external_payment_default = /*#__PURE__*/__webpack_require__.n(external_payment_);
// EXTERNAL MODULE: external "react-credit-cards"
var external_react_credit_cards_ = __webpack_require__(7568);
var external_react_credit_cards_default = /*#__PURE__*/__webpack_require__.n(external_react_credit_cards_);
// EXTERNAL MODULE: ./src/@core/styles/libs/react-credit-cards/index.js
var react_credit_cards = __webpack_require__(2890);
// EXTERNAL MODULE: ./src/@core/utils/format.js
var utils_format = __webpack_require__(9882);
// EXTERNAL MODULE: ./node_modules/react-credit-cards/es/styles-compiled.css
var styles_compiled = __webpack_require__(1538);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/billing/PaymentMethodCard.js
// ** React Imports


// ** MUI Imports






















// ** Third Party Imports


// ** Custom Components Imports

// ** Styled Component Imports

// ** Util Import

// ** Styles Import

const CreditCardWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("xl")]: {
            "& > div:first-of-type": {
                marginBottom: theme.spacing(6)
            }
        },
        [theme.breakpoints.up("xl")]: {
            alignItems: "center",
            flexDirection: "row",
            "& > div:first-of-type": {
                marginRight: theme.spacing(6)
            }
        }
    }));
const data = [
    {
        cardCvc: "587",
        name: "Tom McBride",
        expiryDate: "12/24",
        imgAlt: "Mastercard",
        badgeColor: "primary",
        cardStatus: "Primary",
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
    }
];
const PaymentMethodCard = ()=>{
    // ** States
    const [name, setName] = (0,external_react_.useState)("");
    const [cvc, setCvc] = (0,external_react_.useState)("");
    const [cardNumber, setCardNumber] = (0,external_react_.useState)("");
    const [focus, setFocus] = (0,external_react_.useState)();
    const [expiry, setExpiry] = (0,external_react_.useState)("");
    const [openEditCard, setOpenEditCard] = (0,external_react_.useState)(false);
    const [paymentMethod, setPaymentMethod] = (0,external_react_.useState)("card");
    const [selectedCard, setSelectedCard] = (0,external_react_.useState)(null);
    const handleEditCardClickOpen = (id)=>{
        setSelectedCard({
            cardId: id,
            focus: undefined,
            name: data[id].name,
            cvc: data[id].cardCvc,
            expiry: data[id].expiryDate,
            cardNumber: data[id].cardNumber
        });
        setOpenEditCard(true);
    };
    const handleEditCardClose = ()=>{
        setOpenEditCard(false);
        setTimeout(()=>{
            setSelectedCard(null);
        }, 200);
    };
    const handleBlur = ()=>setFocus(undefined);
    const handleSelectedCardBlur = ()=>setFocus(undefined);
    const handleInputChange = ({ target  })=>{
        if (target.name === "cardNumber") {
            target.value = (0,utils_format/* formatCreditCardNumber */.mf)(target.value, (external_payment_default()));
            setCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = (0,utils_format/* formatExpirationDate */.N)(target.value);
            setExpiry(target.value);
        } else if (target.name === "cvc") {
            target.value = (0,utils_format/* formatCVC */.tE)(target.value, cardNumber, (external_payment_default()));
            setCvc(target.value);
        }
    };
    const handleInputChangeDialog = ({ target  })=>{
        if (target.name === "cardNumberDialog") {
            target.value = (0,utils_format/* formatCreditCardNumber */.mf)(target.value, (external_payment_default()));
            setSelectedCard({
                ...selectedCard,
                cardNumber: target.value
            });
        } else if (target.name === "expiryDialog") {
            target.value = (0,utils_format/* formatExpirationDate */.N)(target.value);
            setSelectedCard({
                ...selectedCard,
                expiry: target.value
            });
        } else if (target.name === "cvcDialog") {
            target.value = (0,utils_format/* formatCVC */.tE)(target.value, selectedCard.cardNumber, (external_payment_default()));
            setSelectedCard({
                ...selectedCard,
                cvc: target.value
            });
        }
    };
    const handleResetForm = ()=>{
        setCvc("");
        setName("");
        setExpiry("");
        setCardNumber("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                        title: "Payment Method"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        container: true,
                                        spacing: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((RadioGroup_default()), {
                                                        row: true,
                                                        value: paymentMethod,
                                                        "aria-label": "payment method",
                                                        name: "account-settings-billing-radio",
                                                        onChange: (e)=>setPaymentMethod(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                value: "card",
                                                                control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {}),
                                                                label: "Credit/Debit/ATM Card",
                                                                sx: {
                                                                    "& .MuiTypography-root": {
                                                                        color: "text.secondary"
                                                                    }
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                value: "cod",
                                                                label: "COD/Cheque",
                                                                control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {}),
                                                                sx: {
                                                                    "& .MuiTypography-root": {
                                                                        color: "text.secondary"
                                                                    }
                                                                }
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            paymentMethod === "card" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CreditCardWrapper, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_credit_cards/* default */.Z, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_credit_cards_default()), {
                                                                    cvc: cvc,
                                                                    focused: focus,
                                                                    expiry: expiry,
                                                                    name: name,
                                                                    number: cardNumber
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                            fullWidth: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                                fullWidth: true,
                                                                name: "cardNumber",
                                                                value: cardNumber,
                                                                autoComplete: "off",
                                                                label: "Card Number",
                                                                onBlur: handleBlur,
                                                                onChange: handleInputChange,
                                                                placeholder: "0000 0000 0000 0000",
                                                                onFocus: (e)=>setFocus(e.target.name)
                                                            })
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
                                            }) : null
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                mb: 4,
                                                fontWeight: 500
                                            },
                                            children: "My Cards"
                                        }),
                                        data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                                                    backgroundColor: "action.hover",
                                                    alignItems: [
                                                        "flex-start",
                                                        "center"
                                                    ],
                                                    mb: index !== data.length - 1 ? 4 : undefined
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
                                                                    mt: 3,
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
                                                                sx: {
                                                                    color: "text.secondary"
                                                                },
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
                                                                variant: "caption",
                                                                sx: {
                                                                    mt: 8,
                                                                    display: "block",
                                                                    color: "text.secondary"
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
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            type: "submit",
                                            variant: "contained",
                                            sx: {
                                                mr: 5
                                            },
                                            children: "Save Changes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: handleResetForm,
                                            children: "Reset"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
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
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                        id: "user-view-billing-edit-card",
                        sx: {
                            textAlign: "center",
                            fontSize: "1.5rem !important"
                        },
                        children: "Edit Card"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                                variant: "body2",
                                id: "user-view-billing-edit-card-description",
                                sx: {
                                    textAlign: "center",
                                    mb: 7
                                },
                                children: "Edit your saved card details"
                            }),
                            selectedCard !== null && /*#__PURE__*/ jsx_runtime_.jsx("form", {
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
                                                    cvc: selectedCard.cvc,
                                                    focused: selectedCard.focus,
                                                    expiry: selectedCard.expiry,
                                                    name: selectedCard.name,
                                                    number: selectedCard.cardNumber
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
                                                            autoComplete: "off",
                                                            label: "Card Number",
                                                            name: "cardNumberDialog",
                                                            onBlur: handleSelectedCardBlur,
                                                            onChange: handleInputChangeDialog,
                                                            placeholder: "0000 0000 0000 0000",
                                                            defaultValue: selectedCard.cardNumber,
                                                            onFocus: (e)=>setSelectedCard({
                                                                    ...selectedCard,
                                                                    focus: e.target.name
                                                                })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 8,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            fullWidth: true,
                                                            name: "nameDialog",
                                                            autoComplete: "off",
                                                            label: "Name on Card",
                                                            placeholder: "John Doe",
                                                            onBlur: handleSelectedCardBlur,
                                                            defaultValue: selectedCard.name,
                                                            onChange: (e)=>setSelectedCard({
                                                                    ...selectedCard,
                                                                    name: e.target.value
                                                                }),
                                                            onFocus: (e)=>setSelectedCard({
                                                                    ...selectedCard,
                                                                    focus: e.target.name
                                                                })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 4,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            fullWidth: true,
                                                            label: "Expiry",
                                                            placeholder: "MM/YY",
                                                            name: "expiryDialog",
                                                            defaultValue: expiry,
                                                            onBlur: handleSelectedCardBlur,
                                                            inputProps: {
                                                                maxLength: "5"
                                                            },
                                                            onChange: handleInputChangeDialog,
                                                            onFocus: (e)=>setSelectedCard({
                                                                    ...selectedCard,
                                                                    focus: e.target.name
                                                                })
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
                                                                    defaultValue: data[selectedCard.cardId].cardStatus ? data[selectedCard.cardId].cardStatus : "",
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
                                                            label: "CVC",
                                                            name: "cvcDialog",
                                                            defaultValue: cvc,
                                                            autoComplete: "off",
                                                            onBlur: handleSelectedCardBlur,
                                                            onChange: handleInputChangeDialog,
                                                            onFocus: (e)=>setSelectedCard({
                                                                    ...selectedCard,
                                                                    focus: e.target.name
                                                                }),
                                                            placeholder: external_payment_default().fns.cardType(selectedCard.cardNumber) === "amex" ? "1234" : "123"
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
    });
};
/* harmony default export */ const billing_PaymentMethodCard = (PaymentMethodCard);

;// CONCATENATED MODULE: ./src/views/pages/account-settings/billing/BillingAddressCard.js
// ** MUI Imports













// ** Third Party Imports

// ** Styles Import

const defaultValues = {
    companyName: "",
    billingEmail: ""
};
const BillingAddressCard = ()=>{
    // ** Hooks
    const { control , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        defaultValues
    });
    const onSubmit = ()=>{
        return;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Billing Address"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                            name: "companyName",
                                            control: control,
                                            rules: {
                                                required: true
                                            },
                                            render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    value: value,
                                                    label: "Company Name",
                                                    onChange: onChange,
                                                    placeholder: "ThemeSelection",
                                                    error: Boolean(errors.companyName)
                                                })
                                        }),
                                        errors.companyName && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                            sx: {
                                                color: "error.main"
                                            },
                                            children: "This field is required"
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                            control: control,
                                            name: "billingEmail",
                                            rules: {
                                                required: true
                                            },
                                            render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                    type: "email",
                                                    value: value,
                                                    onChange: onChange,
                                                    label: "Billing Email",
                                                    placeholder: "john.doe@example.com",
                                                    error: Boolean(errors.billingEmail)
                                                })
                                        }),
                                        errors.billingEmail && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                            sx: {
                                                color: "error.main"
                                            },
                                            children: "This field is required"
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
                                    placeholder: "Enter TAX ID"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "VAT Number",
                                    placeholder: "Enter VAT Number"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    type: "number",
                                    label: "Phone Number",
                                    placeholder: "202 555 0111",
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                            position: "start",
                                            children: "US (+1)"
                                        })
                                    }
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
                                            children: "Country"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                            label: "Country",
                                            defaultValue: "australia",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "australia",
                                                    children: "Australia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "canada",
                                                    children: "Canada"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "france",
                                                    children: "France"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "united-kingdom",
                                                    children: "United Kingdom"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "united-states",
                                                    children: "United States"
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
                                    label: "Billing Address",
                                    placeholder: "Billing Address"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "State",
                                    placeholder: "California"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    type: "number",
                                    label: "Zip Code",
                                    placeholder: "231465"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        type: "submit",
                                        variant: "contained",
                                        sx: {
                                            mr: 3
                                        },
                                        children: "Save Changes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "outlined",
                                        color: "secondary",
                                        children: "Discard"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const billing_BillingAddressCard = (BillingAddressCard);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/x-data-grid"
var x_data_grid_ = __webpack_require__(7738);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__(4384);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/apps/invoice/index.js
var invoice = __webpack_require__(822);
// EXTERNAL MODULE: ./src/@core/utils/get-initials.js
var get_initials = __webpack_require__(3552);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
// EXTERNAL MODULE: ./src/@core/components/option-menu/index.js
var option_menu = __webpack_require__(4560);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/billing/BillingHistoryTable.js
// ** React Imports


// ** Next Import

// ** MUI Imports
















// ** Icon Imports

// ** Third Party Imports

// ** Store & Actions Imports


// ** Utils Import

// ** Custom Components Imports



// ** Styled component for the link in the dataTable
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
// ** renders client column
const renderClient = (row)=>{
    if (row.avatar.length) {
        return /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
            src: row.avatar,
            sx: {
                mr: 3,
                width: "1.875rem",
                height: "1.875rem"
            }
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
            skin: "light",
            color: row.avatarColor || "primary",
            sx: {
                mr: 3,
                fontSize: ".8rem",
                width: "1.875rem",
                height: "1.875rem"
            },
            children: (0,get_initials/* getInitials */.Q)(row.name || "John Doe")
        });
    }
};
const defaultColumns = [
    {
        flex: 0.1,
        field: "id",
        minWidth: 80,
        headerName: "#",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                href: `/apps/invoice/preview/${row.id}`,
                children: `#${row.id}`
            })
    },
    {
        flex: 0.1,
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
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
        field: "name",
        minWidth: 300,
        headerName: "Client",
        renderCell: ({ row  })=>{
            const { name , companyEmail  } = row;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    renderClient(row),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                noWrap: true,
                                variant: "body2",
                                sx: {
                                    color: "text.primary",
                                    fontWeight: 600
                                },
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                noWrap: true,
                                variant: "caption",
                                children: companyEmail
                            })
                        ]
                    })
                ]
            });
        }
    },
    {
        flex: 0.1,
        minWidth: 90,
        field: "total",
        headerName: "Total",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                children: `$${row.total || 0}`
            })
    },
    {
        flex: 0.15,
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
        minWidth: 90,
        field: "balance",
        headerName: "Balance",
        renderCell: ({ row  })=>{
            return row.balance !== 0 ? /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                sx: {
                    color: "text.primary"
                },
                children: row.balance
            }) : /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                size: "small",
                skin: "light",
                color: "success",
                label: "Paid"
            });
        }
    }
];
/* eslint-disable */ const CustomInput = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const startDate = props.start !== null ? format(props.start, "MM/dd/yyyy") : "";
    const endDate = props.end !== null ? ` - ${format(props.end, "MM/dd/yyyy")}` : null;
    const value = `${startDate}${endDate !== null ? endDate : ""}`;
    props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null;
    const updatedProps = {
        ...props
    };
    delete updatedProps.setDates;
    return /*#__PURE__*/ _jsx(TextField, {
        fullWidth: true,
        inputRef: ref,
        ...updatedProps,
        label: props.label || "",
        value: value
    });
})));
/* eslint-enable */ const BillingHistoryTable = ()=>{
    // ** State
    const [value, setValue] = (0,external_react_.useState)("");
    const [pageSize, setPageSize] = (0,external_react_.useState)(10);
    const [statusValue, setStatusValue] = (0,external_react_.useState)("");
    // ** Hooks
    const dispatch = (0,external_react_redux_.useDispatch)();
    const store = (0,external_react_redux_.useSelector)((state)=>state.invoice);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,invoice/* fetchData */.rQ)({
            q: value,
            status: statusValue
        }));
    }, [
        dispatch,
        statusValue,
        value
    ]);
    const handleFilter = (val)=>{
        setValue(val);
    };
    const handleStatusValue = (e)=>{
        setStatusValue(e.target.value);
    };
    const columns = [
        ...defaultColumns,
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
                                onClick: ()=>dispatch((0,invoice/* deleteInvoice */.Wu)(row.id)),
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Billing History"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    m: "0 !important"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        gap: 4,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: (link_default()),
                            variant: "contained",
                            href: "/apps/invoice/add",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:plus"
                            }),
                            children: "Create Invoice"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                gap: 4,
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    size: "small",
                                    value: value,
                                    placeholder: "Search Invoice",
                                    onChange: (e)=>handleFilter(e.target.value)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                    size: "small",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            id: "invoice-status-select",
                                            children: "Invoice Status"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                            sx: {
                                                pr: 4
                                            },
                                            value: statusValue,
                                            label: "Invoice Status",
                                            onChange: handleStatusValue,
                                            labelId: "invoice-status-select",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "",
                                                    children: "none"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "downloaded",
                                                    children: "Downloaded"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "draft",
                                                    children: "Draft"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "paid",
                                                    children: "Paid"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "past due",
                                                    children: "Past Due"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "partial payment",
                                                    children: "Partial Payment"
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
            /*#__PURE__*/ jsx_runtime_.jsx(x_data_grid_.DataGrid, {
                autoHeight: true,
                pagination: true,
                rows: store.data,
                columns: columns,
                disableSelectionOnClick: true,
                pageSize: Number(pageSize),
                rowsPerPageOptions: [
                    10,
                    25,
                    50
                ],
                onPageSizeChange: (newPageSize)=>setPageSize(newPageSize)
            })
        ]
    });
};
/* harmony default export */ const billing_BillingHistoryTable = (BillingHistoryTable);

;// CONCATENATED MODULE: ./src/views/pages/account-settings/TabBilling.js
// ** MUI Imports


// ** Demo Components




const TabBilling = ({ apiPricingPlanData  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(billing_CurrentPlanCard, {
                    data: apiPricingPlanData
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(billing_PaymentMethodCard, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(billing_BillingAddressCard, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(billing_BillingHistoryTable, {})
            })
        ]
    });
};
/* harmony default export */ const account_settings_TabBilling = (TabBilling);

// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/security/CreateApiKey.js
// ** MUI Imports












// ** Third Party Imports

const CreateApiKeyCard = ()=>{
    // ** Hooks
    const { control , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        defaultValues: {
            apiKeyName: ""
        }
    });
    const onSubmit = ()=>{
        return true;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Create an API key"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                sx: {
                    pb: "0 !important"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                        fullWidth: true,
                                        sx: {
                                            mb: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                children: "Choose The Api Key Type You Want To Create"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                label: "Choose The Api Key Type You Want To Create",
                                                defaultValue: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "full-control",
                                                        children: "Full Control"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "modify",
                                                        children: "Modify"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "read-execute",
                                                        children: "Read Execute"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "list-folder-contents",
                                                        children: "List Folder Contents"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "read-only",
                                                        children: "Read Only"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "read-write",
                                                        children: "Read Write"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                        fullWidth: true,
                                        sx: {
                                            mb: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                                name: "apiKeyName",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                        ...field,
                                                        label: "Name The Api Key",
                                                        placeholder: "Api Key 1",
                                                        error: Boolean(errors.apiKeyName)
                                                    })
                                            }),
                                            errors.apiKeyName && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: "Please enter API key name"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        type: "submit",
                                        variant: "contained",
                                        fullWidth: true,
                                        children: "Create Key"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            md: 6,
                            xs: 12,
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "avatar",
                                height: 220,
                                src: "/images/pages/account-settings-security-illustration.png"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const CreateApiKey = (CreateApiKeyCard);

// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(7730);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2951);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/security/ChangePasswordCard.js
// ** React Imports


// ** MUI Imports













// ** Icon Imports

// ** Third Party Imports




const ChangePasswordCard_defaultValues = {
    newPassword: "",
    currentPassword: "",
    confirmNewPassword: ""
};
const schema = external_yup_.object().shape({
    currentPassword: external_yup_.string().min(8).required(),
    newPassword: external_yup_.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character").required(),
    confirmNewPassword: external_yup_.string().required().oneOf([
        external_yup_.ref("newPassword")
    ], "Passwords must match")
});
const ChangePasswordCard = ()=>{
    // ** States
    const [values, setValues] = (0,external_react_.useState)({
        showNewPassword: false,
        showCurrentPassword: false,
        showConfirmNewPassword: false
    });
    // ** Hooks
    const { reset , control , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        defaultValues: ChangePasswordCard_defaultValues,
        resolver: (0,yup_.yupResolver)(schema)
    });
    const handleClickShowCurrentPassword = ()=>{
        setValues({
            ...values,
            showCurrentPassword: !values.showCurrentPassword
        });
    };
    const handleMouseDownCurrentPassword = (event)=>{
        event.preventDefault();
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
    const handleClickShowConfirmNewPassword = ()=>{
        setValues({
            ...values,
            showConfirmNewPassword: !values.showConfirmNewPassword
        });
    };
    const handleMouseDownConfirmNewPassword = (event)=>{
        event.preventDefault();
    };
    const onPasswordFormSubmit = ()=>{
        external_react_hot_toast_default().success("Password Changed Successfully");
        reset(ChangePasswordCard_defaultValues);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Change Password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmit(onPasswordFormSubmit),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            spacing: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            htmlFor: "input-current-password",
                                            error: Boolean(errors.currentPassword),
                                            children: "Current Password"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                            name: "currentPassword",
                                            control: control,
                                            rules: {
                                                required: true
                                            },
                                            render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                    value: value,
                                                    label: "Current Password",
                                                    onChange: onChange,
                                                    id: "input-current-password",
                                                    error: Boolean(errors.currentPassword),
                                                    type: values.showCurrentPassword ? "text" : "password",
                                                    endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                        position: "end",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                            edge: "end",
                                                            onClick: handleClickShowCurrentPassword,
                                                            onMouseDown: handleMouseDownCurrentPassword,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                icon: values.showCurrentPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                                                            })
                                                        })
                                                    })
                                                })
                                        }),
                                        errors.currentPassword && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                            sx: {
                                                color: "error.main"
                                            },
                                            children: errors.currentPassword.message
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 6,
                            sx: {
                                mt: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                htmlFor: "input-new-password",
                                                error: Boolean(errors.newPassword),
                                                children: "New Password"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                                name: "newPassword",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                        value: value,
                                                        label: "New Password",
                                                        onChange: onChange,
                                                        id: "input-new-password",
                                                        error: Boolean(errors.newPassword),
                                                        type: values.showNewPassword ? "text" : "password",
                                                        endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                            position: "end",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                edge: "end",
                                                                onClick: handleClickShowNewPassword,
                                                                onMouseDown: handleMouseDownNewPassword,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: values.showNewPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                                                                })
                                                            })
                                                        })
                                                    })
                                            }),
                                            errors.newPassword && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.newPassword.message
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
                                                htmlFor: "input-confirm-new-password",
                                                error: Boolean(errors.confirmNewPassword),
                                                children: "Confirm New Password"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                                name: "confirmNewPassword",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                        value: value,
                                                        label: "Confirm New Password",
                                                        onChange: onChange,
                                                        id: "input-confirm-new-password",
                                                        error: Boolean(errors.confirmNewPassword),
                                                        type: values.showConfirmNewPassword ? "text" : "password",
                                                        endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                            position: "end",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                edge: "end",
                                                                onClick: handleClickShowConfirmNewPassword,
                                                                onMouseDown: handleMouseDownConfirmNewPassword,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: values.showConfirmNewPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                                                                })
                                                            })
                                                        })
                                                    })
                                            }),
                                            errors.confirmNewPassword && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.confirmNewPassword.message
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 600,
                                                color: "text.secondary"
                                            },
                                            children: "Password Requirements:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            component: "ul",
                                            sx: {
                                                pl: 4,
                                                mb: 0,
                                                "& li": {
                                                    mb: 1,
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Minimum 8 characters long - the more, the better"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "At least one lowercase & one uppercase character"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "At least one number, symbol, or whitespace character"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "contained",
                                            type: "submit",
                                            sx: {
                                                mr: 3
                                            },
                                            children: "Save Changes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: ()=>reset(),
                                            children: "Reset"
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
/* harmony default export */ const security_ChangePasswordCard = (ChangePasswordCard);

;// CONCATENATED MODULE: ./src/views/pages/account-settings/security/TwoFactorAuthentication.js
// ** React Imports


// ** MUI Imports














// ** Icon Imports

// ** Third Party Imports

const TwoFactorAuthenticationCard = ()=>{
    // ** States
    const [open, setOpen] = (0,external_react_.useState)(false);
    // ** Hooks
    const { control , setValue , clearErrors , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        defaultValues: {
            phoneNumber: ""
        }
    });
    const toggle2FADialog = ()=>setOpen(!open);
    const on2FAFormSubmit = ()=>{
        toggle2FADialog();
        setValue("phoneNumber", "");
    };
    const close2FADialog = ()=>{
        toggle2FADialog();
        clearErrors("phoneNumber");
        setValue("phoneNumber", "");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                        title: "Two-steps verification"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    mb: 4,
                                    fontWeight: 600,
                                    color: "text.secondary"
                                },
                                children: "Two factor authentication is not enabled yet."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                sx: {
                                    mb: 6,
                                    width: "75%",
                                    color: "text.secondary"
                                },
                                children: [
                                    "Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        href: "/",
                                        component: "a",
                                        onClick: (e)=>e.preventDefault(),
                                        sx: {
                                            textDecoration: "none",
                                            color: "primary.main"
                                        },
                                        children: "Learn more."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                onClick: toggle2FADialog,
                                children: "Enable two-factor authentication"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullWidth: true,
                open: open,
                onClose: toggle2FADialog,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    sx: {
                        py: 18,
                        px: 18
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                mb: 12,
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h5",
                                sx: {
                                    fontSize: "1.625rem"
                                },
                                children: "Enable One Time Password"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: close2FADialog,
                            sx: {
                                position: "absolute",
                                right: "1rem",
                                top: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:close"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                color: "text.secondary",
                                fontWeight: 500
                            },
                            children: "Verify Your Mobile Number for SMS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                mt: 4,
                                mb: 6
                            },
                            children: "Enter your mobile phone number with country code and we will send you a verification code."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: handleSubmit(on2FAFormSubmit),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                    fullWidth: true,
                                    sx: {
                                        mb: 4
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            htmlFor: "opt-phone-number",
                                            error: Boolean(errors.phoneNumber),
                                            children: "Phone Number"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                            name: "phoneNumber",
                                            control: control,
                                            rules: {
                                                required: true
                                            },
                                            render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                    type: "number",
                                                    value: value,
                                                    onChange: onChange,
                                                    label: "Phone Number",
                                                    id: "opt-phone-number",
                                                    placeholder: "202 555 0111",
                                                    error: Boolean(errors.phoneNumber),
                                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                        position: "start",
                                                        children: "+1"
                                                    })
                                                })
                                        }),
                                        errors.phoneNumber && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                            sx: {
                                                color: "error.main"
                                            },
                                            children: "Please enter a valid phone number"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "contained",
                                            type: "submit",
                                            sx: {
                                                mr: 3.5
                                            },
                                            children: "Submit"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: close2FADialog,
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
/* harmony default export */ const TwoFactorAuthentication = (TwoFactorAuthenticationCard);

;// CONCATENATED MODULE: ./src/views/pages/account-settings/TabSecurity.js
// ** MUI Imports













// ** Icon Imports

// ** Custom Components Imports

// ** Demo Components



const apiKeyList = [
    {
        title: "Server Key 1",
        access: "Full Access",
        date: "28 Apr 2021, 18:20 GTM+4:10",
        key: "23eaf7f0-f4f7-495e-8b86-fad3261282ac"
    },
    {
        title: "Server Key 2",
        access: "Read Only",
        date: "12 Feb 2021, 10:30 GTM+2:30",
        key: "bb98e571-a2e2-4de8-90a9-2e231b5e99"
    },
    {
        title: "Server Key 3",
        access: "Full Access",
        date: "28 Dec 2021, 12:21 GTM+4:10",
        key: "2e915e59-3105-47f2-8838-6e46bf83b711"
    }
];
const recentDeviceData = [
    {
        location: "Switzerland",
        device: "HP Spectre 360",
        date: "10, July 2021 20:07",
        browserName: "Chrome on Windows",
        browserIcon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "span",
            sx: {
                mr: 4,
                "& svg": {
                    color: "info.main"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:microsoft-windows",
                fontSize: 20
            })
        })
    },
    {
        location: "Australia",
        device: "iPhone 12x",
        date: "13, July 2021 10:10",
        browserName: "Chrome on iPhone",
        browserIcon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "span",
            sx: {
                mr: 4,
                "& svg": {
                    color: "error.main"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:cellphone",
                fontSize: 20
            })
        })
    },
    {
        location: "Dubai",
        device: "Oneplus 9 Pro",
        date: "14, July 2021 15:15",
        browserName: "Chrome on Android",
        browserIcon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "span",
            sx: {
                mr: 4,
                "& svg": {
                    color: "success.main"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:android",
                fontSize: 20
            })
        })
    },
    {
        location: "India",
        device: "Apple iMac",
        date: "16, July 2021 16:17",
        browserName: "Chrome on MacOS",
        browserIcon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "span",
            sx: {
                mr: 4,
                "& svg": {
                    color: "secondary.main"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:apple",
                fontSize: 20
            })
        })
    },
    {
        location: "Switzerland",
        device: "HP Spectre 360",
        date: "20, July 2021 21:01",
        browserName: "Chrome on Windows",
        browserIcon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "span",
            sx: {
                mr: 4,
                "& svg": {
                    color: "info.main"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:microsoft-windows",
                fontSize: 20
            })
        })
    },
    {
        location: "Dubai",
        device: "Oneplus 9 Pro",
        date: "21, July 2021 12:22",
        browserName: "Chrome on Android",
        browserIcon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "span",
            sx: {
                mr: 4,
                "& svg": {
                    color: "success.main"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                icon: "mdi:android",
                fontSize: 20
            })
        })
    }
];
const TabSecurity = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(security_ChangePasswordCard, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TwoFactorAuthentication, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CreateApiKey, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "API Key List & Access"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        mb: 4,
                                        color: "text.secondary"
                                    },
                                    children: "An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing."
                                }),
                                apiKeyList.map((item)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            p: 4,
                                            borderRadius: 1,
                                            backgroundColor: "action.hover",
                                            "&:not(:last-child)": {
                                                mb: 4
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mb: 3,
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h6",
                                                        sx: {
                                                            mr: 4
                                                        },
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                                        size: "small",
                                                        skin: "light",
                                                        color: "primary",
                                                        label: item.access,
                                                        sx: {
                                                            textTransform: "uppercase"
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mb: 2,
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            mr: 3,
                                                            color: "text.secondary",
                                                            fontWeight: 600
                                                        },
                                                        children: item.key
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                        component: "span",
                                                        sx: {
                                                            display: "flex",
                                                            cursor: "pointer",
                                                            color: "text.secondary"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                            icon: "mdi:content-copy",
                                                            fontSize: "1rem"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: [
                                                    "Created on ",
                                                    item.date
                                                ]
                                            })
                                        ]
                                    }, item.key);
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
                            title: "Recent Devices"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    sx: {
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "Browser"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    sx: {
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "Device"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    sx: {
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "Location"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    sx: {
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "Recent Activities"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                                        children: recentDeviceData.map((row, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: [
                                                                row.browserIcon,
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    sx: {
                                                                        fontWeight: 600,
                                                                        whiteSpace: "nowrap",
                                                                        color: "text.secondary"
                                                                    },
                                                                    children: row.browserName
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                whiteSpace: "nowrap",
                                                                color: "text.secondary"
                                                            },
                                                            children: row.device
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                whiteSpace: "nowrap",
                                                                color: "text.secondary"
                                                            },
                                                            children: row.location
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                whiteSpace: "nowrap",
                                                                color: "text.secondary"
                                                            },
                                                            children: row.date
                                                        })
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
/* harmony default export */ const account_settings_TabSecurity = (TabSecurity);

// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./src/views/pages/account-settings/TabConnections.js
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
const TabConnections = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
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
                md: 6,
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
/* harmony default export */ const account_settings_TabConnections = (TabConnections);

;// CONCATENATED MODULE: ./src/views/pages/account-settings/TabNotifications.js
// ** MUI Imports
















const TabNotifications_data = [
    {
        app: true,
        email: true,
        browser: true,
        type: "New for you"
    },
    {
        app: true,
        email: true,
        browser: true,
        type: "Account activity"
    },
    {
        app: false,
        email: true,
        browser: true,
        type: "A new browser used to sign in"
    },
    {
        app: false,
        email: true,
        browser: false,
        type: "A new device is linked"
    }
];
const TabNotifications = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Recent Devices"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    sx: {
                        color: "text.secondary"
                    },
                    children: [
                        "We need permission from your browser to show notifications. ",
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "Request Permission"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                    size: "small",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        children: "Type"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: "✉️ Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: "\uD83D\uDDA5 Browser"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: "\uD83D\uDC69\uD83C\uDFFB‍\uD83D\uDCBB App"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                            children: TabNotifications_data.map((row)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    whiteSpace: "nowrap",
                                                    color: "text.secondary"
                                                },
                                                children: row.type
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: row.email
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: row.browser
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                defaultChecked: row.app
                                            })
                                        })
                                    ]
                                }, row.type))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 4,
                            fontWeight: 500
                        },
                        children: "When should we send you notifications?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    fullWidth: true,
                                    size: "small",
                                    defaultValue: "online",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "online",
                                            children: "Only when I'm online"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "anytime",
                                            children: "Anytime"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        sx: {
                                            mr: 3
                                        },
                                        children: "Save Changes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "outlined",
                                        color: "secondary",
                                        children: "Discard"
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
/* harmony default export */ const account_settings_TabNotifications = (TabNotifications);

;// CONCATENATED MODULE: ./src/views/pages/account-settings/AccountSettings.js
// ** React Imports


// ** Next Import

// ** MUI Imports










// ** Icon Imports

// ** Demo Tabs Imports





const TabList = (0,styles_.styled)((TabList_default()))(({ theme  })=>({
        "& .MuiTabs-indicator": {
            display: "none"
        },
        "& .Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: `${theme.palette.common.white} !important`
        },
        "& .MuiTab-root": {
            minWidth: 65,
            minHeight: 38,
            borderRadius: theme.shape.borderRadius,
            [theme.breakpoints.up("md")]: {
                minWidth: 130
            }
        }
    }));
const AccountSettings = ({ tab , apiPricingPlanData  })=>{
    // ** State
    const [activeTab, setActiveTab] = (0,external_react_.useState)(tab);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    // ** Hooks
    const router = (0,router_.useRouter)();
    const hideText = useMediaQuery_default()((theme)=>theme.breakpoints.down("md"));
    const handleChange = (event, value)=>{
        setIsLoading(true);
        router.push(`/pages/account-settings/${value.toLowerCase()}`).then(()=>setIsLoading(false));
    };
    (0,external_react_.useEffect)(()=>{
        if (tab && tab !== activeTab) {
            setActiveTab(tab);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tab
    ]);
    const tabContentList = {
        account: /*#__PURE__*/ jsx_runtime_.jsx(account_settings_TabAccount, {}),
        security: /*#__PURE__*/ jsx_runtime_.jsx(account_settings_TabSecurity, {}),
        connections: /*#__PURE__*/ jsx_runtime_.jsx(account_settings_TabConnections, {}),
        notifications: /*#__PURE__*/ jsx_runtime_.jsx(account_settings_TabNotifications, {}),
        billing: /*#__PURE__*/ jsx_runtime_.jsx(account_settings_TabBilling, {
            apiPricingPlanData: apiPricingPlanData
        })
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        container: true,
        spacing: 6,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            item: true,
            xs: 12,
            children: /*#__PURE__*/ jsx_runtime_.jsx((TabContext_default()), {
                value: activeTab,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 6,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabList, {
                                variant: "scrollable",
                                scrollButtons: "auto",
                                onChange: handleChange,
                                "aria-label": "customized tabs example",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        value: "account",
                                        label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                ...!hideText && {
                                                    "& svg": {
                                                        mr: 2
                                                    }
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:account-outline"
                                                }),
                                                !hideText && "Account"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        value: "security",
                                        label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                ...!hideText && {
                                                    "& svg": {
                                                        mr: 2
                                                    }
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:lock-open-outline"
                                                }),
                                                !hideText && "Security"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        value: "billing",
                                        label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                ...!hideText && {
                                                    "& svg": {
                                                        mr: 2
                                                    }
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:bookmark-outline"
                                                }),
                                                !hideText && "Billing"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        value: "notifications",
                                        label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                ...!hideText && {
                                                    "& svg": {
                                                        mr: 2
                                                    }
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:bell-outline"
                                                }),
                                                !hideText && "Notifications"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        value: "connections",
                                        label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                ...!hideText && {
                                                    "& svg": {
                                                        mr: 2
                                                    }
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:link-variant"
                                                }),
                                                !hideText && "Connections"
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
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
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                                sx: {
                                    p: 0
                                },
                                value: activeTab,
                                children: tabContentList[activeTab]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const account_settings_AccountSettings = (AccountSettings);

;// CONCATENATED MODULE: ./src/pages/pages/account-settings/[tab].js
// ** Third Party Imports


// ** Demo Components Imports

const AccountSettingsTab = ({ tab , apiPricingPlanData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(account_settings_AccountSettings, {
        tab: tab,
        apiPricingPlanData: apiPricingPlanData
    });
};
const getStaticPaths = ()=>{
    return {
        paths: [
            {
                params: {
                    tab: "account"
                }
            },
            {
                params: {
                    tab: "security"
                }
            },
            {
                params: {
                    tab: "billing"
                }
            },
            {
                params: {
                    tab: "notifications"
                }
            },
            {
                params: {
                    tab: "connections"
                }
            }
        ],
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const res = await external_axios_default().get("/pages/pricing");
    const data = res.data;
    return {
        props: {
            tab: params?.tab,
            apiPricingPlanData: data.pricingPlans
        }
    };
};
/* harmony default export */ const _tab_ = (AccountSettingsTab);


/***/ }),

/***/ 1538:
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

/***/ 5374:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Radio");

/***/ }),

/***/ 6563:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/RadioGroup");

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

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 7738:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-data-grid");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

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

/***/ 4384:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/format");

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

/***/ 4409:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 8922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,152,9550,1514,7294,2024,4560,9882,8730,2958], () => (__webpack_exec__(1022)));
module.exports = __webpack_exports__;

})();