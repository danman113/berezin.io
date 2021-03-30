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
    frag: "\n    precision mediump float;\n    varying vec3 vColor;\n    uniform vec4 color;\n    void main() {\n      // gl_FragColor = vec4(vColor, 1);\n      gl_FragColor = color.rgb * vColor;\n    }",
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
    drawTriangle({
      color: [].concat(Object(_home_dberezin_dev_berezin_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])([Math.cos(time * 1.001), Math.sin(time * 1.0008), Math.cos(time * 1.003)].map(function (n) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZW1vLmpzeCJdLCJuYW1lcyI6WyJzZXR1cFJlbmRlckNhbnZhcyIsImNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYyIsInJlZ2wiLCJjb25zb2xlIiwibG9nIiwiZHJhd1RyaWFuZ2xlIiwiZnJhZyIsInZlcnQiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJidWZmZXIiLCJhQ29sb3IiLCJ1bmlmb3JtcyIsImNvbG9yIiwicHJvcCIsImNvdW50IiwiZnJhbWUiLCJ0aW1lIiwiY2xlYXIiLCJkZXB0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJtYXAiLCJuIiwiRGVtbyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQUEsOEJBQ1ZBLE1BQU0sQ0FBQ0MscUJBQVAsRUFEVTtBQUFBLE1BQzVCQyxLQUQ0Qix5QkFDNUJBLEtBRDRCO0FBQUEsTUFDckJDLE1BRHFCLHlCQUNyQkEsTUFEcUI7O0FBRXBDSCxRQUFNLENBQUNFLEtBQVAsR0FBZUEsS0FBZjtBQUNBRixRQUFNLENBQUNHLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHQywyQ0FBSSxDQUFDTCxNQUFELENBQWQ7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFFQSxNQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQztBQUNyQkssUUFBSSxtTUFEaUI7QUFVckJDLFFBQUksbU5BVmlCO0FBb0JyQjtBQUNBQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUVSLENBQUMsQ0FBQ1MsTUFBRixDQUFTLENBQ2pCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEaUIsRUFDVDtBQUNSLE9BQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLENBRmlCLEVBRVA7QUFDVixPQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FIaUIsQ0FBVCxDQUZBO0FBT1ZDLFlBQU0sRUFBRVYsQ0FBQyxDQUFDUyxNQUFGLENBQVMsQ0FDZixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURlLEVBRWYsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSGUsQ0FBVDtBQVBFLEtBckJTO0FBbUNyQkUsWUFBUSxFQUFFO0FBQ1I7QUFDQUMsV0FBSyxFQUFFWixDQUFDLENBQUNhLElBQUYsQ0FBTyxPQUFQO0FBRkMsS0FuQ1c7QUF3Q3JCO0FBQ0FDLFNBQUssRUFBRTtBQXpDYyxHQUFELENBQXRCLENBUG9DLENBbURwQzs7QUFDQWQsR0FBQyxDQUFDZSxLQUFGLENBQVEsZ0JBQWM7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEI7QUFDQWhCLEtBQUMsQ0FBQ2lCLEtBQUYsQ0FBUTtBQUNOTCxXQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQU4sRUFBVyxLQUFLLEdBQWhCLEVBQXFCLEtBQUssR0FBMUIsRUFBK0IsQ0FBL0IsQ0FERDtBQUVOTSxXQUFLLEVBQUU7QUFGRCxLQUFSO0FBS0FkLGdCQUFZLENBQUM7QUFDWFEsV0FBSyxtSkFBTyxDQUFDTyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osSUFBSSxHQUFHLEtBQWhCLENBQUQsRUFBeUJHLElBQUksQ0FBQ0UsR0FBTCxDQUFTTCxJQUFJLEdBQUcsTUFBaEIsQ0FBekIsRUFBa0RHLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixJQUFJLEdBQUcsS0FBaEIsQ0FBbEQsRUFBMEVNLEdBQTFFLENBQThFLFVBQUFDLENBQUM7QUFBQSxlQUFJRCx1REFBRyxDQUFDQyxDQUFELEVBQUksQ0FBQyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQVA7QUFBQSxPQUEvRSxDQUFQLElBQWlILENBQWpIO0FBRE0sS0FBRCxDQUFaO0FBR0QsR0FWRDtBQVdELENBL0REOztBQWlFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZDlCLHFCQUFpQixDQUFDK0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQUQsQ0FBakI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQU87QUFBUSxhQUFTLEVBQUMsY0FBbEI7QUFBaUMsTUFBRSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBTEQ7O0dBQU1ILEk7O0tBQUFBLEk7QUFPU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM0MWE5ZDAwMDRjN2Y3OWQyMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlZ2wgZnJvbSAncmVnbCdcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmNvbnN0IHNldHVwUmVuZGVyQ2FudmFzID0gKGNhbnZhcykgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBjYW52YXMud2lkdGggPSB3aWR0aFxuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gIGNvbnN0IGMgPSByZWdsKGNhbnZhcylcbiAgY29uc29sZS5sb2coJ3NldHRpbmcgcmVnbCBmb3InKVxuXG4gIGNvbnN0IGRyYXdUcmlhbmdsZSA9IGMoe1xuICAgIGZyYWc6IGBcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiAgICB2YXJ5aW5nIHZlYzMgdkNvbG9yO1xuICAgIHVuaWZvcm0gdmVjNCBjb2xvcjtcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvciwgMSk7XG4gICAgICBnbF9GcmFnQ29sb3IgPSBjb2xvci5yZ2IgKiB2Q29sb3I7XG4gICAgfWAsXG5cbiAgICB2ZXJ0OiBgXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4gICAgYXR0cmlidXRlIHZlYzIgcG9zaXRpb247XG4gICAgYXR0cmlidXRlIHZlYzMgYUNvbG9yO1xuICAgIHZhcnlpbmcgdmVjMyB2Q29sb3I7XG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgdkNvbG9yID0gYUNvbG9yO1xuICAgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAwLCAxKTtcbiAgICB9YCxcblxuICAgIC8vIEhlcmUgd2UgZGVmaW5lIHRoZSB2ZXJ0ZXggYXR0cmlidXRlcyBmb3IgdGhlIGFib3ZlIHNoYWRlclxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIC8vIHJlZ2wuYnVmZmVyIGNyZWF0ZXMgYSBuZXcgYXJyYXkgYnVmZmVyIG9iamVjdFxuICAgICAgcG9zaXRpb246IGMuYnVmZmVyKFtcbiAgICAgICAgWzAsIDFdLCAvLyBubyBuZWVkIHRvIGZsYXR0ZW4gbmVzdGVkIGFycmF5cywgcmVnbCBhdXRvbWF0aWNhbGx5XG4gICAgICAgIFstMSwgLTFdLCAvLyB1bnJvbGxzIHRoZW0gaW50byBhIHR5cGVkYXJyYXkgKGRlZmF1bHQgRmxvYXQzMilcbiAgICAgICAgWzEsIC0xXSxcbiAgICAgIF0pLFxuICAgICAgYUNvbG9yOiBjLmJ1ZmZlcihbXG4gICAgICAgIFsxLCAwLCAwXSxcbiAgICAgICAgWzAsIDEsIDBdLFxuICAgICAgICBbMCwgMCwgMV0sXG4gICAgICBdKSxcbiAgICB9LFxuXG4gICAgdW5pZm9ybXM6IHtcbiAgICAgIC8vIFRoaXMgZGVmaW5lcyB0aGUgY29sb3Igb2YgdGhlIHRyaWFuZ2xlIHRvIGJlIGEgZHluYW1pYyB2YXJpYWJsZVxuICAgICAgY29sb3I6IGMucHJvcCgnY29sb3InKSxcbiAgICB9LFxuXG4gICAgLy8gVGhpcyB0ZWxscyByZWdsIHRoZSBudW1iZXIgb2YgdmVydGljZXMgdG8gZHJhdyBpbiB0aGlzIGNvbW1hbmRcbiAgICBjb3VudDogMyxcbiAgfSlcblxuICAvLyByZWdsLmZyYW1lKCkgd3JhcHMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFuZCBhbHNvIGhhbmRsZXMgdmlld3BvcnQgY2hhbmdlc1xuICBjLmZyYW1lKCh7IHRpbWUgfSkgPT4ge1xuICAgIC8vIGNsZWFyIGNvbnRlbnRzIG9mIHRoZSBkcmF3aW5nIGJ1ZmZlclxuICAgIGMuY2xlYXIoe1xuICAgICAgY29sb3I6IFs1MSAvIDI1NSwgNTEgLyAyNTUsIDc3IC8gMjU1LCAxXSxcbiAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG5cbiAgICBkcmF3VHJpYW5nbGUoe1xuICAgICAgY29sb3I6IFsuLi4oW01hdGguY29zKHRpbWUgKiAxLjAwMSksIE1hdGguc2luKHRpbWUgKiAxLjAwMDgpLCBNYXRoLmNvcyh0aW1lICogMS4wMDMpXS5tYXAobiA9PiBtYXAobiwgLTEsIDEsIDAsIDEpKSksIDFdLFxuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IERlbW8gPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dXBSZW5kZXJDYW52YXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlcmNhbnZhcycpKVxuICB9LCBbXSlcbiAgcmV0dXJuIDxjYW52YXMgY2xhc3NOYW1lPSdyZW5kZXJjYW52YXMnIGlkPSdyZW5kZXJjYW52YXMnIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW9cbiJdLCJzb3VyY2VSb290IjoiIn0=