"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./hook/useFirstSoulRender.ts":
/*!************************************!*\
  !*** ./hook/useFirstSoulRender.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/context */ \"(app-pages-browser)/./components/context/index.tsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ \"(app-pages-browser)/./node_modules/gsap/MotionPathPlugin.js\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! usehooks-ts */ \"(app-pages-browser)/./node_modules/usehooks-ts/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst useFirstSoulRender = ()=>{\n    const { nightMode } = (0,_components_context__WEBPACK_IMPORTED_MODULE_0__.useAppContext)();\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(()=>{\n        if (nightMode) {\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__.MotionPathPlugin);\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(\"#soul1\", {\n                duration: 1,\n                right: -1000\n            }, {\n                width: 150,\n                duration: 15,\n                scrollTrigger: \"#firstSec\",\n                repeat: 0,\n                opacity: 0,\n                once: true,\n                repeatDelay: 0,\n                immediateRender: true,\n                yoyo: true,\n                ease: \"power1.inOut\",\n                onComplete: ()=>{\n                    tl.restart();\n                },\n                motionPath: {\n                    path: \"#path1\",\n                    align: \"#path1\"\n                }\n            });\n        }\n    }, [\n        nightMode\n    ]);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFirstSoulRender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2svdXNlRmlyc3RTb3VsUmVuZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OzZEQUdxRDtBQUN6QjtBQUM2QjtBQUNEO0FBRXhELE1BQU1JLHFCQUFxQjtJQUN2QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHTCxrRUFBYUE7SUFFckNHLHNFQUF5QkEsQ0FBQztRQUN4QixJQUFJRSxXQUFXO1lBQ1hKLHNDQUFJQSxDQUFDSyxjQUFjLENBQUNKLG1FQUFnQkE7WUFFcEMsTUFBTUssS0FBS04sc0NBQUlBLENBQUNPLE1BQU0sQ0FDdEIsVUFDQTtnQkFDSUMsVUFBVTtnQkFDVkMsT0FBTyxDQUFDO1lBQ1osR0FDQTtnQkFDSUMsT0FBTztnQkFDUEYsVUFBVTtnQkFDVkcsZUFBZTtnQkFDZkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsTUFBTTtnQkFDTkMsYUFBYTtnQkFDYkMsaUJBQWlCO2dCQUNqQkMsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkMsWUFBWTtvQkFDWmIsR0FBR2MsT0FBTztnQkFDVjtnQkFDQUMsWUFBWTtvQkFDWkMsTUFBTTtvQkFDTkMsT0FBTztnQkFDUDtZQUNKO1FBRUo7SUFDRixHQUFHO1FBQUNuQjtLQUFVO0FBQ2hCO0FBRUEsK0RBQWVELGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rL3VzZUZpcnN0U291bFJlbmRlci50cz81OGJmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgTW90aW9uUGF0aFBsdWdpbiB9IGZyb20gXCJnc2FwL01vdGlvblBhdGhQbHVnaW5cIjtcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcblxuY29uc3QgdXNlRmlyc3RTb3VsUmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbmlnaHRNb2RlIH0gPSB1c2VBcHBDb250ZXh0KClcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmlnaHRNb2RlKSB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oTW90aW9uUGF0aFBsdWdpbilcbiAgICBcbiAgICAgICAgY29uc3QgdGwgPSBnc2FwLmZyb21UbyhcbiAgICAgICAgXCIjc291bDFcIixcbiAgICAgICAge1xuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICByaWdodDogLTEwMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNSxcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IFwiI2ZpcnN0U2VjXCIsXG4gICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGVhdERlbGF5OiAwLFxuICAgICAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgICAgIGVhc2U6IFwicG93ZXIxLmluT3V0XCIsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0bC5yZXN0YXJ0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3Rpb25QYXRoOiB7XG4gICAgICAgICAgICBwYXRoOiBcIiNwYXRoMVwiLFxuICAgICAgICAgICAgYWxpZ246IFwiI3BhdGgxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICB9LCBbbmlnaHRNb2RlXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRmlyc3RTb3VsUmVuZGVyO1xuIl0sIm5hbWVzIjpbInVzZUFwcENvbnRleHQiLCJnc2FwIiwiTW90aW9uUGF0aFBsdWdpbiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VGaXJzdFNvdWxSZW5kZXIiLCJuaWdodE1vZGUiLCJyZWdpc3RlclBsdWdpbiIsInRsIiwiZnJvbVRvIiwiZHVyYXRpb24iLCJyaWdodCIsIndpZHRoIiwic2Nyb2xsVHJpZ2dlciIsInJlcGVhdCIsIm9wYWNpdHkiLCJvbmNlIiwicmVwZWF0RGVsYXkiLCJpbW1lZGlhdGVSZW5kZXIiLCJ5b3lvIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJyZXN0YXJ0IiwibW90aW9uUGF0aCIsInBhdGgiLCJhbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hook/useFirstSoulRender.ts\n"));

/***/ })

});