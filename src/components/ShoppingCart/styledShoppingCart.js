import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const ShoppingCart = styled.section`
  position: fixed;
  right: 0;
  background: white;
  z-index: 2;
  width: 400px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 88px 1fr 50px;
`;

export const HeaderCart = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--blue-primary-color);
`;

export const IconClose = styled(AiOutlineClose)`
  width: 30px;
  height: 28px;
  color: #7c7c7c;
  cursor: pointer;
`;

export const BuyNow = styled.div`
  text-align: center;
  padding: 0 30px;
`;

export const BtnBuyNow = styled.button`
  width: 100%;
  transition: 0.8s;
  &:hover {
    box-shadow: inset 340px 0 0 0 white;
    border: 1px solid var(--blue-primary-color);
    color: var(--blue-primary-color);
  }
`;
