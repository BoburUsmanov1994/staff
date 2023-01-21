"use strict";
(() => {
var exports = {};
exports.id = 2530;
exports.ids = [2530,1032,2197,8573];
exports.modules = {

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getInitials)
/* harmony export */ });
// ** Returns initials from string
const getInitials = (string)=>string.split(/\s/).reduce((response, word)=>response += word.slice(0, 1), "");


/***/ }),

/***/ 1416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/AvatarGroup"
var AvatarGroup_ = __webpack_require__(5451);
var AvatarGroup_default = /*#__PURE__*/__webpack_require__.n(AvatarGroup_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: ./src/@core/components/mui/chip/index.js
var mui_chip = __webpack_require__(7071);
// EXTERNAL MODULE: ./src/@core/components/option-menu/index.js
var option_menu = __webpack_require__(4560);
;// CONCATENATED MODULE: ./src/views/pages/user-profile/teams/index.js
// ** Next Import


// ** MUI Components









// ** Icon Imports

// ** Custom Components Imports


const Teams = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        container: true,
        spacing: 6,
        children: data && Array.isArray(data) && data.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                lg: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                src: item.avatar,
                                                sx: {
                                                    mr: 2,
                                                    height: 32,
                                                    width: 32
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "h6",
                                                sx: {
                                                    fontSize: "1.125rem",
                                                    color: "text.secondary"
                                                },
                                                children: item.title
                                            })
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
                                                sx: {
                                                    color: "text.secondary"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:star-outline"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                                iconButtonProps: {
                                                    size: "small"
                                                },
                                                options: [
                                                    "Rename Team",
                                                    "View Details",
                                                    "Add to Favorites",
                                                    {
                                                        divider: true
                                                    },
                                                    {
                                                        text: "Delete Team",
                                                        menuItemProps: {
                                                            sx: {
                                                                color: "error.main"
                                                            }
                                                        }
                                                    }
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    my: 4,
                                    color: "text.secondary"
                                },
                                children: item.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    gap: 2,
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AvatarGroup_default()), {
                                            className: "pull-up",
                                            sx: {
                                                alignItems: "center"
                                            },
                                            children: [
                                                item.avatarGroup.map((person, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        title: person.name,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                            src: person.avatar,
                                                            alt: person.name,
                                                            sx: {
                                                                height: 32,
                                                                width: 32
                                                            }
                                                        })
                                                    }, index);
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        ml: 0.5,
                                                        color: "text.disabled"
                                                    },
                                                    children: [
                                                        "+",
                                                        item.extraMembers
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        sx: {
                                            ml: "auto",
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: item.chips && item.chips.map((chip, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                href: "/",
                                                component: (link_default()),
                                                onClick: (e)=>e.preventDefault(),
                                                sx: {
                                                    textDecoration: "none",
                                                    "&:not(:last-of-type)": {
                                                        mr: 3
                                                    },
                                                    "& .MuiChip-root": {
                                                        cursor: "pointer"
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mui_chip/* default */.Z, {
                                                    size: "small",
                                                    skin: "light",
                                                    color: chip.color,
                                                    label: chip.title
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    })
                })
            }, index);
        })
    });
};
/* harmony default export */ const teams = (Teams);

;// CONCATENATED MODULE: ./src/views/pages/user-profile/profile/AboutOverivew.js
// ** MUI Components






// ** Icon Imports

