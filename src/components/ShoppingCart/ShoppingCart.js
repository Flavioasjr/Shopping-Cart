import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { StyledShoppingCart } from './styledShoppingCart';
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
    <StyledShoppingCart className="shopping-cart">
      <div className="header-cart">
        <h3>CART</h3>
        <AiOutlineClose onClick={hideShoppingCart} className="icon-close" />
      </div>
      <ListShoppingCart
        handleClickAdd={handleClickAdd}
        handleClickRemove={handleClickRemove}
        handleClickSubtract={handleClickSubtract}
        productsInCart={productsInCart}
      />
      {productsInCart.length === 0 ? null : (
        <div className="buy-now">
          <button type="button" className="btn-buy-now">
            Buy Now - ${totalPrice.toFixed(2)}
          </button>
        </div>
      )}
    </StyledShoppingCart>
  );
}

ShoppingCart.propTypes = {
  hideShoppingCart: PropTypes.func.isRequired,
  productsInCart: PropTypes.array.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
  removeProductInCart: PropTypes.func.isRequired,
};
