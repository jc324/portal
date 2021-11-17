webpackHotUpdate("main",{

/***/ "./src/views/client/requests/request/AddProductDialog.tsx":
/*!****************************************************************!*\
  !*** ./src/views/client/requests/request/AddProductDialog.tsx ***!
  \****************************************************************/
/*! exports provided: AddProductDialogMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductDialogMode", function() { return AddProductDialogMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddProductDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\AddProductDialog.tsx",
    _s = __webpack_require__.$Refresh$.signature();





const Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(_c = function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Slide"], Object.assign({
    direction: "up",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 10
    }
  }));
});
_c2 = Transition;
let AddProductDialogMode;

(function (AddProductDialogMode) {
  AddProductDialogMode[AddProductDialogMode["EDIT"] = 0] = "EDIT";
  AddProductDialogMode[AddProductDialogMode["ADD"] = 1] = "ADD";
})(AddProductDialogMode || (AddProductDialogMode = {}));

function AddProductDialog({
  onProductAdd,
  reviewRequestId,
  facilityId
}) {
  _s();

  const classes = useStyles();
  const [_open, _setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // internal

  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();
  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaults); // inject appropriate review_request and facility IDs

  values.review_request_id = reviewRequestId;
  values.facility_id = facilityId;

  const addProductHandler = () => {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/product`, values).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        onProductAdd(response.data);
        setValues(defaults);

        _setOpen(false);

        enqueueSnackbar("Product added successfully.", {
          variant: "success"
        });
      } else {
        console.log(response);
        enqueueSnackbar("Failed to add product. Contact the developer.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to add product. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const handleChange = event => {
    setValues({ ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleClickOpen = () => {
    _setOpen(true);
  };

  const handleClose = () => {
    _setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    variant: "contained",
    onClick: handleClickOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "Add Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    keepMounted: true,
    open: _open,
    onClose: handleClose,
    TransitionComponent: Transition,
    maxWidth: "sm",
    fullWidth: true,
    "aria-labelledby": "add-product-form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "Add Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    classes: {
      root: classes.dialogContentRoot
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    fullWidth: true,
    label: "Product name",
    name: "name",
    onChange: handleChange,
    required: true,
    value: values.name,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    fullWidth: true,
    label: "Description",
    name: "description",
    onChange: handleChange,
    value: values.description,
    variant: "outlined",
    multiline: true,
    rows: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: addProductHandler,
    color: "secondary",
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "Add Product"))));
}

_s(AddProductDialog, "AlTVlh/Kn0R1+BZRANfFHuChMwE=", false, function () {
  return [useStyles, notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

_c3 = AddProductDialog;
const defaults = {
  id: null,
  review_request_id: null,
  facility_id: null,
  category_id: 1,
  name: "",
  description: "",
  preview_image: "",
  date: Date.now(),
  ingredients: []
};

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }), value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 3,
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, children));
}

_c4 = TabPanel;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  dialogContentRoot: {
    overflowY: "hidden"
  }
}));

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "Transition$React.forwardRef");
__webpack_require__.$Refresh$.register(_c2, "Transition");
__webpack_require__.$Refresh$.register(_c3, "AddProductDialog");
__webpack_require__.$Refresh$.register(_c4, "TabPanel");

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

/***/ "./src/views/client/requests/request/IngredientDialog.tsx":
/*!****************************************************************!*\
  !*** ./src/views/client/requests/request/IngredientDialog.tsx ***!
  \****************************************************************/
/*! exports provided: IngredientDialogMode, default, IngredientDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDialogMode", function() { return IngredientDialogMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IngredientDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDetails", function() { return IngredientDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ManufacturerDocs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ManufacturerDocs */ "./src/views/client/requests/request/ManufacturerDocs.tsx");
/* harmony import */ var _reviewer_clients_client_ManufacturerSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reviewer/clients/client/ManufacturerSelector */ "./src/views/reviewer/clients/client/ManufacturerSelector.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\IngredientDialog.tsx",
    _s = __webpack_require__.$Refresh$.signature();









const Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(_c = function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Slide"], Object.assign({
    direction: "up",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }));
});
_c2 = Transition;
const defaults = {
  id: null,
  review_request_id: null,
  client_id: null,
  product_id: null,
  name: "",
  manufacturer: null,
  description: "",
  recommendation: "",
  source: ""
};
let IngredientDialogMode;