const renderList = (arr)=>{
    if (arr && arr.length) {
        return arr.map((item, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    "&:not(:last-of-type)": {
                        mb: 4
                    },
                    "& svg": {
                        color: "text.secondary"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: item.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mx: 2,
                            fontWeight: 600,
                            color: "text.secondary"
                        },
                        children: `${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: item.value.charAt(0).toUpperCase() + item.value.slice(1)
                    })
                ]
            }, index);
        });
    } else {
        return null;
    }
};
const renderTeams = (arr)=>{
    if (arr && arr.length) {
        return arr.map((item, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    "&:not(:last-of-type)": {
                        mb: 4
                    },
                    "& svg": {
                        color: `${item.color}.main`
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                        icon: "item.icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mx: 2,
                            fontWeight: 600,
                            color: "text.secondary"
                        },
                        children: item.property.charAt(0).toUpperCase() + item.property.slice(1)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: item.value.charAt(0).toUpperCase() + item.value.slice(1)
                    })
                ]
            }, index);
        });
    } else {
        return null;
    }
};
const AboutOverivew = (props)=>{
    const { teams , about , contacts , overview  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 7
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 4,
                                            color: "text.disabled",
                                            textTransform: "uppercase"
                                        },
                                        children: "About"
                                    }),
                                    renderList(about)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: 7
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 4,
                                            color: "text.disabled",
                                            textTransform: "uppercase"
                                        },
                                        children: "Contacts"
                                    }),
                                    renderList(contacts)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 4,
                                            color: "text.disabled",
                                            textTransform: "uppercase"
                                        },
                                        children: "Teams"
                                    }),
                                    renderTeams(teams)
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        mb: 4,
                                        color: "text.disabled",
                                        textTransform: "uppercase"
                                    },
                                    children: "Overview"
                                }),
                                renderList(overview)
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const profile_AboutOverivew = (AboutOverivew);

// EXTERNAL MODULE: external "@mui/x-data-grid"
var x_data_grid_ = __webpack_require__(7738);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var mui_avatar = __webpack_require__(2024);
// EXTERNAL MODULE: ./src/@core/utils/get-initials.js
var get_initials = __webpack_require__(3552);
;// CONCATENATED MODULE: ./src/views/pages/user-profile/profile/ProjectsTable.js
// ** React Imports


// ** MUI Components








// ** Third Party Imports

// ** Custom Components Imports


// ** Utils Import

// ** renders name column
const renderName = (row)=>{
    if (row.avatar) {
        return /*#__PURE__*/ jsx_runtime_.jsx(mui_avatar/* default */.Z, {
            src: row.avatar,
            sx: {
                mr: 2,
                width: 35,
                height: 35
            }
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(mui_avatar/* default */.Z, {
            skin: "light",
            sx: {
                mr: 2,
                width: 35,
                height: 35,
                fontSize: "0.875rem"
            },
            color: row.avatarColor || "primary",
            children: (0,get_initials/* getInitials */.Q)(row.name || "John Doe")
        });
    }
};
const columns = [
    {
        flex: 0.1,
        field: "name",
        minWidth: 220,
        headerName: "Name",
        renderCell: ({ row  })=>{
            const { name , date  } = row;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    renderName(row),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                noWrap: true,
                                sx: {
                                    color: "text.secondary",
                                    fontWeight: 700
                                },
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                noWrap: true,
                                variant: "body2",
                                sx: {
                                    color: "text.disabled",
                                    textTransform: "capitalize"
                                },
                                children: date
                            })
                        ]
                    })
                ]
            });
        }
    },
    {
        flex: 0.1,
        minWidth: 105,
        field: "leader",
        headerName: "Leader",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                sx: {
                    color: "text.secondary"
                },
                children: row.leader
            })
    },
    {
        flex: 0.1,
        field: "team",
        minWidth: 120,
        headerName: "Team",
        renderCell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx((AvatarGroup_default()), {
                className: "pull-up",
                children: row.avatarGroup.map((src, index)=>/*#__PURE__*/ jsx_runtime_.jsx(mui_avatar/* default */.Z, {
                        src: src,
                        sx: {
                            height: 26,
                            width: 26
                        }
                    }, index))
            })
    },
    {
        flex: 0.1,
        minWidth: 150,
        field: "status",
        headerName: "Status",
        renderCell: ({ row  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                        color: "primary",
                        value: row.status,
                        variant: "determinate",
                        sx: {
                            mr: 4,
                            height: 6,
                            width: "100%",
                            borderRadius: 8,
                            backgroundColor: "background.default",
                            "& .MuiLinearProgress-bar": {
                                borderRadius: 8
                            }
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: `${row.status}%`
                    })
                ]
            })
    },
    {
        flex: 0.1,
        minWidth: 100,
        field: "actions",
        headerName: "Actions",
        renderCell: ()=>/*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                iconButtonProps: {
                    size: "small"
                },
                options: [
                    "Details",
                    "Archive",
                    {
                        divider: true
                    },
                    {
                        text: "Delete",
                        menuItemProps: {
                            sx: {
                                color: "error.main"
                            }
                        }
                    }
                ]
            })
    }
];
const ProfileTable = ()=>{
    // ** State
    const [data, setData] = (0,external_react_.useState)([]);
    const [value, setValue] = (0,external_react_.useState)("");
    const [pageSize, setPageSize] = (0,external_react_.useState)(7);
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get("/pages/profile-table", {
            params: {
                q: value
            }
        }).then((response)=>{
            setData(response.data);
        });
    }, [
        value
    ]);
    const handleFilter = (val)=>{
        setValue(val);
    };
    return data ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Projects",
                action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center"
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
                            value: value,
                            onChange: (e)=>handleFilter(e.target.value)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(x_data_grid_.DataGrid, {
                autoHeight: true,
                pagination: true,
                rows: data,
                columns: columns,
                checkboxSelection: true,
                pageSize: pageSize,
                disableSelectionOnClick: true,
                rowsPerPageOptions: [
                    5,
                    7,
                    10
                ],
                onPageSizeChange: (size)=>setPageSize(size)
            })
        ]
    }) : null;
};
/* harmony default export */ const ProjectsTable = (ProfileTable);

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
;// CONCATENATED MODULE: ./src/views/pages/user-profile/profile/ActivityTimeline.js
// ** MUI Import














// ** Icon Imports

// ** Custom Components Import

// Styled Timeline component
const Timeline = (0,styles_.styled)((Timeline_default()))({
    paddingLeft: 0,
    paddingRight: 0,
    "& .MuiTimelineItem-root": {
        width: "100%",
        "&:before": {
            display: "none"
        }
    }
});
const ActivityTimeline = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Activity Timeline",
                sx: {
                    "& .MuiCardHeader-avatar": {
                        mr: 2.5
                    }
                },
                avatar: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                    icon: "mdi:format-list-bulleted"
                }),
                titleTypographyProps: {
                    sx: {
                        color: "text.primary"
                    }
                },
                action: /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                    iconButtonProps: {
                        size: "small"
                    },
                    options: [
                        "Share timeline",
                        "Suggest edits",
                        {
                            divider: true
                        },
                        "Report bug"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timeline, {
                    sx: {
                        my: 0,
                        py: 0
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                            color: "warning"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                    sx: {
                                        mt: 0,
                                        mb: (theme)=>`${theme.spacing(2)} !important`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mr: 2,
                                                        fontWeight: 500
                                                    },
                                                    children: "Client Meeting"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "text.disabled"
                                                    },
                                                    children: "Today"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                mb: 2,
                                                color: "text.secondary"
                                            },
                                            children: "Project meeting with john @10:15am"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                    src: "/images/avatars/2.png",
                                                    sx: {
                                                        mr: 4,
                                                        width: 38,
                                                        height: 38
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                fontWeight: 500
                                                            },
                                                            children: "Lester McCarthy (Client)"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                color: "text.secondary"
                                                            },
                                                            children: "CEO of Infibeam"
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
                                    sx: {
                                        mt: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mr: 2,
                                                        fontWeight: 500
                                                    },
                                                    children: "Create a new project for client"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "text.disabled"
                                                    },
                                                    children: "2 Days Ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                color: "text.secondary"
                                            },
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
                                            color: "primary"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                    sx: {
                                        mt: 0,
                                        mb: (theme)=>`${theme.spacing(2)} !important`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mr: 2,
                                                        fontWeight: 500
                                                    },
                                                    children: "Shared 2 New Project Files"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "text.disabled"
                                                    },
                                                    children: "6 Days Ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 2.5,
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: "Sent by Mollie Dixon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                    src: "/images/avatars/3.png",
                                                    sx: {
                                                        ml: 5,
                                                        width: 20,
                                                        height: 20
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mr: 6,
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            width: 20,
                                                            height: 20,
                                                            alt: "app-guidelines",
                                                            src: "/images/icons/file-icons/pdf.png"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                ml: 3,
                                                                fontWeight: 500
                                                            },
                                                            children: "App Guidelines"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            width: 20,
                                                            height: 20,
                                                            alt: "testing-results",
                                                            src: "/images/icons/file-icons/doc.png"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                ml: 3,
                                                                fontWeight: 500
                                                            },
                                                            children: "Testing Results"
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
                                /*#__PURE__*/ jsx_runtime_.jsx((TimelineSeparator_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                        color: "success"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                                    sx: {
                                        mt: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mr: 2,
                                                        fontWeight: 500
                                                    },
                                                    children: "Project status updated"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "text.disabled"
                                                    },
                                                    children: "10 Days Ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                color: "text.secondary"
                                            },
                                            children: "Woocommerce iOS App Completed"
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
/* harmony default export */ const profile_ActivityTimeline = (ActivityTimeline);

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./src/views/pages/user-profile/profile/ConnectionsTeams.js
// ** Next Import


// ** MUI Components








// ** Icon Imports

// ** Custom Components Imports


const ConnectionsTeams = ({ connections , teams  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 6,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Connections",
                            action: /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                iconButtonProps: {
                                    size: "small"
                                },
                                options: [
                                    "Share connections",
                                    "Suggest edits",
                                    {
                                        divider: true
                                    },
                                    "Report bug"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                connections && connections.map((connection, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                        src: connection.avatar,
                                                        sx: {
                                                            mr: 4,
                                                            width: 38,
                                                            height: 38
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    lineHeight: 1.1,
                                                                    fontWeight: 500
                                                                },
                                                                children: connection.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                variant: "caption",
                                                                sx: {
                                                                    color: "text.disabled"
                                                                },
                                                                children: [
                                                                    connection.connections,
                                                                    " Connections"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                size: "small",
                                                color: "primary",
                                                variant: connection.isFriend ? "contained" : "outlined",
                                                sx: {
                                                    minWidth: 38,
                                                    p: (theme)=>`${theme.spacing(1.5)} !important`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:account-outline"
                                                })
                                            })
                                        ]
                                    }, index);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        width: "100%",
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        href: "/",
                                        component: (link_default()),
                                        onClick: (e)=>e.preventDefault(),
                                        sx: {
                                            color: "primary.main",
                                            textDecoration: "none"
                                        },
                                        children: "View all connections"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 6,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Teams",
                            action: /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                iconButtonProps: {
                                    size: "small"
                                },
                                options: [
                                    "Share teams",
                                    "Suggest edits",
                                    {
                                        divider: true
                                    },
                                    "Report bug"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                teams && teams.map((team, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                        src: team.avatar,
                                                        sx: {
                                                            mr: 4,
                                                            width: 38,
                                                            height: 38
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    lineHeight: 1.1,
                                                                    fontWeight: 500
                                                                },
                                                                children: team.title
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                variant: "caption",
                                                                sx: {
                                                                    color: "text.disabled"
                                                                },
                                                                children: [
                                                                    team.members,
                                                                    " Members"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                href: "/",
                                                component: (link_default()),
                                                onClick: (e)=>e.preventDefault(),
                                                sx: {
                                                    height: 0,
                                                    textDecoration: "none",
                                                    "& .MuiChip-root": {
                                                        cursor: "pointer"
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mui_chip/* default */.Z, {
                                                    size: "small",
                                                    skin: "light",
                                                    color: team.ChipColor,
                                                    label: team.chipText
                                                })
                                            })
                                        ]
                                    }, index);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        width: "100%",
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        href: "/",
                                        component: (link_default()),
                                        onClick: (e)=>e.preventDefault(),
                                        sx: {
                                            color: "primary.main",
                                            textDecoration: "none"
                                        },
                                        children: "View all teams"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const profile_ConnectionsTeams = (ConnectionsTeams);

;// CONCATENATED MODULE: ./src/views/pages/user-profile/profile/index.js
// ** MUI Components


// ** Demo Components




const ProfileTab = ({ data  })=>{
    return data && Object.values(data).length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xl: 4,
                md: 5,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(profile_AboutOverivew, {
                    about: data.about,
                    contacts: data.contacts,
                    teams: data.teams,
                    overview: data.overview
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xl: 8,
                md: 7,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 6,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(profile_ActivityTimeline, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(profile_ConnectionsTeams, {
                            connections: data.connections,
                            teams: data.teamsTech
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectsTable, {})
                        })
                    ]
                })
            })
        ]
    }) : null;
};
/* harmony default export */ const profile = (ProfileTab);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: ./src/views/pages/user-profile/projects/index.js
// ** Next Import


// ** MUI Components










// ** Icon Imports

// ** Utils Import

// ** Custom Components Imports



const ProjectAvatar = ({ project  })=>{
    const { title , avatar , avatarColor ="primary"  } = project;
    if (avatar.length) {
        return /*#__PURE__*/ jsx_runtime_.jsx(mui_avatar/* default */.Z, {
            src: avatar,
            sx: {
                width: 38,
                height: 38
            }
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(mui_avatar/* default */.Z, {
            skin: "light",
            color: avatarColor,
            sx: {
                width: 38,
                height: 38
            },
            children: (0,get_initials/* getInitials */.Q)(title)
        });
    }
};
const Projects = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        container: true,
        spacing: 6,
        children: data && Array.isArray(data) && data.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                lg: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            avatar: /*#__PURE__*/ jsx_runtime_.jsx(ProjectAvatar, {
                                project: item
                            }),
                            sx: {
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between"
                            },
                            subheader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Client:"
                                    }),
                                    " ",
                                    item.client
                                ]
                            }),
                            action: /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                                iconButtonProps: {
                                    size: "small"
                                },
                                options: [
                                    "Rename Project",
                                    "View Details",
                                    "Add to Favorites",
                                    {
                                        divider: true
                                    },
                                    {
                                        text: "Leave Project",
                                        menuItemProps: {
                                            sx: {
                                                color: "error.main"
                                            }
                                        }
                                    }
                                ]
                            }),
                            title: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                href: "/",
                                variant: "h6",
                                component: (link_default()),
                                onClick: (e)=>e.preventDefault(),
                                sx: {
                                    color: "text.primary",
                                    textDecoration: "none",
                                    "&:hover": {
                                        color: "primary.main"
                                    }
                                },
                                children: item.title
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 4,
                                        gap: 2,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(mui_chip/* default */.Z, {
                                            rounded: true,
                                            size: "small",
                                            skin: "light",
                                            sx: {
                                                height: 60
                                            },
                                            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                        sx: {
                                                            display: "flex"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    fontWeight: 500
                                                                },
                                                                children: item.budgetSpent
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    color: "text.secondary"
                                                                },
                                                                children: `/${item.budget}`
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary"
                                                        },
                                                        children: "Total Budget"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "flex-end",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                mr: 1,
                                                                fontWeight: 500
                                                            },
                                                            children: "Start Date:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                color: "text.secondary"
                                                            },
                                                            children: item.startDate
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
                                                                mr: 1,
                                                                fontWeight: 500
                                                            },
                                                            children: "Deadline:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                color: "text.secondary"
                                                            },
                                                            children: item.deadline
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        color: "text.secondary"
                                    },
                                    children: item.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            sx: {
                                my: "0 !important"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 4,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        mr: 1,
                                                        fontWeight: 500
                                                    },
                                                    children: "All Hours:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: item.hours
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(mui_chip/* default */.Z, {
                                            size: "small",
                                            skin: "light",
                                            color: item.chipColor,
                                            label: `${item.daysLeft} days left`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: `Tasks: ${item.completedTask}/${item.totalTask}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: `${Math.round(item.completedTask / item.totalTask * 100)}% Completed`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                                    color: "primary",
                                    variant: "determinate",
                                    value: Math.round(item.completedTask / item.totalTask * 100),
                                    sx: {
                                        mb: 4,
                                        height: 8,
                                        borderRadius: 2,
                                        "& .MuiLinearProgress-bar": {
                                            borderRadius: 2
                                        }
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
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
                                                /*#__PURE__*/ jsx_runtime_.jsx((AvatarGroup_default()), {
                                                    className: "pull-up",
                                                    sx: {
                                                        mr: 2
                                                    },
                                                    children: item.avatarGroup && item.avatarGroup.map((person, index)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            title: person.name,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(mui_avatar/* default */.Z, {
                                                                src: person.avatar,
                                                                alt: person.name,
                                                                sx: {
                                                                    height: 32,
                                                                    width: 32
                                                                }
                                                            })
                                                        }, index);
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "text.disabled"
                                                    },
                                                    children: item.members
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            href: "/",
                                            component: (link_default()),
                                            onClick: (e)=>e.preventDefault(),
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                textDecoration: "none",
                                                "& svg": {
                                                    mr: 1,
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:message-outline"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: item.comments
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, index);
        })
    });
};
/* harmony default export */ const projects = (Projects);

