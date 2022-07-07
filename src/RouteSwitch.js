import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fetchProducts from './API/fetchProducts/fetchProducts';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import GlobalStyles from './styles/GlobalStyles';
import BuyProduct from './components/BuyProduct/BuyProduct';

function RouteSwitch() {
  const [shoppinCartIsShown, setshoppinCartIsShown] = useState(false);
  const [productsData, setProductsData] = useState([]);

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

  return (
    <BrowserRouter>
      {shoppinCartIsShown ? (
        <>
          <ShoppingCart
            hideShoppingCart={hideShoppingCart}
            shoppinCartIsShown={shoppinCartIsShown}
          />
          <div className="dark-background" />
        </>
      ) : null}
      <Header showShoppingCart={showShoppingCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop productsData={productsData} />} />
        <Route
          path="/shop/:id"
          element={<BuyProduct productsData={productsData} />}
        />
      </Routes>
      <GlobalStyles shoppinCartIsShown={shoppinCartIsShown} />
    </BrowserRouter>
  );
}

export default RouteSwitch;
