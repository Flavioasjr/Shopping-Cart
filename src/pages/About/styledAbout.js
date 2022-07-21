import styled from 'styled-components';

export const SectionAbout = styled.section`
  position: relative;
`;

export const DarkBackground = styled.div`
  background-color: #0000005e;
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const About = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const TitleAbout = styled.h3`
  color: var(--blue-primary-color);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 15px;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

export const SubtitleAbout = styled.p`
  text-align: center;
  font-size: 1.1rem;
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  max-width: 900px;
`;

export const TitleContent = styled.h4`
  letter-spacing: 2px;
  color: var(--blue-primary-color);
  padding-bottom: 15px;
  font-size: 1.2rem;
`;

export const ContentParagraph = styled.p`
  text-align: justify;
`;

export const ImgTheNow = styled.img`
  width: 400px;
`;

export const ImgTheFeeling = styled.img`
  height: 450px;
`;
