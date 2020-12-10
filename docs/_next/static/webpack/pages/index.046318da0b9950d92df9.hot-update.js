webpackHotUpdate_N_E("pages/index",{

/***/ "./components/demo.jsx":
/*!*****************************!*\
  !*** ./components/demo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regl */ "./node_modules/regl/dist/regl.js");
/* harmony import */ var regl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regl__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/dberezin/dev/berezin.io/components/demo.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var setupRenderCanvas = function setupRenderCanvas(canvas) {
  var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
      width = _canvas$getBoundingCl.width,
      height = _canvas$getBoundingCl.height;

  canvas.width = width;
  canvas.height = height;
  var c = regl__WEBPACK_IMPORTED_MODULE_2___default()(canvas);
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
      color: [1, 0, 0, 1],
      depth: 1
    }); // draw a triangle using the command defined above

    drawTriangle({
      color: [Math.cos(time * 0.001), Math.sin(time * 0.0008), Math.cos(time * 0.003), 1]
    });
  });
};

var Demo = function Demo() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setupRenderCanvas(document.getElementById('rendercanvas'));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
    className: "rendercanvas",
    id: "rendercanvas"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZW1vLmpzeCJdLCJuYW1lcyI6WyJzZXR1cFJlbmRlckNhbnZhcyIsImNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYyIsInJlZ2wiLCJjb25zb2xlIiwibG9nIiwiZHJhd1RyaWFuZ2xlIiwiZnJhZyIsInZlcnQiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJidWZmZXIiLCJhQ29sb3IiLCJ1bmlmb3JtcyIsImNvbG9yIiwicHJvcCIsImNvdW50IiwiZnJhbWUiLCJ0aW1lIiwiY2xlYXIiLCJkZXB0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJEZW1vIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQUEsOEJBQ1ZBLE1BQU0sQ0FBQ0MscUJBQVAsRUFEVTtBQUFBLE1BQzVCQyxLQUQ0Qix5QkFDNUJBLEtBRDRCO0FBQUEsTUFDckJDLE1BRHFCLHlCQUNyQkEsTUFEcUI7O0FBRXBDSCxRQUFNLENBQUNFLEtBQVAsR0FBZUEsS0FBZjtBQUNBRixRQUFNLENBQUNHLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQywyQ0FBSSxDQUFDTCxNQUFELENBQWQ7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFFQSxNQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQztBQUNyQkssUUFBSSxzSkFEaUI7QUFTckJDLFFBQUksbU5BVGlCO0FBbUJyQjtBQUNBQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUVSLENBQUMsQ0FBQ1MsTUFBRixDQUFTLENBQ2pCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEaUIsRUFDVDtBQUNSLE9BQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLENBRmlCLEVBRVA7QUFDVixPQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FIaUIsQ0FBVCxDQUZBO0FBT1ZDLFlBQU0sRUFBRVYsQ0FBQyxDQUFDUyxNQUFGLENBQVMsQ0FDZixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURlLEVBRWYsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSGUsQ0FBVDtBQVBFLEtBcEJTO0FBa0NyQkUsWUFBUSxFQUFFO0FBQ1I7QUFDQUMsV0FBSyxFQUFFWixDQUFDLENBQUNhLElBQUYsQ0FBTyxPQUFQO0FBRkMsS0FsQ1c7QUF1Q3JCO0FBQ0FDLFNBQUssRUFBRTtBQXhDYyxHQUFELENBQXRCLENBUG9DLENBa0RwQzs7QUFDQWQsR0FBQyxDQUFDZSxLQUFGLENBQVEsZ0JBQWM7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEI7QUFDQWhCLEtBQUMsQ0FBQ2lCLEtBQUYsQ0FBUTtBQUNOTCxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBREQ7QUFFTk0sV0FBSyxFQUFFO0FBRkQsS0FBUixFQUZvQixDQU9wQjs7QUFDQWQsZ0JBQVksQ0FBQztBQUNYUSxXQUFLLEVBQUUsQ0FBQ08sSUFBSSxDQUFDQyxHQUFMLENBQVNKLElBQUksR0FBRyxLQUFoQixDQUFELEVBQXlCRyxJQUFJLENBQUNFLEdBQUwsQ0FBU0wsSUFBSSxHQUFHLE1BQWhCLENBQXpCLEVBQWtERyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osSUFBSSxHQUFHLEtBQWhCLENBQWxELEVBQTBFLENBQTFFO0FBREksS0FBRCxDQUFaO0FBR0QsR0FYRDtBQVlELENBL0REOztBQWlFQSxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZDVCLHFCQUFpQixDQUFDNkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQUQsQ0FBakI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQU87QUFBUSxhQUFTLEVBQUMsY0FBbEI7QUFBaUMsTUFBRSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBTEQ7O0dBQU1ILEk7O0tBQUFBLEk7QUFPU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDQ2MzE4ZGEwYjk5NTBkOTJkZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlZ2wgZnJvbSAncmVnbCdcblxuY29uc3Qgc2V0dXBSZW5kZXJDYW52YXMgPSAoY2FudmFzKSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgY29uc3QgYyA9IHJlZ2woY2FudmFzKVxuICBjb25zb2xlLmxvZygnc2V0dGluZyByZWdsIGZvcicpXG5cbiAgY29uc3QgZHJhd1RyaWFuZ2xlID0gYyh7XG4gICAgZnJhZzogYFxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuICAgIHZhcnlpbmcgdmVjMyB2Q29sb3I7XG4gICAgdW5pZm9ybSB2ZWM0IGNvbG9yO1xuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG9yLCAxKTtcbiAgICB9YCxcblxuICAgIHZlcnQ6IGBcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiAgICBhdHRyaWJ1dGUgdmVjMiBwb3NpdGlvbjtcbiAgICBhdHRyaWJ1dGUgdmVjMyBhQ29sb3I7XG4gICAgdmFyeWluZyB2ZWMzIHZDb2xvcjtcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICB2Q29sb3IgPSBhQ29sb3I7XG4gICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDAsIDEpO1xuICAgIH1gLFxuXG4gICAgLy8gSGVyZSB3ZSBkZWZpbmUgdGhlIHZlcnRleCBhdHRyaWJ1dGVzIGZvciB0aGUgYWJvdmUgc2hhZGVyXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgLy8gcmVnbC5idWZmZXIgY3JlYXRlcyBhIG5ldyBhcnJheSBidWZmZXIgb2JqZWN0XG4gICAgICBwb3NpdGlvbjogYy5idWZmZXIoW1xuICAgICAgICBbMCwgMV0sIC8vIG5vIG5lZWQgdG8gZmxhdHRlbiBuZXN0ZWQgYXJyYXlzLCByZWdsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgWy0xLCAtMV0sIC8vIHVucm9sbHMgdGhlbSBpbnRvIGEgdHlwZWRhcnJheSAoZGVmYXVsdCBGbG9hdDMyKVxuICAgICAgICBbMSwgLTFdLFxuICAgICAgXSksXG4gICAgICBhQ29sb3I6IGMuYnVmZmVyKFtcbiAgICAgICAgWzEsIDAsIDBdLFxuICAgICAgICBbMCwgMSwgMF0sXG4gICAgICAgIFswLCAwLCAxXSxcbiAgICAgIF0pLFxuICAgIH0sXG5cbiAgICB1bmlmb3Jtczoge1xuICAgICAgLy8gVGhpcyBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgdHJpYW5nbGUgdG8gYmUgYSBkeW5hbWljIHZhcmlhYmxlXG4gICAgICBjb2xvcjogYy5wcm9wKCdjb2xvcicpLFxuICAgIH0sXG5cbiAgICAvLyBUaGlzIHRlbGxzIHJlZ2wgdGhlIG51bWJlciBvZiB2ZXJ0aWNlcyB0byBkcmF3IGluIHRoaXMgY29tbWFuZFxuICAgIGNvdW50OiAzLFxuICB9KVxuXG4gIC8vIHJlZ2wuZnJhbWUoKSB3cmFwcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYW5kIGFsc28gaGFuZGxlcyB2aWV3cG9ydCBjaGFuZ2VzXG4gIGMuZnJhbWUoKHsgdGltZSB9KSA9PiB7XG4gICAgLy8gY2xlYXIgY29udGVudHMgb2YgdGhlIGRyYXdpbmcgYnVmZmVyXG4gICAgYy5jbGVhcih7XG4gICAgICBjb2xvcjogWzEsIDAsIDAsIDFdLFxuICAgICAgZGVwdGg6IDEsXG4gICAgfSlcblxuICAgIC8vIGRyYXcgYSB0cmlhbmdsZSB1c2luZyB0aGUgY29tbWFuZCBkZWZpbmVkIGFib3ZlXG4gICAgZHJhd1RyaWFuZ2xlKHtcbiAgICAgIGNvbG9yOiBbTWF0aC5jb3ModGltZSAqIDAuMDAxKSwgTWF0aC5zaW4odGltZSAqIDAuMDAwOCksIE1hdGguY29zKHRpbWUgKiAwLjAwMyksIDFdLFxuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IERlbW8gPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dXBSZW5kZXJDYW52YXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlcmNhbnZhcycpKVxuICB9LCBbXSlcbiAgcmV0dXJuIDxjYW52YXMgY2xhc3NOYW1lPSdyZW5kZXJjYW52YXMnIGlkPSdyZW5kZXJjYW52YXMnIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW9cbiJdLCJzb3VyY2VSb290IjoiIn0=