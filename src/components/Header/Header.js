import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styledHeader';
import { shoppingCartShown } from '../../features/shouldShowShoppingCartSlice';

export default function Header({ showImgHome }) {
  const productsInCart = useSelector((state) => state.productsInCart);
  const shouldShowShoppingCart = useSelector(
    (state) => state.shouldShowShoppingCart
  );

  const [sizeProductsInCart, setSizeProductsInCart] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setSizeProductsInCart(productsInCart.length);
  }, [productsInCart]);

  const handleClickShowShoppingCart = () => {
    dispatch(shoppingCartShown());
  };

  return (
    <Styled.Header>
      {shouldShowShoppingCart ? <Styled.DarkBackground /> : null}
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
            <Link to="/Shopping-Cart/">
              <Styled.TitleHeader showImgHome={showImgHome}>
                <h2>AMAZING</h2>
                <h4>STORE</h4>
              </Styled.TitleHeader>
            </Link>
          </div>
          <div>
            <Styled.BtnShowShoppingcart
              type="button"
              onClick={() => handleClickShowShoppingCart()}
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
  showImgHome: PropTypes.bool.isRequired,
};
