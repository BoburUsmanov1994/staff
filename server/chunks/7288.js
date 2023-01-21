"use strict";
exports.id = 7288;
exports.ids = [7288];
exports.modules = {

/***/ 6701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    meEndpoint: "/api/users/me",
    loginEndpoint: "/api/auth/local",
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: "accessToken",
    onTokenExpiration: "refreshToken" // logout | refreshToken
});


/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_configs_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6701);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9144);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
// ** React Imports


// ** Next Import

// ** Axios

// ** Config



// ** Defaults
const defaultProvider = {
    user: null,
    loading: true,
    setUser: ()=>null,
    setLoading: ()=>Boolean,
    login: ()=>Promise.resolve(),
    logout: ()=>Promise.resolve(),
    register: ()=>Promise.resolve(),
    checkAuth: ()=>Promise.resolve()
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultProvider);
const AuthProvider = ({ children  })=>{
    // ** States
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultProvider.user);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultProvider.loading);
    // ** Hooks
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const initAuth = async ()=>{
            checkAuth();
        };
        initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleLogin = (params, errorCallback)=>{
        _services_api__WEBPACK_IMPORTED_MODULE_5__/* .request.post */ .W.post(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].loginEndpoint */ .Z.loginEndpoint, params).then(async (response)=>{
            window.localStorage.setItem(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].storageTokenKeyName */ .Z.storageTokenKeyName, response.data?.jwt);
            const returnUrl = router.query.returnUrl;
            setUser({
                ...response.data.userData
            });
            window.localStorage.setItem("userData", JSON.stringify(response.data?.user));
            const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
            router.replace(redirectURL);
            checkAuth();
        }).catch((err)=>{
            if (errorCallback) errorCallback(err);
        });
    };
    const handleLogout = ()=>{
        setUser(null);
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].storageTokenKeyName */ .Z.storageTokenKeyName);
        router.push("/login");
    };
    const handleRegister = (params, errorCallback)=>{
        axios__WEBPACK_IMPORTED_MODULE_3___default().post(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].registerEndpoint */ .Z.registerEndpoint, params).then((res)=>{
            if (res.data.error) {
                if (errorCallback) errorCallback(res.data.error);
            } else {
                handleLogin({
                    email: params.email,
                    password: params.password
                });
            }
        }).catch((err)=>errorCallback ? errorCallback(err) : null);
    };
    const checkAuth = async (token = null)=>{
        if (token) {
            setLoading(true);
            await _services_api__WEBPACK_IMPORTED_MODULE_5__/* .request.get */ .W.get(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].meEndpoint */ .Z.meEndpoint, {
                params: {
                    populate: "*"
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(async (response)=>{
                window.localStorage.setItem("accessToken", token);
                setUser({
                    ...response.data
                });
                window.localStorage.setItem("userData", JSON.stringify(response.data));
                setLoading(false);
                setUser({
                    ...response.data
                });
            }).catch(()=>{
                localStorage.removeItem("userData");
                localStorage.removeItem("accessToken");
                setUser(null);
                setLoading(false);
                if (src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].onTokenExpiration */ .Z.onTokenExpiration === "logout" && !router.pathname.includes("login")) {
                    router.replace("/login");
                }
            });
        } else {
            const storedToken = window.localStorage.getItem(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].storageTokenKeyName */ .Z.storageTokenKeyName);
            if (storedToken) {
                setLoading(true);
                await _services_api__WEBPACK_IMPORTED_MODULE_5__/* .request.get */ .W.get(src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].meEndpoint */ .Z.meEndpoint, {
                    params: {
                        populate: "*"
                    }
                }).then(async (response)=>{
                    setLoading(false);
                    setUser({
                        ...response.data
                    });
                // if(get(response,'data.company')) {
                //
                // }else{
                //   localStorage.removeItem('userData')
                //   localStorage.removeItem('accessToken')
                //   setUser(null)
                //   router.replace({
                //     pathname: '/register',
                //     query: {token: storedToken, userId: get(response, 'data.id')}
                //   })
                // }
                }).catch(()=>{
                    localStorage.removeItem("userData");
                    localStorage.removeItem("accessToken");
                    setUser(null);
                    setLoading(false);
                    if (src_configs_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].onTokenExpiration */ .Z.onTokenExpiration === "logout" && !router.pathname.includes("login")) {
                        router.replace("/login");
                    }
                });
            } else {
                setLoading(false);
            }
        }
    };
    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister,
        checkAuth: checkAuth
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: values,
        children: children
    });
};



/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V);


/***/ })

};
;