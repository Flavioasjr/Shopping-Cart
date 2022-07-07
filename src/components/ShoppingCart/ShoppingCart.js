import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { GrAdd, GrFormSubtract } from 'react-icons/gr';
import { StyledShoppingCart } from './styledShoppingCart';
import {
  editQuantity,
  getShoppingCart,
  getTotalPrice,
  removeProductInCart,
} from '../../handleShoppingCart/handleShoppingCart';

export default function ShoppingCart({ hideShoppingCart }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(totalPrice);

  const handleChange = (e) => {
    editQuantity(e.target.title, e.target.value);
  };

  const handleClickAdd = (e) => {
    setProductsInCart(
      productsInCart.map((product) => {
        if (product.id === Number(e.target.textContent)) product.quantity += 1;
        return product;
      })
    );
  };
  const handleClickSubtract = (e) => {
    setProductsInCart(
      productsInCart.map((product) => {
        if (product.id === Number(e.target.textContent)) product.quantity -= 1;
        if (product.quantity === 0) removeProductInCart(product.id);
        return product;
      })
    );
  };

  useEffect(() => {
    setProductsInCart(getShoppingCart());
    setTotalPrice(getTotalPrice());
  }, []);

  useEffect(() => {
    setProductsInCart(getShoppingCart());
    setTotalPrice(getTotalPrice());
  }, [productsInCart]);

  return (
    <StyledShoppingCart className="shopping-cart">
      <div className="header-cart">
        <h3>CART</h3>
        <AiOutlineClose onClick={hideShoppingCart} className="icon-close" />
      </div>
      {productsInCart.length === 0 ? (
        <h3 className="cart-empty">YOUR CART IS EMPTY</h3>
      ) : (
        <ul className="products-in-cart">
          {productsInCart.map((productInCart) => (
            <li key={productInCart.id} className="product-in-cart">
              <img
                src={productInCart.image}
                alt={productInCart.title}
                className="products-img"
              />
              <div className="product-informtation">
                <p>{productInCart.title}</p>
                <p className="product-in-cart-price">${productInCart.price}</p>
                <div className="add-remove-product">
                  <div className="change-quantity">
                    <GrFormSubtract
                      className="quantity-icon"
                      onClick={handleClickSubtract}
                      title={productInCart.id}
                    />
                    <input
                      value={productInCart.quantity}
                      type="number"
                      onChange={handleChange}
                      title={productInCart.id}
                      className="input-quantity"
                    />
                    <GrAdd
                      className="quantity-icon"
                      onClick={handleClickAdd}
                      title={productInCart.id}
                    />
                  </div>
                  <button
                    title={productInCart.id}
                    type="button"
                    onClick={() => removeProductInCart(productInCart.id)}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
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
};
