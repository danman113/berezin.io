webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about.jsx":
/*!******************************!*\
  !*** ./components/about.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/home/dberezin/dev/berezin.io/components/about.jsx",
    _this = undefined;

var About = function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "class": "center-block",
    id: "about",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "me.jpg",
      alt: "A silly picture of me drinking water.",
      style: "width:25%",
      "class": "img-circle center-block img-responsive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      "class": "text-center",
      children: "Objective"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: "font-size:20px",
      "class": "text-center",
      children: "To belong to a company where I am challenged to learn more about the world of Software Development while applying what I've learned at University. I am Passionate about Web Development, Distributed Systems, Software Testing, and the intersection of the three."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }, _this);
};

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.jsx");
/* harmony import */ var _components_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/demo */ "./components/demo.jsx");
/* harmony import */ var _components_githubprojects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/githubprojects */ "./components/githubprojects.jsx");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about */ "./components/about.jsx");


var _jsxFileName = "/home/dberezin/dev/berezin.io/pages/index.jsx";





function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Daniel Berezin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      menuItems: [{
        href: '#about',
        title: 'About'
      }, {
        href: '/daniel-berezin-software-engineer.pdf',
        title: 'Resume'
      }, {
        href: '#portfolio',
        title: 'Portfolio'
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "overlay",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Programmer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Web Developer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "World Builder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_demo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_about__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_githubprojects__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: "gello"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBYm91dCIsIkhvbWUiLCJocmVmIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsc0JBQ1o7QUFBSyxhQUFNLGNBQVg7QUFBMEIsTUFBRSxFQUFDLE9BQTdCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUMsUUFBVDtBQUFrQixTQUFHLEVBQUMsdUNBQXRCO0FBQThELFdBQUssRUFBQyxXQUFwRTtBQUFnRixlQUFNO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUksZUFBTSxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFHLFdBQUssRUFBQyxnQkFBVDtBQUEwQixlQUFNLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztLQUFNQSxLO0FBV1NBLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsMERBQUQ7QUFDRSxlQUFTLEVBQUUsQ0FDVDtBQUFFQyxZQUFJLEVBQUUsUUFBUjtBQUFrQkMsYUFBSyxFQUFFO0FBQXpCLE9BRFMsRUFFVDtBQUFFRCxZQUFJLEVBQUUsdUNBQVI7QUFBaURDLGFBQUssRUFBRTtBQUF4RCxPQUZTLEVBR1Q7QUFBRUQsWUFBSSxFQUFFLFlBQVI7QUFBc0JDLGFBQUssRUFBRTtBQUE3QixPQUhTO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBY0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBLGtCQURGO0FBOEJEO0tBL0J1QkYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYmYwZTMzNWFjZmIzNjQ0MDIxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3M9XCJjZW50ZXItYmxvY2tcIiBpZD0nYWJvdXQnPlxuICAgIDxpbWcgc3JjPVwibWUuanBnXCIgYWx0PVwiQSBzaWxseSBwaWN0dXJlIG9mIG1lIGRyaW5raW5nIHdhdGVyLlwiIHN0eWxlPVwid2lkdGg6MjUlXCIgY2xhc3M9XCJpbWctY2lyY2xlIGNlbnRlci1ibG9jayBpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgPGJyIC8+XG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5PYmplY3RpdmU8L2gyPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjIwcHhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICBUbyBiZWxvbmcgdG8gYSBjb21wYW55IHdoZXJlIEkgYW0gY2hhbGxlbmdlZCB0byBsZWFybiBtb3JlIGFib3V0IHRoZSB3b3JsZCBvZiBTb2Z0d2FyZSBEZXZlbG9wbWVudCB3aGlsZSBhcHBseWluZyB3aGF0IEkndmUgbGVhcm5lZCBhdCBVbml2ZXJzaXR5LiBJIGFtIFBhc3Npb25hdGUgYWJvdXQgV2ViIERldmVsb3BtZW50LCBEaXN0cmlidXRlZCBTeXN0ZW1zLCBTb2Z0d2FyZSBUZXN0aW5nLCBhbmQgdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgdGhyZWUuXG4gICAgPC9wPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vY29tcG9uZW50cy9kZW1vJ1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvZ2l0aHVicHJvamVjdHMnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EYW5pZWwgQmVyZXppbjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyXG4gICAgICAgIG1lbnVJdGVtcz17W1xuICAgICAgICAgIHsgaHJlZjogJyNhYm91dCcsIHRpdGxlOiAnQWJvdXQnIH0sXG4gICAgICAgICAgeyBocmVmOiAnL2RhbmllbC1iZXJlemluLXNvZnR3YXJlLWVuZ2luZWVyLnBkZicsIHRpdGxlOiAnUmVzdW1lJyB9LFxuICAgICAgICAgIHsgaHJlZjogJyNwb3J0Zm9saW8nLCB0aXRsZTogJ1BvcnRmb2xpbycgfSxcbiAgICAgICAgXX1cbiAgICAgIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxheSc+XG4gICAgICAgICAgICA8aDE+UHJvZ3JhbW1lcjwvaDE+XG4gICAgICAgICAgICA8aDE+V2ViIERldmVsb3BlcjwvaDE+XG4gICAgICAgICAgICA8aDE+V29ybGQgQnVpbGRlcjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGVtbyAvPlxuICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgPFByb2plY3RzIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPmdlbGxvPC9mb290ZXI+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=