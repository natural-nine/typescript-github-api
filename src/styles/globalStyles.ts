import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
	  vertical-align: baseline;
	font: inherit;
	vertical-align: baseline;
  }
  body {
  box-sizing: border-box;
  background-color: #f6f9fa;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  html{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
`;

export default GlobalStyles;
