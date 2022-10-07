import { gameProductsArray } from "./array/arr.js";
import { indexSections } from "./containers/containers.js";

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
                                            <a class="buy-btn" href="product-screen.html"><i class="fa-solid fa-cart-plus"></i></a>
                                            <h4>${games.price},-</h4>
                                        </div>
                                    </div>`)
  );
}
