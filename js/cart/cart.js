import { getCartItems } from "./cartFunctions.js";
import {
  removeButton,
  cartItemContainer,
  purchaseBtn,
  subTotal,
} from "../containers/containers.js";

const addedGames = getCartItems();

let gamePrice = 0;

addedGames.forEach((game) => {
  cartItemContainer.innerHTML += `<div class="item-container">
      <div class="item-display-container">
        <label for="item-image-title"><span>ITEM</span></label>
        <div class="item-showcase item-showcase-mobile item-image-title">
            <img class="item-img" src="${game.image}" alt=""><span class="item-title">${game.title}</span>
        </div>
      </div>

      <div class="item-display-container">
        <label for="platform"><span>PLATFORM</span></label>
        <div class="item-showcase platform">
            <span>${game.platform}</span>
        </div>
      </div>

      <div class="item-display-container">
        <label for="quantity"><span>QUANTITY</span></label>
        <div class="item-showcase quantity">
            <input value="1" type="text" name="item-quantity" id="item-quantity">
        </div>
      </div>

      <div class="item-display-container">
        <label for="price"><span>PRICE</span></label>
        <div class="item-showcase price">
            <span>${game.price},-</span>
        </div>
      </div>

      <div class="item-showcase">
        <i data-id="${game.id}" class="remove-btn fa-solid fa-trash-can"></i>
      </div>
    </div>`;
});

for (let index = 0; index < addedGames.length; index++) {
  const priceOfGame = addedGames[index].price;
  let subtotalGamePrice = (gamePrice += parseInt(priceOfGame));
  subTotal.innerHTML = subtotalGamePrice + ",-";
}

purchaseBtn.onclick = function () {
  alert("Thank you for the purchase.");
  localStorage.clear();
  cartItemContainer.innerHTML = "";
  subTotal.innerHTML = "0,-";
};

/* Tried making a remove button that did not go well.
Prioritized other aspects of the CA */

// removeButton.forEach(removeButton => {
//   removeButton.addEventListener("click", deletingCartItem)
// });

// function deletingCartItem() {

//   const test = addedGames.find(function (gameItem){
//     return gameItem.id === id;
//   })
//   }

// removeButton.onclick = function(){
//   localStorage.removeItem("")
// }
