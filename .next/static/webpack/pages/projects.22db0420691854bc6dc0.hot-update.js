webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/ProjectSummary/index.js":
/*!********************************************!*\
  !*** ./components/ProjectSummary/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/components/ProjectSummary/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar ProjectSummary = function ProjectSummary(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-text-container\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-title\"],\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-description\"],\n        children: props.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"project-ps-technologies-headline\"],\n        children: \"TECHNOLOGIES:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-technologies-container\"],\n        children: props.technologies && props.technologies.map(function (t) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-tech\"],\n            children: t\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.id),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"project-ps-btn-div\"],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"project-ps-btn\"],\n            onClick: function onClick() {\n              return props.setProject(props.id);\n            },\n            children: \"More details\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-img\"],\n      src: props.leadImage,\n      alt: \"\",\n      onClick: function onClick() {\n        return props.history.push(\"/projects/\".concat(props.id));\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ProjectSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(null, {\n  setProject: _redux_actions__WEBPACK_IMPORTED_MODULE_5__[\"setProject\"]\n})(ProjectSummary));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectSummary\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0U3VtbWFyeS9pbmRleC5qcz85MDQwIl0sIm5hbWVzIjpbIlByb2plY3RTdW1tYXJ5IiwicHJvcHMiLCJzdHlsZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwibWFwIiwidCIsImlkIiwic2V0UHJvamVjdCIsImxlYWRJbWFnZSIsImhpc3RvcnkiLCJwdXNoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLG1FQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxtRUFBTSxDQUFDLDRCQUFELENBQXRCO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFFQSxtRUFBTSxDQUFDLG1CQUFELENBQXBCO0FBQUEsa0JBQTRDRCxLQUFLLENBQUNFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsaUJBQVMsRUFBRUQsbUVBQU0sQ0FBQyx5QkFBRCxDQUFwQjtBQUFBLGtCQUFrREQsS0FBSyxDQUFDRztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFHLGlCQUFTLEVBQUVGLG1FQUFNLENBQUMsa0NBQUQsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQU1FO0FBQUssaUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyxvQ0FBRCxDQUF0QjtBQUFBLGtCQUNHRCxLQUFLLENBQUNJLFlBQU4sSUFDQ0osS0FBSyxDQUFDSSxZQUFOLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxDQUFEO0FBQUEsOEJBQ3JCO0FBQUsscUJBQVMsRUFBRUwsbUVBQU0sQ0FBQyxrQkFBRCxDQUF0QjtBQUFBLHNCQUE2Q0s7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUI7QUFBQSxTQUF2QjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVlFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxzQkFBZU4sS0FBSyxDQUFDTyxFQUFyQixDQUFWO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFTixtRUFBTSxDQUFDLG9CQUFELENBQXRCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFQSxtRUFBTSxDQUFDLGdCQUFELENBRG5CO0FBRUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFNRCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJSLEtBQUssQ0FBQ08sRUFBdkIsQ0FBTjtBQUFBLGFBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBd0JFO0FBQ0UsZUFBUyxFQUFFTixtRUFBTSxDQUFDLGlCQUFELENBRG5CO0FBRUUsU0FBRyxFQUFFRCxLQUFLLENBQUNTLFNBRmI7QUFHRSxTQUFHLEVBQUMsRUFITjtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1ULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxJQUFkLHFCQUFnQ1gsS0FBSyxDQUFDTyxFQUF0QyxFQUFOO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBbENEOztLQUFNUixjO0FBb0NTYSwwSEFBTyxDQUFDLElBQUQsRUFBTztBQUFFSixZQUFVLEVBQVZBLHlEQUFVQTtBQUFaLENBQVAsQ0FBUCxDQUE4QlQsY0FBOUIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdFN1bW1hcnkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5pbXBvcnQgeyBzZXRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgUHJvamVjdFN1bW1hcnkgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcHNcIl19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBzLXRleHQtY29udGFpbmVyXCJdfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wcy10aXRsZVwiXX0+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wcy1kZXNjcmlwdGlvblwiXX0+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0LXBzLXRlY2hub2xvZ2llcy1oZWFkbGluZVwiXX0+XG4gICAgICAgICAgVEVDSE5PTE9HSUVTOlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wcy10ZWNobm9sb2dpZXMtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICB7cHJvcHMudGVjaG5vbG9naWVzICYmXG4gICAgICAgICAgICBwcm9wcy50ZWNobm9sb2dpZXMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wcy10ZWNoXCJdfT57dH08L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0LXBzLWJ0bi1kaXZcIl19PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3QtcHMtYnRuXCJdfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRQcm9qZWN0KHByb3BzLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTW9yZSBkZXRhaWxzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcHMtaW1nXCJdfVxuICAgICAgICBzcmM9e3Byb3BzLmxlYWRJbWFnZX1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGlzdG9yeS5wdXNoKGAvcHJvamVjdHMvJHtwcm9wcy5pZH1gKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgc2V0UHJvamVjdCB9KShQcm9qZWN0U3VtbWFyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectSummary/index.js\n");

/***/ })

})