;// CONCATENATED MODULE: ./src/views/pages/user-profile/connections/index.js
// ** Next Import


// ** MUI Components







// ** Icon Imports

// ** Custom Components Imports


const Connections = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        container: true,
        spacing: 6,
        children: data && Array.isArray(data) && data.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    sx: {
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                            iconButtonProps: {
                                size: "small",
                                sx: {
                                    top: 12,
                                    right: 12,
                                    position: "absolute"
                                }
                            },
                            options: [
                                "Share Connection",
                                "Block Connection",
                                {
                                    divider: true
                                },
                                {
                                    text: "Delete",
                                    menuItemProps: {
                                        sx: {
                                            color: "error.main"
                                        }
                                    }
                                }
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: item.avatar,
                                        sx: {
                                            mb: 4,
                                            width: 100,
                                            height: 100
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            fontWeight: 500
                                        },
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            mb: 4,
                                            color: "text.secondary"
                                        },
                                        children: item.designation
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        sx: {
                                            mb: 8,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: item.chips && item.chips.map((chip, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                href: "/",
                                                component: (link_default()),
                                                onClick: (e)=>e.preventDefault(),
                                                sx: {
                                                    textDecoration: "none",
                                                    "&:not(:last-of-type)": {
                                                        mr: 3
                                                    },
                                                    "& .MuiChip-root": {
                                                        cursor: "pointer"
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mui_chip/* default */.Z, {
                                                    size: "small",
                                                    skin: "light",
                                                    color: chip.color,
                                                    label: chip.title
                                                })
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            mb: 8,
                                            gap: 2,
                                            width: "100%",
                                            display: "flex",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            justifyContent: "space-around"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "column"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h5",
                                                        children: item.projects
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary"
                                                        },
                                                        children: "Projects"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "column"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h5",
                                                        children: item.tasks
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary"
                                                        },
                                                        children: "Tasks"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "column"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h5",
                                                        children: item.connections
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary"
                                                        },
                                                        children: "Connections"
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
                                                sx: {
                                                    mr: 4
                                                },
                                                variant: item.isConnected ? "contained" : "outlined",
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    fontSize: 20,
                                                    icon: item.isConnected ? "mdi:account-check-outline" : "mdi:account-plus-outline"
                                                }),
                                                children: item.isConnected ? "Connected" : "Connect"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "outlined",
                                                color: "secondary",
                                                sx: {
                                                    p: 1.5,
                                                    minWidth: 38
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:email-outline"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, index);
        })
    });
};
/* harmony default export */ const connections = (Connections);

// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
;// CONCATENATED MODULE: ./src/views/pages/user-profile/UserProfileHeader.js
// ** React Imports


// ** MUI Components







// ** Third Party Imports

// ** Icon Imports

const ProfilePicture = (0,styles_.styled)("img")(({ theme  })=>({
        width: 120,
        height: 120,
        borderRadius: theme.shape.borderRadius,
        border: `5px solid ${theme.palette.common.white}`,
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(4)
        }
    }));
const UserProfileHeader = ()=>{
    // ** State
    const [data, setData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get("/pages/profile-header").then((response)=>{
            setData(response.data);
        });
    }, []);
    const designationIcon = data?.designationIcon || "mdi:briefcase-outline";
    return data !== null ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                component: "img",
                alt: "profile-header",
                image: data.coverImg,
                sx: {
                    height: {
                        xs: 150,
                        md: 250
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    pt: 0,
                    mt: -8,
                    display: "flex",
                    alignItems: "flex-end",
                    flexWrap: {
                        xs: "wrap",
                        md: "nowrap"
                    },
                    justifyContent: {
                        xs: "center",
                        md: "flex-start"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ProfilePicture, {
                        src: data.profileImg,
                        alt: "profile-picture"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            width: "100%",
                            display: "flex",
                            ml: {
                                xs: 0,
                                md: 6
                            },
                            alignItems: "flex-end",
                            flexWrap: [
                                "wrap",
                                "nowrap"
                            ],
                            justifyContent: [
                                "center",
                                "space-between"
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mb: [
                                        6,
                                        0
                                    ],
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: [
                                        "center",
                                        "flex-start"
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        sx: {
                                            mb: 4,
                                            fontSize: "1.375rem"
                                        },
                                        children: data.fullName
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: [
                                                "center",
                                                "flex-start"
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mr: 4,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    "& svg": {
                                                        mr: 1,
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: designationIcon
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary",
                                                            fontWeight: 600
                                                        },
                                                        children: data.designation
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mr: 4,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    "& svg": {
                                                        mr: 1,
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:map-marker-outline"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary",
                                                            fontWeight: 600
                                                        },
                                                        children: data.location
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    "& svg": {
                                                        mr: 1,
                                                        color: "text.secondary"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                        icon: "mdi:calendar-blank-outline"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        sx: {
                                                            color: "text.secondary",
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            "Joined ",
                                                            data.joiningDate
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:account-check-outline",
                                    fontSize: 20
                                }),
                                children: "Connected"
                            })
                        ]
                    })
                ]
            })
        ]
    }) : null;
};
/* harmony default export */ const user_profile_UserProfileHeader = (UserProfileHeader);

