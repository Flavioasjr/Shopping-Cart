import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import GlobalStyles from './styles/GlobalStyles';
import BuyProduct from './components/BuyProduct/BuyProduct';
import ImgHome from './components/ImgHome/ImgHome';
import About from './pages/About/About';

function RouteSwitch({
  productsData,
  shoppinCartIsShown,
  showImgHome,
  productsInCart,
  addProductInCart,
  removeProductInCart,
  addQuantity,
  subtractQuantity,
  showShoppingCart,
  hideShoppingCart,
  displayImgHome,
  hideImgHome,
}) {
  return (
    <BrowserRouter>
      {showImgHome ? <ImgHome /> : null}

      {shoppinCartIsShown ? (
        <ShoppingCart
          hideShoppingCart={hideShoppingCart}
          shoppinCartIsShown={shoppinCartIsShown}
          productsInCart={productsInCart}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          removeProductInCart={removeProductInCart}
        />
      ) : null}
      <Header
        showShoppingCart={showShoppingCart}
        showImgHome={showImgHome}
        shoppinCartIsShown={shoppinCartIsShown}
        sizeProductsInCart={productsInCart.length}
      />
      <Routes>
        <Route
          path="/Shopping-Cart/"
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
              addProductInCart={addProductInCart}
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
              addProductInCart={addProductInCart}
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

RouteSwitch.propTypes = {
  productsData: PropTypes.array.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
  showImgHome: PropTypes.bool.isRequired,
  productsInCart: PropTypes.array.isRequired,
  addProductInCart: PropTypes.func.isRequired,
  removeProductInCart: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
  showShoppingCart: PropTypes.func.isRequired,
  hideShoppingCart: PropTypes.func.isRequired,
  displayImgHome: PropTypes.func.isRequired,
  hideImgHome: PropTypes.func.isRequired,
};
