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
                        dispatch(quantitySubtracted(productInCart.id))
                      }
                      title={productInCart.id}
                      data-testid={`subtractIcon${productInCart.id}`}
                    />
                    <Styled.InputQuantity
                      value={productInCart.quantity}
                      type="number"
                      onChange={() => productInCart.quantity}
                      title={productInCart.id}
                    />
                    <Styled.AddIcon
                      onClick={() => dispatch(quantityAdded(productInCart.id))}
                      title={productInCart.id}
                      data-testid={`addIcon${productInCart.id}`}
                    />
                  </Styled.ChangeQuantity>
                  <Styled.BtnRemove
                    title={productInCart.id}
                    type="button"
                    onClick={() => dispatch(productRemoved(productInCart.id))}
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
