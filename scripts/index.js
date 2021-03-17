import { Card } from './Card.js'


//Рендер карточки и ее фичи (лайк, удаление, открытие попапа для просмотра изображения)
const cards = document.querySelector('.elements');

initialCards.forEach((item) => {
    const card = new Card(item, '#card');
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
});

export function closePopupByClickOnEsc(event) {
	if(event.key === "Escape"){
		const activePopup = document.querySelector('.popup_opened');
		closePopup(activePopup);
	}
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}