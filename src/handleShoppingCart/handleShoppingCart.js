// usar local storage
let productsInCart = [];

export function getShoppingCart() {
  return productsInCart;
}

export function addProductInCart(product) {
  const quantityKey = {
    quantity: 1,
  };
  Object.assign(product, quantityKey);
  productsInCart = [...productsInCart, product];
}

export function removeProductInCart(id) {
  const indexToRemove = productsInCart.findIndex(
    (product) => product.id === Number(id)
  );
  if (indexToRemove < 0) return;
  productsInCart.splice(indexToRemove, 1);
}

export function editQuantity(id, quantity) {
  if (quantity <= 0) {
    removeProductInCart(id);
    return;
  }
  productsInCart.forEach((product, index) => {
    if (product.id === Number(id)) {
      productsInCart[index].quantity = Number(quantity);
    }
  });
}
