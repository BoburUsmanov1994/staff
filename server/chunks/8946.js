exports.id = 8946;
exports.ids = [8946];
exports.modules = {

/***/ 8946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ register_multi_steps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Step"
var Step_ = __webpack_require__(793);
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_);
// EXTERNAL MODULE: external "@mui/material/Stepper"
var Stepper_ = __webpack_require__(9189);
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_);
// EXTERNAL MODULE: external "@mui/material/StepLabel"
var StepLabel_ = __webpack_require__(5723);
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2951);
// EXTERNAL MODULE: external "@mui/material/FormHelperText"
var FormHelperText_ = __webpack_require__(6354);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);
// EXTERNAL MODULE: ./src/hooks/api/index.js + 8 modules
var api = __webpack_require__(618);
// EXTERNAL MODULE: ./src/constants/key.js
var key = __webpack_require__(4032);
// EXTERNAL MODULE: ./src/constants/url.js
var url = __webpack_require__(236);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
;// CONCATENATED MODULE: ./src/views/pages/auth/register-multi-steps/StepPersonalInfo.js
// ** MUI Components











// ** Icon Imports












const StepPersonalDetails = ({ handleNext , handlePrev  })=>{
    const router = (0,router_.useRouter)();
    const { data: companyData , isLoading: isLoadingCompanyData  } = (0,api/* useGetOneQuery */.xq)({
        id: (0,external_lodash_.get)(router.query, "companyId"),
        key: key/* KEYS.company */.t.company,
        url: url/* URLS.company */.n.company,
        params: {
            params: {
                populate: "*"
            },
            headers: {
                Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
            }
        },
        enabled: !!((0,external_lodash_.get)(router.query, "token") && (0,external_lodash_.get)(router.query, "companyId"))
    });
    const { data: companyCategory , isLoading: isLoadingCompanyCategory  } = (0,api/* useGetAllQuery */.i7)({
        key: key/* KEYS.companyCategory */.t.companyCategory,
        url: url/* URLS.companyCategory */.n.companyCategory,
        params: {
            params: {
                populate: "*"
            },
            headers: {
                Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
            }
        },
        enabled: !!(0,external_lodash_.get)(router.query, "token")
    });
    const { data: country , isLoading: isLoadingCountry  } = (0,api/* useGetAllQuery */.i7)({
        key: key/* KEYS.country */.t.country,
        url: url/* URLS.country */.n.country,
        params: {
            params: {
                populate: "*"
            },
            headers: {
                Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
            }
        },
        enabled: !!(0,external_lodash_.get)(router.query, "token")
    });
    const { mutate: createCompany , isLoading: isLoadingCompanyPost  } = (0,api/* usePostQuery */.n7)({
        url: url/* URLS.company */.n.company,
        hideSuccessToast: true
    });
    const defaultValues = {
        company_category: "",
        name: "",
        address: "",
        country: ""
    };
    const schema = external_yup_.object().shape({
        company_category: external_yup_.string().required(),
        name: external_yup_.string().required(),
        address: external_yup_.string().required(),
        country: external_yup_.string().required()
    });
    const { control , setError , handleSubmit , formState: { errors  } , reset  } = (0,external_react_hook_form_.useForm)({
        defaultValues,
        mode: "onBlur",
        resolver: (0,yup_.yupResolver)(schema)
    });
    const onSubmit = ({ company_category , country , ...data })=>{
        if ((0,external_lodash_.get)(companyData, "data")) {
            handleNext();
        } else {
            createCompany({
                url: url/* URLS.company */.n.company,
                attributes: {
                    data: {
                        ...data,
                        country: parseInt(country),
                        company_category: parseInt(company_category),
                        user: parseInt((0,external_lodash_.get)(router.query, "userId"))
                    }
                },
                config: {
                    headers: {
                        Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
                    }
                }
            }, {
                onSuccess: ({ data  })=>{
                    handleNext();
                    router.replace({
                        pathname: "/register",
                        query: {
                            token: (0,external_lodash_.get)(router.query, "token"),
                            userId: (0,external_lodash_.get)(router.query, "userId"),
                            companyId: (0,external_lodash_.get)(data, "data.id")
                        }
                    });
                },
                onError: (e)=>{
                    setError("company_category", {
                        type: "manual",
                        message: e.response?.data?.error?.message || "error"
                    });
                }
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if ((0,external_lodash_.get)(companyData, "data") && !isLoadingCompanyData) {
            reset({
                company_category: (0,external_lodash_.get)(companyData, "data.company_category.id"),
                name: (0,external_lodash_.get)(companyData, "data.name"),
                phone: (0,external_lodash_.get)(companyData, "data.phone"),
                country: (0,external_lodash_.get)(companyData, "data.country.id"),
                address: (0,external_lodash_.get)(companyData, "data.address")
            });
        }
    }, [
        companyData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            (isLoadingCompanyPost || isLoadingCompanyCategory || isLoadingCountry || isLoadingCompanyData) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "absolute",
                    zIndex: "9999",
                    top: "50%",
                    height: "100vh",
                    width: "100%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255,255,255,0.35)"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        children: "Personal Information"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Enter Your Personal Information"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                noValidate: true,
                autoComplete: "off",
                onSubmit: handleSubmit(onSubmit),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                fullWidth: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                        id: "validation-basic-select",
                                        error: Boolean(errors.company_category),
                                        htmlFor: "validation-basic-select",
                                        children: "Organization domain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                        name: "company_category",
                                        control: control,
                                        rules: {
                                            required: true
                                        },
                                        render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                                value: value,
                                                label: "Organization domain",
                                                onChange: onChange,
                                                error: Boolean(errors.company_category),
                                                labelId: "validation-basic-select",
                                                "aria-describedby": "validation-basic-select",
                                                children: (0,external_lodash_.get)(companyCategory, "data.results", []).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: (0,external_lodash_.get)(item, "id"),
                                                        children: (0,external_lodash_.get)(item, "name")
                                                    }, (0,external_lodash_.get)(item, "id")))
                                            })
                                    }),
                                    errors.company_category && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                        sx: {
                                            color: "error.main"
                                        },
                                        id: "validation-basic-select",
                                        children: "field is required"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                fullWidth: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                        name: "name",
                                        control: control,
                                        rules: {
                                            required: true
                                        },
                                        render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                label: "Organization name",
                                                value: value,
                                                onBlur: onBlur,
                                                onChange: onChange,
                                                error: Boolean(errors.name),
                                                placeholder: "Organization name"
                                            })
                                    }),
                                    errors.name && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                        sx: {
                                            color: "error.main"
                                        },
                                        children: errors.name.message
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                fullWidth: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "phone",
                                    control: control,
                                    render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            label: "Mobile",
                                            value: value,
                                            onBlur: onBlur,
                                            onChange: onChange,
                                            placeholder: "-- --- -- --",
                                            InputProps: {
                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                    position: "start",
                                                    children: "UZ (+998)"
                                                })
                                            }
                                        })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                fullWidth: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                        id: "validation-basic-select2",
                                        error: Boolean(errors.country),
                                        htmlFor: "validation-basic-select2",
                                        children: "Country"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                        name: "country",
                                        control: control,
                                        rules: {
                                            required: true
                                        },
                                        render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                                value: value,
                                                label: "Country",
                                                onChange: onChange,
                                                error: Boolean(errors.country),
                                                labelId: "validation-basic-select2",
                                                "aria-describedby": "validation-basic-select2",
                                                children: (0,external_lodash_.get)(country, "data.data", []).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: (0,external_lodash_.get)(item, "id"),
                                                        children: (0,external_lodash_.get)(item, "attributes.name")
                                                    }, (0,external_lodash_.get)(item, "id")))
                                            })
                                    }),
                                    errors.company_category && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                        sx: {
                                            color: "error.main"
                                        },
                                        id: "validation-basic-select2",
                                        children: "field is required"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                fullWidth: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                        name: "address",
                                        control: control,
                                        rules: {
                                            required: true
                                        },
                                        render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                label: "Address",
                                                value: value,
                                                onBlur: onBlur,
                                                onChange: onChange,
                                                error: Boolean(errors.address),
                                                placeholder: "Address"
                                            })
                                    }),
                                    errors.address && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                        sx: {
                                            color: "error.main"
                                        },
                                        children: errors.address.message
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        color: "secondary",
                                        variant: "contained",
                                        onClick: handlePrev,
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:chevron-left",
                                            fontSize: 20
                                        }),
                                        children: "Previous"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        type: "submit",
                                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:chevron-right",
                                            fontSize: 20
                                        }),
                                        children: "Next"
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
/* harmony default export */ const StepPersonalInfo = (StepPersonalDetails);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(7730);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);
;// CONCATENATED MODULE: ./src/views/pages/auth/register-multi-steps/StepAccountDetails.js
// ** React Imports


