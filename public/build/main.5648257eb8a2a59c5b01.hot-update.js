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
/* harmony import */ var _views_client_reports__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/client/reports */ "./src/views/client/reports/index.js");
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




 // import ClientDraftedReviewsView from "./views/client/drafted-reviews";


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
      lineNumber: 63,
      columnNumber: 14
    }
  }),
  children: [{
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_LoginView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    })
  }, {
    path: "reset-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_ResetPasswordView__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 42
      }
    })
  }, {
    path: "register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_RegisterView__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 36
      }
    })
  }, {
    path: "404",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_errors_NotFoundView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 31
      }
    })
  }, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_LoginView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
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
        lineNumber: 70,
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
      lineNumber: 76,
      columnNumber: 14
    }
  }),
  children: [{
    path: "account",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_account_AccountView__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 35
      }
    })
  }, {
    path: "reviews",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_reviews__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 35
      }
    })
  }, {
    path: "reviewers",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_reviewers__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 37
      }
    })
  }, {
    path: "facility-categories",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_facility_categories__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 47
      }
    })
  }, {
    path: "product-categories",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_admin_product_categories__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
        lineNumber: 86,
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
      lineNumber: 92,
      columnNumber: 14
    }
  }),
  children: [{
    path: "clients/requests",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_requests__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 44
      }
    })
  }, {
    path: "clients/request/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_requests_request__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 18
      }
    })
  }, {
    path: "clients",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_clients__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 35
      }
    })
  }, {
    path: "register-client",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_register_client__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 43
      }
    })
  }, {
    path: "reviews-queue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_reviews_queue__WEBPACK_IMPORTED_MODULE_21__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 41
      }
    })
  }, {
    path: "approved-reviews",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_approved_reviews__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 44
      }
    })
  }, {
    path: "drafted-reviews",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_drafted_reviews__WEBPACK_IMPORTED_MODULE_23__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 43
      }
    })
  }, {
    path: "new-review",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_new_review__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 38
      }
    })
  }, {
    path: "client/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_clients_client__WEBPACK_IMPORTED_MODULE_25__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 38
      }
    })
  }, {
    path: "profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_reviewer_profile_index__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 107,
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
      lineNumber: 113,
      columnNumber: 14
    }
  }),
  children: [{
    path: "new-request",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientRequestViewNew, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 39
      }
    })
  }, {
    path: "requests",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_requests__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 36
      }
    })
  }, {
    path: "request/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_requests_request__WEBPACK_IMPORTED_MODULE_28__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 39
      }
    })
  }, {
    path: "audit-reports",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_reports__WEBPACK_IMPORTED_MODULE_29__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 41
      }
    })
  }, {
    path: "review-reports",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_reports__WEBPACK_IMPORTED_MODULE_29__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 42
      }
    })
  }, {
    path: "certificates",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_certificates__WEBPACK_IMPORTED_MODULE_30__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 40
      }
    })
  }, {
    path: "profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_profile_index__WEBPACK_IMPORTED_MODULE_31__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 35
      }
    })
  }, {
    path: "profile/edit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_client_profile_edit_index__WEBPACK_IMPORTED_MODULE_32__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 40
      }
    })
  }, {
    path: "change-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_common_auth_profile_ChangePasswordView__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
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
        lineNumber: 124,
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
      lineNumber: 132,
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
      lineNumber: 141,
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
      lineNumber: 143,
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

/***/ })

})
//# sourceMappingURL=main.5648257eb8a2a59c5b01.hot-update.js.map