export function viewPopup(popupElement) {
  popupElement.classList.toggle('popup_is-opened');
  if (document.querySelector('.popup_is-opened')) {
    document.addEventListener('keydown', closeEsc);
  } else {
    document.removeEventListener('keydown', closeEsc);
  }
}
function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      openedPopup.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', closeEsc);
    }
  }
}
export function initPopup(popup, togglePopupFunction) {
  popup.classList.add('popup_is-animated');
  popup.querySelector('.popup__close').addEventListener('click', () => togglePopupFunction(popup));
  popup.addEventListener('click', evt => {
    if (evt.target === popup) {
      togglePopupFunction(popup);
    }
  });
}
export function createImgPopup(evt, popupImage, popupCaption, popupImg) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  viewPopup(popupImg);
}