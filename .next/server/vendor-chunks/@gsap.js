"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@gsap";
exports.ids = ["vendor-chunks/@gsap"];
exports.modules = {

/***/ "(ssr)/./node_modules/@gsap/react/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@gsap/react/src/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGSAP: () => (/* binding */ useGSAP)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"(ssr)/./node_modules/gsap/index.js\");\n/*!\n * @gsap/react 2.1.0\n * https://gsap.com\n *\n * Copyright 2008-2024, GreenSock. All rights reserved.\n * Subject to the terms at https://gsap.com/standard-license or for\n * Club GSAP members, the agreement issued with that membership.\n * @author: Jack Doyle, jack@greensock.com\n*/ /* eslint-disable */ \n\nlet useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect, isConfig = (value)=>value && !Array.isArray(value) && typeof value === \"object\", emptyArray = [], defaultConfig = {}, _gsap = gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; // accommodates situations where different versions of GSAP may be loaded, so a user can gsap.registerPlugin(useGSAP);\nconst useGSAP = (callback, dependencies = emptyArray)=>{\n    let config = defaultConfig;\n    if (isConfig(callback)) {\n        config = callback;\n        callback = null;\n        dependencies = \"dependencies\" in config ? config.dependencies : emptyArray;\n    } else if (isConfig(dependencies)) {\n        config = dependencies;\n        dependencies = \"dependencies\" in config ? config.dependencies : emptyArray;\n    }\n    let { scope, revertOnUpdate } = config, [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    callback && typeof callback !== \"function\" && console.warn(\"First parameter must be a function or config object\");\n    const context = _gsap.context(()=>{}, scope), contextSafe = (func)=>context.add(null, func), cleanup = ()=>context.revert(), deferCleanup = dependencies && dependencies.length && !revertOnUpdate;\n    useIsomorphicLayoutEffect(()=>{\n        callback && context.add(callback, scope);\n        if (!deferCleanup || !mounted) {\n            return cleanup;\n        }\n    }, dependencies);\n    deferCleanup && useIsomorphicLayoutEffect(()=>{\n        setMounted(true);\n        return cleanup;\n    }, emptyArray);\n    return {\n        context,\n        contextSafe\n    };\n};\nuseGSAP.register = (core)=>{\n    _gsap = core;\n};\nuseGSAP.headless = true; // doesn't require the window to be registered.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGdzYXAvcmVhY3Qvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFRQSxHQUNBLGtCQUFrQixHQUMyQztBQUNyQztBQUV4QixJQUFJSSw0QkFBNEIsTUFBNkIsR0FBR0gsQ0FBZUEsR0FBR0QsNENBQVNBLEVBQ3ZGSyxXQUFXQyxDQUFBQSxRQUFTQSxTQUFTLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0YsVUFBVSxPQUFPQSxVQUFXLFVBQ3hFRyxhQUFhLEVBQUUsRUFDZkMsZ0JBQWdCLENBQUMsR0FDakJDLFFBQVFSLDRDQUFJQSxFQUFFLHNIQUFzSDtBQUVqSSxNQUFNUyxVQUFVLENBQUNDLFVBQVVDLGVBQWVMLFVBQVU7SUFDekQsSUFBSU0sU0FBU0w7SUFDYixJQUFJTCxTQUFTUSxXQUFXO1FBQ3RCRSxTQUFTRjtRQUNUQSxXQUFXO1FBQ1hDLGVBQWUsa0JBQWtCQyxTQUFTQSxPQUFPRCxZQUFZLEdBQUdMO0lBQ2xFLE9BQU8sSUFBSUosU0FBU1MsZUFBZTtRQUNqQ0MsU0FBU0Q7UUFDVEEsZUFBZSxrQkFBa0JDLFNBQVNBLE9BQU9ELFlBQVksR0FBR0w7SUFDbEU7SUFDQSxJQUFJLEVBQUVPLEtBQUssRUFBRUMsY0FBYyxFQUFFLEdBQUdGLFFBQzVCLENBQUNHLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3BDVyxZQUFZLE9BQU9BLGFBQWEsY0FBZU8sUUFBUUMsSUFBSSxDQUFDO0lBQzdELE1BQU1DLFVBQVVYLE1BQU1XLE9BQU8sQ0FBQyxLQUFRLEdBQUdOLFFBQ25DTyxjQUFjLENBQUNDLE9BQVNGLFFBQVFHLEdBQUcsQ0FBQyxNQUFNRCxPQUMxQ0UsVUFBVSxJQUFNSixRQUFRSyxNQUFNLElBQzlCQyxlQUFlZCxnQkFBZ0JBLGFBQWFlLE1BQU0sSUFBSSxDQUFDWjtJQUM3RGIsMEJBQTBCO1FBQ3hCUyxZQUFZUyxRQUFRRyxHQUFHLENBQUNaLFVBQVVHO1FBQ2xDLElBQUksQ0FBQ1ksZ0JBQWdCLENBQUNWLFNBQVM7WUFDN0IsT0FBT1E7UUFDVDtJQUNGLEdBQUdaO0lBQ0hjLGdCQUFnQnhCLDBCQUEwQjtRQUN0Q2UsV0FBVztRQUNYLE9BQU9PO0lBQ1QsR0FBR2pCO0lBQ0wsT0FBTztRQUFFYTtRQUFTQztJQUFZO0FBQ2hDLEVBQUU7QUFDRlgsUUFBUWtCLFFBQVEsR0FBR0MsQ0FBQUE7SUFBVXBCLFFBQVFvQjtBQUFNO0FBQzNDbkIsUUFBUW9CLFFBQVEsR0FBRyxNQUFNLCtDQUErQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLy4vbm9kZV9tb2R1bGVzL0Bnc2FwL3JlYWN0L3NyYy9pbmRleC5qcz85MDgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGdzYXAvcmVhY3QgMi4xLjBcbiAqIGh0dHBzOi8vZ3NhcC5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDI0LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dzYXAuY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdTQVAgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5sZXQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3QsXG4gICAgaXNDb25maWcgPSB2YWx1ZSA9PiB2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mKHZhbHVlKSA9PT0gXCJvYmplY3RcIixcbiAgICBlbXB0eUFycmF5ID0gW10sXG4gICAgZGVmYXVsdENvbmZpZyA9IHt9LFxuICAgIF9nc2FwID0gZ3NhcDsgLy8gYWNjb21tb2RhdGVzIHNpdHVhdGlvbnMgd2hlcmUgZGlmZmVyZW50IHZlcnNpb25zIG9mIEdTQVAgbWF5IGJlIGxvYWRlZCwgc28gYSB1c2VyIGNhbiBnc2FwLnJlZ2lzdGVyUGx1Z2luKHVzZUdTQVApO1xuXG5leHBvcnQgY29uc3QgdXNlR1NBUCA9IChjYWxsYmFjaywgZGVwZW5kZW5jaWVzID0gZW1wdHlBcnJheSkgPT4ge1xuICBsZXQgY29uZmlnID0gZGVmYXVsdENvbmZpZztcbiAgaWYgKGlzQ29uZmlnKGNhbGxiYWNrKSkge1xuICAgIGNvbmZpZyA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICBkZXBlbmRlbmNpZXMgPSBcImRlcGVuZGVuY2llc1wiIGluIGNvbmZpZyA/IGNvbmZpZy5kZXBlbmRlbmNpZXMgOiBlbXB0eUFycmF5O1xuICB9IGVsc2UgaWYgKGlzQ29uZmlnKGRlcGVuZGVuY2llcykpIHtcbiAgICBjb25maWcgPSBkZXBlbmRlbmNpZXM7XG4gICAgZGVwZW5kZW5jaWVzID0gXCJkZXBlbmRlbmNpZXNcIiBpbiBjb25maWcgPyBjb25maWcuZGVwZW5kZW5jaWVzIDogZW1wdHlBcnJheTtcbiAgfVxuICBsZXQgeyBzY29wZSwgcmV2ZXJ0T25VcGRhdGUgfSA9IGNvbmZpZyxcbiAgICAgIFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSAmJiBjb25zb2xlLndhcm4oXCJGaXJzdCBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGNvbmZpZyBvYmplY3RcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBfZ3NhcC5jb250ZXh0KCgpID0+IHsgfSwgc2NvcGUpLFxuICAgICAgICBjb250ZXh0U2FmZSA9IChmdW5jKSA9PiBjb250ZXh0LmFkZChudWxsLCBmdW5jKSxcbiAgICAgICAgY2xlYW51cCA9ICgpID0+IGNvbnRleHQucmV2ZXJ0KCksXG4gICAgICAgIGRlZmVyQ2xlYW51cCA9IGRlcGVuZGVuY2llcyAmJiBkZXBlbmRlbmNpZXMubGVuZ3RoICYmICFyZXZlcnRPblVwZGF0ZTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY2FsbGJhY2sgJiYgY29udGV4dC5hZGQoY2FsbGJhY2ssIHNjb3BlKTtcbiAgICBpZiAoIWRlZmVyQ2xlYW51cCB8fCAhbW91bnRlZCkgeyAvLyBSZWFjdCByZW5kZXJzIGJvdHRvbS11cCwgdGh1cyB0aGVyZSBjb3VsZCBiZSBob29rcyB3aXRoIGRlcGVuZGVuY2llcyB0aGF0IHJ1biBCRUZPUkUgdGhlIGNvbXBvbmVudCBtb3VudHMsIHRodXMgY2xlYW51cCB3b3VsZG4ndCBvY2N1ciBzaW5jZSBhIGhvb2sgd2l0aCBhbiBlbXB0eSBkZXBlbmRlbmN5IEFycmF5IHdvdWxkIG9ubHkgcnVuIG9uY2UgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9XG4gIH0sIGRlcGVuZGVuY2llcyk7XG4gIGRlZmVyQ2xlYW51cCAmJiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9LCBlbXB0eUFycmF5KTtcbiAgcmV0dXJuIHsgY29udGV4dCwgY29udGV4dFNhZmUgfTtcbn07XG51c2VHU0FQLnJlZ2lzdGVyID0gY29yZSA9PiB7IF9nc2FwID0gY29yZTsgfTtcbnVzZUdTQVAuaGVhZGxlc3MgPSB0cnVlOyAvLyBkb2Vzbid0IHJlcXVpcmUgdGhlIHdpbmRvdyB0byBiZSByZWdpc3RlcmVkLlxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVN0YXRlIiwiZ3NhcCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJpc0NvbmZpZyIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZW1wdHlBcnJheSIsImRlZmF1bHRDb25maWciLCJfZ3NhcCIsInVzZUdTQVAiLCJjYWxsYmFjayIsImRlcGVuZGVuY2llcyIsImNvbmZpZyIsInNjb3BlIiwicmV2ZXJ0T25VcGRhdGUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImNvbnNvbGUiLCJ3YXJuIiwiY29udGV4dCIsImNvbnRleHRTYWZlIiwiZnVuYyIsImFkZCIsImNsZWFudXAiLCJyZXZlcnQiLCJkZWZlckNsZWFudXAiLCJsZW5ndGgiLCJyZWdpc3RlciIsImNvcmUiLCJoZWFkbGVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@gsap/react/src/index.js\n");

/***/ })

};
;