(()=>{"use strict";var e={inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__field-error"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=(document.querySelector(".popup__close-icon"),".popup__form_type_edit"),o=document.querySelector(".popup__field_type_name"),i=document.querySelector(".popup__field_type_description"),c=".popup__form_add-card",s=(document.querySelector(".popup__field_type_place"),document.querySelector(".popup__field_type_link-to-img"),document.querySelector(".popup__title_show-image"),document.querySelector(".popup__image"),document.querySelectorAll(".popup"),document.querySelector(".elements")),a=".popup__form_avatar";function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i){var c=o.handleDeleteCard,s=o.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._item=t,this._name=t.name,this._link=t.link,this._amountLikes=t.likes.length,this._handleCardClick=r,this._handleDeleteCard=c,this._ownerItemId=t.owner._id,this._userId=i._id,this._itemId=t._id,this._handleLikeCard=s,this._likeIsActiveSelctor="element__like_active",this._likeCounterSelector=".element__like-counter",this._likeSelector=".element__like",this._itemLikes=t.likes}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setLikesInfo",value:function(e){this._likeCounter=this._element.querySelector(this._likeCounterSelector),this._likeCounter.textContent=e.likes.length,this._likeElement=this._element.querySelector(this._likeSelector),this._likeElement.classList.toggle(this._likeIsActiveSelctor)}},{key:"_showLikes",value:function(){var e=this;this._itemLikes.find((function(t){return t._id===e._userId}))?this._element.querySelector(this._likeSelector).classList.add(this._likeIsActiveSelctor):this._element.querySelector(this._likeSelector).classList.remove(this._likeIsActiveSelctor),this._likeCounter=this._element.querySelector(this._likeCounterSelector),this._likeCounter.textContent=this._amountLikes}},{key:"_deleteCard",value:function(){this._handleDeleteCard(this._itemId,this._element)}},{key:"_setEventListeners",value:function(){var e=this;this._elementImg.addEventListener("click",(function(){e._handleCardClick()})),this._likeElement=this._element.querySelector(this._likeSelector),this._likeElement.addEventListener("click",(function(){e._likeElement.classList.contains(e._likeIsActiveSelctor)?e._handleLikeCard(e._item,"isLiked").then((function(t){e._setLikesInfo(t)})).catch((function(e){console.log("Ошибка снятия лайка: ".concat(e))})):e._handleLikeCard(e._item).then((function(t){e._setLikesInfo(t)})).catch((function(e){console.log("Ошибка добавления лайка: ".concat(e))}))})),this._removeEl=this._element.querySelector(".element__remove"),this._userId===this._ownerItemId?this._removeEl.addEventListener("click",(function(){e._deleteCard()})):this._removeEl.remove()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImg=this._element.querySelector(".element__image"),this._elementName=this._element.querySelector(".element__name"),this._setEventListeners(),this._showLikes(),this._elementImg.src=this._link,this._elementName.textContent=this._name,this._elementName.alt=this._name,this._element}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupCurrent=document.querySelector(t),this._closeButton=this._popupCurrent.querySelector(".popup__close-icon"),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._escape="Escape"}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupCurrent.classList.add("popup_opened"),this._popupCurrent.addEventListener("mousedown",this._handleOverlayClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupCurrent.classList.remove("popup_opened"),this._popupCurrent.removeEventListener("mousedown",this._handleOverlayClose),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"_handleEscClose",value:function(e){e.key===this._escape&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close)}}])&&h(t.prototype,n),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupImage=t._popupCurrent.querySelector(".popup__image"),t}return t=c,(n=[{key:"open",value:function(e,t){m(k(c.prototype),"open",this).call(this),this._popupCurrent.querySelector(".popup__title").textContent=e,this._popupImage.alt=e,this._popupImage.src=t}}])&&y(t.prototype,n),c}(_);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function c(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleFormSubmit=r,n._popupForm=n._popupCurrent.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__field"),n._buttonSubmit=n._popupForm.querySelector(".popup__submit-button"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;C(O(c.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){C(O(c.prototype),"close",this).call(this),this._buttonSubmit.classList.add("popup__submit-button_disabled"),this._buttonSubmit.setAttribute("disabled",!0),this._popupForm.reset()}}])&&E(t.prototype,n),c}(_);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.nameselector,r=t.nameDescription,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description;this._name.textContent=t,this._description.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatar.style.backgroundImage="url(".concat(t,")")}}])&&q(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._buttonElement=this._config.submitButtonSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._spanErrors=Array.from(this._formElement.querySelectorAll(".".concat(this._config.errorClass))),this._fieldErrors=Array.from(this._formElement.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._formElement.querySelector(this._buttonElement).classList.add(this._config.inactiveButtonClass),this._formElement.querySelector(this._buttonElement).setAttribute("disabled",!0)):(this._formElement.querySelector(this._buttonElement).classList.remove(this._config.inactiveButtonClass),this._formElement.querySelector(this._buttonElement).removeAttribute("disabled",!0))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"cleanValidationErrors",value:function(){var e=this;this._spanErrors.forEach((function(e){e.textContent=""})),this._fieldErrors.forEach((function(t){t.classList.remove(e._config.inputErrorClass)}))}}])&&P(t.prototype,n),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me "),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then(this._checkResponse)}},{key:"getNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&A(t.prototype,n),e}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N,J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupCurrent=document.querySelector(e),t._confirmButton=t._popupCurrent.querySelector(".popup__submit-button_confirm"),t}return t=c,(n=[{key:"_handleEscClose",value:function(e){B(F(c.prototype),"_handleEscClose",this).call(this,e),e.key===this._enter&&this.close()}},{key:"open",value:function(e){var t=e.deleteCard;B(F(c.prototype),"open",this).call(this),this._deleteCard=t,this._confirmButton.addEventListener("click",this._deleteCard)}},{key:"close",value:function(){B(F(c.prototype),"close",this).call(this),this._confirmButton.removeEventListener("click",this._deleteCard)}}])&&x(t.prototype,n),c}(_);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"75984e77-4db9-4e3d-83f8-4822dd0f9cae","Content-Type":"application/json"}}),z=new u({renderer:function(e){return z.addItem(G(e))}},s),$=new J(".popup_type_confirm");function G(e){return new p(e,"#card",(function(){return K.open(e.name,e.link)}),{handleDeleteCard:function(e,t){var n=e,r=t;$.open({deleteCard:function(){M.deleteCard(n).then((function(){r.remove()})).catch((function(e){console.log(e)})),$.close()}})},handleLikeCard:function(e,t){return"isLiked"===t?M.deleteLike(e._id):M.addLike(e._id)}},N).generateCard()}var K=new S(".popup_type_show-image");n.addEventListener("click",(function(){Q.open(),ne.cleanValidationErrors()}));var Q=new I(".popup_type_add-card",{handleFormSubmit:function(e){Z(!0,c),M.getNewCard({name:e.name,link:e.link}).then((function(e){s.prepend(G(e)),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Z(!1,c)}))}});t.addEventListener("click",(function(){X.open(),te.cleanValidationErrors();var e=W.getUserInfo();o.value=e.name,i.value=e.description}));var W=new j({nameselector:".profile__name",nameDescription:".profile__description",avatarSelector:".profile__avatar"}),X=new I(".popup_type_edit",{handleFormSubmit:function(e){Z(!0,r),M.setUserProfile({name:e.username,description:e.profession}).then((function(e){W.setUserInfo({name:e.name,description:e.about}),X.close()})).catch((function(e){console.log(e)})).finally((function(){Z(!1,r)}))}}),Y=new I(".popup_type_avatar",{handleFormSubmit:function(e){Z(!0,a),M.updateAvatar(e.link).then((function(){W.setUserAvatar({avatar:e.link}),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Z(!1,a)}))}});function Z(e,t){var n=document.querySelector(t).querySelector(".popup__submit-button");e?(n.textContent="Сохранение...",n.setAttribute("disabled",!0),n.style.backgroundColor="#787373"):(n.textContent="Сохранить",n.removeAttribute("disabled",!0),n.style.backgroundColor="#000")}document.querySelector(".profile__avatar-layout").addEventListener("click",(function(){Y.open(),ee.cleanValidationErrors()})),Y.setEventListeners(),$.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),X.setEventListeners();var ee=new R(e,document.querySelector(a));ee.enableValidation();var te=new R(e,document.querySelector(r));te.enableValidation();var ne=new R(e,document.querySelector(c));ne.enableValidation(),Promise.all([M.getUserProfile(),M.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];N=o,W.setUserInfo({name:o.name,description:o.about}),W.setUserAvatar({avatar:o.avatar}),z.renderItems(i)})).catch((function(e){console.log(e)}))})();