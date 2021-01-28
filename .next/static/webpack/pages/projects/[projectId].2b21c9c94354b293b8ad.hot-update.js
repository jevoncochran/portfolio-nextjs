webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n\n\n\n\n\n\n\n\n\n // import { ProjectContext } from \"../../context/ProjectContext\";\n\nvar ProjectDetails = function ProjectDetails(props) {\n  _s();\n\n  //   const { projectId } = useParams();\n  //   const { deactivateHome } = useContext(ProjectContext);\n  //   useEffect(() => {\n  //     deactivateHome();\n  //   }, [deactivateHome]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var projectId = router.query.projectId;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    props.deactivateHome();\n    props.setProject(projectId);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('project');\n  }, [props.project]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 84,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 99,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][props.project - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectDetails, \"TvQOAa6MuxS5wkANqefpxaThEc4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    project: state.project.project\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  deactivateHome: _redux_actions__WEBPACK_IMPORTED_MODULE_10__[\"deactivateHome\"],\n  setProject: _redux_actions__WEBPACK_IMPORTED_MODULE_10__[\"setProject\"]\n})(ProjectDetails));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvamVjdElkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJkZWFjdGl2YXRlSG9tZSIsInNldFByb2plY3QiLCJDb29raWUiLCJzZXQiLCJwcm9qZWN0Iiwic3R5bGVzIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVycG9zZSIsImRldGFpbHMiLCJtYXAiLCJkZXRhaWwiLCJzdWJkZXRhaWxzIiwic3ViIiwib25saW5lIiwiZ2l0aHViIiwidGVjaG5vbG9naWVzIiwidCIsImltYWdlcyIsImltYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDaEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFSZ0MsTUFTeEJDLFNBVHdCLEdBU1ZGLE1BQU0sQ0FBQ0csS0FURyxDQVN4QkQsU0FUd0I7QUFXaENFLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxTQUFLLENBQUNNLGNBQU47QUFDQU4sU0FBSyxDQUFDTyxVQUFOLENBQWlCSixTQUFqQjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2RHLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxTQUFYO0FBQ0QsR0FGUSxFQUVOLENBQUNULEtBQUssQ0FBQ1UsT0FBUCxDQUZNLENBQVQ7QUFJQSxzQkFDRSxxRUFBQywwREFBRDtB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QUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ0QztBQUFBLGFBQTdDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNkVFO0FBQUssaUJBQVMsRUFBRWIsbUVBQU0sQ0FBQyxtQkFBRCxDQUF0QjtBQUFBLGtCQUNHQyx1REFBUSxDQUFDWixLQUFLLENBQUNVLE9BQU4sR0FBZ0IsQ0FBakIsQ0FBUixDQUE0QmUsTUFBNUIsQ0FBbUNSLEdBQW5DLENBQXVDLFVBQUNTLEtBQUQ7QUFBQSw4QkFDdEM7QUFBSyxxQkFBUyxFQUFFZixtRUFBTSxDQUFDLGlCQUFELENBQXRCO0FBQTJDLGVBQUcsRUFBRWUsS0FBaEQ7QUFBdUQsZUFBRyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNDO0FBQUEsU0FBdkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVGRCxDQTNHRDs7R0FBTTNCLGM7VUFRV0cscUQ7OztLQVJYSCxjOztBQTZHTixJQUFNNEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMbEIsV0FBTyxFQUFFa0IsS0FBSyxDQUFDbEIsT0FBTixDQUFjQTtBQURsQixHQUFQO0FBR0QsQ0FKRDs7QUFNZW1CLDBIQUFPLENBQUNGLGVBQUQsRUFBa0I7QUFBRXJCLGdCQUFjLEVBQWRBLDhEQUFGO0FBQWtCQyxZQUFVLEVBQVZBLDBEQUFVQTtBQUE1QixDQUFsQixDQUFQLENBQ2JSLGNBRGEsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvcHJvamVjdHNcIjtcbmltcG9ydCB7IEJpQ29va2llLCBCaUxpbmtFeHRlcm5hbCB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuaW1wb3J0IHsgZGVhY3RpdmF0ZUhvbWUsIHNldFByb2plY3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG4vLyBpbXBvcnQgeyBQcm9qZWN0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1Byb2plY3RDb250ZXh0XCI7XG5cbmNvbnN0IFByb2plY3REZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gIC8vICAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHVzZVBhcmFtcygpO1xuICAvLyAgIGNvbnN0IHsgZGVhY3RpdmF0ZUhvbWUgfSA9IHVzZUNvbnRleHQoUHJvamVjdENvbnRleHQpO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGRlYWN0aXZhdGVIb21lKCk7XG4gIC8vICAgfSwgW2RlYWN0aXZhdGVIb21lXSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvamVjdElkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5kZWFjdGl2YXRlSG9tZSgpO1xuICAgIHByb3BzLnNldFByb2plY3QocHJvamVjdElkKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llLnNldCgncHJvamVjdCcpXG4gIH0sIFtwcm9wcy5wcm9qZWN0XSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGRcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdG9wXCJdfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dC1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10aXRsZVwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0udGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRlc2NyaXB0aW9uXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtcHVycG9zZVwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0ucHVycG9zZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRldGFpbHMtbGlzdFwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1kZXRhaWwtZGl2XCJdfT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRleHRcIl19PlxuICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsLmRldGFpbH1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICB7ZGV0YWlsLnN1YmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1zdWJkZXRhaWxzLWxpc3RcIl19PlxuICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWwuc3ViZGV0YWlscy5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dFwiXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc1tcInByb2plY3RzLXBkLXN1YmRldGFpbFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi1kaXZcIl19PlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZXh0ZXJuYWwtbGlua1wiXX1cbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0ub25saW5lfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0blwiXX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWljb25cIl19PlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tdGV4dFwiXX0+VmlldyBvbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWV4dGVybmFsLWxpbmtcIl19XG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdHNbcHJvcHMucHJvamVjdCAtIDFdLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0blwiXX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWljb25cIl19PlxuICAgICAgICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLXRleHRcIl19PkdpdGh1YiByZXBvPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2gtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaC1oZWFkbGluZVwiXX0+XG4gICAgICAgICAgICAgIFRFQ0hOT0xPR0lFUyBVU0VEOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2hub2xvZ2llc1wiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9wcy5wcm9qZWN0IC0gMV0udGVjaG5vbG9naWVzLm1hcCgodCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNoXCJdfT57dH08L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1ib3RvbVwiXX0+XG4gICAgICAgICAge3Byb2plY3RzW3Byb3BzLnByb2plY3QgLSAxXS5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWltZ1wiXX0gc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3Q6IHN0YXRlLnByb2plY3QucHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGRlYWN0aXZhdGVIb21lLCBzZXRQcm9qZWN0IH0pKFxuICBQcm9qZWN0RGV0YWlsc1xuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})