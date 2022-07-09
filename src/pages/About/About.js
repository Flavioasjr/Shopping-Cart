import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import imgTheNow from '../../styles/images/about.jpg';
import imgFeeling from '../../styles/images/about2.jpg';
import { StyledAbout } from './styledAbout';

export default function About({ hideImgHome, shoppinCartIsShown }) {
  useEffect(() => {
    hideImgHome();
  }, []);
  return (
    <StyledAbout>
      {shoppinCartIsShown ? <div className="dark-background" /> : null}
      <div className="about">
        <div>
          <h3 className="title-about">OUR STORY</h3>
          <p className="subtitle-about">
            We exist for the “clothes in progress”. Ever-evolving and growing,
            striving to be better every.
          </p>
        </div>

        <div className="the-now">
          <img src={imgTheNow} alt="The now" className="img-the-now" />
          <div>
            <h4 className="title-the-now">THE NOW</h4>
            <p className="content-the-now">
              Brains and beauty, it all starts with our Buyers. We dedicate
              endless hours forecasting trends, spotting upcoming styles, and
              determining the colors, prints, fabrics and silhouettes, that are
              hot for every season. Studying and analyzing real time reports
              ensures the right products at the right prices are always
              available for you.
            </p>
          </div>
        </div>

        <div className="the-feeling">
          <div>
            <h4 className="title-the-feeling">THE FEELING</h4>
            <p className="content-the-feeling">
              Making you feel beautiful and confident is why we do it. Our
              In-House Design Team sketches and drapes new garments daily. In
              LA, where iconic style is born, our collective group of young
              Designers design for the woman–her body, her lifestyle, and where
              she is going. We mix function with style, creating clothes that
              are cute, sexy, effortlessly cool and comfy.
            </p>
          </div>
          <img src={imgFeeling} alt="The now" className="img-the-feeling" />
        </div>
      </div>
    </StyledAbout>
  );
}

About.propTypes = {
  hideImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
};
