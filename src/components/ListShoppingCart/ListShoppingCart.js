import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './styledListShoppingCart';
import {
  productRemoved,
  quantityAdded,
  quantitySubtracted,
} from '../../features/productsInCartSlice';

export default function ListShoppingCart() {
  const dispatch = useDispatch();

  const productsInCart = useSelector((state) => state.productsInCart);

  const handleClickSubtractQuantity = (id) => {
    dispatch(quantitySubtracted(id));
  };

  const handleClickAddQuantity = (id) => {
    dispatch(quantityAdded(id));
  };

  const handleClickRemoveProduct = (id) => {
    dispatch(productRemoved(id));
  };

  const handleChangeQuantity = (quantity) => quantity;

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
                      onClick={() =>
                        handleClickSubtractQuantity(productInCart.id)
                      }
                      title={productInCart.id}
                      data-testid={`subtractIcon${productInCart.id}`}
                    />
                    <Styled.InputQuantity
                      value={productInCart.quantity}
                      type="number"
                      onChange={() =>
                        handleChangeQuantity(productInCart.quantity)
                      }
                      title={productInCart.id}
                    />
                    <Styled.AddIcon
                      onClick={() => handleClickAddQuantity(productInCart.id)}
                      title={productInCart.id}
                      data-testid={`addIcon${productInCart.id}`}
                    />
                  </Styled.ChangeQuantity>
                  <Styled.BtnRemove
                    title={productInCart.id}
                    type="button"
                    onClick={() => handleClickRemoveProduct(productInCart.id)}
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
