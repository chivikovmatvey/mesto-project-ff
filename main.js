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

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCard: () => (/* binding */ addNewCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   deleteLike: () => (/* binding */ deleteLike),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUsrInfo: () => (/* binding */ getUsrInfo),\n/* harmony export */   setLike: () => (/* binding */ setLike),\n/* harmony export */   setNewAvatar: () => (/* binding */ setNewAvatar),\n/* harmony export */   setNewUsrAbout: () => (/* binding */ setNewUsrAbout)\n/* harmony export */ });\nvar config = {\n  baseUrl: \"https://nomoreparties.co/v1/wff-cohort-34\",\n  headers: {\n    authorization: \"03638f72-4789-4ff2-9fdb-87c708ef0b2a\",\n    \"Content-Type\": \"application/json\"\n  }\n};\nvar handleResponse = function handleResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar addNewCard = function addNewCard(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar deleteCard = function deleteCard(cardId) {\n  console.log(cardId);\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar setLike = function setLike(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: config.headers\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar deleteLike = function deleteLike(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar getUsrInfo = function getUsrInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar setNewUsrAbout = function setNewUsrAbout(name, title) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: title\n    })\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\nvar setNewAvatar = function setNewAvatar(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(function (res) {\n    return handleResponse(res);\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/api.js?");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   delCard: () => (/* binding */ delCard),\n/* harmony export */   handleLikeButton: () => (/* binding */ handleLikeButton)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/scripts/api.js\");\n\nfunction createCard(cardData, deleteCallback, modalCallback, likeCallback, userId) {\n  var cardTemplate = document.querySelector(\"#card-template\").content;\n  var card = cardTemplate.querySelector(\".card\").cloneNode(true);\n  var cardImage = card.querySelector(\".card__image\");\n  var cardTitle = card.querySelector(\".card__title\");\n  var deleteButton = card.querySelector(\".card__delete-button\");\n  var likeButton = card.querySelector(\".card__like-button\");\n  var countLikes = card.querySelector('.card__count-like');\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  cardImage.addEventListener(\"click\", modalCallback);\n  if (cardData.likes.some(function (like) {\n    return like._id === userId;\n  })) {\n    likeButton.classList.add('card__like-button_is-active');\n  }\n  likeButton.addEventListener(\"click\", function () {\n    handleLikeButton(cardData, likeButton, countLikes);\n  });\n  countLikes.textContent = cardData.likes.length;\n  if (cardData.owner._id === userId) {\n    deleteButton.addEventListener(\"click\", function (evt) {\n      delCard(evt, cardData);\n    });\n  } else {\n    deleteButton.classList.add('card__delete-button-disabled');\n    deleteButton.disabled = true;\n  }\n  return card;\n}\nfunction delCard(evt, cardData) {\n  (0,_api__WEBPACK_IMPORTED_MODULE_0__.deleteCard)(cardData._id).then(function () {\n    evt.target.closest(\".card\").remove();\n  });\n}\nfunction handleLikeButton(cardData, likeButton, countLikes) {\n  likeButton.classList.toggle(\"card__like-button_is-active\");\n  if (likeButton.classList.contains('card__like-button_is-active')) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.setLike)(cardData._id).then(function (res) {\n      countLikes.textContent = res.likes.length;\n    });\n  } else {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.deleteLike)(cardData._id).then(function (res) {\n      countLikes.textContent = res.likes.length;\n    });\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ \"./src/scripts/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation.js */ \"./src/scripts/validation.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.js */ \"./src/scripts/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\nvar cardList = document.querySelector('.places__list');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar popups = document.querySelectorAll('.popup');\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar popupNew = document.querySelector('.popup_type_new-card');\nvar popupImg = document.querySelector('.popup_type_image');\nvar formEdit = popupEdit.querySelector('.popup__form');\nvar nameInput = formEdit.querySelector('.popup__input_type_name');\nvar jobInput = formEdit.querySelector('.popup__input_type_description');\nvar formNew = popupNew.querySelector('.popup__form');\nvar placeInput = formNew.querySelector('.popup__input_type_card-name');\nvar linkInput = formNew.querySelector('.popup__input_type_url');\nvar popupImage = document.querySelector('.popup__image');\nvar popupImgCaption = document.querySelector('.popup__caption');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar profileImage = document.querySelector('.profile__image');\nvar popupAvatar = document.querySelector('.popup_type_avatar');\nvar formAvatar = popupAvatar.querySelector('.popup__form');\nvar avatarInput = formAvatar.querySelector('.popup__input_type_link');\nvar formEditButton = formEdit.querySelector('.button');\nvar formNewButton = formNew.querySelector('.button');\nvar formAvatarButton = formAvatar.querySelector('.button');\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nfunction addCard(arrCards, cardList, deleteCallback, modalCallback, likeCallback, userId) {\n  arrCards.forEach(function (item) {\n    var card = (0,_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(item, deleteCallback, modalCallback, likeCallback, userId);\n    cardList.append(card);\n  });\n}\nfunction handleCardClick(evt) {\n  createImgPopup(evt, popupImage, popupImgCaption, popupImg);\n}\nfunction handleFormEditSubmit(evt) {\n  evt.preventDefault();\n  processLoading(formEditButton, true);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.setNewUsrAbout)(nameInput.value, jobInput.value);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getUsrInfo)().then(function (res) {\n    profileTitle.textContent = res.name;\n    profileDescription.textContent = res.about;\n    processLoading(formEditButton, false);\n  }).finally(function () {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupEdit);\n  });\n}\nfunction handleFormNewSubmit(evt) {\n  evt.preventDefault();\n  processLoading(formNewButton, true);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.addNewCard)(placeInput.value, linkInput.value).then(function (res) {\n    console.log(res);\n    var newCard = (0,_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(res, _card_js__WEBPACK_IMPORTED_MODULE_1__.delCard, handleCardClick, _card_js__WEBPACK_IMPORTED_MODULE_1__.handleLikeButton, res.owner._id);\n    formNew.reset();\n    cardList.prepend(newCard);\n    processLoading(formNewButton, false);\n  }).finally(function () {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupNew);\n  });\n}\nfunction handleFormAvatar(evt) {\n  evt.preventDefault();\n  processLoading(formAvatarButton, true);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.setNewAvatar)(avatarInput.value);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getUsrInfo)().then(function (res) {\n    profileImage.style = \"background-image: url(\".concat(res.avatar, \");\");\n    processLoading(formAvatarButton, false);\n  }).finally(function () {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupAvatar);\n  });\n}\nfunction createImgPopup(evt, popupImage, popupCaption, popupImg) {\n  popupImage.src = evt.target.src;\n  popupImage.alt = evt.target.alt;\n  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupImg);\n}\nfunction processLoading(button, load) {\n  if (load) {\n    button.textContent = 'Сохранение...';\n  } else {\n    button.textContent = 'Сохранить';\n  }\n}\npopups.forEach(function (popup) {\n  return (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.initPopup)(popup, _modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup);\n});\nprofileEditButton.addEventListener('click', function () {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileDescription.textContent;\n  var inputList = Array.from(formEdit.querySelectorAll(validationConfig.inputSelector));\n  inputList.forEach(function (inputElement) {\n    (0,_validation_js__WEBPACK_IMPORTED_MODULE_3__.checkInputValidity)(formEdit, inputElement, validationConfig);\n  });\n  (0,_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formEdit, validationConfig);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupEdit);\n});\nprofileAddButton.addEventListener('click', function () {\n  formNew.reset();\n  (0,_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(formNew, validationConfig);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupNew);\n});\nprofileImage.addEventListener('click', function () {\n  formAvatar.reset();\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupAvatar);\n});\nformEdit.addEventListener('submit', handleFormEditSubmit);\nformNew.addEventListener('submit', handleFormNewSubmit);\nformAvatar.addEventListener('submit', handleFormAvatar);\nPromise.all([(0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)(), (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getUsrInfo)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    cards = _ref2[0],\n    user = _ref2[1];\n  console.log(cards);\n  addCard(cards, cardList, _card_js__WEBPACK_IMPORTED_MODULE_1__.delCard, handleCardClick, _card_js__WEBPACK_IMPORTED_MODULE_1__.handleLikeButton, user._id);\n  profileTitle.textContent = user.name;\n  profileDescription.textContent = user.about;\n  profileImage.style = \"background-image: url(\".concat(user.avatar, \");\");\n}).catch(function (error) {\n  console.error(\"Ошибка при загрузке данных:\", error);\n});\n(0,_validation_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeEsc: () => (/* binding */ closeEsc),\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   initPopup: () => (/* binding */ initPopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup(popupElement) {\n  popupElement.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeEsc);\n}\nfunction closePopup(popupElement) {\n  popupElement.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeEsc);\n}\nfunction closeEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    closePopup(openedPopup);\n  }\n}\nfunction initPopup(popup, togglePopupFunction) {\n  popup.classList.add('popup_is-animated');\n  popup.querySelector('.popup__close').addEventListener('click', function () {\n    return togglePopupFunction(popup);\n  });\n  popup.addEventListener('click', function (evt) {\n    if (evt.target === popup) {\n      togglePopupFunction(popup);\n    }\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

