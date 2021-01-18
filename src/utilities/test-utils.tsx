import React from "react";
import { Provider } from "react-redux";
import ThemeProvider from "../theme/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { ThemeEnum } from "../store/preferences/types";
import { RootState } from "../store/rootReducer";

interface AllTheProvidersProps {
  children?: any;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  const middlewares: any[] = [];
  const mockStore = configureStore(middlewares);

  const intialState: RootState = {
    preferences: {
      isPreferencesClicked: false,
      theme: ThemeEnum.NIGHT,
      isOneColumnLayout: true,
    },
    stories: {
      list: [],
      startAt: 0,
      pending: false,
      error: null,
    },
    user: {
      info: null,
      pending: false,
      error: null,

      stories: {
        list: [],
        startAt: 0,
        pending: false,
        error: null,
      },
    },
  };
  const store = mockStore(intialState);

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider>{children}</ThemeProvider>
      </Router>
    </Provider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
