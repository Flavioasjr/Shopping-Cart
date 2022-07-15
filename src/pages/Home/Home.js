import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styledHome';

export default function Home({ displayImgHome, shoppinCartIsShown }) {
  useEffect(() => {
    displayImgHome();
  }, []);

  return (
    <section>
      {shoppinCartIsShown ? <Styled.DarkBackground /> : null}
      <Styled.Home>
        <Styled.TitleHome>
          Good clothes are the ones that make you happy
        </Styled.TitleHome>

        <Link to="/shop" className="link-to-shop">
          <Styled.ButtonLink type="button" className="btn-home">
            see our products
          </Styled.ButtonLink>
        </Link>
      </Styled.Home>
    </section>
  );
}

Home.propTypes = {
  displayImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
};
