import '../pages/index.css';
import { initialCards} from './cards.js';
import { createCard, delCard, handleLikeButton } from './card.js';
import { closePopup, openPopup, initPopup} from './modal.js';

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
const popupImgCaption = document.querySelector('.popup__caption');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function addCard(arrCards, cardList, deleteCallback, modalCallback, likeCallback) {
  arrCards.forEach(item => {
    const card = createCard(item, deleteCallback, modalCallback, likeCallback);
    cardList.append(card);
  });
}
function handleCardClick(evt) {
  createImgPopup(evt, popupImage, popupImgCaption, popupImg);
}
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit);
}
function handleFormNewSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };
  const newCard = createCard(cardData, delCard, handleCardClick, handleLikeButton);
  formNew.reset();
  cardList.prepend(newCard);
  closePopup(popupNew);
}
function createImgPopup(evt, popupImage, popupCaption, popupImg) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupImg);
}

popups.forEach(popup => initPopup(popup, closePopup));
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEdit)
});
profileAddButton.addEventListener('click', () => openPopup(popupNew));
formEdit.addEventListener('submit', handleFormEditSubmit);
formNew.addEventListener('submit', handleFormNewSubmit);

addCard(initialCards, cardList, delCard, handleCardClick, handleLikeButton);