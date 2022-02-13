webpackHotUpdate("main",{

/***/ "./src/views/reviewer/requests/ReviewRequestMenu.tsx":
/*!***********************************************************!*\
  !*** ./src/views/reviewer/requests/ReviewRequestMenu.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewRequestMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/CloudDownload */ "./node_modules/@material-ui/icons/CloudDownload.js");
/* harmony import */ var _material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AlternateEmailOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AlternateEmailOutlined */ "./node_modules/@material-ui/icons/AlternateEmailOutlined.js");
/* harmony import */ var _material_ui_icons_AlternateEmailOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AlternateEmailOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/InsertDriveFile */ "./node_modules/@material-ui/icons/InsertDriveFile.js");
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "./node_modules/@material-ui/icons/Assignment.js");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AssignmentTurnedIn */ "./node_modules/@material-ui/icons/AssignmentTurnedIn.js");
/* harmony import */ var _material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/SaveOutlined */ "./node_modules/@material-ui/icons/SaveOutlined.js");
/* harmony import */ var _material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/VisibilityOutlined */ "./node_modules/@material-ui/icons/VisibilityOutlined.js");
/* harmony import */ var _material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "./node_modules/@material-ui/icons/CheckCircleOutline.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Block */ "./node_modules/@material-ui/icons/Block.js");
/* harmony import */ var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../api/Auth */ "./src/api/Auth.ts");
/* harmony import */ var _reviewer_common_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../reviewer/common/types */ "./src/views/reviewer/common/types.ts");
/* harmony import */ var _reviewer_common_NestedMenuItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../reviewer/common/NestedMenuItem */ "./src/views/reviewer/common/NestedMenuItem.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\reviewer\\requests\\ReviewRequestMenu.tsx",
    _s = __webpack_require__.$Refresh$.signature();





















