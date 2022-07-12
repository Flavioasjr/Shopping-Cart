import styled from 'styled-components';
import { BsBag } from 'react-icons/bs';
import { bluePrimaryColor } from '../../styles/images/color';

export const Header = styled.header`
  position: relative;
`;

export const DarkBackground = styled.div`
  background-color: #0000005e;
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const TopHeader = styled.div`
  background-color: ${bluePrimaryColor};
  color: white;
  padding: 10px 30px;
  text-align: center;
  font-size: 0.9rem;
`;

export const BottomHeader = styled.div`
  padding: 18px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const ListLinks = styled.ul`
  display: flex;
  gap: 10px;
`;

export const BtnShowShoppingcart = styled.button`
  background: none;
  color: black;
  position: relative;
  color: ${(props) => (props.showImgHome ? 'white' : 'black')};
`;

export const QuantityProductInCart = styled.div`
  position: absolute;
  top: 24px;
  right: 14px;
  background: #f44336;
  color: white;
  height: 15px;
  border-radius: 50%;
  width: 15px;
`;

export const BorderHeader = styled.div`
  border-bottom: ${(props) =>
    props.showImgHome ? 'none' : '1px solid #dfdfdf'};
  box-shadow: ${(props) =>
    props.showImgHome ? 'none' : '0px 1px 5px 0px #dfdfdf'};
`;

export const StyleLink = styled.p`
  color: ${(props) => (props.showImgHome ? 'white' : 'black')};
`;

export const TitleHeader = styled.div`
  text-align: center;
  color: ${(props) => (props.showImgHome ? 'white' : 'black')};
`;

export const BagIcon = styled(BsBag)`
  height: 21px;
  width: 20px;
`;
