import "./index.css";
import {
	initialCards,
	cards,
	addCardButton,
	addEditButton,
	popupProfileName,
	popupProfileDescription,
	profileName,
	profileDescription,
	popupEditSelector,
	showImage,
	popupAddCard,
	configValidation,
	formEditPopup,
	formAddCard,
	cardID
} from '../../src/utils/constants.js';

import Section from '../../src/components/Section.js';
import Card from '../../src/components/Card.js';
import PopupWithImage from '../../src/components/PopupWithImage.js';
import PopupWithForm from '../../src/components/PopupWithForm.js';
import UserInfo from '../../src/components/UserInfo.js';
import FormValidator from '../../src/components/FormValidator.js';


// Рендер карточек
const cardList = new Section({
	items: initialCards,
	renderer: (item) => {
		cardList.addItem(getCard(item));
	}
}, cards
);

function getCard(item) {
	const newCard = new Card(
		item,
		cardID,
		() => popupWithImage.open(item.name, item.link)
	);

	return newCard.generateCard();
}

const popupWithImage = new PopupWithImage(showImage);

cardList.renderItems();

// Добавление карточки
addCardButton.addEventListener('click', handleAddCard);

function handleAddCard() {
	addCardPopup.open();
	formValidatorAddCard.cleanValidationErrors();
}

const addCardPopup = new PopupWithForm(popupAddCard, {
	handleFormSubmit: (formData) => {
		cards.prepend(getCard(formData));

		addCardPopup.close();
	}
}
);

// Редактирование профиля
addEditButton.addEventListener('click', handleEditPopup);

function handleEditPopup() {
	popupEdit.open();
	formValidatorEdit.cleanValidationErrors();
	const profileInfo = userInfo.getUserInfo();
	popupProfileName.value = profileInfo.name;
	popupProfileDescription.value = profileInfo.description;

}

const userInfo = new UserInfo({
	nameselector: profileName,
	nameDescription: profileDescription
});

const popupEdit = new PopupWithForm(popupEditSelector, {
	handleFormSubmit: (formData) => {
		userInfo.setUserInfo({
			name: formData.username,
			description: formData.profession
		});

		popupEdit.close();
	}
})

popupWithImage.setEventListeners();
addCardPopup.setEventListeners();
popupEdit.setEventListeners();

// Применение валидации
const formTypeEdit = document.querySelector(formEditPopup);
const formValidatorEdit = new FormValidator(configValidation, formTypeEdit);
formValidatorEdit.enableValidation();

const formTypeAddCard = document.querySelector(formAddCard);
const formValidatorAddCard = new FormValidator(configValidation, formTypeAddCard);
formValidatorAddCard.enableValidation();