import {
  firstName,
  lastName,
  email,
  feedBack,
  errorMessage,
  successMessage,
} from "./containers/containers.js";

import {
  firstNameError,
  lastNameError,
  emailError,
  feedBackError,
} from "./status/statusDisplay.js";

import { checkLength, valEmail, formValid } from "./status/validation.js";

const form = document.querySelector(".formContainer");

function validForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (valEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(feedBack.value, 2) === true) {
    feedBackError.style.display = "none";
  } else {
    feedBackError.style.display = "block";
  }

  if (formValid) {
    successMessage.innerHTML = `<div class="successDisplay">You have submitted the form!</div>`;
  } else {
    errorMessage.innerHTML = `<div class="errorDisplay contactError">Something went wrong!</div>`;
  }
}
form.addEventListener("submit", validForm);
