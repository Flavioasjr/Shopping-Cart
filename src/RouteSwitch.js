import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fetchProducts from './API/fetchProducts/fetchProducts';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import GlobalStyles from './styles/GlobalStyles';

function RouteSwitch() {
  const [shoppinCartIsShown, setshoppinCartIsShown] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const getFetchProducts = async () => {
    const products = await fetchProducts();
    setProductsData(products);
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

  return (
    <BrowserRouter>
      <Header showShoppingCart={showShoppingCart} />
      {shoppinCartIsShown ? (
        <ShoppingCart hideShoppingCart={hideShoppingCart} />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop productsData={productsData} />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default RouteSwitch;
