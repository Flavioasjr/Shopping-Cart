import styled from 'styled-components';

export const Home = styled.div`
  position: absolute;
  top: 47%;
  padding-left: 30px;
`;

export const TitleHome = styled.h3`
  width: 350px;
  color: white;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 1.3rem;
`;

export const ButtonLink = styled.button`
  width: 250px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.45s;
  &:hover,
  &:focus {
    box-shadow: inset 250px 0 0 0 white;
    border: 1px solid var(--blue-primary-color);
    color: var(--blue-primary-color);
  }
`;

export const DarkBackground = styled.div`
  background-color: #0000005e;
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  height: 81vh;
`;