/***/ }),

/***/ "./src/scripts/validation.js":
/*!***********************************!*\
  !*** ./src/scripts/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkInputValidity: () => (/* binding */ checkInputValidity),\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\n\nfunction showInputError(formElement, inputElement, errorMessage, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(\"\".concat(validationConfig.inputErrorClass));\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(\"\".concat(validationConfig.errorClass));\n}\n;\nfunction hideInputError(formElement, inputElement, validationConfig) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(\"\".concat(validationConfig.inputErrorClass));\n  errorElement.classList.remove(\"\".concat(validationConfig.errorClass));\n  errorElement.textContent = '';\n}\n;\nfunction hasInvalidInput(inputList) {\n  return inputList.some(function (elememt) {\n    return !elememt.validity.valid;\n  });\n}\nfunction toggleStateButton(inputList, buttonElement, validationConfig) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.classList.add(\"\".concat(validationConfig.inactiveButtonClass));\n    buttonElement.disabled = true;\n  } else {\n    buttonElement.classList.remove(\"\".concat(validationConfig.inactiveButtonClass));\n    buttonElement.disabled = false;\n  }\n}\nfunction checkInputValidity(formElement, inputElement, validationConfig) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.err);\n  } else {\n    inputElement.setCustomValidity('');\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);\n  } else {\n    hideInputError(formElement, inputElement, validationConfig);\n  }\n}\n;\nfunction setEventListeners(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(\"\".concat(validationConfig.inputSelector)));\n  var submitButton = formElement.querySelector(\"\".concat(validationConfig.submitButtonSelector));\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement, validationConfig);\n      toggleStateButton(inputList, submitButton, validationConfig);\n    });\n  });\n}\n;\nfunction enableValidation(validationConfig) {\n  var formList = Array.from(document.querySelectorAll(\"\".concat(validationConfig.formSelector)));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, validationConfig);\n  });\n}\nfunction clearValidation(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(\"\".concat(validationConfig.inputSelector)));\n  var submitButton = formElement.querySelector(\"\".concat(validationConfig.submitButtonSelector));\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, validationConfig);\n  });\n  toggleStateButton(inputList, submitButton, validationConfig);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/validation.js?");

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