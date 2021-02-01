module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/portfolio-nextjs/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps({\n    Component,\n    ctx\n  }) {\n    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};\n    console.log(appProps);\n    return {\n      appProps: appProps\n    };\n  }\n\n  render() {\n    const {\n      Component,\n      appProps\n    } = this.props;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, appProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\nconst makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(makeStore)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJhcHBQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJwcm9wcyIsInN0b3JlIiwibWFrZVN0b3JlIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUN0QixlQUFhQyxlQUFiLENBQTZCO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixHQUE3QixFQUFpRDtBQUMvQyxVQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0QsZUFBVixHQUNiLE1BQU1DLFNBQVMsQ0FBQ0QsZUFBVixDQUEwQkUsR0FBMUIsQ0FETyxHQUViLEVBRko7QUFJQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxXQUFPO0FBQUVBLGNBQVEsRUFBRUE7QUFBWixLQUFQO0FBQ0Q7O0FBRURHLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUwsZUFBRjtBQUFhRTtBQUFiLFFBQTBCLEtBQUtJLEtBQXJDO0FBRUEsd0JBQ0UscUVBQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVDLG9EQUFqQjtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWVMLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQW5CcUI7O0FBc0J4QixNQUFNTSxTQUFTLEdBQUcsTUFBTUQsb0RBQXhCOztBQUVlRSx3SEFBUyxDQUFDRCxTQUFELENBQVQsQ0FBcUJYLEtBQXJCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGNvbnN0IGFwcFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAgICAgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgIDoge307XG5cbiAgICBjb25zb2xlLmxvZyhhcHBQcm9wcyk7XG5cbiAgICByZXR1cm4geyBhcHBQcm9wczogYXBwUHJvcHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgYXBwUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLmFwcFByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: activateHome, deactivateHome, setProject, showMobileNav, hideMobileNav, SET_PAGE_HOME_START, SET_PAGE_HOME_SUCCESS, LEAVE_HOME_PAGE_START, LEAVE_HOME_PAGE_SUCCESS, SET_PROJECT_START, SET_PROJECT_SUCCESS, SHOW_MOBILE_NAV_START, SHOW_MOBILE_NAV_SUCCESS, HIDE_MOBILE_NAV_START, HIDE_MOBILE_NAV_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-actions */ \"./redux/actions/page-actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"activateHome\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"activateHome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deactivateHome\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"deactivateHome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE_HOME_START\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE_HOME_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE_HOME_SUCCESS\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE_HOME_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LEAVE_HOME_PAGE_START\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"LEAVE_HOME_PAGE_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LEAVE_HOME_PAGE_SUCCESS\", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__[\"LEAVE_HOME_PAGE_SUCCESS\"]; });\n\n/* harmony import */ var _project_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-actions */ \"./redux/actions/project-actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setProject\", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_1__[\"setProject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_PROJECT_START\", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_PROJECT_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_PROJECT_SUCCESS\", function() { return _project_actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_PROJECT_SUCCESS\"]; });\n\n/* harmony import */ var _nav_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-actions */ \"./redux/actions/nav-actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showMobileNav\", function() { return _nav_actions__WEBPACK_IMPORTED_MODULE_2__[\"showMobileNav\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hideMobileNav\", function() { return _nav_actions__WEBPACK_IMPORTED_MODULE_2__[\"hideMobileNav\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MOBILE_NAV_START\", function() { return _nav_actions__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_MOBILE_NAV_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MOBILE_NAV_SUCCESS\", function() { return _nav_actions__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_MOBILE_NAV_SUCCESS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HIDE_MOBILE_NAV_START\", function() { return _nav_actions__WEBPACK_IMPORTED_MODULE_2__[\"HIDE_MOBILE_NAV_START\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HIDE_MOBILE_NAV_SUCCESS\", function() { return _nav_actions__WEBPACK_IMPORTED_MODULE_2__[\"HIDE_MOBILE_NAV_SUCCESS\"]; });\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzP2M3ZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBTUEiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYWN0aXZhdGVIb21lLFxuICBkZWFjdGl2YXRlSG9tZSxcbiAgU0VUX1BBR0VfSE9NRV9TVEFSVCxcbiAgU0VUX1BBR0VfSE9NRV9TVUNDRVNTLFxuICBMRUFWRV9IT01FX1BBR0VfU1RBUlQsXG4gIExFQVZFX0hPTUVfUEFHRV9TVUNDRVNTLFxufSBmcm9tIFwiLi9wYWdlLWFjdGlvbnNcIjtcblxuaW1wb3J0IHtcbiAgc2V0UHJvamVjdCxcbiAgU0VUX1BST0pFQ1RfU1RBUlQsXG4gIFNFVF9QUk9KRUNUX1NVQ0NFU1MsXG59IGZyb20gXCIuL3Byb2plY3QtYWN0aW9uc1wiO1xuXG5pbXBvcnQge1xuICBzaG93TW9iaWxlTmF2LFxuICBoaWRlTW9iaWxlTmF2LFxuICBTSE9XX01PQklMRV9OQVZfU1RBUlQsXG4gIFNIT1dfTU9CSUxFX05BVl9TVUNDRVNTLFxuICBISURFX01PQklMRV9OQVZfU1RBUlQsXG4gIEhJREVfTU9CSUxFX05BVl9TVUNDRVNTLFxufSBmcm9tIFwiLi9uYXYtYWN0aW9uc1wiO1xuXG5leHBvcnQge1xuICBhY3RpdmF0ZUhvbWUsXG4gIGRlYWN0aXZhdGVIb21lLFxuICBzZXRQcm9qZWN0LFxuICBzaG93TW9iaWxlTmF2LFxuICBoaWRlTW9iaWxlTmF2LFxuICBTRVRfUEFHRV9IT01FX1NUQVJULFxuICBTRVRfUEFHRV9IT01FX1NVQ0NFU1MsXG4gIExFQVZFX0hPTUVfUEFHRV9TVEFSVCxcbiAgTEVBVkVfSE9NRV9QQUdFX1NVQ0NFU1MsXG4gIFNFVF9QUk9KRUNUX1NUQVJULFxuICBTRVRfUFJPSkVDVF9TVUNDRVNTLFxuICBTSE9XX01PQklMRV9OQVZfU1RBUlQsXG4gIFNIT1dfTU9CSUxFX05BVl9TVUNDRVNTLFxuICBISURFX01PQklMRV9OQVZfU1RBUlQsXG4gIEhJREVfTU9CSUxFX05BVl9TVUNDRVNTLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/index.js\n");

