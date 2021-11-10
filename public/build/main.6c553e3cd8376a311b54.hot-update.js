webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.6c553e3cd8376a311b54.hot-update.js.map