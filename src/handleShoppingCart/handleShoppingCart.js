// usar local storage
let productsInCart = [];

export function getShoppingCart() {
  return productsInCart;
}

export function getTotalPrice() {
  if (productsInCart.length === 0) return 0;
  if (productsInCart.length === 1)
    return productsInCart[0].price * productsInCart[0].quantity;
  const totalPrice = productsInCart.reduce(
    (previousProduct, currentProduct) => {
      return (
        previousProduct.price * previousProduct.quantity +
        currentProduct.price * currentProduct.quantity
      );
    }
  );
  // eslint-disable-next-line consistent-return
  return totalPrice;
}

export function addProductInCart(product) {
  const quantityKey = {
    quantity: 1,
  };

  const indexProductExists = productsInCart.findIndex(
    (productInCart) => productInCart.id === product.id
  );

  if (indexProductExists >= 0) {
    productsInCart[indexProductExists].quantity += 1;
    return;
  }
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
