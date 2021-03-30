webpackHotUpdate_N_E("pages/index",{

/***/ "./components/demo.jsx":
/*!*****************************!*\
  !*** ./components/demo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_dberezin_dev_berezin_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regl */ "./node_modules/regl/dist/regl.js");
/* harmony import */ var regl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math */ "./utils/math.js");



var _jsxFileName = "/home/dberezin/dev/berezin.io/components/demo.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var setupRenderCanvas = function setupRenderCanvas(canvas) {
  var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
      width = _canvas$getBoundingCl.width,
      height = _canvas$getBoundingCl.height;

  canvas.width = width;
  canvas.height = height;
  var c = regl__WEBPACK_IMPORTED_MODULE_3___default()(canvas);
  console.log('setting regl for');
  var drawTriangle = c({
    frag: "\n    precision mediump float;\n    varying vec3 vColor;\n    uniform vec4 color;\n    void main() {\n      gl_FragColor = vec4(vColor, 1);\n    }",
    vert: "\n    precision mediump float;\n    attribute vec2 position;\n    attribute vec3 aColor;\n    varying vec3 vColor;\n    void main() {\n      vColor = aColor;\n      gl_Position = vec4(position, 0, 1);\n    }",
    // Here we define the vertex attributes for the above shader
    attributes: {
      // regl.buffer creates a new array buffer object
      position: c.buffer([[0, 1], // no need to flatten nested arrays, regl automatically
      [-1, -1], // unrolls them into a typedarray (default Float32)
      [1, -1]]),
      aColor: c.buffer([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
    },
    uniforms: {
      // This defines the color of the triangle to be a dynamic variable
      color: c.prop('color')
    },
    // This tells regl the number of vertices to draw in this command
    count: 3
  }); // regl.frame() wraps requestAnimationFrame and also handles viewport changes

  c.frame(function (_ref) {
    var time = _ref.time;
    // clear contents of the drawing buffer
    c.clear({
      color: [51 / 255, 51 / 255, 77 / 255, 1],
      depth: 1
    });
    console.log([Math.cos(time * 0.001), Math.sin(time * 0.0008), Math.cos(time * 0.003)].map(function (n) {
      return Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["map"])(n, -1, 1, 0, 1);
    }));
    drawTriangle({
      color: [].concat(Object(_home_dberezin_dev_berezin_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])([Math.cos(time * 0.001), Math.sin(time * 0.0008), Math.cos(time * 0.003)].map(function (n) {
        return Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["map"])(n, -1, 1, 0, 1);
      })), [1])
    });
  });
};

var Demo = function Demo() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setupRenderCanvas(document.getElementById('rendercanvas'));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("canvas", {
    className: "rendercanvas",
    id: "rendercanvas"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 10
  }, _this);
};

