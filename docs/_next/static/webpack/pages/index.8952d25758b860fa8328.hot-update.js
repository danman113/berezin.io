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
      color: [39 / 255, 43 / 255, 48 / 255, 1],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZW1vLmpzeCJdLCJuYW1lcyI6WyJzZXR1cFJlbmRlckNhbnZhcyIsImNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYyIsInJlZ2wiLCJjb25zb2xlIiwibG9nIiwiZHJhd1RyaWFuZ2xlIiwiZnJhZyIsInZlcnQiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJidWZmZXIiLCJhQ29sb3IiLCJ1bmlmb3JtcyIsImNvbG9yIiwicHJvcCIsImNvdW50IiwiZnJhbWUiLCJ0aW1lIiwiY2xlYXIiLCJkZXB0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJEZW1vIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQUEsOEJBQ1ZBLE1BQU0sQ0FBQ0MscUJBQVAsRUFEVTtBQUFBLE1BQzVCQyxLQUQ0Qix5QkFDNUJBLEtBRDRCO0FBQUEsTUFDckJDLE1BRHFCLHlCQUNyQkEsTUFEcUI7O0FBRXBDSCxRQUFNLENBQUNFLEtBQVAsR0FBZUEsS0FBZjtBQUNBRixRQUFNLENBQUNHLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQywyQ0FBSSxDQUFDTCxNQUFELENBQWQ7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFFQSxNQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQztBQUNyQkssUUFBSSxzSkFEaUI7QUFTckJDLFFBQUksbU5BVGlCO0FBbUJyQjtBQUNBQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUVSLENBQUMsQ0FBQ1MsTUFBRixDQUFTLENBQ2pCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEaUIsRUFDVDtBQUNSLE9BQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLENBRmlCLEVBRVA7QUFDVixPQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FIaUIsQ0FBVCxDQUZBO0FBT1ZDLFlBQU0sRUFBRVYsQ0FBQyxDQUFDUyxNQUFGLENBQVMsQ0FDZixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURlLEVBRWYsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSGUsQ0FBVDtBQVBFLEtBcEJTO0FBa0NyQkUsWUFBUSxFQUFFO0FBQ1I7QUFDQUMsV0FBSyxFQUFFWixDQUFDLENBQUNhLElBQUYsQ0FBTyxPQUFQO0FBRkMsS0FsQ1c7QUF1Q3JCO0FBQ0FDLFNBQUssRUFBRTtBQXhDYyxHQUFELENBQXRCLENBUG9DLENBa0RwQzs7QUFDQWQsR0FBQyxDQUFDZSxLQUFGLENBQVEsZ0JBQWM7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEI7QUFDQWhCLEtBQUMsQ0FBQ2lCLEtBQUYsQ0FBUTtBQUNOTCxXQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQU4sRUFBVyxLQUFLLEdBQWhCLEVBQXFCLEtBQUssR0FBMUIsRUFBK0IsQ0FBL0IsQ0FERDtBQUVOTSxXQUFLLEVBQUU7QUFGRCxLQUFSLEVBRm9CLENBT3BCOztBQUNBZCxnQkFBWSxDQUFDO0FBQ1hRLFdBQUssRUFBRSxDQUFDTyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osSUFBSSxHQUFHLEtBQWhCLENBQUQsRUFBeUJHLElBQUksQ0FBQ0UsR0FBTCxDQUFTTCxJQUFJLEdBQUcsTUFBaEIsQ0FBekIsRUFBa0RHLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixJQUFJLEdBQUcsS0FBaEIsQ0FBbEQsRUFBMEUsQ0FBMUU7QUFESSxLQUFELENBQVo7QUFHRCxHQVhEO0FBWUQsQ0EvREQ7O0FBaUVBLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkNUIscUJBQWlCLENBQUM2QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBRCxDQUFqQjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFBTztBQUFRLGFBQVMsRUFBQyxjQUFsQjtBQUFpQyxNQUFFLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FMRDs7R0FBTUgsSTs7S0FBQUEsSTtBQU9TQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OTUyZDI1NzU4Yjg2MGZhODMyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVnbCBmcm9tICdyZWdsJ1xuXG5jb25zdCBzZXR1cFJlbmRlckNhbnZhcyA9IChjYW52YXMpID0+IHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY2FudmFzLndpZHRoID0gd2lkdGhcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICBjb25zdCBjID0gcmVnbChjYW52YXMpXG4gIGNvbnNvbGUubG9nKCdzZXR0aW5nIHJlZ2wgZm9yJylcblxuICBjb25zdCBkcmF3VHJpYW5nbGUgPSBjKHtcbiAgICBmcmFnOiBgXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4gICAgdmFyeWluZyB2ZWMzIHZDb2xvcjtcbiAgICB1bmlmb3JtIHZlYzQgY29sb3I7XG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3IsIDEpO1xuICAgIH1gLFxuXG4gICAgdmVydDogYFxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuICAgIGF0dHJpYnV0ZSB2ZWMyIHBvc2l0aW9uO1xuICAgIGF0dHJpYnV0ZSB2ZWMzIGFDb2xvcjtcbiAgICB2YXJ5aW5nIHZlYzMgdkNvbG9yO1xuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgIHZDb2xvciA9IGFDb2xvcjtcbiAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMCwgMSk7XG4gICAgfWAsXG5cbiAgICAvLyBIZXJlIHdlIGRlZmluZSB0aGUgdmVydGV4IGF0dHJpYnV0ZXMgZm9yIHRoZSBhYm92ZSBzaGFkZXJcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAvLyByZWdsLmJ1ZmZlciBjcmVhdGVzIGEgbmV3IGFycmF5IGJ1ZmZlciBvYmplY3RcbiAgICAgIHBvc2l0aW9uOiBjLmJ1ZmZlcihbXG4gICAgICAgIFswLCAxXSwgLy8gbm8gbmVlZCB0byBmbGF0dGVuIG5lc3RlZCBhcnJheXMsIHJlZ2wgYXV0b21hdGljYWxseVxuICAgICAgICBbLTEsIC0xXSwgLy8gdW5yb2xscyB0aGVtIGludG8gYSB0eXBlZGFycmF5IChkZWZhdWx0IEZsb2F0MzIpXG4gICAgICAgIFsxLCAtMV0sXG4gICAgICBdKSxcbiAgICAgIGFDb2xvcjogYy5idWZmZXIoW1xuICAgICAgICBbMSwgMCwgMF0sXG4gICAgICAgIFswLCAxLCAwXSxcbiAgICAgICAgWzAsIDAsIDFdLFxuICAgICAgXSksXG4gICAgfSxcblxuICAgIHVuaWZvcm1zOiB7XG4gICAgICAvLyBUaGlzIGRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSB0cmlhbmdsZSB0byBiZSBhIGR5bmFtaWMgdmFyaWFibGVcbiAgICAgIGNvbG9yOiBjLnByb3AoJ2NvbG9yJyksXG4gICAgfSxcblxuICAgIC8vIFRoaXMgdGVsbHMgcmVnbCB0aGUgbnVtYmVyIG9mIHZlcnRpY2VzIHRvIGRyYXcgaW4gdGhpcyBjb21tYW5kXG4gICAgY291bnQ6IDMsXG4gIH0pXG5cbiAgLy8gcmVnbC5mcmFtZSgpIHdyYXBzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhbmQgYWxzbyBoYW5kbGVzIHZpZXdwb3J0IGNoYW5nZXNcbiAgYy5mcmFtZSgoeyB0aW1lIH0pID0+IHtcbiAgICAvLyBjbGVhciBjb250ZW50cyBvZiB0aGUgZHJhd2luZyBidWZmZXJcbiAgICBjLmNsZWFyKHtcbiAgICAgIGNvbG9yOiBbMzkgLyAyNTUsIDQzIC8gMjU1LCA0OCAvIDI1NSwgMV0sXG4gICAgICBkZXB0aDogMSxcbiAgICB9KVxuXG4gICAgLy8gZHJhdyBhIHRyaWFuZ2xlIHVzaW5nIHRoZSBjb21tYW5kIGRlZmluZWQgYWJvdmVcbiAgICBkcmF3VHJpYW5nbGUoe1xuICAgICAgY29sb3I6IFtNYXRoLmNvcyh0aW1lICogMC4wMDEpLCBNYXRoLnNpbih0aW1lICogMC4wMDA4KSwgTWF0aC5jb3ModGltZSAqIDAuMDAzKSwgMV0sXG4gICAgfSlcbiAgfSlcbn1cblxuY29uc3QgRGVtbyA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXR1cFJlbmRlckNhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyY2FudmFzJykpXG4gIH0sIFtdKVxuICByZXR1cm4gPGNhbnZhcyBjbGFzc05hbWU9J3JlbmRlcmNhbnZhcycgaWQ9J3JlbmRlcmNhbnZhcycgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==