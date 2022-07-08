import React from 'react';
import img from '../../styles/images/img2.jpg';

export default function ImgHome() {
  return (
    <div className="background-img">
      <img src={img} alt="test" className="img-home" />
    </div>
  );
}