/***/ }),

/***/ "./redux/actions/nav-actions.js":
/*!**************************************!*\
  !*** ./redux/actions/nav-actions.js ***!
  \**************************************/
/*! exports provided: SHOW_MOBILE_NAV_START, SHOW_MOBILE_NAV_SUCCESS, HIDE_MOBILE_NAV_START, HIDE_MOBILE_NAV_SUCCESS, showMobileNav, hideMobileNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MOBILE_NAV_START\", function() { return SHOW_MOBILE_NAV_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MOBILE_NAV_SUCCESS\", function() { return SHOW_MOBILE_NAV_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_MOBILE_NAV_START\", function() { return HIDE_MOBILE_NAV_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_MOBILE_NAV_SUCCESS\", function() { return HIDE_MOBILE_NAV_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMobileNav\", function() { return showMobileNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideMobileNav\", function() { return hideMobileNav; });\nconst SHOW_MOBILE_NAV_START = \"SHOW_MOBILE_NAV_START\";\nconst SHOW_MOBILE_NAV_SUCCESS = \"SHOW_MOBILE_NAV_SUCCESS\";\nconst HIDE_MOBILE_NAV_START = \"HIDE_MOBILE_NAV_START\";\nconst HIDE_MOBILE_NAV_SUCCESS = \"HIDE_MOBILE_NAV_SUCCESS\";\nconst showMobileNav = () => dispatch => {\n  dispatch({\n    type: SHOW_MOBILE_NAV_START\n  });\n  dispatch({\n    type: SHOW_MOBILE_NAV_SUCCESS\n  });\n};\nconst hideMobileNav = () => dispatch => {\n  dispatch({\n    type: HIDE_MOBILE_NAV_START\n  });\n  dispatch({\n    type: HIDE_MOBILE_NAV_SUCCESS\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL25hdi1hY3Rpb25zLmpzPzIwNTgiXSwibmFtZXMiOlsiU0hPV19NT0JJTEVfTkFWX1NUQVJUIiwiU0hPV19NT0JJTEVfTkFWX1NVQ0NFU1MiLCJISURFX01PQklMRV9OQVZfU1RBUlQiLCJISURFX01PQklMRV9OQVZfU1VDQ0VTUyIsInNob3dNb2JpbGVOYXYiLCJkaXNwYXRjaCIsInR5cGUiLCJoaWRlTW9iaWxlTmF2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLGFBQWEsR0FBRyxNQUFPQyxRQUFELElBQWM7QUFDL0NBLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVOO0FBQVIsR0FBRCxDQUFSO0FBQ0FLLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVMO0FBQVIsR0FBRCxDQUFSO0FBQ0QsQ0FITTtBQUtBLE1BQU1NLGFBQWEsR0FBRyxNQUFPRixRQUFELElBQWM7QUFDL0NBLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVKO0FBQVIsR0FBRCxDQUFSO0FBQ0FHLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVIO0FBQVIsR0FBRCxDQUFSO0FBQ0QsQ0FITSIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvbmF2LWFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0hPV19NT0JJTEVfTkFWX1NUQVJUID0gXCJTSE9XX01PQklMRV9OQVZfU1RBUlRcIjtcbmV4cG9ydCBjb25zdCBTSE9XX01PQklMRV9OQVZfU1VDQ0VTUyA9IFwiU0hPV19NT0JJTEVfTkFWX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBISURFX01PQklMRV9OQVZfU1RBUlQgPSBcIkhJREVfTU9CSUxFX05BVl9TVEFSVFwiO1xuZXhwb3J0IGNvbnN0IEhJREVfTU9CSUxFX05BVl9TVUNDRVNTID0gXCJISURFX01PQklMRV9OQVZfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3Qgc2hvd01vYmlsZU5hdiA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfTU9CSUxFX05BVl9TVEFSVCB9KTtcbiAgZGlzcGF0Y2goeyB0eXBlOiBTSE9XX01PQklMRV9OQVZfU1VDQ0VTUyB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoaWRlTW9iaWxlTmF2ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogSElERV9NT0JJTEVfTkFWX1NUQVJUIH0pO1xuICBkaXNwYXRjaCh7IHR5cGU6IEhJREVfTU9CSUxFX05BVl9TVUNDRVNTIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/nav-actions.js\n");

/***/ }),

