import {
  firstName,
  lastName,
  email,
  feedBack,
} from "./containers/containers.js";

import {
  firstNameError,
  lastNameError,
  emailError,
  feedBackError,
} from "./status/statusDisplay.js";
import { formValid } from "./status/validation.js";
import { checkLength, valEmail } from "./status/validation.js";



const form = document.querySelector(".formContainer");
const submitBtn = document.querySelector(".submitBtn");

submitBtn.onclick = function validForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 0) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (valEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(feedBack.value, 15) === true) {
    feedBackError.style.display = "none";
  } else {
    feedBackError.style.display = "block";
  }

  form.addEventListener("submit", validForm);

//   if (formValid){
//     return ()
//   } else {
//     return ()
//   }
};
