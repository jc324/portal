webpackHotUpdate("main",{

/***/ "./src/views/client/requests/request/Stepper.tsx":
/*!*******************************************************!*\
  !*** ./src/views/client/requests/request/Stepper.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HorizontalLinearStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _reviewer_common_PromptDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reviewer/common/PromptDialog */ "./src/views/reviewer/common/PromptDialog.tsx");
/* harmony import */ var _PreStep__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PreStep */ "./src/views/client/requests/request/PreStep.tsx");
/* harmony import */ var _SubmitStep__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SubmitStep */ "./src/views/client/requests/request/SubmitStep.tsx");
/* harmony import */ var _SuccessfulSubmissionStep__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SuccessfulSubmissionStep */ "./src/views/client/requests/request/SuccessfulSubmissionStep.tsx");
/* harmony import */ var _Step_01__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Step_01 */ "./src/views/client/requests/request/Step_01.tsx");
/* harmony import */ var _Step_02__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Step_02 */ "./src/views/client/requests/request/Step_02.tsx");
/* harmony import */ var _Step_03__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Step_03 */ "./src/views/client/requests/request/Step_03.tsx");
/* harmony import */ var _Step_04__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Step_04 */ "./src/views/client/requests/request/Step_04.tsx");
/* harmony import */ var _Step_05__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Step_05 */ "./src/views/client/requests/request/Step_05.tsx");
/* harmony import */ var _Step_06__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Step_06 */ "./src/views/client/requests/request/Step_06.tsx");
/* harmony import */ var _Step_07__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Step_07 */ "./src/views/client/requests/request/Step_07.tsx");
/* harmony import */ var _Step_08__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Step_08 */ "./src/views/client/requests/request/Step_08.tsx");
/* harmony import */ var _Step_09__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Step_09 */ "./src/views/client/requests/request/Step_09.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\requests\\request\\Stepper.tsx",
    _s = __webpack_require__.$Refresh$.signature();

























