"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wu": () => (/* binding */ deleteInvoice),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rQ": () => (/* binding */ fetchData)
/* harmony export */ });
/* unused harmony export appInvoiceSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

// ** Axios Imports

// ** Fetch Invoices
const fetchData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appInvoice/fetchData", async (params)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/invoice/invoices", {
        params
    });
    return response.data;
});
const deleteInvoice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appInvoice/deleteData", async (id, { getState , dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/apps/invoice/delete", {
        data: id
    });
    await dispatch(fetchData(getState().invoice.params));
    return response.data;
});
const appInvoiceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appInvoice",
    initialState: {
        data: [],
        total: 1,
        params: {},
        allData: []
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.data = action.payload.invoices;
            state.params = action.payload.params;
            state.allData = action.payload.allData;
            state.total = action.payload.total;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appInvoiceSlice.reducer);


/***/ })

};
;