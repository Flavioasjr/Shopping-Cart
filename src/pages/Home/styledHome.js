import styled from 'styled-components';
import { bluePrimaryColor } from '../../styles/images/color';

export const StyledHome = styled.section`
  .home {
    position: absolute;
    top: 47%;
    padding-left: 30px;
  }

  .dark-home {
    height: 81vh;
  }

  .title-home {
    width: 350px;
    color: white;
    padding-bottom: 20px;
    letter-spacing: 2px;
    font-size: 1.3rem;
  }

  .btn-home {
    width: 250px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.45s;
  }

  .btn-home:hover,
  .btn-home:focus {
    box-shadow: inset 250px 0 0 0 white;
    border: 1px solid ${bluePrimaryColor};
    color: ${bluePrimaryColor};
  }
`;
