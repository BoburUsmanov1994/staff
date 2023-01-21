exports.id = 1177;
exports.ids = [1177];
exports.modules = {

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6443);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__);
// ** MUI imports

// ** KeenSlider CSS

const KeenSliderWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        "& .keen-slider": {
            "& .keen-slider__slide": {
                "& img": {
                    height: "auto",
                    maxWidth: "100%"
                }
            },
            "&.thumbnail .keen-slider__slide:not(.active)": {
                opacity: 0.4
            },
            "&.zoom-out": {
                perspective: "1000px",
                "& .zoom-out__slide": {
                    "& .slider-content-wrapper": {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        "& img": {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            backgroundColor: "transparent"
                        }
                    }
                }
            },
            "& .default-slide": {
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.background.default
            }
        },
        //  ** Fade
        "& .fader": {
            position: "relative",
            overflow: "hidden",
            "& .fader__slide": {
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                "& img": {
                    width: " 100%",
                    height: " 100%",
                    objectFit: "cover",
                    position: "absolute"
                }
            }
        },
        // ** Navigation Controls
        "& .navigation-wrapper": {
            position: "relative",
            "& .arrow": {
                top: "50%",
                width: "3rem",
                height: "3rem",
                cursor: "pointer",
                position: "absolute",
                transform: "translateY(-50%)",
                color: theme.palette.common.white,
                ...theme.direction === "rtl" ? {
                    transform: "translateY(-50%) rotate(180deg)"
                } : {},
                "&.arrow-disabled": {
                    cursor: "not-allowed",
                    pointerEvents: "none",
                    color: theme.palette.action.disabled
                },
                "&.arrow-left": {
                    left: 0
                },
                "&.arrow-right": {
                    right: 0
                }
            }
        },
        // ** Dots
        "& .swiper-dots": {
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(4),
            "& .MuiBadge-root": {
                "&:not(:last-child)": {
                    marginRight: theme.spacing(4)
                },
                "& .MuiBadge-dot": {
                    width: 10,
                    height: 10,
                    cursor: "pointer",
                    borderRadius: "50%",
                    backgroundColor: theme.palette.action.disabled
                },
                "&.active .MuiBadge-dot": {
                    backgroundColor: theme.palette.primary.main
                }
            }
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeenSliderWrapper);


/***/ }),

/***/ 6443:
/***/ (() => {



/***/ })

};
;