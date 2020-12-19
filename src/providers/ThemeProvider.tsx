import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import GlobalStyle from "../theme/Globalstyle";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { darkTheme, lightTheme, col_1, col_2 } from "../theme/customizations";

const ThemeProvider = ({ children }: any) => {
  const isDarkmode = useSelector((state: RootState) => state.Theme.isDarkmode);
  const isOneColumnLayout = useSelector(
    (state: RootState) => state.Theme.isOneColumnLayout
  );

  const combineCustomizations = (): any => {
    let customizations = {};
    if (isDarkmode) {
      customizations = { ...customizations, ...darkTheme };
    } else {
      customizations = { ...customizations, ...lightTheme };
    }

    if (isOneColumnLayout) {
      customizations = { ...customizations, ...col_1 };
    } else {
      customizations = { ...customizations, ...col_2 };
    }

    return customizations;
  };

  return (
    <Provider theme={combineCustomizations()}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
