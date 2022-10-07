import { gameProductsArray } from "./array/arr.js";
import { removeButton } from "./containers/containers.js";

console.log(removeButton);

window.localStorage.setItem("gameProducts", JSON.stringify(gameProductsArray));

const getGameItem = localStorage.getItem("gameProducts");

const getGame = JSON.parse(getGameItem);

let arrCount = 0;

for (let index = 0; index < removeButton.length; index++) {
  const button = removeButton[index];
  button.addEventListener("click", function (event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}

for (let index = 0; index < getGame.length; index++) {
  const element = getGame[index];

  console.log(element);
}
