import { productContainer } from "./containers/containers.js";
import { id } from "./utility/getID.js";

const url = "https://imdev.no/wp-json/wc/store/products/" + id;

async function getWooProducts() {
  try {
    const response = await fetch(url);
    const games = await response.json();

    const gameImagesArray = games.images;
    const gameCategoriesArray = games.categories;

    const productImage = gameImagesArray
      .map(function (image) {
        return `<img src="${image.src}" alt="">`;
      })
      .join("");

    const productCategory = gameCategoriesArray
      .map(function (category) {
        return `<span class="category">${category.name}</span>`;
      })
      .join(" ");

    productContainer.innerHTML = `<div class="productCard">
                                        <div>${productImage}</div>
                                        <div class="productDescription">
                                          <div>
                                          <h2>${games.name}</h2>
                                          <p>${games.short_description}</p>
                                          </div>
                                          <div class="categoryContainer">${productCategory}</div>
                                        </div>
                                      </div>`;

    // buttonListener();
  } catch (error) {
    console.log(
      error,
      "Mega Error 404 Happened, calling in the monkey squad to fix this!"
    );
  }
}

getWooProducts();