/***/ "./redux/actions/page-actions.js":
/*!***************************************!*\
  !*** ./redux/actions/page-actions.js ***!
  \***************************************/
/*! exports provided: SET_PAGE_HOME_START, SET_PAGE_HOME_SUCCESS, LEAVE_HOME_PAGE_START, LEAVE_HOME_PAGE_SUCCESS, activateHome, deactivateHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE_HOME_START\", function() { return SET_PAGE_HOME_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PAGE_HOME_SUCCESS\", function() { return SET_PAGE_HOME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEAVE_HOME_PAGE_START\", function() { return LEAVE_HOME_PAGE_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEAVE_HOME_PAGE_SUCCESS\", function() { return LEAVE_HOME_PAGE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateHome\", function() { return activateHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deactivateHome\", function() { return deactivateHome; });\nconst SET_PAGE_HOME_START = \"SET_PAGE_HOME_START\";\nconst SET_PAGE_HOME_SUCCESS = \"SET_PAGE_HOME_SUCCESS\";\nconst LEAVE_HOME_PAGE_START = \"LEAVE_HOME_PAGE_START\";\nconst LEAVE_HOME_PAGE_SUCCESS = \"LEAVE_HOME_PAGE_SUCCESS\";\nconst activateHome = () => dispatch => {\n  dispatch({\n    type: SET_PAGE_HOME_START\n  });\n  dispatch({\n    type: SET_PAGE_HOME_SUCCESS\n  });\n};\nconst deactivateHome = () => dispatch => {\n  dispatch({\n    type: LEAVE_HOME_PAGE_START\n  });\n  dispatch({\n    type: LEAVE_HOME_PAGE_SUCCESS\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3BhZ2UtYWN0aW9ucy5qcz85NDUyIl0sIm5hbWVzIjpbIlNFVF9QQUdFX0hPTUVfU1RBUlQiLCJTRVRfUEFHRV9IT01FX1NVQ0NFU1MiLCJMRUFWRV9IT01FX1BBR0VfU1RBUlQiLCJMRUFWRV9IT01FX1BBR0VfU1VDQ0VTUyIsImFjdGl2YXRlSG9tZSIsImRpc3BhdGNoIiwidHlwZSIsImRlYWN0aXZhdGVIb21lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLFlBQVksR0FBRyxNQUFPQyxRQUFELElBQWM7QUFDOUNBLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVOO0FBQVIsR0FBRCxDQUFSO0FBQ0FLLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVMO0FBQVIsR0FBRCxDQUFSO0FBQ0QsQ0FITTtBQUtBLE1BQU1NLGNBQWMsR0FBRyxNQUFPRixRQUFELElBQWM7QUFDaERBLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVKO0FBQVIsR0FBRCxDQUFSO0FBQ0FHLFVBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVIO0FBQVIsR0FBRCxDQUFSO0FBQ0QsQ0FITSIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvcGFnZS1hY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0hPTUVfU1RBUlQgPSBcIlNFVF9QQUdFX0hPTUVfU1RBUlRcIjtcbmV4cG9ydCBjb25zdCBTRVRfUEFHRV9IT01FX1NVQ0NFU1MgPSBcIlNFVF9QQUdFX0hPTUVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExFQVZFX0hPTUVfUEFHRV9TVEFSVCA9IFwiTEVBVkVfSE9NRV9QQUdFX1NUQVJUXCI7XG5leHBvcnQgY29uc3QgTEVBVkVfSE9NRV9QQUdFX1NVQ0NFU1MgPSBcIkxFQVZFX0hPTUVfUEFHRV9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUhvbWUgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfUEFHRV9IT01FX1NUQVJUIH0pO1xuICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9QQUdFX0hPTUVfU1VDQ0VTUyB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWFjdGl2YXRlSG9tZSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IExFQVZFX0hPTUVfUEFHRV9TVEFSVCB9KTtcbiAgZGlzcGF0Y2goeyB0eXBlOiBMRUFWRV9IT01FX1BBR0VfU1VDQ0VTUyB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/page-actions.js\n");

/***/ }),

