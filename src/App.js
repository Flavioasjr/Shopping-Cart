import React, { useState } from 'react';
import RouteSwitch from './RouteSwitch';

function App() {
  const [showImgHome, setShowImgHome] = useState(true);

  const displayImgHome = () => {
    setShowImgHome(true);
  };

  const hideImgHome = () => {
    setShowImgHome(false);
  };

  return (
    <RouteSwitch
      showImgHome={showImgHome}
      displayImgHome={displayImgHome}
      hideImgHome={hideImgHome}
    />
  );
}

export default App;
