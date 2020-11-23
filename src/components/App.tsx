import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "./Home";
import "fontsource-roboto";

const theme = {
  main: {
    background: "#2b2b2b",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: roboto;
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
