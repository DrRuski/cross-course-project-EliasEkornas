import { indexSections, itemAddedDisplay } from "./containers/containers.js";
import { getCartItems } from "./cart/cartFunctions.js";

let itemCount = 0;

const url = "https://imdev.no/wp-json/wc/store/products";






async function getWooProducts() {
  try {
    const response = await fetch(url);
    const games = await response.json();

    for (let index = 0; index < games.length; index++) {
      const game = games[index];
      const gameImagesArray = game.images;

      for (let index = 0; index < gameImagesArray.length; index++) {
        const gamesImages = gameImagesArray[index];

        indexSections.forEach(
          (indexSections) =>
            (indexSections.innerHTML += `<div class="product-list-item">
                                                  <div>
                                                      <a href="product-screen.html?id=${game.id}">
                                                      <img class="home-page-images" src="${gamesImages.src}" alt="picture of game">
                                                      <h3>${game.name}</h3>
                                                      <p class="platform">Playbox <i class="fa-brands fa-xbox"></i></i></p>
                                                      </a>
                                                  </div>
                                                  <div class="btn-price">
                                                      <i data-id="${game.id}" data-title="${game.name}" data-price="${game.prices.price}" data-platform="Playbox" data-image="${gamesImages.src}" class="buy-btn fa-solid fa-cart-plus"></i>
                                                      <h4>${game.price_html},-</h4>
                                                  </div>
                                            </div>`)
        );
        buttonListener();
      }
    }
  } catch (error) {
    console.log(
      error,
      "Mega Error 404 Happened, calling in the monkey squad to fix this!"
    );
  }
}

// getWooProducts();

function buttonListener() {
  const addButton = document.querySelectorAll(".btn-price i");

  addButton.forEach((button) => {
    button.addEventListener("click", addItem);
  });

  function addItem() {
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

      itemCount++;
      itemAddedDisplay.innerHTML =
        `<i class="fa-solid fa-cart-shopping"></i>` + itemCount;
    } else {
      alert("This item has already been added.");
    }
  }
}

function saveAddedGames(cartItems) {
  localStorage.setItem("addedGames", JSON.stringify(cartItems));
}
