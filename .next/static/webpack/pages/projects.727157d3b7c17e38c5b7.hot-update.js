webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/projects */ \"./data/projects.js\");\n/* harmony import */ var _components_ProjectSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectSummary */ \"./components/ProjectSummary/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n\n\n\n\n\n\n\n\nvar Projects = function Projects(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    props.deactivateHome();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-headline\"],\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"].map(function (project) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProjectSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          id: project.id,\n          title: project.title,\n          description: project.description,\n          leadImage: project.images[0],\n          technologies: project.technologies,\n          history: props.history\n        }, project.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(null, {\n  deactivateHome: _redux_actions__WEBPACK_IMPORTED_MODULE_7__[\"deactivateHome\"]\n})(Projects));\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInByb3BzIiwidXNlRWZmZWN0IiwiZGVhY3RpdmF0ZUhvbWUiLCJzdHlsZXMiLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ0ZWNobm9sb2dpZXMiLCJoaXN0b3J5IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxTQUFLLENBQUNFLGNBQU47QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMsbUVBQU0sQ0FBQyxVQUFELENBQXRCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFQSxtRUFBTSxDQUFDLG1CQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0MsdURBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw0QkFDWixxRUFBQyxrRUFBRDtBQUVFLFlBQUUsRUFBRUEsT0FBTyxDQUFDQyxFQUZkO0FBR0UsZUFBSyxFQUFFRCxPQUFPLENBQUNFLEtBSGpCO0FBSUUscUJBQVcsRUFBRUYsT0FBTyxDQUFDRyxXQUp2QjtBQUtFLG1CQUFTLEVBQUVILE9BQU8sQ0FBQ0ksTUFBUixDQUFlLENBQWYsQ0FMYjtBQU1FLHNCQUFZLEVBQUVKLE9BQU8sQ0FBQ0ssWUFOeEI7QUFPRSxpQkFBTyxFQUFFWCxLQUFLLENBQUNZO0FBUGpCLFdBQ09OLE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXZCRDs7R0FBTVIsUTs7S0FBQUEsUTtBQXlCU2MsMEhBQU8sQ0FBQyxJQUFELEVBQU87QUFBRVgsZ0JBQWMsRUFBZEEsNkRBQWNBO0FBQWhCLENBQVAsQ0FBUCxDQUFrQ0gsUUFBbEMsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGEvcHJvamVjdHNcIjtcbmltcG9ydCBQcm9qZWN0U3VtbWFyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0U3VtbWFyeVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgZGVhY3RpdmF0ZUhvbWUgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBQcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLmRlYWN0aXZhdGVIb21lKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHNcIl19PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1oZWFkbGluZVwiXX0+UHJvamVjdHM8L2gxPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgPFByb2plY3RTdW1tYXJ5XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsZWFkSW1hZ2U9e3Byb2plY3QuaW1hZ2VzWzBdfVxuICAgICAgICAgICAgdGVjaG5vbG9naWVzPXtwcm9qZWN0LnRlY2hub2xvZ2llc31cbiAgICAgICAgICAgIGhpc3Rvcnk9e3Byb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBkZWFjdGl2YXRlSG9tZSB9KShQcm9qZWN0cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})