/***/ "./redux/actions/project-actions.js":
/*!******************************************!*\
  !*** ./redux/actions/project-actions.js ***!
  \******************************************/
/*! exports provided: SET_PROJECT_START, SET_PROJECT_SUCCESS, setProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PROJECT_START\", function() { return SET_PROJECT_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_PROJECT_SUCCESS\", function() { return SET_PROJECT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProject\", function() { return setProject; });\nconst SET_PROJECT_START = \"SET_PROJECT_START\";\nconst SET_PROJECT_SUCCESS = \"SET_PROJECT_SUCCESS\";\nconst setProject = project => dispatch => {\n  dispatch({\n    type: SET_PROJECT_START\n  });\n  dispatch({\n    type: SET_PROJECT_SUCCESS,\n    payload: project\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Byb2plY3QtYWN0aW9ucy5qcz9iMDViIl0sIm5hbWVzIjpbIlNFVF9QUk9KRUNUX1NUQVJUIiwiU0VUX1BST0pFQ1RfU1VDQ0VTUyIsInNldFByb2plY3QiLCJwcm9qZWN0IiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxVQUFVLEdBQUlDLE9BQUQsSUFBY0MsUUFBRCxJQUFjO0FBQ25EQSxVQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFTDtBQUFSLEdBQUQsQ0FBUjtBQUNBSSxVQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFSixtQkFBUjtBQUE2QkssV0FBTyxFQUFFSDtBQUF0QyxHQUFELENBQVI7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vcmVkdXgvYWN0aW9ucy9wcm9qZWN0LWFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0VUX1BST0pFQ1RfU1RBUlQgPSBcIlNFVF9QUk9KRUNUX1NUQVJUXCI7XG5leHBvcnQgY29uc3QgU0VUX1BST0pFQ1RfU1VDQ0VTUyA9IFwiU0VUX1BST0pFQ1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfUFJPSkVDVF9TVEFSVCB9KTtcbiAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfUFJPSkVDVF9TVUNDRVNTLCBwYXlsb2FkOiBwcm9qZWN0IH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/project-actions.js\n");

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _page_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-reducer */ \"./redux/reducers/page-reducer.js\");\n/* harmony import */ var _project_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-reducer */ \"./redux/reducers/project-reducer.js\");\n/* harmony import */ var _nav_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-reducer */ \"./redux/reducers/nav-reducer.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  page: _page_reducer__WEBPACK_IMPORTED_MODULE_1__[\"page\"],\n  project: _project_reducer__WEBPACK_IMPORTED_MODULE_2__[\"project\"],\n  nav: _nav_reducer__WEBPACK_IMPORTED_MODULE_3__[\"nav\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcz9lYWY0Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInBhZ2UiLCJwcm9qZWN0IiwibmF2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVlQSw0SEFBZSxDQUFDO0FBQUVDLDBEQUFGO0FBQVFDLG1FQUFSO0FBQWlCQyx1REFBR0E7QUFBcEIsQ0FBRCxDQUE5QiIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IHBhZ2UgfSBmcm9tIFwiLi9wYWdlLXJlZHVjZXJcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LXJlZHVjZXJcIjtcbmltcG9ydCB7IG5hdiB9IGZyb20gXCIuL25hdi1yZWR1Y2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7IHBhZ2UsIHByb2plY3QsIG5hdiB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/reducers/nav-reducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/nav-reducer.js ***!
  \***************************************/
