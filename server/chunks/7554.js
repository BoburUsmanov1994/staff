"use strict";
exports.id = 7554;
exports.ids = [7554];
exports.modules = {

/***/ 7554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Email)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: ./src/@core/hooks/useSettings.js
var useSettings = __webpack_require__(1514);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/Input"
var Input_ = __webpack_require__(1582);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/Backdrop"
var Backdrop_ = __webpack_require__(5074);
var Backdrop_default = /*#__PURE__*/__webpack_require__.n(Backdrop_);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(8330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "react-perfect-scrollbar"
var external_react_perfect_scrollbar_ = __webpack_require__(5162);
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_);
// EXTERNAL MODULE: ./src/@core/components/option-menu/index.js
var option_menu = __webpack_require__(4560);
// EXTERNAL MODULE: external "timers"
var external_timers_ = __webpack_require__(9512);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: ./src/@core/components/sidebar/index.js
var sidebar = __webpack_require__(1283);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var chip = __webpack_require__(7071);
;// CONCATENATED MODULE: ./src/views/apps/email/MailDetails.js
// ** React Imports


// ** MUI Imports









// ** Icon Imports

// ** Third Party Imports

// ** Hooks

// ** Custom Components Imports



const HiddenReplyBack = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        height: 11,
        width: "90%",
        opacity: 0.5,
        borderWidth: 1,
        borderBottom: 0,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderStyle: "solid",
        borderColor: theme.palette.divider,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper
    }));
const HiddenReplyFront = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        height: 12,
        width: "95%",
        opacity: 0.7,
        borderWidth: 1,
        borderBottom: 0,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderStyle: "solid",
        borderColor: theme.palette.divider,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper
    }));
