import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { StyledBuyProduct } from './styledBuyProduct';
import { addProductInCart } from '../../handleShoppingCart/handleShoppingCart';

export default function BuyProduct({
  productsData,
  hideImgHome,
  shoppinCartIsShown,
}) {
  const { id } = useParams();

  console.log('test');
  useEffect(() => {
    hideImgHome();
  }, []);

  return (
    <StyledBuyProduct>
      {shoppinCartIsShown ? <div className="dark-background" /> : null}
      <div className="buy-product">
        {productsData.map((product) => {
          if (product.id === Number(id)) {
            return (
              <div className="product" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-product"
                />
                <div className="complete-product-information">
                  <div className="title-price-product">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                  </div>
                  <div className="product-description">
                    <p className="product-category">{product.category}</p>
                    <p>{product.description}</p>
                  </div>
                  <button
                    title={product.id}
                    type="button"
                    onClick={() => addProductInCart(product)}
                    className="btn-add-to-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </StyledBuyProduct>
  );
}

BuyProduct.propTypes = {
  productsData: PropTypes.array.isRequired,
  hideImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
};
