"use strict";
exports.id = 5538;
exports.ids = [5538];
exports.modules = {

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pu": () => (/* binding */ fetchChatsContacts),
/* harmony export */   "YI": () => (/* binding */ fetchUserProfile),
/* harmony export */   "Z1": () => (/* binding */ selectChat),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "g_": () => (/* binding */ sendMsg),
/* harmony export */   "sr": () => (/* binding */ removeSelectedChat)
/* harmony export */ });
/* unused harmony export appChatSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
// ** Redux Imports

// ** Axios Imports

// ** Fetch User Profile
const fetchUserProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appChat/fetchUserProfile", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/chat/users/profile-user");
    return response.data;
});
// ** Fetch Chats & Contacts
const fetchChatsContacts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appChat/fetchChatsContacts", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/chat/chats-and-contacts");
    return response.data;
});
// ** Select Chat
const selectChat = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appChat/selectChat", async (id, { dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/chat/get-chat", {
        params: {
            id
        }
    });
    await dispatch(fetchChatsContacts());
    return response.data;
});
// ** Send Msg
const sendMsg = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appChat/sendMsg", async (obj, { dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/apps/chat/send-msg", {
        data: {
            obj
        }
    });
    if (obj.contact) {
        await dispatch(selectChat(obj.contact.id));
    }
    await dispatch(fetchChatsContacts());
    return response.data;
});
const appChatSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appChat",
    initialState: {
        chats: null,
        contacts: null,
        userProfile: null,
        selectedChat: null
    },
    reducers: {
        removeSelectedChat: (state)=>{
            state.selectedChat = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUserProfile.fulfilled, (state, action)=>{
            state.userProfile = action.payload;
        });
        builder.addCase(fetchChatsContacts.fulfilled, (state, action)=>{
            state.contacts = action.payload.contacts;
            state.chats = action.payload.chatsContacts;
        });
        builder.addCase(selectChat.fulfilled, (state, action)=>{
            state.selectedChat = action.payload;
        });
    }
});
const { removeSelectedChat  } = appChatSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appChatSlice.reducer);


/***/ })

};
;