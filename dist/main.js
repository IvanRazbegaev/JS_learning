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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerPhones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerPhones */ \"./modules/headerPhones.js\");\n/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/feedback */ \"./modules/feedback.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/portfolio */ \"./modules/portfolio.js\");\n/* harmony import */ var _modules_consultation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/consultation */ \"./modules/consultation.js\");\n/* harmony import */ var _modules_feedbackBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/feedbackBlock */ \"./modules/feedbackBlock.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_feedback__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.feedback');\r\n(0,_modules_headerPhones__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_portfolio__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_consultation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_feedbackBlock__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/consultation.js":
/*!*********************************!*\
  !*** ./modules/consultation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback */ \"./modules/feedback.js\");\n\r\n\r\n\r\nconst consult = () => {\r\n  const consultBtn = document.querySelectorAll('.button.button_wide');\r\n  const consultPopup = document.querySelector('.popup-consultation');\r\n  const consultCloseBtn = consultPopup.querySelector('.close');\r\n\r\n  (0,_feedback__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.popup.popup-consultation');\r\n\r\n  consultBtn.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      consultPopup.style.visibility = 'visible';\r\n    })\r\n  })\r\n\r\n  consultPopup.addEventListener('click', (e) => {\r\n    if (e.target.closest('.feedback-wrap')) {\r\n      consultPopup.style.visibility = 'visible';\r\n    } else {\r\n      consultPopup.style.visibility = 'hidden';\r\n    }\r\n  })\r\n\r\n  consultCloseBtn.addEventListener('clicked', () => {\r\n    consultPopup.style.visibility = 'hidden';\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consult);\r\n\n\n//# sourceURL=webpack:///./modules/consultation.js?");

/***/ }),

/***/ "./modules/feedback.js":
/*!*****************************!*\
  !*** ./modules/feedback.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst feedback = (form) => {\r\n\r\n  const feedbackForm = document.querySelectorAll(`${form}`);\r\n\r\n  const termsCloseBtn = document.querySelector('.popup-privacy>.close');\r\n  const terms = document.querySelector('.popup-privacy');\r\n\r\n  const thanksPopup = document.querySelector('.popup-thank');\r\n  const thanksForm = thanksPopup.querySelector('.feedback-wrap.popup-thank-bg');\r\n  const thanksPopupClose = thanksPopup.querySelector('.close');\r\n\r\n  termsCloseBtn.addEventListener('click', () => {\r\n    terms.style.visibility  = 'hidden';\r\n  })\r\n\r\n  feedbackForm.forEach(item => {\r\n    const phoneInput = item.querySelector('.input.feedback__input-input');\r\n    const feedbackBtn = item.querySelector('.button');\r\n    const privacyLink = item.querySelector('.link-privacy');\r\n\r\n    let confCheckbox = item.querySelector('.checkbox__input');\r\n\r\n    privacyLink.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      terms.style.visibility  = 'visible'\r\n    })\r\n\r\n    feedbackForm.forEach(item => {\r\n      const phoneInput = item.querySelector('.input.feedback__input-input');\r\n      phoneInput.addEventListener('input', (e) => {\r\n        e.target.value = phoneMask(e.target.value)\r\n      })\r\n    })\r\n    function phoneMask (phone) {\r\n      return phone.replace(/\\D/g, '')\r\n        .slice(0, 11)\r\n        .replace(/^(\\d{1,2})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, '+$1($2)$3-$4-$5');\r\n    }\r\n    feedbackBtn.addEventListener('click', async (e) => {\r\n      confCheckbox = item.querySelector('.checkbox__input');\r\n      e.preventDefault();\r\n      if (phoneInput.value.length < 11){\r\n        alert('Телефонный номер не может быть менее 11 символов!')\r\n        return false;\r\n      } else if (!confCheckbox.checked) {\r\n        alert('Примите политику безопасности!')\r\n        return false;\r\n      } else {\r\n        phoneInput.value = '';\r\n        confCheckbox.checked = false;\r\n      }\r\n      console.log(thanksForm)\r\n      thanksPopup.style.visibility = 'visible';\r\n      thanksPopup.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.popup-thank-bg')){\r\n          thanksPopup.style.visibility = 'hidden';\r\n        }\r\n      })\r\n      thanksPopupClose.addEventListener('click', () => {\r\n        thanksPopup.style.visibility = 'hidden';\r\n      })\r\n\r\n      const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sendFeedback)(phoneInput.value);\r\n      if (form.includes('popup')){\r\n        document.querySelector(form).style.visibility = 'hidden';\r\n      }\r\n      console.log(response);\r\n    })\r\n  })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedback);\r\n\n\n//# sourceURL=webpack:///./modules/feedback.js?");

/***/ }),

