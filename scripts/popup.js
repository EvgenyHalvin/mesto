let addEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupProfileName = document.querySelector('.popup__field_name');
let popupProfileDescription = document.querySelector('.popup__field_description');
let savedButton = document.querySelector('.submit-button');

function showPopup() {
	popup.classList.add('popup_opened');
	popupProfileName.value = profileName.textContent;
	popupProfileDescription.value = profileDescription.textContent;
}

function closePopup() {
	popup.classList.remove('popup_opened');
}


addEditButton.addEventListener('click', function() {
	showPopup()
});

popupCloseButton.addEventListener('click', function() {
	closePopup()
});

savedButton.addEventListener('click', function() {
	profileName.textContent = popupProfileName.value;
	profileDescription.textContent = popupProfileDescription.value;
	closePopup()
})






