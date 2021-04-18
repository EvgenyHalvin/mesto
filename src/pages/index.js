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
	formAddCard
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
		'#card',
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
	cleanErorrs(document.querySelector(popupAddCard));
}

const addCardPopup = new PopupWithForm( popupAddCard, {
	handleFormSubmit: (formData) => {
		const card = new Card({
			name: formData.name,
			link: formData.link
		},
			'#card',
			() => popupWithImage.open(formData.name, formData.link));

		const cardElement = card.generateCard();

		cards.prepend(cardElement);

		addCardPopup.close();
	}
}
);

// Редактирование профиля
addEditButton.addEventListener('click', handleEditPopup);

function handleEditPopup() {
	popupEdit.open();
	cleanErorrs(document.querySelector(popupEditSelector));
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
const formTypeEdit = document
	.querySelector(popupEditSelector)
	.querySelector(formEditPopup);
const formValidatorEdit = new FormValidator(configValidation, formTypeEdit);
formValidatorEdit.enableValidation();


const formTypeAddCard = document
	.querySelector(popupAddCard)
	.querySelector(formAddCard);
const formValidatorAddCard = new FormValidator(configValidation, formTypeAddCard);
formValidatorAddCard.enableValidation();

// Очищение полей
function cleanErorrs(popup) {
	const spanError = popup.querySelectorAll('.popup__field-error');
	const fieldError = popup.querySelectorAll('.popup__field');

	spanError.forEach(element => {
		element.textContent = '';
	});

	fieldError.forEach(element => {
		element.classList.remove('popup__field_type_error');
	});
}