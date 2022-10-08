export function getCartItems() {
  const cartItems = localStorage.getItem("addedGames");

  if (!cartItems) {
    return [];
  } else {
    return JSON.parse(cartItems);
  }
}
