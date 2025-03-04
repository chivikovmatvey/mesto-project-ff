import '../pages/index.css';
import { initialCards, createCard, delCard, addCard, statusLike } from './cards.js';
import { viewPopup, initPopup, createImgPopup } from './modal.js';

const cardList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNew = document.querySelector('.popup_type_new-card');
const popupImg = document.querySelector('.popup_type_image');
const formEdit = popupEdit.querySelector('.popup__form');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_description');
const formNew = popupNew.querySelector('.popup__form');
const placeInput = formNew.querySelector('.popup__input_type_card-name');
const linkInput = formNew.querySelector('.popup__input_type_url');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function handleCardClick(evt) {
  createImgPopup(evt, popupImage, popupCaption, popupImg);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');
  
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  viewPopup(popupEdit);
}

function handleFormNewSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };
  const newCard = createCard(cardData, delCard, handleCardClick, statusLike);
  formNew.reset();
  cardList.prepend(newCard);
  viewPopup(popupNew);
}

popups.forEach(popup => initPopup(popup, viewPopup));
profileEditButton.addEventListener('click', () => viewPopup(popupEdit));
profileAddButton.addEventListener('click', () => viewPopup(popupNew));
formEdit.addEventListener('submit', handleFormEditSubmit);
formNew.addEventListener('submit', handleFormNewSubmit);

addCard(initialCards, cardList, delCard, handleCardClick, statusLike);
