import { setLike, deleteLike, deleteCard } from "./api";

export function createCard(
  cardData,
  deleteCallback,
  modalCallback,
  likeCallback,
  userId
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const countLikes = card.querySelector(".card__count-like");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener("click", modalCallback);

  if (cardData.likes.some((like) => like._id === userId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () => {
    handleLikeButton(cardData, likeButton, countLikes);
  });
  countLikes.textContent = cardData.likes.length;

  if (cardData.owner._id === userId) {
    deleteButton.addEventListener("click", (evt) => {
      delCard(evt, cardData);
    });
  } else {
    deleteButton.classList.add("card__delete-button-disabled");
    deleteButton.disabled = true;
  }

  return card;
}
export function delCard(evt, cardData) {
  deleteCard(cardData._id).then(() => {
    evt.target.closest(".card").remove();
  }).catch((err) => {
    console.error('Ошибка при удалении карточки:', err);
  });
}
export function handleLikeButton(cardData, likeButton, countLikes) {
  likeButton.classList.toggle("card__like-button_is-active");
  if (likeButton.classList.contains("card__like-button_is-active")) {
    setLike(cardData._id).then((res) => {
      countLikes.textContent = res.likes.length;
    }).catch((err) => {
      console.error('Ошибка при добавлении лайка:', err);
    });
  } else {
    deleteLike(cardData._id).then((res) => {
      countLikes.textContent = res.likes.length;
    }).catch((err) => {
      console.error('Ошибка при удалении лайка:', err);
    });
  }
}
