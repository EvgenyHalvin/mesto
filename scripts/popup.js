const addEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupCloseButton = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupProfileName = document.querySelector('.popup__field_type_name');
const popupProfileDescription = document.querySelector('.popup__field_type_description');
const form = document.querySelector('.popup__form');


function showPopup(popup) {
	popupProfileName.value = profileName.textContent;
	popupProfileDescription.value = profileDescription.textContent;
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

	addEditButton.addEventListener('click', () => showPopup(popupEdit));
	popupCloseButton.addEventListener('click', () => closePopup(popupEdit));

function subInfo(event) {
	event.preventDefault();
	profileName.textContent = popupProfileName.value;
	profileDescription.textContent = popupProfileDescription.value;
	closePopup(popupEdit);
}
 
form.addEventListener('submit', subInfo);


//Открытие попапа для добавления карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const closeButtonAddCard = document.querySelector('.popup__close-icon_add-card');
const nameNewPlace = document.querySelector('.popup__field_type_place');
const linkToImg = document.querySelector('.popup__field_type_link-to-img');
const formAddCard = document.querySelector('.popup__form_add-card');

addCardButton.addEventListener('click', () => showPopup(popupAddCard));
closeButtonAddCard.addEventListener('click', () => closePopup(popupAddCard));


//Динамический рендер массива
const cardTemplate = document.querySelector('#card').content; 
const cards = document.querySelector('.elements');

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

function addCards (cardEL) {
	cards.prepend(cardEL)
}

initialCards.forEach(function (arrCards) {
	addCards(cardContent(arrCards));
})


//Добавление карточки при отправке формы
function addCard (event) {
	event.preventDefault();
	const inputCardName = nameNewPlace.value;
	const inputlinkImage = linkToImg.value;
	const newCard = cardContent({name: inputCardName, link: inputlinkImage});

	addCards(newCard);

	formAddCard.reset();
	closePopup(popupAddCard);
}

formAddCard.addEventListener('submit', addCard);


//Удаление карточки
function removeCard(event) {
	event.target.closest('.element').remove();
}


//Лайк карточки(изменение цвета лайка при клике на него)
function likeCard(event) {
	event.target.classList.toggle('element__like_active');
}


//Попап картинки
const closeImage = document.querySelector('.popup__close-icon_show-image');
const showImage = document.querySelector('.popup_show-image');
const fullCardImage = document.querySelector('.popup__image');
const fullCardName = document.querySelector('.popup__title_show-image');

function fullCard(event) {
	const targetCard = event.target;
	const targetItem = targetCard.closest('.element');
	const cardName = targetItem.querySelector('.element__name');
	const cardImage = targetItem.querySelector('.element__image');
	fullCardImage.src = cardImage.src;
	fullCardImage.alt = cardName.textcontent;
	fullCardName.textContent = cardName.textContent;
	showImage.classList.add('popup_opened');
}

closeImage.addEventListener('click', () => closePopup(showImage));