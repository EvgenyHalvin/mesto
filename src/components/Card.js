import {

} from '../utils/constants.js';

export default class Card {
  constructor(item, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  _likeCard(evt) {
    evt.target.classList.toggle('element__like_active');
  };

  _removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
    })

    this._element.querySelector('.element__like').addEventListener('click', (event) => {
      this._likeCard(event);
    });

    this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._removeCard();
    });
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