;// CONCATENATED MODULE: ./src/views/pages/user-profile/UserProfile.js
// ** React Imports


// ** Next Import

// ** MUI Components










// ** Icon Imports

// ** Demo Components





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
            [theme.breakpoints.up("sm")]: {
                minWidth: 130
            }
        }
    }));
const UserProfile = ({ tab , data  })=>{
    // ** State
    const [activeTab, setActiveTab] = (0,external_react_.useState)(tab);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    // ** Hooks
    const router = (0,router_.useRouter)();
    const hideText = useMediaQuery_default()((theme)=>theme.breakpoints.down("sm"));
    const handleChange = (event, value)=>{
        setIsLoading(true);
        setActiveTab(value);
        router.push({
            pathname: `/pages/user-profile/${value.toLowerCase()}`
        }).then(()=>setIsLoading(false));
    };
    (0,external_react_.useEffect)(()=>{
        if (data) {
            setIsLoading(false);
        }
    }, [
        data
    ]);
    (0,external_react_.useEffect)(()=>{
        if (tab && tab !== activeTab) {
            setActiveTab(tab);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tab
    ]);
    const tabContentList = {
        profile: /*#__PURE__*/ jsx_runtime_.jsx(profile, {
            data: data
        }),
        teams: /*#__PURE__*/ jsx_runtime_.jsx(teams, {
            data: data
        }),
        projects: /*#__PURE__*/ jsx_runtime_.jsx(projects, {
            data: data
        }),
        connections: /*#__PURE__*/ jsx_runtime_.jsx(connections, {
            data: data
        })
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(user_profile_UserProfileHeader, {})
            }),
            activeTab === undefined ? null : /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
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
                                            value: "profile",
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
                                                    !hideText && "Profile"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            value: "teams",
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
                                                        icon: "mdi:account-multiple-outline"
                                                    }),
                                                    !hideText && "Teams"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            value: "projects",
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
                                                        icon: "mdi:view-grid-outline"
                                                    }),
                                                    !hideText && "Projects"
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
        ]
    });
};
/* harmony default export */ const user_profile_UserProfile = (UserProfile);

