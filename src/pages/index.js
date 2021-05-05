import "./index.css";
import {
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
	cardID,
	avatarSelector,
	configApi,
	popupConfirmSelector,
	popupAvatarSelector,
	formAvatarPopupSelector,
	layoutAvatarSelector
} from '../../src/utils/constants.js';

import Section from '../../src/components/Section.js';
import Card from '../../src/components/Card.js';
import PopupWithImage from '../../src/components/PopupWithImage.js';
import PopupWithForm from '../../src/components/PopupWithForm.js';
import UserInfo from '../../src/components/UserInfo.js';
import FormValidator from '../../src/components/FormValidator.js';
import Api from '../../src/components/Api.js';
import Popup from "../components/Popup";

let userMe;

// Рендер карточек с сервера
const api = new Api(configApi);

api.getInitialCards()
	.then((data) => {
		const cardList = new Section({
			items: data,
			renderer: (item) => {
				cardList.addItem(getCard(item));
			}
		}, cards
		);

		cardList.renderItems();
	})
	.catch((err) => {
		console.log(err);
	})

// Попап подтверждения и последующее удаление при подтверждении
const popupConfirm = new Popup(popupConfirmSelector);
const confirmButton = document.querySelector('.popup__submit-button_confirm');

function getCard(item) {
	const newCard = new Card(
		item,
		cardID,
		() => popupWithImage.open(item.name, item.link),
		{
			handleDeleteCard: function (itemId, card) {
				popupConfirm.open();
				confirmButton.addEventListener('click', () => {
					api.deleteCard(itemId)
						.then(() => {
							card.remove()
						})
						.catch((err) => {
							console.log(err);
						})
					popupConfirm.close()
				})
			},
			handleLikeCard: function (cardId, condition) {
				if (condition === 'isLiked') {
					api.deleteLike(cardId)
						.catch((err) => {
							console.log(err);
						})
				} else {
					api.addLike(cardId)
						.catch((err) => {
							console.log(err);
						})
				}
			}
		},
		userMe
	);

	return newCard.generateCard();
}

const popupWithImage = new PopupWithImage(showImage);

// Используем эту часть кода для записи данных пользователя в userMe.
api.getUserProfile()
	.then((res) => {
		userMe = res
	})
	.catch((err) => {
		console.log(err);
	})

// Добавление карточки
addCardButton.addEventListener('click', handleAddCard);

function handleAddCard() {
	addCardPopup.open();
	formValidatorAddCard.cleanValidationErrors();
}

const addCardPopup = new PopupWithForm(popupAddCard, {
	handleFormSubmit: (formData) => {
		renderLoading(true, formAddCard)
		api.getNewCard({
			name: formData.name,
			link: formData.link
		})
			.then((formData) => {
				cards.prepend(getCard(formData));
				addCardPopup.close();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(false, formAddCard);
			})
	}
}
);

// Редактирование профиля
api.getUserProfile()
	.then((data) => {
		userInfo.setUserInfo({
			name: data.name,
			description: data.about,
		})
		userInfo.setUserAvatar({
			avatar: data.avatar
		})
	})
	.catch((err) => {
		console.log(err);
	})

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
	nameDescription: profileDescription,
	avatarSelector: avatarSelector
});

const popupEdit = new PopupWithForm(popupEditSelector, {
	handleFormSubmit: (formData) => {
		renderLoading(true, formEditPopup)
		api.setUserProfile({
			name: formData.username,
			description: formData.profession
		})
			.then((userData) => {
				userInfo.setUserInfo({
					name: userData.name,
					description: userData.about
				});
				popupEdit.close();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(false, formEditPopup);
			})
	}
})

// Смена аватара
const popupAvatar = new PopupWithForm(popupAvatarSelector, {
	handleFormSubmit: (avatarLink) => {
		renderLoading(true, formAvatarPopupSelector)
		userInfo.setUserAvatar({
			avatar: avatarLink.link
		})
		api.updateAvatar(avatarLink.link)
			.then(() => {
				popupAvatar.close();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(false, formAvatarPopupSelector);
			})
	}
})

const handlerPopupAvatar = document.querySelector(layoutAvatarSelector);
handlerPopupAvatar.addEventListener('click', openPopupAvatar)
function openPopupAvatar() {
	popupAvatar.open();
	formValidatorAvatarPopup.cleanValidationErrors();
}

function renderLoading(isLoading, formSelector) {
	const currentForm = document.querySelector(formSelector)
	const currentTextButton = currentForm.querySelector('.popup__submit-button');

	if(isLoading) {
		currentTextButton.textContent = 'Сохранение...'
	} else {
		currentTextButton.textContent = 'Сохранить'
	}
}

popupAvatar.setEventListeners();
popupConfirm.setEventListeners();
popupWithImage.setEventListeners();
addCardPopup.setEventListeners();
popupEdit.setEventListeners();

// Применение валидации
const formHandleAvatar = document.querySelector(formAvatarPopupSelector)
const formValidatorAvatarPopup = new FormValidator(configValidation, formHandleAvatar);
formValidatorAvatarPopup.enableValidation();

const formTypeEdit = document.querySelector(formEditPopup);
const formValidatorEdit = new FormValidator(configValidation, formTypeEdit);
formValidatorEdit.enableValidation();

const formTypeAddCard = document.querySelector(formAddCard);
const formValidatorAddCard = new FormValidator(configValidation, formTypeAddCard);
formValidatorAddCard.enableValidation();
