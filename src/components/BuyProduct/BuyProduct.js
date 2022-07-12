import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import * as Styled from './styledBuyProduct';

export default function BuyProduct({
  productsData,
  hideImgHome,
  shoppinCartIsShown,
  addProductInCart,
}) {
  const { id } = useParams();

  useEffect(() => {
    hideImgHome();
  }, []);

  return (
    <Styled.BuyProduct>
      {shoppinCartIsShown ? <Styled.DarkBackground /> : null}
      <Styled.BuyProductContent>
        {productsData.map((product) => {
          if (product.id === Number(id)) {
            return (
              <Styled.Product key={product.id}>
                <Styled.ImgProduct
                  src={product.image}
                  alt={product.title}
                  className="img-product"
                />
                <Styled.CompleteProductInformation>
                  <Styled.TitlePriceProduct>
                    <Styled.ProductTitle>{product.title}</Styled.ProductTitle>
                    <Styled.ProductPrice>${product.price}</Styled.ProductPrice>
                  </Styled.TitlePriceProduct>
                  <Styled.ProductDescription>
                    <Styled.ProductCategory>
                      {product.category}
                    </Styled.ProductCategory>
                    <Styled.ProductDescription>
                      {product.description}
                    </Styled.ProductDescription>
                  </Styled.ProductDescription>
                  <Styled.BtnAddToCart
                    title={product.id}
                    type="button"
                    onClick={() => addProductInCart(product)}
                  >
                    Add To Cart
                  </Styled.BtnAddToCart>
                </Styled.CompleteProductInformation>
              </Styled.Product>
            );
          }
          return null;
        })}
      </Styled.BuyProductContent>
    </Styled.BuyProduct>
  );
}

BuyProduct.propTypes = {
  productsData: PropTypes.array.isRequired,
  hideImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
  addProductInCart: PropTypes.func.isRequired,
};