// ** MUI Components










// ** Icon Imports











const StepAccountDetails = ({ handleNext  })=>{
    const router = (0,router_.useRouter)();
    const [showPassword, setShowPassword] = (0,external_react_.useState)(false);
    const [showRepeatPassword, setShowRepeatPassword] = (0,external_react_.useState)(false);
    const { data: userData , isLoading: isLoadingUserData  } = (0,api/* useGetAllQuery */.i7)({
        key: key/* KEYS.getMe */.t.getMe,
        url: url/* URLS.getMe */.n.getMe,
        params: {
            params: {
                populate: "*"
            },
            headers: {
                Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
            }
        },
        enabled: !!(0,external_lodash_.get)(router.query, "token")
    });
    const { mutate: register , isLoading  } = (0,api/* usePostQuery */.n7)({
        url: url/* URLS.register */.n.register,
        hideSuccessToast: true
    });
    const defaultValues = {
        password: "",
        email: "",
        username: "",
        repeat_password: ""
    };
    const schema = external_yup_.object().shape({
        password: external_yup_.string().min(5).required(),
        repeat_password: external_yup_.string().min(5).required(),
        username: external_yup_.string().min(3).required(),
        email: external_yup_.string().email().required()
    });
    const { control , setError , handleSubmit , formState: { errors  } , reset  } = (0,external_react_hook_form_.useForm)({
        defaultValues,
        mode: "onBlur",
        resolver: (0,yup_.yupResolver)(schema)
    });
    const onSubmit = ({ password , repeat_password , ...data })=>{
        if ((0,external_lodash_.get)(userData, "data")) {
            handleNext();
        }
        if (!(0,external_lodash_.isEqual)(password, repeat_password)) {
            setError("repeat_password", {
                type: "manual",
                message: "Passwords didnt match"
            });
        } else {
            register({
                url: url/* URLS.register */.n.register,
                attributes: {
                    ...data,
                    password,
                    role: 3
                }
            }, {
                onSuccess: ({ data  })=>{
                    handleNext();
                    router.replace({
                        pathname: "/register",
                        query: {
                            token: (0,external_lodash_.get)(data, "jwt"),
                            userId: (0,external_lodash_.get)(data, "user.id")
                        }
                    });
                },
                onError: (e)=>{
                    setError("username", {
                        type: "manual",
                        message: e.response?.data?.error?.message || "error"
                    });
                }
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if ((0,external_lodash_.get)(userData, "data") && !isLoadingUserData) {
            reset({
                username: (0,external_lodash_.get)(userData, "data.username"),
                email: (0,external_lodash_.get)(userData, "data.email")
            });
        }
    }, [
        userData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            (isLoading || isLoadingUserData) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "absolute",
                    zIndex: "9999",
                    top: "50%",
                    height: "100vh",
                    width: "100%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255,255,255,0.35)"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        children: "Account Information"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Enter Your Account Details"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                noValidate: true,
                autoComplete: "off",
                onSubmit: handleSubmit(onSubmit),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                fullWidth: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                        name: "username",
                                        control: control,
                                        rules: {
                                            required: true
                                        },
                                        render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                label: "Username",
                                                value: value,
                                                onBlur: onBlur,
                                                onChange: onChange,
                                                error: Boolean(errors.username),
                                                placeholder: "Username"
                                            })
                                    }),
                                    errors.username && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                        sx: {
                                            color: "error.main"
                                        },
                                        children: errors.username.message
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                fullWidth: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                        name: "email",
                                        control: control,
                                        rules: {
                                            required: true
                                        },
                                        render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                label: "Email",
                                                value: value,
                                                onBlur: onBlur,
                                                onChange: onChange,
                                                error: Boolean(errors.email),
                                                placeholder: "Email"
                                            })
                                    }),
                                    errors.email && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                        sx: {
                                            color: "error.main"
                                        },
                                        children: errors.email.message
                                    })
                                ]
                            })
                        }),
                        !(0,external_lodash_.get)(userData, "data") && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                htmlFor: "auth-login-v2-password",
                                                error: Boolean(errors.password),
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                                name: "password",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                        value: value,
                                                        onBlur: onBlur,
                                                        label: "Password",
                                                        onChange: onChange,
                                                        id: "auth-login-v2-password",
                                                        error: Boolean(errors.password),
                                                        type: showPassword ? "text" : "password",
                                                        endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                            position: "end",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                edge: "end",
                                                                onMouseDown: (e)=>e.preventDefault(),
                                                                onClick: ()=>setShowPassword(!showPassword),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline",
                                                                    fontSize: 20
                                                                })
                                                            })
                                                        })
                                                    })
                                            }),
                                            errors.password && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                id: "",
                                                children: errors.password.message
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
                                                htmlFor: "auth-login-v3-password",
                                                error: Boolean(errors.repeat_password),
                                                children: "Repeat password"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                                name: "repeat_password",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field: { value , onChange , onBlur  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                                        value: value,
                                                        onBlur: onBlur,
                                                        label: "Repeat password",
                                                        onChange: onChange,
                                                        id: "uth-login-v3-password",
                                                        error: Boolean(errors.repeat_password),
                                                        type: showRepeatPassword ? "text" : "password",
                                                        endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                            position: "end",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                edge: "end",
                                                                onMouseDown: (e)=>e.preventDefault(),
                                                                onClick: ()=>setShowRepeatPassword(!showRepeatPassword),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: showRepeatPassword ? "mdi:eye-outline" : "mdi:eye-off-outline",
                                                                    fontSize: 20
                                                                })
                                                            })
                                                        })
                                                    })
                                            }),
                                            errors.repeat_password && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                id: "",
                                                children: errors.repeat_password.message
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        type: "button",
                                        disabled: true,
                                        variant: "contained",
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:chevron-left",
                                            fontSize: 20
                                        }),
                                        children: "Previous"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        type: "submit",
                                        variant: "contained",
                                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:chevron-right",
                                            fontSize: 20
                                        }),
                                        children: "Next"
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
/* harmony default export */ const register_multi_steps_StepAccountDetails = (StepAccountDetails);

// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "payment"
var external_payment_ = __webpack_require__(2863);
var external_payment_default = /*#__PURE__*/__webpack_require__.n(external_payment_);
// EXTERNAL MODULE: ./src/@core/components/custom-radio/icons/index.js
var icons = __webpack_require__(945);
// EXTERNAL MODULE: ./src/@core/utils/format.js
var format = __webpack_require__(9882);
// EXTERNAL MODULE: ./node_modules/react-credit-cards/es/styles-compiled.css
var styles_compiled = __webpack_require__(1538);
// EXTERNAL MODULE: ./src/hooks/useAuth.js
var useAuth = __webpack_require__(7288);
;// CONCATENATED MODULE: ./src/views/pages/auth/register-multi-steps/StepBillingDetails.js
// ** React Imports


// ** MUI Components








// ** Third Party Imports

// ** Icon Imports

// ** Custom Components Imports

// ** Util Import

// ** Styles Import








const data = [
    {
        value: "basic",
        title: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
            variant: "h5",
            children: "Basic"
        }),
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                my: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        textAlign: "center",
                        color: "text.secondary"
                    },
                    children: "A simple start for start ups & Students"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mt: 2,
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "sup",
                            sx: {
                                mt: 1.5,
                                color: "primary.main",
                                alignSelf: "flex-start"
                            },
                            children: "$"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "span",
                            sx: {
                                fontSize: "2rem",
                                color: "primary.main"
                            },
                            children: "0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "sub",
                            sx: {
                                mb: 1.5,
                                alignSelf: "flex-end",
                                color: "text.disabled"
                            },
                            children: "/month"
                        })
                    ]
                })
            ]
        })
    },
    {
        isSelected: true,
        value: "standard",
        title: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
            variant: "h5",
            children: "Standard"
        }),
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                my: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        textAlign: "center",
                        color: "text.secondary"
                    },
                    children: "For small to medium businesses"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mt: 2,
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "sup",
                            sx: {
                                mt: 1.5,
                                color: "primary.main",
                                alignSelf: "flex-start"
                            },
                            children: "$"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "span",
                            sx: {
                                fontSize: "2rem",
                                fontWeight: 500,
                                color: "primary.main"
                            },
                            children: "99"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "sub",
                            sx: {
                                mb: 1.5,
                                alignSelf: "flex-end",
                                color: "text.disabled"
                            },
                            children: "/month"
                        })
                    ]
                })
            ]
        })
    },
    {
        value: "enterprise",
        title: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
            variant: "h5",
            children: "Enterprise"
        }),
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                my: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        textAlign: "center",
                        color: "text.secondary"
                    },
                    children: "Solution for enterprise & organizations"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mt: 2,
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "sup",
                            sx: {
                                mt: 1.5,
                                color: "primary.main",
                                alignSelf: "flex-start"
                            },
                            children: "$"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "span",
                            sx: {
                                fontSize: "2rem",
                                color: "primary.main"
                            },
                            children: "499"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "sub",
                            sx: {
                                mb: 1.5,
                                alignSelf: "flex-end",
                                color: "text.disabled"
                            },
                            children: "/month"
                        })
                    ]
                })
            ]
        })
    }
];
const StepBillingDetails = ({ handlePrev  })=>{
    const router = (0,router_.useRouter)();
    const auth = (0,useAuth/* useAuth */.a)();
    const initialSelected = data.filter((item)=>item.isSelected)[data.filter((item)=>item.isSelected).length - 1].value;
    // ** State
    const [cvc, setCvc] = (0,external_react_.useState)("");
    const [name, setName] = (0,external_react_.useState)("");
    const [expiry, setExpiry] = (0,external_react_.useState)("");
    const [cardNumber, setCardNumber] = (0,external_react_.useState)("");
    const [selectedRadio, setSelectedRadio] = (0,external_react_.useState)(initialSelected);
    const [subscriptionTypes, setSubscriptionTypes] = (0,external_react_.useState)([]);
    const { data: subscription , isLoading: isLoadingSubscription  } = (0,api/* useGetAllQuery */.i7)({
        key: key/* KEYS.subscription */.t.subscription,
        url: url/* URLS.subscription */.n.subscription,
        params: {
            params: {
                populate: "*"
            },
            headers: {
                Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
            }
        },
        enabled: !!(0,external_lodash_.get)(router.query, "token")
    });
    const handleInputChange = ({ target  })=>{
        if (target.name === "cardNumber") {
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
    const handleRadioChange = (prop)=>{
        if (typeof prop === "string") {
            setSelectedRadio(prop);
        } else {
            setSelectedRadio(prop.target.value);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (subscription) {
            setSubscriptionTypes((0,external_lodash_.get)(subscription, "data.data", []).map((item)=>({
                    value: (0,external_lodash_.get)(item, "attributes.name"),
                    title: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        children: (0,external_lodash_.get)(item, "attributes.name")
                    }),
                    content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            my: "auto",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    textAlign: "center",
                                    color: "text.secondary"
                                },
                                children: "A simple start for start ups & Students"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mt: 2,
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "sup",
                                        sx: {
                                            mt: 1.5,
                                            color: "primary.main",
                                            alignSelf: "flex-start"
                                        },
                                        children: "$"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "span",
                                        sx: {
                                            fontSize: "2rem",
                                            color: "primary.main"
                                        },
                                        children: (0,external_lodash_.get)(item, "attributes.salary_by_month")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "sub",
                                        sx: {
                                            mb: 1.5,
                                            alignSelf: "flex-end",
                                            color: "text.disabled"
                                        },
                                        children: "/month"
                                    })
                                ]
                            })
                        ]
                    })
                })));
        }
    }, [
        subscription
    ]);
    const getSubscriptionId = ()=>{
        if (selectedRadio == "basic") {
            return 1;
        }
        if (selectedRadio == "standard") {
            return 2;
        }
        return 3;
    };
    const { mutate: updateRequest , isLoading: putLoading  } = (0,api/* usePutQuery */._E)({
        listKeyId: key/* KEYS.company */.t.company
    });
    const onSubmit = ()=>{
        updateRequest({
            url: `${url/* URLS.company */.n.company}/${(0,external_lodash_.get)(router.query, "companyId")}`,
            attributes: {
                data: {
                    subscribe_type: getSubscriptionId()
                }
            },
            config: {
                headers: {
                    Authorization: `Bearer ${(0,external_lodash_.get)(router.query, "token")}`
                }
            }
        }, {
            onSuccess: ()=>{
                router.replace({
                    pathname: "/"
                });
                auth.checkAuth((0,external_lodash_.get)(router.query, "token"));
            },
            onError: ()=>{}
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            (isLoadingSubscription || putLoading) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "absolute",
                    zIndex: "9999",
                    top: "50%",
                    height: "100vh",
                    width: "100%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255,255,255,0.35)"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        children: "Select Plan"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Select plan as per your requirement"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 5,
                children: [
                    subscriptionTypes.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(icons/* default */.Z, {
                            data: data[index],
                            selected: selectedRadio,
                            name: "custom-radios-plan",
                            gridProps: {
                                sm: 4,
                                xs: 12
                            },
                            handleChange: handleRadioChange
                        }, index)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            pt: (theme)=>`${theme.spacing(11.5)} !important`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h5",
                                children: "Payment Information"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: "Enter your card information"
                            })
                        ]
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
                                onChange: handleInputChange,
                                placeholder: "0000 0000 0000 0000"
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
                            label: "Name on Card",
                            placeholder: "John Doe",
                            onChange: (e)=>setName(e.target.value)
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
                            placeholder: "MM/YY",
                            onChange: handleInputChange,
                            inputProps: {
                                maxLength: "5"
                            }
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
                            onChange: handleInputChange,
                            InputProps: {
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                    position: "start",
                                    sx: {
                                        "& svg": {
                                            cursor: "pointer"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                        title: "Card Verification Value",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:help-circle-outline",
                                                fontSize: 20
                                            })
                                        })
                                    })
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    color: "secondary",
                                    variant: "contained",
                                    onClick: handlePrev,
                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:chevron-left",
                                        fontSize: 20
                                    }),
                                    children: "Previous"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    color: "success",
                                    variant: "contained",
                                    onClick: ()=>onSubmit(),
                                    children: "Submit"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const register_multi_steps_StepBillingDetails = (StepBillingDetails);

