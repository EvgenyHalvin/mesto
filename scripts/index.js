const cards = document.querySelector('.elements');
const showImage = document.querySelector('.popup_type_show-image');
const fullCardImage = document.querySelector('.popup__image');
const fullCardName = document.querySelector('.popup__title_show-image');
const popupCloseButton = document.querySelector('.popup__close-icon_show-image');


class Card {
    constructor(item, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = item.name;
        this._link = item.link;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    };

    _handleOpenPopup() {
        fullCardImage.src = this._link;
        fullCardName.textContent = this._name;
        showImage.classList.add('popup_opened');
    };

    _handleClosePopup() {
        showImage.classList.remove('popup_opened');
    };

    _likeCard() {
        event.target.classList.toggle('element__like_active');
    };

    _removeCard() {
        event.target.closest('.element').remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });

        popupCloseButton.addEventListener('click', () => {
            this._handleClosePopup();
        });

        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._likeCard();
        });

        this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._removeCard();
        })
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__name').textContent = this._name;
        this._element.querySelector('.element__name').alt = this._name;

        return this._element;
    };
};


initialCards.forEach((item) => {
    const card = new Card(item, '#card');
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
});

