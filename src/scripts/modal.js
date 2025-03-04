export function openPopup(popupElement) {  
  popupElement.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeEsc);
 }
export function closePopup(popupElement) {  
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEsc);
}
export function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
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