import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import imgTheNow from '../../styles/images/about.jpg';
import imgFeeling from '../../styles/images/about2.jpg';
import * as Styled from './styledAbout';

export default function About({ hideImgHome, shoppinCartIsShown }) {
  useEffect(() => {
    hideImgHome();
  }, []);
  return (
    <Styled.SectionAbout>
      {shoppinCartIsShown ? (
        <Styled.DarkBackground title="dark-background" />
      ) : null}
      <Styled.About>
        <div>
          <Styled.TitleAbout>OUR STORY</Styled.TitleAbout>
          <Styled.SubtitleAbout>
            We exist for the “clothes in progress”. Ever-evolving and growing,
            striving to be better every.
          </Styled.SubtitleAbout>
        </div>

        <Styled.AboutContent>
          <Styled.ImgTheNow src={imgTheNow} alt="The now" />
          <div>
            <Styled.TitleContent>THE NOW</Styled.TitleContent>
            <Styled.ContentParagraph>
              Brains and beauty, it all starts with our Buyers. We dedicate
              endless hours forecasting trends, spotting upcoming styles, and
              determining the colors, prints, fabrics and silhouettes, that are
              hot for every season. Studying and analyzing real time reports
              ensures the right products at the right prices are always
              available for you.
            </Styled.ContentParagraph>
          </div>
        </Styled.AboutContent>

        <Styled.AboutContent>
          <div>
            <Styled.TitleContent>THE FEELING</Styled.TitleContent>
            <Styled.ContentParagraph>
              Making you feel beautiful and confident is why we do it. Our
              In-House Design Team sketches and drapes new garments daily. In
              LA, where iconic style is born, our collective group of young
              Designers design for the woman–her body, her lifestyle, and where
              she is going. We mix function with style, creating clothes that
              are cute, sexy, effortlessly cool and comfy.
            </Styled.ContentParagraph>
          </div>
          <Styled.ImgTheFeeling src={imgFeeling} alt="The feeling" />
        </Styled.AboutContent>
      </Styled.About>
    </Styled.SectionAbout>
  );
}

About.propTypes = {
  hideImgHome: PropTypes.func.isRequired,
  shoppinCartIsShown: PropTypes.bool.isRequired,
};
