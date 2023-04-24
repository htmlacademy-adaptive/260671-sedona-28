let modal = document.querySelector('.modal-container');
let closeButton = document.querySelector('.modal__btn');
let feedbackButton = document.querySelector('.feedback__button');

const modalClose = () => {
  modal.style.display = "none";
  closeButton.removeEventListener('click', modalClose);
}

const modalOpen = (evt) => {
  evt.preventDefault();
  modal.style.display = "flex";
  closeButton.addEventListener('click', modalClose);
}

feedbackButton.addEventListener('click', modalOpen);
