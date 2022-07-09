import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fetchProducts from './API/fetchProducts/fetchProducts';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import GlobalStyles from './styles/GlobalStyles';
import BuyProduct from './components/BuyProduct/BuyProduct';
import ImgHome from './components/ImgHome/ImgHome';
import About from './pages/About/About';
import { lengthProductsInCart } from './handleShoppingCart/handleShoppingCart';

function RouteSwitch() {
  const [shoppinCartIsShown, setshoppinCartIsShown] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [showImgHome, setShowImgHome] = useState(false);
  const [sizeProductsData, setSizeProductsData] = useState(0);

  const getFetchProducts = async () => {
    const products = await fetchProducts();
    const productsFilter = products.filter(
      (product) => product.category !== 'electronics'
    );
    setProductsData(productsFilter);
  };

  useEffect(() => {
    getFetchProducts();
  });

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

  const addedProductInCart = () => {
    setSizeProductsData(lengthProductsInCart());
  };

  return (
    <BrowserRouter>
      {showImgHome ? <ImgHome /> : null}

      {shoppinCartIsShown ? (
        <ShoppingCart
          hideShoppingCart={hideShoppingCart}
          shoppinCartIsShown={shoppinCartIsShown}
        />
      ) : null}
      <Header
        showShoppingCart={showShoppingCart}
        showImgHome={showImgHome}
        shoppinCartIsShown={shoppinCartIsShown}
        sizeProductsData={sizeProductsData}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              displayImgHome={displayImgHome}
              shoppinCartIsShown={shoppinCartIsShown}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              productsData={productsData}
              hideImgHome={hideImgHome}
              shoppinCartIsShown={shoppinCartIsShown}
              addedProductInCart={addedProductInCart}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <BuyProduct
              productsData={productsData}
              hideImgHome={hideImgHome}
              shoppinCartIsShown={shoppinCartIsShown}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              hideImgHome={hideImgHome}
              shoppinCartIsShown={shoppinCartIsShown}
            />
          }
        />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default RouteSwitch;