const MailDetails = (props)=>{
    // ** Props
    const { mail , hidden , folders , dispatch , direction , updateMail , foldersObj , labelColors , routeParams , paginateMail , handleStarMail , mailDetailsOpen , handleLabelUpdate , handleFolderUpdate , setMailDetailsOpen  } = props;
    // ** State
    const [showReplies, setShowReplies] = (0,external_react_.useState)(false);
    // ** Hook
    const { settings  } = (0,useSettings/* useSettings */.r)();
    const handleMoveToTrash = ()=>{
        dispatch(updateMail({
            emailIds: [
                mail.id
            ],
            dataToUpdate: {
                folder: "trash"
            }
        }));
        setMailDetailsOpen(false);
    };
    const handleReadMail = ()=>{
        dispatch(updateMail({
            emailIds: [
                mail.id
            ],
            dataToUpdate: {
                isRead: false
            }
        }));
        setMailDetailsOpen(false);
    };
    const handleLabelsMenu = ()=>{
        const array = [];
        Object.entries(labelColors).map(([key, value])=>{
            array.push({
                text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        textTransform: "capitalize"
                    },
                    children: key
                }),
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        mr: 2,
                        color: `${value}.main`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:circle",
                        fontSize: "0.75rem"
                    })
                }),
                menuItemProps: {
                    onClick: ()=>{
                        handleLabelUpdate([
                            mail.id
                        ], key);
                        setMailDetailsOpen(false);
                    }
                }
            });
        });
        return array;
    };
    const handleFoldersMenu = ()=>{
        const array = [];
        if (routeParams && routeParams.folder && !routeParams.label && foldersObj[routeParams.folder]) {
            foldersObj[routeParams.folder].map((folder)=>{
                array.length = 0;
                array.push({
                    icon: folder.icon,
                    text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: folder.name
                    }),
                    menuItemProps: {
                        onClick: ()=>{
                            handleFolderUpdate(mail.id, folder.name);
                            setMailDetailsOpen(false);
                        }
                    }
                });
            });
        } else if (routeParams && routeParams.label) {
            folders.map((folder)=>{
                array.length = 0;
                array.push({
                    icon: folder.icon,
                    text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: folder.name
                    }),
                    menuItemProps: {
                        onClick: ()=>{
                            handleFolderUpdate(mail.id, folder.name);
                            setMailDetailsOpen(false);
                        }
                    }
                });
            });
        } else {
            foldersObj["inbox"].map((folder)=>{
                array.length = 0;
                array.push({
                    icon: folder.icon,
                    text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: folder.name
                    }),
                    menuItemProps: {
                        onClick: ()=>{
                            handleFolderUpdate(mail.id, folder.name);
                            setMailDetailsOpen(false);
                        }
                    }
                });
            });
        }
        return array;
    };
    const prevMailIcon = direction === "rtl" ? "mdi:chevron-right" : "mdi:chevron-left";
    const nextMailIcon = direction === "rtl" ? "mdi:chevron-left" : "mdi:chevron-right";
    const goBackIcon = prevMailIcon;
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: "100%",
                    overflowY: "auto",
                    overflowX: "hidden"
                },
                children: children
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx((external_react_perfect_scrollbar_default()), {
                options: {
                    wheelPropagation: false
                },
                children: children
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(sidebar/* default */.Z, {
        hideBackdrop: true,
        direction: "right",
        show: mailDetailsOpen,
        sx: {
            zIndex: 3,
            width: "100%",
            overflow: "hidden"
        },
        onClose: ()=>{
            setMailDetailsOpen(false);
            setShowReplies(false);
        },
        children: mail ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        px: 2.6,
                        py: [
                            2.25,
                            3
                        ],
                        backgroundColor: "background.paper",
                        borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            alignItems: [
                                "flex-start",
                                "center"
                            ],
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        sx: {
                                            mr: 3,
                                            "& svg": {
                                                color: "text.primary"
                                            }
                                        },
                                        onClick: ()=>{
                                            setMailDetailsOpen(false);
                                            setShowReplies(false);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: goBackIcon,
                                            fontSize: "1.5rem"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            flexDirection: [
                                                "column",
                                                "row"
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                noWrap: true,
                                                sx: {
                                                    mr: 5
                                                },
                                                children: mail.subject
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: mail.labels && mail.labels.length ? mail.labels.map((label)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx(chip/* default */.Z, {
                                                        size: "small",
                                                        skin: "light",
                                                        label: label,
                                                        color: labelColors[label],
                                                        sx: {
                                                            height: 20,
                                                            textTransform: "capitalize",
                                                            "&:not(:last-of-type)": {
                                                                mr: 2
                                                            },
                                                            "& .MuiChip-label": {
                                                                fontWeight: 500
                                                            }
                                                        }
                                                    }, label);
                                                }) : null
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        disabled: !mail.hasPreviousMail,
                                        sx: {
                                            color: mail.hasPreviousMail ? "text.primary" : "text.secondary"
                                        },
                                        onClick: ()=>dispatch(paginateMail({
                                                dir: "previous",
                                                emailId: mail.id
                                            })),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: prevMailIcon
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        disabled: !mail.hasNextMail,
                                        sx: {
                                            color: mail.hasNextMail ? "text.primary" : "text.secondary"
                                        },
                                        onClick: ()=>dispatch(paginateMail({
                                                dir: "next",
                                                emailId: mail.id
                                            })),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: nextMailIcon
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        backgroundColor: "background.paper",
                        p: (theme)=>theme.spacing(3, 2, 3, 3),
                        borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
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
                                    routeParams && routeParams.folder !== "trash" ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        onClick: handleMoveToTrash,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:delete-outline"
                                        })
                                    }) : null,
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        onClick: handleReadMail,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:email-outline",
                                            fontSize: "1.375rem"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                        leftAlignMenu: true,
                                        options: handleFoldersMenu(),
                                        iconButtonProps: {
                                            size: "small"
                                        },
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:folder-outline",
                                            fontSize: "1.375rem"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                        leftAlignMenu: true,
                                        options: handleLabelsMenu(),
                                        iconButtonProps: {
                                            size: "small"
                                        },
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:label-outline",
                                            fontSize: "1.375rem"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        onClick: (e)=>handleStarMail(e, mail.id, !mail.isStarred),
                                        sx: {
                                            mr: 1,
                                            ...mail.isStarred ? {
                                                color: "warning.main"
                                            } : {}
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:star-outline"
                                        })
                                    }),
                                    mail.replies.length ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        onClick: ()=>showReplies ? setShowReplies(false) : setShowReplies(true),
                                        children: showReplies ? /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:arrow-collapse-vertical",
                                            fontSize: "1.375rem"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:arrow-expand-vertical",
                                            fontSize: "1.375rem"
                                        })
                                    }) : null,
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "small",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:dots-vertical"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        height: "calc(100% - 7.75rem)",
                        backgroundColor: "action.hover"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollWrapper, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                py: 4,
                                px: 5,
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                justifyContent: "center"
                            },
                            children: [
                                mail.replies.length && !showReplies ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    onClick: ()=>setShowReplies(true),
                                    sx: {
                                        mt: 1,
                                        mb: 5,
                                        color: "text.secondary",
                                        cursor: "pointer"
                                    },
                                    children: [
                                        mail.replies.length,
                                        " Earlier Messages"
                                    ]
                                }) : null,
                                showReplies ? mail.replies.map((reply, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 4,
                                            boxShadow: 6,
                                            width: "100%",
                                            borderRadius: 1,
                                            backgroundColor: "background.paper",
                                            border: (theme)=>`1px solid ${theme.palette.divider}`
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    p: 5
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                                                                alignItems: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                    alt: reply.from.name,
                                                                    src: reply.from.avatar,
                                                                    sx: {
                                                                        width: "2.375rem",
                                                                        height: "2.375rem",
                                                                        mr: 3
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                                    sx: {
                                                                        display: "flex",
                                                                        flexDirection: "column"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            sx: {
                                                                                color: "text.secondary"
                                                                            },
                                                                            children: reply.from.name
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            variant: "body2",
                                                                            sx: {
                                                                                color: "text.disabled"
                                                                            },
                                                                            children: reply.from.email
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
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                    variant: "body2",
                                                                    sx: {
                                                                        mr: 1.75,
                                                                        color: "text.disabled"
                                                                    },
                                                                    children: [
                                                                        new Date(reply.time).toDateString(),
                                                                        " ",
                                                                        new Date(reply.time).toLocaleTimeString("en-US", {
                                                                            hour: "2-digit",
                                                                            minute: "2-digit",
                                                                            hour12: true
                                                                        })
                                                                    ]
                                                                }),
                                                                mail.attachments.length ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                    size: "small",
                                                                    sx: {
                                                                        mr: 0.5
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                        icon: "mdi:attachment",
                                                                        fontSize: 20
                                                                    })
                                                                }) : null,
                                                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                    size: "small",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                        icon: "mdi:dots-vertical",
                                                                        fontSize: 20
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                sx: {
                                                    m: "0 !important"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    px: 5,
                                                    py: 0
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    dangerouslySetInnerHTML: {
                                                        __html: reply.message
                                                    }
                                                })
                                            }),
                                            reply.attachments.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                        sx: {
                                                            m: "0 !important"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            p: 5
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                variant: "body2",
                                                                children: "Attachments"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                                                children: reply.attachments.map((item)=>{
                                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                                        disableGutters: true,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: item.thumbnail,
                                                                                    alt: item.fileName,
                                                                                    width: "24",
                                                                                    height: "24"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                                children: item.fileName
                                                                            })
                                                                        ]
                                                                    }, item.fileName);
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : null
                                        ]
                                    }, index);
                                }) : null,
                                mail.replies.length && !showReplies ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(HiddenReplyBack, {
                                            sx: {
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>setShowReplies(true)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HiddenReplyFront, {
                                            sx: {
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>setShowReplies(true)
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 4,
                                        width: "100%",
                                        borderRadius: 1,
                                        overflow: "visible",
                                        position: "relative",
                                        backgroundColor: "background.paper",
                                        boxShadow: settings.skin === "bordered" ? 0 : 6,
                                        border: (theme)=>`1px solid ${theme.palette.divider}`
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                p: 5
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    flexWrap: "wrap"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                                alt: mail.from.name,
                                                                src: mail.from.avatar,
                                                                sx: {
                                                                    width: "2.375rem",
                                                                    height: "2.375rem",
                                                                    mr: 3
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexDirection: "column"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            color: "text.secondary"
                                                                        },
                                                                        children: mail.from.name
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        variant: "body2",
                                                                        sx: {
                                                                            color: "text.disabled"
                                                                        },
                                                                        children: mail.from.email
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
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                variant: "body2",
                                                                sx: {
                                                                    mr: 1.75,
                                                                    color: "text.disabled"
                                                                },
                                                                children: [
                                                                    new Date(mail.time).toDateString(),
                                                                    " ",
                                                                    new Date(mail.time).toLocaleTimeString("en-US", {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                        hour12: true
                                                                    })
                                                                ]
                                                            }),
                                                            mail.attachments.length ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                size: "small",
                                                                sx: {
                                                                    mr: 0.5,
                                                                    color: "action.active"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: "mdi:attachment",
                                                                    fontSize: 20
                                                                })
                                                            }) : null,
                                                            /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                                                iconButtonProps: {
                                                                    size: "small"
                                                                },
                                                                iconProps: {
                                                                    fontSize: "1.375rem"
                                                                },
                                                                options: [
                                                                    {
                                                                        text: "Reply",
                                                                        menuItemProps: {
                                                                            sx: {
                                                                                "& svg": {
                                                                                    mr: 2
                                                                                }
                                                                            }
                                                                        },
                                                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                            icon: "mdi:share-outline",
                                                                            fontSize: 20
                                                                        })
                                                                    },
                                                                    {
                                                                        text: "Forward",
                                                                        menuItemProps: {
                                                                            sx: {
                                                                                "& svg": {
                                                                                    mr: 2
                                                                                }
                                                                            }
                                                                        },
                                                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                            icon: "mdi:reply-outline",
                                                                            fontSize: 20
                                                                        })
                                                                    }
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                            sx: {
                                                m: "0 !important"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                px: 5,
                                                py: 0
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                dangerouslySetInnerHTML: {
                                                    __html: mail.message
                                                }
                                            })
                                        }),
                                        mail.attachments.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                    sx: {
                                                        m: "0 !important"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        p: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body2",
                                                            children: "Attachments"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                                            children: mail.attachments.map((item)=>{
                                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                                    disableGutters: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: item.thumbnail,
                                                                                alt: item.fileName,
                                                                                width: "24",
                                                                                height: "24"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            children: item.fileName
                                                                        })
                                                                    ]
                                                                }, item.fileName);
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        p: 5,
                                        width: "100%",
                                        borderRadius: 1,
                                        border: "1px solid",
                                        borderColor: "divider",
                                        backgroundColor: "background.paper",
                                        boxShadow: settings.skin === "bordered" ? 0 : 6
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: [
                                            "Click here to",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                component: "span",
                                                sx: {
                                                    cursor: "pointer",
                                                    color: "primary.main",
                                                    fontWeight: "inherit"
                                                },
                                                children: "Reply"
                                            }),
                                            " ",
                                            "or",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                component: "span",
                                                sx: {
                                                    cursor: "pointer",
                                                    color: "primary.main",
                                                    fontWeight: "inherit"
                                                },
                                                children: "Forward"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        }) : null
    });
};
/* harmony default export */ const email_MailDetails = (MailDetails);

