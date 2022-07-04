import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styledHeader';

export default function Header({ showShoppingCart }) {
  return (
    <StyledHeader>
      <ul className="list-links">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        <Link to="/">
          <h2>Title</h2>
        </Link>
      </div>
      <div>
        <button
          className="btn-show-shoppingcart"
          type="button"
          onClick={showShoppingCart}
        >
          <FaShoppingBag />
        </button>
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  showShoppingCart: PropTypes.func.isRequired,
};
