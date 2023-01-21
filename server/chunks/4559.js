"use strict";
exports.id = 4559;
exports.ids = [4559];
exports.modules = {

/***/ 4559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AS": () => (/* binding */ updateMail),
/* harmony export */   "ER": () => (/* binding */ handleSelectAllMail),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d7": () => (/* binding */ fetchMails),
/* harmony export */   "dJ": () => (/* binding */ updateMailLabel),
/* harmony export */   "el": () => (/* binding */ handleSelectMail),
/* harmony export */   "xg": () => (/* binding */ getCurrentMail),
/* harmony export */   "zM": () => (/* binding */ paginateMail)
/* harmony export */ });
/* unused harmony export appEmailSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
// ** Redux Imports

// ** Axios Imports

// ** Fetch Mails
const fetchMails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appEmail/fetchMails", async (params)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/email/emails", {
        params
    });
    return {
        ...response.data,
        filter: params
    };
});
// ** Get Current Mail
const getCurrentMail = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appEmail/selectMail", async (id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/email/get-email", {
        params: {
            id
        }
    });
    return response.data;
});
// ** Update Mail
const updateMail = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appEmail/updateMail", async (params, { dispatch , getState  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/apps/email/update-emails", {
        data: {
            emailIds: params.emailIds,
            dataToUpdate: params.dataToUpdate
        }
    });
    await dispatch(fetchMails(getState().email.filter));
    if (Array.isArray(params.emailIds)) {
        await dispatch(getCurrentMail(params.emailIds[0]));
    }
    return response.data;
});
// ** Update Mail Label
const updateMailLabel = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appEmail/updateMailLabel", async (params, { dispatch , getState  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/apps/email/update-emails-label", {
        data: {
            emailIds: params.emailIds,
            label: params.label
        }
    });
    await dispatch(fetchMails(getState().email.filter));
    if (Array.isArray(params.emailIds)) {
        await dispatch(getCurrentMail(params.emailIds[0]));
    }
    return response.data;
});
// ** Prev/Next Mails
const paginateMail = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appEmail/paginateMail", async (params)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/email/paginate-email", {
        params
    });
    return response.data;
});
const appEmailSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appEmail",
    initialState: {
        mails: null,
        mailMeta: null,
        filter: {
            q: "",
            label: "",
            folder: "inbox"
        },
        currentMail: null,
        selectedMails: []
    },
    reducers: {
        handleSelectMail: (state, action)=>{
            const mails = state.selectedMails;
            if (!mails.includes(action.payload)) {
                mails.push(action.payload);
            } else {
                mails.splice(mails.indexOf(action.payload), 1);
            }
            state.selectedMails = mails;
        },
        handleSelectAllMail: (state, action)=>{
            const selectAllMails = [];
            if (action.payload && state.mails !== null) {
                selectAllMails.length = 0;
                // @ts-ignore
                state.mails.forEach((mail)=>selectAllMails.push(mail.id));
            } else {
                selectAllMails.length = 0;
            }
            state.selectedMails = selectAllMails;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMails.fulfilled, (state, action)=>{
            state.mails = action.payload.emails;
            state.filter = action.payload.filter;
            state.mailMeta = action.payload.emailsMeta;
        });
        builder.addCase(getCurrentMail.fulfilled, (state, action)=>{
            state.currentMail = action.payload;
        });
        builder.addCase(paginateMail.fulfilled, (state, action)=>{
            state.currentMail = action.payload;
        });
    }
});
const { handleSelectMail , handleSelectAllMail  } = appEmailSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appEmailSlice.reducer);


/***/ })

};
;