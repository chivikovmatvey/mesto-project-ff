// @todo: Темплейт карточки
const cardElemeent = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list')
// @todo: Функция создания карточки
function createCard (cardData, deleteCallback) {
  const card = cardElemeent.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__title').textContent= cardData.name
  card.querySelector('.card__delete-button').addEventListener('click', deleteCallback)
  return card
}
// @todo: Функция удаления карточки
function delCard(event){
  event.target.closest('.card').remove();
}
// @todo: Вывести карточки на страницу
function addCard(arrCards) {
  arrCards.forEach(item => {
    const card = createCard(item, delCard);
    cardList.append(card);
  });
}
addCard(initialCards);