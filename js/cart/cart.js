import { getCartItems } from "./cartFunctions.js";
import { removeButton, cartItemContainer } from "../containers/containers.js";

const addedGames = getCartItems();

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
                                      <button class="remove-btn"><i class="fa-solid fa-trash-can"></i></button>
                                    </div>
                                  </div>`;
});
