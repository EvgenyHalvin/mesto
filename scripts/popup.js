let addEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupProfileName = document.querySelector('.popup__field_type_name');
let popupProfileDescription = document.querySelector('.popup__field_type_description');
let form = document.querySelector('.popup__form');

popupProfileName.value = profileName.textContent;
popupProfileDescription.value = profileDescription.textContent;

function showPopup() {
	popup.classList.add('popup_opened');
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

addEditButton.addEventListener('click', showPopup);

popupCloseButton.addEventListener('click', closePopup);

function subInfo() {
	event.preventDefault();
	profileName.textContent = popupProfileName.value;
	profileDescription.textContent = popupProfileDescription.value;
	closePopup();
}
 
form.addEventListener('submit', subInfo);






