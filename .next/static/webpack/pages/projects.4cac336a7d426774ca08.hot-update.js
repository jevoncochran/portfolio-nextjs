webpackHotUpdate_N_E("pages/projects",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: activateHome, deactivateHome, SET_PAGE_HOME_START, SET_PAGE_HOME_SUCCESS, LEAVE_HOME_PAGE_START, LEAVE_HOME_PAGE_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-actions */ \"./redux/actions/page-actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"activateHome\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"activateHome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deactivateHome\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"deactivateHome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE_HOME_START\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE_HOME_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE_HOME_SUCCESS\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE_HOME_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LEAVE_HOME_PAGE_START\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"LEAVE_HOME_PAGE_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LEAVE_HOME_PAGE_SUCCESS\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"LEAVE_HOME_PAGE_SUCCESS\"]; });\n\n/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-actions */ \"./redux/actions/project-actions.js\");\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcz9jN2RkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQSIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhY3RpdmF0ZUhvbWUsXG4gIGRlYWN0aXZhdGVIb21lLFxuICBTRVRfUEFHRV9IT01FX1NUQVJULFxuICBTRVRfUEFHRV9IT01FX1NVQ0NFU1MsXG4gIExFQVZFX0hPTUVfUEFHRV9TVEFSVCxcbiAgTEVBVkVfSE9NRV9QQUdFX1NVQ0NFU1MsXG59IGZyb20gXCIuL3BhZ2UtYWN0aW9uc1wiO1xuXG5pbXBvcnQge3NldFByb2plY3QsIH0gZnJvbSBcIi4vcHJvamVjdC1hY3Rpb25zXCJcblxuZXhwb3J0IHtcbiAgYWN0aXZhdGVIb21lLFxuICBkZWFjdGl2YXRlSG9tZSxcbiAgU0VUX1BBR0VfSE9NRV9TVEFSVCxcbiAgU0VUX1BBR0VfSE9NRV9TVUNDRVNTLFxuICBMRUFWRV9IT01FX1BBR0VfU1RBUlQsXG4gIExFQVZFX0hPTUVfUEFHRV9TVUNDRVNTLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/index.js\n");

/***/ })

})