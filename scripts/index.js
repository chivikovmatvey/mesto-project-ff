// @todo: Темплейт карточки
const cardElemeent = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list')
// @todo: Функция создания карточки
function addCard (arrCards) {
  arrCards.forEach(item => {
    const card = cardElemeent.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__title').textContent= item.name
    card.querySelector('.card__delete-button').addEventListener('click', delCard)
    cardList.append(card);
  });
}
// @todo: Функция удаления карточки
function delCard(){
  document.querySelector('.card__delete-button').closest('.card').remove();
}
// @todo: Вывести карточки на страницу
addCard(initialCards);