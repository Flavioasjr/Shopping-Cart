import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styledShoppingCart';
import ListShoppingCart from '../ListShoppingCart/ListShoppingCart';
import { shoppingCartHidden } from '../../features/shouldShowShoppingCartSlice';

export default function ShoppingCart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const productsInCart = useSelector((state) => state.productsInCart);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(
      productsInCart.reduce(
        (previousProduct, currentProduct) =>
          previousProduct + currentProduct.price * currentProduct.quantity,
        0
      )
    );
  }, [productsInCart]);

  return (
    <Styled.ShoppingCart>
      <Styled.HeaderCart>
        <h3>CART</h3>
        <Styled.IconClose
          onClick={() => dispatch(shoppingCartHidden())}
          title="icon-close"
        />
      </Styled.HeaderCart>
      <ListShoppingCart />
      {productsInCart.length === 0 ? null : (
        <Styled.BuyNow>
          <Styled.BtnBuyNow type="button" className="btn-buy-now">
            Buy Now - ${totalPrice.toFixed(2)}
          </Styled.BtnBuyNow>
        </Styled.BuyNow>
      )}
    </Styled.ShoppingCart>
  );
}
