import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/Globalstyle";
import { darkTheme, lightTheme } from "../theme";
import Home from "../pages/Home";
import "fontsource-roboto";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
