import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledShop } from './styledShop';

export default function Shop({
  productsData,
  hideImgHome,
  shoppinCartIsShown,
  addProductInCart,
}) {
  useEffect(() => {
    hideImgHome();
  }, []);

  const handleClickAddProduct = (e) => {
    productsData.map(
      (product) =>
        product.id === Number(e.target.title) && addProductInCart(product)
    );
  };

  return (
    <StyledShop>
      {shoppinCartIsShown ? <div className="dark-background" /> : null}
      <div className="shop">
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
              <div className="add-to-cart">
                <button
                  title={product.id}
                  type="button"
                  onClick={handleClickAddProduct}
                  className="btn-add-to-cart"
                >
                  Add To Cart
                </button>
              </div>
              <div>
                <Link to={`/shop/${product.id}`}>
                  <button type="button" className="btn-details">
                    Details
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledShop>
  );
}

Shop.propTypes = {
  productsData: PropTypes.array.isRequired,
  hideImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
  addProductInCart: PropTypes.func.isRequired,
};