;// CONCATENATED MODULE: ./src/views/apps/email/MailLog.js
// ** React Imports


// ** MUI Imports














// ** Icon Imports

// ** Third Party Imports

// ** Custom Components Imports

// ** Email App Component Imports


const MailItem = (0,styles_.styled)((ListItem_default()))(({ theme  })=>({
        cursor: "pointer",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        justifyContent: "space-between",
        transition: "border 0.15s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        "&:not(:first-child)": {
            borderTop: `1px solid ${theme.palette.divider}`
        },
        "&:hover": {
            zIndex: 2,
            boxShadow: theme.shadows[3],
            transform: "translateY(-2px)",
            "& .mail-actions": {
                display: "flex"
            },
            "& .mail-info-right": {
                display: "none"
            },
            "& + .MuiListItem-root": {
                borderColor: "transparent"
            }
        },
        [theme.breakpoints.up("xs")]: {
            paddingLeft: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5)
        },
        [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5)
        }
    }));
const ScrollWrapper = ({ children , hidden  })=>{
    if (hidden) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden"
            },
            children: children
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_perfect_scrollbar_default()), {
            options: {
                wheelPropagation: false,
                suppressScrollX: true
            },
            children: children
        });
    }
};
const MailLog = (props)=>{
    // ** Props
    const { store , query , hidden , lgAbove , dispatch , setQuery , direction , updateMail , routeParams , labelColors , paginateMail , getCurrentMail , mailDetailsOpen , updateMailLabel , handleSelectMail , setMailDetailsOpen , handleSelectAllMail , handleLeftSidebarToggle  } = props;
    // ** State
    const [refresh, setRefresh] = (0,external_react_.useState)(false);
    // ** Vars
    const folders = [
        {
            name: "draft",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:pencil-outline",
                    fontSize: 20
                })
            })
        },
        {
            name: "spam",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:alert-octagon-outline",
                    fontSize: 20
                })
            })
        },
        {
            name: "trash",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:delete-outline",
                    fontSize: 20
                })
            })
        },
        {
            name: "inbox",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:email-outline",
                    fontSize: 20
                })
            })
        }
    ];
    const foldersConfig = {
        draft: {
            name: "draft",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:pencil-outline",
                    fontSize: 20
                })
            })
        },
        spam: {
            name: "spam",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:alert-octagon-outline",
                    fontSize: 20
                })
            })
        },
        trash: {
            name: "trash",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:delete-outline",
                    fontSize: 20
                })
            })
        },
        inbox: {
            name: "inbox",
            icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 2,
                    display: "flex"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:email-outline",
                    fontSize: 20
                })
            })
        }
    };
    const foldersObj = {
        inbox: [
            foldersConfig.spam,
            foldersConfig.trash
        ],
        sent: [
            foldersConfig.trash
        ],
        draft: [
            foldersConfig.trash
        ],
        spam: [
            foldersConfig.inbox,
            foldersConfig.trash
        ],
        trash: [
            foldersConfig.inbox,
            foldersConfig.spam
        ]
    };
    const handleMoveToTrash = ()=>{
        dispatch(updateMail({
            emailIds: store.selectedMails,
            dataToUpdate: {
                folder: "trash"
            }
        }));
        dispatch(handleSelectAllMail(false));
    };
    const handleStarMail = (e, id, value)=>{
        e.stopPropagation();
        dispatch(updateMail({
            emailIds: [
                id
            ],
            dataToUpdate: {
                isStarred: value
            }
        }));
    };
    const handleReadMail = (id, value)=>{
        const arr = Array.isArray(id) ? [
            ...id
        ] : [
            id
        ];
        dispatch(updateMail({
            emailIds: arr,
            dataToUpdate: {
                isRead: value
            }
        }));
        dispatch(handleSelectAllMail(false));
    };
    const handleLabelUpdate = (id, label)=>{
        const arr = Array.isArray(id) ? [
            ...id
        ] : [
            id
        ];
        dispatch(updateMailLabel({
            emailIds: arr,
            label
        }));
    };
    const handleFolderUpdate = (id, folder)=>{
        const arr = Array.isArray(id) ? [
            ...id
        ] : [
            id
        ];
        dispatch(updateMail({
            emailIds: arr,
            dataToUpdate: {
                folder
            }
        }));
    };
    const handleRefreshMailsClick = ()=>{
        setRefresh(true);
        (0,external_timers_.setTimeout)(()=>setRefresh(false), 1000);
    };
    const handleLabelsMenu = ()=>{
        const array = [];
        Object.entries(labelColors).map(([key, value])=>{
            array.push({
                text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                        textTransform: "capitalize"
                    },
                    children: key
                }),
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    component: "span",
                    sx: {
                        mr: 2,
                        color: `${value}.main`
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "mdi:circle",
                        fontSize: "0.75rem"
                    })
                }),
                menuItemProps: {
                    onClick: ()=>{
                        handleLabelUpdate(store.selectedMails, key);
                        dispatch(handleSelectAllMail(false));
                    }
                }
            });
        });
        return array;
    };
    const handleFoldersMenu = ()=>{
        const array = [];
        if (routeParams && routeParams.folder && !routeParams.label && foldersObj[routeParams.folder]) {
            foldersObj[routeParams.folder].map((folder)=>{
                array.length = 0;
                array.push({
                    icon: folder.icon,
                    text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: folder.name
                    }),
                    menuItemProps: {
                        onClick: ()=>{
                            handleFolderUpdate(store.selectedMails, folder.name);
                            dispatch(handleSelectAllMail(false));
                        }
                    }
                });
            });
        } else if (routeParams && routeParams.label) {
            folders.map((folder)=>{
                array.length = 0;
                array.push({
                    icon: folder.icon,
                    text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: folder.name
                    }),
                    menuItemProps: {
                        onClick: ()=>{
                            handleFolderUpdate(store.selectedMails, folder.name);
                            dispatch(handleSelectAllMail(false));
                        }
                    }
                });
            });
        } else {
            foldersObj["inbox"].map((folder)=>{
                array.length = 0;
                array.push({
                    icon: folder.icon,
                    text: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: folder.name
                    }),
                    menuItemProps: {
                        onClick: ()=>{
                            handleFolderUpdate(store.selectedMails, folder.name);
                            dispatch(handleSelectAllMail(false));
                        }
                    }
                });
            });
        }
        return array;
    };
    const renderMailLabels = (arr)=>{
        return arr.map((label, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "span",
                sx: {
                    mr: 3.5,
                    color: `${labelColors[label]}.main`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:circle",
                    fontSize: "0.625rem"
                })
            }, index);
        });
    };
    const mailDetailsProps = {
        hidden,
        folders,
        dispatch,
        direction,
        foldersObj,
        updateMail,
        routeParams,
        labelColors,
        paginateMail,
        handleStarMail,
        mailDetailsOpen,
        handleLabelUpdate,
        handleFolderUpdate,
        setMailDetailsOpen,
        mail: store && store.currentMail ? store.currentMail : null
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            overflow: "hidden",
            position: "relative",
            "& .ps__rail-y": {
                zIndex: 5
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    height: "100%",
                    backgroundColor: "background.paper"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            px: 5,
                            py: 3
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                width: "100%"
                            },
                            children: [
                                lgAbove ? null : /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: handleLeftSidebarToggle,
                                    sx: {
                                        mr: 1,
                                        ml: -2
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:menu",
                                        fontSize: 20
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                                    value: query,
                                    placeholder: "Search mail",
                                    onChange: (e)=>setQuery(e.target.value),
                                    sx: {
                                        width: "100%",
                                        "&:before, &:after": {
                                            display: "none"
                                        }
                                    },
                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                        position: "start",
                                        sx: {
                                            color: "text.disabled"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:magnify",
                                            fontSize: "1.375rem"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            m: "0 !important"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            py: 1.75,
                            px: {
                                xs: 2.5,
                                sm: 5
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
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
                                        store && store.mails && store.selectedMails ? /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                            onChange: (e)=>dispatch(handleSelectAllMail(e.target.checked)),
                                            checked: store.mails.length && store.mails.length === store.selectedMails.length || false,
                                            sx: {
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: "1.375rem"
                                                },
                                                "&:not(.Mui-checked) .MuiSvgIcon-root": {
                                                    color: "text.disabled"
                                                }
                                            },
                                            indeterminate: !!(store.mails.length && store.selectedMails.length && store.mails.length !== store.selectedMails.length)
                                        }) : null,
                                        store && store.selectedMails.length && store.mails && store.mails.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                            children: [
                                                routeParams && routeParams.folder !== "trash" ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    onClick: handleMoveToTrash,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:delete-outline"
                                                    })
                                                }) : null,
                                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    onClick: ()=>handleReadMail(store.selectedMails, false),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:email-outline"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                                    leftAlignMenu: true,
                                                    options: handleFoldersMenu(),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:folder-outline"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                                    leftAlignMenu: true,
                                                    options: handleLabelsMenu(),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:label-outline"
                                                    })
                                                })
                                            ]
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            size: "small",
                                            onClick: handleRefreshMailsClick,
                                            sx: {
                                                "& svg": {
                                                    color: "text.disabled"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:reload",
                                                fontSize: "1.375rem"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            size: "small",
                                            sx: {
                                                "& svg": {
                                                    color: "text.disabled"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:dots-vertical",
                                                fontSize: "1.375rem"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            m: "0 !important"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            p: 0,
                            position: "relative",
                            overflowX: "hidden",
                            height: "calc(100% - 7rem)"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ScrollWrapper, {
                                hidden: hidden,
                                children: store && store.mails && store.mails.length ? /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                    sx: {
                                        p: 0
                                    },
                                    children: store.mails.map((mail)=>{
                                        const mailReadToggleIcon = mail.isRead ? "mdi:email-outline" : "mdi:email-open-outline";
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MailItem, {
                                            sx: {
                                                backgroundColor: mail.isRead ? "action.hover" : "background.paper"
                                            },
                                            onClick: ()=>{
                                                setMailDetailsOpen(true);
                                                dispatch(getCurrentMail(mail.id));
                                                dispatch(updateMail({
                                                    emailIds: [
                                                        mail.id
                                                    ],
                                                    dataToUpdate: {
                                                        isRead: true
                                                    }
                                                }));
                                                (0,external_timers_.setTimeout)(()=>{
                                                    dispatch(handleSelectAllMail(false));
                                                }, 600);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mr: 4,
                                                        display: "flex",
                                                        overflow: "hidden",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                            onClick: (e)=>e.stopPropagation(),
                                                            onChange: ()=>dispatch(handleSelectMail(mail.id)),
                                                            checked: store.selectedMails.includes(mail.id) || false
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                            size: "small",
                                                            onClick: (e)=>handleStarMail(e, mail.id, !mail.isStarred),
                                                            sx: {
                                                                mr: {
                                                                    xs: 0,
                                                                    sm: 3
                                                                },
                                                                color: mail.isStarred ? "warning.main" : "text.secondary",
                                                                "& svg": {
                                                                    display: {
                                                                        xs: "none",
                                                                        sm: "block"
                                                                    }
                                                                }
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                icon: "mdi:star-outline"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                            alt: mail.from.name,
                                                            src: mail.from.avatar,
                                                            sx: {
                                                                mr: 3,
                                                                width: "2rem",
                                                                height: "2rem"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                overflow: "hidden",
                                                                flexDirection: {
                                                                    xs: "column",
                                                                    sm: "row"
                                                                },
                                                                alignItems: {
                                                                    xs: "flex-start",
                                                                    sm: "center"
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    sx: {
                                                                        mr: 4,
                                                                        fontWeight: 500,
                                                                        whiteSpace: "nowrap",
                                                                        width: [
                                                                            "100%",
                                                                            "auto"
                                                                        ],
                                                                        overflow: [
                                                                            "hidden",
                                                                            "unset"
                                                                        ],
                                                                        textOverflow: [
                                                                            "ellipsis",
                                                                            "unset"
                                                                        ]
                                                                    },
                                                                    children: mail.from.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    noWrap: true,
                                                                    variant: "body2",
                                                                    sx: {
                                                                        width: "100%"
                                                                    },
                                                                    children: mail.subject
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    className: "mail-actions",
                                                    sx: {
                                                        display: "none",
                                                        alignItems: "center",
                                                        justifyContent: "flex-end"
                                                    },
                                                    children: [
                                                        routeParams && routeParams.folder !== "trash" ? /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            placement: "top",
                                                            title: "Delete Mail",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    dispatch(updateMail({
                                                                        emailIds: [
                                                                            mail.id
                                                                        ],
                                                                        dataToUpdate: {
                                                                            folder: "trash"
                                                                        }
                                                                    }));
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: "mdi:delete-outline"
                                                                })
                                                            })
                                                        }) : null,
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            placement: "top",
                                                            title: mail.isRead ? "Unread Mail" : "Read Mail",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    handleReadMail([
                                                                        mail.id
                                                                    ], !mail.isRead);
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: mailReadToggleIcon
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            placement: "top",
                                                            title: "Move to Spam",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    handleFolderUpdate([
                                                                        mail.id
                                                                    ], "spam");
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                                    icon: "mdi:alert-octagon-outline"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    className: "mail-info-right",
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "flex-end"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                            sx: {
                                                                display: {
                                                                    xs: "none",
                                                                    sm: "flex"
                                                                }
                                                            },
                                                            children: renderMailLabels(mail.labels)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "caption",
                                                            sx: {
                                                                minWidth: "50px",
                                                                textAlign: "right",
                                                                whiteSpace: "nowrap",
                                                                color: "text.disabled"
                                                            },
                                                            children: new Date(mail.time).toLocaleTimeString("en-US", {
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                                hour12: true
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, mail.id);
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mt: 6,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        "& svg": {
                                            mr: 2
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:alert-circle-outline",
                                            fontSize: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "No Mails Found"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Backdrop_default()), {
                                open: refresh,
                                onClick: ()=>setRefresh(false),
                                sx: {
                                    zIndex: 5,
                                    position: "absolute",
                                    color: "common.white",
                                    backgroundColor: "action.disabledBackground"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                    color: "inherit"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_MailDetails, {
                ...mailDetailsProps
            })
        ]
    });
};
/* harmony default export */ const email_MailLog = (MailLog);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: ./src/@core/components/mui/badge/index.js
var badge = __webpack_require__(8195);
;// CONCATENATED MODULE: ./src/views/apps/email/SidebarLeft.js
// ** Next Import


// ** MUI Imports









// ** Icon Imports

// ** Third Party Imports

// ** Custom Components Imports

// ** Styled Components
const ListItemStyled = (0,styles_.styled)((ListItem_default()))(({ theme  })=>({
        borderLeftWidth: "3px",
        borderLeftStyle: "solid",
        padding: theme.spacing(0, 5),
        marginBottom: theme.spacing(2)
    }));
const ListBadge = (0,styles_.styled)(badge/* default */.Z)(()=>({
        "& .MuiBadge-badge": {
            height: "18px",
            minWidth: "18px",
            transform: "none",
            position: "relative",
            transformOrigin: "none"
        }
    }));
const SidebarLeft = (props)=>{
    // ** Props
    const { store , hidden , lgAbove , dispatch , leftSidebarOpen , leftSidebarWidth , toggleComposeOpen , setMailDetailsOpen , handleSelectAllMail , handleLeftSidebarToggle  } = props;
    const RenderBadge = (folder, color)=>{
        if (store && store.mailMeta && store.mailMeta[folder] > 0) {
            return /*#__PURE__*/ jsx_runtime_.jsx(ListBadge, {
                skin: "light",
                color: color,
                sx: {
                    ml: 2
                },
                badgeContent: store.mailMeta[folder]
            });
        } else {
            return null;
        }
    };
    const handleActiveItem = (type, value)=>{
        if (store && store.filter[type] !== value) {
            return false;
        } else {
            return true;
        }
    };
    const handleListItemClick = ()=>{
        setMailDetailsOpen(false);
        setTimeout(()=>dispatch(handleSelectAllMail(false)), 50);
        handleLeftSidebarToggle();
    };
    const activeInboxCondition = store && handleActiveItem("folder", "inbox") && store.filter.folder === "inbox" && store.filter.label === "";
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: "100%",
                    overflowY: "auto",
                    overflowX: "hidden"
                },
                children: children
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx((external_react_perfect_scrollbar_default()), {
                options: {
                    wheelPropagation: false
                },
                children: children
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
        open: leftSidebarOpen,
        onClose: handleLeftSidebarToggle,
        variant: lgAbove ? "permanent" : "temporary",
        ModalProps: {
            disablePortal: true,
            keepMounted: true // Better open performance on mobile.
        },
        sx: {
            zIndex: 9,
            display: "block",
            position: lgAbove ? "static" : "absolute",
            "& .MuiDrawer-paper": {
                boxShadow: "none",
                width: leftSidebarWidth,
                zIndex: lgAbove ? 2 : "drawer",
                position: lgAbove ? "static" : "absolute"
            },
            "& .MuiBackdrop-root": {
                position: "absolute"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    p: 5,
                    overflowY: "hidden"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    fullWidth: true,
                    variant: "contained",
                    onClick: toggleComposeOpen,
                    children: "Compose"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        pt: 1.25,
                        overflowY: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                            component: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    href: "/apps/email/inbox",
                                    onClick: handleListItemClick,
                                    sx: {
                                        pt: 0.5,
                                        borderLeftColor: (theme)=>activeInboxCondition ? theme.palette.primary.main : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                color: activeInboxCondition ? "primary.main" : "text.secondary"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:email-outline",
                                                fontSize: 20
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Inbox",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...activeInboxCondition && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        }),
                                        RenderBadge("inbox", "primary")
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    href: "/apps/email/sent",
                                    onClick: handleListItemClick,
                                    sx: {
                                        borderLeftColor: handleActiveItem("folder", "sent") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                color: handleActiveItem("folder", "sent") ? "primary.main" : "text.secondary"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:send-outline",
                                                fontSize: 20
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Sent",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("folder", "sent") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    href: "/apps/email/draft",
                                    onClick: handleListItemClick,
                                    sx: {
                                        borderLeftColor: handleActiveItem("folder", "draft") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                color: handleActiveItem("folder", "draft") ? "primary.main" : "text.secondary"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:pencil-outline",
                                                fontSize: 20
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Draft",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("folder", "draft") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        }),
                                        RenderBadge("draft", "warning")
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    href: "/apps/email/starred",
                                    onClick: handleListItemClick,
                                    sx: {
                                        borderLeftColor: handleActiveItem("folder", "starred") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                color: handleActiveItem("folder", "starred") ? "primary.main" : "text.secondary"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:star-outline",
                                                fontSize: 20
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Starred",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("folder", "starred") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    href: "/apps/email/spam",
                                    onClick: handleListItemClick,
                                    sx: {
                                        borderLeftColor: handleActiveItem("folder", "spam") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                color: handleActiveItem("folder", "spam") ? "primary.main" : "text.secondary"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:alert-octagon-outline",
                                                fontSize: 20
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Spam",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("folder", "spam") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        }),
                                        RenderBadge("spam", "error")
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    href: "/apps/email/trash",
                                    onClick: handleListItemClick,
                                    sx: {
                                        borderLeftColor: handleActiveItem("folder", "trash") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                color: handleActiveItem("folder", "trash") ? "primary.main" : "text.secondary"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:delete-outline",
                                                fontSize: 20
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Trash",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("folder", "trash") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "h6",
                            variant: "caption",
                            sx: {
                                mx: 6,
                                mb: 0,
                                mt: 3.5,
                                lineHeight: ".95rem",
                                color: "text.disabled",
                                letterSpacing: "0.4px",
                                textTransform: "uppercase"
                            },
                            children: "Labels"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                            component: "div",
                            sx: {
                                pt: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    onClick: handleListItemClick,
                                    href: "/apps/email/label/personal",
                                    sx: {
                                        mb: 1,
                                        borderLeftColor: handleActiveItem("label", "personal") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                "& svg": {
                                                    mr: 1,
                                                    color: "success.main"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:circle",
                                                fontSize: "0.75rem"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Personal",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("label", "personal") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    onClick: handleListItemClick,
                                    href: "/apps/email/label/company",
                                    sx: {
                                        mb: 1,
                                        borderLeftColor: handleActiveItem("label", "company") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                "& svg": {
                                                    mr: 1,
                                                    color: "primary.main"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:circle",
                                                fontSize: "0.75rem"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Company",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("label", "company") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    onClick: handleListItemClick,
                                    href: "/apps/email/label/important",
                                    sx: {
                                        mb: 1,
                                        borderLeftColor: handleActiveItem("label", "important") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                "& svg": {
                                                    mr: 1,
                                                    color: "warning.main"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:circle",
                                                fontSize: "0.75rem"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Important",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("label", "important") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItemStyled, {
                                    component: (link_default()),
                                    onClick: handleListItemClick,
                                    href: "/apps/email/label/private",
                                    sx: {
                                        mb: 1,
                                        borderLeftColor: handleActiveItem("label", "private") ? "primary.main" : "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                "& svg": {
                                                    mr: 1,
                                                    color: "error.main"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:circle",
                                                fontSize: "0.75rem"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: "Private",
                                            primaryTypographyProps: {
                                                noWrap: true,
                                                sx: {
                                                    ...handleActiveItem("label", "private") && {
                                                        color: "primary.main"
                                                    }
                                                }
                                            }
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
/* harmony default export */ const email_SidebarLeft = (SidebarLeft);

// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/ButtonGroup"
var ButtonGroup_ = __webpack_require__(9580);
var ButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ButtonGroup_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(6911);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
// EXTERNAL MODULE: ./src/@core/components/react-draft-wysiwyg/index.js
var react_draft_wysiwyg = __webpack_require__(3832);
// EXTERNAL MODULE: ./src/@core/styles/libs/react-draft-wysiwyg/index.js
var libs_react_draft_wysiwyg = __webpack_require__(8011);
// EXTERNAL MODULE: ./src/@core/utils/get-initials.js
var get_initials = __webpack_require__(3552);
// EXTERNAL MODULE: ./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css
var dist_react_draft_wysiwyg = __webpack_require__(5312);
;// CONCATENATED MODULE: ./src/views/apps/email/ComposePopup.js
// ** React Imports


// ** MUI Imports















// ** Icon Imports

// ** Third Party Components

// ** Custom Components Imports



// ** Styled Component Imports

// ** Utils Import

// ** Styles

const menuItemsArr = [
    {
        name: "Ross Geller",
        value: "ross",
        src: "/images/avatars/1.png"
    },
    {
        name: "Pheobe Buffay",
        value: "pheobe",
        src: "/images/avatars/2.png"
    },
    {
        name: "Joey Tribbiani",
        value: "joey",
        src: "/images/avatars/3.png"
    },
    {
        name: "Rachel Green",
        value: "rachel",
        src: "/images/avatars/4.png"
    },
    {
        name: "Chandler Bing",
        value: "chandler",
        src: "/images/avatars/5.png"
    },
    {
        name: "Monica Geller",
        value: "monica",
        src: "/images/avatars/8.png"
    }
];
const filter = (0,Autocomplete_.createFilterOptions)();
const ComposePopup = (props)=>{
    // ** Props
    const { mdAbove , composeOpen , composePopupWidth , toggleComposeOpen  } = props;
    // ** States
    const [emailTo, setEmailTo] = (0,external_react_.useState)([]);
    const [ccValue, setccValue] = (0,external_react_.useState)([]);
    const [subjectValue, setSubjectValue] = (0,external_react_.useState)("");
    const [bccValue, setbccValue] = (0,external_react_.useState)([]);
    const [sendBtnOpen, setSendBtnOpen] = (0,external_react_.useState)(false);
    const [messageValue, setMessageValue] = (0,external_react_.useState)(external_draft_js_.EditorState.createEmpty());
    const [visibility, setVisibility] = (0,external_react_.useState)({
        cc: false,
        bcc: false
    });
    // ** Ref
    const anchorRefSendBtn = (0,external_react_.useRef)(null);
    const toggleVisibility = (value)=>setVisibility({
            ...visibility,
            [value]: !visibility[value]
        });
    const handleSendMenuItemClick = ()=>{
        setSendBtnOpen(false);
    };
    const handleSendBtnToggle = ()=>{
        setSendBtnOpen((prevOpen)=>!prevOpen);
    };
    const handleMailDelete = (value, state, setState)=>{
        const arr = state;
        const index = arr.findIndex((i)=>i.value === value);
        arr.splice(index, 1);
        setState([
            ...arr
        ]);
    };
    const handlePopupClose = ()=>{
        toggleComposeOpen();
        setEmailTo([]);
        setccValue([]);
        setbccValue([]);
        setSubjectValue("");
        setMessageValue(external_draft_js_.EditorState.createEmpty());
        setVisibility({
            cc: false,
            bcc: false
        });
    };
    const handleMinimize = ()=>{
        toggleComposeOpen();
        setEmailTo(emailTo);
        setccValue(ccValue);
        setbccValue(bccValue);
        setVisibility(visibility);
        setMessageValue(messageValue);
        setSubjectValue(subjectValue);
    };
    const renderCustomChips = (array, getTagProps, state, setState)=>{
        return array.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                size: "small",
                label: item.name,
                ...getTagProps({
                    index
                }),
                deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:close"
                }),
                onDelete: ()=>handleMailDelete(item.value, state, setState)
            }, item.value));
    };
    const renderListItem = (props, option, array, setState)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
            sx: {
                cursor: "pointer"
            },
            onClick: ()=>setState([
                    ...array,
                    option
                ]),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    option.src.length ? /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                        src: option.src,
                        alt: option.name,
                        sx: {
                            mr: 3,
                            width: 22,
                            height: 22
                        }
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                        skin: "light",
                        color: "primary",
                        sx: {
                            mr: 3,
                            width: 22,
                            height: 22,
                            fontSize: ".75rem"
                        },
                        children: (0,get_initials/* getInitials */.Q)(option.name)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            fontSize: "0.875rem"
                        },
                        children: option.name
                    })
                ]
            })
        }, option.value);
    };
    const addNewOption = (options, params)=>{
        const filtered = filter(options, params);
        const { inputValue  } = params;
        const isExisting = options.some((option)=>inputValue === option.name);
        if (inputValue !== "" && !isExisting) {
            filtered.push({
                name: inputValue,
                value: inputValue,
                src: ""
            });
        }
        // @ts-ignore
        return filtered;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
        hideBackdrop: true,
        anchor: "bottom",
        open: composeOpen,
        variant: "temporary",
        onClose: toggleComposeOpen,
        sx: {
            top: "auto",
            left: "auto",
            right: mdAbove ? "1.5rem" : "1rem",
            bottom: "1.5rem",
            display: "block",
            zIndex: (theme)=>`${theme.zIndex.drawer} + 1`,
            "& .MuiDrawer-paper": {
                borderRadius: 1,
                position: "static",
                width: composePopupWidth
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    px: 4,
                    py: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: (theme)=>`rgba(${theme.palette.customColors.main}, 0.08)`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            fontWeight: 600,
                            color: "text.secondary"
                        },
                        children: "Compose Mail"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                sx: {
                                    p: 1,
                                    mr: 2,
                                    color: "action.active"
                                },
                                onClick: handleMinimize,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:minus",
                                    fontSize: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                sx: {
                                    p: 1,
                                    color: "action.active"
                                },
                                onClick: handlePopupClose,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:close",
                                    fontSize: 20
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    py: 1,
                    px: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    sx: {
                                        mr: 3,
                                        color: "text.disabled"
                                    },
                                    htmlFor: "email-to-select",
                                    children: "To:"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                                multiple: true,
                                freeSolo: true,
                                value: emailTo,
                                clearIcon: false,
                                id: "email-to-select",
                                filterSelectedOptions: true,
                                options: menuItemsArr,
                                ListboxComponent: (List_default()),
                                filterOptions: addNewOption,
                                getOptionLabel: (option)=>option.name,
                                renderOption: (props, option)=>renderListItem(props, option, emailTo, setEmailTo),
                                renderTags: (array, getTagProps)=>renderCustomChips(array, getTagProps, emailTo, setEmailTo),
                                sx: {
                                    width: "100%",
                                    "& .MuiOutlinedInput-root": {
                                        p: 2
                                    },
                                    "& .MuiAutocomplete-endAdornment": {
                                        display: "none"
                                    }
                                },
                                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        ...params,
                                        autoComplete: "new-password",
                                        sx: {
                                            border: 0,
                                            "& fieldset": {
                                                border: "0 !important"
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                p: "0 !important"
                                            }
                                        }
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "span",
                                sx: {
                                    cursor: "pointer"
                                },
                                onClick: ()=>toggleVisibility("cc"),
                                children: "Cc"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "span",
                                sx: {
                                    mx: 2
                                },
                                children: "|"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "span",
                                sx: {
                                    cursor: "pointer"
                                },
                                onClick: ()=>toggleVisibility("bcc"),
                                children: "Bcc"
                            })
                        ]
                    })
                ]
            }),
            visibility.cc ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    py: 1,
                    px: 4,
                    display: "flex",
                    alignItems: "center",
                    borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                            sx: {
                                mr: 3,
                                color: "text.disabled"
                            },
                            htmlFor: "email-cc-select",
                            children: "Cc:"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        fullWidth: true,
                        size: "small",
                        sx: {
                            border: 0,
                            "& fieldset": {
                                border: "0 !important"
                            },
                            "& .MuiOutlinedInput-root": {
                                p: "0 !important"
                            }
                        }
                    })
                ]
            }) : null,
            visibility.bcc ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    py: 1,
                    px: 4,
                    display: "flex",
                    alignItems: "center",
                    borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                            sx: {
                                mr: 3,
                                color: "text.disabled"
                            },
                            htmlFor: "email-bcc-select",
                            children: "Bcc:"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        fullWidth: true,
                        size: "small",
                        sx: {
                            border: 0,
                            "& fieldset": {
                                border: "0 !important"
                            },
                            "& .MuiOutlinedInput-root": {
                                p: "0 !important"
                            }
                        }
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    py: 1,
                    px: 4,
                    display: "flex",
                    alignItems: "center",
                    borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                            sx: {
                                mr: 3,
                                color: "text.disabled"
                            },
                            htmlFor: "email-subject-input",
                            children: "Subject:"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                        fullWidth: true,
                        value: subjectValue,
                        id: "email-subject-input",
                        onChange: (e)=>setSubjectValue(e.target.value),
                        sx: {
                            "&:before, &:after": {
                                display: "none"
                            },
                            "& .MuiInput-input": {
                                py: 1.875
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(libs_react_draft_wysiwyg/* EditorWrapper */.cP, {
                sx: {
                    "& .rdw-editor-wrapper": {
                        border: "0 !important"
                    },
                    "& .rdw-editor-toolbar": {
                        p: "0.35rem 1rem !important",
                        "& .rdw-option-wrapper": {
                            minWidth: "1.25rem",
                            borderRadius: "4px !important"
                        },
                        "& .rdw-inline-wrapper, & .rdw-text-align-wrapper": {
                            mb: 0
                        }
                    },
                    "& .rdw-editor-main": {
                        px: "1.25rem"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_draft_wysiwyg/* default */.Z, {
                    editorState: messageValue,
                    onEditorStateChange: (editorState)=>setMessageValue(editorState),
                    placeholder: "Message",
                    toolbar: {
                        options: [
                            "inline",
                            "textAlign"
                        ],
                        inline: {
                            inDropdown: false,
                            options: [
                                "bold",
                                "italic",
                                "underline",
                                "strikethrough"
                            ]
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    px: 4,
                    py: 3.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ButtonGroup_default()), {
                                variant: "contained",
                                ref: anchorRefSendBtn,
                                "aria-label": "split button",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        onClick: handlePopupClose,
                                        children: "Send"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        size: "small",
                                        "aria-haspopup": "true",
                                        onClick: handleSendBtnToggle,
                                        "aria-label": "select merge strategy",
                                        "aria-expanded": sendBtnOpen ? "true" : undefined,
                                        "aria-controls": sendBtnOpen ? "email-send-menu" : undefined,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                            icon: "mdi:chevron-up",
                                            fontSize: "1.25rem"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                keepMounted: true,
                                open: sendBtnOpen,
                                id: "email-send-menu",
                                onClose: handleSendMenuItemClick,
                                anchorEl: anchorRefSendBtn.current,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                transformOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleSendMenuItemClick,
                                        children: "Schedule Send"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleSendMenuItemClick,
                                        children: "Save as Draft"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                sx: {
                                    ml: 3.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:attachment",
                                    fontSize: "1.25rem"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                iconButtonProps: {
                                    size: "small"
                                },
                                iconProps: {
                                    fontSize: "1.25rem"
                                },
                                options: [
                                    "Print",
                                    "Check spelling",
                                    "Plain text mode"
                                ],
                                menuProps: {
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    transformOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                onClick: handlePopupClose,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:delete-outline",
                                    fontSize: "1.25rem"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const email_ComposePopup = (ComposePopup);

// EXTERNAL MODULE: ./src/store/apps/email/index.js
var email = __webpack_require__(4559);
;// CONCATENATED MODULE: ./src/views/apps/email/Email.js
// ** React Imports


// ** Redux Imports

// ** MUI Imports



// ** Hooks

// ** Email App Component Imports



// ** Actions

// ** Variables
const labelColors = {
    private: "error",
    personal: "success",
    company: "primary",
    important: "warning"
};
const EmailAppLayout = ({ folder , label  })=>{
    // ** States
    const [query, setQuery] = (0,external_react_.useState)("");
    const [composeOpen, setComposeOpen] = (0,external_react_.useState)(false);
    const [mailDetailsOpen, setMailDetailsOpen] = (0,external_react_.useState)(false);
    const [leftSidebarOpen, setLeftSidebarOpen] = (0,external_react_.useState)(false);
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    const { settings  } = (0,useSettings/* useSettings */.r)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const lgAbove = useMediaQuery_default()(theme.breakpoints.up("lg"));
    const mdAbove = useMediaQuery_default()(theme.breakpoints.up("md"));
    const smAbove = useMediaQuery_default()(theme.breakpoints.up("sm"));
    const hidden = useMediaQuery_default()(theme.breakpoints.down("lg"));
    const store = (0,external_react_redux_.useSelector)((state)=>state.email);
    // ** Vars
    const leftSidebarWidth = 260;
    const { skin , direction  } = settings;
    const composePopupWidth = mdAbove ? 754 : smAbove ? 520 : "100%";
    const routeParams = {
        label: label || "",
        folder: folder || "inbox"
    };
    (0,external_react_.useEffect)(()=>{
        // @ts-ignore
        dispatch((0,email/* fetchMails */.d7)({
            q: query || "",
            folder: routeParams.folder,
            label: routeParams.label
        }));
    }, [
        dispatch,
        query,
        routeParams.folder,
        routeParams.label
    ]);
    const toggleComposeOpen = ()=>setComposeOpen(!composeOpen);
    const handleLeftSidebarToggle = ()=>setLeftSidebarOpen(!leftSidebarOpen);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            display: "flex",
            borderRadius: 1,
            overflow: "hidden",
            position: "relative",
            boxShadow: skin === "bordered" ? 0 : 6,
            ...skin === "bordered" && {
                border: `1px solid ${theme.palette.divider}`
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(email_SidebarLeft, {
                store: store,
                hidden: hidden,
                lgAbove: lgAbove,
                dispatch: dispatch,
                mailDetailsOpen: mailDetailsOpen,
                leftSidebarOpen: leftSidebarOpen,
                leftSidebarWidth: leftSidebarWidth,
                toggleComposeOpen: toggleComposeOpen,
                setMailDetailsOpen: setMailDetailsOpen,
                handleSelectAllMail: email/* handleSelectAllMail */.ER,
                handleLeftSidebarToggle: handleLeftSidebarToggle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_MailLog, {
                query: query,
                store: store,
                hidden: hidden,
                lgAbove: lgAbove,
                dispatch: dispatch,
                setQuery: setQuery,
                direction: direction,
                updateMail: email/* updateMail */.AS,
                routeParams: routeParams,
                labelColors: labelColors,
                paginateMail: email/* paginateMail */.zM,
                getCurrentMail: email/* getCurrentMail */.xg,
                updateMailLabel: email/* updateMailLabel */.dJ,
                mailDetailsOpen: mailDetailsOpen,
                handleSelectMail: email/* handleSelectMail */.el,
                setMailDetailsOpen: setMailDetailsOpen,
                handleSelectAllMail: email/* handleSelectAllMail */.ER,
                handleLeftSidebarToggle: handleLeftSidebarToggle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_ComposePopup, {
                mdAbove: mdAbove,
                composeOpen: composeOpen,
                composePopupWidth: composePopupWidth,
                toggleComposeOpen: toggleComposeOpen
            })
        ]
    });
};
/* harmony default export */ const Email = (EmailAppLayout);


/***/ })

};
;