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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildGrid\": () => (/* binding */ buildGrid),\n/* harmony export */   \"drawCell\": () => (/* binding */ drawCell),\n/* harmony export */   \"drawDownBorder\": () => (/* binding */ drawDownBorder),\n/* harmony export */   \"drawGrid\": () => (/* binding */ drawGrid),\n/* harmony export */   \"drawLeftBorder\": () => (/* binding */ drawLeftBorder),\n/* harmony export */   \"drawRightBorder\": () => (/* binding */ drawRightBorder),\n/* harmony export */   \"drawUpBorder\": () => (/* binding */ drawUpBorder),\n/* harmony export */   \"fillCell\": () => (/* binding */ fillCell)\n/* harmony export */ });\nfunction buildGrid(cellSize, cellCount, sep) {\r\n  let x = 10;\r\n  let y = 10;\r\n  let grid = []\r\n  for (let i = 1; i <= cellCount; i++) {\r\n    grid[i] = [];\r\n    for (let j = 1; j <= cellCount; j++) {\r\n      grid[i][j] = {x: x, y: y, c: 0, show: {up: true, right: true, down: true, left: true}};\r\n      y += cellSize + sep;\r\n    }\r\n    x += cellSize + sep;\r\n    y = 10;\r\n  }\r\n\r\n  return grid;\r\n}\r\n\r\nfunction drawGrid(grid, ctx, cellSize, cellCount) {\r\n  for (let i = 1; i <= cellCount; i++) {\r\n    for (let j = 1; j <= cellCount; j++) {\r\n        drawCell(ctx, grid[i][j], cellSize, 2, 'black', 'white');        \r\n    }\r\n  }\r\n}\r\n\r\nfunction drawCell(ctx, cell, cellSize, borderWidth, borderColor, backgroundColor) {\r\n  ctx.lineWidth = borderWidth;\r\n  drawUpBorder(ctx, cell, cellSize, borderColor);\r\n  drawRightBorder(ctx, cell, cellSize, borderColor);\r\n  drawLeftBorder(ctx, cell, cellSize, borderColor);\r\n  drawDownBorder(ctx, cell, cellSize, borderColor);\r\n  fillCell(ctx, cell, cellSize, borderWidth, backgroundColor);\r\n}\r\n\r\nfunction drawUpBorder(ctx, cell, cellSize, borderColor) {\r\n  if (cell.show.up) {\r\n    ctx.beginPath();\r\n    ctx.moveTo(cell.x, cell.y);\r\n    ctx.lineTo(cell.x + cellSize, cell.y);\r\n    ctx.strokeStyle = borderColor;\r\n    ctx.stroke();\r\n  }\r\n}\r\n\r\nfunction drawRightBorder(ctx, cell, cellSize, borderColor) {\r\n  if (cell.show.right) {\r\n    ctx.beginPath();\r\n    ctx.moveTo(cell.x + cellSize, cell.y);\r\n    ctx.lineTo(cell.x + cellSize, cell.y + cellSize);\r\n    ctx.strokeStyle = borderColor;\r\n    ctx.stroke();\r\n  }\r\n}\r\n\r\nfunction drawDownBorder(ctx, cell, cellSize, borderColor) {\r\n  if (cell.show.down) {\r\n    ctx.beginPath();\r\n    ctx.moveTo(cell.x + cellSize, cell.y + cellSize);\r\n    ctx.lineTo(cell.x, cell.y + cellSize);\r\n    ctx.strokeStyle = borderColor;\r\n    ctx.stroke();\r\n  }\r\n}\r\n\r\nfunction drawLeftBorder(ctx, cell, cellSize, borderColor) {\r\n  if (cell.show.left) {\r\n    ctx.beginPath();\r\n    ctx.moveTo(cell.x, cell.y + cellSize);\r\n    ctx.lineTo(cell.x, cell.y);\r\n    ctx.strokeStyle = borderColor;\r\n    ctx.stroke();\r\n  }\r\n}\r\n\r\nfunction fillCell(ctx, cell, cellSize, borderWidth, backgroundColor) {\r\n  ctx.fillStyle = backgroundColor;\r\n  ctx.fillRect(cell.x + borderWidth / 2, cell.y + borderWidth / 2, cellSize - borderWidth, cellSize - borderWidth);\r\n  // ctx.fillRect(x + w/2, y + w/2, d + w/2, d - w);\r\n  // ctx.fillRect(x + w / 2, y + w / 2, d - 2 * w / 2, d - 2 * w / 2);\r\n}\r\n\n\n//# sourceURL=webpack://sangrid/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ \"./src/grid.js\");\n\r\n\r\nfunction init(userConfig) {\r\n  let defaultConfig = {\r\n    'canvasId': 'tutorial',\r\n    'width': 200,\r\n    'height': 200,\r\n    'cellCount': 30,\r\n    'cellSize': 20,\r\n    'sepDist': 1,\r\n};\r\n  const config = Object.assign(defaultConfig, userConfig);\r\n\r\n  document.addEventListener('DOMContentLoaded', (event) => {\r\n\r\n  const canvas = document.getElementById(config.canvasId);\r\n\r\n    if (canvas.getContext) {\r\n      const ctx = canvas.getContext(\"2d\");\r\n      let grid = _grid_js__WEBPACK_IMPORTED_MODULE_0__.buildGrid(config.cellSize, config.cellCount, config.sepDist);\r\n      _grid_js__WEBPACK_IMPORTED_MODULE_0__.drawGrid(grid, ctx, config.cellSize, config.cellCount);\r\n    }\r\n  });  \r\n}\r\n\n\n//# sourceURL=webpack://sangrid/./src/index.js?");

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