import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { StyledShoppingCart } from './styledShoppingCart';
import {
  editQuantity,
  getShoppingCart,
  removeProductInCart,
} from '../../handleShoppingCart/handleShoppingCart';

export default function ShoppingCart({ hideShoppingCart }) {
  const [productsInCart, setProductsInCart] = useState([]);

  const handleChange = (e) => {
    editQuantity(e.target.title, e.target.value);
  };

  useEffect(() => {
    setProductsInCart(getShoppingCart());
  });

  return (
    <StyledShoppingCart className="shopping-cart">
      <AiOutlineClose onClick={hideShoppingCart} />
      {productsInCart.length === 0 ? (
        <h2>Cart Empty</h2>
      ) : (
        <ul className="products-in-cart">
          {productsInCart.map((productInCart) => (
            <li key={productInCart.id}>
              <img
                src={productInCart.image}
                alt={productInCart.title}
                className="products-img"
              />
              <button
                title={productInCart.id}
                type="button"
                onClick={() => removeProductInCart(productInCart.id)}
              >
                Remove
              </button>
              <input
                value={productInCart.quantity}
                type="number"
                onChange={handleChange}
                title={productInCart.id}
              />
            </li>
          ))}
        </ul>
      )}
    </StyledShoppingCart>
  );
}

ShoppingCart.propTypes = {
  hideShoppingCart: PropTypes.func.isRequired,
};
