"use strict";
(() => {
var exports = {};
exports.id = 7917;
exports.ids = [7917];
exports.modules = {

/***/ 9573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ statistics),
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
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: ./src/@core/components/mui/avatar/index.js
var avatar = __webpack_require__(2024);
// EXTERNAL MODULE: ./src/@core/components/option-menu/index.js
var option_menu = __webpack_require__(4560);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsSales.js
// ** MUI Imports







// ** Icon Imports

// ** Custom Components Imports


const salesData = [
    {
        stats: "8,458",
        color: "primary",
        title: "Customers",
        icon: "mdi:account-outline"
    },
    {
        stats: "$28.5k",
        color: "warning",
        icon: "mdi:poll",
        title: "Total Profit"
    },
    {
        color: "info",
        stats: "2,450k",
        title: "Transactions",
        icon: "mdi:trending-up"
    }
];
const renderStats = ()=>{
    return salesData.map((sale, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            item: true,
            xs: 12,
            sm: 4,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                        skin: "light",
                        variant: "rounded",
                        color: sale.color,
                        sx: {
                            mr: 4
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: sale.icon
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                sx: {
                                    fontWeight: 600
                                },
                                children: sale.stats
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                children: sale.title
                            })
                        ]
                    })
                ]
            }, index)
        }, index));
};
const CardStatisticsSales = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Sales Overview",
                titleTypographyProps: {
                    variant: "h6"
                },
                action: /*#__PURE__*/ jsx_runtime_.jsx(option_menu/* default */.Z, {
                    options: [
                        "Refresh",
                        "Share",
                        "Update"
                    ],
                    iconButtonProps: {
                        size: "small",
                        className: "card-more-options",
                        sx: {
                            color: "text.secondary"
                        }
                    }
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                mr: 1.5
                            },
                            children: "Total 42.5k Sales"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                "&, & + svg": {
                                    color: "success.main"
                                }
                            },
                            children: "+18%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:chevron-up",
                            fontSize: "1.25rem"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    spacing: 6,
                    children: renderStats()
                })
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatisticsSales = (CardStatisticsSales);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/@core/components/react-apexcharts/index.js
var react_apexcharts = __webpack_require__(2536);
// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.js
var hex_to_rgba = __webpack_require__(5026);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsBarChart.js
// ** MUI Imports






// ** Custom Components Imports

// ** Util Import

const series = [
    {
        name: "Earning",
        data: [
            120,
            200,
            150,
            120
        ]
    },
    {
        name: "Expense",
        data: [
            72,
            120,
            50,
            65
        ]
    }
];
const CardStatisticsBarChart = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            padding: {
                top: -15,
                left: -14,
                right: -4,
                bottom: -15
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 1),
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 1)
        ],
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: "48%",
                startingShape: "rounded"
            }
        },
        states: {
            hover: {
                filter: {
                    type: "none"
                }
            },
            active: {
                filter: {
                    type: "none"
                }
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr"
            ]
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 1.5
                            },
                            children: "$42.5k"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "error.main"
                            },
                            children: "-22%"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Total Revenue"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "bar",
                    height: 108,
                    options: options,
                    series: series
                })
            ]
        })
    });
};
/* harmony default export */ const statistics_CardStatisticsBarChart = (CardStatisticsBarChart);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsLineChart.js
// ** MUI Imports






// ** Custom Components Imports

// ** Util Import

const CardStatisticsLineChart_series = [
    {
        data: [
            0,
            20,
            5,
            30,
            15,
            45
        ]
    }
];
const CardStatsLineChart = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        tooltip: {
            enabled: false
        },
        grid: {
            strokeDashArray: 6,
            borderColor: theme.palette.divider,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: -15,
                left: -7,
                right: 7,
                bottom: -15
            }
        },
        stroke: {
            width: 3
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 1)
        ],
        markers: {
            size: 6,
            offsetY: 2,
            offsetX: -1,
            strokeWidth: 3,
            colors: [
                "transparent"
            ],
            strokeColors: "transparent",
            discrete: [
                {
                    size: 6,
                    seriesIndex: 0,
                    strokeColor: theme.palette.info.main,
                    fillColor: theme.palette.background.paper,
                    dataPointIndex: CardStatisticsLineChart_series[0].data.length - 1
                }
            ],
            hover: {
                size: 7
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 1.5
                            },
                            children: "$38.5k"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+62%"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Sessions"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "line",
                    height: 108,
                    options: options,
                    series: CardStatisticsLineChart_series
                })
            ]
        })
    });
};
/* harmony default export */ const CardStatisticsLineChart = (CardStatsLineChart);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsDonutChart.js
// ** MUI Imports






