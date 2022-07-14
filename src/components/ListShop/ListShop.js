import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styledListShop';

export default function ListShop({ productsData, addProductInCart }) {
  return (
    <Styled.ProductsList>
      {productsData.map((product) => (
        <Styled.ListProduct key={product.id}>
          <Link to={`/shop/${product.id}`}>
            <Styled.ProductImg src={product.image} alt={product.title} />
          </Link>
          <Styled.ProductData>
            <Styled.ProductTitle>{product.title}</Styled.ProductTitle>
            <Styled.ProductPrice>${product.price}</Styled.ProductPrice>
          </Styled.ProductData>

          <Styled.AddToCart>
            <Styled.BtnAddToCart
              title={product.id}
              type="button"
              onClick={() => addProductInCart(product)}
            >
              Add To Cart
            </Styled.BtnAddToCart>
          </Styled.AddToCart>
          <div>
            <Link to={`/shop/${product.id}`}>
              <Styled.BtnDetails>Details</Styled.BtnDetails>
            </Link>
          </div>
        </Styled.ListProduct>
      ))}
    </Styled.ProductsList>
  );
}

ListShop.propTypes = {
  productsData: PropTypes.array.isRequired,
  addProductInCart: PropTypes.func.isRequired,
};
