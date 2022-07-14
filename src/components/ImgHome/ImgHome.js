import React from 'react';
import img from '../../styles/images/img2.jpg';
import * as Styled from './styledImgHome';

export default function ImgHome() {
  return (
    <Styled.BackgroundImg>
      <Styled.Img src={img} alt="home" data-testid="image" />
    </Styled.BackgroundImg>
  );
}
