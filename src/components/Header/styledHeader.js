import styled from 'styled-components';
import { bluePrimaryColor } from '../../styles/images/color';

export const StyledHeader = styled.header`
  position: relative;

  .header {
    padding: 18px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }

  .border-header {
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0px 1px 5px 0px #dfdfdf;
  }

  .list-links {
    display: flex;
    gap: 10px;
  }

  .title-header {
    text-align: center;
  }

  .btn-show-shoppingcart {
    background: none;
    color: black;
    position: relative;
  }

  .shoppingcart-icon {
    width: 19px;
    height: 23px;
  }

  .top-header {
    background-color: ${bluePrimaryColor};
    color: white;
    padding: 10px 30px;
    text-align: center;
    font-size: 0.9rem;
  }

  .link-white {
    color: white;
  }

  .quantity-product-in-cart {
    position: absolute;
    top: 24px;
    right: 14px;
    background: #f44336;
    color: white;
    height: 15px;
    border-radius: 50%;
    width: 15px;
  }
`;
