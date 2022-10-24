const productContainer = document.querySelector(".product-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://imdev.no/wp-json/wc/store/products/" + id;

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

//   getWooProducts();