// ** Custom Components Imports

const CardStatsDonutChart = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        legend: {
            show: false
        },
        stroke: {
            width: 5,
            colors: [
                theme.palette.background.paper
            ]
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.secondary.main
        ],
        labels: [
            `${new Date().getFullYear()}`,
            `${new Date().getFullYear() - 1}`,
            `${new Date().getFullYear() - 2}`
        ],
        tooltip: {
            y: {
                formatter: (val)=>`${val}%`
            }
        },
        dataLabels: {
            enabled: false
        },
        states: {
            hover: {
                filter: {
                    type: "none"
                }
            },
            active: {
                filter: {
                    type: "none"
                }
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        name: {
                            show: false
                        },
                        total: {
                            label: "",
                            show: true,
                            fontWeight: 600,
                            fontSize: "1rem",
                            color: theme.palette.text.secondary,
                            formatter: (val)=>typeof val === "string" ? `${val}%` : "12%"
                        },
                        value: {
                            offsetY: 6,
                            fontWeight: 600,
                            fontSize: "1rem",
                            formatter: (val)=>`${val}%`,
                            color: theme.palette.text.secondary
                        }
                    }
                }
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 1.5
                            },
                            children: "$27.9k"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+16%"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Total Growth"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "donut",
                    height: 135,
                    options: options,
                    series: [
                        35,
                        30,
                        23
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const CardStatisticsDonutChart = (CardStatsDonutChart);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsRadialBarChart.js
// ** MUI Imports






// ** Custom Components Imports

// ** Util Import

const CardStatisticsRadialBarChart = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            lineCap: "round"
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 1)
        ],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "55%"
                },
                track: {
                    background: theme.palette.customColors.trackBg
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        grid: {
            padding: {
                bottom: -12
            }
        },
        states: {
            hover: {
                filter: {
                    type: "none"
                }
            },
            active: {
                filter: {
                    type: "none"
                }
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 1.5
                            },
                            children: "$67.1k"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+49%"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Overview"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "radialBar",
                    height: 119,
                    series: [
                        64
                    ],
                    options: options
                })
            ]
        })
    });
};
/* harmony default export */ const statistics_CardStatisticsRadialBarChart = (CardStatisticsRadialBarChart);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsStackedBarChart.js
// ** MUI Imports






// ** Custom Components Imports

// ** Util Import

const CardStatisticsStackedBarChart_series = [
    {
        name: "Earning",
        data: [
            44,
            21,
            56,
            34,
            47
        ]
    },
    {
        name: "Expense",
        data: [
            -27,
            -17,
            -31,
            -23,
            -31
        ]
    }
];
const CardStatsBarChar = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 1),
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 1)
        ],
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: "21%",
                endingShape: "rounded",
                startingShape: "rounded"
            }
        },
        grid: {
            padding: {
                top: -21,
                right: 0,
                left: -17,
                bottom: -16
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        states: {
            hover: {
                filter: {
                    type: "none"
                }
            },
            active: {
                filter: {
                    type: "none"
                }
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 1.5
                            },
                            children: "$88.5k"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "error.main"
                            },
                            children: "-18%"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Total Profit"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "bar",
                    height: 108,
                    options: options,
                    series: CardStatisticsStackedBarChart_series
                })
            ]
        })
    });
};
/* harmony default export */ const CardStatisticsStackedBarChart = (CardStatsBarChar);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsSmoothLineChart.js
// ** MUI Imports






// ** Custom Components Imports

const CardStatisticsSmoothLineChart_series = [
    {
        data: [
            0,
            30,
            10,
            70,
            40,
            110,
            95
        ]
    }
];
const CardStatsSmoothLineChart = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false,
            padding: {
                left: -5,
                top: -15,
                right: 5,
                bottom: -10
            }
        },
        colors: [
            theme.palette.warning.main
        ],
        stroke: {
            width: 4,
            curve: "smooth",
            lineCap: "round"
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 1.5
                            },
                            children: "$22.6k"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+38%"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Total Sales"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "line",
                    height: 108,
                    options: options,
                    series: CardStatisticsSmoothLineChart_series
                })
            ]
        })
    });
};
/* harmony default export */ const CardStatisticsSmoothLineChart = (CardStatsSmoothLineChart);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsCharts.js
// ** MUI Imports


