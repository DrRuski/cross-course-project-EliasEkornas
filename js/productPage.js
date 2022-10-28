import { productContainer, itemAddedDisplay } from "./containers/containers.js";
import { getCartItems } from "./cart/cartFunctions.js";
import { id } from "./utility/getID.js";

const url = "https://imdev.no/wp-json/wc/store/products/" + id;
let itemCount = 0;

async function getWooProducts() {
  try {
    const response = await fetch(url);
    const games = await response.json();

    const gameImagesArray = games.images;
    const gameCategoriesArray = games.categories;

    const productImage = gameImagesArray
      .map(function (image) {
        return `${image.src}`;
      })
      .join("");

    const productCategory = gameCategoriesArray
      .map(function (category) {
        return `<span class="category ${category.name}">${category.name}</span>`;
      })
      .join(" ");

    productContainer.innerHTML = `<div class="productCard">
                                        <div><img src="${productImage}"></div>
                                        <div class="productDescription">
                                          <div>
                                          <h2>${games.name}</h2>
                                          <p>${games.short_description}</p>
                                          </div>
                                          <div>
                                            <span class="productPlatform">PLAYBOX <i class="fa-brands fa-xbox"></i></span>
                                          </div>
                                          <div class="categoryContainer">
                                            ${productCategory}
                                          </div>
                                        </div>
                                      </div>
                                      <div class="btn-price">
                                          <i data-id="${games.id}" data-title="${games.name}" data-price="${games.prices.price}" data-platform="Playbox" data-image="${productImage}" class="productAddToCartBtn">Add To Cart</i>   
                                      </div>`;

    buttonListener();
  } catch (error) {
    console.log(
      error,
      "Mega Error 404 Happened, calling in the monkey squad to fix this!"
    );
  }
}

getWooProducts();

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
