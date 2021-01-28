webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/ProjectSummary/index.js":
/*!********************************************!*\
  !*** ./components/ProjectSummary/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/components/ProjectSummary/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar ProjectSummary = function ProjectSummary(props) {\n  var configureProject = function configureProject(id) {\n    props.setProject(id);\n    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-text-container\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-title\"],\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-description\"],\n        children: props.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"project-ps-technologies-headline\"],\n        children: \"TECHNOLOGIES:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-technologies-container\"],\n        children: props.technologies && props.technologies.map(function (t) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-tech\"],\n            children: t\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects/\".concat(props.id),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"project-ps-btn-div\"],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"project-ps-btn\"],\n            onClick: function onClick() {\n              return props.setProject(props.id);\n            },\n            children: \"More details\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-ps-img\"],\n      src: props.leadImage,\n      alt: \"\",\n      onClick: function onClick() {\n        return props.history.push(\"/projects/\".concat(props.id));\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ProjectSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(null, {\n  setProject: _redux_actions__WEBPACK_IMPORTED_MODULE_5__[\"setProject\"]\n})(ProjectSummary));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectSummary\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0U3VtbWFyeS9pbmRleC5qcz85MDQwIl0sIm5hbWVzIjpbIlByb2plY3RTdW1tYXJ5IiwicHJvcHMiLCJjb25maWd1cmVQcm9qZWN0IiwiaWQiLCJzZXRQcm9qZWN0IiwiQ29va2llIiwic3R5bGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyIsIm1hcCIsInQiLCJsZWFkSW1hZ2UiLCJoaXN0b3J5IiwicHVzaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBRWhDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsRUFBRCxFQUFRO0FBQy9CRixTQUFLLENBQUNHLFVBQU4sQ0FBaUJELEVBQWpCO0FBQ0FFLG9EQUFNO0FBQ1AsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLG1FQUFNLENBQUMsNEJBQUQsQ0FBdEI7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUVBLG1FQUFNLENBQUMsbUJBQUQsQ0FBcEI7QUFBQSxrQkFBNENMLEtBQUssQ0FBQ007QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFFRCxtRUFBTSxDQUFDLHlCQUFELENBQXBCO0FBQUEsa0JBQWtETCxLQUFLLENBQUNPO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUcsaUJBQVMsRUFBRUYsbUVBQU0sQ0FBQyxrQ0FBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBTUU7QUFBSyxpQkFBUyxFQUFFQSxtRUFBTSxDQUFDLG9DQUFELENBQXRCO0FBQUEsa0JBQ0dMLEtBQUssQ0FBQ1EsWUFBTixJQUNDUixLQUFLLENBQUNRLFlBQU4sQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLENBQUQ7QUFBQSw4QkFDckI7QUFBSyxxQkFBUyxFQUFFTCxtRUFBTSxDQUFDLGtCQUFELENBQXRCO0FBQUEsc0JBQTZDSztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURxQjtBQUFBLFNBQXZCO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBWUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLHNCQUFlVixLQUFLLENBQUNFLEVBQXJCLENBQVY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVHLG1FQUFNLENBQUMsb0JBQUQsQ0FBdEI7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUVBLG1FQUFNLENBQUMsZ0JBQUQsQ0FEbkI7QUFFRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1MLEtBQUssQ0FBQ0csVUFBTixDQUFpQkgsS0FBSyxDQUFDRSxFQUF2QixDQUFOO0FBQUEsYUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF3QkU7QUFDRSxlQUFTLEVBQUVHLG1FQUFNLENBQUMsaUJBQUQsQ0FEbkI7QUFFRSxTQUFHLEVBQUVMLEtBQUssQ0FBQ1csU0FGYjtBQUdFLFNBQUcsRUFBQyxFQUhOO0FBSUUsYUFBTyxFQUFFO0FBQUEsZUFBTVgsS0FBSyxDQUFDWSxPQUFOLENBQWNDLElBQWQscUJBQWdDYixLQUFLLENBQUNFLEVBQXRDLEVBQU47QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0F4Q0Q7O0tBQU1ILGM7QUEwQ1NlLDBIQUFPLENBQUMsSUFBRCxFQUFPO0FBQUVYLFlBQVUsRUFBVkEseURBQVVBO0FBQVosQ0FBUCxDQUFQLENBQThCSixjQUE5QixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0U3VtbWFyeS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmltcG9ydCB7IHNldFByb2plY3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBQcm9qZWN0U3VtbWFyeSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGNvbmZpZ3VyZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBwcm9wcy5zZXRQcm9qZWN0KGlkKTtcbiAgICBDb29raWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBzXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wcy10ZXh0LWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcHMtdGl0bGVcIl19Pntwcm9wcy50aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcHMtZGVzY3JpcHRpb25cIl19Pntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdC1wcy10ZWNobm9sb2dpZXMtaGVhZGxpbmVcIl19PlxuICAgICAgICAgIFRFQ0hOT0xPR0lFUzpcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcHMtdGVjaG5vbG9naWVzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAge3Byb3BzLnRlY2hub2xvZ2llcyAmJlxuICAgICAgICAgICAgcHJvcHMudGVjaG5vbG9naWVzLm1hcCgodCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcHMtdGVjaFwiXX0+e3R9PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9wcy5pZH1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdC1wcy1idG4tZGl2XCJdfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0LXBzLWJ0blwiXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0UHJvamVjdChwcm9wcy5pZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1vcmUgZGV0YWlsc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBzLWltZ1wiXX1cbiAgICAgICAgc3JjPXtwcm9wcy5sZWFkSW1hZ2V9XG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmhpc3RvcnkucHVzaChgL3Byb2plY3RzLyR7cHJvcHMuaWR9YCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHNldFByb2plY3QgfSkoUHJvamVjdFN1bW1hcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectSummary/index.js\n");

/***/ })

})