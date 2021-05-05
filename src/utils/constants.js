export const cardID = '#card';

// Конфиг для валидатора
export const configValidation = {
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field-error'
};

// Профиль
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const addEditButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const avatarSelector = '.profile__avatar';

// Попап подтверждения удаления
export const popupConfirmSelector = '.popup_type_confirm';

// Попап редактирования профиля
export const popupEditSelector = '.popup_type_edit';
export const popupCloseButton = document.querySelector('.popup__close-icon');

// Форма редактирования профиля
export const formEditPopup = '.popup__form_type_edit';
export const popupProfileName = document.querySelector('.popup__field_type_name');
export const popupProfileDescription = document.querySelector('.popup__field_type_description');

// Попап добавления новой карточки
export const popupAddCard = '.popup_type_add-card';

// Форма добаления новой карточки
export const formAddCard = '.popup__form_add-card';
export const nameNewPlace = document.querySelector('.popup__field_type_place');
export const linkToImg = document.querySelector('.popup__field_type_link-to-img');

// Попап с картинкой
export const showImage = '.popup_type_show-image';
export const fullCardName = document.querySelector('.popup__title_show-image');
export const fullCardImage = document.querySelector('.popup__image');

// Коллекция попапов
export const popupList = document.querySelectorAll('.popup');

//контэйнер для вставки карточек
export const cards = document.querySelector('.elements');

// Попап смены аватара
export const popupAvatarSelector = ".popup_type_avatar";
export const formAvatarPopupSelector = ".popup__form_avatar";
export const layoutAvatarSelector = ".profile__avatar-layout";

//Конфиг API
export const configApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '75984e77-4db9-4e3d-83f8-4822dd0f9cae',
    'Content-Type': 'application/json'
  }
};
