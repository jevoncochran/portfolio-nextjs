webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-persist/integration/react */ \"./node_modules/redux-persist/es/integration/react.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_14__[\"persistStore\"])(_redux_store__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(MyApp, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          appProps = _this$props.appProps;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"Provider\"], {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(Component, _objectSpread({}, appProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, this);\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var Component, ctx, appProps;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                Component = _ref.Component, ctx = _ref.ctx;\n\n                if (!Component.getInitialProps) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 4;\n                return Component.getInitialProps(ctx);\n\n              case 4:\n                _context.t0 = _context.sent;\n                _context.next = 8;\n                break;\n\n              case 7:\n                _context.t0 = {};\n\n              case 8:\n                appProps = _context.t0;\n                console.log(appProps);\n                return _context.abrupt(\"return\", {\n                  appProps: appProps\n                });\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);\n\nvar makeStore = function makeStore() {\n  return _redux_store__WEBPACK_IMPORTED_MODULE_13__[\"default\"];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(makeStore)(MyApp));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsInN0b3JlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImFwcFByb3BzIiwiY3R4IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29uc29sZSIsImxvZyIsIkFwcCIsIm1ha2VTdG9yZSIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsU0FBUyxHQUFHQyxtRUFBWSxDQUFDQyxxREFBRCxDQUE1Qjs7SUFDTUMsSzs7Ozs7Ozs7Ozs7Ozs2QkFXSztBQUFBLHdCQUN5QixLQUFLQyxLQUQ5QjtBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLFFBRFosZUFDWUEsUUFEWjtBQUdQLDBCQUNFLHFFQUFDLHFEQUFEO0FBQVUsYUFBSyxFQUFFSixxREFBakI7QUFBQSwrQkFDRSxxRUFBQyxTQUFELG9CQUFlSSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFLRDs7Ozs7Ozs7OztBQWxCOEJELHlCLFFBQUFBLFMsRUFBV0UsRyxRQUFBQSxHOztxQkFDdkJGLFNBQVMsQ0FBQ0csZTs7Ozs7O3VCQUNqQkgsU0FBUyxDQUFDRyxlQUFWLENBQTBCRCxHQUExQixDOzs7Ozs7Ozs4QkFDTixFOzs7QUFGRUQsd0I7QUFJTkcsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO2lEQUVPO0FBQUVBLDBCQUFRLEVBQUVBO0FBQVosaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFSU0ssK0M7O0FBc0JwQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1WLHFEQUFOO0FBQUEsQ0FBbEI7O0FBRWVXLGtJQUFTLENBQUNELFNBQUQsQ0FBVCxDQUFxQlQsS0FBckIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcblxubGV0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSlcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgICBjb25zdCBhcHBQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgICA6IHt9O1xuXG4gICAgY29uc29sZS5sb2coYXBwUHJvcHMpO1xuXG4gICAgcmV0dXJuIHsgYXBwUHJvcHM6IGFwcFByb3BzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIGFwcFByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5hcHBQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoTXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})