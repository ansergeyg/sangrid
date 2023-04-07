/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sangrid"] = factory();
	else
		root["sangrid"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildGrid\": () => (/* binding */ buildGrid),\n/* harmony export */   \"drawGrid\": () => (/* binding */ drawGrid)\n/* harmony export */ });\nfunction buildGrid(cellSize, cellCount, sepDist) {\r\n  let grid = [];\r\n  let dx = 0;\r\n  let dy = 0;\r\n  let sepx = 0;\r\n  let sepy = 0\r\n\r\n  for (let i = 0; i < cellCount; i++) {\r\n    grid[i] = [];\r\n    for (let j = 0; j < cellCount; j++) {\r\n      grid[i][j] = {x: sepx + dx, y: sepy + dy, c: 0};\r\n      dy += cellSize;\r\n      sepy += sepDist;\r\n    }\r\n    dx += cellSize;\r\n    sepx += sepDist;\r\n    sepy = 0;\r\n    dy = 0;\r\n  }\r\n\r\n  return grid;\r\n}\r\n\r\nfunction drawGrid(ctx, grid, cellSize, cellCount) {\r\n  for (let i = 0; i < cellCount; i++) {\r\n    for (let j = 0; j < cellCount; j++) {\r\n      drawCell(ctx, grid[i][j].x, grid[i][j].y, cellSize);\r\n    }\r\n  }\r\n}\r\n\r\nfunction drawCell(ctx, x, y, cellSize) {\r\n  ctx.fillStyle = \"black\";\r\n  ctx.fillRect(x , y, cellSize, cellSize);\r\n  ctx.fillStyle = \"white\";\r\n  ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sangrid/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ \"./src/grid.js\");\n\r\n\r\nfunction init(userConfig) {\r\n  let defaultConfig = {\r\n    'canvasId': 'tutorial',\r\n    'width': 200,\r\n    'height': 200,\r\n    'cellCount': 30,\r\n    'cellSize': 20,\r\n    'sepDist': 1,\r\n};\r\n  const config = Object.assign(defaultConfig, userConfig);\r\n\r\n  document.addEventListener('DOMContentLoaded', (event) => {\r\n\r\n  const canvas = document.getElementById(config.canvasId);\r\n\r\n    if (canvas.getContext) {\r\n      const ctx = canvas.getContext(\"2d\");\r\n      let grid = _grid_js__WEBPACK_IMPORTED_MODULE_0__.buildGrid(config.cellSize, config.cellCount, config.sepDist);\r\n      _grid_js__WEBPACK_IMPORTED_MODULE_0__.drawGrid(ctx, grid, config.cellSize, config.cellCount);\r\n    }\r\n  });  \r\n}\r\n\n\n//# sourceURL=webpack://sangrid/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});