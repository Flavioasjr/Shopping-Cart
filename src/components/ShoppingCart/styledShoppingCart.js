import styled from 'styled-components';

export const StyledShoppingCart = styled.section`
  position: absolute;
  right: 0;
  background: white;
  z-index: 2;
  width: 400px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 88px 1fr 50px;

  .header-cart {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #123e64;
  }

  .products-img {
    width: 100px;
  }

  .icon-close {
    width: 30px;
    height: 28px;
    color: #7c7c7c;
    cursor: pointer;
  }

  .cart-empty {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #123e64;
    font-weight: 100;
  }

  .products-in-cart {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .product-in-cart {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  .product-informtation {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    color: #123e64;
  }

  .add-remove-product {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
  }

  .change-quantity {
    display: flex;
    border: 1px solid #b7b7b7;
    height: 40px;
    align-items: center;
    padding: 4px;
  }

  .input-quantity {
    background: transparent;
    border: none;
    width: 40px;
    text-align: center;
    color: #6b9aac;
    font-weight: bold;
  }

  .input-quantity::-webkit-outer-spin-button,
  .input-quantity::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .quantity-icon {
    height: 25px;
    cursor: pointer;
    color: #6b9aac;
  }

  .btn-remove {
    background: none;
    color: #6b9aac;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .product-in-cart-price {
    color: #97adb1;
  }

  .buy-now {
    text-align: center;
    padding: 0 30px;
  }

  .btn-buy-now {
    width: 100%;
    transition: 0.45s;
  }

  .btn-buy-now:hover,
  .btn-buy-now:focus {
    box-shadow: inset 340px 0 0 0 white;
    border: 1px solid #123e64;
    color: #123e64;
  }
`;
