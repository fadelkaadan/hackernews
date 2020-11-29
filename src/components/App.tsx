import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "../pages/Home";
import "fontsource-roboto";

const theme = {
  main: {
    background: "#1d1d1d",
    text: {
      primary: "#e7e7e7",
      secondary: "#cccccc"
    }
  },
  cards: {
    background: "#2b2b2b",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: roboto;
    background-color: #1d1d1d;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
