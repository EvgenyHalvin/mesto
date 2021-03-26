export const configValidation = {
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field-error'
};

export class FormValidator {
  constructor(configValidation, formElement) {
    this._config = configValidation;
    this._formElement = formElement;
    this._buttonElement = this._config.submitButtonSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
  }

  _showInputError(inputElement) {
    const error = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    error.textContent = inputElement.validationMessage;
    error.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const error = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._config.errorClass);
  }

  // Проверка инпута на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    }
    else {
      this._hideInputError(inputElement);
    }
  }

  // Отключение кнопки submit, если хотя бы одно поле невалидно
  // Включение кнопки submit, если все поля валидны
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._formElement.querySelector(this._buttonElement).classList.add(this._config.inactiveButtonClass);
      this._formElement.querySelector(this._buttonElement).setAttribute('disabled', true);
    } else {
      this._formElement.querySelector(this._buttonElement).classList.remove(this._config.inactiveButtonClass);
      this._formElement.querySelector(this._buttonElement).removeAttribute('disabled', true);
    }
  }

  // Выявление хотя бы одного невалидного инпута
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Вешаем слушатели на инпуты
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElement);
      });
    });
  }

  // Метод валидации
  enableValidation() {
    this._setEventListeners();
  }
}
