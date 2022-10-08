import { gameProductsArray } from "./array/arr.js";
import { indexSections } from "./containers/containers.js";
import { cartItemContainer } from "./containers/containers.js";
import { getCartItems } from "./cart/cartFunctions.js";

for (let index = 0; index < gameProductsArray.length; index++) {
  const games = gameProductsArray[index];

  indexSections.forEach(
    (indexSections) =>
      (indexSections.innerHTML += `<div class="product-list-item">
                                        <div>
                                            <a href="product-screen.html">
                                            <img class="home-page-images" src="${games.image}" alt="picture of game">
                                            <h3>${games.title}</h3>
                                            <p>Seller: ${games.seller} <i class="fa-solid fa-circle-check"></i></p>
                                            <p class="platform">${games.platform} <i class="fa-brands fa-windows"></i></p>
                                            </a>
                                        </div>
                                        <div class="btn-price">
                                            <i data-id="${games.id}" data-title="${games.title}" data-price="${games.price}" data-platform="${games.platform}" data-image="${games.image}" class="buy-btn fa-solid fa-cart-plus"></i>
                                            <h4>${games.price},-</h4>
                                        </div>
                                    </div>`)
  );
}

const addButton = document.querySelectorAll(".btn-price i");

addButton.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const platform = this.dataset.platform;
  const image = this.dataset.image;

  const currentItems = getCartItems();

  const gameDuplicate = currentItems.find(function (game) {
    return game.id === id;
  });

  if (!gameDuplicate) {
    const gameProduct = {
      id: id,
      title: title,
      price: price,
      platform: platform,
      image: image,
    };
    currentItems.push(gameProduct);
    saveAddedGames(currentItems);
  }
}

function saveAddedGames(cartItems) {
  localStorage.setItem("addedGames", JSON.stringify(cartItems));
}