// ** Demo Components Imports






const CardStatisticsCharts = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 4,
                lg: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsBarChart, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 4,
                lg: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsLineChart, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 4,
                lg: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsRadialBarChart, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 4,
                lg: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsStackedBarChart, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 4,
                lg: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsSmoothLineChart, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 4,
                lg: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsDonutChart, {})
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatisticsCharts = (CardStatisticsCharts);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatsSalesMonth.js
// ** MUI Imports





// ** Custom Components Imports

// ** Util Import

const CardStatsSalesMonth_series = [
    {
        data: [
            12,
            12,
            18,
            18,
            13,
            13,
            5,
            5,
            17,
            17,
            25,
            25
        ]
    }
];
const CardStatsSalesMonth = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            },
            dropShadow: {
                top: 14,
                blur: 4,
                left: 0,
                enabled: true,
                opacity: 0.12,
                color: theme.palette.primary.main
            }
        },
        tooltip: {
            enabled: false
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: -12,
                left: -2,
                right: 8,
                bottom: -10
            }
        },
        stroke: {
            width: 5,
            lineCap: "round"
        },
        markers: {
            size: 0
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 1)
        ],
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            min: 0,
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            sx: {
                pb: "0 !important"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    sx: {
                        mb: 2.5
                    },
                    children: "Sales this Month"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    children: "Total Sales This Month"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    children: "$28,450"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "line",
                    height: 115,
                    options: options,
                    series: CardStatsSalesMonth_series
                })
            ]
        })
    });
};
/* harmony default export */ const statistics_CardStatsSalesMonth = (CardStatsSalesMonth);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatsTotalVisits.js
// ** MUI Imports







// ** Custom Components Imports

// ** Icon Imports

