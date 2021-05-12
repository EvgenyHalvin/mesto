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
import PopupWithConfirm from "../components/PopupWithConfirm.js";

let userMe;

// Рендер карточек с сервера
const api = new Api(configApi);

const cardList = new Section({
	renderer: (item) => cardList.addItem(getCard(item))
}, cards
);

// Попап подтверждения и последующее удаление при подтверждении
const popupWithConfirm = new PopupWithConfirm(popupConfirmSelector);

function getCard(item) {
	const newCard = new Card(
		item,
		cardID,
		() => popupWithImage.open(item.name, item.link),
		{
			handleDeleteCard: function (itemId, card) {
				const id = itemId;
				const cardEl = card;
				popupWithConfirm.open({
					deleteCard: function () {
						api.deleteCard(id)
							.then(() => {
								cardEl.remove();
							})
							.catch((err) => {
								console.log(err);
							})
						popupWithConfirm.close();
					}
				});
			},
			handleLikeCard: function (card, condition) {
				if (condition === 'isLiked') {
					return api.deleteLike(card._id)
				} else {
					return api.addLike(card._id)
				}
			}
		},
		userMe
	);

	return newCard.generateCard();
}

const popupWithImage = new PopupWithImage(showImage);

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
		api.updateAvatar(avatarLink.link)
			.then(() => {
				userInfo.setUserAvatar({
					avatar: avatarLink.link
				})
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

	if (isLoading) {
		currentTextButton.textContent = 'Сохранение...';
		currentTextButton.setAttribute('disabled', true);
		currentTextButton.style.backgroundColor = '#787373'
	} else {
		currentTextButton.textContent = 'Сохранить';
		currentTextButton.removeAttribute('disabled', true);
		currentTextButton.style.backgroundColor = '#000'
	}
}

popupAvatar.setEventListeners();
popupWithConfirm.setEventListeners();
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

Promise.all([
	api.getUserProfile(),
	api.getInitialCards()
])
	.then(([userData, cards]) => {
		userMe = userData;
		userInfo.setUserInfo({
			name: userData.name,
			description: userData.about,
		})
		userInfo.setUserAvatar({
			avatar: userData.avatar
		})
		cardList.renderItems(cards);
	})
	.catch((err) => {
		console.log(err);
	})