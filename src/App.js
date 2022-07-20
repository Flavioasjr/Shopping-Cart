import React, { useState } from 'react';
import RouteSwitch from './RouteSwitch';

function App() {
  const [shoppinCartIsShown, setshoppinCartIsShown] = useState(false);
  const [showImgHome, setShowImgHome] = useState(true);

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
      shoppinCartIsShown={shoppinCartIsShown}
      showImgHome={showImgHome}
      showShoppingCart={showShoppingCart}
      hideShoppingCart={hideShoppingCart}
      displayImgHome={displayImgHome}
      hideImgHome={hideImgHome}
    />
  );
}

export default App;