/***/ "./modules/feedbackBlock.js":
/*!**********************************!*\
  !*** ./modules/feedbackBlock.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst feedbackBlock = async () => {\r\n  const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');\r\n\r\n  const termsCloseBtn = document.querySelector('.popup-privacy>.close');\r\n  const terms = document.querySelector('.popup-privacy');\r\n\r\n  const thanksPopup = document.querySelector('.popup-thank');\r\n  const thanksForm = thanksPopup.querySelector('.feedback-wrap.popup-thank-bg');\r\n  const thanksPopupClose = thanksPopup.querySelector('.close');\r\n\r\n  termsCloseBtn.addEventListener('click', () => {\r\n    terms.style.visibility = 'hidden';\r\n  })\r\n\r\n  feedbackBlockForm.forEach(block => {\r\n    const phoneInput = block.querySelector('.feedback-block__form-input_phone');\r\n    const nameInput = block.querySelector('.feedback-block__form-input_name');\r\n    const feedbackBtn = block.querySelector('.button');\r\n    const privacyLink = block.querySelector('.link-privacy');\r\n\r\n    let confCheckbox = block.querySelector('.checkbox__input');\r\n\r\n    privacyLink.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      terms.style.visibility = 'visible'\r\n    })\r\n\r\n    phoneInput.addEventListener('input', (e) => {\r\n      e.target.value = phoneMask(e.target.value)\r\n    })\r\n\r\n    nameInput.addEventListener('input', (e) => {\r\n      e.target.value = nameMask(e.target.value);\r\n    })\r\n\r\n    feedbackBtn.addEventListener('click', async (e) => {\r\n      confCheckbox = block.querySelector('.checkbox__input');\r\n      e.preventDefault();\r\n      if (phoneInput.value.length < 11) {\r\n        alert('Телефонный номер не может быть менее 11 символов!')\r\n        return false;\r\n      } else if (!confCheckbox.checked) {\r\n        alert('Примите политику безопасности!')\r\n        return false;\r\n      } else if (nameInput.value.length < 2){\r\n        alert('Имя не может быть менее 2ух символов!');\r\n        return false;\r\n      } else {\r\n        phoneInput.value = '';\r\n        nameInput.value = '';\r\n        confCheckbox.checked = false;\r\n      }\r\n\r\n      thanksPopup.style.visibility = 'visible';\r\n      thanksPopup.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-thank-bg')) {\r\n          thanksPopup.style.visibility = 'hidden';\r\n        }\r\n      })\r\n      thanksPopupClose.addEventListener('click', () => {\r\n        thanksPopup.style.visibility = 'hidden';\r\n      })\r\n\r\n      const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sendFeedback)(phoneInput.value);\r\n      console.log(response)\r\n    })\r\n  })\r\n}\r\n  const nameMask = (name) => {\r\n    return name.replace(/\\d/gi, '')\r\n  }\r\n\r\n\r\n\r\n  const phoneMask = (phone) => {\r\n    return phone.replace(/\\D/g, '')\r\n      .slice(0, 11)\r\n      .replace(/^(\\d{1,2})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, '+$1($2)$3-$4-$5');\r\n  }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedbackBlock);\r\n\n\n//# sourceURL=webpack:///./modules/feedbackBlock.js?");

/***/ }),

