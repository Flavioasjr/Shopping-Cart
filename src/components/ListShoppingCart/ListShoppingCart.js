import React from 'react';
import PropTypes from 'prop-types';
import { GrAdd, GrFormSubtract } from 'react-icons/gr';

export default function ListShoppingCart({
  productsInCart,
  handleClickSubtract,
  handleClickAdd,
  handleClickRemove,
}) {
  return (
    <div>
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
                      onChange={() => productInCart.quantity}
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
                    onClick={handleClickRemove}
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
    </div>
  );
}

ListShoppingCart.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
  handleClickRemove: PropTypes.func.isRequired,
  handleClickSubtract: PropTypes.func.isRequired,
};
