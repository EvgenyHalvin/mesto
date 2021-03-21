import { Card } from './Card.js';
import { FormValidator, configValidation } from './FormValidator.js';

const addEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-icon');
const formEditPopup = document.querySelector('.popup__form_type_edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupProfileName = document.querySelector('.popup__field_type_name');
const popupProfileDescription = document.querySelector('.popup__field_type_description');
const popupEdit = document.querySelector('.popup_type_edit');

function showPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupByClickOnEsc);
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupByClickOnEsc);
}

addEditButton.addEventListener('click', () => {
	popupProfileName.value = profileName.textContent;
	popupProfileDescription.value = profileDescription.textContent;
	cleanErorrs(popupEdit);
	showPopup(popupEdit);
});
		 
popupCloseButton.addEventListener('click', () => {
	closePopup(popupEdit);
});

const editProfileInfo = (event) => {
	event.preventDefault();
	profileName.textContent = popupProfileName.value;
	profileDescription.textContent = popupProfileDescription.value;
	closePopup(popupEdit);
}
 
formEditPopup.addEventListener('submit', editProfileInfo);

// Очищение полей
function cleanErorrs (popup) {
	const spanError = popup.querySelectorAll('.popup__field-error');
	const fieldError = popup.querySelectorAll('.popup__field');

	spanError.forEach(element => {
		element.textContent = '';
	});

	fieldError.forEach(element => {
		element.classList.remove('popup__field_type_error');
	});
}


// Рендер карточки и ее фичи (лайк, удаление, открытие попапа для просмотра изображения)
const cards = document.querySelector('.elements');

initialCards.forEach((item) => {
	const card = new Card(item, '#card');
	const cardElement = card.generateCard();
	cards.prepend(cardElement);
});

export function closePopupByClickOnEsc(event) {
	if (event.key === "Escape") {
		const activePopup = document.querySelector('.popup_opened');
		closePopup(activePopup);
	}
};

// Открытие попапа для добавления карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const nameNewPlace = document.querySelector('.popup__field_type_place');
const closeButtonAddCard = document.querySelector('.popup__close-icon_add-card');
const linkToImg = document.querySelector('.popup__field_type_link-to-img');
const formAddCard = document.querySelector('.popup__form_add-card');

addCardButton.addEventListener('click', () => {
	formAddCard.reset();
	cleanErorrs(popupAddCard);
	showPopup(popupAddCard);
});

closeButtonAddCard.addEventListener('click', () => closePopup(popupAddCard));

// Добавление карточки при отправке формы
function addCard (event) {
	event.preventDefault();
	const inputCardName = nameNewPlace.value;
	const inputlinkImage = linkToImg.value;
	const newCard = getCardContent({name: inputCardName, link: inputlinkImage});

	addCards(newCard);

	formAddCard.reset();
	const submitButton = event.target.querySelector('.popup__submit-button');
	submitButton.classList.add('popup__submit-button_disabled');
	submitButton.setAttribute('disabled', true);
	closePopup(popupAddCard);
}

formAddCard.addEventListener('submit', addCard);


// Применение валидации
const formTypeEdit = popupEdit.querySelector('.popup__form_type_edit');
const formValidatorEdit = new FormValidator(configValidation, formTypeEdit);
formValidatorEdit.enableValidation();


const formTypeAddCard = popupAddCard.querySelector('.popup__form_add-card');
const formValidatorAddCard = new FormValidator(configValidation, formTypeAddCard);
formValidatorAddCard.enableValidation();

