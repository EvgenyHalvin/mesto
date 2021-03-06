import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupCurrent.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__field');
    this._buttonSubmit = this._popupForm.querySelector('.popup__submit-button');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._buttonSubmit.classList.add('popup__submit-button_disabled');
    this._buttonSubmit.setAttribute('disabled', true);
    this._popupForm.reset();
  }
}