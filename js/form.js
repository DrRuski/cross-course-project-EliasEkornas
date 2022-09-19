const form = document.querySelector(".form-container");

const fullName = document.getElementById("#name");
const email = document.getElementById("#email");
const telephone = document.getElementById("#telephone");
const feedback = document.getElementById("#message");

const submitBtn = document.querySelector(".btn-confirm-order");



submitBtn.onclick = function validForm() {

    event.preventDefault();
  
    if (checkLength(fullName.value, 0) === true) {
      firstNameError.style.display = "none";
    } else {
      firstNameError.style.display = "block";
    }
  
    if (checkLength(feedback.value, 9) === true) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }
  
    if (valEmail(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
  
    if (checkLength(address.value, 24) === true) {
      addressError.style.display = "none";
    } else {
      addressError.style.display = "block";
    }
  
    form.addEventListener("submit", validForm);}

function checkLength(value){
    if (value.trim().length > 0){
        return true;
    } else {
        return false;
    }
}