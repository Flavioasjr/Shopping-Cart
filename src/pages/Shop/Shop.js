import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styledShop';
import ListShop from '../../components/ListShop/ListShop';

export default function Shop({
  productsData,
  hideImgHome,
  shoppinCartIsShown,
  addProductInCart,
}) {
  useEffect(() => {
    hideImgHome();
  }, []);

  return (
    <Styled.DivShop>
      {shoppinCartIsShown ? <Styled.DarkBackground /> : null}
      <Styled.Shop>
        <Styled.TitleShop>
          <h3>OUR PRODUCTS</h3>
        </Styled.TitleShop>
        <ListShop
          productsData={productsData}
          addProductInCart={addProductInCart}
        />
      </Styled.Shop>
    </Styled.DivShop>
  );
}

Shop.propTypes = {
  productsData: PropTypes.array.isRequired,
  hideImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
  addProductInCart: PropTypes.func.isRequired,
};
