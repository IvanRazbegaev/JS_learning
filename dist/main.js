/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/feedback */ \"./modules/feedback.js\");\n\r\n\r\n(0,_modules_feedback__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/feedback.js":
/*!*****************************!*\
  !*** ./modules/feedback.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst feedback = () => {\n\n  const feedbackForm = document.querySelectorAll('.feedback');\n\n  feedbackForm.forEach(item => {\n    const phoneInput = item.querySelector('.input.feedback__input-input');\n    const feedbackBtn = item.querySelector('.button');\n    let confCheckbox = item.querySelector('.checkbox__input');\n    console.dir(confCheckbox);\n\n    const feedbackForm = document.querySelectorAll('.feedback');\n\n    feedbackForm.forEach(item => {\n      const phoneInput = item.querySelector('.input.feedback__input-input');\n      phoneInput.addEventListener('input', (e) => {\n        e.target.value = phoneMask(e.target.value);\n      })\n    })\n\n    feedbackBtn.addEventListener('click', async (e) => {\n      confCheckbox = item.querySelector('.checkbox__input');\n      e.preventDefault();\n      if (phoneInput.value.length < 11){\n        alert('Телефонный номер не может быть менее 11 символов!')\n        return false;\n      } else if (!confCheckbox.checked) {\n        alert('Примите политику безопасности!')\n        return false;\n      } else {\n        confCheckbox.checked = false;\n      }\n      const response = await sendFeedback(phoneInput.value);\n      phoneInput.value = '';\n      console.log(response);\n    })\n  })\n}\n\nfunction phoneMask (phone) {\n  return phone.replace(/\\D/g, '')\n    .replace(/^(\\d{1,2})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, '+$1($2)$3-$4-$5')\n}\n\nconst sendFeedback = async (data) => {\n  const path = 'https://en22hlwqnbzi7pj.m.pipedream.net'\n  const getData = await fetch(path,{\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-type': 'application/json'\n    }\n  }).then(response => response.json())\n    .catch((e) => console.log(e));\n\n  return getData;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedback);\n\n\n//# sourceURL=webpack:///./modules/feedback.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;