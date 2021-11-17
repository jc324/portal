webpackHotUpdate("main",{

/***/ "./src/views/client/requests/request/FacilityStepDoc.tsx":
/*!***************************************************************!*\
  !*** ./src/views/client/requests/request/FacilityStepDoc.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilityStepDoc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _reviewer_common_UploadDocumentListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../reviewer/common/UploadDocumentListItem */ "./src/views/reviewer/common/UploadDocumentListItem.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\FacilityStepDoc.tsx",
    _s = __webpack_require__.$Refresh$.signature();







function FacilityStepDoc({
  facilityId,
  type,
  setGreenLight
}) {
  _s();

  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [docs, setDocs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const isEmpty = !!docs.filter(d => d.type === type.toString()).length;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(type);
    console.log(isEmpty);
    setGreenLight(isEmpty);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/facility/${facilityId}/documents`).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        setDocs(response.data);
      } else {
        console.log(response);
        enqueueSnackbar("Failed to retrieve facility documents.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to retrieve facility documents.", {
        variant: "error"
      });
    });
  }, []);

  const setDocumentHandler = document => {
    setDocs([...docs, document]);
    console.log(docs);
  };

  const uploadDocHandler = (doc, expiresAt) => {
    const formData = new FormData();
    formData.append("document", doc);
    formData.append("type", type.toString());
    formData.append("expires_at", moment__WEBPACK_IMPORTED_MODULE_2___default()(expiresAt).format("YYYY-MM-DD HH:mm:ss"));
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/facility/${facilityId}/document`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  const updateDocHandler = (doc, documentId) => {
    const formData = new FormData();
    formData.append("document", doc);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/facility/document/${documentId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  const deleteDocHandler = documentId => {
    setDocs(docs.filter(d => d.id !== documentId));
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/client/facility/document/" + documentId);
  };

  const changeDateHandler = (documentId, expiresAt) => {
    const _docs = docs.map(d => {
      if (d.id !== documentId) return d;
      d.expires_at = moment__WEBPACK_IMPORTED_MODULE_2___default()(expiresAt).format("YYYY-MM-DD HH:mm:ss");
      return d;
    });

    setDocs(_docs);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/facility/document/${documentId}/expires-at`, {
      expires_at: moment__WEBPACK_IMPORTED_MODULE_2___default()(expiresAt).format("YYYY-MM-DD HH:mm:ss")
    });
  };

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    style: {
      maxHeight: "calc(100vh - 276px)",
      overflowY: "auto",
      overflowX: "hidden",
      width: "100%" // padding: "20px 0",

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviewer_common_UploadDocumentListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fileTypeName: "Upload Document",
    document: docs.filter(d => d.type == type.toString())[0],
    setDocument: setDocumentHandler,
    uploadHandler: (doc, selectedDate) => uploadDocHandler(doc, selectedDate),
    updateHandler: updateDocHandler,
    deleteHandler: deleteDocHandler,
    dateChangeHandler: changeDateHandler,
    requireExpirationDate: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })));
}

_s(FacilityStepDoc, "KWD54mN9ymqvPv7uoYXBC8FyU+I=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"]];
});

_c = FacilityStepDoc;

var _c;

__webpack_require__.$Refresh$.register(_c, "FacilityStepDoc");

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
//# sourceMappingURL=main.384ceb02bee91c183bf6.hot-update.js.map