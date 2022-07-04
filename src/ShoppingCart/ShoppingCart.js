let productsInCart = [];

export default function ShoppingCart(product) {
  productsInCart = [...productsInCart, product];
  console.log(productsInCart);
}
