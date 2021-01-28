webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./helpers/parseCookies.js":
false,

/***/ "./node_modules/cookie/index.js":
false,

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import React, { useContext, useEffect } from \"react\";\n\n\n\n\n\n\n\n\n // import { parseCookies } from \"../../helpers/parseCookies\";\n\n // import { ProjectContext } from \"../../context/ProjectContext\";\n\nvar ProjectDetails = function ProjectDetails(props) {\n  _s();\n\n  //   const { projectId } = useParams();\n  //   const { deactivateHome } = useContext(ProjectContext);\n  //   useEffect(() => {\n  //     deactivateHome();\n  //   }, [deactivateHome]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var projectId = router.query.projectId; // const [projectNumber, setProjectNumber] = useState(() =>\n  //   JSON.parse(initialProjectId)\n  // );\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    props.deactivateHome();\n    props.setProject(projectId);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set(\"project\", projectId);\n  }, [props.project]);\n  var projectNumber = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get(\"project\");\n  console.log(\"project number \", projectNumber);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 67,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 105,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 104,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 107,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n}; // ProjectDetails.getInitialProps = ({ req }) => {\n//   const cookies = parseCookies(req);\n//   return {\n//     initialProjectId: cookies.project,\n//   };\n// };\n\n\n_s(ProjectDetails, \"TvQOAa6MuxS5wkANqefpxaThEc4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    project: state.project.project\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  deactivateHome: _redux_actions__WEBPACK_IMPORTED_MODULE_10__[\"deactivateHome\"],\n  setProject: _redux_actions__WEBPACK_IMPORTED_MODULE_10__[\"setProject\"]\n})(ProjectDetails));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvamVjdElkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJkZWFjdGl2YXRlSG9tZSIsInNldFByb2plY3QiLCJDb29raWUiLCJzZXQiLCJwcm9qZWN0IiwicHJvamVjdE51bWJlciIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwdXJwb3NlIiwiZGV0YWlscyIsIm1hcCIsImRldGFpbCIsInN1YmRldGFpbHMiLCJzdWIiLCJvbmxpbmUiLCJnaXRodWIiLCJ0ZWNobm9sb2dpZXMiLCJ0IiwiaW1hZ2VzIiwiaW1hZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBSUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDaEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFSZ0MsTUFTeEJDLFNBVHdCLEdBU1ZGLE1BQU0sQ0FBQ0csS0FURyxDQVN4QkQsU0FUd0IsRUFXaEM7QUFDQTtBQUNBOztBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZEwsU0FBSyxDQUFDTSxjQUFOO0FBQ0FOLFNBQUssQ0FBQ08sVUFBTixDQUFpQkosU0FBakI7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0FFLHlEQUFTLENBQUMsWUFBTTtBQUNkRyxvREFBTSxDQUFDQyxHQUFQLENBQVcsU0FBWCxFQUFzQk4sU0FBdEI7QUFD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ZSI6Ii4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgQmlMaW5rRXh0ZXJuYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG4vLyBpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9wYXJzZUNvb2tpZXNcIjtcblxuaW1wb3J0IHsgZGVhY3RpdmF0ZUhvbWUsIHNldFByb2plY3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG4vLyBpbXBvcnQgeyBQcm9qZWN0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1Byb2plY3RDb250ZXh0XCI7XG5cbmNvbnN0IFByb2plY3REZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gIC8vICAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHVzZVBhcmFtcygpO1xuICAvLyAgIGNvbnN0IHsgZGVhY3RpdmF0ZUhvbWUgfSA9IHVzZUNvbnRleHQoUHJvamVjdENvbnRleHQpO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGRlYWN0aXZhdGVIb21lKCk7XG4gIC8vICAgfSwgW2RlYWN0aXZhdGVIb21lXSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvamVjdElkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgLy8gY29uc3QgW3Byb2plY3ROdW1iZXIsIHNldFByb2plY3ROdW1iZXJdID0gdXNlU3RhdGUoKCkgPT5cbiAgLy8gICBKU09OLnBhcnNlKGluaXRpYWxQcm9qZWN0SWQpXG4gIC8vICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5kZWFjdGl2YXRlSG9tZSgpO1xuICAgIHByb3BzLnNldFByb2plY3QocHJvamVjdElkKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ29va2llLnNldChcInByb2plY3RcIiwgcHJvamVjdElkKTtcbiAgfSwgW3Byb3BzLnByb2plY3RdKTtcblxuICBjb25zdCBwcm9qZWN0TnVtYmVyID0gQ29va2llLmdldChcInByb2plY3RcIik7XG4gIGNvbnNvbGUubG9nKFwicHJvamVjdCBudW1iZXIgXCIsIHByb2plY3ROdW1iZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZFwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10b3BcIl19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0LWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRpdGxlXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS50aXRsZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGVzY3JpcHRpb25cIl19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNbcHJvamVjdE51bWJlciAtIDFdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1wdXJwb3NlXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS5wdXJwb3NlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZGV0YWlscy1saXN0XCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRldGFpbC1kaXZcIl19PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dFwiXX0+XG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWwuZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHtkZXRhaWwuc3ViZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXN1YmRldGFpbHMtbGlzdFwiXX0+XG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbC5zdWJkZXRhaWxzLm1hcCgoc3ViKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZXh0XCJdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW1wicHJvamVjdHMtcGQtc3ViZGV0YWlsXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWRpdlwiXX0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1leHRlcm5hbC1saW5rXCJdfVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS5vbmxpbmV9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuXCJdfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4taWNvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxCaUxpbmtFeHRlcm5hbCAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi10ZXh0XCJdfT5WaWV3IG9ubGluZTwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZXh0ZXJuYWwtbGlua1wiXX1cbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0c1twcm9qZWN0TnVtYmVyIC0gMV0uZ2l0aHVifVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuXCJdfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4taWNvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tdGV4dFwiXX0+R2l0aHViIHJlcG88L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaC1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNoLWhlYWRsaW5lXCJdfT5cbiAgICAgICAgICAgICAgVEVDSE5PTE9HSUVTIFVTRUQ6XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaG5vbG9naWVzXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS50ZWNobm9sb2dpZXMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2hcIl19Pnt0fTwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJvdG9tXCJdfT5cbiAgICAgICAgICB7cHJvamVjdHNbcHJvamVjdE51bWJlciAtIDFdLmltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtaW1nXCJdfSBzcmM9e2ltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuLy8gUHJvamVjdERldGFpbHMuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcbi8vICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGluaXRpYWxQcm9qZWN0SWQ6IGNvb2tpZXMucHJvamVjdCxcbi8vICAgfTtcbi8vIH07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3Q6IHN0YXRlLnByb2plY3QucHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGRlYWN0aXZhdGVIb21lLCBzZXRQcm9qZWN0IH0pKFxuICBQcm9qZWN0RGV0YWlsc1xuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})