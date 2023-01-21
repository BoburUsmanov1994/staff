"use strict";
(() => {
var exports = {};
exports.id = 3989;
exports.ids = [3989];
exports.modules = {

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getInitials)
/* harmony export */ });
// ** Returns initials from string
const getInitials = (string)=>string.split(/\s/).reduce((response, word)=>response += word.slice(0, 1), "");


/***/ }),

/***/ 5329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ list),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/x-data-grid"
var x_data_grid_ = __webpack_require__(7738);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
// EXTERNAL MODULE: ./src/@core/components/card-statistics/card-stats-horizontal/index.js
var card_stats_horizontal = __webpack_require__(427);
// EXTERNAL MODULE: ./src/@core/utils/get-initials.js
var get_initials = __webpack_require__(3552);
// EXTERNAL MODULE: ./src/store/apps/user/index.js
var user = __webpack_require__(3675);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: ./src/views/apps/user/list/TableHeader.js
// ** MUI Imports




// ** Icon Imports

const TableHeader = (props)=>{
    // ** Props
    const { handleFilter , toggle , value  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            p: 5,
            pb: 3,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                sx: {
                    mr: 4,
                    mb: 2
                },
                color: "secondary",
                variant: "outlined",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:export-variant",
                    fontSize: 20
                }),
                children: "Export"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        size: "small",
                        value: value,
                        sx: {
                            mr: 6,
                            mb: 2
                        },
                        placeholder: "Search User",
                        onChange: (e)=>handleFilter(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        sx: {
                            mb: 2
                        },
                        onClick: toggle,
                        variant: "contained",
                        children: "Add User"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const list_TableHeader = (TableHeader);

// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/FormHelperText"
var FormHelperText_ = __webpack_require__(6354);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2951);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
;// CONCATENATED MODULE: ./src/views/apps/user/list/AddUserDrawer.js
// ** React Imports


// ** MUI Imports












// ** Third Party Imports



// ** Icon Imports

// ** Store Imports

// ** Actions Imports

const showErrors = (field, valueLen, min)=>{
    if (valueLen === 0) {
        return `${field} field is required`;
    } else if (valueLen > 0 && valueLen < min) {
        return `${field} must be at least ${min} characters`;
    } else {
        return "";
    }
};
const Header = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(3, 4),
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default
    }));