function ReviewRequestMenu({
  reviewRequest,
  onDeleteReviewRequest
}) {
  _s();

  const user = new _api_Auth__WEBPACK_IMPORTED_MODULE_17__["default"]().user;
  const [anchorEl, setAnchorEl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_16__["useSnackbar"])();
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const gotoReviewRequestReview = id => navigate(`/reviewer/clients/request/${id}/review`);

  const gotoReviewRequestReports = id => navigate(`/reviewer/clients/request/${id}/reports`);

  const assumeOwnershipHandler = () => {
    var _document$querySelect;

    const data = {
      reviewer_id: user === null || user === void 0 ? void 0 : user.id
    };
    const reviewerNameTableCell = document.querySelector(`#review-request-${reviewRequest.id} .request-reviewer`);
    const tableRowAvatar = document.querySelector(`#review-request-${reviewRequest.id} .MuiAvatar-root`);
    const avatar = document.createElement("img");
    avatar.className = "MuiAvatar-img";
    avatar.setAttribute("src", ((_document$querySelect = document.querySelector("#sidenav-avatar .MuiAvatar-img")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute("src")) || "");
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/client/review-request/${reviewRequest.id}/assign-reviewer`, data).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        if (reviewerNameTableCell) {
          reviewerNameTableCell.textContent = user === null || user === void 0 ? void 0 : user.name;

          if (tableRowAvatar) {
            if (tableRowAvatar.firstChild) tableRowAvatar.removeChild(tableRowAvatar.firstChild);
            tableRowAvatar.appendChild(avatar);
            tableRowAvatar.classList.remove("MuiAvatar-colorDefault");
          }

          reviewRequest.reviewer_id = user === null || user === void 0 ? void 0 : user.id;
        }

        enqueueSnackbar("Self assigned review request successfully.", {
          variant: "success"
        });
      } else enqueueSnackbar("Failed to self assign review request. Contact the developer.", {
        variant: "error"
      });
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to self assign client. Check your network connection and try again.", {
        variant: "error"
      });
    });
    setAnchorEl(null);
  };

  const contactClient = reviewRequest => {
    let email = reviewRequest.client_email || "";
    let subject = `Halal Watch World | RE: Document Submission #${reviewRequest.id}`;
    window.location.assign(`mailto:${email}?Subject=${encodeURIComponent(subject)}`); //  + "&body=" + encodeURIComponent(bod)
  };

  const updateStatus = (id, status) => {
    const statusTableCell = document.querySelector(`#review-request-${id} .request-status`);
    let statusStr = status.toString();
    let data = {
      status: statusStr.replace(/\s/g, "_")
    };
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(`/api/client/review-request/${reviewRequest.id}/status`, data).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        if (statusTableCell) statusTableCell.textContent = statusStr;
        enqueueSnackbar("Review request status updated successfully.", {
          variant: "success"
        });
      } else enqueueSnackbar("Failed to update review request status. Contact the reviewer.", {
        variant: "error"
      });
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to update review request status. Check your network connection and try again.", {
        variant: "error"
      });
    });
    setAnchorEl(null);
  };

  const deleteReviewRequest = () => {
    const answer = window.confirm("Are you sure you would like to delete this review request?");
    if (!answer) return;
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/api/client/review-request/${reviewRequest.id}`).then(async response => {
      setLoading(false);

      if (response.status == 200 || response.status == 201) {
        onDeleteReviewRequest(reviewRequest.id);
        enqueueSnackbar("Review request deleted successfully.", {
          variant: "success"
        });
      } else enqueueSnackbar("Failed to delete review request. Contact the reviewer.", {
        variant: "error"
      });
    }).catch(e => {
      console.error(e);
      setLoading(false);
      enqueueSnackbar("Failed to delete review request. Check your network connection and try again.", {
        variant: "error"
      });
    });
    setAnchorEl(null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    edge: "end",
    size: "small",
    "aria-controls": "review-request-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    id: "review-request-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: () => setAnchorEl(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["LinearProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => gotoReviewRequestReview(reviewRequest.id) // disabled={reviewRequest.status !== "DRAFT"}
    // disabled
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, "Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => gotoReviewRequestReports(reviewRequest.id) // disabled={reviewRequest.status !== "DRAFT"}
    // disabled
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, "Reports")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: assumeOwnershipHandler,
    disabled: reviewRequest.reviewer_id === (user === null || user === void 0 ? void 0 : user.id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, "Assign")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => contactClient(reviewRequest),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AlternateEmailOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, "Contact Client")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"],
    href: `/reviewer/clients/request/${reviewRequest.id}/documents`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 11
    }
  }, "Download Documents")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reviewer_common_NestedMenuItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "inherit",
      style: {
        marginLeft: 10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 15
      }
    }, "Set Status")),
    parentMenuOpen: Boolean(anchorEl),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => updateStatus(reviewRequest.id, _reviewer_common_types__WEBPACK_IMPORTED_MODULE_18__["ReviewRequestStatus"].DRAFT),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }, "DRAFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => updateStatus(reviewRequest.id, _reviewer_common_types__WEBPACK_IMPORTED_MODULE_18__["ReviewRequestStatus"].SUBMITTED),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, "SUBMITTED")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => updateStatus(reviewRequest.id, _reviewer_common_types__WEBPACK_IMPORTED_MODULE_18__["ReviewRequestStatus"].IN_REVIEW),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, "IN REVIEW")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => updateStatus(reviewRequest.id, _reviewer_common_types__WEBPACK_IMPORTED_MODULE_18__["ReviewRequestStatus"].APPROVED),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 13
    }
  }, "APPROVED")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: () => updateStatus(reviewRequest.id, _reviewer_common_types__WEBPACK_IMPORTED_MODULE_18__["ReviewRequestStatus"].REJECTED),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 13
    }
  }, "REJECTED"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: deleteReviewRequest // disabled={reviewRequest.status !== "DRAFT"}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "inherit",
    style: {
      marginLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, "Delete"))));
}

_s(ReviewRequestMenu, "zvSaOP1yWrte1ZkMurojDOus2/0=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_16__["useSnackbar"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"]];
});

_c = ReviewRequestMenu;

var _c;

__webpack_require__.$Refresh$.register(_c, "ReviewRequestMenu");

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
//# sourceMappingURL=main.009d8fc7630bdd6ab579.hot-update.js.map