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

function RouteSwitch() {
  const [shoppinCartIsShown, setshoppinCartIsShown] = useState(false);
  const [productsData, setProductsData] = useState([]);
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

  return (
    <BrowserRouter>
      {showImgHome ? <ImgHome /> : null}

      {shoppinCartIsShown ? (
        <>
          <ShoppingCart
            hideShoppingCart={hideShoppingCart}
            shoppinCartIsShown={shoppinCartIsShown}
          />
          <div className="dark-background" />
        </>
      ) : null}
      <Header showShoppingCart={showShoppingCart} showImgHome={showImgHome} />
      <Routes>
        <Route path="/" element={<Home displayImgHome={displayImgHome} />} />
        <Route
          path="/shop"
          element={
            <Shop productsData={productsData} hideImgHome={hideImgHome} />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <BuyProduct productsData={productsData} hideImgHome={hideImgHome} />
          }
        />
      </Routes>
      <GlobalStyles
        shoppinCartIsShown={shoppinCartIsShown}
        backgroungImg="./images/background.jpg"
      />
    </BrowserRouter>
  );
}

export default RouteSwitch;
