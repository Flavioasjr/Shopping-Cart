import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styledHeader';

export default function Header({
  showShoppingCart,
  showImgHome,
  shoppinCartIsShown,
  sizeProductsInCart,
}) {
  return (
    <Styled.Header>
      {shoppinCartIsShown ? <Styled.DarkBackground /> : null}
      <Styled.BorderHeader showImgHome={showImgHome}>
        <Styled.TopHeader>
          <p>
            FREE SHIPPING FOR ALL ORDERS OVER $100 ‍AND JUST A REMINDER, ALL OUR
            DELIVERIES ARE CARBON NEUTRAL
          </p>
        </Styled.TopHeader>
        <Styled.BottomHeader>
          <Styled.ListLinks>
            <li>
              <Link to="/shop">
                <Styled.StyleLink showImgHome={showImgHome}>
                  Shop
                </Styled.StyleLink>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Styled.StyleLink showImgHome={showImgHome}>
                  About
                </Styled.StyleLink>
              </Link>
            </li>
          </Styled.ListLinks>
          <div>
            <Link to="/">
              <Styled.TitleHeader showImgHome={showImgHome}>
                <h2>AMAZING</h2>
                <h4>STORE</h4>
              </Styled.TitleHeader>
            </Link>
          </div>
          <div>
            <Styled.BtnShowShoppingcart
              type="button"
              onClick={showShoppingCart}
              showImgHome={showImgHome}
            >
              <Styled.BagIcon />

              {sizeProductsInCart === 0 ? null : (
                <Styled.QuantityProductInCart>
                  {sizeProductsInCart}
                </Styled.QuantityProductInCart>
              )}
            </Styled.BtnShowShoppingcart>
          </div>
        </Styled.BottomHeader>
      </Styled.BorderHeader>
    </Styled.Header>
  );
}

Header.propTypes = {
  showShoppingCart: PropTypes.func.isRequired,
  showImgHome: PropTypes.bool.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
  sizeProductsInCart: PropTypes.number.isRequired,
};
