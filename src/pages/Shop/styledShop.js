import styled from 'styled-components';
import { bluePrimaryColor } from '../../styles/images/color';

export const StyledShop = styled.div`
  background-color: #f7f7f7;
  position: relative;

  .shop {
    padding: 18px 40px;
  }

  .products-img {
    width: 100px;
    height: 130px;
  }

  .title-shop {
    color: ${bluePrimaryColor};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 30px;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .list-product {
    width: 240px;
    height: 345px;
    text-align: center;
    background: white;
    box-shadow: 0px 1px 5px 0px #dfdfdf;
    padding: 15px 10px;
    border-radius: 8px;
  }

  .product-data {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 110px;
  }

  .product-title {
    text-transform: uppercase;
    color: ${bluePrimaryColor};
  }

  .product-price {
    font-weight: bold;
    color: #97adb1;
  }

  .btn-add-to-cart:hover {
    background: white;
    border: 1px solid ${bluePrimaryColor};
    color: ${bluePrimaryColor};
  }

  .btn-details {
    background: #f7f7f7;
    color: #123e64;
    border: 1px solid #123e64;
  }

  .add-to-cart {
    margin-bottom: 5px;
  }
`;
