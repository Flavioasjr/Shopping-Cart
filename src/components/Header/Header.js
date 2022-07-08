import React from 'react';
import PropTypes from 'prop-types';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styledHeader';

export default function Header({ showShoppingCart, showImgHome }) {
  return (
    <StyledHeader>
      <div className={showImgHome ? null : 'border-header'}>
        <div className="top-header">
          <p>
            FREE SHIPPING FOR ALL ORDERS OVER €100 ‍AND JUST A REMINDER, ALL OUR
            DELIVERIES ARE CARBON NEUTRAL
          </p>
        </div>
        <div className="header">
          <ul className="list-links">
            <li>
              <Link to="/shop" className={showImgHome ? 'link-white' : null}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className={showImgHome ? 'link-white' : null}>
                About
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="/"
              className={
                showImgHome ? 'link-white title-header' : 'title-header'
              }
            >
              <h2>AMAZING</h2>
              <h4>STORE</h4>
            </Link>
          </div>
          <div>
            <button
              className="btn-show-shoppingcart"
              type="button"
              onClick={showShoppingCart}
            >
              <BsBag
                className={
                  showImgHome
                    ? 'link-white shoppingcart-icon'
                    : 'shoppingcart-icon'
                }
              />
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  showShoppingCart: PropTypes.func.isRequired,
  showImgHome: PropTypes.bool.isRequired,
};