/*! exports provided: nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nav\", function() { return nav; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./redux/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  mobileNavVisibile: false,\n  isLoading: false\n};\nconst nav = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SHOW_MOBILE_NAV_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SHOW_MOBILE_NAV_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        mobileNavVisibile: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"HIDE_MOBILE_NAV_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"HIDE_MOBILE_NAV_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true,\n        mobileNavVisibile: false\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9uYXYtcmVkdWNlci5qcz9iZGIyIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1vYmlsZU5hdlZpc2liaWxlIiwiaXNMb2FkaW5nIiwibmF2Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0hPV19NT0JJTEVfTkFWX1NUQVJUIiwiU0hPV19NT0JJTEVfTkFWX1NVQ0NFU1MiLCJISURFX01PQklMRV9OQVZfU1RBUlQiLCJISURFX01PQklMRV9OQVZfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFPQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLG1CQUFpQixFQUFFLEtBREE7QUFFbkJDLFdBQVMsRUFBRTtBQUZRLENBQXJCO0FBS08sTUFBTUMsR0FBRyxHQUFHLENBQUNDLEtBQUssR0FBR0osWUFBVCxFQUF1QkssTUFBdkIsS0FBa0M7QUFDbkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsOERBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFRixpQkFBUyxFQUFFO0FBRmI7O0FBSUYsU0FBS00sZ0VBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFRixpQkFBUyxFQUFFLEtBRmI7QUFHRUQseUJBQWlCLEVBQUU7QUFIckI7O0FBS0YsU0FBS1EsOERBQUw7QUFDRSw2Q0FDS0wsS0FETDtBQUVFRixpQkFBUyxFQUFFO0FBRmI7O0FBSUYsU0FBS1EsZ0VBQUw7QUFDRSw2Q0FDS04sS0FETDtBQUVFRixpQkFBUyxFQUFFLElBRmI7QUFHRUQseUJBQWlCLEVBQUU7QUFIckI7O0FBS0Y7QUFDSSxhQUFPRyxLQUFQO0FBeEJOO0FBMEJELENBM0JNIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvbmF2LXJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTSE9XX01PQklMRV9OQVZfU1RBUlQsXG4gIFNIT1dfTU9CSUxFX05BVl9TVUNDRVNTLFxuICBISURFX01PQklMRV9OQVZfU1RBUlQsXG4gIEhJREVfTU9CSUxFX05BVl9TVUNDRVNTLFxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1vYmlsZU5hdlZpc2liaWxlOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBuYXYgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSE9XX01PQklMRV9OQVZfU1RBUlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1dfTU9CSUxFX05BVl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIG1vYmlsZU5hdlZpc2liaWxlOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIEhJREVfTU9CSUxFX05BVl9TVEFSVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgSElERV9NT0JJTEVfTkFWX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICBtb2JpbGVOYXZWaXNpYmlsZTogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/nav-reducer.js\n");

/***/ }),

/***/ "./redux/reducers/page-reducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/page-reducer.js ***!
  \****************************************/
