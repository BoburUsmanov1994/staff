"use strict";
exports.id = 9913;
exports.ids = [9913];
exports.modules = {

/***/ 9913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ card_snippet)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/ToggleButton"
var ToggleButton_ = __webpack_require__(6781);
var ToggleButton_default = /*#__PURE__*/__webpack_require__.n(ToggleButton_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/ToggleButtonGroup"
var ToggleButtonGroup_ = __webpack_require__(5951);
var ToggleButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ToggleButtonGroup_);
// EXTERNAL MODULE: ./src/@core/components/icon/index.js
var icon = __webpack_require__(1609);
// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__(8871);
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: external "clipboard-copy"
var external_clipboard_copy_ = __webpack_require__(4741);
var external_clipboard_copy_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_copy_);
;// CONCATENATED MODULE: ./src/@core/hooks/useClipboard.js
// ** React Imports

// ** Third Party Imports

const isInputLike = (node)=>{
    return node && (node.nodeName === "TEXTAREA" || node.nodeName === "INPUT");
};
const useClipboard = (options = {})=>{
    const targetRef = (0,external_react_.useRef)(null);
    const handleSuccess = ()=>{
        if (options.onSuccess) {
            options.onSuccess();
        }
        if (options.selectOnCopy && isInputLike(targetRef.current)) {
            targetRef.current.select();
        }
    };
    const handleError = ()=>{
        if (options.onError) {
            options.onError();
        }
        const selectOnError = options.selectOnError !== false;
        if (selectOnError && isInputLike(targetRef.current)) {
            targetRef.current.select();
        }
    };
    const clipboardCopy = (text)=>{
        external_clipboard_copy_default()(text).then(handleSuccess).catch(handleError);
    };
    const copyHandler = (0,external_react_.useCallback)((text)=>{
        if (typeof text === "string") {
            clipboardCopy(text);
        } else if (targetRef.current) {
            clipboardCopy(targetRef.current.value);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        copy: copyHandler,
        target: targetRef
    };
};
/* harmony default export */ const hooks_useClipboard = (useClipboard);

;// CONCATENATED MODULE: ./src/@core/components/card-snippet/index.js
// ** React Imports


// ** MUI Imports











// ** Icon Imports

// ** Third Party Components


// ** Hooks

const CardSnippet = (props)=>{
    // ** Props
    const { id , sx , code , title , children , className  } = props;
    // ** States
    const [showCode, setShowCode] = (0,external_react_.useState)(false);
    const [tabValue, setTabValue] = (0,external_react_.useState)(code.tsx !== null ? "tsx" : "jsx");
    // ** Hooks
    const clipboard = hooks_useClipboard();
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("md"));
    // ** Highlight code on mount
    (0,external_react_.useEffect)(()=>{
        external_prismjs_default().highlightAll();
    }, [
        showCode,
        tabValue
    ]);
    const codeToCopy = ()=>{
        if (code.tsx !== null && tabValue === "tsx") {
            return code.tsx.props.children.props.children;
        } else if (code.jsx !== null && tabValue === "jsx") {
            return code.jsx.props.children.props.children;
        } else {
            return "";
        }
    };
    const handleClick = ()=>{
        clipboard.copy(codeToCopy());
        external_react_hot_toast_default().success("The source code has been copied to your clipboard.", {
            duration: 2000
        });
    };
    const renderCode = ()=>{
        if (code[tabValue] !== null) {
            return code[tabValue];
        } else {
            return null;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        className: className,
        sx: {
            "& .MuiCardHeader-action": {
                lineHeight: 0.8
            },
            ...sx
        },
        id: id || `card-snippet--${title.toLowerCase().replace(/ /g, "-")}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: title,
                ...hidden ? {} : {
                    action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        onClick: ()=>setShowCode(!showCode),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                            icon: "mdi:code-tags",
                            fontSize: 20
                        })
                    })
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: children
            }),
            hidden ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Collapse_default()), {
                in: showCode,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            my: "0 !important"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        sx: {
                            position: "relative",
                            "& pre": {
                                m: "0 !important",
                                maxHeight: 500
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    mb: 4,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButtonGroup_default()), {
                                    exclusive: true,
                                    size: "small",
                                    color: "primary",
                                    value: tabValue,
                                    onChange: (e, newValue)=>newValue !== null ? setTabValue(newValue) : null,
                                    children: [
                                        code.tsx !== null ? /*#__PURE__*/ jsx_runtime_.jsx((ToggleButton_default()), {
                                            value: "tsx",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:language-typescript",
                                                fontSize: 20
                                            })
                                        }) : null,
                                        code.jsx !== null ? /*#__PURE__*/ jsx_runtime_.jsx((ToggleButton_default()), {
                                            value: "jsx",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                                icon: "mdi:language-javascript",
                                                fontSize: 20
                                            })
                                        }) : null
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Copy the source",
                                placement: "top",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: handleClick,
                                    sx: {
                                        top: "5rem",
                                        color: "grey.100",
                                        right: "2.5625rem",
                                        position: "absolute"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* default */.Z, {
                                        icon: "mdi:content-copy",
                                        fontSize: 20
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: renderCode()
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const card_snippet = (CardSnippet);


/***/ })

};
;