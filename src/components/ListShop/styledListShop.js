import styled from 'styled-components';

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ListProduct = styled.li`
  width: 240px;
  height: 345px;
  text-align: center;
  background: white;
  box-shadow: 0px 1px 5px 0px #dfdfdf;
  padding: 15px 10px;
  border-radius: 8px;
`;

export const ProductImg = styled.img`
  width: 100px;
  height: 130px;
`;

export const ProductData = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 110px;
`;

export const ProductTitle = styled.p`
  text-transform: uppercase;
  color: var(--blue-primary-color);
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #97adb1;
`;

export const AddToCart = styled.div`
  margin-bottom: 5px;
`;

export const BtnAddToCart = styled.button`
  &:hover {
    background: white;
    border: 1px solid var(--blue-primary-color);
    color: var(--blue-primary-color);
  }
`;

export const BtnDetails = styled.button`
  background: #f7f7f7;
  color: #123e64;
  border: 1px solid #123e64;
`;
