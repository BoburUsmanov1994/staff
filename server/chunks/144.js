"use strict";
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 9144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ request)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
;// CONCATENATED MODULE: ./src/services/storage/index.js
const storage = {
    get: (key)=>{
        return window.localStorage && window.localStorage.getItem(key) || null;
    },
    set: (key, value)=>{
        if (!value || value.length <= 0) {
            return;
        }
        if (window.localStorage) {
            window.localStorage.setItem(key, value);
        }
    },
    remove: (key)=>{
        if (window.localStorage && window.localStorage[key]) {
            window.localStorage.removeItem(key);
        }
    }
};
/* harmony default export */ const services_storage = (storage);

;// CONCATENATED MODULE: ./src/configs/index.js
const config = {
    API_ROOT: "http://128.199.195.39:1337/",
    FILE_URL: "http://128.199.195.39:1337/",
    DEFAULT_APP_LANG: "en",
    ROLES: [],
    PERMISSIONS: []
};
/* harmony default export */ const configs = (config);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(3477);
;// CONCATENATED MODULE: ./src/services/api/index.js






external_nprogress_default().configure({
    showSpinner: true,
    trickleRate: 0.02,
    trickleSpeed: 400,
    easing: "ease",
    speed: 200
});
const request = external_axios_default().create({
    baseURL: configs.API_ROOT,
    params: {}
});
request.interceptors.request.use((config)=>{
    config.paramsSerializer = function() {
        return external_querystring_.stringify(config.params, {
            encodeValuesOnly: true
        });
    };
    external_nprogress_default().inc();
    const token = services_storage.get("accessToken");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    external_nprogress_default().done(true);
    console.log(error);
});
request.interceptors.response.use((response)=>{
    external_nprogress_default().done(true);
    return response;
}, (error)=>{
    const statusCode = error.response.status;
    console.log("error", error?.response);
    if (statusCode == 401) {
        window.localStorage.clear();
    }
    external_nprogress_default().done(true);
    return Promise.reject(error);
});



/***/ })

};
;