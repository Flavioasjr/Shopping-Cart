import styled from 'styled-components';

export const StyledShop = styled.div`
  padding: 18px 40px;

  .products-img {
    width: 100px;
    height: 130px;
  }

  .title-shop {
    color: #123e64;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 30px;
    font-size: 1.2rem;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .list-product {
    width: 240px;
    height: 320px;
    text-align: center;
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
    color: #123e64;
  }

  .product-price {
    font-weight: bold;
    color: #97adb1;
  }

  .btn-add-to-cart:hover {
    background: white;
    border: 1px solid #123e64;
    color: #123e64;
  }
`;