;// CONCATENATED MODULE: ./src/pages/pages/user-profile/[tab].js
// ** Third Party Imports


// ** Demo Components Imports

const UserProfileTab = ({ tab , data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(user_profile_UserProfile, {
        tab: tab,
        data: data
    });
};
const getStaticPaths = ()=>{
    return {
        paths: [
            {
                params: {
                    tab: "profile"
                }
            },
            {
                params: {
                    tab: "teams"
                }
            },
            {
                params: {
                    tab: "projects"
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
    const res = await external_axios_default().get("/pages/profile", {
        params: {
            tab: params?.tab
        }
    });
    const data = res.data;
    return {
        props: {
            data,
            tab: params?.tab
        }
    };
};
/* harmony default export */ const _tab_ = (UserProfileTab);


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

/***/ 6964:
/***/ ((module) => {

module.exports = require("@mui/lab/Timeline");

/***/ }),

/***/ 5392:
/***/ ((module) => {

module.exports = require("@mui/lab/TimelineConnector");

/***/ }),

/***/ 788:
/***/ ((module) => {

module.exports = require("@mui/lab/TimelineContent");

/***/ }),

/***/ 7277:
/***/ ((module) => {

module.exports = require("@mui/lab/TimelineDot");

/***/ }),

/***/ 4641:
/***/ ((module) => {

module.exports = require("@mui/lab/TimelineItem");

/***/ }),

/***/ 2032:
/***/ ((module) => {

module.exports = require("@mui/lab/TimelineSeparator");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 5451:
/***/ ((module) => {

module.exports = require("@mui/material/AvatarGroup");

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

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 5545:
/***/ ((module) => {

module.exports = require("@mui/material/LinearProgress");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

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

/***/ 7738:
/***/ ((module) => {

module.exports = require("@mui/x-data-grid");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,152,9550,1514,7294,2024,4560], () => (__webpack_exec__(1416)));
module.exports = __webpack_exports__;

})();