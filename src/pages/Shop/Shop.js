import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import * as Styled from './styledShop';
import ListShop from '../../components/ListShop/ListShop';

export default function Shop({ hideImgHome }) {
  useEffect(() => {
    hideImgHome();
  }, []);

  const shoppingCartIsShow = useSelector((state) => state.shoppingCartIsShow);

  return (
    <Styled.DivShop>
      {shoppingCartIsShow ? <Styled.DarkBackground /> : null}
      <Styled.Shop>
        <Styled.TitleShop>
          <h3>OUR PRODUCTS</h3>
        </Styled.TitleShop>
        <ListShop />
      </Styled.Shop>
    </Styled.DivShop>
  );
}

Shop.propTypes = {
  hideImgHome: PropTypes.func.isRequired,
};
