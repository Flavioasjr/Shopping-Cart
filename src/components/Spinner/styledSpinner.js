import styled from 'styled-components';
import { bluePrimaryColor } from '../../styles/images/color';

export const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpinnerText = styled.h4`
  margin: 5px;
  color: ${bluePrimaryColor};
  font-size: 1.5rem;
`;

export const Loader = styled.div`
  height: '5em';
  width: '5em';
  font-size: 10px;
  margin: 10px;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: ${bluePrimaryColor};
  background: -moz-linear-gradient(
    left,
    ${bluePrimaryColor} 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${bluePrimaryColor} 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${bluePrimaryColor} 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${bluePrimaryColor} 10%,
    rgba(128, 0, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${bluePrimaryColor} 10%,
    rgba(128, 0, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  animation-name: load3;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${bluePrimaryColor};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
