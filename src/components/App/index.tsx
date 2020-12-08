import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/Globalstyle";
import { darkTheme, lightTheme, col_1, col_2 } from "../../theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useLayout } from "../../hooks/useLayout";

import Home from "../../pages/Home";
import "fontsource-roboto";
import Header from "../Header";

const App = () => {
  const [theme, themeToggler]: any = useDarkMode();
  const [layout, layoutToggler]: any = useLayout();

  const combineCustomizations = () => {
    let customizations = {};
    if (theme === "dark") {
      customizations = { ...customizations, ...darkTheme };
    } else if (theme === "light") {
      customizations = { ...customizations, ...lightTheme };
    }

    if (layout === "col-1") {
      customizations = { ...customizations, ...col_1 };
    } else if (layout === "col-2") {
      customizations = { ...customizations, ...col_2 };
    }

    return customizations;
  };

  return (
    <ThemeProvider theme={combineCustomizations()}>
      <GlobalStyle />
      <Header
        theme={theme}
        themeToggler={themeToggler}
        layout={layout}
        layoutToggler={layoutToggler}
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
