import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledShop } from './styledShop';
import { addProductInCart } from '../../handleShoppingCart/handleShoppingCart';

export default function Shop({ productsData, hideImgHome }) {
  useEffect(() => {
    hideImgHome();
  });

  return (
    <StyledShop>
      <div className="title-shop">
        <h3>OUR PRODUCTS</h3>
      </div>
      <ul className="products-list">
        {productsData.map((product) => (
          <li key={product.id} className="list-product">
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="products-img"
              />
            </Link>
            <div className="product-data">
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </div>
            <button
              title={product.id}
              type="button"
              onClick={() => addProductInCart(product)}
              className="btn-add-to-cart"
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
  hideImgHome: PropTypes.func.isRequired,
};
