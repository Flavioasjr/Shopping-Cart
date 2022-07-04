import React from 'react';
import PropTypes from 'prop-types';
import { StyledShop } from './styledShop';
import { addProductInCart } from '../../handleShoppingCart/handleShoppingCart';

export default function Shop({ productsData }) {
  return (
    <StyledShop>
      <div>Shop</div>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="products-img"
            />
            <p>{product.title}</p>
            <button
              title={product.id}
              type="button"
              onClick={() => addProductInCart(product)}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </StyledShop>
  );
}

Shop.propTypes = {
  productsData: PropTypes.array.isRequired,
};
