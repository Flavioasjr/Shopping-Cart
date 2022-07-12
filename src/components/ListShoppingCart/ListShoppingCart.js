import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styledListShoppingCart';

export default function ListShoppingCart({
  productsInCart,
  handleClickSubtract,
  handleClickAdd,
  handleClickRemove,
}) {
  return (
    <div>
      {productsInCart.length === 0 ? (
        <Styled.CartEmpty>YOUR CART IS EMPTY</Styled.CartEmpty>
      ) : (
        <Styled.ProductsInCart>
          {productsInCart.map((productInCart) => (
            <Styled.ProductInCart key={productInCart.id}>
              <Styled.ProductImg
                src={productInCart.image}
                alt={productInCart.title}
              />
              <Styled.ProductInformation>
                <p>{productInCart.title}</p>
                <Styled.ProductInCartPrice>
                  ${productInCart.price}
                </Styled.ProductInCartPrice>
                <Styled.AddRemoveProduct>
                  <Styled.ChangeQuantity>
                    <Styled.SubtractIcon
                      onClick={handleClickSubtract}
                      title={productInCart.id}
                    />
                    <Styled.InputQuantity
                      value={productInCart.quantity}
                      type="number"
                      onChange={() => productInCart.quantity}
                      title={productInCart.id}
                    />
                    <Styled.AddIcon
                      onClick={handleClickAdd}
                      title={productInCart.id}
                    />
                  </Styled.ChangeQuantity>
                  <Styled.BtnRemove
                    title={productInCart.id}
                    type="button"
                    onClick={handleClickRemove}
                    className="btn-remove"
                  >
                    Remove
                  </Styled.BtnRemove>
                </Styled.AddRemoveProduct>
              </Styled.ProductInformation>
            </Styled.ProductInCart>
          ))}
        </Styled.ProductsInCart>
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
