const addEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupProfileName = document.querySelector('.popup__field_type_name');
const popupProfileDescription = document.querySelector('.popup__field_type_description');
const form = document.querySelector('.popup__form');


function showPopup() {
	popupProfileName.value = profileName.textContent;
	popupProfileDescription.value = profileDescription.textContent;
	popup.classList.add('popup_opened');
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

	addEditButton.addEventListener('click', showPopup);

	popupCloseButton.addEventListener('click', closePopup);

function subInfo() {
	event.preventDefault();
	profileName.textContent = popupProfileName.value;
	profileDescription.textContent = popupProfileDescription.value;
	closePopup();
}
 
form.addEventListener('submit', subInfo);


//Открытие попапа для добавления карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const closeButtonAddCard = document.querySelector('.popup__close-icon_add-card');
const nameNewPlace = document.querySelector('.popup__field_type_place');
const linkToImg = document.querySelector('.popup__field_type_link-to-img');
const formAddCard = document.querySelector('.popup__form_add-card');

function showPopupAddCard () {
	nameNewPlace.value = '';
	linkToImg.value = '';
	popupAddCard.classList.add('popup_opened');
}

function closePopupAddCard () {
	popupAddCard.classList.remove('popup_opened');
}

addCardButton.addEventListener('click', showPopupAddCard);
closeButtonAddCard.addEventListener('click', closePopupAddCard);


//Динамический рендер массива
const cardTemplate = document.querySelector('#card').content; 
const cards = document.querySelector('.elements');

function addCards (cardEL) {
	cards.prepend(cardEL)
}

function cardContent(arrCards) {
	const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
	const cardName = cardElement.querySelector('.element__name');
	cardName.textContent = arrCards.name;
	const cardImage = cardElement.querySelector('.element__image');
	cardImage.alt = arrCards.name;
	cardImage.src = arrCards.link;
	cardImage.addEventListener('click', fullCard);
	const removeButton = cardElement.querySelector('.element__remove');
	removeButton.addEventListener('click', removeCard);
	const likeButton = cardElement.querySelector('.element__like');
	likeButton.addEventListener('click', likeCard);

	return cardElement;
}

initialCards.forEach(function (arrCards) {
	addCards(cardContent(arrCards));
})


//Добавление карточки при отправке формы
function addCard (eventSubmit) {
	event.preventDefault();
	const inputCardName = nameNewPlace.value;
	const inputlinkImage = linkToImg.value;
	const newCard = cardContent({name: inputCardName, link: inputlinkImage});

	addCards(newCard);

	nameNewPlace.value = '';
	linkToImg.value = '';

	closePopupAddCard();
}

formAddCard.addEventListener('submit', addCard);


//Удаление карточки
function removeCard(event) {
	const targetCard = event.target.closest('.element');
	targetCard.remove();
}


//Лайк карточки(изменение цвета лайка при клике на него)
function likeCard(event) {
	event.target.classList.toggle('element__like_active');
}


//Попап картинки
const closeImage = document.querySelector('.popup__close-icon_close-image');
const showImage = document.querySelector('.show-image');
const fullCardImage = document.querySelector('.show-image__full-size');
const fullCardName = document.querySelector('.show-image__description');

function fullCard(event) {
	const targetCard = event.target;
	const targetItem = targetCard.closest('.element');
	const cardName = targetItem.querySelector('.element__name');
	const cardImage = targetItem.querySelector('.element__image');
	fullCardImage.src = cardImage.src;
	fullCardImage.alt = cardName.textcontent;
	fullCardName.textContent = cardName.textContent;
	showImage.classList.add('show-image_opened');
	closeImage.addEventListener('click', closeFullCard);
}


function closeFullCard() {
	showImage.classList.remove('show-image_opened');
}