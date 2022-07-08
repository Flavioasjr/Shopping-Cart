import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Home({ displayImgHome }) {
  useEffect(() => {
    displayImgHome();
  }, []);

  return <div>Home</div>;
}

Home.propTypes = {
  displayImgHome: PropTypes.func.isRequired,
};
