import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 50%;

    @media ${device.mobileM} {
      font-size: 62.5%;
    }
    
    @media ${device.desktop} {
      font-size: 100%;
    }
  }
  body {
    margin: 0px;
    padding: 0px;
    font-family: roboto;
    background-color: #1d1d1d;
  }
`;

export default GlobalStyle;
