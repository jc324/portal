webpackHotUpdate("main",{

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Auth */ "./src/api/Auth.ts");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/MainLayout */ "./src/layouts/MainLayout/index.js");
/* harmony import */ var _layouts_AdminDashboardLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/AdminDashboardLayout */ "./src/layouts/AdminDashboardLayout/index.js");
/* harmony import */ var _layouts_ReviewerDashboardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/ReviewerDashboardLayout */ "./src/layouts/ReviewerDashboardLayout/index.js");
/* harmony import */ var _layouts_ClientDashboardLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/ClientDashboardLayout */ "./src/layouts/ClientDashboardLayout/index.js");
/* harmony import */ var _views_common_auth_LoginView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/common/auth/LoginView */ "./src/views/common/auth/LoginView.tsx");
/* harmony import */ var _views_common_auth_ResetPasswordView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/common/auth/ResetPasswordView */ "./src/views/common/auth/ResetPasswordView.js");
/* harmony import */ var _views_common_auth_RegisterView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/common/auth/RegisterView */ "./src/views/common/auth/RegisterView.js");
/* harmony import */ var _views_common_auth_profile_ChangePasswordView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/common/auth/profile/ChangePasswordView */ "./src/views/common/auth/profile/ChangePasswordView.tsx");
/* harmony import */ var _views_common_errors_NotFoundView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/common/errors/NotFoundView */ "./src/views/common/errors/NotFoundView.js");
/* harmony import */ var _views_admin_account_AccountView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/admin/account/AccountView */ "./src/views/admin/account/AccountView/index.js");
/* harmony import */ var _views_admin_reviews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/admin/reviews */ "./src/views/admin/reviews/index.js");
/* harmony import */ var _views_admin_reviewers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/admin/reviewers */ "./src/views/admin/reviewers/index.js");
/* harmony import */ var _views_admin_facility_categories__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/admin/facility-categories */ "./src/views/admin/facility-categories/index.js");
/* harmony import */ var _views_admin_product_categories__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/admin/product-categories */ "./src/views/admin/product-categories/index.js");
/* harmony import */ var _views_reviewer_requests__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/reviewer/requests */ "./src/views/reviewer/requests/index.js");
/* harmony import */ var _views_reviewer_requests_request__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/reviewer/requests/request */ "./src/views/reviewer/requests/request/index.tsx");
/* harmony import */ var _views_reviewer_clients__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/reviewer/clients */ "./src/views/reviewer/clients/index.js");
/* harmony import */ var _views_reviewer_register_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/reviewer/register-client */ "./src/views/reviewer/register-client/index.tsx");
/* harmony import */ var _views_reviewer_reviews_queue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/reviewer/reviews-queue */ "./src/views/reviewer/reviews-queue/index.js");
/* harmony import */ var _views_reviewer_approved_reviews__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/reviewer/approved-reviews */ "./src/views/reviewer/approved-reviews/index.js");
/* harmony import */ var _views_reviewer_drafted_reviews__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/reviewer/drafted-reviews */ "./src/views/reviewer/drafted-reviews/index.js");
/* harmony import */ var _views_reviewer_new_review__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/reviewer/new-review */ "./src/views/reviewer/new-review/index.tsx");
/* harmony import */ var _views_reviewer_clients_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/reviewer/clients/client */ "./src/views/reviewer/clients/client/index.tsx");
/* harmony import */ var _views_reviewer_profile_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/reviewer/profile/index */ "./src/views/reviewer/profile/index.tsx");
/* harmony import */ var _views_client_requests__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/client/requests */ "./src/views/client/requests/index.js");
/* harmony import */ var _views_client_requests_request__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/client/requests/request */ "./src/views/client/requests/request/index.tsx");
/* harmony import */ var _views_client_reports_audit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/client/reports/audit */ "./src/views/client/reports/audit/index.js");
/* harmony import */ var _views_client_certificates__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/client/certificates */ "./src/views/client/certificates/index.js");
/* harmony import */ var _views_client_profile_index__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/client/profile/index */ "./src/views/client/profile/index.tsx");
/* harmony import */ var _views_client_profile_edit_index__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/client/profile/edit/index */ "./src/views/client/profile/edit/index.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\routes.tsx";


 // Layouts




 // Universal screens





 // Admin screens





 // import AdminDashboardView from "./views/admin/reports/DashboardView";
