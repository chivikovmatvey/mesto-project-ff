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

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   delCard: () => (/* binding */ delCard),\n/* harmony export */   handleLikeButton: () => (/* binding */ handleLikeButton)\n/* harmony export */ });\nfunction createCard(cardData, deleteCallback, modalCallback, likeCallback) {\n  var cardTemplate = document.querySelector(\"#card-template\").content;\n  var card = cardTemplate.querySelector(\".card\").cloneNode(true);\n  var cardImage = card.querySelector(\".card__image\");\n  var cardTitle = card.querySelector(\".card__title\");\n  var deleteButton = card.querySelector(\".card__delete-button\");\n  var likeButton = card.querySelector(\".card__like-button\");\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  deleteButton.addEventListener(\"click\", deleteCallback);\n  cardImage.addEventListener(\"click\", modalCallback);\n  likeButton.addEventListener(\"click\", likeCallback);\n  return card;\n}\nfunction delCard(event) {\n  event.target.closest(\".card\").remove();\n}\nfunction handleLikeButton(evt) {\n  evt.target.classList.toggle(\"card__like-button_is-active\");\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.js */ \"./src/scripts/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n\n\n\n\nvar cardList = document.querySelector('.places__list');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar popups = document.querySelectorAll('.popup');\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar popupNew = document.querySelector('.popup_type_new-card');\nvar popupImg = document.querySelector('.popup_type_image');\nvar formEdit = popupEdit.querySelector('.popup__form');\nvar nameInput = formEdit.querySelector('.popup__input_type_name');\nvar jobInput = formEdit.querySelector('.popup__input_type_description');\nvar formNew = popupNew.querySelector('.popup__form');\nvar placeInput = formNew.querySelector('.popup__input_type_card-name');\nvar linkInput = formNew.querySelector('.popup__input_type_url');\nvar popupImage = document.querySelector('.popup__image');\nvar popupImgCaption = document.querySelector('.popup__caption');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nfunction addCard(arrCards, cardList, deleteCallback, modalCallback, likeCallback) {\n  arrCards.forEach(function (item) {\n    var card = (0,_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(item, deleteCallback, modalCallback, likeCallback);\n    cardList.append(card);\n  });\n}\nfunction handleCardClick(evt) {\n  createImgPopup(evt, popupImage, popupImgCaption, popupImg);\n}\nfunction handleFormEditSubmit(evt) {\n  evt.preventDefault();\n  profileTitle.textContent = nameInput.value;\n  profileDescription.textContent = jobInput.value;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupEdit);\n}\nfunction handleFormNewSubmit(evt) {\n  evt.preventDefault();\n  var cardData = {\n    name: placeInput.value,\n    link: linkInput.value\n  };\n  var newCard = (0,_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(cardData, _card_js__WEBPACK_IMPORTED_MODULE_2__.delCard, handleCardClick, _card_js__WEBPACK_IMPORTED_MODULE_2__.handleLikeButton);\n  formNew.reset();\n  cardList.prepend(newCard);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupNew);\n}\nfunction createImgPopup(evt, popupImage, popupCaption, popupImg) {\n  popupImage.src = evt.target.src;\n  popupImage.alt = evt.target.alt;\n  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupImg);\n}\npopups.forEach(function (popup) {\n  return (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.initPopup)(popup, _modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup);\n});\nprofileEditButton.addEventListener('click', function () {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileDescription.textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupEdit);\n});\nprofileAddButton.addEventListener('click', function () {\n  return (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupNew);\n});\nformEdit.addEventListener('submit', handleFormEditSubmit);\nformNew.addEventListener('submit', handleFormNewSubmit);\naddCard(_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards, cardList, _card_js__WEBPACK_IMPORTED_MODULE_2__.delCard, handleCardClick, _card_js__WEBPACK_IMPORTED_MODULE_2__.handleLikeButton);\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeEsc: () => (/* binding */ closeEsc),\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   initPopup: () => (/* binding */ initPopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup(popupElement) {\n  popupElement.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeEsc);\n}\nfunction closePopup(popupElement) {\n  popupElement.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeEsc);\n}\nfunction closeEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    closePopup(openedPopup);\n  }\n}\nfunction initPopup(popup, togglePopupFunction) {\n  popup.classList.add('popup_is-animated');\n  popup.querySelector('.popup__close').addEventListener('click', function () {\n    return togglePopupFunction(popup);\n  });\n  popup.addEventListener('click', function (evt) {\n    if (evt.target === popup) {\n      togglePopupFunction(popup);\n    }\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;