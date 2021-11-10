webpackHotUpdate("main",{

/***/ "./src/layouts/ClientDashboardLayout/NavBar/index.tsx":
/*!************************************************************!*\
  !*** ./src/layouts/ClientDashboardLayout/NavBar/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_VerifiedUserOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUserOutlined */ "./node_modules/@material-ui/icons/VerifiedUserOutlined.js");
/* harmony import */ var _material_ui_icons_VerifiedUserOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUserOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/Auth */ "./src/api/Auth.ts");
/* harmony import */ var _components_NavList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/NavList */ "./src/components/NavList.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\baeyun\\Documents\\bukharim96\\HWW\\halalwatchworld-portal\\src\\layouts\\ClientDashboardLayout\\NavBar\\index.tsx",
    _s = __webpack_require__.$Refresh$.signature();









const NavBar = ({
  onMobileClose,
  openMobile
}) => {
  _s();

  var _user$profile, _user$profile2, _user$profile3;

  const classes = useStyles();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const user = new _api_Auth__WEBPACK_IMPORTED_MODULE_5__["default"]().user;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [location.pathname]);
  const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    p: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    className: classes.avatar,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    src: `/${user === null || user === void 0 ? void 0 : (_user$profile = user.profile) === null || _user$profile === void 0 ? void 0 : _user$profile.avatar}`,
    to: `/${user === null || user === void 0 ? void 0 : user.role}/profile`,
    id: "sidenav-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    id: "profile-nametag",
    color: "textPrimary",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, `${user === null || user === void 0 ? void 0 : (_user$profile2 = user.profile) === null || _user$profile2 === void 0 ? void 0 : _user$profile2.first_name} ${user === null || user === void 0 ? void 0 : (_user$profile3 = user.profile) === null || _user$profile3 === void 0 ? void 0 : _user$profile3.last_name}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.role,
    color: "textSecondary",
    variant: "body2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, user === null || user === void 0 ? void 0 : user.role)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    list: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    lgUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    anchor: "left",
    classes: {
      paper: classes.mobileDrawer
    },
    onClose: onMobileClose,
    open: openMobile,
    variant: "temporary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    anchor: "left",
    classes: {
      paper: classes.desktopDrawer
    },
    open: true,
    variant: "persistent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, content)));
};

_s(NavBar, "2lzOY2yYzx3UvbUChEh2Zqtbnl0=", false, function () {
  return [useStyles, react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);
const items = [// {
//   href: "/client/dashboard",
//   icon: AssessmentIcon,
//   title: "Dashboard",
// },
{
  href: "/client/requests",
  icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["Users"],
  title: "Reviews",
  subnav: [{
    href: "/client/new-request",
    icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["Plus"],
    title: "New Request"
  }, {
    href: "/client/requests",
    icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["FileText"],
    title: "All Review Requests"
  }]
}, {
  href: "/client/reports",
  icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["BarChart2"],
  title: "Reports",
  subnav: [{
    href: "/client/audit-reports",
    icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["FileText"],
    title: "Audit Reports"
  }, {
    href: "/client/review-reports",
    icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["FileText"],
    title: "Review Reports"
  }]
}, {
  href: "/client/certificates",
  icon: _material_ui_icons_VerifiedUserOutlined__WEBPACK_IMPORTED_MODULE_3___default.a,
  title: "Certificates"
}, // {
//   href: "/client/products",
//   icon: ShoppingBagIcon,
//   title: "Products",
// },
{
  href: "/client/profile",
  icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["User"],
  title: "Profile",
  subnav: [{
    href: "/client/profile/edit",
    icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["Settings"],
    title: "Account Settings"
  }, {
    href: "/client/change-password",
    icon: react_feather__WEBPACK_IMPORTED_MODULE_4__["Lock"],
    title: "Change Password"
  }]
}];
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)"
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64
  },
  role: {
    textTransform: "uppercase"
  }
}));

var _c;

__webpack_require__.$Refresh$.register(_c, "NavBar");

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
//# sourceMappingURL=main.dae187645174ba0c09d1.hot-update.js.map