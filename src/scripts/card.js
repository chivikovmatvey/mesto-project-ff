export function createCard(
  cardData,
  deleteCallback,
  modalCallback,
  likeCallback
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  deleteButton.addEventListener("click", deleteCallback);
  cardImage.addEventListener("click", modalCallback);
  likeButton.addEventListener("click", likeCallback);
  return card;
}
export function delCard(event) {
  event.target.closest(".card").remove();
}
export function handleLikeButton(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}