import React, { useState, useEffect } from 'react';
import fetchProducts from './API/fetchProducts/fetchProducts';
import RouteSwitch from './RouteSwitch';

function App() {
  const [shoppinCartIsShown, setshoppinCartIsShown] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [showImgHome, setShowImgHome] = useState(false);

  const getFetchProducts = async () => {
    const products = await fetchProducts();
    const productsFilter = products.filter(
      (product) => product.category !== 'electronics'
    );
    setProductsData(productsFilter);
  };

  useEffect(() => {
    getFetchProducts();
  }, []);

  const addProductInCart = (product) => {
    const quantityKey = {
      quantity: 1,
    };

    const productExists = productsInCart.some(
      (productInCart) => product === productInCart
    );

    if (productExists) {
      setProductsInCart(
        productsInCart.map((productInCart) => {
          if (productInCart === product) {
            productInCart.quantity += 1;
          }
          return productInCart;
        })
      );
      return;
    }

    Object.assign(product, quantityKey);
    setProductsInCart([...productsInCart, product]);
  };

  const removeProductInCart = (id) => {
    setProductsInCart(
      productsInCart.filter((product) => product.id !== Number(id))
    );
  };

  const addQuantity = (e) => {
    setProductsInCart(
      productsInCart.map((product) => {
        if (product.id === Number(e.target.textContent)) product.quantity += 1;
        return product;
      })
    );
  };

  const subtractQuantity = (e) => {
    setProductsInCart(
      productsInCart.map((product) => {
        if (product.id === Number(e.target.textContent)) product.quantity -= 1;
        return product;
      })
    );
    setProductsInCart(productsInCart.filter((product) => product.quantity > 0));
  };

  const showShoppingCart = () => {
    setshoppinCartIsShown(true);
  };

  const hideShoppingCart = () => {
    setshoppinCartIsShown(false);
  };

  const displayImgHome = () => {
    setShowImgHome(true);
  };

  const hideImgHome = () => {
    setShowImgHome(false);
  };

  return (
    <RouteSwitch
      productsData={productsData}
      shoppinCartIsShown={shoppinCartIsShown}
      showImgHome={showImgHome}
      productsInCart={productsInCart}
      addProductInCart={addProductInCart}
      removeProductInCart={removeProductInCart}
      addQuantity={addQuantity}
      subtractQuantity={subtractQuantity}
      showShoppingCart={showShoppingCart}
      hideShoppingCart={hideShoppingCart}
      displayImgHome={displayImgHome}
      hideImgHome={hideImgHome}
    />
  );
}

export default App;
