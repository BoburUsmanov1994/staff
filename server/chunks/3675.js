"use strict";
exports.id = 3675;
exports.ids = [3675];
exports.modules = {

/***/ 3675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cn": () => (/* binding */ addUser),
/* harmony export */   "h8": () => (/* binding */ deleteUser),
/* harmony export */   "rQ": () => (/* binding */ fetchData)
/* harmony export */ });
/* unused harmony export appUsersSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

// ** Axios Imports

// ** Fetch Users
const fetchData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/fetchData", async (params)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/users/list", {
        params
    });
    return response.data;
});
// ** Add User
const addUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/addUser", async (data, { getState , dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/apps/users/add-user", {
        data
    });
    dispatch(fetchData(getState().user.params));
    return response.data;
});
// ** Delete User
const deleteUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/deleteUser", async (id, { getState , dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/apps/users/delete", {
        data: id
    });
    dispatch(fetchData(getState().user.params));
    return response.data;
});
const appUsersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appUsers",
    initialState: {
        data: [],
        total: 1,
        params: {},
        allData: []
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.data = action.payload.users;
            state.total = action.payload.total;
            state.params = action.payload.params;
            state.allData = action.payload.allData;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appUsersSlice.reducer);


/***/ })

};
;