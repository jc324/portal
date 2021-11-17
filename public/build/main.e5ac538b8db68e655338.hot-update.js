webpackHotUpdate("main",{

/***/ "./src/views/client/requests/request/IngredientsView.tsx":
/*!***************************************************************!*\
  !*** ./src/views/client/requests/request/IngredientsView.tsx ***!
  \***************************************************************/
/*! exports provided: default, IngredientItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IngredientsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientItem", function() { return IngredientItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_icons_SubdirectoryArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/SubdirectoryArrowRight */ "./node_modules/@material-ui/icons/SubdirectoryArrowRight.js");
/* harmony import */ var _material_ui_icons_SubdirectoryArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SubdirectoryArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _IngredientDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IngredientDialog */ "./src/views/client/requests/request/IngredientDialog.tsx");
/* harmony import */ var _UploadCertOrDisclosureBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UploadCertOrDisclosureBtn */ "./src/views/client/requests/request/UploadCertOrDisclosureBtn.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\IngredientsView.tsx",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();










function IngredientsView({
  productId
}) {
  _s();

  const classes = useStyles();
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_6__["useSnackbar"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [ingredients, setIngredients] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const load = () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/product/${productId}/ingredients`).then(async response => {
    setLoading(false);

    if (response.status == 200 || response.status == 201) {
      setIngredients(response.data.reverse());
    } else {
      console.log(response);
      enqueueSnackbar("Failed to retrieve product ingredients.", {
        variant: "error"
      });
    }
  }).catch(e => {
    console.error(e);
    setLoading(false);
    enqueueSnackbar("Failed to retrieve product ingredients.", {
      variant: "error"
    });
  });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    load();
  }, []);

  const handleIngredientAdd = product => {
    // setIngredients([product, ...ingredients]);
    load();
  };

  const handleIngredientUpdate = (product, i) => {
    // const newIngredients = insert<Ingredient>(ingredients, i, product);
    // setIngredients(newIngredients);
    load();
  };

  const handleIngredientDelete = productId => {
    setIngredients(ingredients.filter(p => p.id != productId));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 20
    }
  }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    className: classes.ingredientList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, ingredients.length && ingredients.map((ingredient, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IngredientItem, {
    key: ingredient.id,
    divider: i != ingredients.length - 1,
    ingredient: ingredient,
    onIngredientUpdate: ingredient => handleIngredientUpdate(ingredient, i),
    onIngredientDelete: handleIngredientDelete,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  })) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "This product has no ingredients.")));
}

_s(IngredientsView, "JdglbgM/ea8AGlpmYB9irX/K1YI=", false, function () {
  return [useStyles, notistack__WEBPACK_IMPORTED_MODULE_6__["useSnackbar"]];
});

_c = IngredientsView;
function IngredientItem({
  divider = false,
  ingredient,
  onIngredientUpdate,
  onIngredientDelete,
  breadcrumbsList
}) {
  _s2();

  var _ingredient$manufactu, _ingredient$manufactu2;

  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_6__["useSnackbar"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleIngredientItemClick = () => setOpen(true);

  const handleIngredientDialogClose = () => setOpen(false);

  const _onIngredientUpdate = ingredient => {
    setOpen(false);
    onIngredientUpdate(ingredient);
  };

  const handleIngredientDelete = () => {
    const answer = window.confirm("Are you sure you would like to delete this ingredient?");
    if (!answer) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/client/ingredient/" + ingredient.id).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        onIngredientDelete(ingredient.id);
        enqueueSnackbar("Ingredient deleted successfully.", {
          variant: "success"
        });
      } else enqueueSnackbar("Failed to delete ingredient. Contact the developer.", {
        variant: "error"
      });
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to delete ingredient. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    key: ingredient.id // divider={divider}
    ,
    button: true,
    onClick: handleIngredientItemClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SubdirectoryArrowRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: `${ingredient.name} (${(_ingredient$manufactu = ingredient.manufacturer) === null || _ingredient$manufactu === void 0 ? void 0 : _ingredient$manufactu.name})` // secondary={ingredient.manufacturer?.name}
    // secondary={moment(ingredient.date).format("DD/MM/YY")}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadCertOrDisclosureBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    manufacturerId: (_ingredient$manufactu2 = ingredient.manufacturer) === null || _ingredient$manufactu2 === void 0 ? void 0 : _ingredient$manufactu2.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "end",
    onClick: handleIngredientDelete,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IngredientDialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mode: _IngredientDialog__WEBPACK_IMPORTED_MODULE_7__["IngredientDialogMode"].EDIT,
    open: open,
    edit: ingredient,
    onClose: handleIngredientDialogClose,
    onIngredientUpdate: _onIngredientUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }));
}

_s2(IngredientItem, "ltc5vh2PxhGd/dY+MsbrRfgYBLs=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_6__["useSnackbar"]];
});

_c2 = IngredientItem;
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ingredientList: {
    // overflowY: "auto",
    // maxHeight: "calc(100vh - 239px)",
    marginLeft: 15
  }
}));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "IngredientsView");
__webpack_require__.$Refresh$.register(_c2, "IngredientItem");

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

/***/ }),

/***/ "./src/views/client/requests/request/UploadCertOrDisclosureBtn.tsx":
/*!*************************************************************************!*\
  !*** ./src/views/client/requests/request/UploadCertOrDisclosureBtn.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadCertOrDisclosureBtn; });
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

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\UploadCertOrDisclosureBtn.tsx",
    _s = __webpack_require__.$Refresh$.signature();









function UploadCertOrDisclosureBtn({
  manufacturerId
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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/manufacturer/${manufacturerId}/documents`).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        console.log(response.data);
        setDoc(response.data[0]);
      } else {
        console.log(response);
        enqueueSnackbar("Failed to retrieve manufacturer spec sheet.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to retrieve manufacturer spec sheet.", {
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
  //   return axios.post(`/api/client/manufacturer/document/${documentId}`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // };
  // const deleteDocHandler = (documentId: number) => {
  //   setDoc(doc.filter((d) => d.id !== documentId));
  //   return axios.delete("/api/client/manufacturer/document/" + documentId);
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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/manufacturer/${manufacturerId}/document`, formData, {
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
        enqueueSnackbar(`Uploaded manufacturer spec successfully.`, {
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
    title: "A manufacturer specification sheet is a technical document that outlines the features of a manufacturer in detail. It explains and describes the manufacturer, what it is, what it does, what its components are and any special features it has. It also provides any other important additional information such as hazard and allergy warnings.",
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
  }, "Halal Certificate / Disclosure Statement")));
}

_s(UploadCertOrDisclosureBtn, "+xLhmwEHpPrHAySkyxo3OSvwl6k=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

_c = UploadCertOrDisclosureBtn;

var _c;

__webpack_require__.$Refresh$.register(_c, "UploadCertOrDisclosureBtn");

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
//# sourceMappingURL=main.e5ac538b8db68e655338.hot-update.js.map