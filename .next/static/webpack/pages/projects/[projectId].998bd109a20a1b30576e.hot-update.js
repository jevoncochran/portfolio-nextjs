webpackHotUpdate_N_E("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects */ \"./data/projects.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _helpers_parseCookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/parseCookies */ \"./helpers/parseCookies.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/projects/[projectId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar ProjectDetails = function ProjectDetails(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var projectId = router.query.projectId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(function () {\n    return JSON.parse(props.initialProjectId);\n  }),\n      projectNumber = _useState[0],\n      setProjectNumber = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    props.deactivateHome();\n    props.setProject(projectId);\n  }, []); // useEffect(() => {\n  //   Cookie.set(\"project\", props.project);\n  // }, [props.project]);\n  // const projectNumber = Cookie.get(\"project\");\n\n  console.log(\"project number \", projectNumber);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-top\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-title\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-description\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-purpose\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].purpose\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-details-list\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].details.map(function (detail) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-detail-div\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"],\n                  children: detail.detail\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 19\n                }, _this), detail.subdetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetails-list\"],\n                  children: detail.subdetails.map(function (sub) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-text\"] + \" \" + _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-subdetail\"],\n                      children: sub\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 56,\n                      columnNumber: 25\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-div\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].online,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiLinkExternal\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"View online\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-external-link\"],\n              href: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].github,\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn\"],\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-icon\"],\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiFillGithub\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-btn-text\"],\n                  children: \"Github repo\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 17\n              }, _this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-container\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech-headline\"],\n            children: \"TECHNOLOGIES USED:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-technologies\"],\n            children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].technologies.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-tech\"],\n                children: t\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 107,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-botom\"],\n        children: _data_projects__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectNumber - 1].images.map(function (image) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"projects-pd-img\"],\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectDetails, \"nVaX9tgJNk+Tfy/Voco7Z40sT7I=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ProjectDetails;\n\nProjectDetails.getInitialProps = function (_ref) {\n  var req = _ref.req;\n  var cookies = Object(_helpers_parseCookies__WEBPACK_IMPORTED_MODULE_9__[\"parseCookies\"])(req);\n  return {\n    initialProjectId: cookies.project\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    project: state.project.project\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  deactivateHome: _redux_actions__WEBPACK_IMPORTED_MODULE_10__[\"deactivateHome\"],\n  setProject: _redux_actions__WEBPACK_IMPORTED_MODULE_10__[\"setProject\"]\n})(ProjectDetails));\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanM/MDIzZiJdLCJuYW1lcyI6WyJQcm9qZWN0RGV0YWlscyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvamVjdElkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxQcm9qZWN0SWQiLCJwcm9qZWN0TnVtYmVyIiwic2V0UHJvamVjdE51bWJlciIsInVzZUVmZmVjdCIsImRlYWN0aXZhdGVIb21lIiwic2V0UHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwdXJwb3NlIiwiZGV0YWlscyIsIm1hcCIsImRldGFpbCIsInN1YmRldGFpbHMiLCJzdWIiLCJvbmxpbmUiLCJnaXRodWIiLCJ0ZWNobm9sb2dpZXMiLCJ0IiwiaW1hZ2VzIiwiaW1hZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJjb29raWVzIiwicGFyc2VDb29raWVzIiwicHJvamVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ2hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEZ0MsTUFFeEJDLFNBRndCLEdBRVZGLE1BQU0sQ0FBQ0csS0FGRyxDQUV4QkQsU0FGd0I7O0FBQUEsa0JBSVVFLHNEQUFRLENBQUM7QUFBQSxXQUNqREMsSUFBSSxDQUFDQyxLQUFMLENBQVdQLEtBQUssQ0FBQ1EsZ0JBQWpCLENBRGlEO0FBQUEsR0FBRCxDQUpsQjtBQUFBLE1BSXpCQyxhQUp5QjtBQUFBLE1BSVZDLGdCQUpV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QU8sRUFBRUUsS0FBSyxDQUFDRixPQUFOLENBQWNBO0FBRGxCLEdBQVA7QUFHRCxDQUpEOztBQU1lRywwSEFBTyxDQUFDRixlQUFELEVBQWtCO0FBQUV6QixnQkFBYyxFQUFkQSw4REFBRjtBQUFrQkMsWUFBVSxFQUFWQSwwREFBVUE7QUFBNUIsQ0FBbEIsQ0FBUCxDQUNiZCxjQURhLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgQmlMaW5rRXh0ZXJuYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcGFyc2VDb29raWVzXCI7XG5cbmltcG9ydCB7IGRlYWN0aXZhdGVIb21lLCBzZXRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgUHJvamVjdERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvamVjdElkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW3Byb2plY3ROdW1iZXIsIHNldFByb2plY3ROdW1iZXJdID0gdXNlU3RhdGUoKCkgPT5cbiAgICBKU09OLnBhcnNlKHByb3BzLmluaXRpYWxQcm9qZWN0SWQpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5kZWFjdGl2YXRlSG9tZSgpO1xuICAgIHByb3BzLnNldFByb2plY3QocHJvamVjdElkKTtcbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgQ29va2llLnNldChcInByb2plY3RcIiwgcHJvcHMucHJvamVjdCk7XG4gIC8vIH0sIFtwcm9wcy5wcm9qZWN0XSk7XG5cbiAgLy8gY29uc3QgcHJvamVjdE51bWJlciA9IENvb2tpZS5nZXQoXCJwcm9qZWN0XCIpO1xuICBjb25zb2xlLmxvZyhcInByb2plY3QgbnVtYmVyIFwiLCBwcm9qZWN0TnVtYmVyKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGRcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdG9wXCJdfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dC1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10aXRsZVwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0TnVtYmVyIC0gMV0udGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRlc2NyaXB0aW9uXCJdfT5cbiAgICAgICAgICAgICAge3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtcHVycG9zZVwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0TnVtYmVyIC0gMV0ucHVycG9zZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWRldGFpbHMtbGlzdFwiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0TnVtYmVyIC0gMV0uZGV0YWlscy5tYXAoKGRldGFpbCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1kZXRhaWwtZGl2XCJdfT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRleHRcIl19PlxuICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsLmRldGFpbH1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICB7ZGV0YWlsLnN1YmRldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1zdWJkZXRhaWxzLWxpc3RcIl19PlxuICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWwuc3ViZGV0YWlscy5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW1wicHJvamVjdHMtcGQtdGV4dFwiXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc1tcInByb2plY3RzLXBkLXN1YmRldGFpbFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0bi1kaXZcIl19PlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtZXh0ZXJuYWwtbGlua1wiXX1cbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0c1twcm9qZWN0TnVtYmVyIC0gMV0ub25saW5lfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0blwiXX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWljb25cIl19PlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1idG4tdGV4dFwiXX0+VmlldyBvbmxpbmU8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWV4dGVybmFsLWxpbmtcIl19XG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdHNbcHJvamVjdE51bWJlciAtIDFdLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWJ0blwiXX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLWljb25cIl19PlxuICAgICAgICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtYnRuLXRleHRcIl19PkdpdGh1YiByZXBvPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2gtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvamVjdHMtcGQtdGVjaC1oZWFkbGluZVwiXX0+XG4gICAgICAgICAgICAgIFRFQ0hOT0xPR0lFUyBVU0VEOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLXRlY2hub2xvZ2llc1wiXX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1twcm9qZWN0TnVtYmVyIC0gMV0udGVjaG5vbG9naWVzLm1hcCgodCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC10ZWNoXCJdfT57dH08L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy1wZC1ib3RvbVwiXX0+XG4gICAgICAgICAge3Byb2plY3RzW3Byb2plY3ROdW1iZXIgLSAxXS5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXBkLWltZ1wiXX0gc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblByb2plY3REZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMocmVxKTtcbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsUHJvamVjdElkOiBjb29raWVzLnByb2plY3QsXG4gIH07XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0OiBzdGF0ZS5wcm9qZWN0LnByb2plY3QsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBkZWFjdGl2YXRlSG9tZSwgc2V0UHJvamVjdCB9KShcbiAgUHJvamVjdERldGFpbHNcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[projectId].js\n");

/***/ })

})