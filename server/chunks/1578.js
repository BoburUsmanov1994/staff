"use strict";
exports.id = 1578;
exports.ids = [1578];
exports.modules = {

/***/ 1578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bt": () => (/* binding */ deleteEvent),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cW": () => (/* binding */ handleSelectEvent),
/* harmony export */   "eJ": () => (/* binding */ updateEvent),
/* harmony export */   "ns": () => (/* binding */ handleCalendarsUpdate),
/* harmony export */   "sZ": () => (/* binding */ fetchEvents),
/* harmony export */   "uL": () => (/* binding */ handleAllCalendars),
/* harmony export */   "vP": () => (/* binding */ addEvent)
/* harmony export */ });
/* unused harmony export appCalendarSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
// ** Redux Imports

// ** Axios Imports

// ** Fetch Events
const fetchEvents = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appCalendar/fetchEvents", async (calendars)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/apps/calendar/events", {
        params: {
            calendars
        }
    });
    return response.data;
});
// ** Add Event
const addEvent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appCalendar/addEvent", async (event, { dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/apps/calendar/add-event", {
        data: {
            event
        }
    });
    await dispatch(fetchEvents([
        "Personal",
        "Business",
        "Family",
        "Holiday",
        "ETC"
    ]));
    return response.data.event;
});
// ** Update Event
const updateEvent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appCalendar/updateEvent", async (event, { dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/apps/calendar/update-event", {
        data: {
            event
        }
    });
    await dispatch(fetchEvents([
        "Personal",
        "Business",
        "Family",
        "Holiday",
        "ETC"
    ]));
    return response.data.event;
});
// ** Delete Event
const deleteEvent = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appCalendar/deleteEvent", async (id, { dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/apps/calendar/remove-event", {
        params: {
            id
        }
    });
    await dispatch(fetchEvents([
        "Personal",
        "Business",
        "Family",
        "Holiday",
        "ETC"
    ]));
    return response.data;
});
const appCalendarSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appCalendar",
    initialState: {
        events: [],
        selectedEvent: null,
        selectedCalendars: [
            "Personal",
            "Business",
            "Family",
            "Holiday",
            "ETC"
        ]
    },
    reducers: {
        handleSelectEvent: (state, action)=>{
            state.selectedEvent = action.payload;
        },
        handleCalendarsUpdate: (state, action)=>{
            const filterIndex = state.selectedCalendars.findIndex((i)=>i === action.payload);
            if (state.selectedCalendars.includes(action.payload)) {
                state.selectedCalendars.splice(filterIndex, 1);
            } else {
                state.selectedCalendars.push(action.payload);
            }
            if (state.selectedCalendars.length === 0) {
                state.events.length = 0;
            }
        },
        handleAllCalendars: (state, action)=>{
            const value = action.payload;
            if (value === true) {
                state.selectedCalendars = [
                    "Personal",
                    "Business",
                    "Family",
                    "Holiday",
                    "ETC"
                ];
            } else {
                state.selectedCalendars = [];
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchEvents.fulfilled, (state, action)=>{
            state.events = action.payload;
        });
    }
});
const { handleSelectEvent , handleCalendarsUpdate , handleAllCalendars  } = appCalendarSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appCalendarSlice.reducer);


/***/ })

};
;