(function (IngredientDialogMode) {
  IngredientDialogMode[IngredientDialogMode["EDIT"] = 0] = "EDIT";
  IngredientDialogMode[IngredientDialogMode["ADD"] = 1] = "ADD";
})(IngredientDialogMode || (IngredientDialogMode = {}));

function IngredientDialog({
  onIngredientUpdate,
  reviewRequestId,
  productId,
  mode,
  open = false,
  onClose,
  edit
}) {
  _s();

  var _edit$manufacturer;

  if (edit) edit.manufacturer_name = (_edit$manufacturer = edit.manufacturer) === null || _edit$manufacturer === void 0 ? void 0 : _edit$manufacturer.name;
  const [_open, _setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // internal

  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mode === IngredientDialogMode.ADD && defaults || edit);
  const ingredientId = edit === null || edit === void 0 ? void 0 : edit.id;
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])(); // inject appropriate facility id

  values.product_id = productId;

  const addIngredientHandler = ingredient => {
    // inject
    values.review_request_id = reviewRequestId;
    console.log(ingredient);
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/ingredient`, ingredient).then(async response => {
      console.log(response.data);
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        onIngredientUpdate(response.data);
        setValues(defaults);

        _setOpen(false);

        enqueueSnackbar("Ingredient added successfully.", {
          variant: "success"
        });
      } else {
        console.log(response);
        enqueueSnackbar("Failed to add ingredient. Contact the developer.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to add ingredient. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const updateIngredientHandler = ingredient => {
    // if (mode === IngredientDialogMode.ADD)
    //   ingredient.manufacturer_name = ingredient.manufacturer?.name;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/ingredient/${ingredient.id}`, ingredient).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        onIngredientUpdate(response.data);

        _setOpen(false);

        enqueueSnackbar("Ingredient updated successfully.", {
          variant: "success"
        });
      } else {
        console.log(response);
        enqueueSnackbar("Failed to update ingredient. Contact the developer.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to update ingredient. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const handleIngredientUpdate = () => {
    if (mode === IngredientDialogMode.ADD) addIngredientHandler(values);else updateIngredientHandler(values); // _setOpen(false);
  };

  const handleClickOpen = () => {
    _setOpen(true);
  };

  const handleClose = () => {
    _setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mode === IngredientDialogMode.ADD && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "default",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 22
      }
    }),
    style: {
      marginRight: 15
    },
    onClick: handleClickOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, "Ingredient"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    keepMounted: true,
    open: mode === IngredientDialogMode.ADD && _open || open,
    onClose: mode === IngredientDialogMode.ADD && handleClose || onClose,
    TransitionComponent: Transition,
    maxWidth: "sm",
    PaperComponent: PaperComponent,
    "aria-labelledby": "draggable-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
    style: {
      cursor: "move"
    },
    id: "draggable-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, mode === IngredientDialogMode.ADD && "Add" || "Edit", " Ingredient")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, mode === IngredientDialogMode.ADD && "Fill out this form to add a new ingredient to this product." || "Fill out this form to update this ingredient."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IngredientDetails, {
    values: values,
    setValues: setValues,
    mode: mode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleIngredientUpdate,
    color: "secondary",
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, mode === IngredientDialogMode.ADD && "Add" || "Update", " ", "Ingredient"))));
}

_s(IngredientDialog, "EUIsv66h3vZjn3NK/h2zcHzYD84=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"]];
});

_c3 = IngredientDialog;
function IngredientDetails({
  values,
  setValues,
  mode
}) {
  var _values$manufacturer, _values$manufacturer2;

  const handleChange = event => {
    setValues({ ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleRecommendationSelect = value => {
    setValues({ ...values,
      recommendation: value
    });
  };

  const handleSourceSelect = value => {
    setValues({ ...values,
      source: value
    });
  };

  const handleManufacturerSelect = manufacturer => {
    setValues({ ...values,
      manufacturer_name: (manufacturer === null || manufacturer === void 0 ? void 0 : manufacturer.name) || manufacturer,
      manufacturer
    }); // console.log(values);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    fullWidth: true,
    label: "Ingredient Name",
    name: "name",
    onChange: handleChange,
    required: true,
    value: values.name,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], {
    style: {
      marginTop: 20,
      marginLeft: 12
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, "Ingredient Manufacturer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviewer_clients_client_ManufacturerSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultValue: (_values$manufacturer = values.manufacturer) === null || _values$manufacturer === void 0 ? void 0 : _values$manufacturer.name,
    onSelect: handleManufacturerSelect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  })), mode === IngredientDialogMode.EDIT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ManufacturerDocs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    manufacturerId: (_values$manufacturer2 = values.manufacturer) === null || _values$manufacturer2 === void 0 ? void 0 : _values$manufacturer2.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 11
    }
  })));
}
_c4 = IngredientDetails;

function PaperComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_3___default.a, {
    handle: "#draggable-dialog-title",
    cancel: '[class*="MuiDialogContent-root"]',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 7
    }
  })));
}

_c5 = PaperComponent;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "Transition$React.forwardRef");
__webpack_require__.$Refresh$.register(_c2, "Transition");
__webpack_require__.$Refresh$.register(_c3, "IngredientDialog");
__webpack_require__.$Refresh$.register(_c4, "IngredientDetails");
__webpack_require__.$Refresh$.register(_c5, "PaperComponent");

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
      lineNumber: 78,
      columnNumber: 5
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 20
    }
  }) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    className: classes.ingredientList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 91,
      columnNumber: 15
    }
  })) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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

  var _ingredient$manufactu;

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
      lineNumber: 177,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SubdirectoryArrowRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: `${ingredient.name} (${(_ingredient$manufactu = ingredient.manufacturer) === null || _ingredient$manufactu === void 0 ? void 0 : _ingredient$manufactu.name})` // secondary={ingredient.manufacturer?.name}
    // secondary={moment(ingredient.date).format("DD/MM/YY")}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "end",
    onClick: handleIngredientDelete,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 198,
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

/***/ "./src/views/client/requests/request/ManufacturerDocs.tsx":
/*!****************************************************************!*\
  !*** ./src/views/client/requests/request/ManufacturerDocs.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManufacturerDocs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _reviewer_common_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../reviewer/common/types */ "./src/views/reviewer/common/types.ts");
/* harmony import */ var _reviewer_common_UploadDocumentListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reviewer/common/UploadDocumentListItem */ "./src/views/reviewer/common/UploadDocumentListItem.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\ManufacturerDocs.tsx",
    _s = __webpack_require__.$Refresh$.signature();