// Reviewer screens










 // Client screens






 // Misc

// import SettingsView from "./views/misc/settings/SettingsView";
// const auth = new Auth();
// const user = getDummyUserAuthContext(UserRole.REVIEWER);
// COMMON/PUBLIC routes
// PartialRouteObject
const routes = [{
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 14
    }
  }),
  children: [{
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_LoginView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    })
  }, {
    path: "reset-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_ResetPasswordView__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 42
      }
    })
  }, {
    path: "register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_RegisterView__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 36
      }
    })
  }, {
    path: "404",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_errors_NotFoundView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 31
      }
    })
  }, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_LoginView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    })
  }, // <Navigate to="/login" />
  {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
      to: "/404",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    })
  }]
}, // ADMIN routes
{
  path: "/admin",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
    component: _layouts_AdminDashboardLayout__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 14
    }
  }),
  children: [{
    path: "account",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_account_AccountView__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 35
      }
    })
  }, {
    path: "reviews",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_reviews__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 35
      }
    })
  }, {
    path: "reviewers",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_reviewers__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    })
  }, {
    path: "facility-categories",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_facility_categories__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 47
      }
    })
  }, {
    path: "product-categories",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_product_categories__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 46
      }
    })
  }, // { path: "dashboard", element: <AdminDashboardView /> },
  // { path: "products", element: <ProductListView /> },
  // { path: "settings", element: <SettingsView /> },
  {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
      to: "/404",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    })
  }]
}, // REVIEWER routes
{
  path: "/reviewer",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
    component: _layouts_ReviewerDashboardLayout__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 14
    }
  }),
  children: [{
    path: "clients/requests",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_requests__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 44
      }
    })
  }, {
    path: "clients/request/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_requests_request__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 18
      }
    })
  }, {
    path: "clients",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_clients__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 35
      }
    })
  }, {
    path: "register-client",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_register_client__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 43
      }
    })
  }, {
    path: "reviews-queue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_reviews_queue__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 41
      }
    })
  }, {
    path: "approved-reviews",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_approved_reviews__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 44
      }
    })
  }, {
    path: "drafted-reviews",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_drafted_reviews__WEBPACK_IMPORTED_MODULE_23__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 43
      }
    })
  }, {
    path: "new-review",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_new_review__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 38
      }
    })
  }, {
    path: "client/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_clients_client__WEBPACK_IMPORTED_MODULE_25__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 38
      }
    })
  }, {
    path: "profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_profile_index__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 35
      }
    })
  }, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
      to: "/404",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    })
  }]
}, // CLIENT routes
{
  path: "/client",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
    component: _layouts_ClientDashboardLayout__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 14
    }
  }),
  children: [{
    path: "new-request",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientRequestViewNew, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 39
      }
    })
  }, {
    path: "requests",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_requests__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 36
      }
    })
  }, {
    path: "request/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_requests_request__WEBPACK_IMPORTED_MODULE_28__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 39
      }
    })
  }, {
    path: "audit-reports",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_reports_audit__WEBPACK_IMPORTED_MODULE_33__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 41
      }
    })
  }, {
    path: "review-reports",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_reports_audit__WEBPACK_IMPORTED_MODULE_33__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 42
      }
    })
  }, {
    path: "certificates",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_certificates__WEBPACK_IMPORTED_MODULE_30__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 40
      }
    })
  }, {
    path: "profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_profile_index__WEBPACK_IMPORTED_MODULE_31__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 35
      }
    })
  }, {
    path: "profile/edit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_profile_edit_index__WEBPACK_IMPORTED_MODULE_32__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 40
      }
    })
  }, {
    path: "change-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_profile_ChangePasswordView__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 43
      }
    })
  }, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
      to: "/404",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    })
  }]
}]; // necessary to wrap, to prevent link cache from same comp
// eg: loading this from /client/request/:id

