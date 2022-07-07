import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  overflow: ${(props) => (props.shoppinCartIsShown ? 'hidden' : 'auto')};
}

html, border-style, #root {
  height: 100%;
}

button {
  cursor: pointer;
  border: none;
  color: #fff;
  padding: 10px 20px;
  background-color: #123e64;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
}

.dark-background {
  background-color: #0000005e;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: absolute;
}

.shopping-cart {
  overflow: auto !important;
}
`;
