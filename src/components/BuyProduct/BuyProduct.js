import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styledBuyProduct';
import { productAdded } from '../../features/productsInCartSlice';
import useProductById from '../../API/hooks/useProductById';

export default function BuyProduct({ hideImgHome }) {
  const { id } = useParams();
  const product = useProductById(id);

  const dispatch = useDispatch();

  const shouldShowShoppingCart = useSelector(
    (state) => state.shouldShowShoppingCart
  );

  useEffect(() => {
    hideImgHome();
  }, []);

  const handleClickAddToCart = () => {
    dispatch(productAdded(product));
  };

  return (
    <Styled.BuyProduct>
      {shouldShowShoppingCart ? <Styled.DarkBackground /> : null}
      <Styled.BuyProductContent>
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
              onClick={() => handleClickAddToCart()}
            >
              Add To Cart
            </Styled.BtnAddToCart>
          </Styled.CompleteProductInformation>
        </Styled.Product>
      </Styled.BuyProductContent>
    </Styled.BuyProduct>
  );
}

BuyProduct.propTypes = {
  hideImgHome: PropTypes.func.isRequired,
};
