import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import GlobalStyle from "./Globalstyle";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { ThemeEnum } from "../store/preferences/types";
import {
  darkTheme,
  nightTheme,
  lightTheme,
  col_1,
  col_2,
} from "./customizations";

const ThemeProvider = ({ children }: any) => {
  const theme = useSelector((state: RootState) => state.preferences.theme);
  const isOneColumnLayout = useSelector(
    (state: RootState) => state.preferences.isOneColumnLayout
  );

  const combineCustomizations = (): any => {
    let preferences = {};
    switch (theme) {
      case ThemeEnum.DARK:
        preferences = { ...preferences, ...darkTheme };
        break;
      case ThemeEnum.NIGHT:
        preferences = { ...preferences, ...nightTheme };
        break;
      case ThemeEnum.LIGHT:
        preferences = { ...preferences, ...lightTheme };
        break;
    }

    if (isOneColumnLayout) {
      preferences = { ...preferences, ...col_1 };
    } else {
      preferences = { ...preferences, ...col_2 };
    }

    return preferences;
  };

  return (
    <Provider theme={combineCustomizations()}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
