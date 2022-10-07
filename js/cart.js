import { gameProductsArray } from "./array/arr.js";

window.localStorage.setItem("gameProducts", JSON.stringify(gameProductsArray));

const getGameItem = localStorage.getItem("gameProducts");

const getGame = JSON.parse(getGameItem);

let arrCount = 0;

for (let index = 0; index < getGame.length; index++) {
  const element = getGame[index];

  console.log(element);
}
