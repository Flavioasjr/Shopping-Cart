import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Styled from './styledListShop';
import { productAdded } from '../../features/productsInCartSlice';
import { selectAllProducts, fetchProducts } from '../../features/productsSlice';
import { Spinner } from '../Spinner/Spinner';

export default function ListShop() {
  const dispatch = useDispatch();
  const productsData = useSelector(selectAllProducts);
  const productsStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, []);

  if (productsStatus === 'loading') return <Spinner text="Loading..." />;

  const handleClickAddToCart = (product) => {
    dispatch(productAdded(product));
  };

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
              onClick={() => handleClickAddToCart(product)}
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
