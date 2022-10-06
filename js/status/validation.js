export const formValid =
checkLength(firstName.value, 0) &&
checkLength(lastName.value, 0) &&
valEmail(email.value) &&
checkLength(feedBack.value, 10);

export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function valEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const result = regEx.test(email);
  return result;
}
