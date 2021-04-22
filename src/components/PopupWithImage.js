import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupCurrent.querySelector('.popup__image');
  };

  open(name, link) {
    super.open();
    this._popupCurrent.querySelector('.popup__title').textContent = name;
    this._popupImage.alt = name;
    this._popupImage.src = link;
  }
}