function HorizontalLinearStepper() {
  _s();

  const classes = useStyles();
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_10__["useSnackbar"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [reviewRequest, setReviewRequest] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [activeStep, setActiveStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [skipped, setSkipped] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Set());
  const [facilityStepValues, setFacilityStepValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaults);
  const steps = getStepTitles(reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type);
  const [promptOpen, setPromptOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [confirm, setConfirm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (id) {
      // if editing
      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/review-request/${id}`).then(async response => {
        setLoading(false); // console.log(response.data);

        setReviewRequest(response.data);
        setActiveStep(response.data.current_step_index);
      }).catch(e => {
        // @TODO handle
        console.error(e);
        setLoading(false);
      });
    }
  }, []);

  const setRequestType = type => {
    setReviewRequest({ ...reviewRequest,
      type
    });
    console.log(reviewRequest);
  };

  const handleFacilitySelect = id => {
    setReviewRequest({ ...reviewRequest,
      facility_id: id
    });
  };

  const updateReviewRequest = current_step_index => {
    // if (!reviewRequest) return;
    setLoading(true);
    let data = { ...reviewRequest,
      current_step_index
    };
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/review-request/${reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.id}`, data);
  };

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleSubmission = () => {
    setLoading(true);
    let data = { ...reviewRequest,
      current_step_index: 0,
      status: "IN_REVIEW"
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/review-request/${reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.id}`, data).then(async response => {
      setLoading(false); // navigate(`/client/requests`);

      setActiveStep(prevActiveStep => prevActiveStep + 1);
      enqueueSnackbar("Review request submitted successfully.", {
        variant: "success"
      });
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to submit review request. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const createReviewRequest = () => {
    let data = {
      type: (reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type) || "NEW_FACILITY_AND_PRODUCTS"
    };
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/client/review-request/new`, data).then(async response => {
      setLoading(false);
      console.log(response.data);
      setReviewRequest(response.data);
      setActiveStep(1);
    }).catch(e => {
      // @TODO handle
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to create review request. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const handleFacilityUpdate = () => {
    setLoading(true);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/client/facility/${reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.facility_id}`, facilityStepValues); // .then(async (response) => {
    //   setLoading(false);
    //   if (response.status == 200 || response.status == 201) {
    //     enqueueSnackbar("Facility updated successfully.", {
    //       variant: "success",
    //     });
    //   } else {
    //     console.log(response);
    //     enqueueSnackbar("Failed to update facility. Contact the developer.", {
    //       variant: "error",
    //     });
    //   }
    // })
    // .catch((e) => {
    //   console.error(e);
    //   setLoading(false);
    //   enqueueSnackbar(
    //     "Failed to update facility. Check your network connection and try again.",
    //     {
    //       variant: "error",
    //     }
    //   );
    // });
  };

  const handleNext = (confirm = false) => {
    if (!confirm) {
      if ((reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type) === "NEW_PRODUCTS" && activeStep == 2 || (reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type) === "NEW_FACILITY_AND_PRODUCTS" && activeStep == 8) {
        setPromptOpen(true);
        return;
      }
    }

    if (!reviewRequest.id) {
      console.log("creating");
      createReviewRequest();
      return;
    }

    let nextFunctionCallback = updateReviewRequest(activeStep + 1);

    if ((reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type) === "NEW_FACILITY" && activeStep == 1 || (reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type) === "NEW_FACILITY_AND_PRODUCTS" && activeStep == 1) {
      nextFunctionCallback = handleFacilityUpdate();
    }

    nextFunctionCallback.then(async response => {
      setLoading(false); // console.log(response.data);

      let newSkipped = skipped;

      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(newSkipped);
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to move to next step. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const handleBack = () => {
    var _updateReviewRequest;

    (_updateReviewRequest = updateReviewRequest(activeStep - 1)) === null || _updateReviewRequest === void 0 ? void 0 : _updateReviewRequest.then(async response => {
      setLoading(false); // console.log(response.data);

      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to move to previous step. Check your network connection and try again.", {
        variant: "error"
      });
    });
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviewer_common_PromptDialog__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: promptOpen,
    onOk: () => {
      handleNext(true);
      setPromptOpen(false);
    },
    onCancel: () => setPromptOpen(false),
    message: "Some products and ingredients are missing documents. Are you sure you would like to proceed to the next step?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    lg: 8,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 9
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["LinearProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      children: "Request",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    minWidth: 800,
    style: {
      paddingLeft: 20,
      paddingRight: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, activeStep === steps.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, "All steps completed - you're finished"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  }, "Reset")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    style: {
      height: "calc(100vh - 228px)",
      overflowY: "auto",
      overflowX: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.instructions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 19
    }
  }, getStepContent(activeStep, reviewRequest, setRequestType, handleFacilitySelect, facilityStepValues, setFacilityStepValues, handleSubmission))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      alignSelf: "flex-end",
      padding: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 17
    }
  }, activeStep !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: activeStep === 1 || activeStep === 2 && (reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type) === "NEW_PRODUCTS" || activeStep === steps.length - 1,
    onClick: handleBack,
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, "Back"), activeStep === steps.length - 1 || activeStep === steps.length - 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 23
    }
  }) // <Button
  //   variant="contained"
  //   color="primary"
  //   onClick={handleSubmission}
  //   className={classes.button}
  // >
  //   Submit Request
  // </Button>
  || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: () => handleNext(true),
    className: classes.button,
    disabled: !(reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }, "Next")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    lg: 4,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeStep: activeStep,
    style: {
      paddingTop: 30,
      backgroundColor: "transparent"
    },
    orientation: "vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }
  }, steps.map((label, index) => {
    const stepProps = {};
    const labelProps = {}; // if (isStepOptional(index)) {
    //   labelProps.optional = (
    //     <Typography variant="caption">Optional</Typography>
    //   );
    // }

    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
      key: label
    }, stepProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, labelProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 19
      }
    }, label)));
  }))));
}

_s(HorizontalLinearStepper, "vv1SQ/fOTchVzcXSLbRXqyY+S2E=", false, function () {
  return [useStyles, react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"], notistack__WEBPACK_IMPORTED_MODULE_10__["useSnackbar"]];
});

_c = HorizontalLinearStepper;

function getStepTitles(reviewType) {
  let steps = ["Select request type"];
  if (reviewType === "NEW_FACILITY" || reviewType === "NEW_FACILITY_AND_PRODUCTS") steps = [...steps, "Facility details", "Legal Business Documents", "Traceability Plan", "Flowchart of Processing", "Sanitation Standard Operating Procedure", "Recall Plan", "Pest Control"];
  if (reviewType === "NEW_PRODUCTS") steps.push("Select Facility");
  if (reviewType === "NEW_PRODUCTS" || reviewType === "NEW_FACILITY_AND_PRODUCTS") steps.push("Finished Products"); // final step

  steps.push("Submit Request");
  steps.push("Success");
  return steps;
}

const getStepContent = (step, reviewRequest, setRequestType, handleFacilitySelect, facilityStepValues, setFacilityStepValues, onSubmit = () => {}) => {
  // return <SuccessfulSubmissionStep />;
  if (step === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PreStep__WEBPACK_IMPORTED_MODULE_12__["default"], {
    requestType: reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.type,
    setRequestType: setRequestType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 7
    }
  });
  if (reviewRequest.type === "NEW_FACILITY") switch (step) {
    case 1:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_01__WEBPACK_IMPORTED_MODULE_15__["default"], {
        facilityId: reviewRequest.facility_id,
        values: facilityStepValues,
        setValues: setFacilityStepValues,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 11
        }
      });

    case 2:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_02__WEBPACK_IMPORTED_MODULE_16__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 16
        }
      });

    case 3:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_03__WEBPACK_IMPORTED_MODULE_17__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 16
        }
      });

    case 4:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_04__WEBPACK_IMPORTED_MODULE_18__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 16
        }
      });

    case 5:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_05__WEBPACK_IMPORTED_MODULE_19__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 16
        }
      });

    case 6:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_06__WEBPACK_IMPORTED_MODULE_20__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 16
        }
      });

    case 7:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_07__WEBPACK_IMPORTED_MODULE_21__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 16
        }
      });

    case 8:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmitStep__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSubmit: onSubmit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 16
        }
      });

    case 9:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuccessfulSubmissionStep__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 16
        }
      });

    default:
      return "Unknown step";
  }
  if (reviewRequest.type === "NEW_PRODUCTS") switch (step) {
    case 1:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_09__WEBPACK_IMPORTED_MODULE_23__["default"], {
        selected: (reviewRequest === null || reviewRequest === void 0 ? void 0 : reviewRequest.facility_id) || 0,
        handleFacilitySelect: handleFacilitySelect,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 11
        }
      });

    case 2:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_08__WEBPACK_IMPORTED_MODULE_22__["default"], {
        reviewRequest: reviewRequest,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 16
        }
      });

    case 3:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmitStep__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSubmit: onSubmit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 16
        }
      });

    case 4:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuccessfulSubmissionStep__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 16
        }
      });

    default:
      return "Unknown step";
  }
  if (reviewRequest.type === "NEW_FACILITY_AND_PRODUCTS") switch (step) {
    case 1:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_01__WEBPACK_IMPORTED_MODULE_15__["default"], {
        facilityId: reviewRequest.facility_id,
        values: facilityStepValues,
        setValues: setFacilityStepValues,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 11
        }
      });

    case 2:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_02__WEBPACK_IMPORTED_MODULE_16__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 16
        }
      });

    case 3:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_03__WEBPACK_IMPORTED_MODULE_17__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 16
        }
      });

    case 4:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_04__WEBPACK_IMPORTED_MODULE_18__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 16
        }
      });

    case 5:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_05__WEBPACK_IMPORTED_MODULE_19__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 16
        }
      });

    case 6:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_06__WEBPACK_IMPORTED_MODULE_20__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 16
        }
      });

    case 7:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_07__WEBPACK_IMPORTED_MODULE_21__["default"], {
        facilityId: reviewRequest.facility_id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 16
        }
      });

    case 8:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Step_08__WEBPACK_IMPORTED_MODULE_22__["default"], {
        reviewRequest: reviewRequest,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 16
        }
      });

    case 9:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmitStep__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSubmit: onSubmit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 16
        }
      });

    case 10:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuccessfulSubmissionStep__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 16
        }
      });

    default:
      return "Unknown step";
  }
};

const defaults = {
  id: null,
  review_request_id: null,
  category_id: 1,
  name: "",
  address: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  updated_at: "",
  created_at: ""
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingTop: 20
  }
}));

var _c;

__webpack_require__.$Refresh$.register(_c, "HorizontalLinearStepper");

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
//# sourceMappingURL=main.27c526df4de2cc748c62.hot-update.js.map