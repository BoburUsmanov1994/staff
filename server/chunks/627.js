"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 4032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ KEYS)
/* harmony export */ });
const KEYS = {
    login: "login",
    getMe: "getMe",
    forgotPassword: "forgotPassword",
    register: "register",
    company: "company",
    companyCategory: "companyCategory",
    country: "country",
    subscription: "subscription"
};


/***/ }),

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ URLS)
/* harmony export */ });
const URLS = {
    login: "/api/auth/local",
    getMe: "/api/users/me",
    forgotPassword: "/api/auth/forgot-password",
    register: "/api/auth/local/register",
    company: "/api/companies",
    companyCategory: "/api/company-categories",
    country: "/api/countries",
    subscription: "/api/subscribe-types"
};


/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i7": () => (/* reexport */ api_useGetAllQuery),
  "xq": () => (/* reexport */ api_useGetOneQuery),
  "n7": () => (/* reexport */ api_usePostQuery),
  "_E": () => (/* reexport */ api_usePutQuery)
});

// UNUSED EXPORTS: useDeleteQuery, useInfiniteLoadingQuery, usePaginateQuery, useParallelQuery

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/services/api/index.js + 2 modules
var api = __webpack_require__(9144);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./src/hooks/api/useGetAllQuery.js




const useGetAllQuery = ({ key ="get-all" , url ="/" , params ={} , showSuccessMsg =false , hideErrorMsg =false , enabled =true  })=>{
    const { isLoading , isError , data , error , isFetching  } = (0,external_react_query_.useQuery)([
        key,
        params
    ], ()=>api/* request.get */.W.get(url, params), {
        onSuccess: ()=>{},
        onError: (data)=>{
            if (!hideErrorMsg) {
                external_react_toastify_.toast.error(data?.response?.data?.message || `ERROR!!! ${url} api not working`);
            }
        },
        enabled
    });
    return {
        isLoading,
        isError,
        data,
        error,
        isFetching
    };
};
/* harmony default export */ const api_useGetAllQuery = (useGetAllQuery);

;// CONCATENATED MODULE: ./src/hooks/api/useGetOneQuery.js




const fetchRequest = (url, params)=>api/* request.get */.W.get(url, params);
const useGetOneQuery = ({ id =null , key ="get-one" , url ="test" , enabled =true , params ={} , showSuccessMsg =false , showErrorMsg =true  })=>{
    const { isLoading , isError , data , error  } = (0,external_react_query_.useQuery)([
        key,
        id
    ], ()=>fetchRequest(`${url}/${id}`, params), {
        onSuccess: ()=>{},
        onError: (data)=>{
            if (showErrorMsg) {
                external_react_toastify_.toast.error(data?.response?.data?.message || `ERROR!!! api not working`);
            }
        },
        enabled
    });
    return {
        isLoading,
        isError,
        data,
        error
    };
};
/* harmony default export */ const api_useGetOneQuery = (useGetOneQuery);

;// CONCATENATED MODULE: ./src/hooks/api/usePostQuery.js




const postRequest = (url, attributes, config = {})=>api/* request.post */.W.post(url, attributes, config);
const usePostQuery = ({ hideSuccessToast =false , listKeyId =null  })=>{
    const queryClient = (0,external_react_query_.useQueryClient)();
    const { mutate , isLoading , isError , error , isFetching  } = (0,external_react_query_.useMutation)(({ url , attributes , config ={}  })=>postRequest(url, attributes, config), {
        onSuccess: (data)=>{
            if (!hideSuccessToast) {
                external_react_toastify_.toast.success(data?.data?.message || "SUCCESS");
            }
            if (listKeyId) {
                queryClient.invalidateQueries(listKeyId);
            }
        },
        onError: (data)=>{
            external_react_toastify_.toast.error(data?.response?.data?.message || "ERROR");
        }
    });
    return {
        mutate,
        isLoading,
        isError,
        error,
        isFetching
    };
};
/* harmony default export */ const api_usePostQuery = (usePostQuery);

;// CONCATENATED MODULE: ./src/hooks/api/useDeleteQuery.js




const deleteRequest = (url)=>request.delete(url);
const useDeleteQuery = ({ listKeyId =null  })=>{
    const queryClient = useQueryClient();
    const { mutate , isLoading , isError , error , isFetching  } = useMutation(({ url  })=>deleteRequest(url), {
        onSuccess: (data)=>{
            toast.success(data?.data?.message || "SUCCESSFULLY DELETED");
            if (listKeyId) {
                queryClient.invalidateQueries(listKeyId);
            }
        },
        onError: (data)=>{
            toast.error(data?.response?.data?.message || "ERROR");
        }
    });
    return {
        mutate,
        isLoading,
        isError,
        error,
        isFetching
    };
};
/* harmony default export */ const api_useDeleteQuery = ((/* unused pure expression or super */ null && (useDeleteQuery)));

;// CONCATENATED MODULE: ./src/hooks/api/usePutQuery.js




const putRequest = (url, attributes, config)=>api/* request.put */.W.put(url, attributes, config);
const usePutQuery = ({ hideSuccessToast =false , listKeyId =null  })=>{
    const queryClient = (0,external_react_query_.useQueryClient)();
    const { mutate , isLoading , isError , error , isFetching  } = (0,external_react_query_.useMutation)(({ url , attributes , config  })=>putRequest(url, attributes, config), {
        onSuccess: (data)=>{
            if (!hideSuccessToast) {
                external_react_toastify_.toast.success(data?.data?.message || "SUCCESS");
            }
            if (listKeyId) {
                queryClient.invalidateQueries(listKeyId);
            }
        },
        onError: (data)=>{
            external_react_toastify_.toast.error(data?.response?.data?.message || "ERROR");
        }
    });
    return {
        mutate,
        isLoading,
        isError,
        error,
        isFetching
    };
};
/* harmony default export */ const api_usePutQuery = (usePutQuery);

;// CONCATENATED MODULE: ./src/hooks/api/usePaginateQuery.js




const usePaginateQuery = ({ key ="get-all" , url ="/" , page =1 , params ={} , showSuccessMsg =false , showErrorMsg =false  })=>{
    const { isLoading , isError , data , error , isFetching  } = useQuery([
        key,
        page
    ], ()=>request.get(`${url}?page=${page}`, params), {
        keepPreviousData: true,
        onSuccess: ()=>{
            if (showSuccessMsg) {
                toast.success("SUCCESS");
            }
        },
        onError: (data)=>{
            if (showErrorMsg) {
                toast.error(data?.response?.data?.message || `ERROR`);
            }
        }
    });
    return {
        isLoading,
        isError,
        data,
        error,
        isFetching
    };
};
/* harmony default export */ const api_usePaginateQuery = ((/* unused pure expression or super */ null && (usePaginateQuery)));

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/hooks/api/useInfiniteLoadingQuery.js


const UseInfiniteLoadingQuery = ()=>{
    return /*#__PURE__*/ _jsx("div", {});
};
/* harmony default export */ const useInfiniteLoadingQuery = ((/* unused pure expression or super */ null && (UseInfiniteLoadingQuery)));

;// CONCATENATED MODULE: ./src/hooks/api/useParallelQuery.js


const UseParallelQuery = ()=>{
    return /*#__PURE__*/ _jsx("div", {});
};
/* harmony default export */ const useParallelQuery = ((/* unused pure expression or super */ null && (UseParallelQuery)));

;// CONCATENATED MODULE: ./src/hooks/api/index.js











/***/ })

};
;