const CardStatsTotalVisits = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mb: 6.5,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Total Visits"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    children: "42.5k"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                "& svg": {
                                    color: "success.main"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "subtitle2",
                                    sx: {
                                        color: "success.main"
                                    },
                                    children: "+18.4%"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                    icon: "mdi:chevron-up"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mb: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 2.5,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                            skin: "light",
                                            color: "warning",
                                            variant: "rounded",
                                            sx: {
                                                mr: 1.5,
                                                height: 24,
                                                width: 24,
                                                borderRadius: "6px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:cellphone",
                                                fontSize: "0.875rem"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "Mobile"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    children: "23.5%"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "caption",
                                    sx: {
                                        color: "text.disabled"
                                    },
                                    children: "2,890"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            flexItem: true,
                            sx: {
                                m: 0
                            },
                            orientation: "vertical",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                skin: "light",
                                color: "secondary",
                                sx: {
                                    height: 24,
                                    width: 24,
                                    fontSize: "0.6875rem",
                                    color: "text.secondary"
                                },
                                children: "VS"
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
                                        mb: 2.5,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            sx: {
                                                mr: 1.5
                                            },
                                            variant: "body2",
                                            children: "Desktop"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                            skin: "light",
                                            variant: "rounded",
                                            sx: {
                                                height: 24,
                                                width: 24,
                                                borderRadius: "6px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:monitor",
                                                fontSize: "0.875rem"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    children: "76.5%"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "caption",
                                    sx: {
                                        color: "text.disabled"
                                    },
                                    children: "22,465"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                    value: 24,
                    variant: "determinate",
                    sx: {
                        height: 10,
                        "&.MuiLinearProgress-colorPrimary": {
                            backgroundColor: "primary.main"
                        },
                        "& .MuiLinearProgress-bar": {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            backgroundColor: "warning.main"
                        }
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const statistics_CardStatsTotalVisits = (CardStatsTotalVisits);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatsSalesProfit.js
// ** MUI Imports








// ** Icon Imports

// ** Custom Components Imports

// ** Util Import

const seriesSales = [
    {
        data: [
            0,
            15,
            0,
            17,
            5,
            30
        ]
    }
];
const seriesProfit = [
    {
        data: [
            5,
            25,
            0,
            30,
            15,
            30
        ]
    }
];
const CardStatsSalesProfit = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const optionsSales = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false,
            padding: {
                left: -7
            }
        },
        tooltip: {
            enabled: false
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 1)
        ],
        markers: {
            size: 5,
            offsetY: 1,
            offsetX: -2,
            strokeWidth: 2,
            strokeOpacity: 1,
            colors: [
                "transparent"
            ],
            strokeColors: "transparent",
            discrete: [
                {
                    size: 5,
                    seriesIndex: 0,
                    strokeColor: theme.palette.success.main,
                    fillColor: theme.palette.background.paper,
                    dataPointIndex: seriesSales[0].data.length - 1
                }
            ]
        },
        stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round"
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    const optionsProfit = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false,
            padding: {
                left: -5
            }
        },
        tooltip: {
            enabled: false
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 1)
        ],
        markers: {
            size: 5,
            offsetY: 0,
            offsetX: -2,
            strokeWidth: 2,
            strokeOpacity: 1,
            colors: [
                "transparent"
            ],
            strokeColors: "transparent",
            discrete: [
                {
                    size: 5,
                    seriesIndex: 0,
                    strokeColor: theme.palette.error.main,
                    fillColor: theme.palette.background.paper,
                    dataPointIndex: seriesSales[0].data.length - 1
                }
            ]
        },
        stroke: {
            width: 3,
            curve: "smooth",
            lineCap: "round"
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                sx: {
                    py: 3
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                                type: "line",
                                height: 90,
                                series: seriesSales,
                                options: optionsSales
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 6,
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            sx: {
                                                mr: 1.75
                                            },
                                            children: "152k"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                "& svg": {
                                                    color: "success.main"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "success.main"
                                                    },
                                                    children: "+12%"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:chevron-up",
                                                    fontSize: 20
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Total Sales"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    my: "0 !important"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                sx: {
                    py: (theme)=>`${theme.spacing(3)} !important`
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                                type: "line",
                                height: 90,
                                series: seriesProfit,
                                options: optionsProfit
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 6,
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            sx: {
                                                mr: 1.75
                                            },
                                            children: "89.5k"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                "& svg": {
                                                    color: "error.main"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "error.main"
                                                    },
                                                    children: "-8%"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:chevron-down",
                                                    fontSize: 20
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Total Profit"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatsSalesProfit = (CardStatsSalesProfit);

// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatsOrdersImpressions.js
// ** MUI Imports







// ** Icon Imports

const CardStatsOrdersImpressions = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        my: 1.375,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mr: 6.5,
                                display: "flex",
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                    size: 60,
                                    value: 100,
                                    thickness: 5,
                                    variant: "determinate",
                                    sx: {
                                        position: "absolute",
                                        color: "customColors.trackBg",
                                        "& .MuiCircularProgress-circle": {
                                            strokeWidth: 4
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                    size: 60,
                                    value: 65,
                                    thickness: 5,
                                    color: "primary",
                                    variant: "determinate",
                                    sx: {
                                        "& .MuiCircularProgress-circle": {
                                            strokeWidth: 4,
                                            strokeLinecap: "round"
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        mt: -3,
                                        ml: -2.5,
                                        top: "50%",
                                        left: "50%",
                                        display: "flex",
                                        position: "absolute",
                                        color: "primary.main"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:cellphone-link",
                                        fontSize: 20
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            sx: {
                                                mr: 1.75
                                            },
                                            children: "84k"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                "& svg": {
                                                    color: "error.main"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "error.main"
                                                    },
                                                    children: "-24%"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:chevron-down",
                                                    fontSize: "1.25rem"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Total Impressions"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    my: "0 !important"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        my: 1.375,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mr: 6.5,
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                    size: 60,
                                    value: 100,
                                    thickness: 5,
                                    variant: "determinate",
                                    sx: {
                                        position: "absolute",
                                        color: "customColors.trackBg",
                                        "& .MuiCircularProgress-circle": {
                                            strokeWidth: 4
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                    size: 60,
                                    thickness: 5,
                                    value: 35,
                                    color: "warning",
                                    variant: "determinate",
                                    sx: {
                                        "& .MuiCircularProgress-circle": {
                                            strokeWidth: 4,
                                            strokeLinecap: "round"
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        mt: -3,
                                        ml: -2.5,
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        color: "warning.main"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:shopping-outline",
                                        fontSize: 20
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            sx: {
                                                mr: 1.75
                                            },
                                            children: "22k"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                "& svg": {
                                                    color: "success.main"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "success.main"
                                                    },
                                                    children: "+15%"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                    icon: "mdi:chevron-up",
                                                    fontSize: "1.25rem"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Total Orders"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatsOrdersImpressions = (CardStatsOrdersImpressions);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsCharts2.js
// ** MUI Imports


// ** Demo Components Imports




const CardStatisticsCharts2 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                lg: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatsSalesProfit, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                lg: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatsTotalVisits, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                lg: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatsSalesMonth, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                lg: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatsOrdersImpressions, {})
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatisticsCharts2 = (CardStatisticsCharts2);

// EXTERNAL MODULE: ./src/@core/components/card-statistics/card-stats-vertical/index.js
var card_stats_vertical = __webpack_require__(2624);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsVertical.js
// ** MUI Import


// ** Icon Imports

// ** Demo Components Imports

const CardStatsVertical = ({ data  })=>{
    if (data) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 6,
            children: data.map((item, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 4,
                    lg: 2,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(card_stats_vertical/* default */.Z, {
                        ...item,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: item.icon
                        })
                    })
                }, index);
            })
        });
    } else {
        return null;
    }
};
/* harmony default export */ const CardStatisticsVertical = (CardStatsVertical);

// EXTERNAL MODULE: ./src/@core/components/card-statistics/card-stats-horizontal/index.js
var card_stats_horizontal = __webpack_require__(427);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsHorizontal.js
// ** MUI Import


// ** Icon Imports

// ** Custom Components Imports

const CardStatsHorizontal = ({ data  })=>{
    if (data) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 6,
            children: data.map((item, index)=>{
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
        });
    } else {
        return null;
    }
};
/* harmony default export */ const CardStatisticsHorizontal = (CardStatsHorizontal);

// EXTERNAL MODULE: ./src/@core/components/card-statistics/card-stats-with-image/index.js
var card_stats_with_image = __webpack_require__(7528);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsCharacters.js
// ** MUI Import


// ** Custom Components Imports

const CardStatsCharacter = ({ data  })=>{
    if (data) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 6,
                    lg: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(card_stats_with_image/* default */.Z, {
                        data: data[0]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 6,
                    lg: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(card_stats_with_image/* default */.Z, {
                        data: data[1]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 6,
                    lg: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(card_stats_with_image/* default */.Z, {
                        data: data[2]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 6,
                    lg: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(card_stats_with_image/* default */.Z, {
                        data: data[3]
                    })
                })
            ]
        });
    } else {
        return null;
    }
};
/* harmony default export */ const CardStatisticsCharacters = (CardStatsCharacter);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(5168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1161);
;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsWeeklySales.js
// ** React Imports


// ** MUI Imports









// ** Third Party Components


// ** Icon Imports

// ** Custom Components Imports

const data = [
    {
        title: "Mobiles & Computers",
        img: "/images/cards/apple-iphone-x.png",
        details: {
            Mobiles: "24",
            Accessories: "50",
            Tablets: "12",
            Computers: "38"
        }
    },
    {
        title: "Appliances & Electronics",
        img: "/images/cards/ps4-joystick.png",
        details: {
            "TV's": "16",
            Cameras: "9",
            Speakers: "40",
            Consoles: "18"
        }
    },
    {
        title: "Fashion",
        img: "/images/cards/apple-watch-green.png",
        details: {
            "T-shirts": "16",
            Shoes: "43",
            Watches: "29",
            SunGlasses: "7"
        }
    }
];
const Slides = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map((slide, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "keen-slider__slide",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mb: 4.5,
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "img",
                                src: slide.img,
                                alt: slide.title,
                                sx: {
                                    mr: 5,
                                    width: 84,
                                    borderRadius: 1
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            mb: 2.5,
                                            fontWeight: 600
                                        },
                                        children: slide.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        container: true,
                                        spacing: 2.5,
                                        children: Object.keys(slide.details).map((key, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                                            skin: "light",
                                                            color: "secondary",
                                                            variant: "rounded",
                                                            sx: {
                                                                mr: 1.5,
                                                                width: 36,
                                                                height: 24,
                                                                fontSize: "0.75rem",
                                                                borderRadius: "6px",
                                                                color: "text.primary"
                                                            },
                                                            children: slide.details[key]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "caption",
                                                            children: key
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                sx: {
                                    mr: 3.5
                                },
                                variant: "outlined",
                                children: "Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                variant: "contained",
                                children: "Report"
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};
const CardStatisticsWeeklySales = ()=>{
    // ** States
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    const [currentSlide, setCurrentSlide] = (0,external_react_.useState)(0);
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        initial: 0,
        slides: {
            spacing: 16
        },
        rtl: theme.direction === "rtl",
        slideChanged (slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created () {
            setLoaded(true);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Weekly Sales",
                titleTypographyProps: {
                    variant: "h6"
                },
                sx: {
                    "& .swiper-dots": {
                        mt: 0.75,
                        mr: -1.75
                    }
                },
                subheader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        "& svg": {
                            color: "success.main"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                mr: 1.5
                            },
                            children: "Total $23.5k Earning"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+62%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:chevron-up",
                            fontSize: 20
                        })
                    ]
                }),
                action: loaded && instanceRef.current && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    className: "swiper-dots",
                    children: [
                        ...Array(instanceRef.current.track.details.slides.length).keys()
                    ].map((idx)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                            variant: "dot",
                            component: "div",
                            className: external_clsx_default()({
                                active: currentSlide === idx
                            }),
                            onClick: ()=>instanceRef.current?.moveToIdx(idx),
                            sx: {
                                mr: (theme)=>`${theme.spacing(2.5)} !important`,
                                "& .MuiBadge-dot": {
                                    minWidth: 6,
                                    width: "6px !important",
                                    height: "6px !important"
                                }
                            }
                        }, idx);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    ref: sliderRef,
                    className: "keen-slider",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Slides, {})
                })
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatisticsWeeklySales = (CardStatisticsWeeklySales);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsLiveVisitors.js
// ** MUI Imports







// ** Icon Imports

// ** Custom Components Imports

// ** Util Import

const CardStatisticsLiveVisitors_series = [
    {
        data: [
            70,
            118,
            92,
            49,
            19,
            49,
            23,
            82,
            65,
            23,
            49,
            65,
            65
        ]
    }
];
const CardStatisticsLiveVisitors = ()=>{
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            padding: {
                top: -4,
                left: -20,
                right: -2,
                bottom: -7
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        colors: [
            (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 1)
        ],
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: "43%",
                endingShape: "rounded",
                startingShape: "rounded"
            }
        },
        states: {
            hover: {
                filter: {
                    type: "none"
                }
            },
            active: {
                filter: {
                    type: "none"
                }
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Live Visitors",
                subheader: "Total 890 Visitors Are Live",
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "caption"
                },
                sx: {
                    "& .MuiCardHeader-subheader": {
                        fontSize: "0.75rem"
                    }
                },
                action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        "& svg": {
                            color: "success.main"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+78.2%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:chevron-up"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts/* default */.Z, {
                    type: "bar",
                    height: 250,
                    options: options,
                    series: CardStatisticsLiveVisitors_series
                })
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatisticsLiveVisitors = (CardStatisticsLiveVisitors);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsWeeklySalesBg.js
// ** React Imports


