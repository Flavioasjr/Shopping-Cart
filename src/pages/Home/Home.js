import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledHome } from './styledHome';

export default function Home({ displayImgHome, shoppinCartIsShown }) {
  useEffect(() => {
    displayImgHome();
  }, []);

  return (
    <StyledHome>
      {shoppinCartIsShown ? (
        <div className="dark-background dark-home" />
      ) : null}
      <div className="home">
        <h3 className="title-home">
          Good clothes are the ones that make you happy
        </h3>
        ;
        <Link to="/shop" className="link-to-shop">
          <button type="button" className="btn-home">
            see our products
          </button>
        </Link>
      </div>
    </StyledHome>
  );
}

Home.propTypes = {
  displayImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
};
