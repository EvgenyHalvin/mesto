export default class Card {
  constructor(item, cardSelector, handleCardClick, { handleDeleteCard, handleLikeCard }, userMe) {
    this._cardSelector = cardSelector;
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._amountLikes = item.likes.length;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._ownerItemId = item.owner._id;
    this._userId = userMe._id;
    this._itemId = item._id;
    this._handleLikeCard = handleLikeCard;
    this._likeIsActiveSelctor = 'element__like_active';
    this._likeCounterSelector = '.element__like-counter';
    this._likeSelector = '.element__like';
    this._itemLikes = item.likes;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  _setLikesInfo(cardData) {
    this._likeCounter = this._element.querySelector(this._likeCounterSelector);
    this._likeCounter.textContent = cardData.likes.length;
    this._likeElement = this._element.querySelector(this._likeSelector);
    this._likeElement.classList.toggle(this._likeIsActiveSelctor)
  }

  _showLikes() {
    if (this._itemLikes.find(item => item._id === this._userId)) {
      this._element
        .querySelector(this._likeSelector)
        .classList
        .add(this._likeIsActiveSelctor)
    } else {
      this._element
        .querySelector(this._likeSelector)
        .classList
        .remove(this._likeIsActiveSelctor)
    }

    this._likeCounter = this._element.querySelector(this._likeCounterSelector);
    this._likeCounter.textContent = this._amountLikes;
  }

  _deleteCard() {
    this._handleDeleteCard(this._itemId, this._element);
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', () => {
      this._handleCardClick();
    })

    this._likeElement = this._element.querySelector(this._likeSelector);

    this._likeElement.addEventListener('click', () => {
      if (this._likeElement.classList.contains(this._likeIsActiveSelctor)) {
        this._handleLikeCard(this._item, 'isLiked')
          .then((cardData) => {
            this._setLikesInfo(cardData)
          })
          .catch((err) => {
            console.log(`Ошибка снятия лайка: ${err}`);
          })
      } else {
        this._handleLikeCard(this._item)
          .then((cardData) => {
            this._setLikesInfo(cardData);
          })
          .catch((err) => {
            console.log(`Ошибка добавления лайка: ${err}`);
          })
      }
    });

    // Значки удаления только на своих карточках
    this._removeEl = this._element.querySelector('.element__remove')
    if (this._userId === this._ownerItemId) {
      this._removeEl.addEventListener('click', () => {
        this._deleteCard();
      });
    } else {
      this._removeEl.remove();
    }
  };

  generateCard() {
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.element__image');
    this._elementName = this._element.querySelector('.element__name');
    this._setEventListeners();
    this._showLikes();

    this._elementImg.src = this._link;
    this._elementName.textContent = this._name;
    this._elementName.alt = this._name;

    return this._element;
  };
};