// ** MUI Imports







// ** Third Party Components


// ** Icon Imports

// ** Custom Components Imports

const CardStatisticsWeeklySalesBg_data = [
    {
        title: "Mobiles & Computers",
        img: "/images/cards/apple-iphone-x-lg.png",
        details: {
            Mobiles: "24",
            Accessories: "50",
            Tablets: "12",
            Computers: "38"
        }
    },
    {
        title: "Appliances & Electronics",
        img: "/images/cards/ps4-joystick-lg.png",
        details: {
            "TV's": "16",
            Cameras: "9",
            Speakers: "40",
            Consoles: "18"
        }
    },
    {
        title: "Fashion",
        img: "/images/cards/apple-watch-green-lg.png",
        details: {
            "T-shirts": "16",
            Shoes: "43",
            Watches: "29",
            SunGlasses: "7"
        }
    }
];
const CardStatisticsWeeklySalesBg_Slides = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: CardStatisticsWeeklySalesBg_data.map((slide, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "keen-slider__slide",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            color: "common.white"
                        },
                        children: "Weekly Sales"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mb: 4,
                            display: "flex",
                            alignItems: "center",
                            "& svg": {
                                color: "success.main"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                sx: {
                                    mr: 1.5,
                                    color: "common.white"
                                },
                                children: "Total $23.5k Earning"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle2",
                                sx: {
                                    color: "success.main"
                                },
                                children: "+62%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                icon: "mdi:chevron-up",
                                fontSize: 20
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                lg: 8,
                                sx: {
                                    order: [
                                        2,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            mb: 4.5,
                                            color: "common.white"
                                        },
                                        children: slide.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        container: true,
                                        spacing: 4,
                                        children: Object.keys(slide.details).map((key, index)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                                            color: "primary",
                                                            variant: "rounded",
                                                            sx: {
                                                                mr: 2,
                                                                width: 40,
                                                                height: 30,
                                                                fontSize: "0.875rem",
                                                                color: "common.white",
                                                                backgroundColor: "primary.dark"
                                                            },
                                                            children: slide.details[key]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "caption",
                                                            sx: {
                                                                color: "common.white"
                                                            },
                                                            children: key
                                                        })
                                                    ]
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                sm: 6,
                                lg: 4,
                                sx: {
                                    order: [
                                        1,
                                        2
                                    ],
                                    textAlign: "center",
                                    "& img": {
                                        top: 0,
                                        right: 0,
                                        height: "200px !important",
                                        maxWidth: "none !important",
                                        position: [
                                            "static",
                                            "absolute"
                                        ]
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: slide.img,
                                    alt: slide.title
                                })
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};
const CardStatisticsWeeklySalesBg = ()=>{
    // ** States
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    const [currentSlide, setCurrentSlide] = (0,external_react_.useState)(0);
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        initial: 0,
        rtl: theme.direction === "rtl",
        slideChanged (slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created () {
            setLoaded(true);
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            position: "relative",
            backgroundColor: "primary.main"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            children: [
                loaded && instanceRef.current && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    className: "swiper-dots",
                    sx: {
                        top: 7,
                        right: 13,
                        position: "absolute"
                    },
                    children: [
                        ...Array(instanceRef.current.track.details.slides.length).keys()
                    ].map((idx)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                            variant: "dot",
                            component: "div",
                            className: external_clsx_default()({
                                active: currentSlide === idx
                            }),
                            onClick: ()=>{
                                instanceRef.current?.moveToIdx(idx);
                            },
                            sx: {
                                mr: (theme)=>`${theme.spacing(2.5)} !important`,
                                "&.active": {
                                    "& .MuiBadge-dot": {
                                        backgroundColor: (theme)=>`${theme.palette.common.white} !important`
                                    }
                                },
                                "& .MuiBadge-dot": {
                                    height: "6px !important",
                                    width: "6px !important",
                                    minWidth: "6px !important"
                                }
                            }
                        }, idx);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    ref: sliderRef,
                    className: "keen-slider",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsWeeklySalesBg_Slides, {})
                })
            ]
        })
    });
};
/* harmony default export */ const statistics_CardStatisticsWeeklySalesBg = (CardStatisticsWeeklySalesBg);