/*! exports provided: page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"page\", function() { return page; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./redux/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  onHomePage: true,\n  isLoading: false\n};\nconst page = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE_HOME_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PAGE_HOME_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        onHomePage: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"LEAVE_HOME_PAGE_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"LEAVE_HOME_PAGE_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        onHomePage: false\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9wYWdlLXJlZHVjZXIuanM/ZWZlZiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJvbkhvbWVQYWdlIiwiaXNMb2FkaW5nIiwicGFnZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9QQUdFX0hPTUVfU1RBUlQiLCJTRVRfUEFHRV9IT01FX1NVQ0NFU1MiLCJMRUFWRV9IT01FX1BBR0VfU1RBUlQiLCJMRUFWRV9IT01FX1BBR0VfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFPQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFlBQVUsRUFBRSxJQURPO0FBRW5CQyxXQUFTLEVBQUU7QUFGUSxDQUFyQjtBQUtPLE1BQU1DLElBQUksR0FBRyxDQUFDQyxLQUFLLEdBQUdKLFlBQVQsRUFBdUJLLE1BQXZCLEtBQWtDO0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLDREQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRUYsaUJBQVMsRUFBRTtBQUZiOztBQUlGLFNBQUtNLDhEQUFMO0FBQ0UsNkNBQ0tKLEtBREw7QUFFRUYsaUJBQVMsRUFBRSxLQUZiO0FBR0VELGtCQUFVLEVBQUU7QUFIZDs7QUFLRixTQUFLUSw4REFBTDtBQUNFLDZDQUNLTCxLQURMO0FBRUVGLGlCQUFTLEVBQUU7QUFGYjs7QUFJRixTQUFLUSxnRUFBTDtBQUNFLDZDQUNLTixLQURMO0FBRUVGLGlCQUFTLEVBQUUsS0FGYjtBQUdFRCxrQkFBVSxFQUFFO0FBSGQ7O0FBS0Y7QUFDRSxhQUFPRyxLQUFQO0FBeEJKO0FBMEJELENBM0JNIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvcGFnZS1yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU0VUX1BBR0VfSE9NRV9TVEFSVCxcbiAgU0VUX1BBR0VfSE9NRV9TVUNDRVNTLFxuICBMRUFWRV9IT01FX1BBR0VfU1RBUlQsXG4gIExFQVZFX0hPTUVfUEFHRV9TVUNDRVNTLFxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG9uSG9tZVBhZ2U6IHRydWUsXG4gIGlzTG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgcGFnZSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9QQUdFX0hPTUVfU1RBUlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9QQUdFX0hPTUVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBvbkhvbWVQYWdlOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIExFQVZFX0hPTUVfUEFHRV9TVEFSVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgTEVBVkVfSE9NRV9QQUdFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgb25Ib21lUGFnZTogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/page-reducer.js\n");

/***/ }),

/***/ "./redux/reducers/project-reducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/project-reducer.js ***!
  \*******************************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./redux/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  project: null,\n  isLoading: false\n};\nconst project = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PROJECT_START\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_PROJECT_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        project: action.payload\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9wcm9qZWN0LXJlZHVjZXIuanM/MWQ4NSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwcm9qZWN0IiwiaXNMb2FkaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1BST0pFQ1RfU1RBUlQiLCJTRVRfUFJPSkVDVF9TVUNDRVNTIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxJQURVO0FBRW5CQyxXQUFTLEVBQUU7QUFGUSxDQUFyQjtBQUtPLE1BQU1ELE9BQU8sR0FBRyxDQUFDRSxLQUFLLEdBQUdILFlBQVQsRUFBdUJJLE1BQXZCLEtBQWtDO0FBQ3ZELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLDBEQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRUQsaUJBQVMsRUFBRTtBQUZiOztBQUlGLFNBQUtLLDREQUFMO0FBQ0UsNkNBQ0tKLEtBREw7QUFFRUQsaUJBQVMsRUFBRSxLQUZiO0FBR0VELGVBQU8sRUFBRUcsTUFBTSxDQUFDSTtBQUhsQjs7QUFLRjtBQUNFLGFBQU9MLEtBQVA7QUFiSjtBQWVELENBaEJNIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvcHJvamVjdC1yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1BST0pFQ1RfU1RBUlQsIFNFVF9QUk9KRUNUX1NVQ0NFU1MgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2plY3Q6IG51bGwsXG4gIGlzTG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9QUk9KRUNUX1NUQVJUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBTRVRfUFJPSkVDVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHByb2plY3Q6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/project-reducer.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers/index.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwibG9nZ2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQWNDLDZEQUFlLENBQUNDLGtEQUFELEVBQVFDLG1EQUFSLENBQTdCLENBQXpCO0FBRWVMLG9FQUFmIiwiZmlsZSI6Ii4vcmVkdXgvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcikpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIj8xYzAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-logger\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });