import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCurrent = document.querySelector(popupSelector);
    this._confirmButton = this._popupCurrent.querySelector('.popup__submit-button_confirm');
  }

  _handleEscClose(evt) {
    super._handleEscClose(evt)
    if (evt.key === this._enter) {
      this.close();
    }
  }

  open({ deleteCard }) {
    super.open();
    this._deleteCard = deleteCard
    this._confirmButton.addEventListener('click', this._deleteCard)
  }

  close(){
    super.close();
    this._confirmButton.removeEventListener('click', this._deleteCard)
  }
}