webpackHotUpdate("main",{

/***/ "./src/views/client/requests/request/UploadSpecSheetBtn.tsx":
/*!******************************************************************!*\
  !*** ./src/views/client/requests/request/UploadSpecSheetBtn.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadSpecSheetBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _reviewer_common_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reviewer/common/LoadingButton */ "./src/views/reviewer/common/LoadingButton.tsx");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CloudUpload */ "./node_modules/@material-ui/icons/CloudUpload.js");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _reviewer_common_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reviewer/common/types */ "./src/views/reviewer/common/types.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\UploadSpecSheetBtn.tsx",
    _s = __webpack_require__.$Refresh$.signature();









function UploadSpecSheetBtn({
  productId
}) {
  _s();

  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [doc, setDoc] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const updateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const documentCopy = document && Object.assign({}, document) || null; // const [file, setFile] = useState<Document | null>(documentCopy);

  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/product/${productId}/documents`).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        console.log(response.data);
        setDoc(response.data[0]);
      } else {
        console.log(response);
        enqueueSnackbar("Failed to retrieve product spec sheet.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to retrieve product spec sheet.", {
        variant: "error"
      });
    });
  }, []);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDocumentUploadButton = () => {
    // @ts-ignore
    if (inputRef) inputRef.current.click();
  };

  const handleDocumentUpdateButton = () => {
    // @ts-ignore
    if (inputRef) updateInputRef.current.click();
  }; // const setDocumentHandler = (document: Document) => {
  //   setDoc(document as ProductDocument);
  //   console.log(doc);
  // };
  // const updateDocHandler = (doc: Document, documentId: number) => {
  //   const formData = new FormData();
  //   formData.append("document", doc);
  //   return axios.post(`/api/client/product/document/${documentId}`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // };
  // const deleteDocHandler = (documentId: number) => {
  //   setDoc(doc.filter((d) => d.id !== documentId));
  //   return axios.delete("/api/client/product/document/" + documentId);
  // };


  const handleDocumentUpload = e => {
    const _doc = e.target.files[0];
    if (!_doc) return;

    if (_doc.size > _config__WEBPACK_IMPORTED_MODULE_6__["MAX_ALLOWED_SIZE"]) {
      alert("File exceeds the maximum allowed size of 10 MB.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("document", _doc);
    formData.append("type", _reviewer_common_types__WEBPACK_IMPORTED_MODULE_7__["ProductDocumentType"].SPEC_SHEETS.toString());
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/product/${productId}/document`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        // console.log(response.data);
        // setDoc(response.data);
        // setDocument(response.data);
        setDoc(response.data);
        enqueueSnackbar(`Uploaded product spec successfully.`, {
          variant: "success"
        });
      } else {
        console.log(response);
        enqueueSnackbar(`Product spec sheet upload failed.`, {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar(`Product spec sheet upload failed.`, {
        variant: "error"
      });
    });
  };

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: inputRef,
    type: "file",
    name: "file",
    id: Math.random().toString(),
    accept: "application/msword, application/pdf",
    "data-title": "Upload" // multiple
    // data-multiple-caption="{count} files selected"
    ,
    onChange: handleDocumentUpload,
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "A product specification sheet is a technical document that outlines the features of a product in detail. It explains and describes the product, what it is, what it does, what its components are and any special features it has. It also provides any other important additional information such as hazard and allergy warnings.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviewer_common_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: loading,
    done: doc != null,
    onClick: handleDocumentUploadButton,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 22
      }
    }),
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, "Product Spec Sheet")));
}

_s(UploadSpecSheetBtn, "+xLhmwEHpPrHAySkyxo3OSvwl6k=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

_c = UploadSpecSheetBtn;

var _c;

__webpack_require__.$Refresh$.register(_c, "UploadSpecSheetBtn");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.2c5d18a677fb4c233cf2.hot-update.js.map