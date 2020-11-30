import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/Globalstyle";
import { darkTheme, lightTheme } from "../../theme";
import { useDarkMode } from "../../hooks/useDarkMode";

import Home from "../../pages/Home";
import "fontsource-roboto";
import Header from "../Header";

const App = () => {
  const [theme, themeToggler]: any = useDarkMode();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header themeToggler={themeToggler} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