_s(Demo, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Demo;
/* harmony default export */ __webpack_exports__["default"] = (Demo);

var _c;

$RefreshReg$(_c, "Demo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZW1vLmpzeCJdLCJuYW1lcyI6WyJzZXR1cFJlbmRlckNhbnZhcyIsImNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYyIsInJlZ2wiLCJjb25zb2xlIiwibG9nIiwiZHJhd1RyaWFuZ2xlIiwiZnJhZyIsInZlcnQiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJidWZmZXIiLCJhQ29sb3IiLCJ1bmlmb3JtcyIsImNvbG9yIiwicHJvcCIsImNvdW50IiwiZnJhbWUiLCJ0aW1lIiwiY2xlYXIiLCJkZXB0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJtYXAiLCJuIiwiRGVtbyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQUEsOEJBQ1ZBLE1BQU0sQ0FBQ0MscUJBQVAsRUFEVTtBQUFBLE1BQzVCQyxLQUQ0Qix5QkFDNUJBLEtBRDRCO0FBQUEsTUFDckJDLE1BRHFCLHlCQUNyQkEsTUFEcUI7O0FBRXBDSCxRQUFNLENBQUNFLEtBQVAsR0FBZUEsS0FBZjtBQUNBRixRQUFNLENBQUNHLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQywyQ0FBSSxDQUFDTCxNQUFELENBQWQ7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFFQSxNQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQztBQUNyQkssUUFBSSxzSkFEaUI7QUFTckJDLFFBQUksbU5BVGlCO0FBbUJyQjtBQUNBQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUVSLENBQUMsQ0FBQ1MsTUFBRixDQUFTLENBQ2pCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEaUIsRUFDVDtBQUNSLE9BQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLENBRmlCLEVBRVA7QUFDVixPQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FIaUIsQ0FBVCxDQUZBO0FBT1ZDLFlBQU0sRUFBRVYsQ0FBQyxDQUFDUyxNQUFGLENBQVMsQ0FDZixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURlLEVBRWYsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSGUsQ0FBVDtBQVBFLEtBcEJTO0FBa0NyQkUsWUFBUSxFQUFFO0FBQ1I7QUFDQUMsV0FBSyxFQUFFWixDQUFDLENBQUNhLElBQUYsQ0FBTyxPQUFQO0FBRkMsS0FsQ1c7QUF1Q3JCO0FBQ0FDLFNBQUssRUFBRTtBQXhDYyxHQUFELENBQXRCLENBUG9DLENBa0RwQzs7QUFDQWQsR0FBQyxDQUFDZSxLQUFGLENBQVEsZ0JBQWM7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEI7QUFDQWhCLEtBQUMsQ0FBQ2lCLEtBQUYsQ0FBUTtBQUNOTCxXQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQU4sRUFBVyxLQUFLLEdBQWhCLEVBQXFCLEtBQUssR0FBMUIsRUFBK0IsQ0FBL0IsQ0FERDtBQUVOTSxXQUFLLEVBQUU7QUFGRCxLQUFSO0FBS0FoQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDZ0IsSUFBSSxDQUFDQyxHQUFMLENBQVNKLElBQUksR0FBRyxLQUFoQixDQUFELEVBQXlCRyxJQUFJLENBQUNFLEdBQUwsQ0FBU0wsSUFBSSxHQUFHLE1BQWhCLENBQXpCLEVBQWtERyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osSUFBSSxHQUFHLEtBQWhCLENBQWxELEVBQTBFTSxHQUExRSxDQUE4RSxVQUFBQyxDQUFDO0FBQUEsYUFBSUQsdURBQUcsQ0FBQ0MsQ0FBRCxFQUFJLENBQUMsQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQO0FBQUEsS0FBL0UsQ0FBWjtBQUNBbkIsZ0JBQVksQ0FBQztBQUNYUSxXQUFLLG1KQUFPLENBQUNPLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixJQUFJLEdBQUcsS0FBaEIsQ0FBRCxFQUF5QkcsSUFBSSxDQUFDRSxHQUFMLENBQVNMLElBQUksR0FBRyxNQUFoQixDQUF6QixFQUFrREcsSUFBSSxDQUFDQyxHQUFMLENBQVNKLElBQUksR0FBRyxLQUFoQixDQUFsRCxFQUEwRU0sR0FBMUUsQ0FBOEUsVUFBQUMsQ0FBQztBQUFBLGVBQUlELHVEQUFHLENBQUNDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUDtBQUFBLE9BQS9FLENBQVAsSUFBaUgsQ0FBakg7QUFETSxLQUFELENBQVo7QUFHRCxHQVhEO0FBWUQsQ0EvREQ7O0FBaUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkOUIscUJBQWlCLENBQUMrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBRCxDQUFqQjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFBTztBQUFRLGFBQVMsRUFBQyxjQUFsQjtBQUFpQyxNQUFFLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FMRDs7R0FBTUgsSTs7S0FBQUEsSTtBQU9TQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTg3MzhmNGUwODc1Yjk3YmU2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVnbCBmcm9tICdyZWdsJ1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuY29uc3Qgc2V0dXBSZW5kZXJDYW52YXMgPSAoY2FudmFzKSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgY29uc3QgYyA9IHJlZ2woY2FudmFzKVxuICBjb25zb2xlLmxvZygnc2V0dGluZyByZWdsIGZvcicpXG5cbiAgY29uc3QgZHJhd1RyaWFuZ2xlID0gYyh7XG4gICAgZnJhZzogYFxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuICAgIHZhcnlpbmcgdmVjMyB2Q29sb3I7XG4gICAgdW5pZm9ybSB2ZWM0IGNvbG9yO1xuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG9yLCAxKTtcbiAgICB9YCxcblxuICAgIHZlcnQ6IGBcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiAgICBhdHRyaWJ1dGUgdmVjMiBwb3NpdGlvbjtcbiAgICBhdHRyaWJ1dGUgdmVjMyBhQ29sb3I7XG4gICAgdmFyeWluZyB2ZWMzIHZDb2xvcjtcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICB2Q29sb3IgPSBhQ29sb3I7XG4gICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDAsIDEpO1xuICAgIH1gLFxuXG4gICAgLy8gSGVyZSB3ZSBkZWZpbmUgdGhlIHZlcnRleCBhdHRyaWJ1dGVzIGZvciB0aGUgYWJvdmUgc2hhZGVyXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgLy8gcmVnbC5idWZmZXIgY3JlYXRlcyBhIG5ldyBhcnJheSBidWZmZXIgb2JqZWN0XG4gICAgICBwb3NpdGlvbjogYy5idWZmZXIoW1xuICAgICAgICBbMCwgMV0sIC8vIG5vIG5lZWQgdG8gZmxhdHRlbiBuZXN0ZWQgYXJyYXlzLCByZWdsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgWy0xLCAtMV0sIC8vIHVucm9sbHMgdGhlbSBpbnRvIGEgdHlwZWRhcnJheSAoZGVmYXVsdCBGbG9hdDMyKVxuICAgICAgICBbMSwgLTFdLFxuICAgICAgXSksXG4gICAgICBhQ29sb3I6IGMuYnVmZmVyKFtcbiAgICAgICAgWzEsIDAsIDBdLFxuICAgICAgICBbMCwgMSwgMF0sXG4gICAgICAgIFswLCAwLCAxXSxcbiAgICAgIF0pLFxuICAgIH0sXG5cbiAgICB1bmlmb3Jtczoge1xuICAgICAgLy8gVGhpcyBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgdHJpYW5nbGUgdG8gYmUgYSBkeW5hbWljIHZhcmlhYmxlXG4gICAgICBjb2xvcjogYy5wcm9wKCdjb2xvcicpLFxuICAgIH0sXG5cbiAgICAvLyBUaGlzIHRlbGxzIHJlZ2wgdGhlIG51bWJlciBvZiB2ZXJ0aWNlcyB0byBkcmF3IGluIHRoaXMgY29tbWFuZFxuICAgIGNvdW50OiAzLFxuICB9KVxuXG4gIC8vIHJlZ2wuZnJhbWUoKSB3cmFwcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYW5kIGFsc28gaGFuZGxlcyB2aWV3cG9ydCBjaGFuZ2VzXG4gIGMuZnJhbWUoKHsgdGltZSB9KSA9PiB7XG4gICAgLy8gY2xlYXIgY29udGVudHMgb2YgdGhlIGRyYXdpbmcgYnVmZmVyXG4gICAgYy5jbGVhcih7XG4gICAgICBjb2xvcjogWzUxIC8gMjU1LCA1MSAvIDI1NSwgNzcgLyAyNTUsIDFdLFxuICAgICAgZGVwdGg6IDEsXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKFtNYXRoLmNvcyh0aW1lICogMC4wMDEpLCBNYXRoLnNpbih0aW1lICogMC4wMDA4KSwgTWF0aC5jb3ModGltZSAqIDAuMDAzKV0ubWFwKG4gPT4gbWFwKG4sIC0xLCAxLCAwLCAxKSkpXG4gICAgZHJhd1RyaWFuZ2xlKHtcbiAgICAgIGNvbG9yOiBbLi4uKFtNYXRoLmNvcyh0aW1lICogMC4wMDEpLCBNYXRoLnNpbih0aW1lICogMC4wMDA4KSwgTWF0aC5jb3ModGltZSAqIDAuMDAzKV0ubWFwKG4gPT4gbWFwKG4sIC0xLCAxLCAwLCAxKSkpLCAxXSxcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBEZW1vID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldHVwUmVuZGVyQ2FudmFzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJjYW52YXMnKSlcbiAgfSwgW10pXG4gIHJldHVybiA8Y2FudmFzIGNsYXNzTmFtZT0ncmVuZGVyY2FudmFzJyBpZD0ncmVuZGVyY2FudmFzJyAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vXG4iXSwic291cmNlUm9vdCI6IiJ9