const schema = external_yup_.object().shape({
    company: external_yup_.string().required(),
    country: external_yup_.string().required(),
    email: external_yup_.string().email().required(),
    contact: external_yup_.number().typeError("Contact Number field is required").min(10, (obj)=>showErrors("Contact Number", obj.value.length, obj.min)).required(),
    fullName: external_yup_.string().min(3, (obj)=>showErrors("First Name", obj.value.length, obj.min)).required(),
    username: external_yup_.string().min(3, (obj)=>showErrors("Username", obj.value.length, obj.min)).required()
});
const defaultValues = {
    email: "",
    company: "",
    country: "",
    fullName: "",
    username: "",
    contact: Number("")
};
const SidebarAddUser = (props)=>{
    // ** Props
    const { open , toggle  } = props;
    // ** State
    const [plan, setPlan] = (0,external_react_.useState)("basic");
    const [role, setRole] = (0,external_react_.useState)("subscriber");
    // ** Hooks
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { reset , control , setValue , handleSubmit , formState: { errors  }  } = (0,external_react_hook_form_.useForm)({
        defaultValues,
        mode: "onChange",
        resolver: (0,yup_.yupResolver)(schema)
    });
    const onSubmit = (data)=>{
        dispatch((0,user/* addUser */.cn)({
            ...data,
            role,
            currentPlan: plan
        }));
        toggle();
        reset();
    };
    const handleClose = ()=>{
        setPlan("basic");
        setRole("subscriber");
        setValue("contact", Number(""));
        toggle();
        reset();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
        open: open,
        anchor: "right",
        variant: "temporary",
        onClose: handleClose,
        ModalProps: {
            keepMounted: true
        },
        sx: {
            "& .MuiDrawer-paper": {
                width: {
                    xs: 300,
                    sm: 400
                }
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        children: "Add User"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        size: "small",
                        onClick: handleClose,
                        sx: {
                            color: "text.primary"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:close",
                            fontSize: 20
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    p: 5
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "fullName",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            value: value,
                                            label: "Full Name",
                                            onChange: onChange,
                                            placeholder: "John Doe",
                                            error: Boolean(errors.fullName)
                                        })
                                }),
                                errors.fullName && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                    sx: {
                                        color: "error.main"
                                    },
                                    children: errors.fullName.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "username",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            value: value,
                                            label: "Username",
                                            onChange: onChange,
                                            placeholder: "johndoe",
                                            error: Boolean(errors.username)
                                        })
                                }),
                                errors.username && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                    sx: {
                                        color: "error.main"
                                    },
                                    children: errors.username.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "email",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            type: "email",
                                            value: value,
                                            label: "Email",
                                            onChange: onChange,
                                            placeholder: "johndoe@email.com",
                                            error: Boolean(errors.email)
                                        })
                                }),
                                errors.email && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                    sx: {
                                        color: "error.main"
                                    },
                                    children: errors.email.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "company",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            value: value,
                                            label: "Company",
                                            onChange: onChange,
                                            placeholder: "Company PVT LTD",
                                            error: Boolean(errors.company)
                                        })
                                }),
                                errors.company && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                    sx: {
                                        color: "error.main"
                                    },
                                    children: errors.company.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "country",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            value: value,
                                            label: "Country",
                                            onChange: onChange,
                                            placeholder: "Australia",
                                            error: Boolean(errors.country)
                                        })
                                }),
                                errors.country && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                    sx: {
                                        color: "error.main"
                                    },
                                    children: errors.country.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_.Controller, {
                                    name: "contact",
                                    control: control,
                                    rules: {
                                        required: true
                                    },
                                    render: ({ field: { value , onChange  }  })=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                            type: "number",
                                            value: value,
                                            label: "Contact",
                                            onChange: onChange,
                                            placeholder: "(397) 294-5153",
                                            error: Boolean(errors.contact)
                                        })
                                }),
                                errors.contact && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                                    sx: {
                                        color: "error.main"
                                    },
                                    children: errors.contact.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    id: "role-select",
                                    children: "Select Role"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    fullWidth: true,
                                    value: role,
                                    id: "select-role",
                                    label: "Select Role",
                                    labelId: "role-select",
                                    onChange: (e)=>setRole(e.target.value),
                                    inputProps: {
                                        placeholder: "Select Role"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "admin",
                                            children: "Admin"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "author",
                                            children: "Author"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "editor",
                                            children: "Editor"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "maintainer",
                                            children: "Maintainer"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "subscriber",
                                            children: "Subscriber"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            fullWidth: true,
                            sx: {
                                mb: 6
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    id: "plan-select",
                                    children: "Select Plan"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    fullWidth: true,
                                    value: plan,
                                    id: "select-plan",
                                    label: "Select Plan",
                                    labelId: "plan-select",
                                    onChange: (e)=>setPlan(e.target.value),
                                    inputProps: {
                                        placeholder: "Select Plan"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "basic",
                                            children: "Basic"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "company",
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "enterprise",
                                            children: "Enterprise"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "team",
                                            children: "Team"
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
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    size: "large",
                                    type: "submit",
                                    variant: "contained",
                                    sx: {
                                        mr: 3
                                    },
                                    children: "Submit"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    size: "large",
                                    variant: "outlined",
                                    color: "secondary",
                                    onClick: handleClose,
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const AddUserDrawer = (SidebarAddUser);

;// CONCATENATED MODULE: ./src/pages/apps/user/list/index.js
// ** React Imports


// ** Next Imports

// ** MUI Imports















// ** Icon Imports

// ** Store Imports

// ** Custom Components Imports



// ** Utils Import

// ** Actions Imports

// ** Third Party Components

// ** Custom Table Components Imports


// ** Vars
const userRoleObj = {
    admin: {
        icon: "mdi:laptop",
        color: "error.main"
    },
    author: {
        icon: "mdi:cog-outline",
        color: "warning.main"
    },
    editor: {
        icon: "mdi:pencil-outline",
        color: "info.main"
    },
    maintainer: {
        icon: "mdi:chart-donut",
        color: "success.main"
    },
    subscriber: {
        icon: "mdi:account-outline",
        color: "primary.main"
    }
};
const userStatusObj = {
    active: "success",
    pending: "warning",
    inactive: "secondary"
};
const StyledLink = (0,styles_.styled)((link_default()))(({ theme  })=>({
        fontWeight: 600,
        fontSize: "1rem",
        cursor: "pointer",
        textDecoration: "none",
        color: theme.palette.text.secondary,
        "&:hover": {
            color: theme.palette.primary.main
        }
    }));
// ** renders client column
const renderClient = (row)=>{
    if (row.avatar.length) {
        return /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
            src: row.avatar,
            sx: {
                mr: 3,
                width: 34,
                height: 34
            }
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
            skin: "light",
            color: row.avatarColor || "primary",
            sx: {
                mr: 3,
                width: 34,
                height: 34,
                fontSize: "1rem"
            },
            children: (0,get_initials/* getInitials */.Q)(row.fullName ? row.fullName : "John Doe")
        });
    }
};
const RowOptions = ({ id  })=>{
    // ** Hooks
    const dispatch = (0,external_react_redux_.useDispatch)();
    // ** State
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    const rowOptionsOpen = Boolean(anchorEl);
    const handleRowOptionsClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleRowOptionsClose = ()=>{
        setAnchorEl(null);
    };
    const handleDelete = ()=>{
        dispatch((0,user/* deleteUser */.h8)(id));
        handleRowOptionsClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                size: "small",
                onClick: handleRowOptionsClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:dots-vertical"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                keepMounted: true,
                anchorEl: anchorEl,
                open: rowOptionsOpen,
                onClose: handleRowOptionsClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                PaperProps: {
                    style: {
                        minWidth: "8rem"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        component: (link_default()),
                        sx: {
                            "& svg": {
                                mr: 2
                            }
                        },
                        onClick: handleRowOptionsClose,
                        href: "/apps/user/view/overview/",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:eye-outline",
                                fontSize: 20
                            }),
                            "View"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: handleRowOptionsClose,
                        sx: {
                            "& svg": {
                                mr: 2
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:pencil-outline",
                                fontSize: 20
                            }),
                            "Edit"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: handleDelete,
                        sx: {
                            "& svg": {
                                mr: 2
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:delete-outline",
                                fontSize: 20
                            }),
                            "Delete"
                        ]
                    })
                ]
            })
        ]
    });
};
const columns = [
    {
        flex: 0.2,
        minWidth: 230,
        field: "fullName",
        headerName: "User",
        renderCell: ({ row  })=>{
            const { fullName , username  } = row;
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
                            alignItems: "flex-start",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                                href: "/apps/user/view/overview/",
                                children: fullName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                noWrap: true,
                                variant: "caption",
                                children: `@${username}`
                            })
                        ]
                    })
                ]
            });
        }
    },
    {
        flex: 0.2,
        minWidth: 250,
        field: "email",
        headerName: "Email",
        renderCell: ({ row  })=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                noWrap: true,
                variant: "body2",
                children: row.email
            });
        }
    },
    {
        flex: 0.15,
        field: "role",
        minWidth: 150,
        headerName: "Role",
        renderCell: ({ row  })=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    "& svg": {
                        mr: 3,
                        color: userRoleObj[row.role].color
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: userRoleObj[row.role].icon,
                        fontSize: 20
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        noWrap: true,
                        sx: {
                            color: "text.secondary",
                            textTransform: "capitalize"
                        },
                        children: row.role
                    })
                ]
            });
        }
    },
    {
        flex: 0.15,
        minWidth: 120,
        headerName: "Plan",
        field: "currentPlan",
        renderCell: ({ row  })=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle1",
                noWrap: true,
                sx: {
                    textTransform: "capitalize"
                },
                children: row.currentPlan
            });
        }
    },
    {
        flex: 0.1,
        minWidth: 110,
        field: "status",
        headerName: "Status",
        renderCell: ({ row  })=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                skin: "light",
                size: "small",
                label: row.status,
                color: userStatusObj[row.status],
                sx: {
                    textTransform: "capitalize",
                    "& .MuiChip-label": {
                        lineHeight: "18px"
                    }
                }
            });
        }
    },
    {
        flex: 0.1,
        minWidth: 90,
        sortable: false,
        field: "actions",
        headerName: "Actions",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx(RowOptions, {
                id: row.id
            })
    }
];
const UserList = ({ apiData  })=>{
    // ** State
    const [role, setRole] = (0,external_react_.useState)("");
    const [plan, setPlan] = (0,external_react_.useState)("");
    const [value, setValue] = (0,external_react_.useState)("");
    const [status, setStatus] = (0,external_react_.useState)("");
    const [pageSize, setPageSize] = (0,external_react_.useState)(10);
    const [addUserOpen, setAddUserOpen] = (0,external_react_.useState)(false);
    // ** Hooks
    const dispatch = (0,external_react_redux_.useDispatch)();
    const store = (0,external_react_redux_.useSelector)((state)=>state.user);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,user/* fetchData */.rQ)({
            role,
            status,
            q: value,
            currentPlan: plan
        }));
    }, [
        dispatch,
        plan,
        role,
        status,
        value
    ]);
    const handleFilter = (0,external_react_.useCallback)((val)=>{
        setValue(val);
    }, []);
    const handleRoleChange = (0,external_react_.useCallback)((e)=>{
        setRole(e.target.value);
    }, []);
    const handlePlanChange = (0,external_react_.useCallback)((e)=>{
        setPlan(e.target.value);
    }, []);
    const handleStatusChange = (0,external_react_.useCallback)((e)=>{
        setStatus(e.target.value);
    }, []);
    const toggleAddUserDrawer = ()=>setAddUserOpen(!addUserOpen);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: apiData && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    spacing: 6,
                    children: apiData.statsHorizontal.map((item, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 3,
                            sm: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(card_stats_horizontal/* default */.Z, {
                                ...item,
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: item.icon
                                })
                            })
                        }, index);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Search Filters",
                            sx: {
                                pb: 4,
                                "& .MuiCardHeader-title": {
                                    letterSpacing: ".15px"
                                }
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 4,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "role-select",
                                                    children: "Select Role"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    fullWidth: true,
                                                    value: role,
                                                    id: "select-role",
                                                    label: "Select Role",
                                                    labelId: "role-select",
                                                    onChange: handleRoleChange,
                                                    inputProps: {
                                                        placeholder: "Select Role"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "",
                                                            children: "Select Role"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "admin",
                                                            children: "Admin"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "author",
                                                            children: "Author"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "editor",
                                                            children: "Editor"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "maintainer",
                                                            children: "Maintainer"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "subscriber",
                                                            children: "Subscriber"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 4,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "plan-select",
                                                    children: "Select Plan"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    fullWidth: true,
                                                    value: plan,
                                                    id: "select-plan",
                                                    label: "Select Plan",
                                                    labelId: "plan-select",
                                                    onChange: handlePlanChange,
                                                    inputProps: {
                                                        placeholder: "Select Plan"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "",
                                                            children: "Select Plan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "basic",
                                                            children: "Basic"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "company",
                                                            children: "Company"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "enterprise",
                                                            children: "Enterprise"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "team",
                                                            children: "Team"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        sm: 4,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                    id: "status-select",
                                                    children: "Select Status"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                    fullWidth: true,
                                                    value: status,
                                                    id: "select-status",
                                                    label: "Select Status",
                                                    labelId: "status-select",
                                                    onChange: handleStatusChange,
                                                    inputProps: {
                                                        placeholder: "Select Role"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                            value: "",
                                                            children: "Select Role"
                                                        }),
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
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(list_TableHeader, {
                            value: value,
                            handleFilter: handleFilter,
                            toggle: toggleAddUserDrawer
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(x_data_grid_.DataGrid, {
                            autoHeight: true,
                            rows: store.data,
                            columns: columns,
                            checkboxSelection: true,
                            pageSize: pageSize,
                            disableSelectionOnClick: true,
                            rowsPerPageOptions: [
                                10,
                                25,
                                50
                            ],
                            sx: {
                                "& .MuiDataGrid-columnHeaders": {
                                    borderRadius: 0
                                }
                            },
                            onPageSizeChange: (newPageSize)=>setPageSize(newPageSize)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AddUserDrawer, {
                open: addUserOpen,
                toggle: toggleAddUserDrawer
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const res = await external_axios_default().get("/cards/statistics");
    const apiData = res.data;
    return {
        props: {
            apiData
        }
    };
};
/* harmony default export */ const list = (UserList);


/***/ }),

/***/ 2951:
/***/ ((module) => {

module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ 5863:
/***/ ((module) => {

module.exports = require("@iconify/react");

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

/***/ 9361:
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 6354:
/***/ ((module) => {

module.exports = require("@mui/material/FormHelperText");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

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

/***/ 7738:
/***/ ((module) => {

module.exports = require("@mui/x-data-grid");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

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

/***/ 4409:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9550,7294,2024,3675,427], () => (__webpack_exec__(5329)));
module.exports = __webpack_exports__;

})();