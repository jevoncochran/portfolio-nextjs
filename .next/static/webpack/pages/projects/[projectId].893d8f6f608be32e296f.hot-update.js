webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n// import { useParams } from \"react-router-dom\";\n\n\n\n\n\n // import { ProjectContext } from \"../../context/ProjectContext\";\n\nvar ProjectDetails = function ProjectDetails() {\n  _s();\n\n  //   const { projectId } = useParams();\n  //   const { deactivateHome } = useContext(ProjectContext);\n  //   useEffect(() => {\n  //     deactivateHome();\n  //   }, [deactivateHome]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var projectId = router.query.projectId;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 46,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-bd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 84,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2plY3RJZCIsInF1ZXJ5Iiwic3R5bGVzIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVycG9zZSIsImRldGFpbHMiLCJtYXAiLCJkZXRhaWwiLCJzdWJkZXRhaWxzIiwic3ViIiwib25saW5lIiwiZ2l0aHViIiwidGVjaG5vbG9naWVzIiwidCIsImltYWdlcyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQzNCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBUjJCLE1BU25CQyxTQVRtQixHQVNMRixNQUFNLENBQUNHLEtBVEYsQ0FTbkJELFNBVG1CO0FBVzNCLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVFLG1FQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyxpQkFBRCxDQUF0QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyw0QkFBRCxDQUF0QjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyxtQkFBRCxDQUFwQjtBQUFBLHNCQUNHQyx1REFBUSxDQUFDSCxTQUFTLEdBQUcsQ0FBYixDQUFSLENBQXdCSTtBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBRyxxQkFBUyxFQUFFRixtRUFBTSxDQUFDLHlCQUFELENBQXBCO0FBQUEsc0JBQ0dDLHVEQUFRLENB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RkQsQ0FsR0Q7O0dBQU1wQixjO1VBUVdFLHFEOzs7S0FSWEYsYztBQW9HU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvcHJvamVjdHNcIjtcbmltcG9ydCB7IEJpTGlua0V4dGVybmFsIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuLy8gaW1wb3J0IHsgUHJvamVjdENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Qcm9qZWN0Q29udGV4dFwiO1xuXG5jb25zdCBQcm9qZWN0RGV0YWlscyA9ICgpID0+IHtcbiAgLy8gICBjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG4gIC8vICAgY29uc3QgeyBkZWFjdGl2YXRlSG9tZSB9ID0gdXNlQ29udGV4dChQcm9qZWN0Q29udGV4dCk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgZGVhY3RpdmF0ZUhvbWUoKTtcbiAgLy8gICB9LCBbZGVhY3RpdmF0ZUhvbWVdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGRcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdG9wXCJdfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dC1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10aXRsZVwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0SWQgLSAxXS50aXRsZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGVzY3JpcHRpb25cIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvamVjdElkIC0gMV0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXB1cnBvc2VcIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvamVjdElkIC0gMV0ucHVycG9zZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRldGFpbHMtbGlzdFwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0SWQgLSAxXS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRldGFpbC1kaXZcIl19PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dFwiXX0+XG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWwuZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHtkZXRhaWwuc3ViZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXN1YmRldGFpbHMtbGlzdFwiXX0+XG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbC5zdWJkZXRhaWxzLm1hcCgoc3ViKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0XCJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW1wicHJvamVjdHMtcGQtc3ViZGV0YWlsXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWRpdlwiXX0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1leHRlcm5hbC1saW5rXCJdfVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RzW3Byb2plY3RJZCAtIDFdLm9ubGluZX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG5cIl19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLWJkLWJ0bi1pY29uXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgPEJpTGlua0V4dGVybmFsIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLXRleHRcIl19PlZpZXcgb25saW5lPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1leHRlcm5hbC1saW5rXCJdfVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RzW3Byb2plY3RJZCAtIDFdLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0blwiXX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWljb25cIl19PlxuICAgICAgICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLXRleHRcIl19PkdpdGh1YiByZXBvPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2gtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaC1oZWFkbGluZVwiXX0+XG4gICAgICAgICAgICAgIFRFQ0hOT0xPR0lFUyBVU0VEOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2hub2xvZ2llc1wiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0SWQgLSAxXS50ZWNobm9sb2dpZXMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2hcIl19Pnt0fTwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJvdG9tXCJdfT5cbiAgICAgICAgICB7cHJvamVjdHNbcHJvamVjdElkIC0gMV0uaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1pbWdcIl19IHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})