;// CONCATENATED MODULE: ./src/views/ui/cards/statistics/CardStatisticsMarketingSales.js
// ** React Imports


// ** MUI Imports









// ** Third Party Components


// ** Icon Imports

// ** Custom Components Imports

const CardStatisticsMarketingSales_data = [
    {
        title: "Marketing Expense",
        img: "/images/cards/marketing-expense-logo.png",
        details: {
            Operating: "5k",
            Financial: "2k",
            COGF: "6k",
            Expense: "1k"
        }
    },
    {
        title: "Accounting",
        img: "/images/cards/accounting-logo.png",
        details: {
            Billing: "18",
            Sales: "28",
            Leads: "30",
            Impression: "80"
        }
    },
    {
        title: "Sales Overview",
        img: "/images/cards/sales-overview-logo.png",
        details: {
            Open: "68",
            Converted: "52",
            Lost: "04",
            Quotations: "12"
        }
    }
];
const CardStatisticsMarketingSales_Slides = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: CardStatisticsMarketingSales_data.map((slide, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "keen-slider__slide",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mb: 4.5,
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "img",
                                src: slide.img,
                                alt: slide.title,
                                sx: {
                                    mr: 5,
                                    width: 84,
                                    borderRadius: 1
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            mb: 2.5,
                                            fontWeight: 600
                                        },
                                        children: slide.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        container: true,
                                        spacing: 2.5,
                                        children: Object.keys(slide.details).map((key, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                                            skin: "light",
                                                            color: "secondary",
                                                            variant: "rounded",
                                                            sx: {
                                                                mr: 1.5,
                                                                width: 36,
                                                                height: 24,
                                                                fontSize: "0.75rem",
                                                                borderRadius: "6px",
                                                                color: "text.primary"
                                                            },
                                                            children: slide.details[key]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "caption",
                                                            children: key
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                sx: {
                                    mr: 3.5
                                },
                                variant: "outlined",
                                children: "Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                variant: "contained",
                                children: "Report"
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};
const CardStatisticsMarketingSales = ()=>{
    // ** States
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    const [currentSlide, setCurrentSlide] = (0,external_react_.useState)(0);
    // ** Hook
    const theme = (0,styles_.useTheme)();
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        initial: 0,
        rtl: theme.direction === "rtl",
        slides: {
            spacing: 16
        },
        slideChanged (slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created () {
            setLoaded(true);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Marketing & Sales",
                titleTypographyProps: {
                    variant: "h6"
                },
                sx: {
                    "& .swiper-dots": {
                        mt: 0.75,
                        mr: -1.75
                    }
                },
                subheader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        "& svg": {
                            color: "success.main"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            sx: {
                                mr: 1.5
                            },
                            children: "Total 245.8k Sales"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "subtitle2",
                            sx: {
                                color: "success.main"
                            },
                            children: "+25%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:chevron-up",
                            fontSize: 20
                        })
                    ]
                }),
                action: loaded && instanceRef.current && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    className: "swiper-dots",
                    children: [
                        ...Array(instanceRef.current.track.details.slides.length).keys()
                    ].map((idx)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                            variant: "dot",
                            component: "div",
                            className: external_clsx_default()({
                                active: currentSlide === idx
                            }),
                            onClick: ()=>{
                                instanceRef.current?.moveToIdx(idx);
                            },
                            sx: {
                                mr: (theme)=>`${theme.spacing(2.5)} !important`,
                                "& .MuiBadge-dot": {
                                    height: "6px !important",
                                    width: "6px !important",
                                    minWidth: "6px !important"
                                }
                            }
                        }, idx);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    ref: sliderRef,
                    className: "keen-slider",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsMarketingSales_Slides, {})
                })
            })
        ]
    });
};
/* harmony default export */ const statistics_CardStatisticsMarketingSales = (CardStatisticsMarketingSales);

