import styled from 'styled-components';

export const StyledBuyProduct = styled.section`
  padding: 30px;

  .product {
    display: flex;
    gap: 50px;
  }

  .img-product {
    width: 350px;
  }

  .complete-product-information {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title-price-product {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 1px solid #deddd8;
  }

  .product-title {
    color: #123e64;
    text-transform: uppercase;
    font-size: 1.3rem;
  }

  .product-price {
    font-weight: bold;
    color: #97adb1;
    padding-bottom: 30px;
    font-size: 1.2rem;
  }

  .btn-add-to-cart:hover {
    background: white;
    border: 1px solid #123e64;
    color: #123e64;
  }

  .product-category {
    padding-bottom: 20px;
    text-transform: uppercase;
  }
`;