function ClientRequestViewNew() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_requests_request__WEBPACK_IMPORTED_MODULE_28__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 10
    }
  });
} // @TODO type


_c = ClientRequestViewNew;

function PrivateRoute({
  component,
  ...rest
}) {
  const Component = component;
  const auth = new _api_Auth__WEBPACK_IMPORTED_MODULE_2__["default"]();
  return auth.isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
    to: "/login",
    state: {
      from: rest.location
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  });
}

_c2 = PrivateRoute;
/* harmony default export */ __webpack_exports__["default"] = (routes);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ClientRequestViewNew");
__webpack_require__.$Refresh$.register(_c2, "PrivateRoute");

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

/***/ "./src/views/client/reports/audit/Results.tsx":
/*!****************************************************!*\
  !*** ./src/views/client/reports/audit/Results.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Results; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\reports\\audit\\Results.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(() => ({
  root: {},
  actions: {
    justifyContent: "flex-end"
  },
  tableRow: {
    cursor: "pointer"
  }
}));
// @TODO remove
const REVIEW_REQUEST_TYPES = [{
  label: "NEW FACILITY",
  color: "#4caf50"
}, {
  label: "NEW PRODUCT",
  color: "#2196f3"
}, {
  label: "NEW INGREDIENT",
  color: "#ff9800"
}, {
  label: "FACILITY UPDATE",
  color: "#f44336"
}, {
  label: "PRODUCT UPDATE",
  color: "#f50057"
}, {
  label: "INGREDIENT UPDATE",
  color: "#2cabd0"
}, {
  label: "MANUFACTURER UPDATE",
  color: "#3caf50"
}];
const REVIEW_REQUEST_STATUSES = ["APPROVED", "REJECTED", "DRAFT", "CERTIFIED", "REVOKED", "IN_REVIEW", "SUSPENDED"];

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function Results({
  className,
  data,
  ...rest
}) {
  _s();

  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  const classes = useStyles();
  const [reviews] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data); // const handleRowClick = (id: number) => navigate(`/reviewer/client/${id}`);

  const handleRowClick = id => {};

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], Object.assign({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className)
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      children: "Reports",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 26
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    minWidth: 800,
    style: {
      height: "calc(100vh - 228px)",
      overflowY: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableHead"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Report Type")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Reviewer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    sortDirection: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    enterDelay: 300,
    title: "Sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableSortLabel"], {
    active: true,
    direction: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "Created")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
    sortDirection: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    enterDelay: 300,
    title: "Sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableSortLabel"], {
    active: true,
    direction: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "Last Updated")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    style: {
      padding: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, "You currently have no reports. Review request reports will be shown in this view once they are issued by the reviewer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    p: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 20
      }
    }),
    size: "small",
    variant: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, "View More")));
}

_s(Results, "oCfE2LuQ9bBVdIwGSIHWUjsHF5I=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"], useStyles];
});

_c = Results;

var _c;

__webpack_require__.$Refresh$.register(_c, "Results");

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

/***/ "./src/views/client/reports/audit/index.js":
/*!*************************************************!*\
  !*** ./src/views/client/reports/audit/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Results */ "./src/views/client/reports/audit/Results.tsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../common/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\views\\client\\reports\\audit\\index.js",
    _s = __webpack_require__.$Refresh$.signature();




 // import Toolbar from "../common/Toolbar";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
let reversedData = [...!(function webpackMissingModule() { var e = new Error("Cannot find module '../common/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())].reverse();

const ReviewListView = () => {
  _s();

  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: classes.root,
    title: "Reports" // style={{ paddingTop: 0, paddingBottom: 0, overflow: "hidden" }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    style: {
      marginLeft: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: reversedData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))));
};

_s(ReviewListView, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ReviewListView;
/* harmony default export */ __webpack_exports__["default"] = (ReviewListView);

var _c;

__webpack_require__.$Refresh$.register(_c, "ReviewListView");

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
//# sourceMappingURL=main.dc97e9284420adbcbaf8.hot-update.js.map