function ManufacturerDocs({
  manufacturerId
}) {
  _s();

  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [docs, setDocs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/manufacturer/${manufacturerId}/documents`).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        setDocs(response.data);
      } else {
        console.log(response);
        enqueueSnackbar("Failed to retrieve ingredient documents.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to retrieve ingredient documents.", {
        variant: "error"
      });
    });
  }, []);

  const setDocumentHandler = document => {
    setDocs([...docs, document]); // console.log(docs);
  };

  const uploadDocHandler = (doc, docType, expiresAt) => {
    const formData = new FormData();
    formData.append("document", doc);
    formData.append("type", docType.toString());
    formData.append("expires_at", moment__WEBPACK_IMPORTED_MODULE_2___default()(expiresAt).format("YYYY-MM-DD HH:mm:ss"));
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/manufacturer/${manufacturerId}/document`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  const updateDocHandler = (doc, documentId) => {
    const formData = new FormData();
    formData.append("document", doc);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/manufacturer/document/${documentId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  const deleteDocHandler = documentId => {
    setDocs(docs.filter(d => d.id !== documentId));
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/manufacturer/document/" + documentId);
  };

  const changeDateHandler = (documentId, expiresAt) => {
    const _docs = docs.map(d => {
      if (d.id !== documentId) return d;
      d.expires_at = moment__WEBPACK_IMPORTED_MODULE_2___default()(expiresAt).format("YYYY-MM-DD HH:mm:ss");
      return d;
    });

    setDocs(_docs);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/manufacturer/document/${documentId}/expires-at`, {
      expires_at: moment__WEBPACK_IMPORTED_MODULE_2___default()(expiresAt).format("YYYY-MM-DD HH:mm:ss")
    });
  };

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 106,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviewer_common_UploadDocumentListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fileTypeName: "Halal Certificate/Disclosure Statement",
    document: docs.filter(d => d.type == "CERTIFICATE_OR_DISCLOSURE")[0],
    setDocument: setDocumentHandler,
    uploadHandler: (doc, selectedDate) => uploadDocHandler(doc, _reviewer_common_types__WEBPACK_IMPORTED_MODULE_5__["IngredientDocumentType"].CERTIFICATE_OR_DISCLOSURE, selectedDate),
    updateHandler: updateDocHandler,
    deleteHandler: deleteDocHandler,
    dateChangeHandler: changeDateHandler,
    requireExpirationDate: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })));
}

_s(ManufacturerDocs, "Com8Tm2l9GPyUhb/9m8aOUbSi3M=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"]];
});

_c = ManufacturerDocs;

var _c;

__webpack_require__.$Refresh$.register(_c, "ManufacturerDocs");

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

/***/ "./src/views/client/requests/request/Step_08.tsx":
/*!*******************************************************!*\
  !*** ./src/views/client/requests/request/Step_08.tsx ***!
  \*******************************************************/
/*! exports provided: default, ProductItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItem", function() { return ProductItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _IngredientDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./IngredientDialog */ "./src/views/client/requests/request/IngredientDialog.tsx");
/* harmony import */ var _AddProductDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AddProductDialog */ "./src/views/client/requests/request/AddProductDialog.tsx");
/* harmony import */ var _IngredientsView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IngredientsView */ "./src/views/client/requests/request/IngredientsView.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\Step_08.tsx",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();


















// @TODO handle avatar
const FinishedProductsStep = ({
  reviewRequest
}) => {
  _s();

  const classes = useStyles();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();
  const [products, setProducts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/review-request/${reviewRequest.id}/products`).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        console.log(response.data);
        setProducts(response.data);
      } else {
        console.log(response);
        enqueueSnackbar("Failed to retrieve products.", {
          variant: "error"
        });
      }
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to retrieve products.", {
        variant: "error"
      });
    });
  };

  const handleProductAdd = product => {
    setProducts([product, ...products]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.stepBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    style: {
      marginBottom: 30,
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Finished Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 30
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Click on the button at the right to add your products and ingredients to this request:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddProductDialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onProductAdd: handleProductAdd,
    reviewRequestId: reviewRequest.id,
    facilityId: reviewRequest.facility_id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "nav",
    "aria-labelledby": "nested-list-subheader" // subheader={
    //   <ListSubheader component="div" id="nested-list-subheader">
    //     Products and Ingredients
    //   </ListSubheader>
    // }
    ,
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductItem, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }))));
};

_s(FinishedProductsStep, "meeGeaUh9R+5hMvklHPn/6F0ahI=", false, function () {
  return [useStyles, notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

_c = FinishedProductsStep;
/* harmony default export */ __webpack_exports__["default"] = (FinishedProductsStep);

function getSome(array, some) {
  return array.sort(() => Math.random() - Math.random()).slice(0, some);
}

function ProductItem({
  product
}) {
  _s2();

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [specSheet, setSpecSheet] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleIngredientAdd = ingredient => {
    // cause refresh
    setOpen(!open); // setOpen(true);
  }; // @TODO make real


  const uploadSpecSheet = () => {
    sleep(2000).then(() => {
      setSpecSheet(!specSheet);
      if (!specSheet) enqueueSnackbar("Product Spec Sheet uploaded successfully", {
        variant: "success"
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_12__["ShoppingBag"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: product.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      width: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IngredientDialog__WEBPACK_IMPORTED_MODULE_13__["default"], {
    reviewRequestId: product.review_request_id,
    productId: product.id,
    onIngredientUpdate: handleIngredientAdd,
    mode: _IngredientDialog__WEBPACK_IMPORTED_MODULE_13__["IngredientDialogMode"].ADD,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 36
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
    in: open,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IngredientsView__WEBPACK_IMPORTED_MODULE_15__["default"], {
    productId: product.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }))));
}

_s2(ProductItem, "9wnZjnx5lItWUH4j7rvUTj0zt7Y=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

_c2 = ProductItem;
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  stepBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center" // alignItems: "center",

  },
  stepBtn: {
    width: 500
  },
  root: {},
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "FinishedProductsStep");
__webpack_require__.$Refresh$.register(_c2, "ProductItem");

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
//# sourceMappingURL=main.f204f6570300cd8e92a9.hot-update.js.map