webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n\n\n\n\n\n\n\n\n // import { ProjectContext } from \"../../context/ProjectContext\";\n\nvar ProjectDetails = function ProjectDetails(props) {\n  _s();\n\n  //   const { projectId } = useParams();\n  //   const { deactivateHome } = useContext(ProjectContext);\n  //   useEffect(() => {\n  //     deactivateHome();\n  //   }, [deactivateHome]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var projectId = router.query.projectId;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    props.deactivateHome();\n    props.setProject(projectId);\n  }, []);\n  if (props.project) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 56,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 107,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectDetails, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    project: state.project.project\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  deactivateHome: _redux_actions__WEBPACK_IMPORTED_MODULE_9__[\"deactivateHome\"],\n  setProject: _redux_actions__WEBPACK_IMPORTED_MODULE_9__[\"setProject\"]\n})(ProjectDetails));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvamVjdElkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJkZWFjdGl2YXRlSG9tZSIsInNldFByb2plY3QiLCJwcm9qZWN0Iiwic3R5bGVzIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVycG9zZSIsImRldGFpbHMiLCJtYXAiLCJkZXRhaWwiLCJzdWJkZXRhaWxzIiwic3ViIiwib25saW5lIiwiZ2l0aHViIiwidGVjaG5vbG9naWVzIiwidCIsImltYWdlcyIsImltYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNoQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQVJnQyxNQVN4QkMsU0FUd0IsR0FTVkYsTUFBTSxDQUFDRyxLQVRHLENBU3hCRCxTQVR3QjtBQVdoQ0UseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLFNBQUssQ0FBQ00sY0FBTjtBQUNBTixTQUFLLENBQUNPLFVBQU4sQ0FBaUJKLFNBQWpCO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLE1BQUlILEtBQUssQ0FBQ1EsT0FBVixFQUVBLG9CQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVDLG1FQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsbUVBQU0sQ0FBQyxpQkFBRCxDQUF0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QSxpQkFqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUE2RUU7QUFBSyxpQkFBUyxFQUFFYixtRUFBTSxDQUFDLG1CQUFELENBQXRCO0FBQUEsa0JBQ0dDLHVEQUFRLENBQUNWLEtBQUssQ0FBQ1EsT0FBTixHQUFnQixDQUFqQixDQUFSLENBQTRCZSxNQUE1QixDQUFtQ1IsR0FBbkMsQ0FBdUMsVUFBQ1MsS0FBRDtBQUFBLDhCQUN0QztBQUFLLHFCQUFTLEVBQUVmLG1FQUFNLENBQUMsaUJBQUQsQ0FBdEI7QUFBMkMsZUFBRyxFQUFFZSxLQUFoRDtBQUF1RCxlQUFHLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0M7QUFBQSxTQUF2QztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUZELENBekdEOztHQUFNekIsYztVQVFXRyxxRDs7O0tBUlhILGM7O0FBMkdOLElBQU0wQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xsQixXQUFPLEVBQUVrQixLQUFLLENBQUNsQixPQUFOLENBQWNBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztBQU1lbUIsMEhBQU8sQ0FBQ0YsZUFBRCxFQUFrQjtBQUFFbkIsZ0JBQWMsRUFBZEEsNkRBQUY7QUFBa0JDLFlBQVUsRUFBVkEseURBQVVBO0FBQTVCLENBQWxCLENBQVAsQ0FDYlIsY0FEYSxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgQmlMaW5rRXh0ZXJuYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBkZWFjdGl2YXRlSG9tZSwgc2V0UHJvamVjdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5cbi8vIGltcG9ydCB7IFByb2plY3RDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvUHJvamVjdENvbnRleHRcIjtcblxuY29uc3QgUHJvamVjdERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgLy8gICBjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG4gIC8vICAgY29uc3QgeyBkZWFjdGl2YXRlSG9tZSB9ID0gdXNlQ29udGV4dChQcm9qZWN0Q29udGV4dCk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgZGVhY3RpdmF0ZUhvbWUoKTtcbiAgLy8gICB9LCBbZGVhY3RpdmF0ZUhvbWVdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLmRlYWN0aXZhdGVIb21lKCk7XG4gICAgcHJvcHMuc2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICB9LCBbXSk7XG5cbiAgaWYgKHByb3BzLnByb2plY3QpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkXCJdfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRvcFwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRleHQtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGl0bGVcIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLnRpdGxlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1kZXNjcmlwdGlvblwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXB1cnBvc2VcIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLnB1cnBvc2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1kZXRhaWxzLWxpc3RcIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLmRldGFpbHMubWFwKChkZXRhaWwpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGV0YWlsLWRpdlwiXX0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0XCJdfT5cbiAgICAgICAgICAgICAgICAgICAge2RldGFpbC5kZXRhaWx9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAge2RldGFpbC5zdWJkZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtc3ViZGV0YWlscy1saXN0XCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsLnN1YmRldGFpbHMubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc1tcInByb2plY3RzLXBkLXRleHRcIl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbXCJwcm9qZWN0cy1wZC1zdWJkZXRhaWxcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tZGl2XCJdfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWV4dGVybmFsLWxpbmtcIl19XG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLm9ubGluZX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG5cIl19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi1pY29uXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgPEJpTGlua0V4dGVybmFsIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLXRleHRcIl19PlZpZXcgb25saW5lPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1leHRlcm5hbC1saW5rXCJdfVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS5naXRodWJ9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG5cIl19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi1pY29uXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi10ZXh0XCJdfT5HaXRodWIgcmVwbzwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNoLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2gtaGVhZGxpbmVcIl19PlxuICAgICAgICAgICAgICBURUNITk9MT0dJRVMgVVNFRDpcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNobm9sb2dpZXNcIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLnRlY2hub2xvZ2llcy5tYXAoKHQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaFwiXX0+e3R9PC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYm90b21cIl19PlxuICAgICAgICAgIHtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0uaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1pbWdcIl19IHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0OiBzdGF0ZS5wcm9qZWN0LnByb2plY3QsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBkZWFjdGl2YXRlSG9tZSwgc2V0UHJvamVjdCB9KShcbiAgUHJvamVjdERldGFpbHNcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})