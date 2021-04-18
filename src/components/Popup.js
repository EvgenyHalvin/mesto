export default class Popup {
  
  constructor(popupSelector) {
    this._popupCurrent = document.querySelector(popupSelector);
    this._closeButton = this._popupCurrent.querySelector('.popup__close-icon');
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._escape = 'Escape';
  }

  open() {
    this._popupCurrent.classList.add('popup_opened');
    this._popupCurrent.addEventListener('mousedown', this._handleOverlayClose);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupCurrent.classList.remove('popup_opened');
    this._popupCurrent.removeEventListener('mousedown', this._handleOverlayClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleOverlayClose (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === this._escape) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', this.close);
  }
}