import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styledShoppingCart';
import ListShoppingCart from '../ListShoppingCart/ListShoppingCart';

export default function ShoppingCart({
  hideShoppingCart,
  productsInCart,
  addQuantity,
  subtractQuantity,
  removeProductInCart,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      productsInCart.reduce(
        (previousProduct, currentProduct) =>
          previousProduct + currentProduct.price * currentProduct.quantity,
        0
      )
    );
  }, [productsInCart]);

  const handleClickAdd = (e) => {
    addQuantity(e);
  };

  const handleClickSubtract = (e) => {
    subtractQuantity(e);
  };

  const handleClickRemove = (e) => {
    removeProductInCart(e.target.title);
  };

  return (
    <Styled.ShoppingCart>
      <Styled.HeaderCart>
        <h3>CART</h3>
        <Styled.IconClose onClick={hideShoppingCart} title="icon-close" />
      </Styled.HeaderCart>
      <ListShoppingCart
        handleClickAdd={handleClickAdd}
        handleClickRemove={handleClickRemove}
        handleClickSubtract={handleClickSubtract}
        productsInCart={productsInCart}
      />
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

ShoppingCart.propTypes = {
  hideShoppingCart: PropTypes.func.isRequired,
  productsInCart: PropTypes.array.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
  removeProductInCart: PropTypes.func.isRequired,
};
