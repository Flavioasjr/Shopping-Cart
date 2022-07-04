import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fetchProducts from './API/fetchProducts/fetchProducts';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import GlobalStyles from './styles/GlobalStyles';

function RouteSwitch() {
  const [productsData, setProductsData] = useState([]);
  const getFetchProducts = async () => {
    const products = await fetchProducts();
    setProductsData(products);
  };

  useEffect(() => {
    getFetchProducts();
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop productsData={productsData} />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default RouteSwitch;
