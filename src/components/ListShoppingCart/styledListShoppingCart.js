import styled from 'styled-components';
import { GrAdd, GrFormSubtract } from 'react-icons/gr';
import { bluePrimaryColor } from '../../styles/images/color';

export const CartEmpty = styled.h3`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${bluePrimaryColor};
  font-weight: 100;
`;

export const ProductsInCart = styled.ul`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 450px;
  overflow: auto;
`;

export const ProductInCart = styled.li`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const ProductImg = styled.img`
  width: 100px;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  color: ${bluePrimaryColor};
`;

export const ProductInCartPrice = styled.p`
  color: #97adb1;
`;

export const AddRemoveProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

export const ChangeQuantity = styled.div`
  display: flex;
  border: 1px solid #b7b7b7;
  height: 40px;
  align-items: center;
  padding: 4px;
`;

export const SubtractIcon = styled(GrFormSubtract)`
  height: 25px;
  cursor: pointer;
  color: #6b9aac;
`;

export const AddIcon = styled(GrAdd)`
  height: 25px;
  cursor: pointer;
  color: #6b9aac;
`;

export const InputQuantity = styled.input`
  background: transparent;
  border: none;
  width: 40px;
  text-align: center;
  color: #6b9aac;
  font-weight: bold;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BtnRemove = styled.button`
  background: none;
  color: #6b9aac;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
