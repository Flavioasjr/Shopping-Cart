import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import GlobalStyles from './styles/GlobalStyles';
import BuyProduct from './components/BuyProduct/BuyProduct';
import ImgHome from './components/ImgHome/ImgHome';
import About from './pages/About/About';

function RouteSwitch({ showImgHome, displayImgHome, hideImgHome }) {
  const shouldShowShoppingCart = useSelector(
    (state) => state.shouldShowShoppingCart
  );

  return (
    <BrowserRouter>
      {showImgHome ? <ImgHome /> : null}

      {shouldShowShoppingCart ? <ShoppingCart /> : null}
      <Header showImgHome={showImgHome} />
      <Routes>
        <Route
          path="/Shopping-Cart/"
          element={<Home displayImgHome={displayImgHome} />}
        />
        <Route path="/shop" element={<Shop hideImgHome={hideImgHome} />} />
        <Route
          path="/shop/:id"
          element={<BuyProduct hideImgHome={hideImgHome} />}
        />
        <Route path="/about" element={<About hideImgHome={hideImgHome} />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default RouteSwitch;

RouteSwitch.propTypes = {
  showImgHome: PropTypes.bool.isRequired,
  displayImgHome: PropTypes.func.isRequired,
  hideImgHome: PropTypes.func.isRequired,
};
