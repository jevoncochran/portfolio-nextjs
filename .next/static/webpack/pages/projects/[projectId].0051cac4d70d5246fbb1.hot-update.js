webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n\n\n\n\n\n\n\n\n // import { ProjectContext } from \"../../context/ProjectContext\";\n\nvar ProjectDetails = function ProjectDetails(props) {\n  _s();\n\n  //   const { projectId } = useParams();\n  //   const { deactivateHome } = useContext(ProjectContext);\n  //   useEffect(() => {\n  //     deactivateHome();\n  //   }, [deactivateHome]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var projectId = router.query.projectId;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    props.deactivateHome();\n    props.setProject();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 55,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectDetails, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    project: state.project.project\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  deactivateHome: _redux_actions__WEBPACK_IMPORTED_MODULE_9__[\"deactivateHome\"]\n})(ProjectDetails));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvamVjdElkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJkZWFjdGl2YXRlSG9tZSIsInNldFByb2plY3QiLCJzdHlsZXMiLCJwcm9qZWN0cyIsInByb2plY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVycG9zZSIsImRldGFpbHMiLCJtYXAiLCJkZXRhaWwiLCJzdWJkZXRhaWxzIiwic3ViIiwib25saW5lIiwiZ2l0aHViIiwidGVjaG5vbG9naWVzIiwidCIsImltYWdlcyIsImltYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNoQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQVJnQyxNQVN4QkMsU0FUd0IsR0FTVkYsTUFBTSxDQUFDRyxLQVRHLENBU3hCRCxTQVR3QjtBQVdoQ0UseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLFNBQUssQ0FBQ00sY0FBTjtBQUNBTixTQUFLLENBQUNPLFVBQU47QUFFRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMsbUVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxtRUFBTSxDQUFDLGlCQUFELENBQXRCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSxtRUFBTSxDQUFD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QTZFRTtBQUFLLGlCQUFTLEVBQUVkLG1FQUFNLENBQUMsbUJBQUQsQ0FBdEI7QUFBQSxrQkFDR0MsdURBQVEsQ0FBQ1QsS0FBSyxDQUFDVSxPQUFOLEdBQWdCLENBQWpCLENBQVIsQ0FBNEJhLE1BQTVCLENBQW1DUixHQUFuQyxDQUF1QyxVQUFDUyxLQUFEO0FBQUEsOEJBQ3RDO0FBQUsscUJBQVMsRUFBRWhCLG1FQUFNLENBQUMsaUJBQUQsQ0FBdEI7QUFBMkMsZUFBRyxFQUFFZ0IsS0FBaEQ7QUFBdUQsZUFBRyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNDO0FBQUEsU0FBdkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVGRCxDQXhHRDs7R0FBTXpCLGM7VUFRV0cscUQ7OztLQVJYSCxjOztBQTBHTixJQUFNMEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMaEIsV0FBTyxFQUFFZ0IsS0FBSyxDQUFDaEIsT0FBTixDQUFjQTtBQURsQixHQUFQO0FBR0QsQ0FKRDs7QUFNZWlCLDBIQUFPLENBQUNGLGVBQUQsRUFBa0I7QUFBRW5CLGdCQUFjLEVBQWRBLDZEQUFjQTtBQUFoQixDQUFsQixDQUFQLENBQTZDUCxjQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgQmlMaW5rRXh0ZXJuYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBkZWFjdGl2YXRlSG9tZSwgc2V0UHJvamVjdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5cbi8vIGltcG9ydCB7IFByb2plY3RDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvUHJvamVjdENvbnRleHRcIjtcblxuY29uc3QgUHJvamVjdERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgLy8gICBjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG4gIC8vICAgY29uc3QgeyBkZWFjdGl2YXRlSG9tZSB9ID0gdXNlQ29udGV4dChQcm9qZWN0Q29udGV4dCk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgZGVhY3RpdmF0ZUhvbWUoKTtcbiAgLy8gICB9LCBbZGVhY3RpdmF0ZUhvbWVdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLmRlYWN0aXZhdGVIb21lKCk7XG4gICAgcHJvcHMuc2V0UHJvamVjdCgpXG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZFwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10b3BcIl19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0LWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRpdGxlXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS50aXRsZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGVzY3JpcHRpb25cIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1wdXJwb3NlXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS5wdXJwb3NlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGV0YWlscy1saXN0XCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRldGFpbC1kaXZcIl19PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dFwiXX0+XG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWwuZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHtkZXRhaWwuc3ViZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXN1YmRldGFpbHMtbGlzdFwiXX0+XG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbC5zdWJkZXRhaWxzLm1hcCgoc3ViKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0XCJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW1wicHJvamVjdHMtcGQtc3ViZGV0YWlsXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWRpdlwiXX0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1leHRlcm5hbC1saW5rXCJdfVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS5vbmxpbmV9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuXCJdfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4taWNvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxCaUxpbmtFeHRlcm5hbCAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi10ZXh0XCJdfT5WaWV3IG9ubGluZTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZXh0ZXJuYWwtbGlua1wiXX1cbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0uZ2l0aHVifVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuXCJdfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4taWNvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tdGV4dFwiXX0+R2l0aHViIHJlcG88L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaC1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNoLWhlYWRsaW5lXCJdfT5cbiAgICAgICAgICAgICAgVEVDSE5PTE9HSUVTIFVTRUQ6XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaG5vbG9naWVzXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS50ZWNobm9sb2dpZXMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2hcIl19Pnt0fTwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJvdG9tXCJdfT5cbiAgICAgICAgICB7cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLmltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtaW1nXCJdfSBzcmM9e2ltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdDogc3RhdGUucHJvamVjdC5wcm9qZWN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZGVhY3RpdmF0ZUhvbWUgfSkoUHJvamVjdERldGFpbHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})