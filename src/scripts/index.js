import '../pages/index.css';
import { createCard, delCard, handleLikeButton } from './card.js';
import { closePopup, openPopup, initPopup} from './modal.js';
import {clearValidation, enableValidation, checkInputValidity} from './validation.js'
import {getInitialCards, getUsrInfo, setNewUsrAbout, deleteCard, addNewCard, setNewAvatar} from './api.js'

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
const profileImage = document.querySelector('.profile__image');
const popupAvatar = document.querySelector('.popup_type_avatar');
const formAvatar = popupAvatar.querySelector('.popup__form')
const avatarInput = formAvatar.querySelector('.popup__input_type_link')
const formEditButton = formEdit.querySelector('.button')
const formNewButton = formNew.querySelector('.button')
const formAvatarButton = formAvatar.querySelector('.button')

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function addCard(arrCards, cardList, deleteCallback, modalCallback, likeCallback, userId) {
  arrCards.forEach(item => {
    const card = createCard(item, deleteCallback, modalCallback, likeCallback, userId);
    cardList.append(card);
  });
}
function handleCardClick(evt) {
  createImgPopup(evt, popupImage, popupImgCaption, popupImg);
}
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  processLoading(formEditButton, true)
  setNewUsrAbout(nameInput.value, jobInput.value);
  getUsrInfo()
    .then(res=>{
      profileTitle.textContent = res.name
      profileDescription.textContent = res.about
      processLoading(formEditButton, false)
    })
    .finally(()=>{
      closePopup(popupEdit);
    })
}
function handleFormNewSubmit(evt) {
  evt.preventDefault();
  processLoading(formNewButton, true)
  addNewCard(placeInput.value, linkInput.value)
    .then(res=>{
      console.log(res)
      const newCard = createCard(res, delCard, handleCardClick, handleLikeButton, res.owner._id);
      formNew.reset();
      cardList.prepend(newCard);
      processLoading(formNewButton, false)
    })
    .finally(()=>{
      closePopup(popupNew);
    })
}
function handleFormAvatar (evt) {
  evt.preventDefault();
  processLoading(formAvatarButton, true)
  setNewAvatar(avatarInput.value);
  getUsrInfo()
    .then(res=>{
      profileImage.style = `background-image: url(${res.avatar});` 
      processLoading(formAvatarButton, false)
    })
    .finally(()=>{
      closePopup(popupAvatar)
    })
}
function createImgPopup(evt, popupImage, popupCaption, popupImg) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupImg);
}
function processLoading (button, load){
  if (load){
    button.textContent = 'Сохранение...'
  }else{
    button.textContent = 'Сохранить'
  }
}

popups.forEach(popup => initPopup(popup, closePopup));
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  const inputList = Array.from(formEdit.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement) => {
    checkInputValidity(formEdit, inputElement, validationConfig);
  });
  clearValidation(formEdit, validationConfig);
  openPopup(popupEdit);
});
profileAddButton.addEventListener('click', () => {
  formNew.reset();
  clearValidation(formNew, validationConfig);
  openPopup(popupNew)
});
profileImage.addEventListener('click', ()=>{
  formAvatar.reset();
  openPopup(popupAvatar)
})
formEdit.addEventListener('submit', handleFormEditSubmit);
formNew.addEventListener('submit', handleFormNewSubmit);
formAvatar.addEventListener('submit', handleFormAvatar);

Promise.all([getInitialCards(), getUsrInfo()]).then(([cards, user]) =>{
  console.log(cards);
  addCard(cards, cardList, delCard, handleCardClick, handleLikeButton, user._id);
  profileTitle.textContent = user.name
  profileDescription.textContent = user.about
  profileImage.style = `background-image: url(${user.avatar});`
}).catch((error) => {console.error("Ошибка при загрузке данных:", error);});

enableValidation(validationConfig)