// EXTERNAL MODULE: ./src/views/forms/form-wizard/StepperCustomDot.js
var StepperCustomDot = __webpack_require__(3921);
// EXTERNAL MODULE: ./src/@core/styles/mui/stepper.js
var stepper = __webpack_require__(7966);
;// CONCATENATED MODULE: ./src/views/pages/auth/register-multi-steps/index.js
// ** React Imports


// ** MUI Imports




// ** Step Components



// ** Custom Component Import

// ** Styled Components



const steps = [
    {
        title: "Account",
        subtitle: "Account Details"
    },
    {
        title: "Personal",
        subtitle: "Enter Information"
    },
    {
        title: "Billing",
        subtitle: "Payment Details"
    }
];
const RegisterMultiSteps = ()=>{
    // ** States
    const [activeStep, setActiveStep] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    console.log(router.query);
    // Handle Stepper
    const handleNext = ()=>{
        setActiveStep(activeStep + 1);
    };
    const handlePrev = ()=>{
        if (activeStep !== 0) {
            setActiveStep(activeStep - 1);
        }
    };
    const getStepContent = (step)=>{
        switch(step){
            case 0:
                return /*#__PURE__*/ jsx_runtime_.jsx(register_multi_steps_StepAccountDetails, {
                    handleNext: handleNext
                });
            case 1:
                return /*#__PURE__*/ jsx_runtime_.jsx(StepPersonalInfo, {
                    handleNext: handleNext,
                    handlePrev: handlePrev
                });
            case 2:
                return /*#__PURE__*/ jsx_runtime_.jsx(register_multi_steps_StepBillingDetails, {
                    handlePrev: handlePrev
                });
            default:
                return null;
        }
    };
    const renderContent = ()=>{
        return getStepContent(activeStep);
    };
    (0,external_react_.useEffect)(()=>{
        if ((0,external_lodash_.get)(router.query, "token") && (0,external_lodash_.get)(router.query, "userId")) {
            if ((0,external_lodash_.get)(router.query, "companyId")) {
                setActiveStep(2);
            } else {
                setActiveStep(1);
            }
        }
    }, [
        router.query
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(stepper/* default */.Z, {
                sx: {
                    mb: 10
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Stepper_default()), {
                    activeStep: activeStep,
                    children: steps.map((step, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((Step_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((StepLabel_default()), {
                                StepIconComponent: StepperCustomDot/* default */.Z,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "step-label",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            className: "step-number",
                                            children: `0${index + 1}`
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    className: "step-title",
                                                    children: step.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    className: "step-subtitle",
                                                    children: step.subtitle
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, index);
                    })
                })
            }),
            renderContent()
        ]
    });
};
/* harmony default export */ const register_multi_steps = (RegisterMultiSteps);


/***/ }),

/***/ 1538:
/***/ (() => {



/***/ })

};
;