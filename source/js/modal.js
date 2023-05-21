let modalErrorWindow = document.querySelector('.modal-error-container');
let modalSuccessWindow = document.querySelector('.modal-success-container');
let closeErrorButton = document.querySelector('.modal-error__btn');
let closeSuccessButton = document.querySelector('.modal-success__btn');
let feedbackButton = document.querySelector('.feedback__button');
let feedbackForm = document.querySelector('.feedback__form');
let inputs = document.querySelectorAll('.feedback__input');

const redInputs = () => {
  inputs.forEach(item => {
    if (!item.checkValidity()) {
      item.classList.add("invalid-input");
    } else {
      item.classList.remove("invalid-input");
    }
  });
}

const modalSuccessClose = () => {
  modalSuccessWindow.style.display = "none";
  closeSuccessButton.removeEventListener('click', modalSuccessClose);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', "https://echo.htmlacademy.ru/", false);
  xhr.send(FormData);
}

const modalErrorClose = () => {
  modalErrorWindow.style.display = "none";
  closeErrorButton.removeEventListener('click', modalErrorClose);
}

const modalOpen = (evt) => {
  evt.preventDefault();
  if (feedbackForm.checkValidity()) {
    modalSuccessWindow.style.display = "flex";
    closeSuccessButton.addEventListener('click', modalSuccessClose);
  } else {
    modalErrorWindow.style.display = "flex";
    redInputs();
    closeErrorButton.addEventListener('click', modalErrorClose);
  }
}

feedbackButton.addEventListener('click', modalOpen);
