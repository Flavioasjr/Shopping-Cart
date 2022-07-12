import styled from 'styled-components';
import { bluePrimaryColor } from '../../styles/images/color';

export const BuyProduct = styled.section`
  position: relative;
`;

export const DarkBackground = styled.div`
  background-color: #0000005e;
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const BuyProductContent = styled.div`
  padding: 30px;
`;

export const Product = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const ImgProduct = styled.img`
  width: 350px;
`;

export const CompleteProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
`;

export const TitlePriceProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #deddd8;
`;

export const ProductTitle = styled.h3`
  color: ${bluePrimaryColor};
  text-transform: uppercase;
  font-size: 1.3rem;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #97adb1;
  padding-bottom: 30px;
  font-size: 1.2rem;
`;

export const ProductDescription = styled.div`
  text-align: justify;
`;

export const ProductCategory = styled.p`
  padding-bottom: 20px;
  text-transform: uppercase;
`;

export const BtnAddToCart = styled.button`
  &:hover {
    background: white;
    border: 1px solid ${bluePrimaryColor};
    color: ${bluePrimaryColor};
  }
`;
