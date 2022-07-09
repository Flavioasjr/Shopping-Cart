import styled from 'styled-components';
import { bluePrimaryColor } from '../../styles/images/color';

export const StyledAbout = styled.section`
  position: relative;

  .about {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .title-about {
    color: ${bluePrimaryColor};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 15px;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  .subtitle-about {
    text-align: center;
    font-size: 1.1rem;
  }

  .the-now,
  .the-feeling {
    display: flex;
    gap: 40px;
    align-items: center;
    max-width: 900px;
  }

  .img-the-now {
    width: 400px;
  }

  .title-the-now,
  .title-the-feeling {
    letter-spacing: 2px;
    color: ${bluePrimaryColor};
    padding-bottom: 15px;
    font-size: 1.2rem;
  }

  .content-the-now,
  .content-the-feeling {
    text-align: justify;
  }

  .img-the-feeling {
    height: 450px;
  }
`;