/***/ "./modules/headerPhones.js":
/*!*********************************!*\
  !*** ./modules/headerPhones.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerPhones = () => {\r\n  const phoneArrow = document.querySelector('.header-contacts__arrow img');\r\n  const secondPhone = document.querySelector('.header-contacts__phone-number-accord')\r\n\r\n  let arrowPressed = false;\r\n\r\n  phoneArrow.addEventListener('click', (e) => {\r\n    if(!arrowPressed){\r\n      secondPhone.style.position = 'relative';\r\n      secondPhone.querySelector('a').style.opacity = '1';\r\n      phoneArrow.style.transform = 'rotate(180deg)';\r\n      arrowPressed = true;\r\n    } else {\r\n      secondPhone.style.position = 'absolute';\r\n      secondPhone.querySelector('a').style.opacity = '0';\r\n      phoneArrow.style.transform = 'rotate(0deg)';\r\n      arrowPressed = false;\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPhones);\r\n\n\n//# sourceURL=webpack:///./modules/headerPhones.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendFeedback\": () => (/* binding */ sendFeedback)\n/* harmony export */ });\nconst sendFeedback = async (...data) => {\n\n  console.log(data)\n  const path = 'https://en22hlwqnbzi7pj.m.pipedream.net'\n  const getData = await fetch(path,{\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-type': 'application/json',\n      'Accept': 'application/json'\n    }\n  }).then(response => response.json())\n    .catch((e) => console.log(e));\n\n  return getData;\n}\n\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"menuClosing\": () => (/* binding */ menuClosing)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuIcon = document.querySelector('.menu__icon');\r\n  const popup = document.querySelector('.popup-dialog-menu')\r\n  const closeBtn = document.querySelector('.close-menu');\r\n  const menuItem = document.querySelectorAll('.popup-menu-nav__item > a');\r\n  const upBtn = document.querySelector('.button-footer>a');\r\n\r\n  menuIcon.addEventListener('click', () => {\r\n    popup.style.transform = 'translate3d(0, 0%, 0)';\r\n  })\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    menuClosing();\r\n  })\r\n\r\n  menuItem.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      const href = document.querySelector(item.getAttribute(\"href\"));\r\n      menuClosing();\r\n      e.preventDefault();\r\n      href.scrollIntoView({block:\"center\", behavior: \"smooth\"})\r\n    })\r\n  })\r\n\r\n  upBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    const href = document.querySelector(upBtn.getAttribute(\"href\"));\r\n    href.scrollIntoView({block:\"center\", behavior: \"smooth\"})\r\n  })\r\n\r\n}\r\nconst menuClosing = () => {\r\n  const popup = document.querySelector('.popup-dialog-menu')\r\n  if(document.documentElement.offsetWidth <= 576){\r\n    popup.style.transform = 'translate3d(0,-100%, 0)';\r\n  }else {\r\n    popup.style.transform = 'translate3d(100%, 0, 0)'\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./modules/menu.js\");\n\r\n\r\nconst modal = () => {\r\n  const modalWindow = document.querySelector('.popup-repair-types');\r\n  const fullList = document.querySelectorAll('.link-list');\r\n  const modalCloseBtn = modalWindow.querySelector('.close')\r\n\r\n  fullList.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      if(item.querySelector('.menu-link')){\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuClosing)();\r\n      }\r\n      modalWindow.style.visibility = 'visible';\r\n    })\r\n  })\r\n\r\n  modalCloseBtn.addEventListener('click', () => {\r\n    modalWindow.style.visibility = 'hidden';\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/portfolio.js":
/*!******************************!*\
  !*** ./modules/portfolio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolio = () => {\r\n  const portfolioForm = document.querySelector('.portfolio');\r\n  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');\r\n  const arrowRight = document.getElementById('portfolio-arrow_right');\r\n  const arrowLeft = document.getElementById('portfolio-arrow_left');\r\n\r\n  let currentMargin = 0;\r\n  const maxMargin = +portfolioSlide[0].offsetWidth * +portfolioSlide.length;\r\n  arrowRight.addEventListener('click', () => {\r\n    console.log('arrow is clicked')\r\n    if(currentMargin >= maxMargin - (+portfolioSlide[0].offsetWidth * +(portfolioSlide.length - 2))){\r\n      currentMargin = +portfolioSlide[0].offsetWidth * +(portfolioSlide.length - 2)\r\n    }\r\n    currentMargin += +portfolioSlide[0].offsetWidth;\r\n    portfolioSlide[0].style.marginLeft = `-${currentMargin}px`;\r\n    })\r\n\r\n  arrowLeft.style.display = 'flex';\r\n  arrowLeft.addEventListener('click', () => {\r\n    console.log(currentMargin)\r\n    currentMargin -= +portfolioSlide[0].offsetWidth;\r\n    if (currentMargin < 0) {\r\n      currentMargin = 0;\r\n    }\r\n    portfolioSlide[0].style.marginLeft = `-${currentMargin}px`;\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);\r\n\n\n//# sourceURL=webpack:///./modules/portfolio.js?");

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