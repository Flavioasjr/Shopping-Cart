import { createGlobalStyle } from 'styled-components';
import { bluePrimaryColor } from './images/color';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

html, border-style, #root {
  height: 100%;
}

button {
  cursor: pointer;
  border: none;
  color: #fff;
  padding: 10px 20px;
  background-color: ${bluePrimaryColor};
  font-weight: bold;
}

a {
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
}
`;
