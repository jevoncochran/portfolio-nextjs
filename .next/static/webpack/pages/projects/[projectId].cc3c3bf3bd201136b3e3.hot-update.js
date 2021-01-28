webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n// import { useParams } from \"react-router-dom\";\n\n\n\n\n\n\n\n // import { ProjectContext } from \"../../context/ProjectContext\";\n\nvar ProjectDetails = function ProjectDetails() {\n  _s();\n\n  //   const { projectId } = useParams();\n  //   const { deactivateHome } = useContext(ProjectContext);\n  //   useEffect(() => {\n  //     deactivateHome();\n  //   }, [deactivateHome]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var projectId = router.query.projectId;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 49,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 74,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 87,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_2__[\"projects\"][projectId - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2plY3RJZCIsInF1ZXJ5Iiwic3R5bGVzIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVycG9zZSIsImRldGFpbHMiLCJtYXAiLCJkZXRhaWwiLCJzdWJkZXRhaWxzIiwic3ViIiwib25saW5lIiwiZ2l0aHViIiwidGVjaG5vbG9naWVzIiwidCIsImltYWdlcyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQzNCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBUjJCLE1BU25CQyxTQVRtQixHQVNMRixNQUFNLENBQUNHLEtBVEYsQ0FTbkJELFNBVG1CO0FBVzNCLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVFLG1FQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyxpQkFBRCxDQUF0QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyw0QkFBRCxDQUF0QjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyxtQkFBRCxDQUFwQjtBQUFBLHNCQUNHQyx1REFBUSxDQUFDSCxTQUFTLEdBQUcsQ0FBYixDQUFSLENBQXdCSTtBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBRyxxQkFBUyxFQUFFRixtRUFBTSxDQUFDLHlCQUFELENBQXBCO0FBQUEsc0JB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QSxlQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RkQsQ0FsR0Q7O0dBQU1wQixjO1VBUVdFLHFEOzs7S0FSWEYsYztBQW9HU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvcHJvamVjdHNcIjtcbmltcG9ydCB7IEJpTGlua0V4dGVybmFsIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgZGVhY3RpdmF0ZUhvbWUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG4vLyBpbXBvcnQgeyBQcm9qZWN0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1Byb2plY3RDb250ZXh0XCI7XG5cbmNvbnN0IFByb2plY3REZXRhaWxzID0gKCkgPT4ge1xuICAvLyAgIGNvbnN0IHsgcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcbiAgLy8gICBjb25zdCB7IGRlYWN0aXZhdGVIb21lIH0gPSB1c2VDb250ZXh0KFByb2plY3RDb250ZXh0KTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBkZWFjdGl2YXRlSG9tZSgpO1xuICAvLyAgIH0sIFtkZWFjdGl2YXRlSG9tZV0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHByb2plY3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZFwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10b3BcIl19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0LWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRpdGxlXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3RJZCAtIDFdLnRpdGxlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1kZXNjcmlwdGlvblwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0SWQgLSAxXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtcHVycG9zZVwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0SWQgLSAxXS5wdXJwb3NlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGV0YWlscy1saXN0XCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3RJZCAtIDFdLmRldGFpbHMubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGV0YWlsLWRpdlwiXX0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0XCJdfT5cbiAgICAgICAgICAgICAgICAgICAge2RldGFpbC5kZXRhaWx9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAge2RldGFpbC5zdWJkZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtc3ViZGV0YWlscy1saXN0XCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsLnN1YmRldGFpbHMubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc1tcInByb2plY3RzLXBkLXRleHRcIl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbXCJwcm9qZWN0cy1wZC1zdWJkZXRhaWxcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tZGl2XCJdfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWV4dGVybmFsLWxpbmtcIl19XG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdHNbcHJvamVjdElkIC0gMV0ub25saW5lfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0blwiXX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWljb25cIl19PlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tdGV4dFwiXX0+VmlldyBvbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWV4dGVybmFsLWxpbmtcIl19XG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdHNbcHJvamVjdElkIC0gMV0uZ2l0aHVifVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuXCJdfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4taWNvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tdGV4dFwiXX0+R2l0aHViIHJlcG88L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaC1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNoLWhlYWRsaW5lXCJdfT5cbiAgICAgICAgICAgICAgVEVDSE5PTE9HSUVTIFVTRUQ6XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaG5vbG9naWVzXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3RJZCAtIDFdLnRlY2hub2xvZ2llcy5tYXAoKHQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaFwiXX0+e3R9PC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYm90b21cIl19PlxuICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0SWQgLSAxXS5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWltZ1wiXX0gc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3REZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})