import React, { useState, useEffect } from 'react';
import fetchProducts from './API/fetchProducts/fetchProducts';
import Shop from './pages/Shop/Shop';

function App() {
  const [productsData, setProductsData] = useState([]);
  const getFetchProducts = async () => {
    const products = await fetchProducts();
    setProductsData(products);
  };

  useEffect(() => {
    getFetchProducts();
  });

  return <Shop productsData={productsData} />;
}

export default App;