// EXTERNAL MODULE: ./src/@core/styles/libs/keen-slider/index.js
var keen_slider = __webpack_require__(1177);
// EXTERNAL MODULE: ./src/@core/styles/libs/react-apexcharts/index.js
var libs_react_apexcharts = __webpack_require__(37);
;// CONCATENATED MODULE: ./src/pages/ui/cards/statistics/index.js
// ** MUI Imports


// ** Third Party Components

// ** Demo Components Imports










// ** Styled Component Import


const CardStatistics = ({ apiData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(libs_react_apexcharts/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(keen_slider/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsHorizontal, {
                            data: apiData.statsHorizontal
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsCharacters, {
                            data: apiData.statsCharacter
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardStatisticsVertical, {
                            data: apiData.statsVertical
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsCharts, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsCharts2, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsWeeklySales, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsMarketingSales, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsWeeklySalesBg, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsSales, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(statistics_CardStatisticsLiveVisitors, {})
                    })
                ]
            })
        })
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
/* harmony default export */ const statistics = (CardStatistics);


/***/ }),

/***/ 5863:
/***/ ((module) => {

module.exports = require("@iconify/react");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 5168:
/***/ ((module) => {

module.exports = require("@mui/material/Badge");

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

/***/ 1161:
/***/ ((module) => {

module.exports = require("keen-slider/react");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,152,9550,1514,7294,2024,4560,6009,2624,1177,427,7528], () => (__webpack_exec__(9573)));
module.exports = __webpack_exports__;

})();